"use strict";
n.d(t, {
  Nd: function() {
    return s
  },
  bk: function() {
    return r
  },
  d3: function() {
    return o
  },
  oP: function() {
    return a
  }
});
var i = n(246364);

function r(e) {
  return e === i.wB.APPROVED || e === i.wB.REJECTED
}

function s(e) {
  return e === i.wB.SUBMITTED
}

function o(e) {
  return e.applicationStatus === i.wB.APPROVED && null != e.lastSeen
}

function a(e) {
  return r(e.applicationStatus) && null == e.lastSeen
}