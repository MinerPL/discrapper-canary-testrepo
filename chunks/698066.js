n.d(a, {
  Z: function() {
return s;
  }
});
var t = n(626135),
  l = n(981631);

function s(e) {
  let {
problem: a,
stream: n,
feedback: s,
streamApplication: r,
analyticsData: o,
location: i,
rating: c = null
  } = e;
  t.default.track(l.rMx.STREAM_REPORT_PROBLEM, {
reason: a,
streamer_user_id: n.ownerId,
stream_channel_id: n.channelId,
guild_id: n.guildId,
application_id: null != r ? r.id : null,
application_name: null != r ? r.name : null,
location: i,
rating: c,
feedback: s,
...o
  });
}