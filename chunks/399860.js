"use strict";
n.d(t, {
  gw: function() {
    return r
  },
  rE: function() {
    return s
  },
  tk: function() {
    return o
  }
}), n(47120);
var i = n(911969);

function r(e, t) {
  return e === i.yU.CHAT ? "/" + t : t
}

function s(e, t) {
  return "".concat(e, ":").concat(t)
}

function o(e) {
  return Object.fromEntries(e.map(e => [s(e.id, e.type), e]))
}
n(895924)