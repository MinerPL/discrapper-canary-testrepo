i.d(n, {
    IG: function () {
        return O;
    },
    JK: function () {
        return M;
    },
    ZA: function () {
        return c;
    },
    _m: function () {
        return g;
    },
    ft: function () {
        return I;
    },
    yN: function () {
        return N;
    }
}), i(47120);
var t = i(399606), s = i(92114), a = i(592125), _ = i(9156), S = i(621600), r = i(423589), o = i(113449), d = i(686660), u = i(981631), l = i(490897), E = i(526761);
function c(e) {
    let n = (0, t.e7)([_.ZP], () => _.ZP.resolveUnreadSetting(e)), i = (0, t.e7)([_.ZP], () => _.ZP.resolvedMessageNotifications(e));
    return {
        unread: n,
        notification: i,
        preset: (0, d.gs)(n, i)
    };
}
function N(e) {
    let n = (0, t.Wu)([_.ZP], () => (0, r.OD)(_.ZP.getChannelOverrides(e.guild_id), {
            ignoreMute: !0,
            ignoreUnreadSetting: !1,
            ignoreNotificationSetting: !1
        })), [i, s] = (0, t.Wu)([
            _.ZP,
            a.Z
        ], () => {
            let i = a.Z.getChannel(e.parent_id);
            return null != i && n.includes(i.id) ? [
                'parent',
                (0, d.p1)((0, d.gs)(_.ZP.resolveUnreadSetting(i), _.ZP.resolvedMessageNotifications(i)))
            ] : [
                'guild',
                (0, d.p1)((0, d.gs)(_.ZP.getGuildUnreadSetting(e.guild_id), _.ZP.getMessageNotifications(e.guild_id)))
            ];
        }, [
            e.guild_id,
            e.parent_id,
            n
        ]);
    return {
        inherited: !n.includes(e.id),
        inheritedFrom: i,
        inheritedPreset: s
    };
}
function g(e, n, i) {
    let t = _.ZP.getChannelIdFlags(e, n);
    i === d.s8.ALL_MESSAGES ? s.Z.updateChannelOverrideSettings(e, n, {
        message_notifications: u.bL.ALL_MESSAGES,
        flags: (0, o.pq)(t, E.ic.UNREADS_ALL_MESSAGES)
    }, S.ZB.PresetAll) : i === d.s8.MENTIONS ? s.Z.updateChannelOverrideSettings(e, n, {
        message_notifications: u.bL.ONLY_MENTIONS,
        flags: (0, o.pq)(t, E.ic.UNREADS_ONLY_MENTIONS)
    }, S.ZB.PresetMentions) : i === d.s8.NOTHING && s.Z.updateChannelOverrideSettings(e, n, {
        message_notifications: u.bL.NO_MESSAGES,
        flags: (0, o.pq)(t, E.ic.UNREADS_ONLY_MENTIONS)
    }, S.ZB.PresetNothing);
}
function M(e, n) {
    s.Z.updateChannelOverrideSettings(e, n, {
        message_notifications: u.bL.NULL,
        flags: (0, o.YF)(_.ZP.getChannelIdFlags(e, n))
    }, S.ZB.PresetDefault);
}
function O(e, n, i) {
    let t = _.ZP.getChannelIdFlags(e, n);
    s.Z.updateChannelOverrideSettings(e, n, { flags: (0, o.pq)(t, i === l.i.ALL_MESSAGES ? E.ic.UNREADS_ALL_MESSAGES : E.ic.UNREADS_ONLY_MENTIONS) }, S.UE.unreads(i));
}
function I(e, n, i) {
    s.Z.updateChannelOverrideSettings(e, n, { message_notifications: i }, S.UE.notifications(i));
}
