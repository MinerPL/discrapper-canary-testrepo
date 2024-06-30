n.d(t, {
    $R: function () {
        return m;
    },
    GA: function () {
        return A;
    },
    I: function () {
        return v;
    },
    Ib: function () {
        return r;
    },
    UE: function () {
        return p;
    },
    Wq: function () {
        return I;
    },
    ZB: function () {
        return i;
    },
    jz: function () {
        return S;
    },
    rU: function () {
        return N;
    },
    sK: function () {
        return g;
    },
    wK: function () {
        return O;
    }
}), n(789020), n(47120);
var r, i, a, o, s = n(367907), l = n(601992), u = n(592125), c = n(375954), d = n(9156);
n(626135);
var _ = n(630388), E = n(981631), f = n(490897), h = n(526761);
(a = r || (r = {})).GUILD = 'guild', a.CHANNEL = 'channel', a.ACCOUNT = 'account', (o = i || (i = {})).ForumThreadsCreatedOn = 'enabled forum thread created notifs', o.ForumThreadsCreatedOff = 'disabled forum thread created notifs', o.SuppressEveryoneOn = 'enabled suppress everyone', o.SuppressEveryoneOff = 'disabled suppress everyone', o.SuppressRolesOn = 'enabled suppress roles', o.SuppressRolesOff = 'disabled suppress roles', o.HighlightsOn = 'enabled highlights', o.HighlightsOff = 'disabled highlights', o.MobilePushOn = 'enabled mobile push notifications', o.MobilePushOff = 'disabled mobile push notifications', o.UnreadsAll = 'unreads set to all messages', o.UnreadsMentions = 'unreads set to mentions', o.UnreadsDefault = 'unreads set to the default', o.NotificationsAll = 'notifications set to all messages', o.NotificationsMentions = 'notifications set to mentions', o.NotificationsNothing = 'notifications set to nothing', o.NotificationsDefault = 'notifications set to the default', o.PresetAll = 'notification preset set to all messages', o.PresetMentions = 'notification preset set to mentions', o.PresetNothing = 'notification preset set to nothing', o.PresetDefault = 'notification preset set to the default', o.OptedIn = 'opted in to entity', o.OptedOut = 'opted out from entity', o.Favorited = 'favorited', o.UnFavorited = 'unfavorited', o.Muted = 'muted', o.Unmuted = 'unmuted', o.MutedScheduledEvents = 'muted scheduled events', o.UnmutedScheduledEvents = 'unmuted scheduled events', o.OverrideCreated = 'channel override created', o.OverrideDeleted = 'channel override deleted';
let p = {
        forumThreadsCreated: e => e ? 'enabled forum thread created notifs' : 'disabled forum thread created notifs',
        suppressEveryone: e => e ? 'enabled suppress everyone' : 'disabled suppress everyone',
        suppressRoles: e => e ? 'enabled suppress roles' : 'disabled suppress roles',
        highlights: e => e ? 'enabled highlights' : 'disabled highlights',
        mobilePush: e => e ? 'enabled mobile push notifications' : 'disabled mobile push notifications',
        optedIn: e => e ? 'opted in to entity' : 'opted out from entity',
        favorited: e => e ? 'favorited' : 'unfavorited',
        muted: e => e ? 'muted' : 'unmuted',
        mutedEvents: e => e ? 'muted scheduled events' : 'unmuted scheduled events',
        unreads: e => e === f.i.ALL_MESSAGES ? 'unreads set to all messages' : e === f.i.ONLY_MENTIONS ? 'unreads set to mentions' : 'unreads set to the default',
        notifications: e => e === E.bL.ALL_MESSAGES ? 'notifications set to all messages' : e === E.bL.ONLY_MENTIONS ? 'notifications set to mentions' : e === E.bL.NO_MESSAGES ? 'notifications set to nothing' : 'notifications set to the default'
    }, m = Object.freeze({
        [E.bL.ALL_MESSAGES]: 'All',
        [E.bL.ONLY_MENTIONS]: 'Mentions',
        [E.bL.NO_MESSAGES]: 'Nothing',
        [E.bL.NULL]: null
    });
function I(e, t, n, r, i) {
    var a, o;
    let u = function (e) {
            var t, n, r, i, a, o, s;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = null != l.mute_config && null != l.mute_config.end_time ? new Date(l.mute_config.end_time).getTime() : e.guild_muted_until, c = null != l.message_notifications ? m[l.message_notifications] : e.guild_message_notification_settings;
            return {
                guild_muted_until: u,
                guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
                guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
                guild_message_notification_settings: c,
                guild_suppress_roles: null !== (r = l.suppress_roles) && void 0 !== r ? r : e.guild_suppress_roles,
                guild_receive_mobile_push: null !== (i = l.mobile_push) && void 0 !== i ? i : e.guild_receive_mobile_push,
                guild_notify_highlights: null !== (a = l.notify_highlights) && void 0 !== a ? a : e.guild_notify_highlights,
                guild_suppress_everyone: null !== (o = l.suppress_everyone) && void 0 !== o ? o : e.guild_suppress_everyone,
                guild_scheduled_events_muted: null !== (s = l.mute_scheduled_events) && void 0 !== s ? s : e.guild_scheduled_events_muted
            };
        }, c = u(n), d = u(A(e), t), f = T(c, d, 'RETURN_PREVIOUS_WHEN_CHANGED'), p = null !== (a = f('guild_flags')) && void 0 !== a ? a : 0, I = (null !== (o = d.guild_flags) && void 0 !== o ? o : 0) ^ p, g = 0 === (0, _.M1)(I, h.vc.OPT_IN_CHANNELS_OFF, h.vc.OPT_IN_CHANNELS_ON);
    s.ZP.trackWithMetadata(E.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...d,
        ...l.Z.getStats(e),
        location: i,
        guild_id: e,
        update_type: 'guild',
        label: r,
        guild_flags_old: f('guild_flags'),
        guild_is_muted_old: f('guild_is_muted'),
        guild_suppress_roles_old: f('guild_suppress_roles'),
        guild_notify_highlights_old: f('guild_notify_highlights'),
        guild_suppress_everyone_old: f('guild_suppress_everyone'),
        guild_receive_mobile_push_old: f('guild_receive_mobile_push'),
        guild_scheduled_events_muted_old: f('guild_scheduled_events_muted'),
        guild_message_notification_settings_old: f('guild_message_notification_settings'),
        is_opt_in_only_change: g
    });
}
function T(e, t, n) {
    return r => {
        if ('RETURN_PREVIOUS_WHEN_CHANGED' === n)
            return e[r] !== t[r] ? e[r] : void 0;
    };
}
function g(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function S(e, t, n, r, i, a) {
    var o, d, f, p;
    let I = function (t) {
            var n, r;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = null !== (n = i.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted, o = null != i.message_notifications ? m[i.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings, s = null == e ? null : !0 === a || null != o;
            return {
                channel_is_muted: a,
                channel_is_overridden: s,
                channel_flags: null !== (r = i.flags) && void 0 !== r ? r : null == t ? void 0 : t.channel_flags,
                channel_message_notification_settings: o,
                channel_muted_until: g(i.mute_config)
            };
        }, S = I(r), A = I(v(e, t), n), N = T(S, A, 'RETURN_PREVIOUS_WHEN_CHANGED'), O = u.Z.getChannel(t), R = null !== (d = N('channel_flags')) && void 0 !== d ? d : 0, C = (null !== (f = A.channel_flags) && void 0 !== f ? f : 0) ^ R, y = 0 === (0, _.M1)(C, h.ic.FAVORITED, h.ic.OPT_IN_ENABLED), D = null !== (p = null === (o = c.Z.getLastMessage(t)) || void 0 === o ? void 0 : o.type) && void 0 !== p ? p : null;
    s.ZP.trackWithMetadata(E.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...A,
        ...l.Z.getStats(e),
        location: a,
        guild_id: e,
        channel_id: t,
        update_type: 'channel',
        label: i,
        parent_id: null != O ? O.parent_id : null,
        channel_flags_old: N('channel_flags'),
        channel_is_muted_old: N('channel_is_muted'),
        channel_muted_until_old: N('channel_muted_until'),
        channel_is_overridden_old: N('channel_is_overridden'),
        channel_message_notification_settings_old: N('channel_message_notification_settings'),
        is_opt_in_only_change: y,
        last_message_type: D
    });
}
function A(e) {
    let t = d.ZP.isMuted(e), n = d.ZP.getMuteConfig(e);
    return {
        guild_suppress_everyone: d.ZP.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: d.ZP.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: d.ZP.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: d.ZP.isMobilePushEnabled(e),
        guild_message_notification_settings: m[d.ZP.getMessageNotifications(e)],
        guild_notify_highlights: d.ZP.getNotifyHighlights(e),
        guild_flags: d.ZP.getGuildFlags(e)
    };
}
function N(e) {
    let t = new Map();
    return e.forEach(e => t.set(e, A(e))), t;
}
function v(e, t) {
    let n = d.ZP.isChannelMuted(e, t), r = d.ZP.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        channel_message_notification_settings: m[d.ZP.getChannelMessageNotifications(e, t)],
        channel_flags: d.ZP.getChannelIdFlags(e, t)
    };
}
function O(e, t) {
    let n = new Map();
    return t.forEach(t => n.set(t, v(e, t))), n;
}
