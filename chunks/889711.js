"use strict";

function i(e) {
  return new ResizeObserver(e)
}

function r(e, t) {
  e.observe(t)
}

function s(e, t) {
  e.unobserve(t)
}
n.d(t, {
  UC: function() {
    return s
  },
  YP: function() {
    return r
  },
  pP: function() {
    return i
  }
})