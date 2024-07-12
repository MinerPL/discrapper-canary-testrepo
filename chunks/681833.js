s.d(t, {
  Z: function() {
return S;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(987997),
  d = s(78839),
  _ = s(981631),
  E = s(689938),
  u = s(496065),
  T = s(727880),
  I = s(845904);

function S(e) {
  let {
onClickManageSubscription: t
  } = e, s = (0, o.e7)([d.ZP], () => d.ZP.getSubscriptions()), i = a.useMemo(() => Object.values(null != s ? s : {}).filter(e => e.type === _.NYc.APPLICATION && e.status !== _.O0b.ENDED), [s]);
  return 0 === i.length ? null : (0, n.jsxs)('div', {
className: u.container,
children: [
  (0, n.jsx)(l.Heading, {
    variant: 'heading-md/semibold',
    className: u.__invalid_sectionTitle,
    children: E.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
  }),
  (0, n.jsx)(l.Spacer, {
    size: 4
  }),
  (0, n.jsx)(l.Text, {
    variant: 'text-sm/normal',
    className: u.sectionDescription,
    children: E.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_DESCRIPTION
  }),
  (0, n.jsx)(l.Spacer, {
    size: 24
  }),
  (0, n.jsxs)('div', {
    className: r()(T.guildBoostingSubscriptionRow, u.card),
    children: [
      (0, n.jsx)('img', {
        src: I,
        alt: '',
        className: u.bannerImage
      }),
      (0, n.jsxs)('div', {
        className: u.textContainer,
        children: [
          (0, n.jsx)(l.Heading, {
            variant: 'heading-xl/semibold',
            className: u.header,
            children: E.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
          }),
          (0, n.jsx)(l.Text, {
            variant: 'text-md/normal',
            className: u.description,
            children: E.Z.Messages.APPLICATION_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
              numSubscriptions: i.length
            })
          })
        ]
      }),
      (0, n.jsx)(c.Z, {
        color: l.Button.Colors.BRAND,
        onClick: t,
        children: E.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTIONS_BUTTON
      })
    ]
  })
]
  });
}