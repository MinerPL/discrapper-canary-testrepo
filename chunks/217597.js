n.d(t, {
  Z: function() {
return r;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(481904);

function r(e) {
  let {
label: t,
sublabel: n,
value: r,
additionalContent: l,
tooltip: o
  } = e;
  return (0, s.jsxs)('div', {
className: i.metricCard,
'aria-label': t,
children: [
  (0, s.jsxs)('div', {
    className: i.metricCardLabelContainer,
    children: [
      (0, s.jsx)(a.Text, {
        className: i.metricCardLabel,
        variant: 'text-xs/medium',
        color: 'interactive-normal',
        'aria-hidden': !0,
        children: t
      }),
      null != o && (0, s.jsx)(a.Tooltip, {
        text: o,
        children: e => (0, s.jsx)(a.CircleInformationIcon, {
          size: 'xs',
          color: 'currentColor',
          className: i.__invalid_labelTooltipIcon,
          ...e
        })
      }),
      null != n ? (0, s.jsx)(a.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: n
      }) : null
    ]
  }),
  (0, s.jsx)(a.Text, {
    tag: 'span',
    variant: 'heading-xl/medium',
    color: 'header-primary',
    children: r
  }),
  l
]
  });
}