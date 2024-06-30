n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(626135), i = n(479313), a = n(981631);
function o(e) {
    let {
        summary: t,
        guildId: n,
        channelId: o,
        rating: s = null,
        problem: l = null,
        feedback: u = '',
        location: c
    } = e;
    (0, i.U$)(t, s), r.default.track(a.rMx.SUMMARIES_REPORT_PROBLEM, {
        reason: l,
        location: c,
        rating: s,
        feedback: u,
        participant_count: t.people.length,
        message_count: t.count,
        start_message_id: t.startId,
        guild_id: n,
        channel_id: o,
        summary_id: t.id,
        summary_source: t.source,
        summary_type: t.type
    });
}
