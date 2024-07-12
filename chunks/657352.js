var i = n(735250);
n(470079);
var a = n(481060),
  l = n(689938),
  s = n(67121);
t.Z = e => {
  let {
guild: t,
onClose: r
  } = e;
  return (0, i.jsxs)('div', {
className: s.container,
children: [
  (0, i.jsx)('img', {
    alt: '',
    className: s.image,
    src: n(238980)
  }),
  (0, i.jsxs)('div', {
    className: s.content,
    children: [
      (0, i.jsx)(a.Heading, {
        variant: 'heading-md/semibold',
        children: l.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_HEADER.format({
          guild: t.name
        })
      }),
      (0, i.jsx)(a.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: l.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_BODY
      }),
      (0, i.jsx)('div', {
        className: s.buttonContainer,
        children: (0, i.jsx)(a.Button, {
          onClick: r,
          children: l.Z.Messages.LURKER_MODE_POPOUT_SUCCESS_BUTTON
        })
      })
    ]
  })
]
  });
};