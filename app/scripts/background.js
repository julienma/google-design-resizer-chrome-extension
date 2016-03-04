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

// Inspect HEADERS on the fly to force load the page within an iframe.
// For each header received
chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
      // since only one tab should be active and in the current window at once
      // the return variable should only have one entry
      var activeTab = arrayOfTabs[0];
      // get current tab's url
      var activeTabUrl = activeTab.url;

      // loop over each responseHeader
      for (var i = 0; i < details.responseHeaders.length; ++i) {
        // the header's URL is same than tab's URL, and that header has an x-frame-options set
        if (details.url ==  activeTabUrl && details.responseHeaders[i].name === 'X-Frame-Options' && (details.responseHeaders[i].value == 'SAMEORIGIN' || details.responseHeaders[i].value == 'DENY')) {
          // console.log(JSON.stringify(details));
          console.warn('Cannot activate this extension on this page as X-Frame-Options header is set on', details.url);
          break;
        }
      }
    });
  },
  {urls: ['<all_urls>']},
  ['responseHeaders']);
