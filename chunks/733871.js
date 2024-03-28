"use strict";
var r = n("67867"),
  a = n("875604"),
  o = n("82474"),
  i = n("600385"),
  l = n("221446"),
  u = n("224106"),
  s = n("948634"),
  c = n("241777"),
  d = n("353991"),
  f = n("972554"),
  p = n("730427"),
  h = n("104210"),
  m = n("360518")("toStringTag"),
  y = Error,
  v = [].push,
  g = function(e, t) {
    var n, r = a(b, this);
    i ? n = i(new y, r ? o(this) : b) : s(n = r ? this : u(b), m, "Error"), void 0 !== t && s(n, "message", h(t)), f(n, g, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
    var l = [];
    return p(e, v, {
      that: l
    }), s(n, "errors", l), n
  };
i ? i(g, y) : l(g, y, {
  name: !0
});
var b = g.prototype = u(y.prototype, {
  constructor: c(1, g),
  message: c(1, ""),
  name: c(1, "AggregateError")
});
r({
  global: !0,
  constructor: !0,
  arity: 2
}, {
  AggregateError: g
})