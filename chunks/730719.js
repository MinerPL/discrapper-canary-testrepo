var r = n(735250);
n(470079);
var i = n(481060),
  a = n(689938),
  s = n(966324);
t.Z = e => {
  let {
errorMessage: t,
onClose: n
  } = e;
  return null == t || '' === t ? null : (0, r.jsxs)('div', {
className: s.errorContainer,
children: [
  (0, r.jsx)(i.CircleWarningIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20,
    className: s.errorIcon
  }),
  (0, r.jsx)(i.Text, {
    className: s.errorText,
    variant: 'text-sm/normal',
    children: t
  }),
  (0, r.jsx)(i.Clickable, {
    onClick: () => {
      n();
    },
    'aria-label': a.Z.Messages.DISMISS,
    className: s.closeIcon
  })
]
  });
};