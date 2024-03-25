"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var s = n("917351"),
  a = n.n(s),
  l = n("446674"),
  i = n("913144"),
  r = n("271938"),
  o = n("27618"),
  u = n("101125"),
  d = n("49111");
let c = {},
  E = {};

function f(e, t) {
  var n;
  let s = null !== (n = c[e]) && void 0 !== n ? n : {};
  return s[t]
}

function _(e, t) {
  let n = f(e, t);
  if (null == n) return;
  let s = c[e];
  delete s[t], a.isEmpty(s) && delete c[e];
  let l = E[n];
  null != l && (l.delete(e), 0 === l.size && delete E[n])
}

function T(e, t, n, s) {
  let a = n.find(e => null != e.party && e.party.id),
    l = null != a && null != a.party ? a.party.id : null,
    i = f(t, e);
  if (null == l || s === d.StatusTypes.OFFLINE) return null != i && (_(t, e), void 0);
  if (null != i) {
    if (i === l) return !1;
    _(t, e)
  }! function(e, t, n) {
    var s;
    let a = c[e];
    if (null == a && (a = c[e] = {}), a[t] = n, o.default.isBlocked(e)) return;
    let l = null !== (s = E[n]) && void 0 !== s ? s : new Set;
    E[n] = l, l.add(e)
  }(t, e, l)
}

function I(e) {
  let {
    guild: t
  } = e, n = !1;
  for (let {
      user: e,
      status: s,
      activities: a
    }
    of t.presences) !1 !== T(t.id, e.id, a, s) && (n = !0);
  return n
}

function m(e, t) {
  let n = !1;
  return t.forEach(t => {
    null != t && T(e, t.user.id, t.activities, t.status) && (n = !0)
  }), n
}

function N() {
  let e = r.default.getId(),
    t = u.default.getActivities();
  return T(d.ME, e, t)
}
class p extends l.default.Store {
  initialize() {
    this.syncWith([u.default], N), this.waitFor(u.default, o.default)
  }
  getParty(e) {
    return null != e && null != E[e] ? E[e] : null
  }
  getUserParties() {
    return c
  }
  getParties() {
    return E
  }
}
p.displayName = "GamePartyStore";
var S = new p(i.default, {
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
      of n) null != e && !1 !== T(d.ME, e.id, a, t) && (s = !0);
    for (let e of t) !1 !== I({
      guild: e
    }) && (s = !0);
    return s
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      parties: t,
      userParties: n
    } = e;
    E = {}, c = {
      ...n
    }, Object.keys(t).forEach(e => E[e] = new Set(t[e]))
  },
  GUILD_CREATE: I,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, n = !1;
    for (let {
        user: e,
        activities: s
      }
      of t) null != e && !1 !== T(d.ME, e.id, s) && (n = !0);
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
      return T(null != t ? t : d.ME, n.id, a, s)
    }).some(e => e)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return m(t, n.map(e => e.presence))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && m(t, n.map(e => e.presence))
  },
  RELATIONSHIP_ADD: function(e) {
    let {
      relationship: t
    } = e;
    if (!o.default.isBlocked(t.id)) return !1;
    let n = c[t.id];
    if (null == n) return !1;
    for (let e of a.values(n)) {
      let n = E[e];
      null != n && n.delete(t.id)
    }
  },
  RELATIONSHIP_REMOVE: function(e) {
    let {
      relationship: t
    } = e, n = c[t.id];
    if (null == n) return !1;
    for (let e of a.values(n)) {
      let n = E[e];
      null != n && n.add(t.id)
    }
  }
})