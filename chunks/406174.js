t.d(s, {
  Z: function() {
return T;
  }
});
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(78839),
  d = t(981631),
  _ = t(689938),
  E = t(135060),
  u = t(653869),
  I = t(834300);

function T(e) {
  let {
onClickManageSubscription: s
  } = e, t = (0, o.e7)([c.ZP], () => c.ZP.getSubscriptions()), i = a.useMemo(() => Object.values(null != t ? t : {}).filter(e => e.type === d.NYc.GUILD).filter(e => e.status !== d.O0b.ENDED), [t]);
  return 0 === i.length ? null : (0, n.jsxs)('div', {
className: E.container,
children: [
  (0, n.jsx)(l.Heading, {
    variant: 'heading-md/semibold',
    className: E.__invalid_sectionTitle,
    children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
  }),
  (0, n.jsx)(l.Spacer, {
    size: 4
  }),
  (0, n.jsx)(l.Text, {
    variant: 'text-sm/normal',
    className: E.sectionDescription,
    children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_USER_SUBSCRIPTIONS_DESCRIPTION
  }),
  (0, n.jsx)(l.Spacer, {
    size: 24
  }),
  (0, n.jsxs)('div', {
    className: r()(u.guildBoostingSubscriptionRow, E.card),
    children: [
      (0, n.jsx)('img', {
        src: I,
        alt: '',
        className: E.handImage
      }),
      (0, n.jsxs)('div', {
        className: E.textContainer,
        children: [
          (0, n.jsx)(l.Heading, {
            variant: 'heading-xl/semibold',
            className: E.header,
            children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
          }),
          (0, n.jsx)(l.Text, {
            variant: 'text-md/normal',
            className: E.description,
            children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
              numSubscriptions: i.length
            })
          })
        ]
      }),
      (0, n.jsx)(l.Button, {
        color: l.Button.Colors.CUSTOM,
        size: l.Button.Sizes.SMALL,
        className: E.manageSubscriptionsButton,
        onClick: s,
        children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_BUTTON
      })
    ]
  })
]
  });
}