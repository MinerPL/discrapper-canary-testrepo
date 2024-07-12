n.d(t, {
  Z: function() {
return l;
  }
});
var s = n(913527),
  r = n.n(s),
  i = n(626135),
  a = n(981631);

function l(e, t) {
  i.default.track(a.rMx.AGE_GATE_SUBMITTED, {
dob: 18 > r()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
dob_day: e.date(),
dob_month: e.month() + 1,
dob_year: e.year(),
source: {
  section: t
}
  });
}