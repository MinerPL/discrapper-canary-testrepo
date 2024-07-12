var r = n(735250);
n(470079);
var s = n(780384),
  a = n(481060),
  o = n(410030),
  i = n(689938),
  l = n(411400),
  c = n(982240),
  d = n(533854);
t.Z = e => {
  let {
onRetry: t
  } = e, n = (0, o.ZP)();
  return (0, r.jsxs)('div', {
className: l.wrapper,
children: [
  (0, r.jsx)('img', {
    className: l.__invalid_loadIssueImg,
    src: (0, s.wj)(n) ? c : d,
    alt: ''
  }),
  (0, r.jsx)(a.Heading, {
    className: l.heading1,
    variant: 'heading-xl/semibold',
    children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
  }),
  (0, r.jsx)(a.Text, {
    variant: 'text-md/normal',
    children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
  }),
  (0, r.jsx)(a.Button, {
    className: l.reload,
    size: a.Button.Sizes.MEDIUM,
    color: a.Button.Colors.BRAND,
    onClick: t,
    children: i.Z.Messages.ERRORS_RELOAD
  })
]
  });
};