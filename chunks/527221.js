"use strict";
r(301563);
var e = r(173850),
  i = r(859209),
  u = r(213265),
  c = r(936940),
  o = r(641236),
  s = r(251069),
  a = o("species"),
  f = RegExp.prototype;
t.exports = function(t, n, r, l) {
  var h = o(t),
    v = !c(function() {
      var n = {};
      return n[h] = function() {
        return 7
      }, 7 !== "" [t](n)
    }),
    p = v && !c(function() {
      var n = !1,
        r = /a/;
      return "split" === t && ((r = {}).constructor = {}, r.constructor[a] = function() {
        return r
      }, r.flags = "", r[h] = /./ [h]), r.exec = function() {
        return n = !0, null
      }, r[h](""), !n
    });
  if (!v || !p || r) {
    var d = e(/./ [h]),
      x = n(h, "" [t], function(t, n, r, i, c) {
        var o = e(t),
          s = n.exec;
        if (s === u || s === f.exec) return v && !c ? {
          done: !0,
          value: d(n, r, i)
        } : {
          done: !0,
          value: o(r, n, i)
        };
        return {
          done: !1
        }
      });
    i(String.prototype, t, x[0]), i(f, h, x[1])
  }
  l && s(f[h], "sham", !0)
}