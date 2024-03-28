"use strict";
var r = n("67867"),
  a = n("570596"),
  o = n("548828"),
  i = n("294377"),
  l = n("653457"),
  u = n("139545"),
  s = n("730427"),
  c = n("871785"),
  d = "No one promise resolved";
r({
  target: "Promise",
  stat: !0,
  forced: c
}, {
  any: function(e) {
    var t = this,
      n = i("AggregateError"),
      r = l.f(t),
      c = r.resolve,
      f = r.reject,
      p = u(function() {
        var r = o(t.resolve),
          i = [],
          l = 0,
          u = 1,
          p = !1;
        s(e, function(e) {
          var o = l++,
            s = !1;
          u++, a(r, t, e).then(function(e) {
            !s && !p && (p = !0, c(e))
          }, function(e) {
            !s && !p && (s = !0, i[o] = e, --u || f(new n(i, d)))
          })
        }), --u || f(new n(i, d))
      });
    return p.error && f(p.value), r.promise
  }
})