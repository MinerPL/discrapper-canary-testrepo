"use strict";
n.r(t), n("47120");
var s, a, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("314897"),
  f = n("699516"),
  E = n("885110"),
  _ = n("981631");
let T = {},
  m = {};

function I(e, t) {
  var n;
  return (null !== (n = T[e]) && void 0 !== n ? n : {})[t]
}

function p(e, t) {
  let n = I(e, t);
  if (null == n) return;
  let s = T[e];
  delete s[t], o().isEmpty(s) && delete T[e];
  let a = m[n];
  null != a && (a.delete(e), 0 === a.size && delete m[n])
}

function h(e, t, n, s) {
  let a = n.find(e => null != e.party && e.party.id),
    l = null != a && null != a.party ? a.party.id : null,
    i = I(t, e);
  if (null == l || s === _.StatusTypes.OFFLINE) return null != i && (p(t, e), void 0);
  if (null != i) {
    if (i === l) return !1;
    p(t, e)
  }! function(e, t, n) {
    var s;
    let a = T[e];
    if (null == a && (a = T[e] = {}), a[t] = n, f.default.isBlocked(e)) return;
    let l = null !== (s = m[n]) && void 0 !== s ? s : new Set;
    m[n] = l, l.add(e)
  }(t, e, l)
}

function N(e) {
  let {
    guild: t
  } = e, n = !1;
  for (let {
      user: e,
      status: s,
      activities: a
    }
    of t.presences) !1 !== h(t.id, e.id, a, s) && (n = !0);
  return n
}

function S(e, t) {
  let n = !1;
  return t.forEach(t => {
    null != t && h(e, t.user.id, t.activities, t.status) && (n = !0)
  }), n
}

function C() {
  let e = c.default.getId(),
    t = E.default.getActivities();
  return h(_.ME, e, t)
}
class A extends(s = u.default.Store) {
  initialize() {
    this.syncWith([E.default], C), this.waitFor(E.default, f.default)
  }
  getParty(e) {
    return null != e && null != m[e] ? m[e] : null
  }
  getUserParties() {
    return T
  }
  getParties() {
    return m
  }
}
i = "GamePartyStore", (l = "displayName") in(a = A) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new A(d.default, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, s = !1;
    for (let {
        user: e,
        status: t,
        activities: a
      }
      of n) null != e && !1 !== h(_.ME, e.id, a, t) && (s = !0);
    for (let e of t) !1 !== N({
      guild: e
    }) && (s = !0);
    return s
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      parties: t,
      userParties: n
    } = e;
    m = {}, T = {
      ...n
    }, Object.keys(t).forEach(e => m[e] = new Set(t[e]))
  },
  GUILD_CREATE: N,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, n = !1;
    for (let {
        user: e,
        activities: s
      }
      of t) null != e && !1 !== h(_.ME, e.id, s) && (n = !0);
    return n
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        guildId: t,
        user: n,
        status: s,
        activities: a
      } = e;
      return h(null != t ? t : _.ME, n.id, a, s)
    }).some(e => e)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return S(t, n.map(e => e.presence))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && S(t, n.map(e => e.presence))
  },
  RELATIONSHIP_ADD: function(e) {
    let {
      relationship: t
    } = e;
    if (!f.default.isBlocked(t.id)) return !1;
    let n = T[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
      let n = m[e];
      null != n && n.delete(t.id)
    }
  },
  RELATIONSHIP_REMOVE: function(e) {
    let {
      relationship: t
    } = e, n = T[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
      let n = m[e];
      null != n && n.add(t.id)
    }
  }
})