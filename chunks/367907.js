n.d(t, {
    $H: function () {
        return G;
    },
    AB: function () {
        return w;
    },
    JS: function () {
        return P;
    },
    hH: function () {
        return M;
    },
    kO: function () {
        return k;
    },
    oG: function () {
        return B;
    },
    v_: function () {
        return U;
    },
    yw: function () {
        return x;
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
    I = n(158776),
    m = n(19780),
    T = n(306680),
    S = n(944486),
    g = n(914010),
    A = n(9156),
    N = n(594174),
    O = n(979651),
    R = n(626135),
    v = n(70956),
    C = n(700785),
    L = n(546416),
    y = n(981631),
    D = n(176505);
function b(e) {
    let t = 0;
    for (let n in e) t += 1;
    return t;
}
function M(e) {
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
        c = O.Z.getVoiceStates(e);
    return {
        guild_id: n.id,
        guild_size_total: _.Z.getMemberCount(e),
        guild_num_channels: o + l,
        guild_num_text_channels: o,
        guild_num_voice_channels: l,
        guild_num_roles: b(r),
        guild_member_num_roles: null != a ? a.roles.length : 0,
        guild_member_perms: String(null !== (t = p.Z.getGuildPermissions(n)) && void 0 !== t ? t : C.Hn),
        guild_is_vip: n.hasFeature(y.oNc.VIP_REGIONS),
        is_member: null != a,
        num_voice_channels_active: b(c)
    };
}
function P(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    return null == t ? null : U(t);
}
function U(e) {
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
        channel_member_perms: String(null != r && null !== (t = p.Z.getChannelPermissions(e)) && void 0 !== t ? t : C.Hn),
        channel_hidden: n
    };
}
function w(e) {
    if (null == e) return null;
    let t = c.Z.getChannel(e);
    if (null == t) return null;
    let n = h.Z.isVideoEnabled(),
        r = m.Z.getMediaSessionId();
    return {
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.getGuildId(),
        media_session_id: r,
        ...k(t.getGuildId(), t.id, n),
        ...(0, L.V)()
    };
}
function x(e) {
    var t, n, r, i, a;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (R.default.isThrottled(e)) return;
    let l = !('location' in s) || s.location !== y.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
        u = 'guild_id' in s ? s.guild_id : l ? g.Z.getGuildId() : null,
        d = 'channel_id' in s ? s.channel_id : l ? S.Z.getChannelId(u) : null,
        _ = c.Z.getChannel(d);
    let E = ((t = _), (n = u), null == t ? (null != n ? n : null) : t.isPrivate() ? null : null !== (i = null !== (r = t.getGuildId()) && void 0 !== r ? r : n) && void 0 !== i ? i : null);
    let f = {
        ...s,
        ...M(E),
        ...(null != u && null != d && (0, D.AB)(d)
            ? ((a = 0),
              {
                  channel_static_route: d,
                  channel_hidden: !1
              })
            : U(_))
    };
    R.default.track(e, f, { flush: o });
}
function G(e) {
    let t = c.Z.getChannel(e);
    if (null == t) return { channel_id: e };
    let n = f.Z.getGuild(t.guild_id);
    if (null == n) {
        let n = !1;
        if (t.isDM()) {
            let e = N.default.getUser(t.recipients[0]);
            null != e && (n = e.bot);
        }
        return {
            channel_id: e,
            is_app_dm: n
        };
    }
    let r = T.ZP.getSnapshot(e, 10 * v.Z.Millis.SECOND);
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
        can_send_message: p.Z.can(y.Plq.SEND_MESSAGES, t),
        is_app_dm: !1
    };
}
function k(e, t, n) {
    let r = {
        voice_state_count: 0,
        video_stream_count: 0,
        video_enabled: n
    };
    return (
        i()(O.Z.getVoiceStates(e))
            .filter((e) => e.channelId === t)
            .filter((e) => e.userId !== u.default.getId())
            .forEach((e) => {
                r.voice_state_count++, (e.selfVideo || e.selfStream) && r.video_stream_count++;
            }),
        r
    );
}
function B(e, t) {
    let n = { custom_status_count: 0 };
    return (
        i()(O.Z.getVoiceStates(e)).forEach((e) => {
            e.channelId === t && null != I.Z.findActivity(e.userId, (e) => e.type === y.IIU.CUSTOM_STATUS) && n.custom_status_count++;
        }),
        n
    );
}
t.ZP = {
    trackWithMetadata: x,
    getVoiceStateMetadata: k
};
