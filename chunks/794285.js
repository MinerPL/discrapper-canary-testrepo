"use strict";
var r = n("67867"),
  a = n("294377"),
  o = n("414629"),
  i = n("197859"),
  l = n("732116").CONSTRUCTOR,
  u = n("607672"),
  s = a("Promise"),
  c = o && !l;
r({
  target: "Promise",
  stat: !0,
  forced: o || l
}, {
  resolve: function(e) {
    return u(c && this === s ? i : this, e)
  }
})