"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(147479),
  l = n(391652);
let u = r.memo(r.forwardRef((e, t) => {
  let {
    onScroll: n,
    onResize: s,
    listPadding: u = [0, 0, 0, 0],
    renderRow: _,
    renderSection: d,
    renderSectionHeader: c,
    renderSectionFooter: E,
    renderListHeader: I,
    rowCount: T,
    rowCountBySection: h,
    rowHeight: S,
    sectionMarginBottom: f,
    sectionHeaderHeight: N,
    sectionFooterHeight: A,
    listHeaderHeight: m,
    stickyHeaders: O = !1,
    className: R,
    hideScrollbar: C = !1,
    fade: p = !1,
    initialScrollTop: g = 0,
    role: L = "list"
  } = e, [v, D] = r.useState(-1), [M, P] = r.useState(-1), y = r.useRef(null), U = r.useRef(0), b = r.useRef(-1);
  r.useLayoutEffect(() => {
    var e;
    let t = null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerNode();
    null != t && (t.scrollTop = g)
  }, []);
  let G = r.useCallback(() => {
      let e = "function" == typeof m ? m() : m;
      return null == e ? 0 : e
    }, [m]),
    w = r.useCallback((e, t, n) => "function" == typeof S ? S(n, {
      sectionIndex: e,
      sectionRowIndex: t
    }) : S, [S]),
    k = r.useCallback(e => {
      let t = "function" == typeof N ? N(e) : N;
      return null == t ? 0 : t
    }, [N]),
    B = r.useCallback(e => {
      let t = "function" == typeof A ? A(e) : A;
      return null == t ? 0 : t
    }, [A]),
    x = r.useCallback(e => {
      let t = "function" == typeof f ? f(e) : f;
      return null == t ? 0 : t
    }, [f]),
    V = r.useRef([]),
    Z = r.useRef([]),
    {
      totalHeight: H,
      rowDescriptors: F,
      sectionDescriptors: Y
    } = r.useMemo(() => {
      let e = 0,
        t = null != h,
        n = t ? h.length : 1,
        i = u[0],
        r = [],
        s = [];
      i += G();
      for (let o = 0; o < n; o++) {
        let n = t ? h[o] : T,
          a = (null == h ? void 0 : h[o]) !== 0;
        s[o] = {
          firstRowIndex: e,
          offset: {
            top: i,
            bottom: -1
          }
        }, i += k(o);
        for (let t = 0; t < n; t++) {
          let n = i + (a ? w(o, t, e) : 0),
            s = {
              top: i,
              bottom: n
            };
          r[e] = {
            sectionIndex: o,
            offset: s
          }, i = n, e++
        }
        i += B(o) + x(o), s[o].offset.bottom = i
      }
      return {
        totalHeight: i += u[2],
        rowDescriptors: r,
        sectionDescriptors: s
      }
    }, [w, B, k, x, u, T, h, G]);
  V.current = Y, Z.current = F;
  let j = r.useCallback(() => {
    var e;
    let t = null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerNode();
    if (null == t) return;
    let {
      offsetWidth: n,
      offsetHeight: i,
      scrollTop: r
    } = t;
    P(i), D(r), null == s || s({
      width: n,
      height: i
    })
  }, [s]);
  r.useLayoutEffect(() => {
    -1 === M && j()
  }, [M, j]), r.useEffect(() => {
    var e;
    let t = null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerNode(),
      n = null == t ? void 0 : t.ownerDocument.defaultView;
    if (null == t || null == n) return;
    let i = new n.ResizeObserver(j);
    return i.observe(t), () => i.disconnect()
  }, [j]);
  let W = r.useCallback(() => {
    var e;
    let t = null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerNode();
    null != t && (window.cancelAnimationFrame(b.current), b.current = window.requestAnimationFrame(() => {
      let {
        scrollTop: e
      } = t;
      U.current = e, null == n || n(e), D(e)
    }))
  }, [n]);
  r.useImperativeHandle(t, () => ({
    scrollTo: function(e) {
      var t;
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          animate: i = !1
        } = n;
      null === (t = y.current) || void 0 === t || t.scrollTo({
        to: e,
        animate: i
      })
    },
    scrollRowIntoView: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          animate: n = !1,
          offset: i = 0
        } = t,
        r = Z.current[e];
      null != r && window.requestAnimationFrame(() => {
        var t, s;
        let {
          sectionIndex: o,
          offset: {
            top: a,
            bottom: l
          }
        } = r, u = k(o), _ = a - (O ? u : 0) - i <= U.current, d = l + i >= U.current + M;
        if (_) {
          let r = U.current + u - a,
            s = O ? U.current - r : a;
          null === (t = y.current) || void 0 === t || t.scrollTo({
            to: 0 === e ? 0 : s - i,
            animate: n
          })
        } else if (d) {
          let e = l - (U.current + M);
          null === (s = y.current) || void 0 === s || s.scrollTo({
            to: U.current + e + i,
            animate: n
          })
        }
      })
    },
    scrollToSectionTop: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          animate: n = !1,
          offset: i = 0
        } = t,
        r = V.current[e];
      null != r && window.requestAnimationFrame(() => {
        var t;
        null === (t = y.current) || void 0 === t || t.scrollTo({
          to: (0 === e ? 0 : r.offset.top) + i,
          animate: n
        })
      })
    },
    getListDimensions: () => ({
      height: M,
      totalHeight: H
    }),
    getSectionDescriptors: () => V.current,
    getRowDescriptors: () => Z.current,
    getScrollerNode: () => {
      var e;
      return null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerNode()
    },
    scrollIntoViewNode: e => {
      var t;
      return null === (t = y.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({
        node: e
      })
    }
  }), [k, O, H, M]);
  let {
    visibleItems: K,
    listOffset: z
  } = r.useMemo(() => {
    if (-1 === M || -1 === v) return {
      visibleItems: null,
      listOffset: 0
    };
    let e = v + M,
      t = 0,
      n = u[0],
      i = [],
      r = G();
    null != I && v < r ? i.push(I()) : n += r;
    for (let r = 0; r < Y.length; r++) {
      let {
        firstRowIndex: s,
        offset: {
          top: o,
          bottom: a
        }
      } = Y[r], l = a - o;
      if (0 === l) continue;
      let u = k(r),
        I = B(r),
        T = x(r);
      if (a <= v) n = a;
      else if (a > v && o < e) {
        t = s;
        let a = [],
          h = 0,
          S = 0,
          f = o + u >= v && o <= e;
        for (null != c && (O || f) && a.push(c(r)), !f && !O && (n += u); h + u + I < l - T;) {
          let i = w(r, S, t),
            s = o + h + u,
            l = s + i;
          if (l <= v) n = l - (O ? u : 0);
          else if (l > v && s < e) a.push(_(t, {
            sectionIndex: r,
            sectionRowIndex: S
          }));
          else break;
          h += i, S++, t++
        }
        let N = o + u + h,
          A = N + I >= v && N <= e;
        null != E && A && a.push(E(r)), null != d ? i.push(d(r, a)) : i = [...i, ...a]
      } else break
    }
    return {
      visibleItems: i,
      listOffset: n
    }
  }, [w, B, k, x, u, _, d, E, c, v, Y, O, I, G, M]), q = r.useMemo(() => {
    var e, t, n;
    return {
      top: z,
      right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
      bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
      left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
    }
  }, [z, u]), X = r.useMemo(() => ({
    height: H
  }), [H]), Q = C ? a.xV : a.h2;
  return (0, i.jsxs)(Q, {
    fade: p,
    className: o()(l.scroller, R),
    ref: y,
    onScroll: W,
    children: [(0, i.jsx)("div", {
      role: L,
      className: l.listItems,
      style: q,
      children: K
    }), (0, i.jsx)("div", {
      className: l.listHeight,
      style: X
    })]
  })
}));
t.Z = u