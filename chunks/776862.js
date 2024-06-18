"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(358085),
  r = n(998502),
  s = n(522474);

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = s.Z.getWindow(e);
  if (null != n && !n.closed) i.isPlatformEmbedded ? r.ZP.focus(e, t) : n.focus()
}