"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("723047"),
  i = s("682864"),
  r = s("463939"),
  o = s("981631"),
  d = s("689938");

function u(e) {
  let {
    team: t,
    ...s
  } = e, u = (0, n.useRoleSubscriptionSettingsDisabled)() || null == t ? null : d.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
    url: o.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id)
  });
  return 0 === s.payoutsByPeriod.length ? (0, a.jsxs)(l.FormText, {
    type: l.FormText.Types.DESCRIPTION,
    children: [d.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", u]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      children: [d.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", u]
    }), (0, a.jsx)(i.default, {
      size: 16
    }), (0, a.jsx)(r.default, {
      ...s
    })]
  })
}