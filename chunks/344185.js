"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(131704),
  c = n(592125),
  E = n(709054);
let I = {},
  T = new Set;

function h(e) {
  return {
    id: e.id,
    parentId: e.parent_id
  }
}

function S(e) {
  e in I && delete I[e]
}

function f(e) {
  null != e.threads && e.threads.length > 0 && (I[e.id] = {}, e.threads.filter(e => d.AW.has(e.type)).forEach(t => N(e.id, t))), e.hasThreadsSubscription && T.add(e.id)
}

function N(e, t) {
  let n = I[e],
    i = t.parent_id;
  !(i in n) && (n[i] = {}), I[e][i][t.id] = h(t)
}

function A(e) {
  var t, n;
  let {
    channel: i
  } = e;
  if (!d.AW.has(i.type)) return !1;
  if ((null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return m(i);
  {
    let e = null !== (n = I[i.guild_id]) && void 0 !== n ? n : {};
    I[i.guild_id] = {
      ...e,
      [i.parent_id]: {
        ...e[i.parent_id],
        [i.id]: h(i)
      }
    }
  }
}

function m(e) {
  let {
    guild_id: t,
    parent_id: n,
    id: i
  } = e;
  if (null == t || null == n || !(t in I) || !(n in I[t]) || !(i in I[t][n])) return !1;
  I[t] = {
    ...I[t],
    [n]: {
      ...I[t][n]
    }
  }, delete I[t][n][i], l().isEmpty(I[t][n]) && delete I[t][n]
}
let O = {};
class R extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
  }
  isActive(e, t, n) {
    return null != e && null != this.getThreadsForParent(e, t)[n]
  }
  getThreadsForGuild(e) {
    var t;
    return null !== (t = I[e]) && void 0 !== t ? t : O
  }
  getThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : O
  }
  hasThreadsForChannel(e, t) {
    return !l().isEmpty(this.getThreadsForParent(e, t))
  }
  forEachGuild(e) {
    E.default.keys(I).forEach(t => {
      e(t, I[t])
    })
  }
  hasLoaded(e) {
    return T.has(e)
  }
}
o = "ActiveThreadsStore", (s = "displayName") in(r = R) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new R(_.Z, {
  CONNECTION_OPEN: function(e) {
    I = {}, T.clear(), e.guilds.forEach(e => {
      f(e)
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      channels: t
    } = e;
    I = {}, l()(t).filter(e => d.Ec.has(e.type)).groupBy("guild_id").forEach((e, t) => {
      I[t] = {}, e.forEach(e => N(t, e))
    })
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    S(t.id), f(t)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    S(t.id)
  },
  THREAD_CREATE: A,
  THREAD_UPDATE: A,
  THREAD_LIST_SYNC: function(e) {
    let {
      guildId: t,
      threads: n,
      channelIds: i
    } = e;
    for (let e in null == i && T.add(t), I[t] = {
        ...I[t]
      }, I[t]) I[t][e] = {
      ...I[t][e]
    };
    n.forEach(e => N(t, e))
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return m(t)
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.guild_id || !(t.guild_id in I)) return !1;
    I[t.guild_id] = {
      ...I[t.guild_id]
    }, delete I[t.guild_id][t.id]
  }
})