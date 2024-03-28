"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("230711"),
  l = n("682864"),
  i = n("931547"),
  r = n("981631"),
  o = n("526761"),
  u = n("689938");

function d(e) {
  let {
    subscription: t
  } = e;
  return null == t ? null : t.status === r.SubscriptionStatusTypes.PAST_DUE ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.default, {
      size: 16
    }), (0, a.jsx)(i.default, {
      message: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      ctaMessage: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_CTA,
      onClick: () => {
        s.default.open(r.UserSettingsSections.SUBSCRIPTIONS, o.ROLE_SUBSCRIPTION_SUBSECTION)
      }
    })]
  }) : null
}