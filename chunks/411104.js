"use strict";
var n = e(147018),
  o = e(161581),
  i = e(197187),
  a = e(261987),
  u = "WebAssembly",
  f = o[u],
  c = 7 !== Error("e", {
    cause: 7
  }).cause,
  s = function(t, r) {
    var e = {};
    e[t] = a(t, r, c), n({
      global: !0,
      constructor: !0,
      arity: 1,
      forced: c
    }, e)
  },
  p = function(t, r) {
    if (f && f[t]) {
      var e = {};
      e[t] = a(u + "." + t, r, c), n({
        target: u,
        stat: !0,
        constructor: !0,
        arity: 1,
        forced: c
      }, e)
    }
  };
s("Error", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), s("EvalError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), s("RangeError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), s("ReferenceError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), s("SyntaxError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), s("TypeError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), s("URIError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), p("CompileError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), p("LinkError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
}), p("RuntimeError", function(t) {
  return function(r) {
    return i(t, this, arguments)
  }
})