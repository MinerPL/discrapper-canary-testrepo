var n = s(735250);
s(470079);
var a = s(481060),
  i = s(532395);
t.Z = e => {
  let {
label: t,
onClick: s,
submitting: r
  } = e;
  return (0, n.jsx)(a.Clickable, {
onClick: r ? void 0 : s,
className: i.button,
children: (0, n.jsxs)('div', {
  className: i.contentContainer,
  children: [
    r ? (0, n.jsx)(a.Spinner, {
      type: a.Spinner.Type.PULSING_ELLIPSIS,
      className: i.__invalid_spinner
    }) : (0, n.jsx)(a.Text, {
      variant: 'text-md/medium',
      className: i.label,
      children: t
    }),
    (0, n.jsx)(a.ChevronSmallDownIcon, {
      size: 'md',
      color: 'currentColor',
      className: i.arrow
    })
  ]
})
  });
};