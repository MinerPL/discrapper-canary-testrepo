E.d(_, {
    n: function () {
        return A;
    }
});
var s = E(835913),
    T = E(570140),
    I = E(675478),
    n = E(626135),
    t = E(981631);
async function A(e, _) {
    await (0, I.PS)(e, (e) => ((e.guildRecentsDismissedAt = s.E.fromDate(new Date())), !0), I.fy.INFREQUENT_USER_ACTION),
        T.Z.dispatch({
            type: 'BULK_CLEAR_RECENTS',
            guildId: e,
            channelIds: _
        }),
        n.default.track(t.rMx.CHANNEL_LIST_UPDATED, { action_type: 'recents_dismissed' });
}
