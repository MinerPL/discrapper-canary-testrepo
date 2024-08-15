n.d(t, {
  M: function() {
return l;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(921349),
  s = n(563040),
  o = n(425384);

function l(e) {
  let {
value: t,
onChange: n,
hideValue: l,
disabled: u = !1
  } = e, c = i.useRef(null), d = i.useMemo(() => new s.tR(), []), [_, E] = i.useState('');

  function f(e) {
null != t && n((0, s.rK)(t, d.selectValue(e)));
  }
  return (0, r.jsx)(a.V, {
ref: c,
className: o.select,
options: d.getOptions(_),
value: l ? void 0 : d.lookupByValue(t),
onChange: f,
isDisabled: u,
onSearchChange: E,
onKeyDown: function(e) {
  if ('Enter' === e.key) {
    let e = (0, s.tj)(t, _);
    if (null != e) {
      var n;
      f(e), null === (n = c.current) || void 0 === n || n.close();
    }
  }
}
  });
}