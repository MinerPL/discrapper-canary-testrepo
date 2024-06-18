"use strict";
var r = n(740078),
  i = n(343713),
  a = n(49691),
  o = n(285363),
  s = n(874900),
  u = n(126387),
  c = n(632471),
  l = n(894417),
  d = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

function f(e) {
  var t, n, u, c, f, p, h, m = e.popper,
    g = e.popperRect,
    _ = e.placement,
    b = e.variation,
    v = e.offsets,
    y = e.position,
    E = e.gpuAcceleration,
    S = e.adaptive,
    x = e.roundOffsets,
    w = e.isFixed,
    C = v.x,
    T = void 0 === C ? 0 : C,
    D = v.y,
    M = void 0 === D ? 0 : D,
    O = "function" == typeof x ? x({
      x: T,
      y: M
    }) : {
      x: T,
      y: M
    };
  T = O.x, M = O.y;
  var A = v.hasOwnProperty("x"),
    k = v.hasOwnProperty("y"),
    R = r.t$,
    N = r.we,
    I = window;
  if (S) {
    var L = (0, i.Z)(m),
      P = "clientHeight",
      B = "clientWidth";
    L === (0, a.Z)(m) && (L = (0, o.Z)(m), "static" !== (0, s.Z)(L).position && "absolute" === y && (P = "scrollHeight", B = "scrollWidth"));
    (_ === r.we || (_ === r.t$ || _ === r.F2) && b === r.ut) && (N = r.I, M -= (w && L === I && I.visualViewport ? I.visualViewport.height : L[P]) - g.height, M *= E ? 1 : -1), (_ === r.t$ || (_ === r.we || _ === r.I) && b === r.ut) && (R = r.F2, T -= (w && L === I && I.visualViewport ? I.visualViewport.width : L[B]) - g.width, T *= E ? 1 : -1)
  }
  var F = Object.assign({
    position: y
  }, S && d);
  var U = !0 === x ? (t = {
    x: T,
    y: M
  }, n = (0, a.Z)(m), u = t.x, c = t.y, f = n.devicePixelRatio || 1, {
    x: (0, l.NM)(u * f) / f || 0,
    y: (0, l.NM)(c * f) / f || 0
  }) : {
    x: T,
    y: M
  };
  return (T = U.x, M = U.y, E) ? Object.assign({}, F, ((h = {})[N] = k ? "0" : "", h[R] = A ? "0" : "", h.transform = 1 >= (I.devicePixelRatio || 1) ? "translate(" + T + "px, " + M + "px)" : "translate3d(" + T + "px, " + M + "px, 0)", h)) : Object.assign({}, F, ((p = {})[N] = k ? M + "px" : "", p[R] = A ? T + "px" : "", p.transform = "", p))
}
t.Z = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      r = n.gpuAcceleration,
      i = n.adaptive,
      a = n.roundOffsets,
      o = void 0 === a || a,
      s = {
        placement: (0, u.Z)(t.placement),
        variation: (0, c.Z)(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: void 0 === r || r,
        isFixed: "fixed" === t.options.strategy
      };
    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, f(Object.assign({}, s, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: void 0 === i || i,
      roundOffsets: o
    })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, f(Object.assign({}, s, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: !1,
      roundOffsets: o
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    })
  },
  data: {}
}