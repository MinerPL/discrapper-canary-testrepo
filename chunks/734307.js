t(47120);
var i, l, E, a, r = t(392711),
  o = t.n(r),
  _ = t(442837),
  u = t(570140),
  d = t(317381),
  s = t(430198),
  c = t(924301),
  C = t(601070),
  S = t(569471),
  A = t(581883),
  T = t(314897),
  I = t(680089),
  L = t(592125),
  D = t(58468),
  N = t(77498),
  U = t(496675),
  h = t(306680),
  P = t(944486),
  R = t(9156),
  f = t(823379),
  g = t(709054),
  O = t(540126),
  G = t(526761);
let m = null,
  H = null,
  Z = new O.ZP();

function p() {
  let e = P.Z.getChannelId(),
n = P.Z.getVoiceChannelId();
  return m = e, H = n, Z.clear();
}

function M(e) {
  let {
guild: {
  id: n
}
  } = e;
  return Z.clearGuildId(n);
}

function v(e) {
  let {
channel: {
  guild_id: n
}
  } = e;
  return Z.clearGuildId(n);
}

function x(e) {
  let {
guildId: n
  } = e;
  return Z.clearGuildId(n);
}

function b(e) {
  let {
channelId: n
  } = e;
  return Z.nonPositionalChannelIdUpdate(n);
}

function B() {
  return null != m && Z.nonPositionalChannelIdUpdate(m);
}

function j(e) {
  let {
channel: n
  } = e;
  return Z.nonPositionalChannelIdUpdate(n.id);
}

function w(e) {
  let {
id: n
  } = e;
  return Z.nonPositionalChannelIdUpdate(n);
}

function y() {
  let e = P.Z.getChannelId(),
n = P.Z.getVoiceChannelId(),
t = m !== e || H !== n;
  return !!t && (o()([
m,
H,
e,
n
  ]).uniq().forEach(e => {
null != e && Z.nonPositionalChannelIdUpdate(e) && (t = !0);
  }), m = e, H = n, !0);
}

function F(e) {
  let {
id: n
  } = e, t = L.Z.getChannel(n);
  return null == t ? Z.clearGuildId(n) : Z.clearGuildId(t.guild_id);
}

function V(e) {
  let {
guildId: n
  } = e;
  return Z.clearGuildId(n);
}

function Y() {
  return Z.updateSubtitles();
}

function k(e) {
  let {
guildScheduledEvent: n
  } = e;
  return Z.updateSubtitles(n.guild_id);
}
class K extends(i = _.ZP.Store) {
  initialize() {
this.waitFor(C.Z, T.default, I.Z, L.Z, D.Z, d.ZP, N.Z, s.Z, c.ZP, S.Z, U.Z, h.ZP, P.Z, R.ZP, A.Z);
  }
  getGuild(e, n) {
let t = Z.getGuild(e, n);
return {
  guildChannelsVersion: t.version,
  guildChannels: t
};
  }
  getGuildWithoutChangingCommunityRows(e) {
let n = Z.getGuildWithoutCommunityRows(e);
return {
  guildChannelsVersion: n.version,
  guildChannels: n
};
  }
  recentsChannelCount(e) {
if (null == e)
  return 0;
let n = Z.getGuildWithoutCommunityRows(e);
return n.getCategoryFromSection(n.recentsSectionNumber).getShownChannelIds().length;
  }
}
a = 'ChannelListStore', (E = 'displayName') in(l = K) ? Object.defineProperty(l, E, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[E] = a, n.Z = new K(u.Z, {
  APPLICATION_FETCH_FAIL: Y,
  APPLICATION_FETCH_SUCCESS: Y,
  APPLICATION_FETCH: Y,
  APPLICATIONS_FETCH_FAIL: Y,
  APPLICATIONS_FETCH_SUCCESS: Y,
  APPLICATIONS_FETCH: Y,
  BACKGROUND_SYNC: p,
  BULK_ACK: function(e) {
let {
  channels: n
} = e, t = !1;
return o()(n).map(e => {
  var n;
  return null === (n = L.Z.getChannel(e.channelId)) || void 0 === n ? void 0 : n.guild_id;
}).filter(f.lm).uniq().forEach(e => {
  Z.clearGuildId(e) && (t = !0);
}), t;
  },
  BULK_CLEAR_RECENTS: x,
  CACHE_LOADED_LAZY: p,
  CATEGORY_COLLAPSE_ALL: x,
  CATEGORY_COLLAPSE: F,
  CATEGORY_EXPAND_ALL: x,
  CATEGORY_EXPAND: F,
  CHANNEL_ACK: b,
  CHANNEL_COLLAPSE: function(e) {
var n;
let {
  channelId: t
} = e;
return Z.clearGuildId(null === (n = L.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id);
  },
  CHANNEL_CREATE: v,
  CHANNEL_DELETE: v,
  CHANNEL_LOCAL_ACK: b,
  CHANNEL_MUTE_EXPIRED: x,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: b,
  CHANNEL_SELECT: y,
  CHANNEL_STATUSES: function(e) {
return Z.clearGuildId(e.guildId);
  },
  CHANNEL_UPDATES: function(e) {
let {
  channels: n
} = e, t = !1;
return o()(n).map(e => e.guild_id).uniq().forEach(e => {
  Z.clearGuildId(e) && (t = !0);
}), t;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: Y,
  CONNECTION_OPEN: p,
  CURRENT_USER_UPDATE: p,
  DECAY_READ_STATES: p,
  DEV_TOOLS_DESIGN_TOGGLE_SET: p,
  DISABLE_AUTOMATIC_ACK: b,
  DISMISS_FAVORITE_SUGGESTION: function(e) {
let {
  channelId: n
} = e;
return Z.nonPositionalChannelIdUpdate(n);
  },
  DRAWER_CLOSE: B,
  DRAWER_OPEN: B,
  EMBEDDED_ACTIVITY_UPDATE: function(e) {
let {
  guildId: n,
  channelId: t
} = e;
return Z.updateSubtitles(n, t);
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
let {
  location: n
} = e;
return Z.updateSubtitles(n.guild_id, n.channel_id);
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
Y();
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
  ENABLE_AUTOMATIC_ACK: b,
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
let {
  guildId: n
} = e;
return Z.updateSubtitles(n);
  },
  GAMES_DATABASE_FETCH_FAIL: Y,
  GAMES_DATABASE_FETCH: Y,
  GAMES_DATABASE_UPDATE: Y,
  GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
  GUILD_CREATE: M,
  GUILD_DELETE: M,
  GUILD_MEMBER_UPDATE: function(e) {
let {
  guildId: n,
  user: t
} = e;
return T.default.getId() === t.id && Z.clearGuildId(n);
  },
  GUILD_MUTE_EXPIRED: x,
  GUILD_ROLE_CREATE: x,
  GUILD_ROLE_DELETE: x,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: x,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: x,
  GUILD_ROLE_UPDATE: x,
  GUILD_SCHEDULED_EVENT_CREATE: k,
  GUILD_SCHEDULED_EVENT_DELETE: k,
  GUILD_SCHEDULED_EVENT_UPDATE: k,
  GUILD_TOGGLE_COLLAPSE_MUTED: x,
  GUILD_UPDATE: M,
  IMPERSONATE_STOP: x,
  IMPERSONATE_UPDATE: x,
  LOAD_CHANNELS: function(e) {
e.channels.forEach(e => {
  let {
    guildId: n
  } = e;
  return Z.clearGuildId(n);
});
  },
  LOAD_MESSAGES_SUCCESS: b,
  MESSAGE_ACK: b,
  MESSAGE_CREATE: function(e) {
let {
  channelId: n
} = e;
return Z.nonPositionalChannelIdUpdate(n);
  },
  MESSAGE_DELETE_BULK: b,
  MESSAGE_DELETE: b,
  NOTIFICATION_SETTINGS_UPDATE: p,
  OVERLAY_INITIALIZE: p,
  PASSIVE_UPDATE_V2: function(e) {
return Z.clearGuildId(e.guildId);
  },
  RECOMPUTE_READ_STATES: p,
  RESORT_THREADS: b,
  SET_RECENTLY_ACTIVE_COLLAPSED: p,
  THREAD_CREATE: j,
  THREAD_DELETE: function(e) {
let {
  channel: n
} = e;
return Z.nonPositionalChannelUpdate(n);
  },
  THREAD_LIST_SYNC: x,
  THREAD_MEMBER_UPDATE: w,
  THREAD_MEMBERS_UPDATE: w,
  THREAD_UPDATE: j,
  TRY_ACK: b,
  UPDATE_CHANNEL_DIMENSIONS: b,
  UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
let {
  guildId: n
} = e;
Z.updateSubtitles(n);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: x,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: x,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
let {
  userGuildSettings: n
} = e;
n.forEach(e => {
  let {
    guild_id: n
  } = e;
  return Z.clearGuildId(n);
});
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: x,
  USER_GUILD_SETTINGS_GUILD_UPDATE: x,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
var n;
let {
  settings: t
} = e;
if (t.type !== G.yP.PRELOADED_USER_SETTINGS)
  return !1;
let i = null === (n = t.proto.guilds) || void 0 === n ? void 0 : n.guilds,
  l = !1;
return null != i && g.default.keys(i).forEach(e => {
  null != i[e].guildRecentsDismissedAt && (l = Z.updateRecentsCategory(e) || l);
}), l;
  },
  VOICE_CATEGORY_COLLAPSE: V,
  VOICE_CATEGORY_EXPAND: V,
  VOICE_CHANNEL_SELECT: y,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
return Z.nonPositionalChannelIdUpdate(e.id);
  },
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: n
} = e, t = y(), i = new Set();
for (let {
    channelId: e,
    oldChannelId: l
  }
  of n)
  null != l && !i.has(l) && (Z.nonPositionalChannelIdUpdate(l) && (t = !0), i.add(l)), null != e && !i.has(e) && (Z.nonPositionalChannelIdUpdate(e) && (t = !0), i.add(e));
return t;
  },
  WINDOW_FOCUS: B
});