"use strict";
a.r(e), a.d(e, {
  MonetizationListingImageAspectStable: function() {
    return c
  },
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("468194"),
  l = a("477690"),
  i = a("166081"),
  r = a("841762");
let u = (0, s.cssValueToNumber)(l.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function o(t) {
  let {
    listing: e,
    imageSize: a,
    alt: s,
    ...l
  } = t, r = (0, i.useListingThumbnailUrl)(e, a);
  return (0, n.jsx)("img", {
    src: r,
    alt: s,
    ...l
  })
}

function c(t) {
  let {
    listing: e,
    aspectRatio: a = 16 / 9,
    height: s,
    ...l
  } = t, o = (s - 2 * u) * a, c = (0, i.useListingThumbnailUrl)(e, o), d = (0, i.useListingThumbnailUrl)(e, o, {
    shouldAnimate: !1
  });
  return (0, n.jsx)(r.default, {
    src: c,
    backgroundSrc: d,
    aspectRatio: a,
    ...l
  })
}