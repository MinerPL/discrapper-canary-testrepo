"use strict";
n.d(t, {
  B0: function() {
    return c
  },
  IP: function() {
    return s
  },
  Qb: function() {
    return o
  },
  UI: function() {
    return u
  },
  j$: function() {
    return i
  },
  je: function() {
    return a
  }
});
var r = Symbol.for("FluidValue:config"),
  i = function(e) {
    return !!o(e)
  };

function a(e) {
  var t = o(e);
  return t ? t.get() : e
}

function o(e) {
  if (e) return e[r]
}

function s(e, t) {
  Object.defineProperty(e, r, {
    value: t,
    configurable: !0
  })
}

function u(e, t) {
  var n = o(e);
  if (n) return n.addChild(t),
    function() {
      return n.removeChild(t)
    }
}
var c = function() {
  s(this, this)
}