"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var r = n(685516),
  i = n(285363),
  a = n(175922),
  o = n(406434),
  s = n(6138),
  u = n(740078),
  c = n(882159),
  l = n(544338),
  d = n(581206);

function f(e, t) {
  void 0 === t && (t = {});
  var n = t,
    f = n.placement,
    p = void 0 === f ? e.placement : f,
    h = n.strategy,
    m = void 0 === h ? e.strategy : h,
    g = n.boundary,
    _ = void 0 === g ? u.zV : g,
    b = n.rootBoundary,
    v = void 0 === b ? u.Pj : b,
    y = n.elementContext,
    E = void 0 === y ? u.k5 : y,
    S = n.altBoundary,
    x = n.padding,
    w = void 0 === x ? 0 : x,
    C = (0, l.Z)("number" != typeof w ? w : (0, d.Z)(w, u.mv)),
    T = E === u.k5 ? u.YP : u.k5,
    D = e.rects.popper,
    M = e.elements[void 0 !== S && S ? T : E],
    O = (0, r.Z)((0, c.kK)(M) ? M : M.contextElement || (0, i.Z)(e.elements.popper), _, v, m),
    A = (0, a.Z)(e.elements.reference),
    k = (0, o.Z)({
      reference: A,
      element: D,
      strategy: "absolute",
      placement: p
    }),
    R = (0, s.Z)(Object.assign({}, D, k)),
    N = E === u.k5 ? R : A,
    I = {
      top: O.top - N.top + C.top,
      bottom: N.bottom - O.bottom + C.bottom,
      left: O.left - N.left + C.left,
      right: N.right - O.right + C.right
    },
    L = e.modifiersData.offset;
  if (E === u.k5 && L) {
    var P = L[p];
    Object.keys(I).forEach(function(e) {
      var t = [u.F2, u.I].indexOf(e) >= 0 ? 1 : -1,
        n = [u.we, u.I].indexOf(e) >= 0 ? "y" : "x";
      I[e] += P[n] * t
    })
  }
  return I
}