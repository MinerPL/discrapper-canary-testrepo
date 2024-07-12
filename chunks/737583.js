t.d(n, {
  J: function() {
return a;
  },
  l: function() {
return o;
  }
}), t(47120);
var l = t(693824),
  r = t(169040);

function a(e) {
  let n, {
canvas: t,
badges: a,
startPosition: o,
maxWidth: i
  } = e;
  for (let {
  iconPath: e,
  text: u
}
of(t.setFont({
  size: 12,
  truncate: l.GX.None
}), a)) {
let l = null != n ? n.w + n.x + r.PW : o,
  a = null != n ? n.w + n.x + r.PW + r.NC : o + r.NC;
t.drawPath(e, {
  x: l,
  y: r.f0
}, !0, 0.6), n = t.drawText(u, {
  x: a,
  y: r.m2,
  w: i
}, !0);
  }
}

function o(e) {
  let {
canvas: n,
avatarSrcs: t,
position: {
  x: r,
  y: a
},
avatarImageSize: o
  } = e;
  for (let e = 0; e < t.length; e++)
e < t.length - 1 && n.clipRoundedRect({
  x: r + (e + 1) * (o - 8) - 2,
  y: a - 1,
  w: o + 2,
  h: o + 2
}, o / 2, !0), n.drawRoundedImage(t[e], {
  x: r + e * (o - 8),
  y: a
}, {
  w: o,
  h: o
}, 50, {
  fillMode: l.JU.Cover
}), n.restoreContext();
}