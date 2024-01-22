"use strict";
var r = n("459078"),
  i = n("911718"),
  o = n("589746"),
  s = i("%TypeError%"),
  a = i("%Function.prototype.apply%"),
  c = i("%Function.prototype.call%"),
  u = i("%Reflect.apply%", !0) || r.call(c, a),
  d = i("%Object.defineProperty%", !0),
  l = i("%Math.max%");
if (d) try {
  d({}, "a", {
    value: 1
  })
} catch (e) {
  d = null
}
e.exports = function(e) {
  if ("function" != typeof e) throw new s("a function is required");
  var t = u(r, c, arguments);
  return o(t, 1 + l(0, e.length - (arguments.length - 1)), !0)
};
var f = function() {
  return u(r, a, arguments)
};
d ? d(e.exports, "apply", {
  value: f
}) : e.exports.apply = f