n.d(t, {
  v: function() {
return _;
  }
}), n(653041), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(952639),
  l = n.n(o),
  u = n(84735),
  c = n(562701),
  d = n(859726);

function _(e, t, n, a) {
  let o = (0, c.G6)(e),
_ = new Map(),
E = new a(e => {
  e.forEach(e => {
    var t;
    let {
      target: n
    } = e;
    null === (t = _.get(n)) || void 0 === t || t(e);
  });
});
  return i.forwardRef(function(a, f) {
let {
  className: h,
  onScroll: p,
  onResize: m = null,
  onContentResize: I = null,
  dir: T = 'ltr',
  sections: g,
  sectionHeight: S,
  rowHeight: A,
  footerHeight: N = 0,
  sidebarHeight: v,
  listHeaderHeight: O = 0,
  renderSection: R,
  renderRow: C,
  renderFooter: y,
  renderSidebar: D,
  renderListHeader: L,
  stickyListHeader: b,
  wrapSection: M,
  getAnchorId: P,
  paddingTop: U,
  paddingBottom: w,
  fade: x = !1,
  customTheme: G = !1,
  chunkSize: k,
  style: B,
  innerId: F,
  innerRole: V,
  innerAriaLabel: H,
  innerAriaMultiselectable: Z,
  innerAriaOrientation: Y,
  innerClassName: j,
  innerTag: W = 'div',
  ...K
} = a, z = i.useRef(null), q = i.useRef(null), [Q, X] = i.useState(!1), {
  scrollerRef: $,
  scrollerState: J,
  getScrollerState: ee
} = (0, c.T4)();
(0, c.tT)({
  scrollerRef: $,
  className: h,
  specs: o,
  orientation: 'vertical',
  dir: T
});
let {
  spacerTop: et,
  totalHeight: en,
  items: er,
  isSidebarVisible: ei,
  listComputer: ea,
  forceUpdateOnChunkChange: es,
  anchor: eo
} = (0, c.aU)({
  sections: g,
  sectionHeight: S,
  rowHeight: A,
  footerHeight: N,
  sidebarHeight: v,
  listHeaderHeight: O,
  paddingTop: U,
  paddingBottom: w,
  chunkSize: k,
  getScrollerState: ee,
  getAnchorId: P
}), el = (0, c.t2)($), eu = i.useRef(m), ec = i.useRef(I);
i.useLayoutEffect(() => {
  eu.current = m, ec.current = I;
});
let ed = i.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
    if (e > J.current.dirty && (J.current.dirty = e), 2 === e) {
      var t;
      null === (t = eu.current) || void 0 === t || t.call(eu);
    }
    es(e);
  }, [
    es,
    J
  ]),
  e_ = i.useCallback(() => ed(), [ed]);
(0, c.zn)({
  ref: $,
  onUpdate: e_,
  key: 'container',
  resizeObserver: E,
  listenerMap: _
}), (0, c.zn)({
  ref: q,
  onUpdate: () => {
    var e;
    return null === (e = ec.current) || void 0 === e ? void 0 : e.call(ec);
  },
  key: 'content',
  resizeObserver: E,
  listenerMap: _
});
let eE = function(e) {
    let t = i.useRef(e);
    return i.useEffect(() => void(t.current = e), [e]), i.useCallback(() => t.current, []);
  }(er),
  ef = function(e) {
    let t = i.useRef(e);
    return i.useEffect(() => void(t.current = e), [e]), i.useCallback(e => {
      let {
        current: n
      } = t, r = 0;
      for (let t = 0; t < n.length; t++) {
        let i = n[t];
        if (r <= e && r + i >= e)
          return [
            t,
            e - r
          ];
        r += i;
      }
      return [
        0,
        0
      ];
    }, []);
  }(g);
i.useImperativeHandle(f, () => ({
  getScrollerNode: () => $.current,
  getScrollerState: ee,
  getItems: eE,
  getSectionRowFromIndex: ef,
  ...(0, c.rH)($, ee, ea, el)
}), [
  $,
  ee,
  ef,
  eE,
  ea,
  el
]);
let eh = i.useCallback(e => {
  ed(1), null == z.current ? X(!0) : clearTimeout(z.current), z.current = setTimeout(() => {
    z.current = null, X(!1);
  }, 200), null != p && p(e);
}, [
  p,
  ed
]);
return i.useLayoutEffect(() => {
  2 !== J.current.dirty && (J.current.dirty = 2);
}, [
  er,
  R,
  C,
  y,
  M,
  en,
  et,
  J
]), (0, c.rS)({
  scrollerRef: $,
  anchor: eo,
  getScrollerState: ee,
  listComputer: ea,
  getAnchorId: P,
  totalHeight: en
}), (0, r.jsxs)('div', {
  ref: $,
  onScroll: eh,
  className: s()(h, {
    [e]: !0,
    [t]: x,
    [n]: G,
    [d.scrolling]: Q
  }),
  style: (0, c.uT)(B),
  ...K,
  children: [
    i.useMemo(() => (0, r.jsx)(W, {
      id: F,
      role: V,
      'aria-label': H,
      'aria-multiselectable': Z,
      'aria-orientation': Y,
      style: {
        height: en
      },
      className: s()(d.content, j),
      ref: q,
      children: (0, r.jsx)(u.J, {
        containerRef: q,
        children: function(e) {
          let {
            renderSection: t,
            renderRow: n,
            renderFooter: a,
            renderListHeader: s,
            stickyListHeader: o,
            wrapSection: u,
            items: c,
            spacerTop: d
          } = e, _ = [(0, r.jsx)('div', {
            'aria-hidden': !0,
            style: {
              height: d
            }
          }, '---list-spacer-top')], E = [], f = 0;
          if (!0 === o && null != s && _.push((0, r.jsx)(i.Fragment, {
              children: s()
            }, '---sticky-header')), c.forEach(e => {
              var r;
              switch (e.section !== f && E.length > 0 && (_.push(null != u ? u(f, E) : E), E = []), f = null !== (r = e.section) && void 0 !== r ? r : 0, e.type) {
                case 'section':
                  null != t && E.push(t(e));
                  break;
                case 'row':
                  E.push(n(e));
                  break;
                case 'footer':
                  null != a && E.push(a(e));
                  break;
                case 'header':
                  null != s && !0 !== o && E.push(s());
              }
            }), E.length > 0) {
            var h;
            _.push(null !== (h = null == u ? void 0 : u(f, E)) && void 0 !== h ? h : E);
          }
          return l()(_);
        }({
          items: er,
          renderListHeader: L,
          stickyListHeader: b,
          renderSection: R,
          renderRow: C,
          renderFooter: y,
          wrapSection: M,
          spacerTop: et
        })
      })
    }), [
      W,
      F,
      V,
      H,
      Z,
      Y,
      en,
      j,
      er,
      L,
      b,
      R,
      C,
      y,
      M,
      et
    ]),
    i.useMemo(() => function(e) {
      let {
        renderSidebar: t,
        sidebarHeight: n,
        isSidebarVisible: r,
        isListVisible: i
      } = e;
      return null == n || null == t ? null : t(i, r);
    }({
      isSidebarVisible: ei,
      renderSidebar: D,
      sidebarHeight: v,
      isListVisible: 0 !== er.length
    }), [
      ei,
      D,
      v,
      er.length
    ])
  ]
});
  });
}