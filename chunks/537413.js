"use strict";
n.d(t, {
  Z: function() {
    return a
  }
}), n(47120);
var l = n(451467),
  s = n(37113);

function a(e, t, n) {
  for (let a of s.no[e])
    if ((0, l.Z)(e, a.resolution, a.fps, t, n)) return [a.resolution, a.fps];
  return null
}