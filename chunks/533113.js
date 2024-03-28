"use strict";
var r = n("67867"),
  a = n("96403"),
  o = n("548828"),
  i = n("611345"),
  l = n("474883"),
  u = n("474505"),
  s = n("342545"),
  c = n("821819"),
  d = n("409851"),
  f = n("54659"),
  p = n("949999"),
  h = n("301338"),
  m = n("882708"),
  y = n("407747"),
  v = [],
  g = a(v.sort),
  b = a(v.push),
  _ = c(function() {
    v.sort(void 0)
  }),
  k = c(function() {
    v.sort(null)
  }),
  C = f("sort"),
  w = !c(function() {
    if (m) return m < 70;
    if (!p || !(p > 3)) {
      if (h) return !0;
      if (y) return y < 603;
      var e, t, n, r, a = "";
      for (e = 65; e < 76; e++) {
        switch (t = String.fromCharCode(e), e) {
          case 66:
          case 69:
          case 70:
          case 72:
            n = 3;
            break;
          case 68:
          case 71:
            n = 4;
            break;
          default:
            n = 2
        }
        for (r = 0; r < 47; r++) v.push({
          k: t + r,
          v: n
        })
      }
      for (v.sort(function(e, t) {
          return t.v - e.v
        }), r = 0; r < v.length; r++) t = v[r].k.charAt(0), a.charAt(a.length - 1) !== t && (a += t);
      return "DGBEFHACIJK" !== a
    }
  });
r({
  target: "Array",
  proto: !0,
  forced: _ || !k || !C || !w
}, {
  sort: function(e) {
    void 0 !== e && o(e);
    var t, n, r, a = i(this);
    if (w) return void 0 === e ? g(a) : g(a, e);
    var c = [],
      f = l(a);
    for (r = 0; r < f; r++) r in a && b(c, a[r]);
    for (d(c, (t = e, function(e, n) {
        return void 0 === n ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, n) || 0 : s(e) > s(n) ? 1 : -1
      })), n = l(c), r = 0; r < n;) a[r] = c[r++];
    for (; r < f;) u(a, r++);
    return a
  }
})