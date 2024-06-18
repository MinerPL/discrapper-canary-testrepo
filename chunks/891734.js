"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var r = n(632471),
  i = n(740078),
  a = n(510104),
  o = n(126387);

function s(e, t) {
  void 0 === t && (t = {});
  var n = t,
    s = n.placement,
    u = n.boundary,
    c = n.rootBoundary,
    l = n.padding,
    d = n.flipVariations,
    f = n.allowedAutoPlacements,
    p = void 0 === f ? i.Ct : f,
    h = (0, r.Z)(s),
    m = h ? d ? i.bw : i.bw.filter(function(e) {
      return (0, r.Z)(e) === h
    }) : i.mv,
    g = m.filter(function(e) {
      return p.indexOf(e) >= 0
    });
  0 === g.length && (g = m);
  var _ = g.reduce(function(t, n) {
    return t[n] = (0, a.Z)(e, {
      placement: n,
      boundary: u,
      rootBoundary: c,
      padding: l
    })[(0, o.Z)(n)], t
  }, {});
  return Object.keys(_).sort(function(e, t) {
    return _[e] - _[t]
  })
}