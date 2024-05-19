"use strict";

function i(e) {
  throw Error("Unhandled value: ".concat(e))
}

function r(e) {
  return null != e
}

function a(e, t) {
  return e.size === t.size && (0 === e.size && 0 === t.size || Array.from(e).every(e => t.has(e)))
}

function s(e, t) {
  return t.includes(e)
}
n.r(t), n.d(t, {
  areSetsEqual: function() {
    return a
  },
  assertNever: function() {
    return i
  },
  isIn: function() {
    return s
  },
  isNotNullish: function() {
    return r
  }
}), n("411104")