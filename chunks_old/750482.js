"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  },
  MonetizationListingImageAspectStable: function() {
    return u
  }
});
var a = s("37983");
s("884691");
var l = s("617258"),
  n = s("769846"),
  i = s("801765"),
  r = s("955735");
let o = (0, l.cssValueToNumber)(n.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function d(e) {
  let {
    listing: t,
    imageSize: s,
    alt: l,
    ...n
  } = e, r = (0, i.useListingThumbnailUrl)(t, s);
  return (0, a.jsx)("img", {
    src: r,
    alt: l,
    ...n
  })
}

function u(e) {
  let {
    listing: t,
    aspectRatio: s = 16 / 9,
    height: l,
    ...n
  } = e, d = (l - 2 * o) * s, u = (0, i.useListingThumbnailUrl)(t, d), c = (0, i.useListingThumbnailUrl)(t, d, {
    shouldAnimate: !1
  });
  return (0, a.jsx)(r.default, {
    src: u,
    backgroundSrc: c,
    aspectRatio: s,
    ...n
  })
}