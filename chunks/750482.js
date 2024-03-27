"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  },
  MonetizationListingImageAspectStable: function() {
    return u
  }
});
var l = a("37983");
a("884691");
var s = a("617258"),
  n = a("769846"),
  i = a("801765"),
  r = a("955735");
let d = (0, s.cssValueToNumber)(n.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function o(e) {
  let {
    listing: t,
    imageSize: a,
    alt: s,
    ...n
  } = e, r = (0, i.useListingThumbnailUrl)(t, a);
  return (0, l.jsx)("img", {
    src: r,
    alt: s,
    ...n
  })
}

function u(e) {
  let {
    listing: t,
    aspectRatio: a = 16 / 9,
    height: s,
    ...n
  } = e, o = (s - 2 * d) * a, u = (0, i.useListingThumbnailUrl)(t, o), c = (0, i.useListingThumbnailUrl)(t, o, {
    shouldAnimate: !1
  });
  return (0, l.jsx)(r.default, {
    src: u,
    backgroundSrc: c,
    aspectRatio: a,
    ...n
  })
}