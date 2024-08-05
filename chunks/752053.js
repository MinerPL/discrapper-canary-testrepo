var s = n(735250);
n(470079);
var r = n(780384),
  a = n(481060),
  o = n(410030),
  i = n(689938),
  c = n(411400),
  l = n(982240),
  d = n(533854);
t.Z = e => {
  let {
onRetry: t
  } = e, n = (0, o.ZP)();
  return (0, s.jsxs)('div', {
className: c.wrapper,
children: [
  (0, s.jsx)('img', {
    className: c.__invalid_loadIssueImg,
    src: (0, r.wj)(n) ? l : d,
    alt: ''
  }),
  (0, s.jsx)(a.Heading, {
    className: c.heading1,
    variant: 'heading-xl/semibold',
    children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
  }),
  (0, s.jsx)(a.Text, {
    variant: 'text-md/normal',
    children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
  }),
  (0, s.jsx)(a.Button, {
    className: c.reload,
    size: a.Button.Sizes.MEDIUM,
    color: a.Button.Colors.BRAND,
    onClick: t,
    children: i.Z.Messages.ERRORS_RELOAD
  })
]
  });
};