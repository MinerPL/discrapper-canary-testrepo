"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var s = a("626135"),
  l = a("981631");

function n(e) {
  let {
    problem: t,
    stream: a,
    feedback: n,
    streamApplication: r,
    analyticsData: u,
    location: o,
    rating: i = null
  } = e;
  s.default.track(l.AnalyticEvents.STREAM_REPORT_PROBLEM, {
    reason: t,
    streamer_user_id: a.ownerId,
    stream_channel_id: a.channelId,
    guild_id: a.guildId,
    application_id: null != r ? r.id : null,
    application_name: null != r ? r.name : null,
    location: o,
    rating: i,
    feedback: n,
    ...u
  })
}