# Google Design Resizer - Chrome Extension

Download extension at https://chrome.google.com/webstore/detail/google-design-resizer/mkmgkfcdbabajchggfiebcaoghcajmki?hl=fr&gl=FR.

## Description

Overlay the Resizer tool from Google (https://material.io/resizer/) loaded with the current page.
Preview your page at different breakpoints (desktop, mobile, tablet) in the new interactive viewer from Google. And without even opening a new tab!

It also works with localhost / 127.0.0.1 URLs, perfect when developing locally!

![](https://raw.githubusercontent.com/julienma/google-design-resizer-chrome-extension/master/_sources/exports/shots-promo-920.png)

USAGE

Click the button, and an overlay of [Google Material Design Resizer](https://material.io/resizer/) with the current URL loaded will be displayed.
Click again to hide the overlay and get back to your website.

REQUIRES HTTPS

The extension now supports HTTPS pages.
Actually, it's more than that: Google Resizer now **requires HTTPS pages**. Using the extension (or directly the [Google Resizer website](https://material.io/resizer/)) on an HTTP-only website will make Google Resizer enter an infinite refresh loop.

This is due to Google Resizer forcing the [`Upgrade-Insecure-Requests` header](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/fixing-mixed-content#upgrading_insecure_requests), which forces any HTTP resource to be loaded over HTTPS. This directive **cascades to iframes**, meaning that non-HTTPS page will never be loaded by Google Resizer tool.

As most websites are now available over HTTPS, the main issue with that is local development.
To make your local pages available over HTTPS, you can either:
- enable HTTPS on your local server. E.g see the [`https` option in BrowserSync](https://browsersync.io/docs/options#option-https)
- use an SSL proxy like [ngrok](https://ngrok.com/docs#bind-tls).

FEEDBACK

Provided "as is".
It may still have bugs, please report them on https://github.com/julienma/google-design-resizer-chrome-extension/issues

NOTE

This is not affiliated in any way with Google.
Some materials are © Google, most notably the source picture (https://material.io/resizer/static/material-io-nav/static/images/resizer_dark.svg) used for the icon and the website (https://material.io/resizer/) loaded within the frame.

## Dev

```
gulp watch
```

## Package

```
gulp
gulp package
```

A `.zip` file will be generated.
Make sure it includes all your files, especially the `.js` you might have added.

## Roadmap

- [x] Use [xip.io](http://xip.io/) to serve localhost URLs
- [ ] Make it clear when extension is enabled / disabled. Add a "real overlay" effect, with some padding and dimmed background?
- [ ] More visible message when extension doesn't work (because https not available / x-frame-options)
- [ ] Some pages don't work, like [stackoverflow.com](http://stackoverflow.com/). Mainly because they have a X-Frame-Options set, but not only.
- [x] Should work with HTTPS page
