"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var r = n(991656),
  i = n(70597),
  a = n(991998),
  o = n(896662),
  s = n(573347),
  u = n(536403),
  c = n(188650),
  l = n(291750),
  d = n(528734),
  f = n(951516);

function p(e) {
  (0, f.Z)(1, arguments);
  var t = (0, d.default)(e.start),
    n = (0, d.default)(e.end);
  if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
  if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
  var p = {};
  p.years = Math.abs((0, l.Z)(n, t));
  var h = (0, r.Z)(n, t),
    m = (0, i.Z)(t, {
      years: h * p.years
    });
  p.months = Math.abs((0, u.Z)(n, m));
  var g = (0, i.Z)(m, {
    months: h * p.months
  });
  p.days = Math.abs((0, a.Z)(n, g));
  var _ = (0, i.Z)(g, {
    days: h * p.days
  });
  p.hours = Math.abs((0, o.Z)(n, _));
  var b = (0, i.Z)(_, {
    hours: h * p.hours
  });
  p.minutes = Math.abs((0, s.Z)(n, b));
  var v = (0, i.Z)(b, {
    minutes: h * p.minutes
  });
  return p.seconds = Math.abs((0, c.Z)(n, v)), p
}