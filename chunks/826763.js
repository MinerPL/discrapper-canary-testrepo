n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(434404),
  s = n(962086),
  r = n(303737),
  o = n(981631),
  c = n(689938),
  d = n(592115),
  u = n(497224);

function h(e) {
  let {
guildId: t
  } = e;
  return (0, i.jsx)('div', {
className: d.upsellPage,
children: (0, i.jsxs)('div', {
  className: d.upsellContainer,
  children: [
    (0, i.jsx)('img', {
      src: u,
      alt: ''
    }),
    (0, i.jsxs)('div', {
      className: d.upsellContent,
      children: [
        (0, i.jsx)(a.Heading, {
          variant: 'heading-xl/semibold',
          children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_HEADER
        }),
        (0, i.jsx)(a.Text, {
          variant: 'text-sm/normal',
          className: d.bodyText,
          children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_BODY
        }),
        (0, i.jsx)(a.Button, {
          size: a.Button.Sizes.MEDIUM,
          onClick: () => {
            (0, s.mL)(t), l.Z.open(t, o.pNK.ROLE_SUBSCRIPTIONS, void 0, o.KsC.ROLE_SUBSCRIPTION_TIERS), (0, r.GN)(t);
          },
          className: d.__invalid_button,
          children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL_UPSELL_BUTTON
        })
      ]
    })
  ]
})
  });
}