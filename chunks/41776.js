"use strict";
n(47120), n(724458);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(271383),
  _ = n(430824),
  d = n(594174),
  c = n(981631);
let E = [],
  I = {},
  T = null,
  h = null;

function S(e) {
  let t = E.indexOf(e);
  if (t > -1) {
    let n = [...E];
    return n.splice(t, 1), E = n, delete I[e], !0
  }
  return !1
}

function f(e) {
  return !(e === c.ME || E.includes(e)) && (E = [...E, e], !0)
}
class N extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(_.Z, d.default)
  }
  setHistorySnapshot(e) {
    T = e
  }
  getHistorySnapshot() {
    return T
  }
  lurkingGuildIds() {
    return E
  }
  mostRecentLurkedGuildId() {
    return 0 === E.length ? null : E[E.length - 1]
  }
  isLurking(e) {
    var t;
    let n = u.ZP.isCurrentUserGuest(e),
      i = null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
    return !!(!n && i)
  }
  getLurkingSource() {
    return h
  }
  getLoadId(e) {
    return null != e ? I[e] : null
  }
}
o = "LurkingStore", (s = "displayName") in(r = N) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new N(l.Z, {
  CONNECTION_OPEN: function() {
    E = Object.values(_.Z.getGuilds()).reduce((e, t) => t.isLurker() ? [...e, t.id] : e, [])
  },
  GUILD_JOIN: function(e) {
    let {
      guildId: t,
      lurker: n,
      source: i,
      directoryChannelId: r,
      loadId: s
    } = e;
    if (n) {
      var o, a;
      switch (f(t), o = t, null != (a = s) && (I[o] = a), i) {
        case c.vtS.MOBILE_GUILD_DISCOVERY:
          h = {
            type: c.vtS.MOBILE_GUILD_DISCOVERY
          };
          break;
        case c.vtS.DIRECTORY_ENTRY:
          h = {
            type: c.vtS.DIRECTORY_ENTRY,
            directoryChannelId: r
          };
          break;
        default:
          h = null
      }
      return !0
    }
    return !1
  },
  GUILD_STOP_LURKING: function(e) {
    let {
      ignoredGuildIds: t
    } = e, n = function(e) {
      let t = new Set([...null != e ? e : []]);
      return [...E].reduce((e, n) => t.has(n) ? e : S(n) || e, !1)
    }(t);
    return n && (T = null, h = null), n
  },
  GUILD_STOP_LURKING_FAILURE: function(e) {
    let {
      lurkingGuildId: t,
      lurkingSource: n
    } = e;
    return f(t), h = n, !0
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return !!(null != t.joined_at && E.includes(t.id)) && (S(t.id), T = null, h = null, !0)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return !!E.includes(t.id) && (S(t.id), T = null, h = null, !0)
  },
  GUILD_MEMBER_ADD: function(e) {
    var t;
    let {
      guildId: n,
      joinedAt: i,
      user: r
    } = e, s = r.id === (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
    return !!(s && null != i && E.includes(n)) && (S(n), T = null, h = null, !0)
  }
})