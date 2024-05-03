"use strict";
u.r(e), u.d(e, {
  default: function() {
    return i
  }
});
var n = u("599582"),
  r = u("788613"),
  a = u("528734"),
  f = u("951516"),
  d = u("217224");

function o(t) {
  return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
  } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  })(t)
}

function i(t, e) {
  if ((0, f.default)(2, arguments), !e || "object" !== o(e)) return new Date(NaN);
  var u = e.years ? (0, d.default)(e.years) : 0,
    i = e.months ? (0, d.default)(e.months) : 0,
    l = e.weeks ? (0, d.default)(e.weeks) : 0,
    s = e.days ? (0, d.default)(e.days) : 0,
    c = e.hours ? (0, d.default)(e.hours) : 0,
    h = e.minutes ? (0, d.default)(e.minutes) : 0,
    g = e.seconds ? (0, d.default)(e.seconds) : 0,
    v = (0, a.default)(t),
    m = i || u ? (0, r.default)(v, i + 12 * u) : v,
    M = s || l ? (0, n.default)(m, s + 7 * l) : m;
  return new Date(M.getTime() + 1e3 * (g + 60 * (h + 60 * c)))
}