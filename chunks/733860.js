"use strict";
var e = r("147018"),
  i = r("339718"),
  u = r("49693"),
  c = r("610148"),
  o = r("708517"),
  s = r("886960"),
  a = 1 !== [].unshift(0);
e({
  target: "Array",
  proto: !0,
  arity: 1,
  forced: a || ! function() {
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).unshift()
    } catch (t) {
      return t instanceof TypeError
    }
  }()
}, {
  unshift: function(t) {
    var n = i(this),
      r = u(n),
      e = arguments.length;
    if (e) {
      s(r + e);
      for (var a = r; a--;) {
        var f = a + e;
        a in n ? n[f] = n[a] : o(n, f)
      }
      for (var l = 0; l < e; l++) n[l] = arguments[l]
    }
    return c(n, r + e)
  }
})