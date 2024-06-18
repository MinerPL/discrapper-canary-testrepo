"use strict";
n.d(t, {
  JP: function() {
    return o
  },
  sM: function() {
    return function e(t, n) {
      if (n && Array.isArray(t)) {
        t.forEach(function(t) {
          return e(t, !1)
        });
        return
      }(0, r.k)("string" == typeof t || "symbol" === i(t), n ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
    }
  },
  up: function() {
    return a
  }
});
var r = n(573654);

function i(e) {
  return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function a(e) {
  (0, r.k)("function" == typeof e.canDrag, "Expected canDrag to be a function."), (0, r.k)("function" == typeof e.beginDrag, "Expected beginDrag to be a function."), (0, r.k)("function" == typeof e.endDrag, "Expected endDrag to be a function.")
}

function o(e) {
  (0, r.k)("function" == typeof e.canDrop, "Expected canDrop to be a function."), (0, r.k)("function" == typeof e.hover, "Expected hover to be a function."), (0, r.k)("function" == typeof e.drop, "Expected beginDrag to be a function.")
}