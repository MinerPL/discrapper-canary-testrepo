"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(626135),
  r = n(479313),
  s = n(981631);

function o(e) {
  let {
    summary: t,
    guildId: n,
    channelId: o,
    rating: a = null,
    problem: l = null,
    feedback: u = "",
    location: _
  } = e;
  (0, r.U$)(t, a), i.default.track(s.rMx.SUMMARIES_REPORT_PROBLEM, {
    reason: l,
    location: _,
    rating: a,
    feedback: u,
    participant_count: t.people.length,
    message_count: t.count,
    start_message_id: t.startId,
    guild_id: n,
    channel_id: o,
    summary_id: t.id,
    summary_source: t.source,
    summary_type: t.type
  })
}