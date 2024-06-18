"use strict";
n.d(t, {
  BT: function() {
    return l
  },
  IS: function() {
    return o
  },
  Rd: function() {
    return i
  },
  SG: function() {
    return a
  },
  fu: function() {
    return r
  },
  j1: function() {
    return s
  },
  jn: function() {
    return u
  },
  wZ: function() {
    return c
  }
});
var r = "dnd-core/ADD_SOURCE",
  i = "dnd-core/ADD_TARGET",
  a = "dnd-core/REMOVE_SOURCE",
  o = "dnd-core/REMOVE_TARGET";

function s(e) {
  return {
    type: r,
    payload: {
      sourceId: e
    }
  }
}

function u(e) {
  return {
    type: i,
    payload: {
      targetId: e
    }
  }
}

function c(e) {
  return {
    type: a,
    payload: {
      sourceId: e
    }
  }
}

function l(e) {
  return {
    type: o,
    payload: {
      targetId: e
    }
  }
}