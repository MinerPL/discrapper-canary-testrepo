"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(47120);
var i = n(280098),
  r = n(37113);

function s(e, t, n, s, o) {
  for (let a of r.ND)
    if ((null == a.preset || e === a.preset) && t === a.resolution && n === a.fps && (0, i.Z)(a, s, o)) return !0;
  return !1
}