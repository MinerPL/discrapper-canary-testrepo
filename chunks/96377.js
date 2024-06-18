"use strict";
var r = n(740078),
  i = n(126387),
  a = n(205208),
  o = n(792278),
  s = n(464826),
  u = n(493623),
  c = n(343713),
  l = n(510104),
  d = n(632471),
  f = n(607033),
  p = n(894417);
t.Z = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      h = e.name,
      m = n.mainAxis,
      g = n.altAxis,
      _ = n.boundary,
      b = n.rootBoundary,
      v = n.altBoundary,
      y = n.padding,
      E = n.tether,
      S = void 0 === E || E,
      x = n.tetherOffset,
      w = void 0 === x ? 0 : x,
      C = (0, l.Z)(t, {
        boundary: _,
        rootBoundary: b,
        padding: y,
        altBoundary: v
      }),
      T = (0, i.Z)(t.placement),
      D = (0, d.Z)(t.placement),
      M = !D,
      O = (0, a.Z)(T),
      A = (0, o.Z)(O),
      k = t.modifiersData.popperOffsets,
      R = t.rects.reference,
      N = t.rects.popper,
      I = "function" == typeof w ? w(Object.assign({}, t.rects, {
        placement: t.placement
      })) : w,
      L = "number" == typeof I ? {
        mainAxis: I,
        altAxis: I
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, I),
      P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
      B = {
        x: 0,
        y: 0
      };
    if (!!k) {
      if (void 0 === m || m) {
        var F, U = "y" === O ? r.we : r.t$,
          j = "y" === O ? r.I : r.F2,
          Y = "y" === O ? "height" : "width",
          z = k[O],
          H = z + C[U],
          G = z - C[j],
          V = S ? -N[Y] / 2 : 0,
          $ = D === r.BL ? R[Y] : N[Y],
          Z = D === r.BL ? -N[Y] : -R[Y],
          K = t.elements.arrow,
          W = S && K ? (0, u.Z)(K) : {
            width: 0,
            height: 0
          },
          q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.Z)(),
          Q = q[U],
          X = q[j],
          J = (0, s.u)(0, R[Y], W[Y]),
          ee = M ? R[Y] / 2 - V - J - Q - L.mainAxis : $ - J - Q - L.mainAxis,
          et = M ? -R[Y] / 2 + V + J + X + L.mainAxis : Z + J + X + L.mainAxis,
          en = t.elements.arrow && (0, c.Z)(t.elements.arrow),
          er = en ? "y" === O ? en.clientTop || 0 : en.clientLeft || 0 : 0,
          ei = null != (F = null == P ? void 0 : P[O]) ? F : 0,
          ea = (0, s.u)(S ? (0, p.VV)(H, z + ee - ei - er) : H, z, S ? (0, p.Fp)(G, z + et - ei) : G);
        k[O] = ea, B[O] = ea - z
      }
      if (void 0 !== g && g) {
        var eo, es = "x" === O ? r.we : r.t$,
          eu = "x" === O ? r.I : r.F2,
          ec = k[A],
          el = "y" === A ? "height" : "width",
          ed = ec + C[es],
          ef = ec - C[eu],
          ep = -1 !== [r.we, r.t$].indexOf(T),
          eh = null != (eo = null == P ? void 0 : P[A]) ? eo : 0,
          em = ep ? ed : ec - R[el] - N[el] - eh + L.altAxis,
          eg = ep ? ec + R[el] + N[el] - eh - L.altAxis : ef,
          e_ = S && ep ? (0, s.q)(em, ec, eg) : (0, s.u)(S ? em : ed, ec, S ? eg : ef);
        k[A] = e_, B[A] = e_ - ec
      }
      t.modifiersData[h] = B
    }
  },
  requiresIfExists: ["offset"]
}