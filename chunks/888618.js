"use strict";

function i(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e)
}

function r(e, t, n, i) {
  return i.tension * (e - t) - i.friction * n
}
n.d(t, {
  B: function() {
    return r
  },
  M: function() {
    return i
  }
})