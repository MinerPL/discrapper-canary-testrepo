    "use strict";
    var n = e("147018"),
      o = e("161581"),
      i = e("197187"),
      u = e("261987"),
      c = "WebAssembly",
      s = o[c],
      a = 7 !== Error("e", {
        cause: 7
      }).cause,
      f = function(t, r) {
        var e = {};
        e[t] = u(t, r, a), n({
          global: !0,
          constructor: !0,
          arity: 1,
          forced: a
        }, e)
      },
      p = function(t, r) {
        if (s && s[t]) {
          var e = {};
          e[t] = u(c + "." + t, r, a), n({
            target: c,
            stat: !0,
            constructor: !0,
            arity: 1,
            forced: a
          }, e)
        }
      };
    f("Error", function(t) {
      return function(r) {
        return i(t, this, arguments)
      }
    }), f("EvalError", function(t) {
      return function(r) {
        return i(t, this, arguments)
      }
    }), f("RangeError", function(t) {
      return function(r) {
        return i(t, this, arguments)
      }
    }), f("ReferenceError", function(t) {
      return function(r) {
        return i(t, this, arguments)
      }
    }), f("SyntaxError", function(t) {
      return function(r) {
        return i(t, this, arguments)
      }
    }), f("TypeError", function(t) {
      return function(r) {
        return i(t, this, arguments)
      }
    }), f("URIError", function(t) {
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