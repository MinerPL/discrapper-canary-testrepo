"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("230711"),
  S = s("497321"),
  E = s("231428"),
  T = s("390954"),
  _ = s("89057"),
  f = s("246946"),
  m = s("594174"),
  g = s("351402"),
  h = s("853872"),
  N = s("78839"),
  I = s("706454"),
  p = s("981631"),
  C = s("689938"),
  A = s("757947");
class O extends n.PureComponent {
  componentDidMount() {
    d.default.wait(() => {
      u.fetchPaymentSources(), u.fetchSubscriptions()
    })
  }
  handleRedemptionRedirect() {
    c.default.setSection(p.UserSettingsSections.INVENTORY)
  }
  render() {
    let {
      syncing: e,
      hide: t,
      paymentSources: s,
      defaultPaymentSourceId: n,
      locale: l,
      premiumSubscription: i,
      isRemovingPaymentSource: r,
      isUpdatingPaymentSource: d
    } = this.props;
    return t ? (0, a.jsx)(S.default, {}) : (0, a.jsxs)("div", {
      className: A.__invalid_userSettingsBilling,
      children: [e && 0 === Object.keys(s).length ? (0, a.jsx)("div", {
        className: A.syncing,
        children: (0, a.jsx)(o.Spinner, {})
      }) : (0, a.jsx)(T.default, {
        paymentSources: s,
        defaultPaymentSourceId: n,
        premiumSubscriptionPaymentSourceId: null != i && i.status !== p.SubscriptionStatusTypes.CANCELED ? i.paymentSourceId : null,
        locale: l,
        removing: r,
        submitting: d
      }), (0, a.jsx)("div", {
        className: A.paymentHistory,
        children: (0, a.jsxs)(o.HeadingLevel, {
          component: (0, a.jsx)(o.FormTitle, {
            tag: "h1",
            children: C.default.Messages.BILLING_PAYMENT_HISTORY
          }),
          children: [(0, a.jsx)(_.BlockedPaymentsWarning, {}), (0, a.jsx)(E.default, {
            locale: l
          })]
        })
      }), (0, a.jsx)(o.Card, {
        className: A.codeRedemptionRedirect,
        type: o.Card.Types.CUSTOM,
        children: C.default.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({
          onClick: this.handleRedemptionRedirect
        })
      })]
    })
  }
}

function x() {
  let e = (0, r.useStateFromStoresObject)([I.default, g.default, h.default, m.default, f.default, N.default], () => {
    let e = N.default.getPremiumTypeSubscription(),
      t = m.default.getCurrentUser();
    return i()(null != t, "UserSettingsBilling: currentUser cannot be undefined"), {
      locale: I.default.locale,
      hide: f.default.enabled,
      isClaimed: t.isClaimed(),
      isVerified: t.verified,
      premiumSubscription: e,
      defaultPaymentSourceId: h.default.defaultPaymentSourceId,
      paymentSources: h.default.paymentSources,
      syncing: g.default.isSyncing,
      isRemovingPaymentSource: g.default.isRemovingPaymentSource,
      isUpdatingPaymentSource: g.default.isUpdatingPaymentSource
    }
  });
  return (0, a.jsx)(O, {
    ...e
  })
}