n.d(t, {
    $R: function () {
        return p;
    },
    GA: function () {
        return g;
    },
    I: function () {
        return N;
    },
    UE: function () {
        return h;
    },
    Wq: function () {
        return I;
    },
    ZB: function () {
        return r;
    },
    jz: function () {
        return S;
    },
    rU: function () {
        return A;
    },
    sK: function () {
        return T;
    },
    wK: function () {
        return O;
    }
}),
    n(789020),
    n(47120);
var r,
    i,
    a = n(367907),
    s = n(601992),
    o = n(592125),
    l = n(375954),
    u = n(9156);
n(626135);
var c = n(630388),
    d = n(981631),
    _ = n(468788),
    E = n(490897),
    f = n(526761);
((i = r || (r = {})).ForumThreadsCreatedOn = 'enabled forum thread created notifs'), (i.ForumThreadsCreatedOff = 'disabled forum thread created notifs'), (i.SuppressEveryoneOn = 'enabled suppress everyone'), (i.SuppressEveryoneOff = 'disabled suppress everyone'), (i.SuppressRolesOn = 'enabled suppress roles'), (i.SuppressRolesOff = 'disabled suppress roles'), (i.HighlightsOn = 'enabled highlights'), (i.HighlightsOff = 'disabled highlights'), (i.MobilePushOn = 'enabled mobile push notifications'), (i.MobilePushOff = 'disabled mobile push notifications'), (i.UnreadsAll = 'unreads set to all messages'), (i.UnreadsMentions = 'unreads set to mentions'), (i.UnreadsDefault = 'unreads set to the default'), (i.NotificationsAll = 'notifications set to all messages'), (i.NotificationsMentions = 'notifications set to mentions'), (i.NotificationsNothing = 'notifications set to nothing'), (i.NotificationsDefault = 'notifications set to the default'), (i.PresetAll = 'notification preset set to all messages'), (i.PresetMentions = 'notification preset set to mentions'), (i.PresetNothing = 'notification preset set to nothing'), (i.PresetDefault = 'notification preset set to the default'), (i.OptedIn = 'opted in to entity'), (i.OptedOut = 'opted out from entity'), (i.Favorited = 'favorited'), (i.UnFavorited = 'unfavorited'), (i.Muted = 'muted'), (i.Unmuted = 'unmuted'), (i.MutedScheduledEvents = 'muted scheduled events'), (i.UnmutedScheduledEvents = 'unmuted scheduled events'), (i.OverrideCreated = 'channel override created'), (i.OverrideDeleted = 'channel override deleted');
let h = {
        forumThreadsCreated: (e) => (e ? 'enabled forum thread created notifs' : 'disabled forum thread created notifs'),
        suppressEveryone: (e) => (e ? 'enabled suppress everyone' : 'disabled suppress everyone'),
        suppressRoles: (e) => (e ? 'enabled suppress roles' : 'disabled suppress roles'),
        highlights: (e) => (e ? 'enabled highlights' : 'disabled highlights'),
        mobilePush: (e) => (e ? 'enabled mobile push notifications' : 'disabled mobile push notifications'),
        optedIn: (e) => (e ? 'opted in to entity' : 'opted out from entity'),
        favorited: (e) => (e ? 'favorited' : 'unfavorited'),
        muted: (e) => (e ? 'muted' : 'unmuted'),
        mutedEvents: (e) => (e ? 'muted scheduled events' : 'unmuted scheduled events'),
        unreads: (e) => (e === E.i.ALL_MESSAGES ? 'unreads set to all messages' : e === E.i.ONLY_MENTIONS ? 'unreads set to mentions' : 'unreads set to the default'),
        notifications: (e) => (e === d.bL.ALL_MESSAGES ? 'notifications set to all messages' : e === d.bL.ONLY_MENTIONS ? 'notifications set to mentions' : e === d.bL.NO_MESSAGES ? 'notifications set to nothing' : 'notifications set to the default')
    },
    p = Object.freeze({
        [d.bL.ALL_MESSAGES]: 'All',
        [d.bL.ONLY_MENTIONS]: 'Mentions',
        [d.bL.NO_MESSAGES]: 'Nothing',
        [d.bL.NULL]: null
    });
function I(e, t, n, r, i) {
    var o, l;
    let u = function (e) {
            var t, n, r, i, a, s, o;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                u = null != l.mute_config && null != l.mute_config.end_time ? new Date(l.mute_config.end_time).getTime() : e.guild_muted_until,
                c = null != l.message_notifications ? p[l.message_notifications] : e.guild_message_notification_settings;
            return {
                guild_muted_until: u,
                guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
                guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
                guild_message_notification_settings: c,
                guild_suppress_roles: null !== (r = l.suppress_roles) && void 0 !== r ? r : e.guild_suppress_roles,
                guild_receive_mobile_push: null !== (i = l.mobile_push) && void 0 !== i ? i : e.guild_receive_mobile_push,
                guild_notify_highlights: null !== (a = l.notify_highlights) && void 0 !== a ? a : e.guild_notify_highlights,
                guild_suppress_everyone: null !== (s = l.suppress_everyone) && void 0 !== s ? s : e.guild_suppress_everyone,
                guild_scheduled_events_muted: null !== (o = l.mute_scheduled_events) && void 0 !== o ? o : e.guild_scheduled_events_muted
            };
        },
        E = u(n),
        h = u(g(e), t),
        I = m(E, h, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        T = null !== (o = I('guild_flags')) && void 0 !== o ? o : 0,
        S = (null !== (l = h.guild_flags) && void 0 !== l ? l : 0) ^ T,
        A = 0 === (0, c.M1)(S, f.vc.OPT_IN_CHANNELS_OFF, f.vc.OPT_IN_CHANNELS_ON);
    a.ZP.trackWithMetadata(d.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...h,
        ...s.Z.getStats(e),
        location: i,
        guild_id: e,
        update_type: _.I.GUILD,
        label: r,
        guild_flags_old: I('guild_flags'),
        guild_is_muted_old: I('guild_is_muted'),
        guild_suppress_roles_old: I('guild_suppress_roles'),
        guild_notify_highlights_old: I('guild_notify_highlights'),
        guild_suppress_everyone_old: I('guild_suppress_everyone'),
        guild_receive_mobile_push_old: I('guild_receive_mobile_push'),
        guild_scheduled_events_muted_old: I('guild_scheduled_events_muted'),
        guild_message_notification_settings_old: I('guild_message_notification_settings'),
        is_opt_in_only_change: A
    });
}
function m(e, t, n) {
    return (r) => {
        if ('RETURN_PREVIOUS_WHEN_CHANGED' === n) return e[r] !== t[r] ? e[r] : void 0;
    };
}
function T(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function S(e, t, n, r, i, u) {
    var E, h, I, S;
    let g = function (t) {
            var n, r;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = null !== (n = i.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                s = null != i.message_notifications ? p[i.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                o = null == e ? null : !0 === a || null != s;
            return {
                channel_is_muted: a,
                channel_is_overridden: o,
                channel_flags: null !== (r = i.flags) && void 0 !== r ? r : null == t ? void 0 : t.channel_flags,
                channel_message_notification_settings: s,
                channel_muted_until: T(i.mute_config)
            };
        },
        A = g(r),
        O = g(N(e, t), n),
        R = m(A, O, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        v = o.Z.getChannel(t),
        C = null !== (h = R('channel_flags')) && void 0 !== h ? h : 0,
        L = (null !== (I = O.channel_flags) && void 0 !== I ? I : 0) ^ C,
        y = 0 === (0, c.M1)(L, f.ic.FAVORITED, f.ic.OPT_IN_ENABLED),
        D = null !== (S = null === (E = l.Z.getLastMessage(t)) || void 0 === E ? void 0 : E.type) && void 0 !== S ? S : null;
    a.ZP.trackWithMetadata(d.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...O,
        ...s.Z.getStats(e),
        location: u,
        guild_id: e,
        channel_id: t,
        update_type: _.I.CHANNEL,
        label: i,
        parent_id: null != v ? v.parent_id : null,
        channel_flags_old: R('channel_flags'),
        channel_is_muted_old: R('channel_is_muted'),
        channel_muted_until_old: R('channel_muted_until'),
        channel_is_overridden_old: R('channel_is_overridden'),
        channel_message_notification_settings_old: R('channel_message_notification_settings'),
        is_opt_in_only_change: y,
        last_message_type: D
    });
}
function g(e) {
    let t = u.ZP.isMuted(e),
        n = u.ZP.getMuteConfig(e);
    return {
        guild_suppress_everyone: u.ZP.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: u.ZP.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: u.ZP.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: u.ZP.isMobilePushEnabled(e),
        guild_message_notification_settings: p[u.ZP.getMessageNotifications(e)],
        guild_notify_highlights: u.ZP.getNotifyHighlights(e),
        guild_flags: u.ZP.getGuildFlags(e)
    };
}
function A(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e, g(e))), t;
}
function N(e, t) {
    let n = u.ZP.isChannelMuted(e, t),
        r = u.ZP.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        channel_message_notification_settings: p[u.ZP.getChannelMessageNotifications(e, t)],
        channel_flags: u.ZP.getChannelIdFlags(e, t)
    };
}
function O(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, N(e, t))), n;
}
