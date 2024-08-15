var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(661824),
  o = n(58755);
let c = a.forwardRef(function(e, t) {
  let {
className: n,
isBeforeGroup: a = !1,
...s
  } = e, {
children: c
  } = s;
  return (0, i.jsx)(r.Z, {
...s,
ref: t,
role: 'separator',
'aria-label': 'string' == typeof c ? c : void 0,
className: l()(n, {
  [o.divider]: !0,
  [o.hasContent]: null != c,
  [o.beforeGroup]: a
})
  });
});
t.Z = a.memo(c);