"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(143927),
  o = n(260866),
  a = n(461745),
  l = n(806966),
  u = n(28546),
  _ = n(494064);
let d = r.forwardRef(function(e, t) {
  let {
    store: n,
    hasSendableExpressions: d,
    onKeyDown: c,
    gridNavigatorId: E,
    expressionsListRef: I,
    defaultSearchPlaceholder: T,
    emptySearchPlaceholder: h
  } = e, S = r.useRef(null), [f, N] = (0, u.Iu)(e => [e.searchQuery, e.isSearchSuggestion], s.Z), A = n.useStore(e => e.searchPlaceholder), m = n.useStore(e => e.inspectedExpressionPosition, s.Z), O = r.useCallback(e => {
    var t;
    n.setActiveCategoryIndex("" === e ? 0 : l.c), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = I.current) || void 0 === t || t.scrollTo(0)
  }, [I, n]), R = r.useCallback(() => {
    (0, u.ql)("")
  }, []);
  return r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
    }
  })), r.useLayoutEffect(() => {
    if (N) {
      var e;
      null === (e = S.current) || void 0 === e || e.focus()
    }
  }, [N]), (0, i.jsx)("div", {
    className: _.wrapper,
    children: (0, i.jsx)(a.ZP, {
      autoFocus: d,
      disabled: !d,
      query: f,
      ref: S,
      size: a.ZP.Sizes.MEDIUM,
      placeholder: null != A ? A : d || null == h ? T : h,
      onClear: R,
      onKeyDown: c,
      onQueryChange: O,
      className: _.__invalid_searchBar,
      preventEscapePropagation: !1,
      useKeyboardNavigation: !1,
      inputProps: {
        "aria-haspopup": "grid",
        "aria-controls": E,
        "aria-expanded": !0,
        "aria-activedescendant": (0, o.NE)(E, m.columnIndex, m.rowIndex)
      }
    })
  })
});
t.Z = d