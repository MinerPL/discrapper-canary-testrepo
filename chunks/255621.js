n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(358085), i = n(782769), a = n(527805), o = n(620662), s = n(981631);
function l(e) {
    let {
            user: t,
            activity: n,
            application: l,
            channelId: u,
            currentUser: c,
            isEmbedded: d,
            ChannelStore: _,
            GuildStore: E,
            GuildMemberCountStore: f,
            RelationshipStore: h,
            SelectedChannelStore: p,
            VoiceStateStore: m,
            PermissionStore: I
        } = e, T = _.getChannel(u), g = (0, i.a)(T);
    if (null == t)
        return !1;
    if (d)
        return (0, a.ZP)({
            userId: t.id,
            activity: n,
            channelId: u,
            currentUser: c,
            application: l,
            isActivitiesEnabledForCurrentPlatform: g,
            ChannelStore: _,
            VoiceStateStore: m,
            PermissionStore: I,
            GuildStore: E
        }) === a.Fw.CAN_JOIN;
    if (!(0, r.isDesktop)())
        return !1;
    if ((0, o.Z)(n, s.xjy.PARTY_PRIVACY_FRIENDS) && h.isFriend(t.id))
        return !0;
    if ((0, o.Z)(n, s.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = _.getChannel(p.getVoiceChannelId());
        if (null == e || !m.isInChannel(e.id, t.id))
            return !1;
        switch (e.type) {
        case s.d4z.DM:
        case s.d4z.GROUP_DM:
            return !0;
        }
        let n = E.getGuild(e.getGuildId());
        if (null == n || n.hasFeature(s.oNc.COMMUNITY))
            return !1;
        let r = f.getMemberCount(n.id);
        return null != r && r < 100;
    }
    return !1;
}
