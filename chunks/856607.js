t.d(s, {
  Z: function() {
return _;
  }
});
var n = t(735250);
t(470079);
var a = t(481060),
  i = t(37234),
  r = t(703656),
  o = t(981631),
  l = t(689938),
  c = t(751507),
  d = t(322221);

function _() {
  return (0, n.jsxs)('div', {
className: c.emptyState,
children: [
  (0, n.jsx)('img', {
    src: d,
    alt: '',
    className: c.image
  }),
  (0, n.jsx)(a.Heading, {
    className: c.topSpacing,
    variant: 'heading-lg/extrabold',
    children: l.Z.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_TITLE
  }),
  (0, n.jsx)(a.Text, {
    className: c.topSpacing,
    variant: 'text-md/normal',
    children: l.Z.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_DESCRIPTION
  }),
  (0, n.jsx)(a.Button, {
    className: c.topSpacing,
    onClick: () => {
      (0, r.uL)(o.Z5c.GUILD_DISCOVERY), i.xf();
    },
    children: l.Z.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_CTA
  })
]
  });
}