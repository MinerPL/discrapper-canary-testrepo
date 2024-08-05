var r = n(147018),
  i = n(926515),
  a = n(526988),
  s = n(213897),
  o = n(532055),
  l = n(71480);
r({
  target: 'Promise',
  stat: !0,
  forced: n(246582)
}, {
  allSettled: function(e) {
var t = this,
  n = s.f(t),
  r = n.resolve,
  u = n.reject,
  c = o(function() {
    var n = a(t.resolve),
      s = [],
      o = 0,
      u = 1;
    l(e, function(e) {
      var a = o++,
        l = !1;
      u++, i(n, t, e).then(function(e) {
        !l && (l = !0, s[a] = {
          status: 'fulfilled',
          value: e
        }, --u || r(s));
      }, function(e) {
        !l && (l = !0, s[a] = {
          status: 'rejected',
          reason: e
        }, --u || r(s));
      });
    }), --u || r(s);
  });
return c.error && u(c.value), n.promise;
  }
});