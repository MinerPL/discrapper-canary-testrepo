s.d(t, {
  Z: function() {
return g;
  }
});
var n = s(735250);
s(470079);
var i = s(120356),
  a = s.n(i),
  r = s(442837),
  l = s(481060),
  o = s(230711),
  u = s(706454),
  d = s(346585),
  c = s(347649),
  E = s(981631),
  _ = s(689938),
  m = s(850114);

function g(e) {
  let {
onClose: t,
handleStartFlow: s
  } = e, i = (0, c.CC)(), g = (0, r.e7)([u.default], () => u.default.locale);
  return (0, n.jsxs)('div', {
className: m.infoContainer,
children: [
  (0, n.jsx)(l.Heading, {
    className: a()(m.finishTitle, {
      [m.finishTitlePadding]: i
    }),
    color: 'header-primary',
    variant: 'heading-xl/bold',
    children: i ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format({
      date: (0, d.IE)(g)
    }) : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
  }),
  (0, n.jsx)(l.Text, {
    className: m.subtitleFinish,
    color: 'header-secondary',
    variant: 'text-md/medium',
    children: i ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format({
      date: (0, d.IE)(g)
    }) : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
  }),
  (0, n.jsx)(l.Text, {
    className: m.promptFinish,
    color: 'header-secondary',
    variant: 'text-md/medium',
    children: _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
      onClick: () => {
        t(), o.Z.open(E.oAB.ACCOUNT);
      }
    })
  }),
  (0, n.jsx)(l.Button, {
    className: m.button,
    type: 'button',
    size: l.Button.Sizes.SMALL,
    onClick: i ? s : t,
    children: i ? _.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT : _.Z.Messages.INVITES_DISABLED_CONFIRMATION
  })
]
  });
}