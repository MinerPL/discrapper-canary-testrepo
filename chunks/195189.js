n.d(t, {
  Z: function() {
return c;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(449226),
  r = n(231338),
  l = n(689938),
  o = n(70529);

function c(e) {
  let {
title: t,
details: n
  } = e;
  return (0, s.jsxs)('div', {
className: o.simpleItemWrapper,
children: [
  (0, s.jsxs)('div', {
    className: o.itemContent,
    children: [
      (0, s.jsx)(a.Heading, {
        variant: 'text-md/semibold',
        color: 'header-primary',
        children: t
      }),
      'string' == typeof n ? (0, s.jsx)(a.Text, {
        variant: 'text-sm/medium',
        color: 'header-secondary',
        children: n
      }) : n
    ]
  }),
  (0, s.jsx)(a.Tooltip, {
    tooltipContentClassName: o.tooltip,
    text: l.Z.Messages.GUILD_SETTINGS_SAFETY_ON_BY_DEFAULT,
    children: e => (0, s.jsx)(i.Z, {
      checked: !0,
      disabled: !0,
      onChange: r.dG,
      className: o.bringToFront,
      tooltipProps: e
    })
  })
]
  });
}