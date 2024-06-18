"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(695346),
  r = n(131951),
  s = n(36703);

function o(e) {
  let t = function() {
    var e;
    let t = i.kU.getSetting();
    return (0, s.P)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
  }();
  return Math.min(e * t * Math.min(r.Z.getOutputVolume() / 100, 1), 1)
}