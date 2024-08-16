n.d(t, {
    $H: function () {
        return x;
    },
    AB: function () {
        return U;
    },
    JS: function () {
        return M;
    },
    hH: function () {
        return b;
    },
    kO: function () {
        return G;
    },
    oG: function () {
        return k;
    },
    v_: function () {
        return P;
    },
    yw: function () {
        return w;
    }
});
var r = n(392711),
    i = n.n(r),
    a = n(149765),
    s = n(50244),
    o = n(686660),
    l = n(131704),
    u = n(314897),
    c = n(592125),
    d = n(984933),
    _ = n(650774),
    E = n(271383),
    f = n(430824),
    h = n(131951),
    p = n(496675),
    m = n(158776),
    I = n(19780),
    T = n(306680),
    g = n(944486),
    S = n(914010),
    A = n(9156),
    N = n(979651),
    v = n(626135),
    O = n(70956),
    R = n(700785),
    C = n(546416),
    y = n(981631),
    D = n(176505);
function L(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function b(e) {
    var t;
    if (null == e) return null;
    let n = f.Z.getGuild(e);
    if (null == n) return null;
    let r = f.Z.getRoles(n.id),
        i = u.default.getId(),
        a = E.ZP.getMember(e, i),
        s = d.ZP.getChannels(e),
        o = s[d.sH].length,
        l = s[d.Zb].length,
        c = N.Z.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: _.Z.getMemberCount(e),
        guild_num_channels: o + l,
        guild_num_text_channels: o,
        guild_num_voice_channels: l,
        guild_num_roles: L(r),
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(null !== (t = p.Z.getGuildPermissions(n)) && void 0 !== t ? t : R.Hn),
        guild_is_vip: n.hasFeature(y.oNc.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: L(c)
    };
}
function M(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    return null == t ? null : P(t);
}
function P(e) {
    var t;
    if (null == e) return null;
    let n = !1,
        r = e.getGuildId();
    if (null != r) {
        let t = (e) => {
            if (null == e) return !1;
            let t = e.permissionOverwrites[r];
            return null != t && a.e$(t.deny, y.Plq.VIEW_CHANNEL);
        };
        n = l.Ec.has(e.type) && null != e.parent_id ? t(c.Z.getChannel(e.parent_id)) : t(e);
    }
    return {
        channel_id: e.id,
        channel_type: e.type,
        channel_size_total: e.isPrivate() ? e.recipients.length : 0,
        channel_member_perms: String(null != r && null !== (t = p.Z.getChannelPermissions(e)) && void 0 !== t ? t : R.Hn),
        channel_hidden: n
    };
}
function U(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    if (null == t) return null;
    let n = h.Z.isVideoEnabled(),
        r = I.Z.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: r,
        ...G(t.getGuildId(), t.id, n),
        ...(0, C.V)()
    };
}
function w(e) {
    var t, n, r, i, a;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (v.default.isThrottled(e)) return;
    let l = !('location' in s) || s.location !== y.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        u = 'guild_id' in s ? s.guild_id : l ? S.Z.getGuildId() : null,
        d = 'channel_id' in s ? s.channel_id : l ? g.Z.getChannelId(u) : null,
        _ = c.Z.getChannel(d);
    let E = ((t = _), (n = u), null == t ? (null != n ? n : null) : t.isPrivate() ? null : null !== (i = null !== (r = t.getGuildId()) && void 0 !== r ? r : n) && void 0 !== i ? i : null);
    let f = {
        ...s,
        ...b(E),
        ...(null != u && null != d && (0, D.AB)(d)
            ? ((a = 0),
              {
                  channel_static_route: d,
                  channel_hidden: !1
              })
            : P(_))
    };
    v.default.track(e, f, { flush: o });
}
function x(e) {
    let t = c.Z.getChannel(e);
    if (null == t || null == t.guild_id) return { channel_id: e };
    let n = f.Z.getGuild(t.guild_id);
    if (null == n) return { channel_id: e };
    let r = T.ZP.getSnapshot(e, 10 * O.Z.Millis.SECOND);
    return {
        channel_id: e,
        channel_was_unread: r.unread,
        channel_mention_count: r.mentionCount,
        channel_is_muted: A.ZP.isChannelMuted(t.guild_id, t.id),
        channel_is_nsfw: t.isNSFW(),
        channel_resolved_unread_setting: A.ZP.resolveUnreadSetting(t),
        channel_preset: (0, o.gs)(A.ZP.resolveUnreadSetting(t), A.ZP.resolvedMessageNotifications(t)),
        guild_id: t.guild_id,
        guild_was_unread: r.guildUnread,
        guild_mention_count: r.guildMentionCount,
        guild_is_muted: A.ZP.isMuted(t.guild_id),
        guild_resolved_unread_setting: A.ZP.resolveGuildUnreadSetting(n),
        guild_preset: (0, o.gs)(A.ZP.resolveGuildUnreadSetting(n), A.ZP.getMessageNotifications(t.guild_id)),
        parent_id: t.parent_id,
        parent_channel_type: t.parentChannelThreadType,
        has_pending_member_action: (0, s.P)(t.guild_id, e),
        can_send_message: p.Z.can(y.Plq.SEND_MESSAGES, t)
    };
}
function G(e, t, n) {
    let r = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n
    };
    return (
        i()(N.Z.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function k(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(N.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === t && null != m.Z.findActivity(e.userId, (e) => e.type === y.IIU.CUSTOM_STATUS) && n.custom_status_count++;
        }),
        n
    );
}
t.ZP = {
    trackWithMetadata: w,
    getVoiceStateMetadata: G
};
