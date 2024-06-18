"use strict";
n.d(t, {
  hY: function() {
    return T
  },
  og: function() {
    return S
  },
  rO: function() {
    return f
  },
  vu: function() {
    return c
  }
});
var i, r, s, o, a, l = n(525654),
  u = n.n(l);
let _ = (null !== (i = u().name) && void 0 !== i ? i : "unknown").toLowerCase(),
  d = "chrome" === _.toLowerCase() ? parseInt(null !== (r = u().version) && void 0 !== r ? r : "", 10) : -1;

function c() {
  return d
}
let E = "electron" === _.toLowerCase() ? parseInt(null !== (s = u().version) && void 0 !== s ? s : "", 10) : -1,
  I = "firefox" === _.toLowerCase() ? parseInt(null !== (o = u().version) && void 0 !== o ? o : "", 10) : -1;

function T() {
  return I
}
let h = "edge" === _.toLowerCase() ? parseInt(null !== (a = u().version) && void 0 !== a ? a : "", 10) : -1;

function S() {
  return -1 !== d || -1 !== E || -1 !== I || -1 !== h
}

function f() {
  var e;
  let t = window.navigator,
    n = t.userAgent.toLowerCase(),
    i = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
  return -1 !== n.indexOf("safari") && !(-1 !== n.indexOf("chrome")) && -1 !== n.indexOf("version/") && i
}