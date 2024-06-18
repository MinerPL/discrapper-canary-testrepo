"use strict";
n.d(t, {
  Uc: function() {
    return c
  },
  ac: function() {
    return h
  },
  cv: function() {
    return S
  },
  d5: function() {
    return T
  },
  i7: function() {
    return m
  },
  kI: function() {
    return I
  },
  re: function() {
    return N
  },
  tU: function() {
    return C
  },
  u0: function() {
    return A
  },
  uL: function() {
    return O
  },
  xU: function() {
    return f
  },
  xt: function() {
    return R
  }
}), n(411104), n(47120), n(653041);
var i = n(647943),
  r = n(581282),
  s = n(392711),
  o = n.n(s),
  a = n(377108),
  l = n(524437),
  u = n(397696),
  _ = n(526761),
  d = n(981631);
let c = {
    readerFactory: e => new i.o(e, new TextDecoder("utf-8"))
  },
  E = {
    [_.yP.PRELOADED_USER_SETTINGS]: l.o8,
    [_.yP.FRECENCY_AND_FAVORITES_SETTINGS]: a.ji
  };

function I(e, t) {
  return null != t && e in E ? T(E[e], t) : null
}

function T(e, t) {
  if (null == t) return null;
  let n = (0, r.c)(t);
  try {
    return e.fromBinary(n, c)
  } catch (e) {
    throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e))
  }
}

function h(e) {
  return T(l.o8, e)
}

function S(e, t) {
  return f(E[e], t)
}

function f(e, t) {
  return (0, r.m)(e.toBinary(t))
}

function N(e, t, n) {
  for (let e in t = {
      ...t
    }, n) delete t[e];
  return e.mergePartial(t, n), t
}

function A(e, t, n) {
  return (null == t || "null" === t) && (t = d.aIL), !(t in e.guilds) && (e.guilds[t] = l.C4.create()), n(e.guilds[t])
}

function m(e, t, n, i) {
  var r, s, o;
  return r = e, s = t, o = e => O(e, n, i), null == r.guilds && (r.guilds = l.os.create()), A(r.guilds, s, o)
}

function O(e, t, n) {
  return !(t in e.channels) && (e.channels[t] = l.p5.create()), n(e.channels[t])
}

function R(e, t) {
  null == e.versions && (e.versions = u.L.create());
  let n = 0;
  for (let e of t) {
    if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
    n = e.version
  }
  let i = .1 > Math.random(),
    r = !1,
    s = [];
  for (let n of t) {
    var o, a;
    if (n.version <= e.versions.clientVersion) {
      i && (null === (o = n.cleanup) || void 0 === o || o.call(n));
      continue
    }
    let t = n.run(e);
    if (e.versions.clientVersion = n.version, !1 === t) {
      null === (a = n.cleanup) || void 0 === a || a.call(n);
      continue
    }
    r = !0, null != n.cleanup && s.push(n.cleanup)
  }
  return {
    proto: e,
    isDirty: r,
    cleanupFuncs: s
  }
}

function C(e, t) {
  let n = Object.entries(e);
  if (n.length > t)
    for (n = o().sortBy(n, e => {
        let [t, n] = e;
        return n.recentUses[n.recentUses.length - 1]
      }).reverse(); n.length > t;) n.pop();
  let i = {};
  for (let [e, t] of n) {
    let n = a._F.create();
    n.frecency = t.frecency, n.recentUses = t.recentUses.filter(e => null != e && e > 0).map(String), n.score = Math.round(t.score), n.totalUses = t.totalUses, i[e] = n
  }
  return i
}