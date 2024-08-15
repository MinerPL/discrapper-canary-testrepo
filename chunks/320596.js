n(47120);
var r = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(454585),
  o = n(273744),
  l = n(689938),
  u = n(386528),
  c = n(224499);
let d = e => {
  let {
data: {
  title: t,
  subtitle: n,
  placeholder: d,
  rows: _,
  character_limit: E,
  pattern: f
},
onChange: h,
initialText: p,
isRequired: m
  } = e, I = i.useRef(s.Z.reactParserFor({
...s.Z.defaultRules,
link: o.s
  })), [T, g] = i.useState(''), [S, A] = i.useState('');
  i.useEffect(() => {
var e;
g(null !== (e = null == p ? void 0 : p.value) && void 0 !== e ? e : '');
  }, [p]);
  let N = i.useCallback(e => {
let t = null != f ? new RegExp(f) : null;
null != t && null == t.exec(e) ? (A(l.Z.Messages.IN_APP_REPORTING_FREE_TEXT_INPUT_ERROR), h({
  value: e,
  isValid: !1
})) : null != e && (A(''), g(e), h({
  value: e,
  isValid: !0
}));
  }, [
h,
f
  ]);
  return (0, r.jsxs)('div', {
className: c.marginBottom8,
children: [
  null != t && (0, r.jsx)('div', {
    className: c.marginBottom8,
    children: (0, r.jsxs)(a.Text, {
      variant: 'text-sm/bold',
      children: [
        t,
        m && (0, r.jsx)('span', {
          className: u.required,
          children: '*'
        })
      ]
    })
  }),
  (0, r.jsx)(a.TextArea, {
    maxLength: E,
    onChange: N,
    value: T,
    error: S,
    rows: _,
    placeholder: d,
    autoFocus: !0
  }),
  null != n && (0, r.jsx)('div', {
    children: (0, r.jsx)(a.Text, {
      variant: 'text-sm/normal',
      children: I.current(n)
    })
  })
]
  });
};
t.Z = e => {
  let {
elements: t,
onChange: n,
state: i
  } = e, a = t.map(e => {
var t;
let a = e.name;
return (0, r.jsx)(d, {
  data: e.data,
  onChange: e => n(a, e.value, e.isValid),
  initialText: null !== (t = null == i ? void 0 : i[a]) && void 0 !== t ? t : void 0,
  isRequired: e.should_submit_data
}, a);
  });
  return (0, r.jsx)('div', {
children: a
  });
};