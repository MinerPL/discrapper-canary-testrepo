var i, s, a, r, l = n(442837),
  o = n(570140),
  c = n(656063),
  d = n(814443),
  u = n(158776),
  _ = n(594174),
  h = n(981631);
let E = !1,
  I = {},
  m = {};

function g(e) {
  let t = !1;
  return e.forEach(e => {
t = !1 !== T(e) || t;
  }), t;
}

function p(e) {
  let t = m[e];
  if (null == t)
return !1;
  let n = t.gameId;
  return null != I[n] && (I = {
...I
  }, delete I[n][e], 0 === Object.values(I[n]).length && delete I[n]), m = {
...m
  }, delete m[e], !0;
}

function T(e) {
  let {
user: t,
activities: n
  } = e;
  if (null == t)
return !1;
  let i = n.filter(e => e.type !== h.IIU.CUSTOM_STATUS);
  if (0 === i.length)
return p(t.id);
  let s = !1;
  return i.forEach(e => {
(function(e, t) {
  var n, i, s, a;
  let r = (0, c.Z)(e);
  if (null == r)
    return p(t.id);
  let l = m[t.id];
  null != l && l.gameId !== r && p(t.id);
  let o = null !== (i = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== i ? i : Date.now(),
    d = {
      userId: t.id,
      activity: e,
      startedPlaying: o
    };
  return s = r, a = d, I = {
    ...I,
    [s]: {
      ...I[s],
      [a.userId]: a
    }
  }, m = {
    ...m,
    [a.userId]: {
      gameId: s,
      startedPlaying: a.startedPlaying
    }
  }, !0;
}(e, t) && (s = !0));
  }), s;
}

function S() {
  let e = !1;
  if (!d.Z.needsRefresh() && !E) {
let t;
I = {}, m = {}, t = !1, u.Z.getUserIds().forEach(e => {
  let n = _.default.getUser(e);
  null != n && (t = T({
    user: n,
    activities: u.Z.getActivities(e)
  }) || t);
}), e = t;
  }
  return E = !d.Z.needsRefresh(), e;
}
class C extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(d.Z), this.syncWith([d.Z], S);
  }
  get games() {
return I;
  }
  get usersPlaying() {
return m;
  }
  get gameIds() {
return Object.keys(I);
  }
  getNowPlaying(e) {
return I[e];
  }
  getUserGame(e) {
return m[e];
  }
}
a = 'NowPlayingStore', (s = 'displayName') in(i = C) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new C(o.Z, {
  CONNECTION_OPEN: function() {
I = {}, m = {};
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
let {
  guilds: t,
  presences: n
} = e, i = !1;
return t.forEach(e => {
  g(e.presences) && (i = !0);
}), g(n) && (i = !0), i;
  },
  LOGOUT: function() {
I = {}, m = {};
  },
  PRESENCE_UPDATES: function(e) {
let {
  updates: t
} = e;
return t.map(e => T(e)).some(e => e);
  },
  PRESENCES_REPLACE: function(e) {
let {
  presences: t
} = e;
return g(t);
  }
});