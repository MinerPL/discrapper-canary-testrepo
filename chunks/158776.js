"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(348327),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  d = n(442837),
  c = n(570140),
  E = n(122810),
  I = n(106301),
  T = n(709054),
  h = n(314897),
  S = n(594174),
  f = n(981631);
let N = Object.freeze([]),
  A = {},
  m = {},
  O = {},
  R = {},
  C = {},
  p = {};

function g(e, t) {
  let n = A[e];
  return null != n ? n[t] : null
}
let L = e => {
    switch (e.type) {
      case f.IIU.CUSTOM_STATUS:
        return 4;
      case f.IIU.COMPETING:
        return 3;
      case f.IIU.STREAMING:
        return 2;
      case f.IIU.PLAYING:
        return 1;
      default:
        return 0
    }
  },
  v = e => (0, E.Z)(e) ? 1 : 0;

function D(e, t) {
  var n, i, r, s, o;
  return n = e, L(t) - L(n) || (i = e, v(t) - v(i)) || (r = e, (null !== (s = t.created_at) && void 0 !== s ? s : 0) - (null !== (o = r.created_at) && void 0 !== o ? o : 0))
}

function M(e) {
  if (delete m[e], delete O[e], delete R[e], null == A[e]) return;
  let [t] = _().sortBy(A[e], e => -e.timestamp);
  t.status !== f.Skl.OFFLINE ? (m[e] = t.status, O[e] = t.activities, null != t.clientStatus && (R[e] = t.clientStatus), delete p[e]) : (_().every(A[e], e => e.status === f.Skl.OFFLINE) && delete A[e], p[e] = Date.now())
}

function P(e) {
  let t = A[e];
  if (null == t) return;
  let n = _().maxBy(Object.values(t), e => e.timestamp);
  n.status !== f.Skl.OFFLINE && (m[e] = n.status, O[e] = n.activities, null != n.clientStatus && (R[e] = n.clientStatus))
}

function y(e) {
  let {
    guildId: t,
    userId: n,
    status: i,
    clientStatus: r,
    activities: s
  } = e;
  if (n === h.default.getId()) return !1;
  let o = A[n];
  if (null == o) {
    if (i === f.Skl.OFFLINE) return !1;
    o = A[n] = {}
  }
  if (i === f.Skl.OFFLINE) o[t] = {
    status: i,
    clientStatus: r,
    activities: N,
    timestamp: Date.now()
  };
  else {
    let e = s.length > 1 ? [...s].sort(D) : s,
      n = o[t];
    s = null != n && l()(n.activities, e) ? n.activities : e, o[t] = {
      status: i,
      clientStatus: r,
      activities: s,
      timestamp: Date.now()
    }
  }
  return delete C[n], M(n), !0
}

function U(e) {
  let {
    guildId: t,
    userId: n,
    status: i,
    clientStatus: r,
    activities: s,
    timestamp: o
  } = e;
  if (n === h.default.getId()) return;
  let a = A[n];
  if (null == a) {
    if (i === f.Skl.OFFLINE) return;
    a = A[n] = {}
  }
  if (i === f.Skl.OFFLINE) a[t] = {
    status: i,
    clientStatus: r,
    activities: N,
    timestamp: Date.now()
  };
  else {
    let e = s.length > 1 ? [...s].sort(D) : s;
    a[t] = {
      status: i,
      clientStatus: r,
      activities: e,
      timestamp: o
    }
  }
}

function b(e, t) {
  if (t === h.default.getId()) return !1;
  let n = A[t];
  if (null == n || null == n[e]) return !1;
  delete n[e], 0 === Object.keys(n).length && delete A[t], M(t)
}

function G(e) {
  for (let t of T.default.keys(A)) b(e, t)
}
class w extends(i = d.ZP.Store) {
  initialize() {
    this.waitFor(h.default, I.Z)
  }
  setCurrentUserOnConnectionOpen(e, t) {
    m[h.default.getId()] = e, O[h.default.getId()] = t
  }
  getStatus(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Skl.OFFLINE,
      s = S.default.getUser(e);
    if (null != s && s.hasFlag(f.xW$.BOT_HTTP_INTERACTIONS) && (r = f.Skl.UNKNOWN), null == s ? void 0 : s.isClyde()) return f.Skl.ONLINE;
    if (null == i) return null !== (t = m[e]) && void 0 !== t ? t : r;
    let o = g(e, i);
    return null !== (n = null == o ? void 0 : o.status) && void 0 !== n ? n : r
  }
  getActivities(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (null == t) {
      var n;
      return null !== (n = O[e]) && void 0 !== n ? n : N
    }
    let i = g(e, t);
    return null == i || null == i.activities ? N : i.activities
  }
  getPrimaryActivity(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return this.getActivities(e, t).filter(e => e.type !== f.IIU.HANG_STATUS)[0]
  }
  getAllApplicationActivities(e) {
    let t = [];
    for (let n of T.default.keys(O))
      for (let i of O[n]) i.application_id === e && t.push({
        userId: n,
        activity: i
      });
    return t
  }
  getApplicationActivity(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return this.findActivity(e, e => e.application_id === t, n)
  }
  findActivity(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return this.getActivities(e, n).find(t)
  }
  getActivityMetadata(e) {
    return C[e]
  }
  getUserIds() {
    return T.default.keys(O)
  }
  isMobileOnline(e) {
    let t = R[e];
    return null != t && t[f.X5t.MOBILE] === f.Skl.ONLINE && t[f.X5t.DESKTOP] !== f.Skl.ONLINE
  }
  getClientStatus(e) {
    return R[e]
  }
  getLastOnlineTimestamp(e) {
    return p[e]
  }
  getState() {
    return {
      presencesForGuilds: A,
      statuses: m,
      activities: O,
      activityMetadata: C,
      clientStatuses: R,
      lastOnlineTimestamps: p
    }
  }
}
o = "PresenceStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new w(c.Z, {
  CONNECTION_OPEN: function() {
    return !0
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, i = h.default.getId();
    A = {}, C = {}, p = {}, m = {
      [i]: m[i]
    }, O = {
      [i]: O[i]
    }, R = {
      [i]: {}
    };
    let r = new Set,
      s = Date.now();
    t.forEach(e => {
      e.presences.forEach(t => {
        let {
          user: n,
          status: i,
          clientStatus: o,
          activities: a
        } = t;
        U({
          guildId: e.id,
          userId: n.id,
          status: i,
          clientStatus: o,
          activities: a,
          timestamp: s
        }), r.add(n.id)
      })
    }), n.forEach(e => {
      let {
        user: t,
        status: n,
        clientStatus: i,
        activities: o
      } = e;
      null != t && (U({
        guildId: f.ME,
        userId: t.id,
        status: n,
        clientStatus: i,
        activities: o,
        timestamp: s
      }), r.add(t.id))
    }), r.delete(i), r.forEach(P)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      presences: t
    } = e;
    A = t.presencesForGuilds, m = t.statuses, O = t.activities, C = t.activityMetadata
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.presences.forEach(e => {
      let {
        user: n,
        status: i,
        clientStatus: r,
        activities: s
      } = e;
      y({
        guildId: t.id,
        userId: n.id,
        status: i,
        clientStatus: r,
        activities: s
      })
    })
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    G(t.id)
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return b(t, n.id)
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        guildId: t,
        user: n,
        status: i,
        clientStatus: r,
        activities: s
      } = e;
      return y({
        guildId: null != t ? t : f.ME,
        userId: n.id,
        status: i,
        clientStatus: r,
        activities: s
      })
    }).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    G(f.ME), t.forEach(e => {
      let {
        user: t,
        status: n,
        clientStatus: i,
        activities: r
      } = e;
      null != t && y({
        guildId: f.ME,
        userId: t.id,
        status: n,
        clientStatus: i,
        activities: r
      })
    })
  },
  ACTIVITY_METADATA_UPDATE: function(e) {
    let {
      userId: t,
      metadata: n
    } = e;
    return C[t] = n, !1
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    n.forEach(e => {
      null != e.presence && y({
        guildId: t,
        userId: e.user_id,
        status: e.presence.status,
        clientStatus: e.presence.clientStatus,
        activities: e.presence.activities
      })
    })
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    null == n || n.forEach(e => {
      null != e.presence && y({
        guildId: t,
        userId: e.userId,
        status: e.presence.status,
        clientStatus: e.presence.clientStatus,
        activities: e.presence.activities
      })
    })
  },
  SELF_PRESENCE_STORE_UPDATE: function(e) {
    let t = h.default.getId();
    if (m[t] === e.status && O[t] === e.activities) return !1;
    m[t] = e.status, O[t] = e.activities, delete C[t]
  }
})