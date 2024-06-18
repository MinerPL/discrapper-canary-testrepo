"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(143927),
  l = n(260866),
  u = n(461745),
  _ = n(806966),
  d = n(28546),
  c = n(149203),
  E = n(981631),
  I = n(689938),
  T = n(773390);
let h = r.forwardRef(function(e, t) {
  let {
    emojiListRef: n,
    gridNavigatorId: s,
    isFullRow: h,
    onKeyDown: S,
    onFocus: f,
    autoFocus: N,
    className: A,
    defaultSearchPlaceholder: m
  } = e, O = r.useRef(null), R = (0, d.Iu)(e => e.searchQuery), [C, p] = _.kJ.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], a.Z), g = r.useCallback(e => {
    var t;
    _.kJ.setActiveCategoryIndex("" === e ? 0 : c.c), _.kJ.setInspectedExpressionPosition(0, 0), _.kJ.setSearchPlaceholder(null), (0, d.ql)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0)
  }, [n]), L = r.useCallback(() => {
    (0, d.ql)("")
  }, []);
  return r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = O.current) || void 0 === e ? void 0 : e.focus()
    }
  })), (0, i.jsx)(u.ZP, {
    autoFocus: N,
    query: R,
    ref: O,
    size: u.ZP.Sizes.MEDIUM,
    placeholder: null != p ? p : m,
    onClear: L,
    onKeyDown: e => {
      switch (e.keyCode) {
        case E.yXg.ARROW_LEFT:
        case E.yXg.ARROW_RIGHT:
        case E.yXg.ARROW_UP:
        case E.yXg.ARROW_DOWN:
          document.activeElement !== e.target && e.preventDefault()
      }
      S(e)
    },
    onFocus: f,
    onQueryChange: g,
    className: o()(A, {
      [T.searchBarFullRow]: h
    }),
    preventEscapePropagation: !1,
    useKeyboardNavigation: !1,
    inputProps: {
      "aria-label": I.Z.Messages.SEARCH_EMOJIS,
      "aria-haspopup": "grid",
      "aria-controls": s,
      "aria-expanded": !0,
      "aria-activedescendant": (0, l.NE)(s, C.columnIndex, C.rowIndex)
    }
  })
});
t.Z = r.memo(h)