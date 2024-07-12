var r = n(735250),
  i = n(470079),
  a = n(481060),
  o = n(454585),
  s = n(273744),
  l = n(689938),
  u = n(631820);
t.Z = e => {
  let {
node: {
  header: t,
  subheader: n,
  button: c
}
  } = e, d = (null == c ? void 0 : c.type) === 'submit', _ = i.useRef(o.Z.reactParserFor({
...o.Z.defaultRules,
link: s.s
  }));
  return (0, r.jsxs)('div', {
className: u.headerContainer,
children: [
  null != t && '' !== t ? (0, r.jsx)(a.Heading, {
    variant: 'heading-xl/semibold',
    color: 'header-primary',
    children: t
  }) : null,
  null != n && '' !== t ? (0, r.jsx)(a.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: _.current(n)
  }) : null,
  d && (0, r.jsx)(a.Text, {
    variant: 'text-sm/normal',
    children: l.Z.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()
  })
]
  });
};