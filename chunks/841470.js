var s = n(735250);
n(470079);
var a = n(692547),
  i = n(481060),
  r = n(355011),
  l = n(689938),
  o = n(583669);
t.Z = e => {
  let {
title: t,
subtext: n = l.Z.Messages.NOT_AVAILABLE,
localizedNumber: c,
isTrendingUp: d,
isTrendingDown: u,
tooltipText: _
  } = e, I = 'string' == typeof _ ? _ : t, E = null != _ ? (0, s.jsx)(i.Tooltip, {
text: _,
position: 'top',
'aria-label': I,
children: e => (0, s.jsx)(i.CircleInformationIcon, {
  size: 'xs',
  color: 'currentColor',
  ...e,
  className: o.infoIcon
})
  }) : null;
  return (0, s.jsxs)('div', {
className: o.analyticsCard,
children: [
  (0, s.jsxs)(i.FormTitle, {
    className: o.analyticsCardTitle,
    children: [
      t,
      E
    ]
  }),
  (0, s.jsx)('div', {
    className: o.analyticsCardContent,
    children: (0, s.jsx)(i.Heading, {
      className: null != c ? o.analyticsCardNumber : o.analyticsCardNumberNotAvailable,
      variant: 'heading-xl/semibold',
      children: null != c ? c : l.Z.Messages.NOT_AVAILABLE
    })
  }),
  (0, s.jsxs)('div', {
    className: o.analyticsCardArrowSubText,
    children: [
      d ? (0, s.jsx)(r.Z, {
        className: o.trendingArrow,
        color: a.Z.unsafe_rawColors.GREEN_360.css,
        'aria-label': l.Z.Messages.TRENDING_ARROW_UP,
        width: 14,
        height: 12
      }) : null,
      u ? (0, s.jsx)(r.Z, {
        className: o.trendingArrowIconDown,
        color: a.Z.unsafe_rawColors.RED_400.css,
        'aria-label': l.Z.Messages.TRENDING_ARROW_DOWN,
        width: 14,
        height: 12
      }) : null,
      (0, s.jsx)(i.Text, {
        variant: 'text-xs/normal',
        children: n
      })
    ]
  })
]
  });
};