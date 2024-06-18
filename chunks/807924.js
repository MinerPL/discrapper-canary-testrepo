"use strict";
var r = n(126387),
  i = n(493623),
  a = n(67966),
  o = n(343713),
  s = n(205208),
  u = n(464826),
  c = n(544338),
  l = n(581206),
  d = n(740078);
t.Z = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: function(e) {
    var t, n, a, f = e.state,
      p = e.name,
      h = e.options,
      m = f.elements.arrow,
      g = f.modifiersData.popperOffsets,
      _ = (0, r.Z)(f.placement),
      b = (0, s.Z)(_),
      v = [d.t$, d.F2].indexOf(_) >= 0 ? "height" : "width";
    if (!!m && !!g) {
      var y = (t = h.padding, n = f, t = "function" == typeof t ? t(Object.assign({}, n.rects, {
          placement: n.placement
        })) : t, (0, c.Z)("number" != typeof t ? t : (0, l.Z)(t, d.mv))),
        E = (0, i.Z)(m),
        S = "y" === b ? d.we : d.t$,
        x = "y" === b ? d.I : d.F2,
        w = f.rects.reference[v] + f.rects.reference[b] - g[b] - f.rects.popper[v],
        C = g[b] - f.rects.reference[b],
        T = (0, o.Z)(m),
        D = T ? "y" === b ? T.clientHeight || 0 : T.clientWidth || 0 : 0,
        M = y[S],
        O = D - E[v] - y[x],
        A = D / 2 - E[v] / 2 + (w / 2 - C / 2),
        k = (0, u.u)(M, A, O);
      f.modifiersData[p] = ((a = {})[b] = k, a.centerOffset = k - A, a)
    }
  },
  effect: function(e) {
    var t = e.state,
      n = e.options.element,
      r = void 0 === n ? "[data-popper-arrow]" : n;
    if (null != r && ("string" != typeof r || !!(r = t.elements.popper.querySelector(r))) && !!(0, a.Z)(t.elements.popper, r)) t.elements.arrow = r
  },
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
}