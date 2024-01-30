"use strict";
n.r(t), n.d(t, {
  default: function() {
    return X
  }
}), n("222007"), n("702976");
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("668597"),
  l = n("38654"),
  u = n("640497"),
  d = n("755624"),
  c = n("233069"),
  f = n("568734"),
  _ = n("42203"),
  h = n("305961"),
  g = n("697218"),
  m = n("49111"),
  E = n("76618"),
  p = n("133335"),
  v = n("397336");
let S = {},
  T = {},
  I = {},
  C = !1,
  A = !1,
  y = {
    flags: 0
  },
  N = new o.default,
  R = new o.default,
  O = {
    suppress_everyone: !1,
    suppress_roles: !1,
    mute_scheduled_events: !1,
    mobile_push: !0,
    muted: !1,
    message_notifications: m.UserNotificationSettings.ALL_MESSAGES,
    flags: 0,
    channel_overrides: {},
    notify_highlights: m.HighlightSettings.NULL
  },
  D = {
    [m.UserNotificationSettings.ALL_MESSAGES]: {
      ...O,
      message_notifications: m.UserNotificationSettings.ALL_MESSAGES
    },
    [m.UserNotificationSettings.ONLY_MENTIONS]: {
      ...O,
      message_notifications: m.UserNotificationSettings.ONLY_MENTIONS
    }
  },
  P = {},
  b = {},
  L = new Set,
  M = {},
  U = {};

function k(e, t) {
  var n;
  let i = S[e],
    r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    a = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e instanceof Array ? s.keyBy(e, "channel_id") : e
    }(t.channel_overrides),
    o = {
      ...B(e),
      ...i,
      ...t,
      channel_overrides: a
    };
  N.clearTimer(e), !0 === o.muted && N.setTimer(e, o.mute_config, () => {
    w(e, {
      muted: !1
    }), q.emitChange()
  }), s.forEach(r, e => {
    R.clearTimer(e.channel_id)
  }), s.forEach(a, t => {
    !0 === t.muted && R.setTimer(t.channel_id, t.mute_config, () => {
      V(e, t.channel_id, {
        muted: !1
      }), q.emitChange()
    })
  }), S[e] = o, P[e] = j(S[e]);
  let l = s.filter(o.channel_overrides, e => {
    var t;
    return f.hasFlag(null !== (t = e.flags) && void 0 !== t ? t : 0, v.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  });
  b[e] = new Set(l.map(e => e.channel_id)),
    function(e) {
      var t;
      if (null == e) return;
      let n = new Set(b[e]),
        i = null !== (t = M[e]) && void 0 !== t ? t : {};
      for (let e in i) {
        let t = i[e];
        f.hasFlag(t.flags, v.ChannelNotificationSettingsFlags.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
      }
      Object.keys(i).length > 0 ? U[e] = n : delete U[e]
    }(e), delete I[e]
}

function w(e, t) {
  var n;
  let i = S[e];
  k(e, {
    channel_overrides: null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    ...t
  })
}

function V(e, t, n) {
  let i = x(e, t, n);
  F(e, {
    [t]: i
  })
}

function G(e, t) {
  var n;
  let i = {},
    s = null !== (n = null != e ? M[e] : null) && void 0 !== n ? n : {};
  Object.keys(t).forEach(n => {
    var r;
    let a = x(e, n, t[n]);
    i[n] = a, s[n] = {
      flags: null !== (r = a.flags) && void 0 !== r ? r : 0
    }
  }), null != e && (M[e] = {
    ...M[e],
    ...s
  }), F(e, i)
}

function F(e, t) {
  var n;
  let i = S[e],
    s = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {};
  k(e, {
    channel_overrides: null == i ? t : {
      ...s,
      ...t
    }
  })
}

function x(e, t, n) {
  var i;
  let s = S[e],
    r = null !== (i = null == s ? void 0 : s.channel_overrides) && void 0 !== i ? i : {};
  return {
    channel_id: t,
    muted: !1,
    ...r[t],
    ...n
  }
}

function B(e) {
  let t = h.default.getGuild(e),
    n = null != t ? t.defaultMessageNotifications : m.UserNotificationSettings.ALL_MESSAGES;
  return D[n]
}

function H(e) {
  var t;
  return null !== (t = S[e]) && void 0 !== t ? t : B(e)
}

function Y(e) {
  C = f.hasFlag(e.flags, E.AccountNotificationFlags.USE_NEW_NOTIFICATIONS), A = f.hasFlag(e.flags, E.AccountNotificationFlags.MENTION_ON_ALL_MESSAGES), y = e
}

function j(e) {
  return new Set(null != e.channel_overrides ? s(e.channel_overrides).filter(e => (0, o.computeIsMuted)(e)).map(e => e.channel_id).value() : null)
}

function W() {
  return !0
}

function K() {
  return C && u.NotificationsExperiment.getCurrentConfig({
    location: "UserGuildSettingsStore"
  }, {
    autoTrackExposure: !1
  }).enabled
}
class z extends r.default.PersistedStore {
  initialize(e) {
    if (this.waitFor(g.default, h.default, l.default, d.default), null != e) {
      var t;
      T = e.collapsedGuilds, S = e.userGuildSettings, b = s.mapValues(null !== (t = e.optedInChannelsByGuild) && void 0 !== t ? t : {}, e => new Set(e)), null != e.useNewNotifications && (C = e.useNewNotifications), s.forEach(S, (e, t) => {
        P[t] = j(e)
      })
    }
  }
  getState() {
    return {
      collapsedGuilds: T,
      userGuildSettings: S,
      optedInChannelsByGuild: b,
      useNewNotifications: C
    }
  }
  get mentionOnAllMessages() {
    return A
  }
  isSuppressEveryoneEnabled(e) {
    return H(e).suppress_everyone
  }
  isSuppressRolesEnabled(e) {
    return H(e).suppress_roles
  }
  isMuteScheduledEventsEnabled(e) {
    return H(e).mute_scheduled_events
  }
  isMobilePushEnabled(e) {
    return H(e).mobile_push
  }
  isMuted(e) {
    let t = H(e);
    return (0, o.computeIsMuted)(t)
  }
  isTemporarilyMuted(e) {
    let t = H(e);
    return (0, o.isTemporarilyMuted)(t)
  }
  getMuteConfig(e) {
    let t = H(e);
    return t.mute_config
  }
  getMessageNotifications(e) {
    return H(e).message_notifications
  }
  getChannelOverrides(e) {
    var t;
    return null !== (t = H(e).channel_overrides) && void 0 !== t ? t : {}
  }
  getNotifyHighlights(e) {
    return H(e).notify_highlights
  }
  getGuildFlags(e) {
    return H(e).flags
  }
  getChannelMessageNotifications(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null == n || null == n.message_notifications ? m.UserNotificationSettings.NULL : n.message_notifications
  }
  getChannelMuteConfig(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null != n ? n.mute_config : null
  }
  getMutedChannels(e) {
    var t;
    return null !== (t = P[e]) && void 0 !== t ? t : L
  }
  isChannelMuted(e, t) {
    var n;
    let i = _.default.getChannel(t);
    return e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
  }
  isCategoryMuted(e, t) {
    let n = _.default.getChannel(t);
    if (null == n) return !1;
    let i = n.parent_id;
    return null != i && this.getMutedChannels(e).has(i)
  }
  resolvedMessageNotifications(e) {
    let t = this.getChannelMessageNotifications(e.guild_id, e.id);
    if (t !== m.UserNotificationSettings.NULL) return t;
    if (null != e.parent_id) {
      let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
      if (t !== m.UserNotificationSettings.NULL) return t
    }
    return this.getMessageNotifications(e.guild_id)
  }
  resolveUnreadSetting(e) {
    if (c.THREAD_CHANNEL_TYPES.has(e.type) || (0, c.isPrivate)(e.type)) return p.UnreadSetting.ALL_MESSAGES;
    let t = this.getChannelUnreadSetting(e.guild_id, e.id);
    if (t !== p.UnreadSetting.UNSET) return t;
    if (null != e.parent_id) {
      let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
      if (t !== p.UnreadSetting.UNSET) return t
    }
    let n = this.getGuildUnreadSetting(e.guild_id);
    return n !== p.UnreadSetting.UNSET ? n : this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES ? p.UnreadSetting.ALL_MESSAGES : p.UnreadSetting.ONLY_MENTIONS
  }
  isGuildOrCategoryOrChannelMuted(e, t) {
    return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
  }
  allowNoMessages(e) {
    return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === m.UserNotificationSettings.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
  }
  allowAllMessages(e) {
    return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
  }
  isGuildCollapsed(e) {
    return T[e] || !1
  }
  getAllSettings() {
    return {
      userGuildSettings: S,
      mutedChannels: P,
      collapsedGuilds: T,
      optedInChannelsByGuild: b
    }
  }
  getChannelIdFlags(e, t) {
    var n;
    let i = this.getChannelOverrides(e)[t];
    return null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0
  }
  getChannelFlags(e) {
    return this.getChannelIdFlags(e.guild_id, e.id)
  }
  getNewForumThreadsCreated(e) {
    let t = this.getChannelOverrides(e.guild_id)[e.id];
    if (null != t && null != t.flags) {
      if (f.hasFlag(t.flags, v.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON)) return !0;
      if (f.hasFlag(t.flags, v.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF)) return !1
    }
    return this.resolvedMessageNotifications(e) === m.UserNotificationSettings.ALL_MESSAGES
  }
  isOptInEnabled(e) {
    return null != e && (l.default.isFullServerPreview(e) ? l.default.isOptInEnabled(e) : f.hasFlag(this.getGuildFlags(e), v.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON))
  }
  isChannelRecordOrParentOptedIn(e, t) {
    return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
  }
  isChannelOrParentOptedIn(e, t, n) {
    return this.isChannelRecordOrParentOptedIn(_.default.getChannel(t), n)
  }
  isChannelOptedIn(e, t) {
    var n, i;
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return !1;
    if (l.default.isFullServerPreview(e)) return l.default.isChannelOptedIn(e, t);
    if (s && null != U[e]) return U[e].has(t);
    let r = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
    return f.hasFlag(r, v.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  }
  getOptedInChannels(e) {
    var t, n;
    return l.default.isFullServerPreview(e) ? null !== (t = l.default.getViewingChannels(e)) && void 0 !== t ? t : L : null !== (n = b[e]) && void 0 !== n ? n : L
  }
  getOptedInChannelsWithPendingUpdates(e) {
    return U[e]
  }
  getPendingChannelUpdates(e) {
    return M[e]
  }
  getGuildFavorites(e) {
    if (l.default.isFullServerPreview(e)) return null;
    if (null == I[e]) {
      let t = s.filter(this.getChannelOverrides(e), t => {
        var n, i;
        return f.hasFlag(null !== (i = t.flags) && void 0 !== i ? i : 0, v.ChannelNotificationSettingsFlags.FAVORITED) && (null === (n = _.default.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
      });
      I[e] = t.map(e => e.channel_id)
    }
    return I[e]
  }
  isFavorite(e, t) {
    var n;
    return !l.default.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0
  }
  isMessagesFavorite(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return f.hasFlag(i, v.ChannelNotificationSettingsFlags.FAVORITED)
  }
  isAddedToMessages(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return f.hasFlag(i, v.ChannelNotificationSettingsFlags.OPT_IN_ENABLED)
  }
  getAddedToMessages() {
    var e;
    return null !== (e = b.null) && void 0 !== e ? e : L
  }
  get accountNotificationSettings() {
    return y
  }
  get useNewNotifications() {
    return C
  }
  getGuildUnreadSetting(e) {
    let t = this.getGuildFlags(e);
    return f.hasFlag(t, v.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? p.UnreadSetting.ALL_MESSAGES : f.hasFlag(t, v.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? p.UnreadSetting.ONLY_MENTIONS : p.UnreadSetting.UNSET
  }
  resolveGuildUnreadSetting(e) {
    let t = this.getGuildFlags(e.id);
    return !K() || f.hasFlag(t, v.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? p.UnreadSetting.ALL_MESSAGES : f.hasFlag(t, v.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? p.UnreadSetting.ONLY_MENTIONS : e.defaultMessageNotifications === m.UserNotificationSettings.ALL_MESSAGES ? p.UnreadSetting.ALL_MESSAGES : p.UnreadSetting.ONLY_MENTIONS
  }
  getGuildUnreadMode(e) {
    return this.isMuted(e.id) ? p.UnreadMode.NONE : this.resolveGuildUnreadSetting(e) === p.UnreadSetting.ALL_MESSAGES ? p.UnreadMode.IMPORTANT : p.UnreadMode.LESS_IMPORTANT
  }
  getChannelRecordUnreadSetting(e) {
    return this.getChannelUnreadSetting(e.guild_id, e.id)
  }
  getChannelUnreadSetting(e, t) {
    let n = this.getChannelIdFlags(e, t);
    return f.hasFlag(n, v.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) ? p.UnreadSetting.ALL_MESSAGES : f.hasFlag(n, v.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS) ? p.UnreadSetting.ONLY_MENTIONS : p.UnreadSetting.UNSET
  }
  getChannelUnreadMode(e) {
    return c.THREAD_CHANNEL_TYPES.has(e.type) ? d.default.isMuted(e.id) ? p.UnreadMode.NONE : p.UnreadMode.IMPORTANT : this.getMutedChannels(e.guild_id).has(e.id) ? p.UnreadMode.NONE : (0, c.isPrivate)(e.type) || !K() ? p.UnreadMode.IMPORTANT : this.resolveUnreadSetting(e) === p.UnreadSetting.ALL_MESSAGES ? p.UnreadMode.IMPORTANT : p.UnreadMode.LESS_IMPORTANT
  }
}
z.displayName = "UserGuildSettingsStore", z.persistKey = "collapsedGuilds", z.migrations = [e => ({
  collapsedGuilds: e,
  userGuildSettings: {}
})];
let q = new z(a.default, {
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      null != e.guild_id && (T[e.guild_id] = !0 === e.hide_muted_channels), k(e.guild_id, {
        channel_overrides: {},
        ...e
      })
    })
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: function(e) {
    let {
      guildId: t,
      settings: n
    } = e;
    w(t, n)
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function(e) {
    let {
      guildId: t,
      settings: n
    } = e;
    w(t, n), G(t, n.channel_overrides)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      settings: i
    } = e;
    null != t && null != i.flags && (M[t] = {
      ...M[t],
      [n]: {
        flags: i.flags
      }
    }), V(t, n, i)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
    let {
      guildId: t,
      overrides: n
    } = e;
    return !(null == t || l.default.isFullServerPreview(t)) && (G(t, n), !0)
  },
  CONNECTION_OPEN: function(e) {
    Y(e.notificationSettings), !e.userGuildSettings.partial && (N.reset(), R.reset(), S = {}, P = {}, b = {}), !e.userGuildSettings.partial && (T = {}, e.userGuildSettings.entries.forEach(e => {
      null != e.guild_id && (T[e.guild_id] = !0 === e.hide_muted_channels)
    })), e.userGuildSettings.entries.forEach(e => {
      !("channel_overrides" in e) && (e.channel_overrides = {}), k(e.guild_id, e)
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      allUserGuildSettings: t
    } = e, {
      userGuildSettings: n,
      mutedChannels: i,
      collapsedGuilds: s,
      optedInChannelsByGuild: r
    } = t;
    S = {
      ...n
    }, P = {}, b = {}, Object.keys(i).forEach(e => {
      P[e] = new Set(i[e])
    }), Object.keys(r).forEach(e => {
      b[e] = new Set(r[e])
    }), T = {
      ...s
    }
  },
  GUILD_CREATE: W,
  GUILD_UPDATE: W,
  GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
    let {
      guildId: t
    } = e;
    T[t] = !T[t]
  },
  IMPERSONATE_UPDATE: W,
  IMPERSONATE_STOP: W,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    if (null == t) return !1;
    let i = M[t];
    if (null == i) return !1;
    for (let e in n) s.isEqual(n[e], i[e]) && delete i[e]
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return !1;
    delete M[t], delete U[t]
  },
  NOTIFICATION_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    Y(t)
  }
});
var X = q