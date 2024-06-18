"use strict";

function i(e, t, n) {
  return "string" == typeof e.content || void 0 === e.content ? e.content : t(e.content, n)
}

function r(e) {
  return "home" === e || "browse" === e || "customize" === e || "guide" === e
}
n.d(t, {
  S: function() {
    return i
  },
  k: function() {
    return r
  }
})