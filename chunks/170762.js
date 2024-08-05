var r = n(735250);
n(470079);
var i = n(481060),
  a = n(921944),
  s = n(689938),
  o = n(961618);
t.Z = e => {
  let {
markAsDismissed: t
  } = e;
  return (0, r.jsxs)('div', {
className: o.wrapper,
children: [
  (0, r.jsx)(i.HeartIcon, {
    size: 'md',
    color: 'currentColor',
    className: o.icon
  }),
  (0, r.jsx)('div', {
    className: o.content,
    children: (0, r.jsx)(i.Text, {
      variant: 'text-xs/normal',
      children: s.Z.Messages.EMOJI_PICKER_FAVORITES_TIP
    })
  }),
  (0, r.jsx)(i.Clickable, {
    onClick: () => t(a.L.UNKNOWN),
    children: (0, r.jsx)(i.CloseSmallIcon, {
      size: 'md',
      color: 'currentColor',
      className: o.close
    })
  })
]
  });
};