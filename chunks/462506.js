"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("627445"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("913144"),
  u = s("850068"),
  c = s("79112"),
  S = s("642950"),
  E = s("404515"),
  T = s("87641"),
  f = s("245187"),
  _ = s("102985"),
  m = s("697218"),
  g = s("160299"),
  h = s("357957"),
  N = s("521012"),
  I = s("915639"),
  p = s("49111"),
  C = s("782340"),
  A = s("60638");
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
      className: A.userSettingsBilling,
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
          children: [(0, a.jsx)(f.BlockedPaymentsWarning, {}), (0, a.jsx)(E.default, {
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
  let e = (0, r.useStateFromStoresObject)([I.default, g.default, h.default, m.default, _.default, N.default], () => {
    let e = N.default.getPremiumTypeSubscription(),
      t = m.default.getCurrentUser();
    return i(null != t, "UserSettingsBilling: currentUser cannot be undefined"), {
      locale: I.default.locale,
      hide: _.default.enabled,
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