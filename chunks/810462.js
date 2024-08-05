n(47120);
var r = n(735250),
  i = n(470079),
  a = n(143927),
  s = n(260866),
  o = n(461745),
  l = n(806966),
  u = n(28546),
  c = n(249799);
let d = i.forwardRef(function(e, t) {
  let {
store: n,
hasSendableExpressions: d,
onKeyDown: _,
gridNavigatorId: E,
expressionsListRef: f,
defaultSearchPlaceholder: h,
emptySearchPlaceholder: p
  } = e, m = i.useRef(null), [I, T] = (0, u.Iu)(e => [
e.searchQuery,
e.isSearchSuggestion
  ], a.Z), g = n.useStore(e => e.searchPlaceholder), S = n.useStore(e => e.inspectedExpressionPosition, a.Z), A = i.useCallback(e => {
var t;
n.setActiveCategoryIndex('' === e ? 0 : l.c), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = f.current) || void 0 === t || t.scrollTo(0);
  }, [
f,
n
  ]), N = i.useCallback(() => {
(0, u.ql)('');
  }, []);
  return i.useImperativeHandle(t, () => ({
focus: () => {
  var e;
  return null === (e = m.current) || void 0 === e ? void 0 : e.focus();
}
  })), i.useLayoutEffect(() => {
if (T) {
  var e;
  null === (e = m.current) || void 0 === e || e.focus();
}
  }, [T]), (0, r.jsx)('div', {
className: c.wrapper,
children: (0, r.jsx)(o.ZP, {
  autoFocus: d,
  disabled: !d,
  query: I,
  ref: m,
  size: o.ZP.Sizes.MEDIUM,
  placeholder: null != g ? g : d || null == p ? h : p,
  onClear: N,
  onKeyDown: _,
  onQueryChange: A,
  className: c.__invalid_searchBar,
  preventEscapePropagation: !1,
  useKeyboardNavigation: !1,
  inputProps: {
    'aria-haspopup': 'grid',
    'aria-controls': E,
    'aria-expanded': !0,
    'aria-activedescendant': (0, s.NE)(E, S.columnIndex, S.rowIndex)
  }
})
  });
});
t.Z = d;