"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var n = r("557916"),
  a = r("723347"),
  o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  i = /^\w*$/,
  u = function(e, t) {
    if ((0, n.default)(e)) return !1;
    var r = typeof e;
    return !!("number" == r || "symbol" == r || "boolean" == r || null == e || (0, a.default)(e)) || i.test(e) || !o.test(e) || null != t && e in Object(t)
  }