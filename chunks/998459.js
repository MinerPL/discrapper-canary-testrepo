var r = n(147018),
  i = n(926515),
  a = n(526988),
  o = n(213897),
  s = n(532055),
  l = n(71480);
r({
  target: 'Promise',
  stat: !0,
  forced: n(246582)
}, {
  allSettled: function(e) {
var t = this,
  n = o.f(t),
  r = n.resolve,
  u = n.reject,
  c = s(function() {
    var n = a(t.resolve),
      o = [],
      s = 0,
      u = 1;
    l(e, function(e) {
      var a = s++,
        l = !1;
      u++, i(n, t, e).then(function(e) {
        !l && (l = !0, o[a] = {
          status: 'fulfilled',
          value: e
        }, --u || r(o));
      }, function(e) {
        !l && (l = !0, o[a] = {
          status: 'rejected',
          reason: e
        }, --u || r(o));
      });
    }), --u || r(o);
  });
return c.error && u(c.value), n.promise;
  }
});