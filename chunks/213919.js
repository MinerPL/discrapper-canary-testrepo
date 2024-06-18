"use strict";
let i, r;
n.r(t), n.d(t, {
  encryptAndStoreTokens: function() {
    return p
  },
  getToken: function() {
    return A
  },
  hideToken: function() {
    return O
  },
  init: function() {
    return N
  },
  removeToken: function() {
    return C
  },
  setToken: function() {
    return m
  },
  showToken: function() {
    return R
  }
}), n(47120), n(724458);
var s = n(433517),
  o = n(231338);
let a = "dQw4w9WgXcQ:";

function l(e) {
  return [...e].reduce((e, t) => {
    let [n, i] = t;
    return e[n] = i, e
  }, {})
}
let u = null,
  _ = window.DiscordNative;
null != _ && (u = _.safeStorage);
let d = !1,
  c = {},
  E = {},
  I = !1,
  T = !1;

function h() {
  if (I) {
    s.K.remove(o.B1), s.K.remove(o.XM);
    return
  }
  null != r ? s.K.set(o.B1, r) : s.K.remove(o.B1), s.K.set(o.XM, E)
}

function S(e) {
  return null == e || 0 === e.length ? {
    decryptedToken: null,
    wasEncrypted: !1
  } : (null == u ? void 0 : u.isEncryptionAvailable()) && e.startsWith(a) ? {
    decryptedToken: u.decryptString(e.substring(a.length)),
    wasEncrypted: !0
  } : {
    decryptedToken: e,
    wasEncrypted: !1
  }
}

function f(e) {
  return (null == u ? void 0 : u.isEncryptionAvailable()) && !e.startsWith(a) ? "".concat(a).concat(u.encryptString(e)) : e
}

function N() {
  if (T) return;
  r = s.K.get(o.B1), E = s.K.get(o.XM) || {};
  let {
    decryptedToken: e,
    wasEncrypted: t
  } = S(r);
  d = t, i = e, c = l(Object.entries(E).map(e => {
    let [t, n] = e, {
      decryptedToken: i,
      wasEncrypted: r
    } = S(n);
    return d = r || d, [t, i]
  }).filter(e => {
    let [t, n] = e;
    return null != n
  })), T = !0
}

function A(e) {
  return (N(), null != e) ? c[e] : i
}

function m(e, t) {
  if (null == e) {
    C(t);
    return
  }
  i = e, null != t && (c[t] = e), d ? p() : (r = i, E = c, h())
}

function O() {
  if (!I) I = !0, h()
}

function R() {
  if (!!I) I = !1, h()
}

function C(e) {
  let t = i;
  return null != e && (t = c[e], delete c[e], delete E[e]), t === i && (i = null, r = null), h(), null != t
}

function p() {
  (null == u ? void 0 : u.isEncryptionAvailable()) ? (null != i && (r = f(i)), E = l(Object.entries(c).map(e => {
    let [t, n] = e;
    return [t, f(n)]
  })), d = !0) : (r = i, E = c), h()
}