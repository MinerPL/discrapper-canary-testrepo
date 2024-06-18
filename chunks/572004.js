"use strict";
n.d(t, {
  JG: function() {
    return a
  },
  wS: function() {
    return o
  }
}), n(411104);
var i = n(852229),
  r = n(358085),
  s = n(998502);
let o = (() => {
  if (r.isPlatformEmbedded) return null != s.ZP.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function a(e) {
  return !!o && (r.isPlatformEmbedded ? (s.ZP.copy(e), !0) : i.J(e))
}