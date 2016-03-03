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

  // check if we're on a HTTPS page
  if (parsedUrl.protocol == 'https:') {
    console.log('Sorry, this extension doesn\'t (yet) work on HTTPS pages :(');
    return false;
  }

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
      src: 'http://g.co/design/resizer#device=' + device + '&url=' + encodeURI(correctUrl),
      id:  overlayId,
      frameborder: 0,
      scrolling: 'yes',
    })
    .css({
      height: $(window).height(),
      width: $(window).width(),
      position: 'fixed',
      top: '0',
      'z-index': '10000'
    })
    .appendTo('body');
  }
}

// Anonymous "self-invoking" function
(function() {
  // Check if the overlay exists
  if ($('#' + overlayId).length) {
    // destroy it
    $('#' + overlayId).remove();
  } else {
    // or create it
    console.log('Loading Google Resizer for', url);
    createOverlay();
  }
})();
