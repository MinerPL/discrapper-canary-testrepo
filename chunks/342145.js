"use strict";
var r = n("67867"),
  a = n("570596"),
  o = n("730427"),
  i = n("735471"),
  l = n("548828"),
  u = n("146321").Map;
r({
  target: "Map",
  stat: !0,
  forced: !0
}, {
  keyBy: function(e, t) {
    var n = new(i(this) ? this : u);
    l(t);
    var r = l(n.set);
    return o(e, function(e) {
      a(r, n, t(e), e)
    }), n
  }
})