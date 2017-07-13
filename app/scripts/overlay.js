// Get current URL
var url = document.location.href;

// Overlay ID. Should be unique, so we don't mess with current page.
overlayId = 'chromeextensionresizeriframeoverlay';

// Default device
// Values:
// - '' (empty): multi-mode
// - 'window': desktop
// - 'handset': mobile
device = 'window';

// give back a *.xip.io URL if given URL is detected as 'local'
function checkUrl(url) {
  // 'https://localhost:3000/jlong/2428561?foo=bar#test'
  var parsedUrl = new URL(url);

  // check if we're on a localhost page
  if (parsedUrl.hostname == 'localhost' || parsedUrl.hostname == '127.0.0.1') {
    // special case for 'localhost'
    if (parsedUrl.hostname == 'localhost') {
      parsedUrl.hostname = '127.0.0.1';
    }

    // append .xip.io
    parsedUrl.hostname = parsedUrl.hostname + '.xip.io';
  }

  // return full, modified URL
  return parsedUrl.href;
}

// Create an iframe and load Resizer within
function createOverlay() {
  // check URL, adapt it for local dev if required
  if (correctUrl = checkUrl(url)) {
    $('<iframe>', {
      src: 'https://material.io/resizer/#device=' + device + '&url=' + encodeURI(correctUrl),
      id:  overlayId,
      frameborder: 0,
      scrolling: 'yes'
    })
    .css({
      height: '100%',
      width: '100%',
      position: 'fixed',
      top: '0',
      'z-index': '99999'
    })
    .appendTo('body');
  }
}

// Anonymous "self-invoking" function
(function() {
  // Check if the overlay exists
  if ($('#' + overlayId).length) {
    // destroy it
    $('#' + overlayId).fadeToggle('');
  } else {
    // or create it
    console.log('Loading Google Resizer for', url);
    createOverlay();
  }
})();
