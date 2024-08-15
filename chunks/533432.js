n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(143927),
  l = n(260866),
  u = n(461745),
  c = n(806966),
  d = n(28546),
  _ = n(149203),
  E = n(981631),
  f = n(689938),
  h = n(23022);
let p = i.forwardRef(function(e, t) {
  let {
emojiListRef: n,
gridNavigatorId: a,
isFullRow: p,
onKeyDown: m,
onFocus: I,
autoFocus: T,
className: g,
defaultSearchPlaceholder: S
  } = e, A = i.useRef(null), N = (0, d.Iu)(e => e.searchQuery), [v, O] = c.kJ.useStore(e => [
e.inspectedExpressionPosition,
e.searchPlaceholder
  ], o.Z), R = i.useCallback(e => {
var t;
c.kJ.setActiveCategoryIndex('' === e ? 0 : _.c), c.kJ.setInspectedExpressionPosition(0, 0), c.kJ.setSearchPlaceholder(null), (0, d.ql)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0);
  }, [n]), C = i.useCallback(() => {
(0, d.ql)('');
  }, []);
  return i.useImperativeHandle(t, () => ({
focus: () => {
  var e;
  return null === (e = A.current) || void 0 === e ? void 0 : e.focus();
}
  })), (0, r.jsx)(u.ZP, {
autoFocus: T,
query: N,
ref: A,
size: u.ZP.Sizes.MEDIUM,
placeholder: null != O ? O : S,
onClear: C,
onKeyDown: e => {
  switch (e.keyCode) {
    case E.yXg.ARROW_LEFT:
    case E.yXg.ARROW_RIGHT:
    case E.yXg.ARROW_UP:
    case E.yXg.ARROW_DOWN:
      document.activeElement !== e.target && e.preventDefault();
  }
  m(e);
},
onFocus: I,
onQueryChange: R,
className: s()(g, {
  [h.searchBarFullRow]: p
}),
preventEscapePropagation: !1,
useKeyboardNavigation: !1,
inputProps: {
  'aria-label': f.Z.Messages.SEARCH_EMOJIS,
  'aria-haspopup': 'grid',
  'aria-controls': a,
  'aria-expanded': !0,
  'aria-activedescendant': (0, l.NE)(a, v.columnIndex, v.rowIndex)
}
  });
});
t.Z = i.memo(p);