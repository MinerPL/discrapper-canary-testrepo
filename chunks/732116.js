"use strict";
var r = n("668530"),
  a = n("197859"),
  o = n("735471"),
  i = n("902538"),
  l = n("976396"),
  u = n("360518"),
  s = n("661338"),
  c = n("252110"),
  d = n("414629"),
  f = n("882708"),
  p = a && a.prototype,
  h = u("species"),
  m = !1,
  y = o(r.PromiseRejectionEvent),
  v = i("Promise", function() {
    var e = l(a),
      t = e !== String(a);
    if (!t && 66 === f || d && !(p.catch && p.finally)) return !0;
    if (!f || f < 51 || !/native code/.test(e)) {
      var n = new a(function(e) {
          e(1)
        }),
        r = function(e) {
          e(function() {}, function() {})
        };
      if ((n.constructor = {})[h] = r, !(m = n.then(function() {}) instanceof r)) return !0
    }
    return !t && (s || c) && !y
  });
e.exports = {
  CONSTRUCTOR: v,
  REJECTION_EVENT: y,
  SUBCLASSING: m
}