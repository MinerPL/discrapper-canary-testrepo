a.d(t, {
  Z: function() {
return s;
  }
});
var n = a(626135),
  l = a(981631);

function s(e) {
  let {
problem: t,
channel: a,
feedback: s,
activityApplication: i,
analyticsData: o,
location: r,
rating: c = null
  } = e;
  n.default.track(l.rMx.ACTIVITY_REPORT_PROBLEM, {
reason: t,
guild_id: a.getGuildId(),
channel_id: a.id,
application_id: null == i ? void 0 : i.id,
application_name: null == i ? void 0 : i.name,
location: r,
rating: c,
feedback: s,
...o
  });
}