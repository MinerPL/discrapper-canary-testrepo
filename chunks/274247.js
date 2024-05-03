"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("315314"), s("610138"), s("216116"), s("78328"), s("815648"), s("47120");
var n = s("735250"),
  i = s("470079"),
  r = s("153832"),
  l = s("544891"),
  a = s("355467"),
  o = s("591759"),
  C = s("987209"),
  u = s("563132"),
  d = s("409813"),
  c = s("35248"),
  p = s("362755"),
  f = s("51499"),
  x = s("614277"),
  _ = s("981631"),
  m = s("474936");

function L(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: s,
    browserCheckoutState: L,
    browserCheckoutStateLoadId: E,
    contextMetadata: S
  } = (0, u.usePaymentContext)(), {
    isGift: h
  } = (0, C.useGiftContext)(), [j, P] = i.useState(!1);
  return i.useEffect(() => {
    var e;
    !j && (P(!0), (0, a.startBrowserCheckout)(S.loadId), ! function(e, t, s, n) {
      let i = _.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, s),
        a = new URL(o.default.makeUrl(_.Routes.BILLING_LOGIN_HANDOFF)),
        C = (0, r.v4)();
      a.searchParams.append("handoff_key", C), a.searchParams.append("redirect_to", i), l.HTTP.post({
        url: _.Endpoints.HANDOFF,
        body: {
          key: C
        },
        oldFormErrors: !0
      }).then(e => {
        a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
      }, () => {
        n()
      })
    }(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h, S.loadId, () => t(d.Step.ADD_PAYMENT_STEPS)))
  }, [s, h, j, P, S, t]), i.useEffect(() => {
    E === S.loadId && L === p.BrowserCheckoutState.DONE && t(d.Step.CONFIRM)
  }, [L, E, S, t]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(f.default, {}), (0, n.jsx)(x.PaymentPortalBody, {
      children: (0, n.jsx)(c.AwaitingBrowserCheckoutStepBody, {})
    }), (0, n.jsx)(x.PaymentPortalFooter, {
      children: (0, n.jsx)(c.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(d.Step.PLAN_SELECT)
      })
    })]
  })
}