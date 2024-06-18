"use strict";
n(47120);
var i = n(592125),
  r = n(650774),
  s = n(944486),
  o = n(412788),
  a = n(368321),
  l = n(553245),
  u = n(143806),
  _ = n(814074),
  d = n(582142),
  c = n(989263),
  E = n(872261);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = null,
  h = new l.b(750, 500),
  S = new u.S(15),
  f = !1;
class N extends o.Z {
  initialize() {
    this.waitFor(i.Z), this.waitFor(s.Z), this.waitFor(r.Z), this.syncWith([a.Z], () => !0), this.syncWith([s.Z], A)
  }
  loadCache() {
    let e = this.readSnapshot(N.LATEST_SNAPSHOT_VERSION);
    null != e && (f = !0, N.mergeSnapshot(e))
  }
  canEvictOrphans() {
    return f
  }
  saveLimit(e) {
    let t = i.Z.getBasicChannel(e);
    return null != t && (0, d.p)(t) || null != t && h.has(e) ? 25 : 1
  }
  getSaveableChannels() {
    let e = i.Z.getChannelIds(null).map(e => ({
      guildId: null,
      channelId: e
    }));
    return a.Z.isLowDisk ? null != T ? [...e, T] : e : [...e, ...h.values()]
  }
  takeSnapshot() {
    return {
      version: N.LATEST_SNAPSHOT_VERSION,
      data: {
        channels: [...h.allValues()].filter(e => !e.fallback),
        penalized: [...S.keys()],
        lastChannel: T
      }
    }
  }
  static mergeSnapshot(e) {
    let t = h,
      n = S;
    for (let n of (h = new l.b(h.primaryCapacity, h.extendedCapacity), S = new u.S(S.capacity), T = null != T ? T : e.lastChannel, [e.channels, t.values()]))
      for (let e of n) !e.fallback && h.put(e.channelId, e);
    for (let t of [e.penalized, n.keys()])
      for (let e of t) S.put(e, null)
  }
  static recordChannel(e) {
    let t = i.Z.getBasicChannel(e);
    if (null != t && (0, c.v)(t)) {
      var n;
      let i = {
        guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
        channelId: e,
        channelType: t.type
      };
      T = i, h.put(e, i), (0, _.Hr)(t) && null != S.put(e, null) && h.delete(e)
    }
  }
  static deleteChannel(e) {
    h.delete(e)
  }
  static deleteGuild(e) {
    for (let t of h.allValues()) t.guildId === e && h.delete(t.channelId)
  }
  static dropUnreachableChannels() {
    for (let e of h.keys()) {
      let t = i.Z.getBasicChannel(e);
      !(0, c.v)(t) && N.deleteChannel(e)
    }
  }
  static deleteUnreadableGuildChannels(e) {
    for (let t of h.values()) e === t.guildId && !(0, c.$)(t.channelId) && N.deleteChannel(t.channelId)
  }
  static replaceLru(e) {
    h = e
  }
  constructor() {
    super({
      CACHE_LOADED_LAZY_NO_CACHE: D,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      CHANNEL_DELETE: C,
      CHANNEL_UPDATES: R,
      CONNECTION_OPEN_SUPPLEMENTAL: m,
      GUILD_DELETE: L,
      LOGIN_SUCCESS: v,
      THREAD_DELETE: g,
      THREAD_UPDATE: p
    })
  }
}

function A() {
  let e = s.Z.getChannelId();
  null != e && N.recordChannel(e)
}

function m() {
  N.dropUnreachableChannels(), N.replaceLru((0, E.J)(h, 1250))
}

function O(e) {
  let t = e.id,
    n = (0, c.v)(e),
    i = s.Z.getChannelId();
  n && t === i && N.recordChannel(t), !n && N.deleteChannel(t)
}

function R(e) {
  for (let t of e.channels) O(t)
}

function C(e) {
  N.deleteChannel(e.channel.id)
}

function p(e) {
  O(e.channel)
}

function g(e) {
  N.deleteChannel(e.channel.id)
}

function L(e) {
  return !e.guild.unavailable && (N.deleteGuild(e.guild.id), !0)
}

function v(e) {
  h.clear(), S.clear(), f = !1
}

function D(e) {
  f = !0
}
I(N, "displayName", "SaveableChannelsStore"), I(N, "LATEST_SNAPSHOT_VERSION", 1), t.ZP = new N