"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(723047),
  a = t(463939),
  r = t(981631),
  o = t(689938);

function c(e) {
  let {
    team: s,
    ...t
  } = e, c = (0, l.mY)() || null == s ? null : o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
    url: r.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s.id)
  });
  return 0 === t.payoutsByPeriod.length ? (0, n.jsxs)(i.FormText, {
    type: i.FormText.Types.DESCRIPTION,
    children: [o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", c]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(i.FormText, {
      type: i.FormText.Types.DESCRIPTION,
      children: [o.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", c]
    }), (0, n.jsx)(i.Spacer, {
      size: 16
    }), (0, n.jsx)(a.Z, {
      ...t
    })]
  })
}