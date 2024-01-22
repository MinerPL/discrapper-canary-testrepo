"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("913144"),
  o = n("233069"),
  l = n("42203");
let u = {},
  d = new Set;

function c(e) {
  return {
    id: e.id,
    parentId: e.parent_id
  }
}

function f(e) {
  e in u && delete u[e]
}

function _(e) {
  null != e.threads && e.threads.length > 0 && (u[e.id] = {}, e.threads.filter(e => o.ALL_CHANNEL_TYPES.has(e.type)).forEach(t => h(e.id, t))), e.hasThreadsSubscription && d.add(e.id)
}

function h(e, t) {
  let n = u[e],
    i = t.parent_id;
  !(i in n) && (n[i] = {}), u[e][i][t.id] = c(t)
}

function g(e) {
  var t, n;
  let {
    channel: i
  } = e;
  if (!o.ALL_CHANNEL_TYPES.has(i.type)) return !1;
  if ((null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return m(i);
  {
    let e = null !== (n = u[i.guild_id]) && void 0 !== n ? n : {};
    u[i.guild_id] = {
      ...e,
      [i.parent_id]: {
        ...e[i.parent_id],
        [i.id]: c(i)
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
  if (null == t || null == n || !(t in u) || !(n in u[t]) || !(i in u[t][n])) return !1;
  u[t] = {
    ...u[t],
    [n]: {
      ...u[t][n]
    }
  }, delete u[t][n][i], s.isEmpty(u[t][n]) && delete u[t][n]
}
let E = {};
class p extends r.default.Store {
  initialize() {
    this.waitFor(l.default)
  }
  isActive(e, t, n) {
    return null != e && null != this.getThreadsForParent(e, t)[n]
  }
  getThreadsForGuild(e) {
    var t;
    return null !== (t = u[e]) && void 0 !== t ? t : E
  }
  getThreadsForParent(e, t) {
    var n;
    return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : E
  }
  hasThreadsForChannel(e, t) {
    return !s.isEmpty(this.getThreadsForParent(e, t))
  }
  forEachGuild(e) {
    for (let t in u) e(t, u[t])
  }
  hasLoaded(e) {
    return d.has(e)
  }
}
p.displayName = "ActiveThreadsStore";
var v = new p(a.default, {
  CONNECTION_OPEN: function(e) {
    u = {}, d.clear(), e.guilds.forEach(e => {
      _(e)
    })
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      channels: t
    } = e;
    u = {}, s(t).filter(e => o.THREAD_CHANNEL_TYPES.has(e.type)).groupBy("guild_id").forEach((e, t) => {
      u[t] = {}, e.forEach(e => h(t, e))
    })
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    f(t.id), _(t)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    f(t.id)
  },
  THREAD_CREATE: g,
  THREAD_UPDATE: g,
  THREAD_LIST_SYNC: function(e) {
    let {
      guildId: t,
      threads: n,
      channelIds: i
    } = e;
    for (let e in null == i && d.add(t), u[t] = {
        ...u[t]
      }, u[t]) u[t][e] = {
      ...u[t][e]
    };
    n.forEach(e => h(t, e))
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
    if (null == t.guild_id || !(t.guild_id in u)) return !1;
    u[t.guild_id] = {
      ...u[t.guild_id]
    }, delete u[t.guild_id][t.id]
  }
})