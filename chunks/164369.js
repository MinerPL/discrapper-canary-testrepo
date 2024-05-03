"use strict";
u.r(e), u.d(e, {
  default: function() {
    return h
  }
});
var n = u("991656"),
  r = u("70597"),
  a = u("991998"),
  f = u("896662"),
  d = u("573347"),
  o = u("536403"),
  i = u("188650"),
  l = u("291750"),
  s = u("528734"),
  c = u("951516");

function h(t) {
  (0, c.default)(1, arguments);
  var e = (0, s.default)(t.start),
    u = (0, s.default)(t.end);
  if (isNaN(e.getTime())) throw RangeError("Start Date is invalid");
  if (isNaN(u.getTime())) throw RangeError("End Date is invalid");
  var h = {};
  h.years = Math.abs((0, l.default)(u, e));
  var g = (0, n.default)(u, e),
    v = (0, r.default)(e, {
      years: g * h.years
    });
  h.months = Math.abs((0, o.default)(u, v));
  var m = (0, r.default)(v, {
    months: g * h.months
  });
  h.days = Math.abs((0, a.default)(u, m));
  var M = (0, r.default)(m, {
    days: g * h.days
  });
  h.hours = Math.abs((0, f.default)(u, M));
  var y = (0, r.default)(M, {
    hours: g * h.hours
  });
  h.minutes = Math.abs((0, d.default)(u, y));
  var b = (0, r.default)(y, {
    minutes: g * h.minutes
  });
  return h.seconds = Math.abs((0, i.default)(u, b)), h
}