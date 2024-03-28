"use strict";
r.r(t);
var n = r("924102"),
  a = r("675717");
t.default = function(e, t, r) {
  var o = !0,
    i = !0;
  if ("function" != typeof e) throw TypeError("Expected a function");
  return (0, a.default)(r) && (o = "leading" in r ? !!r.leading : o, i = "trailing" in r ? !!r.trailing : i), (0, n.default)(e, t, {
    leading: o,
    maxWait: t,
    trailing: i
  })
}