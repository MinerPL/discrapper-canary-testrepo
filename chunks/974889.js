"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
});
var s = i("773336"),
  n = i("50885"),
  l = i("870346");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = l.default.getWindow(e);
  null != i && !i.closed && (s.isPlatformEmbedded ? n.default.focus(e, t) : i.focus())
}