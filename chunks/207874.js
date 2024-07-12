n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250),
  s = n(470079),
  l = n(461745),
  r = n(5967),
  o = n(128277),
  a = n(689938);

function c(e) {
  let {
style: t
  } = e, n = (0, o.Z7)(), c = s.useCallback((e, t) => {
t.stopPropagation(), t.preventDefault(), (0, o.QH)(e);
  }, []), u = s.useCallback(() => {
(0, o.QH)(!1), (0, o.yN)('');
  }, []), d = s.useRef(null);
  return s.useEffect(() => {
let e = e => {
  var t;
  let n = d.current,
    i = null === (t = (0, r.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
  !(i !== d.current && (0, r.VG)(i)) && (null == n || n.focus());
};
return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
  }, []), (0, i.jsx)('div', {
style: {
  marginBottom: '8px'
},
children: (0, i.jsx)(l.ZP, {
  ref: d,
  size: l.ZP.Sizes.MEDIUM,
  query: n,
  onClear: u,
  onQueryChange: o.yN,
  placeholder: a.Z.Messages.SEARCH,
  className: t,
  inputProps: {
    'aria-label': a.Z.Messages.USER_SETTINGS_SEARCH_BAR,
    'aria-expanded': !0,
    onFocus: e => c(!0, e),
    onBlur: e => c(!1, e)
  }
})
  });
}