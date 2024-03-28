"use strict";
n.r(t), n("47120");
var l, a, i, u, r = n("392711"),
  d = n.n(r),
  E = n("442837"),
  o = n("570140"),
  s = n("317381"),
  _ = n("430198"),
  c = n("924301"),
  C = n("601070"),
  S = n("569471"),
  T = n("581883"),
  A = n("314897"),
  I = n("680089"),
  f = n("592125"),
  L = n("58468"),
  N = n("77498"),
  D = n("496675"),
  h = n("306680"),
  U = n("944486"),
  R = n("9156"),
  g = n("823379"),
  P = n("709054"),
  m = n("540126"),
  O = n("526761");
let G = null,
  p = null,
  H = new m.default;

function x() {
  let e = U.default.getChannelId(),
    t = U.default.getVoiceChannelId();
  return G = e, p = t, H.clear()
}

function M(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  return H.clearGuildId(t)
}

function v(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  return H.clearGuildId(t)
}

function j(e) {
  let {
    guildId: t
  } = e;
  return H.clearGuildId(t)
}

function y(e) {
  let {
    channelId: t
  } = e;
  return H.nonPositionalChannelIdUpdate(t)
}

function F() {
  return null != G && H.nonPositionalChannelIdUpdate(G)
}

function B(e) {
  let {
    channel: t
  } = e;
  return H.nonPositionalChannelIdUpdate(t.id)
}

function b(e) {
  let {
    id: t
  } = e;
  return H.nonPositionalChannelIdUpdate(t)
}

function w() {
  let e = U.default.getChannelId(),
    t = U.default.getVoiceChannelId(),
    n = G !== e || p !== t;
  return !!n && (d()([G, p, e, t]).uniq().forEach(e => {
    null != e && H.nonPositionalChannelIdUpdate(e) && (n = !0)
  }), G = e, p = t, !0)
}

function V(e) {
  let {
    id: t
  } = e, n = f.default.getChannel(t);
  return null == n ? H.clearGuildId(t) : H.clearGuildId(n.guild_id)
}

function k(e) {
  let {
    guildId: t
  } = e;
  return H.clearGuildId(t)
}

function Y() {
  return H.updateSubtitles()
}

function K(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return H.updateSubtitles(t.guild_id)
}
class W extends(l = E.default.Store) {
  initialize() {
    this.waitFor(C.default, A.default, I.default, f.default, L.default, s.default, N.default, _.default, c.default, S.default, D.default, h.default, U.default, R.default, T.default)
  }
  getGuild(e, t) {
    let n = H.getGuild(e, t);
    return {
      guildChannelsVersion: n.version,
      guildChannels: n
    }
  }
  getGuildWithoutChangingCommunityRows(e) {
    let t = H.getGuildWithoutCommunityRows(e);
    return {
      guildChannelsVersion: t.version,
      guildChannels: t
    }
  }
  recentsChannelCount(e) {
    if (null == e) return 0;
    let t = H.getGuildWithoutCommunityRows(e);
    return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length
  }
}
u = "ChannelListStore", (i = "displayName") in(a = W) ? Object.defineProperty(a, i, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = u, t.default = new W(o.default, {
  APPLICATION_FETCH_FAIL: Y,
  APPLICATION_FETCH_SUCCESS: Y,
  APPLICATION_FETCH: Y,
  APPLICATIONS_FETCH_FAIL: Y,
  APPLICATIONS_FETCH_SUCCESS: Y,
  APPLICATIONS_FETCH: Y,
  BACKGROUND_SYNC: x,
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return d()(t).map(e => {
      var t;
      return null === (t = f.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
    }).filter(g.isNotNullish).uniq().forEach(e => {
      H.clearGuildId(e) && (n = !0)
    }), n
  },
  BULK_CLEAR_RECENTS: j,
  CACHE_LOADED_LAZY: x,
  CATEGORY_COLLAPSE_ALL: j,
  CATEGORY_COLLAPSE: V,
  CATEGORY_EXPAND_ALL: j,
  CATEGORY_EXPAND: V,
  CHANNEL_ACK: y,
  CHANNEL_COLLAPSE: function(e) {
    var t;
    let {
      channelId: n
    } = e;
    return H.clearGuildId(null === (t = f.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
  },
  CHANNEL_CREATE: v,
  CHANNEL_DELETE: v,
  CHANNEL_LOCAL_ACK: y,
  CHANNEL_MUTE_EXPIRED: j,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: y,
  CHANNEL_SELECT: w,
  CHANNEL_STATUSES: function(e) {
    return H.clearGuildId(e.guildId)
  },
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return d()(t).map(e => e.guild_id).uniq().forEach(e => {
      H.clearGuildId(e) && (n = !0)
    }), n
  },
  CONNECTION_OPEN_SUPPLEMENTAL: Y,
  CONNECTION_OPEN: x,
  CURRENT_USER_UPDATE: x,
  DECAY_READ_STATES: x,
  DEV_TOOLS_DESIGN_TOGGLE_SET: x,
  DISABLE_AUTOMATIC_ACK: y,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
    let {
      channelId: t
    } = e;
    return H.nonPositionalChannelIdUpdate(t)
  },
  DRAWER_CLOSE: F,
  DRAWER_OPEN: F,
  EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return H.updateSubtitles(t, n)
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
    Y()
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
  ENABLE_AUTOMATIC_ACK: y,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t
    } = e;
    return H.updateSubtitles(t)
  },
  GAMES_DATABASE_FETCH_FAIL: Y,
  GAMES_DATABASE_FETCH: Y,
  GAMES_DATABASE_UPDATE: Y,
  GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
  GUILD_CREATE: M,
  GUILD_DELETE: M,
  GUILD_FEED_FETCH_SUCCESS: Y,
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return A.default.getId() === n.id && H.clearGuildId(t)
  },
  GUILD_MUTE_EXPIRED: j,
  GUILD_ROLE_CREATE: j,
  GUILD_ROLE_DELETE: j,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: j,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: j,
  GUILD_ROLE_UPDATE: j,
  GUILD_SCHEDULED_EVENT_CREATE: K,
  GUILD_SCHEDULED_EVENT_DELETE: K,
  GUILD_SCHEDULED_EVENT_UPDATE: K,
  GUILD_TOGGLE_COLLAPSE_MUTED: j,
  GUILD_UPDATE: M,
  IMPERSONATE_STOP: j,
  IMPERSONATE_UPDATE: j,
  LOAD_CHANNELS: function(e) {
    e.channels.forEach(e => {
      let {
        guildId: t
      } = e;
      return H.clearGuildId(t)
    })
  },
  LOAD_MESSAGES_SUCCESS: y,
  MESSAGE_ACK: y,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t
    } = e;
    return H.nonPositionalChannelIdUpdate(t)
  },
  MESSAGE_DELETE_BULK: y,
  MESSAGE_DELETE: y,
  NOTIFICATION_SETTINGS_UPDATE: x,
  OVERLAY_INITIALIZE: x,
  PASSIVE_UPDATE_V1: function(e) {
    return null != e.channels && (H.clearGuildId(e.guildId), !0)
  },
  RECOMPUTE_READ_STATES: x,
  RESORT_THREADS: y,
  SET_RECENTLY_ACTIVE_COLLAPSED: x,
  THREAD_CREATE: B,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return H.nonPositionalChannelUpdate(t)
  },
  THREAD_LIST_SYNC: j,
  THREAD_MEMBER_UPDATE: b,
  THREAD_MEMBERS_UPDATE: b,
  THREAD_UPDATE: B,
  TRY_ACK: y,
  UPDATE_CHANNEL_DIMENSIONS: y,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
    let {
      guildId: t
    } = e;
    H.updateSubtitles(t)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: j,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: j,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    t.forEach(e => {
      let {
        guild_id: t
      } = e;
      return H.clearGuildId(t)
    })
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: j,
  USER_GUILD_SETTINGS_GUILD_UPDATE: j,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    var t;
    let {
      settings: n
    } = e;
    if (n.type !== O.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
    let l = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
      a = !1;
    return null != l && P.default.keys(l).forEach(e => {
      null != l[e].guildRecentsDismissedAt && (a = H.updateRecentsCategory(e) || a)
    }), a
  },
  VOICE_CATEGORY_COLLAPSE: k,
  VOICE_CATEGORY_EXPAND: k,
  VOICE_CHANNEL_SELECT: w,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    return H.nonPositionalChannelIdUpdate(e.id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = w(), l = new Set;
    for (let {
        channelId: e,
        oldChannelId: a
      }
      of t) null != a && !l.has(a) && (H.nonPositionalChannelIdUpdate(a) && (n = !0), l.add(a)), null != e && !l.has(e) && (H.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
    return n
  },
  WINDOW_FOCUS: F
})