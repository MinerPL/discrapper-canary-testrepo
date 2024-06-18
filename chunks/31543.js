"use strict";
var i = n(735250),
  r = n(470079),
  s = n(143927),
  o = n(260866),
  a = n(461745),
  l = n(806966),
  u = n(28546),
  _ = n(453070),
  d = n(611480),
  c = n(689938),
  E = n(311240);
let I = r.forwardRef(function(e, t) {
  let {
    onKeyDown: n,
    stickersListRef: I,
    channel: T
  } = e, h = (0, _.fQ)(T), S = r.useRef(null), {
    searchQuery: f,
    isSearchSuggestion: N
  } = (0, u.Iu)(e => ({
    searchQuery: e.searchQuery,
    isSearchSuggestion: e.isSearchSuggestion
  }), s.Z), A = l.ZN.useStore(e => e.searchPlaceholder), m = l.ZN.useStore(e => e.inspectedExpressionPosition, s.Z), O = r.useCallback(e => {
    var t;
    l.ZN.setActiveCategoryIndex("" === e ? 0 : d.c), l.ZN.setInspectedExpressionPosition(0, 0), l.ZN.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = I.current) || void 0 === t || t.scrollTo(0)
  }, [I]), R = r.useCallback(() => {
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
    className: E.wrapper,
    children: (0, i.jsx)(a.ZP, {
      autoFocus: h,
      disabled: !h,
      query: f,
      ref: S,
      size: a.ZP.Sizes.MEDIUM,
      placeholder: null != A ? A : h ? c.Z.Messages.SEARCH_FOR_STICKERS : c.Z.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
      onClear: R,
      onKeyDown: n,
      onQueryChange: O,
      className: E.__invalid_searchBar,
      preventEscapePropagation: !1,
      useKeyboardNavigation: !1,
      inputProps: {
        "aria-haspopup": "grid",
        "aria-controls": d.Vr,
        "aria-expanded": !0,
        "aria-activedescendant": (0, o.NE)(d.Vr, m.columnIndex, m.rowIndex)
      }
    })
  })
});
t.Z = I