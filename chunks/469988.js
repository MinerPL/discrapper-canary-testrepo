var i = n(735250);
n(470079);
var a = n(481060),
  s = n(689938),
  r = n(590656);
t.Z = e => {
  let {
hasHub: t
  } = e;
  return (0, i.jsxs)('div', {
className: r.container,
children: [
  (0, i.jsx)('div', {
    className: r.iconContainer,
    children: (0, i.jsx)(a.HubIcon, {
      size: 'md',
      color: a.tokens.colors.WHITE.css
    })
  }),
  (0, i.jsx)(a.Text, {
    color: 'header-primary',
    variant: 'text-lg/semibold',
    className: r.header,
    children: t ? s.Z.Messages.HUB_EMAIL_CONNECTION_ADD_HEADER : s.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_HEADER
  }),
  (0, i.jsx)(a.Text, {
    color: 'header-secondary',
    variant: 'text-sm/normal',
    className: r.__invalid_description,
    children: t ? s.Z.Messages.HUB_EMAIL_CONNECTION_ADD_DESCRIPTION : s.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_CARD_DESCRIPTION
  }),
  (0, i.jsx)('div', {
    className: r.gap
  }),
  (0, i.jsx)(a.Button, {
    size: a.Button.Sizes.LARGE,
    color: t ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
    onClick: () => (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 650233));
      return t => (0, i.jsx)(e, {
        ...t
      });
    }),
    children: (0, i.jsx)(a.Text, {
      variant: 'text-sm/semibold',
      className: r.addButton,
      color: 'none',
      children: t ? s.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_ANOTHER : s.Z.Messages.HUB_EMAIL_CONNECTION_JOIN_MY_SCHOOOL
    })
  })
]
  });
};