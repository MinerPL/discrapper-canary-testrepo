"use strict";
n.d(t, {
  $R: function() {
    return S
  },
  GA: function() {
    return O
  },
  I: function() {
    return C
  },
  Ib: function() {
    return i
  },
  UE: function() {
    return h
  },
  Wq: function() {
    return f
  },
  ZB: function() {
    return r
  },
  jz: function() {
    return m
  },
  rU: function() {
    return R
  },
  sK: function() {
    return A
  },
  wK: function() {
    return p
  }
}), n(789020), n(47120);
var i, r, s, o, a = n(367907),
  l = n(601992),
  u = n(592125),
  _ = n(375954),
  d = n(9156);
n(626135);
var c = n(630388),
  E = n(981631),
  I = n(490897),
  T = n(526761);
(s = i || (i = {})).GUILD = "guild", s.CHANNEL = "channel", s.ACCOUNT = "account", (o = r || (r = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", o.ForumThreadsCreatedOff = "disabled forum thread created notifs", o.SuppressEveryoneOn = "enabled suppress everyone", o.SuppressEveryoneOff = "disabled suppress everyone", o.SuppressRolesOn = "enabled suppress roles", o.SuppressRolesOff = "disabled suppress roles", o.HighlightsOn = "enabled highlights", o.HighlightsOff = "disabled highlights", o.MobilePushOn = "enabled mobile push notifications", o.MobilePushOff = "disabled mobile push notifications", o.UnreadsAll = "unreads set to all messages", o.UnreadsMentions = "unreads set to mentions", o.UnreadsDefault = "unreads set to the default", o.NotificationsAll = "notifications set to all messages", o.NotificationsMentions = "notifications set to mentions", o.NotificationsNothing = "notifications set to nothing", o.NotificationsDefault = "notifications set to the default", o.PresetAll = "notification preset set to all messages", o.PresetMentions = "notification preset set to mentions", o.PresetNothing = "notification preset set to nothing", o.PresetDefault = "notification preset set to the default", o.OptedIn = "opted in to entity", o.OptedOut = "opted out from entity", o.Favorited = "favorited", o.UnFavorited = "unfavorited", o.Muted = "muted", o.Unmuted = "unmuted", o.MutedScheduledEvents = "muted scheduled events", o.UnmutedScheduledEvents = "unmuted scheduled events", o.OverrideCreated = "channel override created", o.OverrideDeleted = "channel override deleted";
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
    unreads: e => e === I.i.ALL_MESSAGES ? "unreads set to all messages" : e === I.i.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
    notifications: e => e === E.bL.ALL_MESSAGES ? "notifications set to all messages" : e === E.bL.ONLY_MENTIONS ? "notifications set to mentions" : e === E.bL.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
  },
  S = Object.freeze({
    [E.bL.ALL_MESSAGES]: "All",
    [E.bL.ONLY_MENTIONS]: "Mentions",
    [E.bL.NO_MESSAGES]: "Nothing",
    [E.bL.NULL]: null
  });

function f(e, t, n, i, r) {
  var s, o;
  let u = function(e) {
      var t, n, i, r, s, o, a;
      let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = null != l.mute_config && null != l.mute_config.end_time ? new Date(l.mute_config.end_time).getTime() : e.guild_muted_until,
        _ = null != l.message_notifications ? S[l.message_notifications] : e.guild_message_notification_settings;
      return {
        guild_muted_until: u,
        guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
        guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
        guild_message_notification_settings: _,
        guild_suppress_roles: null !== (i = l.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
        guild_receive_mobile_push: null !== (r = l.mobile_push) && void 0 !== r ? r : e.guild_receive_mobile_push,
        guild_notify_highlights: null !== (s = l.notify_highlights) && void 0 !== s ? s : e.guild_notify_highlights,
        guild_suppress_everyone: null !== (o = l.suppress_everyone) && void 0 !== o ? o : e.guild_suppress_everyone,
        guild_scheduled_events_muted: null !== (a = l.mute_scheduled_events) && void 0 !== a ? a : e.guild_scheduled_events_muted
      }
    },
    _ = u(n),
    d = u(O(e), t),
    I = N(_, d, "RETURN_PREVIOUS_WHEN_CHANGED"),
    h = null !== (s = I("guild_flags")) && void 0 !== s ? s : 0,
    f = (null !== (o = d.guild_flags) && void 0 !== o ? o : 0) ^ h,
    A = 0 === (0, c.M1)(f, T.vc.OPT_IN_CHANNELS_OFF, T.vc.OPT_IN_CHANNELS_ON);
  a.ZP.trackWithMetadata(E.rMx.NOTIFICATION_SETTINGS_UPDATED, {
    ...d,
    ...l.Z.getStats(e),
    location: r,
    guild_id: e,
    update_type: "guild",
    label: i,
    guild_flags_old: I("guild_flags"),
    guild_is_muted_old: I("guild_is_muted"),
    guild_suppress_roles_old: I("guild_suppress_roles"),
    guild_notify_highlights_old: I("guild_notify_highlights"),
    guild_suppress_everyone_old: I("guild_suppress_everyone"),
    guild_receive_mobile_push_old: I("guild_receive_mobile_push"),
    guild_scheduled_events_muted_old: I("guild_scheduled_events_muted"),
    guild_message_notification_settings_old: I("guild_message_notification_settings"),
    is_opt_in_only_change: A
  })
}

function N(e, t, n) {
  return i => {
    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
  }
}

function A(e) {
  return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
}

function m(e, t, n, i, r, s) {
  var o, d, I, h;
  let f = function(t) {
      var n, i;
      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = null !== (n = r.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
        o = null != r.message_notifications ? S[r.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
        a = null == e ? null : !0 === s || null != o;
      return {
        channel_is_muted: s,
        channel_is_overridden: a,
        channel_flags: null !== (i = r.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
        channel_message_notification_settings: o,
        channel_muted_until: A(r.mute_config)
      }
    },
    m = f(i),
    O = f(C(e, t), n),
    R = N(m, O, "RETURN_PREVIOUS_WHEN_CHANGED"),
    p = u.Z.getChannel(t),
    g = null !== (d = R("channel_flags")) && void 0 !== d ? d : 0,
    L = (null !== (I = O.channel_flags) && void 0 !== I ? I : 0) ^ g,
    v = 0 === (0, c.M1)(L, T.ic.FAVORITED, T.ic.OPT_IN_ENABLED),
    D = null !== (h = null === (o = _.Z.getLastMessage(t)) || void 0 === o ? void 0 : o.type) && void 0 !== h ? h : null;
  a.ZP.trackWithMetadata(E.rMx.NOTIFICATION_SETTINGS_UPDATED, {
    ...O,
    ...l.Z.getStats(e),
    location: s,
    guild_id: e,
    channel_id: t,
    update_type: "channel",
    label: r,
    parent_id: null != p ? p.parent_id : null,
    channel_flags_old: R("channel_flags"),
    channel_is_muted_old: R("channel_is_muted"),
    channel_muted_until_old: R("channel_muted_until"),
    channel_is_overridden_old: R("channel_is_overridden"),
    channel_message_notification_settings_old: R("channel_message_notification_settings"),
    is_opt_in_only_change: v,
    last_message_type: D
  })
}

function O(e) {
  let t = d.ZP.isMuted(e),
    n = d.ZP.getMuteConfig(e);
  return {
    guild_suppress_everyone: d.ZP.isSuppressEveryoneEnabled(e),
    guild_suppress_roles: d.ZP.isSuppressRolesEnabled(e),
    guild_scheduled_events_muted: d.ZP.isMuteScheduledEventsEnabled(e),
    guild_is_muted: t,
    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
    guild_receive_mobile_push: d.ZP.isMobilePushEnabled(e),
    guild_message_notification_settings: S[d.ZP.getMessageNotifications(e)],
    guild_notify_highlights: d.ZP.getNotifyHighlights(e),
    guild_flags: d.ZP.getGuildFlags(e)
  }
}

function R(e) {
  let t = new Map;
  return e.forEach(e => t.set(e, O(e))), t
}

function C(e, t) {
  let n = d.ZP.isChannelMuted(e, t),
    i = d.ZP.getChannelMuteConfig(e, t);
  return {
    channel_is_muted: n,
    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
    channel_message_notification_settings: S[d.ZP.getChannelMessageNotifications(e, t)],
    channel_flags: d.ZP.getChannelIdFlags(e, t)
  }
}

function p(e, t) {
  let n = new Map;
  return t.forEach(t => n.set(t, C(e, t))), n
}