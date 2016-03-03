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
