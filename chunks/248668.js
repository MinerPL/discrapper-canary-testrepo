"use strict";
var r = n("67867"),
  a = n("570596"),
  o = n("548828"),
  i = n("653457"),
  l = n("139545"),
  u = n("730427");
r({
  target: "Promise",
  stat: !0,
  forced: n("871785")
}, {
  race: function(e) {
    var t = this,
      n = i.f(t),
      r = n.reject,
      s = l(function() {
        var i = o(t.resolve);
        u(e, function(e) {
          a(i, t, e).then(n.resolve, r)
        })
      });
    return s.error && r(s.value), n.promise
  }
})