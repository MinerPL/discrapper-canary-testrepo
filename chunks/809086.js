"use strict";
t.d(s, {
  Z: function() {
    return c
  },
  e: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var i = t(468194),
  l = t(477690),
  a = t(166081),
  r = t(841762);
let o = (0, i.Mg)(l.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function c(e) {
  let {
    listing: s,
    imageSize: t,
    alt: i,
    ...l
  } = e, r = (0, a.U)(s, t);
  return (0, n.jsx)("img", {
    src: r,
    alt: i,
    ...l
  })
}

function d(e) {
  let {
    listing: s,
    aspectRatio: t = 16 / 9,
    height: i,
    ...l
  } = e, c = (i - 2 * o) * t, d = (0, a.U)(s, c), u = (0, a.U)(s, c, {
    shouldAnimate: !1
  });
  return (0, n.jsx)(r.Z, {
    src: d,
    backgroundSrc: u,
    aspectRatio: t,
    ...l
  })
}