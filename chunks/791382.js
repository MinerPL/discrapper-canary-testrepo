n.d(t, {
  H: function() {
return u;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(481060),
  l = n(264451),
  o = n(75775),
  c = n(689938),
  d = n(156963);
let u = e => {
  let {
value: t,
isPercent: n
  } = e;
  if (null == t)
return null;
  let {
formattedValue: a,
isPositive: u
  } = (0, l.m5)(t, n);
  return (0, s.jsxs)('div', {
className: d.trendContainer,
children: [
  (0, s.jsx)(o.Z, {
    className: i()(d.chartLineIcon, {
      [d.chartLineIconNegative]: !u
    })
  }),
  (0, s.jsx)(r.Text, {
    variant: 'text-md/normal',
    className: d.trendDescription,
    children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_TREND_DESCRIPTION.format({
      value: a
    })
  })
]
  });
};
t.Z = e => {
  let {
label: t,
sublabel: n,
value: a,
additionalContent: i,
tooltip: l
  } = e;
  return (0, s.jsxs)('div', {
className: d.container,
children: [
  (0, s.jsxs)('div', {
    children: [
      (0, s.jsxs)('div', {
        className: d.labelContainer,
        children: [
          (0, s.jsx)(r.Text, {
            variant: 'text-xs/medium',
            className: d.label,
            children: t
          }),
          null != l && (0, s.jsx)(r.Tooltip, {
            text: l,
            children: e => (0, s.jsx)(r.CircleInformationIcon, {
              size: 'xs',
              color: 'currentColor',
              className: d.labelTooltipIcon,
              ...e
            })
          }),
          null != n ? (0, s.jsx)(r.Text, {
            variant: 'text-xs/normal',
            className: d.sublabel,
            children: n
          }) : null
        ]
      }),
      (0, s.jsx)(r.Text, {
        className: d.value,
        variant: 'text-sm/normal',
        children: a
      })
    ]
  }),
  i
]
  });
};