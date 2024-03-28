"use strict";
n.r(t), n.d(t, {
  UnreadBarMode: function() {
    return l
  }
}), n("47120");
var l, a, s, i, r, o, u = n("392711"),
  d = n.n(u),
  c = n("442837"),
  f = n("570140"),
  h = n("220444"),
  C = n("565799"),
  p = n("501655"),
  m = n("569471"),
  g = n("592125"),
  E = n("430824"),
  S = n("306680"),
  _ = n("914010"),
  I = n("9156"),
  N = n("938475"),
  T = n("823379"),
  A = n("734307"),
  L = n("981631");
(s = l || (l = {})).HIDDEN = "hidden", s.UNREAD = "unread", s.MENTIONS = "mentions", s.VOICE_CHANNELS = "voice-channels";
let v = {
    mode: "hidden",
    mentionCount: 0,
    targetChannelId: null
  },
  x = {
    topBar: v,
    bottomBar: v
  },
  R = {},
  M = {};

function O(e) {
  let t = g.default.getChannel(e);
  return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? m.default.isMuted(t.id) : I.default.isChannelMuted(t.getGuildId(), t.id)) && (0, h.getHasImportantUnread)(t)
}

function y(e) {
  let t = g.default.getChannel(e);
  if (null == t) return !1;
  let n = t.getGuildId();
  if (null == n) return !1;
  let l = I.default.isGuildCollapsed(n),
    a = I.default.isChannelMuted(n, t.id);
  return (!l || !a) && S.default.getMentionCount(e) > 0
}

function D(e) {
  return !I.default.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? C.default.getMutableParticipants(e.id, p.StageChannelParticipantNamedIndex.SPEAKER).length > 0 : N.default.getVoiceStatesForChannel(e).length > 0)
}

function b(e) {
  var t, n, l;
  let {
    guildChannels: a
  } = A.default.getGuildWithoutChangingCommunityRows(e), s = a.getChannels(null !== (t = M[e]) && void 0 !== t ? t : []);
  if (null == s || 0 === s.length) return !1;
  let i = null,
    r = null,
    o = null,
    u = null,
    c = !0,
    f = !0,
    h = !1,
    C = a.getCategoryFromSection(a.voiceChannelsSectionNumber),
    p = null !== (n = null == C ? void 0 : C.getShownChannelIds()) && void 0 !== n ? n : [],
    [m, g, E] = a.getSlicedChannels(s);
  for (let e = 0; e < g.length; e++) {
    let t = g[e];
    if ((O(t.id) || d().some(t.threadIds, O)) && (f = !1), (y(t.id) || d().some(t.threadIds, y)) && (c = !1), p.includes(t.id) && (h = !0), !f && !c && h) break
  }
  let _ = 0,
    I = !1,
    N = 0,
    T = !1;
  if (f || c)
    for (let e = m.length - 1; e >= 0; e--) {
      let t = m[e];
      (O(t.id) || d().some(t.threadIds, O)) && (null == r && (r = t.id), I = !0), (y(t.id) || d().some(t.threadIds, y)) && (null == i && (i = t.id), _ += S.default.getMentionCount(t.id) + d().sumBy(t.threadIds, S.default.getMentionCount))
    }
  if (f || c)
    for (let e = 0; e < E.length; e++) {
      let t = E[e];
      if (!f && !c) break;
      (O(t.id) || d().some(t.threadIds, O)) && (null == u && (u = t.id), T = !0), (y(t.id) || d().some(t.threadIds, y)) && (null == o && (o = t.id), N += S.default.getMentionCount(t.id) + d().sumBy(t.threadIds, S.default.getMentionCount))
    }
  let L = null,
    x = null,
    b = null !== (l = null == C ? void 0 : C.getChannelRecords()) && void 0 !== l ? l : [];
  c && N > 0 ? L = {
    mode: "mentions",
    mentionCount: N,
    targetChannelId: o
  } : !h && d().some(b, D) ? L = {
    mode: "voice-channels",
    mentionCount: 0,
    targetChannelId: null
  } : f && T && (L = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: u
  }), c && _ > 0 ? x = {
    mode: "mentions",
    mentionCount: _,
    targetChannelId: i
  } : f && I && (x = {
    mode: "unread",
    mentionCount: 0,
    targetChannelId: r
  });
  let j = null != x && (null == L || "mentions" !== L.mode && "mentions" === x.mode),
    G = null != L && ("mentions" === L.mode || !j);
  return R[e] = {
    topBar: j && null != x ? x : v,
    bottomBar: G && null != L ? L : v
  }, !0
}
let j = d().throttle(b, 200);

function G(e) {
  let {
    guildId: t
  } = e, n = E.default.getGuild(t);
  return !!(null != n && n.hasFeature(L.GuildFeatures.COMMUNITY)) && j(t)
}

function U(e) {
  let {
    id: t
  } = e, n = g.default.getChannel(t);
  if (null == n) return !1;
  let l = E.default.getGuild(n.guild_id);
  return !!(null != l && l.hasFeature(L.GuildFeatures.COMMUNITY)) && j(n.guild_id)
}

function P(e) {
  let {
    channel: t
  } = e, n = g.default.getChannel(t.id);
  if (null == n) return !1;
  let l = E.default.getGuild(t.guild_id);
  return !!(null != l && l.hasFeature(L.GuildFeatures.COMMUNITY)) && j(n.guild_id)
}

function w(e) {
  let {
    channelId: t
  } = e, n = g.default.getChannel(t);
  if (null == n) return !1;
  let l = E.default.getGuild(n.guild_id);
  return !!(null != l && l.hasFeature(L.GuildFeatures.COMMUNITY)) && _.default.getGuildId() === n.guild_id && j(n.guild_id)
}

function F(e) {
  let {
    guildId: t
  } = e;
  return null != t && j(t)
}
class B extends(a = c.default.Store) {
  initialize() {
    this.waitFor(A.default, S.default, I.default, m.default, N.default, _.default, E.default)
  }
  getUnreadStateForGuildId(e) {
    var t;
    return null !== (t = R[e]) && void 0 !== t ? t : x
  }
}
o = "ChannelListUnreadsStore", (r = "displayName") in(i = B) ? Object.defineProperty(i, r, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = o, t.default = new B(f.default, {
  UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
    let {
      guildId: t,
      channelIds: n
    } = e, l = E.default.getGuild(t);
    return !!(null != l && l.hasFeature(L.GuildFeatures.COMMUNITY)) && null != n && !d().isEqual(M[t], n) && (M[t] = n, b(t))
  },
  BULK_ACK: function(e) {
    let {
      channels: t
    } = e, n = !1;
    return d()(t).map(e => {
      var t;
      let {
        channelId: n
      } = e;
      return null === (t = g.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id
    }).filter(T.isNotNullish).uniq().forEach(e => {
      let t = E.default.getGuild(e);
      null != t && t.hasFeature(L.GuildFeatures.COMMUNITY) && j(e) && (n = !0)
    }), n
  },
  CHANNEL_ACK: w,
  CHANNEL_DELETE: P,
  CHANNEL_LOCAL_ACK: w,
  MESSAGE_ACK: w,
  MESSAGE_CREATE: w,
  MESSAGE_DELETE_BULK: w,
  MESSAGE_DELETE: w,
  PASSIVE_UPDATE_V1: function(e) {
    let t = E.default.getGuild(e.guildId);
    return !!(null != e.channels && null != t && t.hasFeature(L.GuildFeatures.COMMUNITY)) && j(e.guildId)
  },
  RESORT_THREADS: w,
  THREAD_CREATE: P,
  THREAD_DELETE: P,
  THREAD_LIST_SYNC: G,
  THREAD_MEMBER_UPDATE: U,
  THREAD_MEMBERS_UPDATE: U,
  THREAD_UPDATE: P,
  BULK_CLEAR_RECENTS: G,
  CATEGORY_COLLAPSE_ALL: G,
  CATEGORY_EXPAND_ALL: G,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = _.default.getGuildId();
    if (null == n || !new Set(t.map(e => e.guildId)).has(n)) return !1;
    let l = R[n];
    return null != l && "voice-channels" === l.bottomBar.mode && j(n)
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: F,
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: F,
  USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
    let {
      userGuildSettings: t
    } = e;
    for (let e of t) null != e.guild_id && j(e.guild_id)
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: F,
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: F
})