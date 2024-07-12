var i = n(735250);
n(470079);
var s = n(481060),
  a = n(689938),
  r = n(155010);
t.Z = e => {
  let {
hasHub: t
  } = e;
  return (0, i.jsxs)('div', {
className: r.container,
children: [
  (0, i.jsx)('div', {
    className: r.iconContainer,
    children: (0, i.jsx)(s.HubIcon, {
      size: 'md',
      color: s.tokens.colors.WHITE.css
    })
  }),
  (0, i.jsx)(s.Text, {
    color: 'header-primary',
    variant: 'text-lg/semibold',
    className: r.header,
    children: t ? a.Z.Messages.HUB_EMAIL_CONNECTION_ADD_HEADER : a.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_HEADER
  }),
  (0, i.jsx)(s.Text, {
    color: 'header-secondary',
    variant: 'text-sm/normal',
    className: r.__invalid_description,
    children: t ? a.Z.Messages.HUB_EMAIL_CONNECTION_ADD_DESCRIPTION : a.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_CARD_DESCRIPTION
  }),
  (0, i.jsx)('div', {
    className: r.gap
  }),
  (0, i.jsx)(s.Button, {
    size: s.Button.Sizes.LARGE,
    color: t ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
    onClick: () => (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 650233));
      return t => (0, i.jsx)(e, {
        ...t
      });
    }),
    children: (0, i.jsx)(s.Text, {
      variant: 'text-sm/semibold',
      className: r.addButton,
      color: 'none',
      children: t ? a.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_ANOTHER : a.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_MY_SCHOOOL
    })
  })
]
  });
};