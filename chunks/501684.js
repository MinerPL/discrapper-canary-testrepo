let n, a, o, i, _;
r.d(t, {
  $A: function() {
return O;
  },
  PR: function() {
return p;
  },
  YF: function() {
return D;
  },
  _4: function() {
return S;
  },
  _j: function() {
return L;
  },
  cN: function() {
return v;
  },
  to: function() {
return f;
  }
});
var E = r(622916),
  s = r(688838),
  c = r(665909),
  I = r(795927),
  u = r(661129),
  l = r(231550),
  R = r(428983),
  A = r(622574),
  T = r(288570);
let d = {},
  N = {};

function p(e, t = !1) {
  return U('cls', e, C, n, t);
}

function O(e, t = !1) {
  return U('lcp', e, M, o, t);
}

function f(e) {
  return U('fid', e, g, a);
}

function S(e) {
  return U('ttfb', e, P, i);
}

function D(e) {
  return U('inp', e, m, _);
}

function L(e, t) {
  return G(e, t), !N[e] && (function(e) {
let t = {};
'event' === e && (t.durationThreshold = 0), (0, A.N)(e, t => {
  h(e, {
    entries: t
  });
}, t);
  }(e), N[e] = !0), y(e, t);
}

function h(e, t) {
  let r = d[e];
  if (!!r && !!r.length)
for (let n of r)
  try {
    n(t);
  } catch (t) {
    c.X && E.kg.error(`Error while triggering instrumentation handler.
Type: ${ e }
Name: ${ (0, s.$P)(n) }
Error:`, t);
  }
}

function C() {
  return (0, I.m)(e => {
h('cls', {
  metric: e
}), n = e;
  }, {
reportAllChanges: !0
  });
}

function g() {
  return (0, u.F)(e => {
h('fid', {
  metric: e
}), a = e;
  });
}

function M() {
  return (0, R.N)(e => {
h('lcp', {
  metric: e
}), o = e;
  }, {
reportAllChanges: !0
  });
}

function P() {
  return (0, T.m)(e => {
h('ttfb', {
  metric: e
}), i = e;
  });
}

function m() {
  return (0, l.Y)(e => {
h('inp', {
  metric: e
}), _ = e;
  });
}

function U(e, t, r, n, a = !1) {
  let o;
  return G(e, t), !N[e] && (o = r(), N[e] = !0), n && t({
metric: n
  }), y(e, t, a ? o : void 0);
}

function G(e, t) {
  d[e] = d[e] || [], d[e].push(t);
}

function y(e, t, r) {
  return () => {
r && r();
let n = d[e];
if (!n)
  return;
let a = n.indexOf(t); -
1 !== a && n.splice(a, 1);
  };
}

function v(e) {
  return 'duration' in e;
}