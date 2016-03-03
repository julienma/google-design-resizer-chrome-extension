'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // load jQuery, then load our script
  chrome.tabs.executeScript(null, { file: 'scripts/jquery.min.js' }, function() {
      chrome.tabs.executeScript(null, { file: 'scripts/overlay.js' });
  });
});

// Change HEADERS on the fly to force load the page within an iframe.
// For each header received
chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    // loop over each responseHeader
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      // for the x-frame-options
      if (details.responseHeaders[i].name === 'X-Frame-Options') {
        // console.log(JSON.stringify(details));
        console.warn('Remove X-Frame-Options header from', details.url)
        // remove that header
        details.responseHeaders.splice(i, 1);
        break;
      }
    }
    // return the modified header, which will be used by the browser
    return {responseHeaders: details.responseHeaders};
  },
  {urls: ['<all_urls>']},
  ['blocking', 'responseHeaders']);
