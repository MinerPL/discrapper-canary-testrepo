"use strict";
n.d(t, {
  z: function() {
    return _
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(84735),
  l = n(562701),
  u = n(689197);

function _(e, t, n) {
  let s = (0, l.G6)(e),
    _ = new Map,
    d = new n(e => {
      e.forEach(e => {
        var t;
        let {
          target: n
        } = e;
        null === (t = _.get(n)) || void 0 === t || t(e)
      })
    });
  return (0, r.forwardRef)(function(n, c) {
    let {
      onScroll: E,
      dir: I = "ltr",
      sections: T,
      columns: h,
      getItemKey: S,
      getItemHeight: f,
      getSectionHeight: N,
      chunkSize: A,
      renderSection: m,
      renderItem: O,
      getSectionProps: R,
      itemGutter: C,
      removeEdgeItemGutters: p,
      sectionGutter: g,
      padding: L,
      paddingVertical: v,
      paddingHorizontal: D,
      fade: M = !1,
      className: P,
      style: y,
      maxContentWidth: U,
      ...b
    } = n, G = r.useRef(null), w = r.useRef(null), [k, B] = r.useState(!1), {
      scrollerRef: x,
      scrollerState: V,
      getScrollerState: Z
    } = (0, l.T4)();
    (0, l.tT)({
      scrollerRef: x,
      className: P,
      specs: s,
      orientation: "vertical",
      dir: I
    });
    let {
      forceUpdateOnChunkChange: H,
      coordsMap: F,
      gridData: Y,
      visibleSections: j,
      totalHeight: W,
      forceUpdate: K,
      masonryComputer: z
    } = (0, l.QB)({
      sections: T,
      columns: h,
      getItemKey: S,
      getItemHeight: f,
      getSectionHeight: N,
      chunkSize: A,
      itemGutter: C,
      removeEdgeItemGutters: p,
      sectionGutter: g,
      padding: L,
      paddingVertical: v,
      paddingHorizontal: D,
      getScrollerState: Z,
      dir: I,
      maxBufferWidth: U
    }), q = (0, r.useCallback)(function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
      e > V.current.dirty && (V.current.dirty = e, 2 === e ? K() : H(1))
    }, [H, V, K]), X = (0, l.t2)(x), Q = (0, r.useCallback)(() => z.itemGrid, [z]), J = (0, r.useCallback)(() => z.coordsMap, [z]), $ = r.useCallback(() => q(), [q]);
    (0, l.zn)({
      ref: x,
      key: "container",
      onUpdate: $,
      resizeObserver: d,
      listenerMap: _
    }), (0, r.useImperativeHandle)(c, () => ({
      getScrollerNode: () => x.current,
      getItemGrid: Q,
      getCoordsMap: J,
      getScrollerState: Z,
      ...(0, l.Ue)(x, Z, X)
    }), [x, Z, Q, X, J]);
    let ee = (0, r.useCallback)(e => {
      q(1), null == G.current ? B(!0) : clearTimeout(G.current), G.current = setTimeout(() => {
        G.current = null, B(!1)
      }, 200), null != E && E(e)
    }, [E, q]);
    return (0, i.jsx)("div", {
      ref: x,
      onScroll: ee,
      className: o()(P, {
        [e]: !0,
        [t]: M,
        [u.scrolling]: k
      }),
      style: (0, l.uT)(y),
      ...b,
      children: (0, r.useMemo)(() => (0, i.jsx)(a.J, {
        containerRef: w,
        children: (0, i.jsx)("div", {
          style: {
            height: W
          },
          className: u.content,
          ref: w,
          children: Object.keys(j).map(e => {
            let t = (0, l.t$)(e),
              n = F[e],
              r = j[e],
              s = F[(0, l.DP)(t)],
              o = null == R ? void 0 : R(t);
            return null != n && null != r ? (0, i.jsxs)("div", {
              style: n,
              ...o,
              children: [null != m && null != s && m(t, s, e), r.map(e => {
                let [t, n, i] = e, r = F[t];
                return null != r ? O(n, i, r, t, Y) : null
              })]
            }, e) : null
          })
        })
      }), [j, O, m, F, W, R, Y])
    })
  })
}