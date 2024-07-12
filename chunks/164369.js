n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(991656),
  i = n(70597),
  a = n(991998),
  o = n(896662),
  s = n(573347),
  l = n(536403),
  u = n(188650),
  c = n(291750),
  d = n(528734),
  _ = n(951516);

function E(e) {
  (0, _.Z)(1, arguments);
  var t = (0, d.default)(e.start),
n = (0, d.default)(e.end);
  if (isNaN(t.getTime()))
throw RangeError('Start Date is invalid');
  if (isNaN(n.getTime()))
throw RangeError('End Date is invalid');
  var E = {};
  E.years = Math.abs((0, c.Z)(n, t));
  var f = (0, r.Z)(n, t),
h = (0, i.Z)(t, {
  years: f * E.years
});
  E.months = Math.abs((0, l.Z)(n, h));
  var p = (0, i.Z)(h, {
months: f * E.months
  });
  E.days = Math.abs((0, a.Z)(n, p));
  var m = (0, i.Z)(p, {
days: f * E.days
  });
  E.hours = Math.abs((0, o.Z)(n, m));
  var I = (0, i.Z)(m, {
hours: f * E.hours
  });
  E.minutes = Math.abs((0, s.Z)(n, I));
  var T = (0, i.Z)(I, {
minutes: f * E.minutes
  });
  return E.seconds = Math.abs((0, u.Z)(n, T)), E;
}