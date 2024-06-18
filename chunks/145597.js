"use strict";
let i, r;
n.d(t, {
  FW: function() {
    return l
  },
  Gr: function() {
    return a
  },
  Ht: function() {
    return I
  },
  Js: function() {
    return _
  },
  QF: function() {
    return c
  },
  Te: function() {
    return T
  },
  Tq: function() {
    return o
  },
  VS: function() {
    return S
  },
  W2: function() {
    return f
  },
  qU: function() {
    return u
  },
  tB: function() {
    return E
  },
  vR: function() {
    return h
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(490029);
var s = n(358085);
n(981631);
let o = 2,
  a = {
    width: 3840,
    height: 2160
  },
  l = {
    width: 768,
    height: 432
  },
  u = "overlay_default",
  _ = -2,
  d = !1;

function c() {
  var e;
  if (void 0 !== i) return i;
  let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get("pid")) && void 0 !== e ? e : "", 10);
  return isNaN(t) && (t = -1), i = t
}

function E(e) {
  f() && (i = e)
}

function I() {
  return new URLSearchParams(window.location.search).get("rpc_auth_token")
}

function T(e) {
  return !s.isPlatformEmbedded || e.width >= l.width && e.height >= l.height
}

function h(e) {
  d = e
}

function S() {
  return d
}

function f() {
  var e;
  return void 0 !== r ? r : r = (null !== (e = new URLSearchParams(window.location.search).get("oop")) && void 0 !== e ? e : "") === "true"
}