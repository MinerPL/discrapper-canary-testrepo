let r, i;
n.r(t), n.d(t, {
  encryptAndStoreTokens: function() {
return O;
  },
  getToken: function() {
return g;
  },
  hideToken: function() {
return A;
  },
  init: function() {
return T;
  },
  removeToken: function() {
return v;
  },
  setToken: function() {
return S;
  },
  showToken: function() {
return N;
  }
}), n(47120), n(724458);
var a = n(433517),
  o = n(231338);
let s = 'dQw4w9WgXcQ:';

function l(e) {
  return [...e].reduce((e, t) => {
let [n, r] = t;
return e[n] = r, e;
  }, {});
}
let u = null,
  c = window.DiscordNative;
null != c && (u = c.safeStorage);
let d = !1,
  _ = {},
  E = {},
  f = !1,
  h = !1;

function p() {
  if (f) {
a.K.remove(o.B1), a.K.remove(o.XM);
return;
  }
  null != i ? a.K.set(o.B1, i) : a.K.remove(o.B1), a.K.set(o.XM, E);
}

function m(e) {
  return null == e || 0 === e.length ? {
decryptedToken: null,
wasEncrypted: !1
  } : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(s) ? {
decryptedToken: u.decryptString(e.substring(s.length)),
wasEncrypted: !0
  } : {
decryptedToken: e,
wasEncrypted: !1
  };
}

function I(e) {
  return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(s) ? ''.concat(s).concat(u.encryptString(e)) : e;
}

function T() {
  if (h)
return;
  i = a.K.get(o.B1), E = a.K.get(o.XM) || {};
  let {
decryptedToken: e,
wasEncrypted: t
  } = m(i);
  d = t, r = e, _ = l(Object.entries(E).map(e => {
let [t, n] = e, {
  decryptedToken: r,
  wasEncrypted: i
} = m(n);
return d = i || d, [
  t,
  r
];
  }).filter(e => {
let [t, n] = e;
return null != n;
  })), h = !0;
}

function g(e) {
  return (T(), null != e) ? _[e] : r;
}

function S(e, t) {
  if (null == e) {
v(t);
return;
  }
  r = e, null != t && (_[t] = e), d ? O() : (i = r, E = _, p());
}

function A() {
  if (!f)
f = !0, p();
}

function N() {
  if (!!f)
f = !1, p();
}

function v(e) {
  let t = r;
  return null != e && (t = _[e], delete _[e], delete E[e]), t === r && (r = null, i = null), p(), null != t;
}

function O() {
  (null == u ? void 0 : u.isEncryptionAvailable()) ? (null != r && (i = I(r)), E = l(Object.entries(_).map(e => {
let [t, n] = e;
return [
  t,
  I(n)
];
  })), d = !0) : (i = r, E = _), p();
}