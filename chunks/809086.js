n.d(t, {
  Z: function() {
return c;
  },
  e: function() {
return d;
  }
});
var a = n(735250);
n(470079);
var r = n(468194),
  i = n(477690),
  o = n(166081),
  s = n(841762);
let l = (0, r.Mg)(i.Z.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function c(e) {
  let {
listing: t,
imageSize: n,
alt: r,
...i
  } = e, s = (0, o.U)(t, n);
  return (0, a.jsx)('img', {
src: s,
alt: r,
...i
  });
}

function d(e) {
  let {
listing: t,
aspectRatio: n = 16 / 9,
height: r,
...i
  } = e, c = (r - 2 * l) * n, d = (0, o.U)(t, c), u = (0, o.U)(t, c, {
shouldAnimate: !1
  });
  return (0, a.jsx)(s.Z, {
src: d,
backgroundSrc: u,
aspectRatio: n,
...i
  });
}