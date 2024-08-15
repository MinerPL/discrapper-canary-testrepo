n.d(e, {
  u: function() {
return i;
  }
});
var a = n(735250),
  r = n(470079),
  o = n(159277),
  s = n(481060),
  c = n(689938),
  u = n(189073),
  l = n(290661);
let i = t => {
  let {
onComplete: e,
data: n
  } = t, i = null, d = (0, r.useId)();
  return (n.clientId === o.t.PLAYSTATION_APPLICATION_ID || n.clientId === o.t.PLAYSTATION_STAGING_APPLICATION_ID) && (i = (0, a.jsx)('img', {
src: l,
width: '241',
height: '118',
alt: '',
'aria-labelledby': d
  })), (0, a.jsxs)('div', {
className: u.bodyContent,
children: [
  i,
  (0, a.jsx)(s.Heading, {
    className: u.title,
    variant: 'heading-xl/extrabold',
    id: d,
    children: c.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE
  }),
  null != n.twoWayLinkCode ? (0, a.jsx)(s.Text, {
    tag: 'p',
    variant: 'text-md/normal',
    color: 'header-secondary',
    children: c.Z.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY
  }) : null,
  (0, a.jsx)(s.Button, {
    className: u.footerButton,
    color: s.Button.Colors.BRAND,
    onClick: e,
    children: c.Z.Messages.DONE
  })
]
  });
};