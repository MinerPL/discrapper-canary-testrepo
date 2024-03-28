"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
}), l("47120");
var a = l("451467"),
  s = l("37113");

function n(e, t, l) {
  for (let n of s.ApplicationStreamPresetValues[e])
    if ((0, a.default)(e, n.resolution, n.fps, t, l)) return [n.resolution, n.fps];
  return null
}