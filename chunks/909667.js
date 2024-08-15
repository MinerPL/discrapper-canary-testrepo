n.d(t, {
  Z: function() {
return c;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(723047),
  r = n(463939),
  l = n(981631),
  o = n(689938);

function c(e) {
  let {
team: t,
...n
  } = e, c = (0, i.mY)() || null == t ? null : o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
url: l.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id)
  });
  return 0 === n.payoutsByPeriod.length ? (0, s.jsxs)(a.FormText, {
type: a.FormText.Types.DESCRIPTION,
children: [
  o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY,
  ' ',
  c
]
  }) : (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)(a.FormText, {
    type: a.FormText.Types.DESCRIPTION,
    children: [
      o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION,
      ' ',
      c
    ]
  }),
  (0, s.jsx)(a.Spacer, {
    size: 16
  }),
  (0, s.jsx)(r.Z, {
    ...n
  })
]
  });
}