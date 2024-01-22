"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("748820"),
  r = n("872717"),
  i = n("850068"),
  u = n("253981"),
  o = n("635357"),
  d = n("642906"),
  c = n("85336"),
  _ = n("149833"),
  f = n("523591"),
  I = n("153727"),
  E = n("650484"),
  S = n("49111"),
  m = n("646718");

function P(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: n,
    browserCheckoutState: P,
    browserCheckoutStateLoadId: p,
    contextMetadata: T
  } = (0, d.usePaymentContext)(), {
    isGift: N
  } = (0, o.useGiftContext)(), [M, C] = a.useState(!1);
  return a.useEffect(() => {
    var e;
    !M && (C(!0), (0, i.startBrowserCheckout)(T.loadId), ! function(e, t, n, s) {
      let a = S.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
        i = new URL(u.default.makeUrl(S.Routes.BILLING_LOGIN_HANDOFF)),
        o = (0, l.v4)();
      i.searchParams.append("handoff_key", o), i.searchParams.append("redirect_to", a), r.default.post({
        url: S.Endpoints.HANDOFF,
        body: {
          key: o
        },
        oldFormErrors: !0
      }).then(e => {
        i.searchParams.append("handoff_token", e.body.handoff_token), window.open(i.href)
      }, () => {
        s()
      })
    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : m.SubscriptionPlans.PREMIUM_MONTH_TIER_2, N, T.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
  }, [n, N, M, C, T, t]), a.useEffect(() => {
    p === T.loadId && P === f.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
  }, [P, p, T, t]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(I.default, {}), (0, s.jsx)(E.PaymentPortalBody, {
      children: (0, s.jsx)(_.AwaitingBrowserCheckoutStepBody, {})
    }), (0, s.jsx)(E.PaymentPortalFooter, {
      children: (0, s.jsx)(_.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(c.Step.PLAN_SELECT)
      })
    })]
  })
}