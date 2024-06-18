"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(131704),
  c = n(592125);
let E = {};

function I(e) {
  var t;
  null === (t = e.threads) || void 0 === t || t.forEach(T)
}

function T(e) {
  if (!d.AW.has(e.type)) return !1;
  let t = function(e) {
    if (!(e.id in E)) {
      var t, n;
      E[e.id] = {
        guildId: e.guild_id,
        parentId: e.parent_id,
        memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
        memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
      }
    }
    return E[e.id]
  }(e);
  null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
}

function h(e) {
  let {
    channel: t
  } = e;
  return T(t)
}

function S(e) {
  let {
    threads: t
  } = e;
  t.forEach(N)
}

function f(e) {
  let t = !1;
  for (let n of e.messages)
    for (let e of n) t = N(e.thread) || t;
  return e.threads.forEach(e => {
    t = N(e) || t
  }), t
}

function N(e) {
  if (null != e && !(e.id in E)) {
    let t = c.Z.getChannel(e.id);
    if (null != t) return T(t), !0
  }
  return !1
}
class A extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
  }
  getMemberCount(e) {
    var t, n;
    return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
  }
  getMemberIdsPreview(e) {
    var t, n;
    return null !== (n = null === (t = E[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
  }
  getInitialOverlayState() {
    return E
  }
}
o = "ThreadMembersStore", (s = "displayName") in(r = A) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new A(_.Z, {
  CONNECTION_OPEN: function(e) {
    E = {}, e.guilds.forEach(I)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      threadMembers: t
    } = e;
    E = {
      ...t
    }
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    I(t)
  },
  GUILD_DELETE: function(e) {
    var t;
    let {
      guild: n
    } = e;
    t = n.id, E = l().omitBy(E, e => e.guildId === t)
  },
  CHANNEL_DELETE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    t = n.id, E = l().omitBy(E, e => e.parentId === t)
  },
  THREAD_CREATE: h,
  THREAD_UPDATE: h,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(T)
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let t = E[e.id];
    if (null == t) return !1;
    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
  },
  SEARCH_FINISH: f,
  MOD_VIEW_SEARCH_FINISH: f,
  LOAD_THREADS_SUCCESS: S,
  LOAD_ARCHIVED_THREADS_SUCCESS: S,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    delete E[t.id]
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let t = !1;
    for (let n of e.messages) t = N(n.thread) || t;
    return t
  }
})