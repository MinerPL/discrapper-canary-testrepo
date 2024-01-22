"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007"), n("424973");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("446662"),
  l = n("684510");
let u = s.memo(s.forwardRef((e, t) => {
  let {
    onScroll: n,
    onResize: r,
    listPadding: u = [0, 0, 0, 0],
    renderRow: d,
    renderSection: c,
    renderSectionHeader: f,
    renderSectionFooter: _,
    renderListHeader: h,
    rowCount: g,
    rowCountBySection: m,
    rowHeight: E,
    sectionMarginBottom: p,
    sectionHeaderHeight: v,
    sectionFooterHeight: S,
    listHeaderHeight: T,
    stickyHeaders: I = !1,
    className: C,
    hideScrollbar: A = !1,
    fade: y = !1,
    initialScrollTop: N = 0,
    role: R = "list"
  } = e, [O, D] = s.useState(-1), [P, b] = s.useState(-1), L = s.useRef(null), M = s.useRef(0), U = s.useRef(-1);
  s.useLayoutEffect(() => {
    var e;
    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode();
    null != t && (t.scrollTop = N)
  }, []);
  let k = s.useCallback(() => {
      let e = "function" == typeof T ? T() : T;
      return null == e ? 0 : e
    }, [T]),
    w = s.useCallback((e, t, n) => "function" == typeof E ? E(n, {
      sectionIndex: e,
      sectionRowIndex: t
    }) : E, [E]),
    V = s.useCallback(e => {
      let t = "function" == typeof v ? v(e) : v;
      return null == t ? 0 : t
    }, [v]),
    G = s.useCallback(e => {
      let t = "function" == typeof S ? S(e) : S;
      return null == t ? 0 : t
    }, [S]),
    F = s.useCallback(e => {
      let t = "function" == typeof p ? p(e) : p;
      return null == t ? 0 : t
    }, [p]),
    x = s.useRef([]),
    B = s.useRef([]),
    {
      totalHeight: H,
      rowDescriptors: Y,
      sectionDescriptors: j
    } = s.useMemo(() => {
      let e = 0,
        t = null != m,
        n = t ? m.length : 1,
        i = u[0],
        s = [],
        r = [];
      i += k();
      for (let a = 0; a < n; a++) {
        let n = t ? m[a] : g,
          o = (null == m ? void 0 : m[a]) !== 0;
        r[a] = {
          firstRowIndex: e,
          offset: {
            top: i,
            bottom: -1
          }
        }, i += V(a);
        for (let t = 0; t < n; t++) {
          let n = o ? w(a, t, e) : 0,
            r = i + n,
            l = {
              top: i,
              bottom: r
            };
          s[e] = {
            sectionIndex: a,
            offset: l
          }, i = r, e++
        }
        i += G(a) + F(a), r[a].offset.bottom = i
      }
      return {
        totalHeight: i += u[2],
        rowDescriptors: s,
        sectionDescriptors: r
      }
    }, [w, G, V, F, u, g, m, k]);
  x.current = j, B.current = Y;
  let W = s.useCallback(() => {
    var e;
    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode();
    if (null == t) return;
    let {
      offsetWidth: n,
      offsetHeight: i,
      scrollTop: s
    } = t;
    b(i), D(s), null == r || r({
      width: n,
      height: i
    })
  }, [r]);
  s.useLayoutEffect(() => {
    -1 === P && W()
  }, [P, W]), s.useEffect(() => {
    var e;
    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode(),
      n = null == t ? void 0 : t.ownerDocument.defaultView;
    if (null == t || null == n) return;
    let i = new n.ResizeObserver(W);
    return i.observe(t), () => i.disconnect()
  }, [W]);
  let K = s.useCallback(() => {
    var e;
    let t = null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode();
    null != t && (window.cancelAnimationFrame(U.current), U.current = window.requestAnimationFrame(() => {
      let {
        scrollTop: e
      } = t;
      M.current = e, null == n || n(e), D(e)
    }))
  }, [n]);
  s.useImperativeHandle(t, () => ({
    scrollTo: function(e) {
      var t;
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          animate: i = !1
        } = n;
      null === (t = L.current) || void 0 === t || t.scrollTo({
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
        s = B.current[e];
      null != s && window.requestAnimationFrame(() => {
        var t, r;
        let {
          sectionIndex: a,
          offset: {
            top: o,
            bottom: l
          }
        } = s, u = V(a), d = o - (I ? u : 0) - i <= M.current, c = l + i >= M.current + P;
        if (d) {
          let s = M.current + u - o,
            r = I ? M.current - s : o;
          null === (t = L.current) || void 0 === t || t.scrollTo({
            to: 0 === e ? 0 : r - i,
            animate: n
          })
        } else if (c) {
          let e = l - (M.current + P);
          null === (r = L.current) || void 0 === r || r.scrollTo({
            to: M.current + e + i,
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
        s = x.current[e];
      null != s && window.requestAnimationFrame(() => {
        var t;
        null === (t = L.current) || void 0 === t || t.scrollTo({
          to: (0 === e ? 0 : s.offset.top) + i,
          animate: n
        })
      })
    },
    getListDimensions: () => ({
      height: P,
      totalHeight: H
    }),
    getSectionDescriptors: () => x.current,
    getRowDescriptors: () => B.current,
    getScrollerNode: () => {
      var e;
      return null === (e = L.current) || void 0 === e ? void 0 : e.getScrollerNode()
    },
    scrollIntoViewNode: e => {
      var t;
      return null === (t = L.current) || void 0 === t ? void 0 : t.scrollIntoViewNode({
        node: e
      })
    }
  }), [V, I, H, P]);
  let {
    visibleItems: z,
    listOffset: q
  } = s.useMemo(() => {
    if (-1 === P || -1 === O) return {
      visibleItems: null,
      listOffset: 0
    };
    let e = O + P,
      t = 0,
      n = u[0],
      i = [],
      s = k();
    null != h && O < s ? i.push(h()) : n += s;
    for (let s = 0; s < j.length; s++) {
      let r = j[s],
        {
          firstRowIndex: a,
          offset: {
            top: o,
            bottom: l
          }
        } = r,
        u = l - o;
      if (0 === u) continue;
      let h = V(s),
        g = G(s),
        m = F(s);
      if (l <= O) n = l;
      else if (l > O && o < e) {
        t = a;
        let r = [],
          l = 0,
          E = 0,
          p = o + h,
          v = p >= O && o <= e;
        for (null != f && (I || v) && r.push(f(s)), !v && !I && (n += h); l + h + g < u - m;) {
          let i = w(s, E, t),
            a = o + l + h,
            u = a + i;
          if (u <= O) n = u - (I ? h : 0);
          else if (u > O && a < e) r.push(d(t, {
            sectionIndex: s,
            sectionRowIndex: E
          }));
          else break;
          l += i, E++, t++
        }
        let S = o + h + l,
          T = S + g,
          C = T >= O && S <= e;
        null != _ && C && r.push(_(s)), null != c ? i.push(c(s, r)) : i = [...i, ...r]
      } else break
    }
    return {
      visibleItems: i,
      listOffset: n
    }
  }, [w, G, V, F, u, d, c, _, f, O, j, I, h, k, P]), X = s.useMemo(() => {
    var e, t, n;
    return {
      top: q,
      right: null !== (e = null == u ? void 0 : u[1]) && void 0 !== e ? e : 0,
      bottom: null !== (t = null == u ? void 0 : u[2]) && void 0 !== t ? t : 0,
      left: null !== (n = null == u ? void 0 : u[3]) && void 0 !== n ? n : 0
    }
  }, [q, u]), Q = s.useMemo(() => ({
    height: H
  }), [H]), Z = A ? o.AdvancedScrollerNone : o.AdvancedScrollerThin;
  return (0, i.jsxs)(Z, {
    fade: y,
    className: a(l.scroller, C),
    ref: L,
    onScroll: K,
    children: [(0, i.jsx)("div", {
      role: R,
      className: l.listItems,
      style: X,
      children: z
    }), (0, i.jsx)("div", {
      className: l.listHeight,
      style: Q
    })]
  })
}));
var d = u