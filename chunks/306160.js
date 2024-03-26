"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return o
  },
  copy: function() {
    return a
  }
}), n("70102");
var r = n("281071"),
  i = n("773336"),
  s = n("50885");
let o = (() => {
  if (i.isPlatformEmbedded) return null != s.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function a(e) {
  return !!o && (i.isPlatformEmbedded ? (s.default.copy(e), !0) : r.copy(e))
}