"use strict";
r.r(t), r.d(t, {
  default: function() {
    return o
  }
}), r("70102");
var n = r("964020"),
  a = r("794666"),
  o = function(e, t, r) {
    var o = !0,
      i = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    return (0, a.default)(r) && (o = "leading" in r ? !!r.leading : o, i = "trailing" in r ? !!r.trailing : i), (0, n.default)(e, t, {
      leading: o,
      maxWait: t,
      trailing: i
    })
  }