a.d(n, {
    V: function () {
        return s;
    }
}), a(399606);
var c = a(92114), t = a(9156), i = a(621600), o = a(113449), r = a(686660), l = a(981631), d = a(526761);
function s(e, n) {
    let a = t.ZP.getGuildFlags(e);
    n === r.s8.ALL_MESSAGES ? c.Z.updateGuildNotificationSettings(e, {
        message_notifications: l.bL.ALL_MESSAGES,
        flags: (0, o.Q4)(a, d.vc.UNREADS_ALL_MESSAGES)
    }, i.ZB.PresetAll) : n === r.s8.MENTIONS ? c.Z.updateGuildNotificationSettings(e, {
        message_notifications: l.bL.ONLY_MENTIONS,
        flags: (0, o.Q4)(a, d.vc.UNREADS_ONLY_MENTIONS)
    }, i.ZB.PresetMentions) : n === r.s8.NOTHING && c.Z.updateGuildNotificationSettings(e, {
        message_notifications: l.bL.NO_MESSAGES,
        flags: (0, o.Q4)(a, d.vc.UNREADS_ONLY_MENTIONS)
    }, i.ZB.PresetNothing);
}
