"use strict";
n.r(t), n.d(t, {
  SUPPORTS_COPY: function() {
    return s
  },
  copy: function() {
    return o
  }
}), n("70102");
var i = n("281071"),
  r = n("773336"),
  l = n("50885");
let s = (() => {
  if (r.isPlatformEmbedded) return null != l.default.copy;
  try {
    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
  } catch (e) {
    return !1
  }
})();

function o(e) {
  return !!s && (r.isPlatformEmbedded ? (l.default.copy(e), !0) : i.copy(e))
}