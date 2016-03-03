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

// Create an iframe and load Resizer within
function createOverlay() {
  $('<iframe>', {
    src: 'http://g.co/design/resizer#device=' + device + '&url=' + encodeURI(url),
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
