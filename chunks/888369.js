"use strict";
n.r(t), n(47120), n(789020), n(724458);
var i = n(392711),
  r = n.n(i);
n(57132), n(140155);
var s = n(398758),
  o = n(601070),
  a = n(569471),
  l = n(195663),
  u = n(131704),
  _ = n(709054),
  d = n(314897),
  c = n(592125),
  E = n(430824),
  I = n(496675),
  T = n(306680),
  h = n(944486),
  S = n(412788),
  f = n(9156),
  N = n(594174),
  A = n(981631),
  m = n(176505),
  O = n(490897);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = A.kod,
  p = {},
  g = new Set,
  L = 0;

function v(e) {
  var t;
  let n = p[null != e ? e : C];
  return {
    unread: !1,
    unreadByType: {},
    unreadChannelId: null,
    mentionCount: 0,
    mentionCounts: {},
    ncMentionCount: 0,
    sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
  }
}

function D(e) {
  var t;
  return p[null != e ? e : C] = null !== (t = p[null != e ? e : C]) && void 0 !== t ? t : v(e)
}

function M(e) {
  let t = D(e);
  t.sentinel++, L++
}

function P(e, t, n) {
  return null != e.guild_id && n && !((0, u.Q5)(e.type) || f.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t
}

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return !(null == e || e.isGuildVocal() && 0 === t || e.hasFlag(m.zZ.IS_GUILD_RESOURCE_CHANNEL) || (0 === t || n) && (e.isThread() ? a.Z.isMuted(e.id) || f.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : f.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) || !e.isPrivate() && (P(e, t, (0, s.r1)(e.guild_id)) || !I.Z.can(e.accessPermissions, e))) && (t > 0 || f.ZP.resolveUnreadSetting(e) === O.i.ALL_MESSAGES)
}

function U(e) {
  switch (e) {
    case C:
    case null:
    case void 0:
      return null;
    default:
      return e
  }
}

function b(e, t) {
  let n = T.ZP.hasUnread(e, t);
  if (t === O.W.GUILD_EVENT) return !(f.ZP.isMuted(e) || f.ZP.isMuteScheduledEventsEnabled(e)) && n;
  return n
}

function G(e, t) {
  let n = v(e);
  return n.mentionCounts = {
    ...t.mentionCounts
  }, n.unreadByType = {
    ...t.unreadByType
  }, n
}

function w(e) {
  return e.unread = Object.values(e.unreadByType).some(e => e), e
}

function k(e, t) {}

function B(e, t, n) {
  return w(t), t.mentionCount = r()(t.mentionCounts).values().sum(), (t.unread !== n.unread || t.mentionCount !== n.mentionCount) && (p[null != e ? e : C] = t, null != e && (t.unread ? g.add(e) : g.delete(e)), L++, M(null != e ? e : C), k(t, n), !0)
}

function x(e, t) {
  let n = U(e),
    i = D(n),
    r = G(n, i),
    s = !1;
  if (t.forEach(e => {
      let t = c.Z.getChannel(e);
      if (null == t) {
        delete r.mentionCounts[e];
        return
      }
      if (t.getGuildId() !== n) return;
      let i = T.ZP.getMentionCount(e);
      null !== n && !s && T.ZP.hasUnread(t.id) && y(t, i, !0) && (s = !0, r.unreadChannelId = t.id), i > 0 && y(t, i) ? r.mentionCounts[t.id] = i : delete r.mentionCounts[t.id]
    }), r.unreadByType[O.W.CHANNEL] = s, r.unreadByType[O.W.CHANNEL] !== i.unreadByType[O.W.CHANNEL] && !r.unreadByType[O.W.CHANNEL]) {
    let e = c.Z.getChannel(i.unreadChannelId);
    if (!(null != e && !t.includes(e.id) && T.ZP.hasUnread(e.id) && y(e))) return Z(n);
    null != n && g.add(n), r.unreadByType[O.W.CHANNEL] = !0
  }
  return B(n, r, i)
}

function V(e, t) {
  if (null == e) return;
  let n = D(e),
    i = G(e, n);
  return i.unreadByType[O.W.GUILD_EVENT] = b(e, t), B(e, i, n)
}

function Z(e, t) {
  let n = U(e),
    i = v(n);
  if (null == n) {
    let e = c.Z.getMutablePrivateChannels();
    for (let t in e) {
      let n = e[t],
        r = T.ZP.getMentionCount(t);
      r > 0 && y(n, r) && (i.mentionCount += r, i.mentionCounts[n.id] = r)
    }
  } else {
    let e = f.ZP.isMuted(n);
    if (e && !1 === t) return !1;
    let r = f.ZP.getMutedChannels(n),
      l = f.ZP.getChannelOverrides(n),
      _ = (0, s.r1)(n),
      d = c.Z.getMutableBasicGuildChannelsForGuild(n);
    for (let t in d) {
      let n = d[t],
        s = e || r.has(t) || null != n.parent_id && r.has(n.parent_id),
        o = i.unreadByType[O.W.CHANNEL],
        {
          mentionCount: a,
          unread: c
        } = T.ZP.getGuildChannelUnreadState(n, _, l, s, o),
        E = a > 0;
      if (!E && s) continue;
      let h = !o && (!s || E) && c;
      (h || E) && function(e, t, n) {
        if ((0, u.bw)(e.type) && 0 === t || !I.Z.canBasicChannel((0, u.Gz)(e.type), e) || P(e, t, n)) return !1;
        return !("flags" in e && e.hasFlag(m.zZ.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || f.ZP.resolveUnreadSetting(e) === O.i.ALL_MESSAGES)
      }(n, a, _) && (h && (i.unreadByType[O.W.CHANNEL] = !0, i.unreadChannelId = t), E && (i.mentionCount += a, i.mentionCounts[n.id] = a))
    }
    let E = o.Z.getActiveJoinedThreadsForGuild(n);
    for (let t in E)
      for (let n in E[t]) {
        !i.unreadByType[O.W.CHANNEL] && T.ZP.hasUnread(n) && !a.Z.isMuted(n) && !e && (i.unreadByType[O.W.CHANNEL] = !0, i.unreadChannelId = n);
        let t = T.ZP.getMentionCount(n);
        t > 0 && (i.mentionCount += t, i.mentionCounts[n] = t)
      }!i.unreadByType[O.W.GUILD_EVENT] && b(n, O.W.GUILD_EVENT) && (i.unreadByType[O.W.GUILD_EVENT] = !0)
  }
  w(i);
  let r = D(n);
  return (i.unread !== r.unread || i.mentionCount !== r.mentionCount) && (p[null != n ? n : C] = i, null != n && (i.unread ? g.add(n) : g.delete(n)), L++, M(null != n ? n : C), k(i, r), !0)
}

function H(e) {
  let {
    guilds: t
  } = e;
  p = {}, L = 0, g = new Set, Z(null);
  let {
    length: n
  } = t;
  for (let e = 0; e < n; e++) {
    let n = t[e];
    null != n && Z(n.id)
  }
}

function F(e) {
  let {
    guilds: t,
    readState: n
  } = e;
  p = {}, L = 0, g = new Set;
  let i = n.entries.length < 500,
    r = new Set;
  for (let e of (i && n.entries.forEach(e => {
      if (null != e.mention_count && e.mention_count > 0) {
        if (null == e.read_state_type || e.read_state_type === O.W.CHANNEL) {
          var t;
          r.add(null === (t = c.Z.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id)
        } else r.add(e.id)
      }
    }), Z(null), t)) Z(e.id, i ? r.has(e.id) : void 0)
}

function Y() {
  for (let e of (p = {}, g = new Set, Z(null), Object.values(E.Z.getGuildIds()))) Z(e)
}

function j(e) {
  let {
    guild: t
  } = e;
  return Z(t.id)
}

function W(e) {
  let {
    guild: t
  } = e;
  return null != p[t.id] && (delete p[t.id], g.delete(t.id), L++, !0)
}

function K(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  return x(n, [t])
}

function z() {
  let e = c.Z.getChannel(h.Z.getChannelId());
  return null != e && x(e.getGuildId(), [e.id])
}

function q(e) {
  let {
    user: t,
    guildId: n
  } = e;
  return t.id === d.default.getId() && Z(n)
}

function X(e) {
  let {
    channelId: t
  } = e, n = c.Z.getChannel(t);
  return null != n && x(n.getGuildId(), [n.id])
}

function Q(e) {
  let {
    channelId: t
  } = e, n = c.Z.getChannel(t);
  if (null == n) return !1;
  if (null != n.guild_id) {
    let e = D(n.guild_id);
    if (((n.isThread() ? !a.Z.hasJoined(n.id) || a.Z.isMuted(n.id) : f.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[O.W.CHANNEL]) && 0 === T.ZP.getMentionCount(t)) return !1
  }
  return x(n.getGuildId(), [n.id])
}

function J(e) {
  let {
    channelId: t,
    guildId: n
  } = e;
  return n !== A.I_8 && null != t && x(n, [t])
}

function $(e) {
  let {
    channel: t
  } = e;
  return x(t.getGuildId(), [t.id])
}

function ee(e) {
  let {
    channels: t
  } = e;
  return r()(t).groupBy(e => e.getGuildId()).reduce((e, t, n) => x(n, t.map(e => e.id)) || e, !1)
}

function et(e) {
  let {
    channels: t
  } = e;
  return r()(t).map(e => {
    let {
      channelId: t
    } = e;
    return t
  }).filter(e => null != c.Z.getChannel(e)).groupBy(e => {
    var t;
    return null === (t = c.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
  }).reduce((e, t, n) => x(n, t) || e, !1)
}

function en(e) {
  let {
    channel: t
  } = e;
  return x(t.getGuildId(), [t.id, t.parent_id])
}

function ei(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return V(t.guild_id, O.W.GUILD_EVENT)
}

function er(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return V(t.guild_id, O.W.GUILD_EVENT)
}

function es(e) {
  let {
    id: t,
    ackType: n
  } = e;
  return V(t, n)
}

function eo(e) {
  let {
    id: t,
    guildId: n
  } = e;
  return x(n, [t])
}

function ea(e) {
  return (0, l.s)(e) && x(e.guildId, [e.id])
}

function el(e) {
  let {
    threads: t,
    guildId: n
  } = e;
  return x(n, t.filter(e => a.Z.hasJoined(e.id)).map(e => e.id))
}

function eu(e) {
  return !!(e.channels.length > 0) && x(e.guildId, e.channels.map(e => e.id))
}

function e_(e) {
  let {
    guildId: t
  } = e;
  return Z(t)
}

function ed(e) {
  let {
    guildId: t
  } = e;
  return Z(t)
}

function ec(e) {
  let {
    userGuildSettings: t
  } = e, n = new Set(t.map(e => {
    var t;
    return null !== (t = e.guild_id) && void 0 !== t ? t : C
  }));
  return _.default.keys(p).reduce((e, t) => n.has(t) && Z(t) || e, !1)
}

function eE() {
  for (let e in p) p[e].ncMentionCount = 0
}

function eI(e) {
  let {
    guildId: t
  } = e;
  return Z(t)
}
class eT extends S.Z {
  initialize() {
    this.waitFor(c.Z, h.Z, T.ZP, I.Z, d.default, N.default, f.ZP, o.Z, a.Z)
  }
  loadCache() {
    let e = this.readSnapshot(eT.LATEST_SNAPSHOT_VERSION);
    null != e && (p = e.guilds, g = new Set(e.unreadGuilds))
  }
  takeSnapshot() {
    return {
      version: eT.LATEST_SNAPSHOT_VERSION,
      data: {
        guilds: p,
        unreadGuilds: Array.from(g)
      }
    }
  }
  hasAnyUnread() {
    return g.size > 0
  }
  getStoreChangeSentinel() {
    return L
  }
  getMutableUnreadGuilds() {
    return g
  }
  getMutableGuildStates() {
    return p
  }
  hasUnread(e) {
    return g.has(e)
  }
  getMentionCount(e) {
    return D(e).mentionCount
  }
  getMutableGuildReadState(e) {
    return D(e)
  }
  getGuildHasUnreadIgnoreMuted(e) {
    let t = c.Z.getMutableGuildChannelsForGuild(e);
    for (let e in t) {
      let n = t[e];
      if (null != n) {
        if ((!n.isGuildVocal() || 0 !== T.ZP.getMentionCount(e)) && I.Z.can(n.accessPermissions, n) && T.ZP.hasUnreadOrMentions(e)) return !0
      }
    }
    let n = o.Z.getActiveJoinedThreadsForGuild(e);
    for (let e in n)
      if (null != c.Z.getChannel(e)) {
        for (let t in n[e])
          if (T.ZP.hasUnreadOrMentions(t)) return !0
      } return !!T.ZP.hasUnreadOrMentions(e, O.W.GUILD_EVENT) || !1
  }
  getTotalMentionCount(e) {
    let t = 0;
    for (let n in p) {
      let i = p[n];
      if (!0 !== e || n !== C) t += i.mentionCount
    }
    return t
  }
  getTotalNotificationsMentionCount(e) {
    let t = 0;
    for (let n in p) {
      let i = p[n];
      if (!0 !== e || n !== C) t += i.ncMentionCount
    }
    return t
  }
  getPrivateChannelMentionCount() {
    var e;
    let t = p[C];
    return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0
  }
  getMentionCountForChannels(e, t) {
    let n = 0,
      i = p[e];
    return null == i ? 0 : (t.forEach(e => {
      let t = i.mentionCounts[e];
      n += null != t ? t : 0
    }), n)
  }
  getMentionCountForPrivateChannel(e) {
    var t, n;
    return null !== (n = null === (t = p[C]) || void 0 === t ? void 0 : t.mentionCounts[e]) && void 0 !== n ? n : 0
  }
  getGuildChangeSentinel(e) {
    return D(e).sentinel
  }
  constructor() {
    super({
      CONNECTION_OPEN: F,
      OVERLAY_INITIALIZE: H,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      GUILD_CREATE: j,
      GUILD_DELETE: W,
      MESSAGE_CREATE: Q,
      MESSAGE_ACK: X,
      BULK_ACK: et,
      UPDATE_CHANNEL_DIMENSIONS: X,
      CHANNEL_SELECT: J,
      CHANNEL_DELETE: K,
      WINDOW_FOCUS: z,
      GUILD_ACK: e_,
      GUILD_ROLE_CREATE: ed,
      GUILD_ROLE_DELETE: ed,
      GUILD_ROLE_UPDATE: ed,
      CHANNEL_CREATE: $,
      CHANNEL_UPDATES: ee,
      THREAD_CREATE: en,
      THREAD_UPDATE: en,
      THREAD_DELETE: en,
      THREAD_LIST_SYNC: el,
      THREAD_MEMBER_UPDATE: eo,
      THREAD_MEMBERS_UPDATE: ea,
      PASSIVE_UPDATE_V2: eu,
      GUILD_MEMBER_UPDATE: q,
      USER_GUILD_SETTINGS_FULL_UPDATE: ec,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE: eI,
      USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eI,
      USER_GUILD_SETTINGS_GUILD_UPDATE: eI,
      USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eI,
      GUILD_FEATURE_ACK: es,
      GUILD_SCHEDULED_EVENT_CREATE: ei,
      GUILD_SCHEDULED_EVENT_UPDATE: ei,
      GUILD_SCHEDULED_EVENT_DELETE: er,
      CHANNEL_RTC_UPDATE_CHAT_OPEN: X,
      LOAD_MESSAGES_SUCCESS: X,
      CHANNEL_ACK: X,
      CHANNEL_LOCAL_ACK: X,
      NOTIFICATION_SETTINGS_UPDATE: Y,
      RECOMPUTE_READ_STATES: Y,
      VOICE_CHANNEL_SELECT: X,
      ENABLE_AUTOMATIC_ACK: X,
      RESORT_THREADS: X,
      NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eE,
      TRY_ACK: X
    })
  }
}
R(eT, "displayName", "GuildReadStateStore"), R(eT, "LATEST_SNAPSHOT_VERSION", 1), t.default = new eT