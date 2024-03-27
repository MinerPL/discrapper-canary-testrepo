"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return s
  },
  copy: function() {
    return r
  }
}), n("70102");
var i = n("281071"),
  a = n("773336"),
  l = n("50885");
let s = (() => {
  if (a.isPlatformEmbedded) return null != l.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function r(e) {
  return !!s && (a.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
}