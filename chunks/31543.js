var r = n(735250),
  i = n(470079),
  a = n(143927),
  o = n(260866),
  s = n(461745),
  l = n(806966),
  u = n(28546),
  c = n(453070),
  d = n(611480),
  _ = n(689938),
  E = n(57276);
let f = i.forwardRef(function(e, t) {
  let {
onKeyDown: n,
stickersListRef: f,
channel: h
  } = e, p = (0, c.fQ)(h), m = i.useRef(null), {
searchQuery: I,
isSearchSuggestion: T
  } = (0, u.Iu)(e => ({
searchQuery: e.searchQuery,
isSearchSuggestion: e.isSearchSuggestion
  }), a.Z), g = l.ZN.useStore(e => e.searchPlaceholder), S = l.ZN.useStore(e => e.inspectedExpressionPosition, a.Z), A = i.useCallback(e => {
var t;
l.ZN.setActiveCategoryIndex('' === e ? 0 : d.c), l.ZN.setInspectedExpressionPosition(0, 0), l.ZN.setSearchPlaceholder(null), (0, u.ql)(e), null === (t = f.current) || void 0 === t || t.scrollTo(0);
  }, [f]), N = i.useCallback(() => {
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
className: E.wrapper,
children: (0, r.jsx)(s.ZP, {
  autoFocus: p,
  disabled: !p,
  query: I,
  ref: m,
  size: s.ZP.Sizes.MEDIUM,
  placeholder: null != g ? g : p ? _.Z.Messages.SEARCH_FOR_STICKERS : _.Z.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
  onClear: N,
  onKeyDown: n,
  onQueryChange: A,
  className: E.__invalid_searchBar,
  preventEscapePropagation: !1,
  useKeyboardNavigation: !1,
  inputProps: {
    'aria-haspopup': 'grid',
    'aria-controls': d.Vr,
    'aria-expanded': !0,
    'aria-activedescendant': (0, o.NE)(d.Vr, S.columnIndex, S.rowIndex)
  }
})
  });
});
t.Z = f;