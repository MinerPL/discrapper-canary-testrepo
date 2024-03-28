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
  allSettled: function(e) {
    var t = this,
      n = i.f(t),
      r = n.resolve,
      s = n.reject,
      c = l(function() {
        var n = o(t.resolve),
          i = [],
          l = 0,
          s = 1;
        u(e, function(e) {
          var o = l++,
            u = !1;
          s++, a(n, t, e).then(function(e) {
            !u && (u = !0, i[o] = {
              status: "fulfilled",
              value: e
            }, --s || r(i))
          }, function(e) {
            !u && (u = !0, i[o] = {
              status: "rejected",
              reason: e
            }, --s || r(i))
          })
        }), --s || r(i)
      });
    return c.error && s(c.value), n.promise
  }
})