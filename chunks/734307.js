t(47120);
var i, l, a, E, r = t(392711),
  o = t.n(r),
  d = t(442837),
  u = t(570140),
  _ = t(317381),
  s = t(430198),
  c = t(924301),
  C = t(601070),
  A = t(569471),
  S = t(581883),
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

function v() {
  let e = P.Z.getChannelId(),
n = P.Z.getVoiceChannelId();
  return m = e, H = n, Z.clear();
}

function p(e) {
  let {
guild: {
  id: n
}
  } = e;
  return Z.clearGuildId(n);
}

function M(e) {
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

function w(e) {
  let {
channel: n
  } = e;
  return Z.nonPositionalChannelIdUpdate(n.id);
}

function j(e) {
  let {
id: n
  } = e;
  return Z.nonPositionalChannelIdUpdate(n);
}

function F() {
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

function y(e) {
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
class K extends(i = d.ZP.Store) {
  initialize() {
this.waitFor(C.Z, T.default, I.Z, L.Z, D.Z, _.ZP, N.Z, s.Z, c.ZP, A.Z, U.Z, h.ZP, P.Z, R.ZP, S.Z);
  }
  getGuild(e, n) {
var t, i;
let l = Z.getGuild(e, null !== (t = null == n ? void 0 : n.guildActionRows) && void 0 !== t ? t : [], null !== (i = null == n ? void 0 : n.channelNoticeRows) && void 0 !== i ? i : []);
return {
  guildChannelsVersion: l.version,
  guildChannels: l
};
  }
  getGuildWithoutChangingGuildActionRows(e) {
let n = Z.getGuildChannelRowsOnly(e);
return {
  guildChannelsVersion: n.version,
  guildChannels: n
};
  }
  recentsChannelCount(e) {
if (null == e)
  return 0;
let n = Z.getGuildChannelRowsOnly(e);
return n.getCategoryFromSection(n.recentsSectionNumber).getShownChannelIds().length;
  }
}
E = 'ChannelListStore', (a = 'displayName') in(l = K) ? Object.defineProperty(l, a, {
  value: E,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = E, n.Z = new K(u.Z, {
  APPLICATION_FETCH_FAIL: Y,
  APPLICATION_FETCH_SUCCESS: Y,
  APPLICATION_FETCH: Y,
  APPLICATIONS_FETCH_FAIL: Y,
  APPLICATIONS_FETCH_SUCCESS: Y,
  APPLICATIONS_FETCH: Y,
  BACKGROUND_SYNC: v,
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
  CACHE_LOADED_LAZY: v,
  CATEGORY_COLLAPSE_ALL: x,
  CATEGORY_COLLAPSE: y,
  CATEGORY_EXPAND_ALL: x,
  CATEGORY_EXPAND: y,
  CHANNEL_ACK: b,
  CHANNEL_COLLAPSE: function(e) {
var n;
let {
  channelId: t
} = e;
return Z.clearGuildId(null === (n = L.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id);
  },
  CHANNEL_CREATE: M,
  CHANNEL_DELETE: M,
  CHANNEL_LOCAL_ACK: b,
  CHANNEL_MUTE_EXPIRED: x,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: b,
  CHANNEL_SELECT: F,
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
  CONNECTION_OPEN: v,
  CURRENT_USER_UPDATE: v,
  DECAY_READ_STATES: v,
  DEV_TOOLS_DESIGN_TOGGLE_SET: v,
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
  GUILD_CREATE: p,
  GUILD_DELETE: p,
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
  GUILD_UPDATE: p,
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
  NOTIFICATION_SETTINGS_UPDATE: v,
  OVERLAY_INITIALIZE: v,
  PASSIVE_UPDATE_V2: function(e) {
return Z.clearGuildId(e.guildId);
  },
  RECOMPUTE_READ_STATES: v,
  RESORT_THREADS: b,
  SET_RECENTLY_ACTIVE_COLLAPSED: v,
  THREAD_CREATE: w,
  THREAD_DELETE: function(e) {
let {
  channel: n
} = e;
return Z.nonPositionalChannelUpdate(n);
  },
  THREAD_LIST_SYNC: x,
  THREAD_MEMBER_UPDATE: j,
  THREAD_MEMBERS_UPDATE: j,
  THREAD_UPDATE: w,
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
  VOICE_CHANNEL_SELECT: F,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
return Z.nonPositionalChannelIdUpdate(e.id);
  },
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: n
} = e, t = F(), i = new Set();
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