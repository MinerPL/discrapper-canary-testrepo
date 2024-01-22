"use strict";
n.r(t), n.d(t, {
  NotificationLabels: function() {
    return l
  },
  NotificationLabel: function() {
    return h
  },
  MessageNotificationSettings: function() {
    return p
  },
  trackGuildNotificationSettingsUpdate: function() {
    return E
  },
  muteConfigToTimestamp: function() {
    return N
  },
  trackChannelNotificationSettingsUpdate: function() {
    return v
  },
  getCurrentGuildSettings: function() {
    return C
  },
  getManyCurrentGuildSettings: function() {
    return S
  },
  getCurrentChannelSettings: function() {
    return A
  },
  getManyCurrentChannelSettings: function() {
    return T
  }
}), n("702976"), n("222007");
var i, l, u, s, o = n("716241"),
  d = n("637929"),
  a = n("42203"),
  r = n("282109"),
  _ = n("568734"),
  f = n("49111"),
  c = n("133335"),
  g = n("397336");
(u = i || (i = {})).GUILD = "guild", u.CHANNEL = "channel", (s = l || (l = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", s.ForumThreadsCreatedOff = "disabled forum thread created notifs", s.SuppressEveryoneOn = "enabled suppress everyone", s.SuppressEveryoneOff = "disabled suppress everyone", s.SuppressRolesOn = "enabled suppress roles", s.SuppressRolesOff = "disabled suppress roles", s.HighlightsOn = "enabled highlights", s.HighlightsOff = "disabled highlights", s.MobilePushOn = "enabled mobile push notifications", s.MobilePushOff = "disabled mobile push notifications", s.UnreadsAll = "unreads set to all messages", s.UnreadsMentions = "unreads set to mentions", s.UnreadsDefault = "unreads set to the default", s.NotificationsAll = "notifications set to all messages", s.NotificationsMentions = "notifications set to mentions", s.NotificationsNothing = "notifications set to nothing", s.NotificationsDefault = "notifications set to the default", s.PresetAll = "notification preset set to all messages", s.PresetMentions = "notification preset set to mentions", s.PresetNothing = "notification preset set to nothing", s.PresetDefault = "notification preset set to the default", s.OptedIn = "opted in to entity", s.OptedOut = "opted out from entity", s.Favorited = "favorited", s.UnFavorited = "unfavorited", s.Muted = "muted", s.Unmuted = "unmuted", s.MutedScheduledEvents = "muted scheduled events", s.UnmutedScheduledEvents = "unmuted scheduled events", s.OverrideCreated = "channel override created", s.OverrideDeleted = "channel override deleted";
let h = {
    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
    highlights: e => e ? "enabled highlights" : "disabled highlights",
    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
    optedIn: e => e ? "opted in to entity" : "opted out from entity",
    favorited: e => e ? "favorited" : "unfavorited",
    muted: e => e ? "muted" : "unmuted",
    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
    unreads: e => e === c.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === c.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
    notifications: e => e === f.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === f.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === f.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
  },
  p = Object.freeze({
    [f.UserNotificationSettings.ALL_MESSAGES]: "All",
    [f.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
    [f.UserNotificationSettings.NO_MESSAGES]: "Nothing",
    [f.UserNotificationSettings.NULL]: null
  });

function E(e, t, n, i, l) {
  var u, s;
  let a = function(e) {
      var t, n, i, l, u, s, o;
      let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = null != d.mute_config && null != d.mute_config.end_time ? new Date(d.mute_config.end_time).getTime() : e.guild_muted_until,
        r = null != d.message_notifications ? p[d.message_notifications] : e.guild_message_notification_settings;
      return {
        guild_muted_until: a,
        guild_flags: null !== (t = d.flags) && void 0 !== t ? t : e.guild_flags,
        guild_is_muted: null !== (n = d.muted) && void 0 !== n ? n : e.guild_is_muted,
        guild_message_notification_settings: r,
        guild_suppress_roles: null !== (i = d.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
        guild_receive_mobile_push: null !== (l = d.mobile_push) && void 0 !== l ? l : e.guild_receive_mobile_push,
        guild_notify_highlights: null !== (u = d.notify_highlights) && void 0 !== u ? u : e.guild_notify_highlights,
        guild_suppress_everyone: null !== (s = d.suppress_everyone) && void 0 !== s ? s : e.guild_suppress_everyone,
        guild_scheduled_events_muted: null !== (o = d.mute_scheduled_events) && void 0 !== o ? o : e.guild_scheduled_events_muted
      }
    },
    r = a(n),
    c = a(C(e), t),
    h = m(r, c, "RETURN_PREVIOUS_WHEN_CHANGED"),
    E = null !== (u = h("guild_flags")) && void 0 !== u ? u : 0,
    N = (null !== (s = c.guild_flags) && void 0 !== s ? s : 0) ^ E,
    v = 0 === (0, _.removeFlags)(N, g.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, g.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
  o.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
    ...c,
    ...d.default.getStats(e),
    location: l,
    guild_id: e,
    update_type: "guild",
    label: i,
    guild_flags_old: h("guild_flags"),
    guild_is_muted_old: h("guild_is_muted"),
    guild_suppress_roles_old: h("guild_suppress_roles"),
    guild_notify_highlights_old: h("guild_notify_highlights"),
    guild_suppress_everyone_old: h("guild_suppress_everyone"),
    guild_receive_mobile_push_old: h("guild_receive_mobile_push"),
    guild_scheduled_events_muted_old: h("guild_scheduled_events_muted"),
    guild_message_notification_settings_old: h("guild_message_notification_settings"),
    is_opt_in_only_change: v
  })
}

function m(e, t, n) {
  return i => {
    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
  }
}

function N(e) {
  return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
}

function v(e, t, n, i, l, u) {
  var s, r;
  let c = function(t) {
      var n, i;
      let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = null !== (n = l.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
        s = null != l.message_notifications ? p[l.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
        o = null == e ? null : !0 === u || null != s;
      return {
        channel_is_muted: u,
        channel_is_overridden: o,
        channel_flags: null !== (i = l.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
        channel_message_notification_settings: s,
        channel_muted_until: N(l.mute_config)
      }
    },
    h = c(i),
    E = c(A(e, t), n),
    v = m(h, E, "RETURN_PREVIOUS_WHEN_CHANGED"),
    C = a.default.getChannel(t),
    S = null !== (s = v("channel_flags")) && void 0 !== s ? s : 0,
    T = (null !== (r = E.channel_flags) && void 0 !== r ? r : 0) ^ S,
    O = 0 === (0, _.removeFlags)(T, g.ChannelNotificationSettingsFlags.FAVORITED, g.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
  o.default.trackWithMetadata(f.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
    ...E,
    ...d.default.getStats(e),
    location: u,
    guild_id: e,
    channel_id: t,
    update_type: "channel",
    label: l,
    parent_id: null != C ? C.parent_id : null,
    channel_flags_old: v("channel_flags"),
    channel_is_muted_old: v("channel_is_muted"),
    channel_muted_until_old: v("channel_muted_until"),
    channel_is_overridden_old: v("channel_is_overridden"),
    channel_message_notification_settings_old: v("channel_message_notification_settings"),
    is_opt_in_only_change: O
  })
}

function C(e) {
  let t = r.default.isMuted(e),
    n = r.default.getMuteConfig(e);
  return {
    guild_suppress_everyone: r.default.isSuppressEveryoneEnabled(e),
    guild_suppress_roles: r.default.isSuppressRolesEnabled(e),
    guild_scheduled_events_muted: r.default.isMuteScheduledEventsEnabled(e),
    guild_is_muted: t,
    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
    guild_receive_mobile_push: r.default.isMobilePushEnabled(e),
    guild_message_notification_settings: p[r.default.getMessageNotifications(e)],
    guild_notify_highlights: r.default.getNotifyHighlights(e),
    guild_flags: r.default.getGuildFlags(e)
  }
}

function S(e) {
  let t = new Map;
  return e.forEach(e => t.set(e, C(e))), t
}

function A(e, t) {
  let n = r.default.isChannelMuted(e, t),
    i = r.default.getChannelMuteConfig(e, t);
  return {
    channel_is_muted: n,
    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
    channel_message_notification_settings: p[r.default.getChannelMessageNotifications(e, t)],
    channel_flags: r.default.getChannelIdFlags(e, t)
  }
}

function T(e, t) {
  let n = new Map;
  return t.forEach(t => n.set(t, A(e, t))), n
}