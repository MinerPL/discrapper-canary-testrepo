var r = n(735250);
n(470079);
var i = n(481060),
  a = n(99690),
  s = n(689938),
  o = n(574027);
t.Z = e => {
  let {
user: t
  } = e;
  return (0, r.jsxs)('div', {
className: o.container,
children: [
  (0, r.jsx)(i.Heading, {
    className: o.header,
    variant: 'heading-sm/semibold',
    children: s.Z.Messages.REPORTS_USER_PREVIEW_TITLE
  }),
  (0, r.jsx)('div', {
    className: o.userContainer,
    children: (0, r.jsxs)('div', {
      className: o.userInfo,
      children: [
        (0, r.jsx)(a.Z, {
          className: o.userIcon,
          user: t,
          size: i.AvatarSizes.SIZE_40
        }),
        (0, r.jsxs)('div', {
          children: [
            null != t.globalName && (0, r.jsx)(i.Text, {
              variant: 'text-md/semibold',
              color: 'header-primary',
              children: t.globalName
            }),
            (0, r.jsx)(i.Text, {
              color: 'header-secondary',
              variant: 'text-sm/normal',
              children: t.username
            })
          ]
        })
      ]
    })
  })
]
  });
};