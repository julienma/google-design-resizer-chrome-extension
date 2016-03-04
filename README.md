# Google Design Resizer - Chrome Extension

Download extension at https://chrome.google.com/webstore/detail/google-design-resizer/mkmgkfcdbabajchggfiebcaoghcajmki?hl=fr&gl=FR.

## Description

Overlay the Resizer tool from Google (http://g.co/design/resizer) loaded with the current page.
Preview your page at different breakpoints (desktop, mobile, tablet) in the new interactive viewer from Google. And without even opening a new tab!

It also works with localhost / 127.0.0.1 URLs, perfect when developing locally!

![](https://raw.githubusercontent.com/julienma/google-design-resizer-chrome-extension/master/_sources/exports/shots-promo-920.png)

USAGE

Click the button, and an overlay of Google Resizer (http://g.co/design/resizer) with the current URL loaded will be displayed.
Click again to hide the overlay and get back to your website.

ATTENTION

Due to how Google Resizer currently works, this will not work on HTTPS pages.

FEEDBACK

Provided "as is".
It may still have bugs, please report them on https://github.com/julienma/google-design-resizer-chrome-extension/issues

NOTE

This is not affiliated in any way with Google.
Some materials are © Google, most notably the source picture (https://design.google.com/resizer/images/share.png) used for the icon and the website (http://design.google.com/resizer/) loaded within the frame.

## Dev

```
gulp watch
```

## Package

```
gulp
gulp package
```

A `.zip`file will be generated.
Make sure it includes all your files, especially the `.js` you might have added.

## Roadmap

- [x] Use [xip.io](http://xip.io/) to serve localhost URLs
- [ ] Make it clear when extension is enabled / disabled. Add a "real overlay" effect, with some padding and dimmed background?
- [ ] More visible message when extension doesn't work (because https / x-frame-options)
- [ ] Some pages don't work, like [stackoverflow.com](http://stackoverflow.com/). Mainly because they have a X-Frame-Options set, but not only.
- [ ] Should work with HTTPS page (wait for http://design.google.com/resizer/ to be available on HTTPS?)
