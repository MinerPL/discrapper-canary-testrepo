"use strict";
n.d(t, {
  U2: function() {
    return W
  },
  wL: function() {
    return j
  }
}), n(47120), n(789020);
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(798140),
  u = n(160404),
  _ = n(312400),
  d = n(569471),
  c = n(131704),
  E = n(630388),
  I = n(709054),
  T = n(592125),
  h = n(430824),
  S = n(594174),
  f = n(981631),
  N = n(468788),
  A = n(490897),
  m = n(526761);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = {},
  C = {},
  p = !1,
  g = !1,
  L = {
    flags: 0
  },
  v = new l.ZP,
  D = new l.ZP,
  M = {
    suppress_everyone: !1,
    suppress_roles: !1,
    mute_scheduled_events: !1,
    mobile_push: !0,
    muted: !1,
    message_notifications: f.bL.ALL_MESSAGES,
    flags: 0,
    channel_overrides: {},
    notify_highlights: f.gLR.NULL,
    hide_muted_channels: !1,
    version: -1,
    mute_config: null
  },
  P = {
    [f.bL.ALL_MESSAGES]: {
      ...M,
      message_notifications: f.bL.ALL_MESSAGES
    },
    [f.bL.ONLY_MENTIONS]: {
      ...M,
      message_notifications: f.bL.ONLY_MENTIONS
    }
  },
  y = {},
  U = {},
  b = new Set,
  G = new Set,
  w = {},
  k = {};

function B(e, t) {
  var n;
  let i = R[e],
    r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    o = W(t.channel_overrides),
    a = {
      ...j(e),
      ...i,
      ...t,
      channel_overrides: o
    };
  v.clearTimer(e), s().forEach(r, e => {
    D.clearTimer(e.channel_id)
  }), x(e, a), R[e] = a, y[e] = q(R[e]);
  let l = s().filter(a.channel_overrides, e => {
    var t;
    return E.yE(null !== (t = e.flags) && void 0 !== t ? t : 0, m.ic.OPT_IN_ENABLED)
  });
  U[e] = new Set(l.map(e => e.channel_id)),
    function(e) {
      var t;
      if (null == e) return;
      let n = new Set(U[e]),
        i = null !== (t = w[e]) && void 0 !== t ? t : {};
      for (let e in i) {
        let t = i[e];
        E.yE(t.flags, m.ic.OPT_IN_ENABLED) ? n.add(e) : n.delete(e)
      }
      Object.keys(i).length > 0 ? k[e] = n : delete k[e]
    }(e), delete C[e]
}

function x(e, t) {
  !0 === t.muted && v.setTimer(e, t.mute_config, () => {
    V(e, {
      muted: !1
    }), a.Z.dispatch({
      type: "GUILD_MUTE_EXPIRED",
      guildId: e
    })
  }) && (t.muted = !1), s().forEach(t.channel_overrides, t => {
    !0 === t.muted && D.setTimer(t.channel_id, t.mute_config, () => {
      Z(e, t.channel_id, {
        muted: !1
      }), a.Z.dispatch({
        type: "CHANNEL_MUTE_EXPIRED",
        guildId: e,
        channelId: t.channel_id
      })
    }) && (t.muted = !1)
  })
}

function V(e, t) {
  var n;
  let i = R[e];
  B(e, {
    channel_overrides: null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
    ...t
  })
}

function Z(e, t, n) {
  let i = Y(e, t, n);
  F(e, {
    [t]: i
  })
}

function H(e, t) {
  var n;
  let i = {},
    r = null !== (n = null != e ? w[e] : null) && void 0 !== n ? n : {};
  I.default.keys(t).forEach(n => {
    var s;
    let o = Y(e, n, t[n]);
    i[n] = o, r[n] = {
      flags: null !== (s = o.flags) && void 0 !== s ? s : 0
    }
  }), null != e && (w[e] = {
    ...w[e],
    ...r
  }), F(e, i)
}

function F(e, t) {
  var n;
  let i = R[e],
    r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {};
  B(e, {
    channel_overrides: null == i ? t : {
      ...r,
      ...t
    }
  })
}

function Y(e, t, n) {
  var i;
  let r = R[e],
    s = null !== (i = null == r ? void 0 : r.channel_overrides) && void 0 !== i ? i : {};
  return {
    channel_id: t,
    muted: !1,
    ...s[t],
    ...n
  }
}

function j(e) {
  let t = h.Z.getGuild(e);
  return P[null != t ? t.defaultMessageNotifications : f.bL.ALL_MESSAGES]
}

function W() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e instanceof Array ? s().keyBy(e, "channel_id") : e
}

function K(e) {
  var t;
  return null !== (t = R[e]) && void 0 !== t ? t : j(e)
}

function z(e) {
  p = E.yE(e.flags, N.c.USE_NEW_NOTIFICATIONS), g = E.yE(e.flags, N.c.MENTION_ON_ALL_MESSAGES), L = e
}

function q(e) {
  return new Set(null != e.channel_overrides ? s()(e.channel_overrides).filter(e => (0, l.m$)(e)).map(e => e.channel_id).value() : null)
}

function X() {
  return !0
}

function Q() {
  return p && _.xT.getCurrentConfig({
    location: "UserGuildSettingsStore"
  }, {
    autoTrackExposure: !1
  }).enabled
}
class J extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(S.default, h.Z, u.Z, d.Z), null != e) {
      var t, n;
      p = null !== (t = e.useNewNotifications) && void 0 !== t && t, "userGuildSettings" in e && (R = e.userGuildSettings, U = s().mapValues(null !== (n = e.optedInChannelsByGuild) && void 0 !== n ? n : {}, e => new Set(e)), s().forEach(R, (e, t) => {
        y[t] = q(e)
      }))
    }
  }
  getState() {
    return {
      useNewNotifications: p
    }
  }
  get mentionOnAllMessages() {
    return g
  }
  isSuppressEveryoneEnabled(e) {
    return K(e).suppress_everyone
  }
  isSuppressRolesEnabled(e) {
    return K(e).suppress_roles
  }
  isMuteScheduledEventsEnabled(e) {
    return K(e).mute_scheduled_events
  }
  isMobilePushEnabled(e) {
    return K(e).mobile_push
  }
  isMuted(e) {
    let t = K(e);
    return (0, l.m$)(t)
  }
  isTemporarilyMuted(e) {
    let t = K(e);
    return (0, l.Cl)(t)
  }
  getMuteConfig(e) {
    return K(e).mute_config
  }
  getMessageNotifications(e) {
    return K(e).message_notifications
  }
  getChannelOverrides(e) {
    var t;
    return null !== (t = K(e).channel_overrides) && void 0 !== t ? t : {}
  }
  getNotifyHighlights(e) {
    return K(e).notify_highlights
  }
  getGuildFlags(e) {
    return K(e).flags
  }
  getChannelMessageNotifications(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null == n || null == n.message_notifications ? f.bL.NULL : n.message_notifications
  }
  getChannelMuteConfig(e, t) {
    let n = this.getChannelOverrides(e)[t];
    return null != n ? n.mute_config : null
  }
  getMutedChannels(e) {
    var t;
    return null !== (t = y[e]) && void 0 !== t ? t : b
  }
  isChannelMuted(e, t) {
    var n;
    let i = T.Z.getChannel(t);
    return e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e, this.getMutedChannels(e).has(t)
  }
  isCategoryMuted(e, t) {
    let n = T.Z.getChannel(t);
    if (null == n) return !1;
    let i = n.parent_id;
    return null != i && this.getMutedChannels(e).has(i)
  }
  resolvedMessageNotifications(e) {
    let t = this.getChannelMessageNotifications(e.guild_id, e.id);
    if (t !== f.bL.NULL) return t;
    if (null != e.parent_id) {
      let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
      if (t !== f.bL.NULL) return t
    }
    return this.getMessageNotifications(e.guild_id)
  }
  resolveUnreadSetting(e) {
    if (c.Ec.has(e.type) || (0, c.hv)(e.type) || !Q()) return A.i.ALL_MESSAGES;
    let t = this.getChannelUnreadSetting(e.guild_id, e.id);
    if (t !== A.i.UNSET) return t;
    if (null != e.parent_id) {
      let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
      if (t !== A.i.UNSET) return t
    }
    let n = this.getGuildUnreadSetting(e.guild_id);
    return n !== A.i.UNSET ? n : this.resolvedMessageNotifications(e) === f.bL.ALL_MESSAGES ? A.i.ALL_MESSAGES : A.i.ONLY_MENTIONS
  }
  isGuildOrCategoryOrChannelMuted(e, t) {
    return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t)
  }
  allowNoMessages(e) {
    return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === f.bL.NO_MESSAGES || this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e)
  }
  allowAllMessages(e) {
    return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === f.bL.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
  }
  isGuildCollapsed(e) {
    var t;
    return (null === (t = R[e]) || void 0 === t ? void 0 : t.hide_muted_channels) === !0
  }
  getAllSettings() {
    return {
      userGuildSettings: R,
      mutedChannels: y,
      optedInChannelsByGuild: U
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
      if (E.yE(t.flags, m.ic.NEW_FORUM_THREADS_ON)) return !0;
      if (E.yE(t.flags, m.ic.NEW_FORUM_THREADS_OFF)) return !1
    }
    return this.resolvedMessageNotifications(e) === f.bL.ALL_MESSAGES
  }
  isOptInEnabled(e) {
    return null != e && (u.Z.isFullServerPreview(e) ? u.Z.isOptInEnabled(e) : E.yE(this.getGuildFlags(e), m.vc.OPT_IN_CHANNELS_ON))
  }
  isChannelRecordOrParentOptedIn(e, t) {
    return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t))
  }
  isChannelOrParentOptedIn(e, t, n) {
    return this.isChannelRecordOrParentOptedIn(T.Z.getChannel(t), n)
  }
  isChannelOptedIn(e, t) {
    var n, i;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e) return !1;
    if (u.Z.isFullServerPreview(e)) return u.Z.isChannelOptedIn(e, t);
    if (r && null != k[e]) return k[e].has(t);
    let s = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
    return E.yE(s, m.ic.OPT_IN_ENABLED)
  }
  getOptedInChannels(e) {
    var t, n;
    return u.Z.isFullServerPreview(e) ? null !== (t = u.Z.getViewingChannels(e)) && void 0 !== t ? t : G : null !== (n = U[e]) && void 0 !== n ? n : G
  }
  getOptedInChannelsWithPendingUpdates(e) {
    return k[e]
  }
  getPendingChannelUpdates(e) {
    return w[e]
  }
  getGuildFavorites(e) {
    if (u.Z.isFullServerPreview(e)) return null;
    if (null == C[e]) {
      let t = s().filter(this.getChannelOverrides(e), t => {
        var n, i;
        return E.yE(null !== (i = t.flags) && void 0 !== i ? i : 0, m.ic.FAVORITED) && (null === (n = T.Z.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e
      });
      C[e] = t.map(e => e.channel_id)
    }
    return C[e]
  }
  isFavorite(e, t) {
    var n;
    return !u.Z.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0
  }
  isMessagesFavorite(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return E.yE(i, m.ic.FAVORITED)
  }
  isAddedToMessages(e) {
    var t, n;
    let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
    return E.yE(i, m.ic.OPT_IN_ENABLED)
  }
  getAddedToMessages() {
    var e;
    return null !== (e = U.null) && void 0 !== e ? e : G
  }
  get accountNotificationSettings() {
    return L
  }
  get useNewNotifications() {
    return p
  }
  getGuildUnreadSetting(e) {
    if (!Q()) return A.i.ALL_MESSAGES;
    let t = this.getGuildFlags(e);
    return E.yE(t, m.vc.UNREADS_ALL_MESSAGES) ? A.i.ALL_MESSAGES : E.yE(t, m.vc.UNREADS_ONLY_MENTIONS) ? A.i.ONLY_MENTIONS : A.i.UNSET
  }
  resolveGuildUnreadSetting(e) {
    let t = this.getGuildFlags(e.id);
    return !Q() || E.yE(t, m.vc.UNREADS_ALL_MESSAGES) ? A.i.ALL_MESSAGES : E.yE(t, m.vc.UNREADS_ONLY_MENTIONS) ? A.i.ONLY_MENTIONS : e.defaultMessageNotifications === f.bL.ALL_MESSAGES ? A.i.ALL_MESSAGES : A.i.ONLY_MENTIONS
  }
  getChannelRecordUnreadSetting(e) {
    return this.getChannelUnreadSetting(e.guild_id, e.id)
  }
  getChannelUnreadSetting(e, t) {
    let n = this.getChannelIdFlags(e, t);
    return E.yE(n, m.ic.UNREADS_ALL_MESSAGES) ? A.i.ALL_MESSAGES : E.yE(n, m.ic.UNREADS_ONLY_MENTIONS) ? A.i.ONLY_MENTIONS : A.i.UNSET
  }
}
O(J, "displayName", "UserGuildSettingsStore"), O(J, "persistKey", "collapsedGuilds");
let $ = new J(a.Z, {
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      B(e.guild_id, {
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
    V(t, n)
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function(e) {
    let {
      guildId: t,
      settings: n
    } = e;
    V(t, n), H(t, n.channel_overrides)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n,
      settings: i
    } = e;
    null != t && null != i.flags && (w[t] = {
      ...w[t],
      [n]: {
        flags: i.flags
      }
    }), Z(t, n, i)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
    let {
      guildId: t,
      overrides: n
    } = e;
    return !(null == t || u.Z.isFullServerPreview(t)) && (H(t, n), !0)
  },
  CONNECTION_OPEN: function(e) {
    z(e.notificationSettings), v.reset(), D.reset(), !e.userGuildSettings.partial && (R = {}, y = {}, U = {});
    let t = new Set;
    for (let n in e.userGuildSettings.entries.forEach(e => {
        !("channel_overrides" in e) && (e.channel_overrides = {}), B(e.guild_id, e), null != e.guild_id && t.add(e.guild_id)
      }), R) !t.has(n) && x(n, R[n])
  },
  CACHE_LOADED: function(e) {
    null != e.userGuildSettings && 0 !== e.userGuildSettings.length && (R = {}, y = {}, U = {}, e.userGuildSettings.forEach(e => {
      let t = e.guild_id;
      R[t] = e;
      let n = new Set,
        i = new Set;
      for (let t in e.channel_overrides) {
        var r;
        let s = e.channel_overrides[t];
        (0, l.m$)(s) && n.add(t), E.yE(null !== (r = s.flags) && void 0 !== r ? r : 0, m.ic.OPT_IN_ENABLED) && i.add(t)
      }
      y[t] = n, U[t] = i
    }))
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      allUserGuildSettings: t
    } = e, {
      userGuildSettings: n,
      mutedChannels: i,
      optedInChannelsByGuild: r
    } = t;
    R = {
      ...n
    }, y = {}, U = {}, I.default.keys(i).forEach(e => {
      y[e] = new Set(i[e])
    }), I.default.keys(r).forEach(e => {
      U[e] = new Set(r[e])
    })
  },
  GUILD_CREATE: X,
  GUILD_UPDATE: X,
  GUILD_TOGGLE_COLLAPSE_MUTED: function(e) {
    let {
      guildId: t
    } = e, n = null == R[t] ? j(t) : R[t];
    R[t] = {
      ...n,
      guild_id: t,
      hide_muted_channels: !0 !== n.hide_muted_channels
    }
  },
  IMPERSONATE_UPDATE: X,
  IMPERSONATE_STOP: X,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function(e) {
    let {
      guildId: t,
      updates: n
    } = e;
    if (null == t) return !1;
    let i = w[t];
    if (null == i) return !1;
    for (let e in n) s().isEqual(n[e], i[e]) && delete i[e]
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return !1;
    delete w[t], delete k[t]
  },
  NOTIFICATION_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    z(t)
  },
  GUILD_MUTE_EXPIRED: () => !0,
  CHANNEL_MUTE_EXPIRED: () => !0
});
t.ZP = $