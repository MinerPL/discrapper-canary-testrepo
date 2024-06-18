"use strict";
var r = n(244287),
  i = n(126387),
  a = n(885952),
  o = n(510104),
  s = n(891734),
  u = n(740078),
  c = n(632471);
t.Z = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      l = e.name;
    if (!t.modifiersData[l]._skip) {
      for (var d = n.mainAxis, f = void 0 === d || d, p = n.altAxis, h = void 0 === p || p, m = n.fallbackPlacements, g = n.padding, _ = n.boundary, b = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, E = void 0 === y || y, S = n.allowedAutoPlacements, x = t.options.placement, w = (0, i.Z)(x) === x, C = m || (w || !E ? [(0, r.Z)(x)] : function(e) {
          if ((0, i.Z)(e) === u.d7) return [];
          var t = (0, r.Z)(e);
          return [(0, a.Z)(e), t, (0, a.Z)(t)]
        }(x)), T = [x].concat(C).reduce(function(e, n) {
          return e.concat((0, i.Z)(n) === u.d7 ? (0, s.Z)(t, {
            placement: n,
            boundary: _,
            rootBoundary: b,
            padding: g,
            flipVariations: E,
            allowedAutoPlacements: S
          }) : n)
        }, []), D = t.rects.reference, M = t.rects.popper, O = new Map, A = !0, k = T[0], R = 0; R < T.length; R++) {
        var N = T[R],
          I = (0, i.Z)(N),
          L = (0, c.Z)(N) === u.BL,
          P = [u.we, u.I].indexOf(I) >= 0,
          B = P ? "width" : "height",
          F = (0, o.Z)(t, {
            placement: N,
            boundary: _,
            rootBoundary: b,
            altBoundary: v,
            padding: g
          }),
          U = P ? L ? u.F2 : u.t$ : L ? u.I : u.we;
        D[B] > M[B] && (U = (0, r.Z)(U));
        var j = (0, r.Z)(U),
          Y = [];
        if (f && Y.push(F[I] <= 0), h && Y.push(F[U] <= 0, F[j] <= 0), Y.every(function(e) {
            return e
          })) {
          k = N, A = !1;
          break
        }
        O.set(N, Y)
      }
      if (A) {
        for (var z = E ? 3 : 1, H = function(e) {
            var t = T.find(function(t) {
              var n = O.get(t);
              if (n) return n.slice(0, e).every(function(e) {
                return e
              })
            });
            if (t) return k = t, "break"
          }, G = z; G > 0 && "break" !== H(G); G--);
      }
      t.placement !== k && (t.modifiersData[l]._skip = !0, t.placement = k, t.reset = !0)
    }
  },
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
}