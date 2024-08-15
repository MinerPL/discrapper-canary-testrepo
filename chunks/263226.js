n.d(t, {
  Z: function() {
return o;
  }
});
var s = n(626135),
  a = n(981631);

function o(e, t, n, o) {
  s.default.track(a.rMx.USER_REPORT_SUBMITTED, {
report_name: 'Guild Leave',
guild_id: e,
reason: t,
feedback: n,
skipped: o
  });
}