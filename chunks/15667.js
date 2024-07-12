n(47120);
var r = n(735250);
n(470079);
var i = n(392711),
  a = n(481060),
  o = n(689938),
  s = n(340418);
t.Z = e => {
  let t = (0, i.flatMap)(e.history, e => {
var t;
let {
  destination: [n],
  multiSelect: r
} = e, i = [
  null,
  null
], a = Object.values(null !== (t = null == r ? void 0 : r.state) && void 0 !== t ? t : {});
return a.length > 0 && (i[0] = a.join(', ')), '' !== n && (i[1] = n), i;
  }).filter(e => null != e);
  return 0 === t.length ? null : (0, r.jsxs)('div', {
className: s.container,
children: [
  (0, r.jsx)(a.Heading, {
    className: s.breadcrumbsHeader,
    color: 'header-secondary',
    variant: 'heading-sm/semibold',
    children: o.Z.Messages.MOBILE_REPORTS_BREADCRUMBS_TITLE
  }),
  t.map((e, t) => (0, r.jsxs)('div', {
    className: s.breadcrumbContainer,
    children: [
      (0, r.jsx)('div', {
        className: s.breadcrumbDot
      }),
      (0, r.jsx)(a.Text, {
        variant: 'text-md/normal',
        className: s.breadcrumbText,
        children: e
      })
    ]
  }, ''.concat(e, '+').concat(t)))
]
  });
};