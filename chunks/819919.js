"use strict";
var r = n("67867"),
  a = n("548828"),
  o = n("228042"),
  i = n("146321"),
  l = TypeError,
  u = i.get,
  s = i.has,
  c = i.set;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  update: function(e, t) {
    var n = o(this),
      r = arguments.length;
    a(t);
    var i = s(n, e);
    if (!i && r < 3) throw new l("Updating absent value");
    var d = i ? u(n, e) : a(r > 2 ? arguments[2] : void 0)(e, n);
    return c(n, e, t(d, e, n)), n
  }
})