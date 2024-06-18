"use strict";
n.d(t, {
  FC: function() {
    return s
  },
  Zj: function() {
    return l
  },
  jA: function() {
    return o
  },
  rs: function() {
    return a
  }
});
var i = n(433517);
let r = "MediaPlayerVolume";

function s() {
  var e;
  let {
    volume: t
  } = null !== (e = i.K.get(r)) && void 0 !== e ? e : {};
  return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
}

function o(e) {
  i.K.set(r, {
    volume: e,
    muted: a()
  })
}

function a() {
  var e;
  let {
    muted: t
  } = null !== (e = i.K.get(r)) && void 0 !== e ? e : {};
  return "boolean" != typeof t && (t = !1), t
}

function l(e) {
  i.K.set(r, {
    volume: s(),
    muted: e
  })
}