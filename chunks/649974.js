"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140"),
  u = n("656063"),
  d = n("158776"),
  c = n("800599"),
  f = n("594174"),
  E = n("981631");
let _ = !1,
  T = {},
  m = {};

function I(e) {
  let t = !1;
  return e.forEach(e => {
    t = !1 !== h(e) || t
  }), t
}

function p(e) {
  let t = m[e];
  if (null == t) return !1;
  let n = t.gameId;
  return null != T[n] && (T = {
    ...T
  }, delete T[n][e], 0 === Object.values(T[n]).length && delete T[n]), m = {
    ...m
  }, delete m[e], !0
}

function h(e) {
  let {
    user: t,
    activities: n
  } = e;
  if (null == t) return !1;
  let s = n.filter(e => e.type !== E.ActivityTypes.CUSTOM_STATUS);
  if (0 === s.length) return p(t.id);
  let a = !1;
  return s.forEach(e => {
    (function(e, t) {
      var n, s, a, l;
      let i = (0, u.default)(e);
      if (null == i) return p(t.id);
      let r = m[t.id];
      null != r && r.gameId !== i && p(t.id);
      let o = null !== (s = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== s ? s : Date.now(),
        d = {
          userId: t.id,
          activity: e,
          startedPlaying: o
        };
      return a = i, l = d, T = {
        ...T,
        [a]: {
          ...T[a],
          [l.userId]: l
        }
      }, m = {
        ...m,
        [l.userId]: {
          gameId: a,
          startedPlaying: l.startedPlaying
        }
      }, !0
    })(e, t) && (a = !0)
  }), a
}

function N() {
  let e = !1;
  if (!c.default.needsRefresh() && !_) {
    let t;
    T = {}, m = {}, t = !1, d.default.getUserIds().forEach(e => {
      let n = f.default.getUser(e);
      null != n && (t = h({
        user: n,
        activities: d.default.getActivities(e)
      }) || t)
    }), e = t
  }
  return _ = !c.default.needsRefresh(), e
}
class S extends(i = r.default.Store) {
  initialize() {
    this.waitFor(c.default), this.syncWith([c.default], N)
  }
  get games() {
    return T
  }
  get usersPlaying() {
    return m
  }
  get gameIds() {
    return Object.keys(T)
  }
  getNowPlaying(e) {
    return T[e]
  }
  getUserGame(e) {
    return m[e]
  }
}
l = "NowPlayingStore", (a = "displayName") in(s = S) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new S(o.default, {
  CONNECTION_OPEN: function() {
    T = {}, m = {}
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, s = !1;
    return t.forEach(e => {
      I(e.presences) && (s = !0)
    }), I(n) && (s = !0), s
  },
  LOGOUT: function() {
    T = {}, m = {}
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => h(e)).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return I(t)
  }
})