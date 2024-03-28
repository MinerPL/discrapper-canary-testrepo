"use strict";
var r = n("67867"),
  a = n("228042"),
  o = n("146321"),
  i = o.get,
  l = o.has,
  u = o.set;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  emplace: function(e, t) {
    var n, r, o = a(this);
    return l(o, e) ? (n = i(o, e), "update" in t && (n = t.update(n, e, o), u(o, e, n)), n) : (r = t.insert(e, o), u(o, e, r), r)
  }
})