"use strict";
var r = n("67867"),
  a = n("476508"),
  o = n("228042"),
  i = n("146321"),
  l = n("292137"),
  u = i.Map,
  s = i.set;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  mapValues: function(e) {
    var t = o(this),
      n = a(e, arguments.length > 1 ? arguments[1] : void 0),
      r = new u;
    return l(t, function(e, a) {
      s(r, a, n(e, a, t))
    }), r
  }
})