"use strict";
n.r(t), n.d(t, {
  supportsZstd: function() {
    return r
  },
  getFastConnectZstd: function() {
    return a
  },
  setFastConnectZstd: function() {
    return o
  }
});
var i = n("811022");
let s = new i.default("FAST CONNECT");

function r() {
  return !1
}

function a() {
  return !1
}

function o(e) {
  s.error("Attempting to set fast connect zstd when unsupported")
}