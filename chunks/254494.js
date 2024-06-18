"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(695464),
  l = n(28546),
  u = n(981631),
  _ = n(425565);
let d = e => {
  let {
    activeIndex: t,
    categoryListRef: n,
    getScrollOffsetForIndex: i
  } = e, s = r.useRef(u.xAR), o = r.useRef(t);
  return r.useEffect(() => {
    null != t && t !== o.current && (s.current !== u.xAR && window.cancelAnimationFrame(s.current), s.current = window.requestAnimationFrame(() => {
      var e;
      if (null == n.current) return;
      let r = t > (null !== (e = o.current) && void 0 !== e ? e : -1),
        a = null != i ? i(t, r) : 0;
      n.current.scrollRowIntoView(t, {
        animate: !0,
        offset: a
      }), s.current = u.xAR, o.current = t
    }))
  }, [t, n, i]), {
    categoryListRef: n
  }
};
t.Z = function(e) {
  let {
    categoryListRef: t,
    expressionsListRef: n,
    categories: s,
    store: u,
    children: c,
    className: E,
    listPadding: I,
    rowCount: T,
    getScrollOffsetForIndex: h,
    categoryHeight: S,
    onScroll: f,
    renderCategoryListItem: N,
    rowCountBySection: A,
    renderSection: m
  } = e, O = u.useStore(e => e.activeCategoryIndex);
  d({
    activeIndex: O,
    categoryListRef: t,
    getScrollOffsetForIndex: h
  });
  let R = r.useCallback(e => {
      let {
        searchQuery: t
      } = l.Iu.getState();
      if (u.setActiveCategoryIndex(e), "" !== t)(0, l.ql)("");
      else {
        var i;
        null === (i = n.current) || void 0 === i || i.scrollToSectionTop(e)
      }
    }, [n, u]),
    C = r.useCallback(e => N(s[e], e, () => R(e), O === e), [O, s, R, N]),
    p = r.useMemo(() => "function" == typeof S ? e => S(s[e], e) : S, [s, S]);
  return (0, i.jsxs)("div", {
    className: o()(_.wrapper, E),
    children: [(0, i.jsx)(a.Z, {
      listPadding: I,
      onScroll: f,
      ref: t,
      renderRow: C,
      rowCount: T,
      rowHeight: p,
      hideScrollbar: !0,
      rowCountBySection: A,
      renderSection: m
    }), null == c ? void 0 : c(R)]
  })
}