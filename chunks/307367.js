"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("748820"),
  l = n("872717"),
  a = n("850068"),
  o = n("253981"),
  u = n("635357"),
  d = n("642906"),
  c = n("85336"),
  p = n("149833"),
  f = n("523591"),
  m = n("153727"),
  S = n("650484"),
  P = n("49111"),
  E = n("646718");

function _(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: n,
    browserCheckoutState: _,
    browserCheckoutStateLoadId: x,
    contextMetadata: C
  } = (0, d.usePaymentContext)(), {
    isGift: I
  } = (0, u.useGiftContext)(), [T, h] = i.useState(!1);
  return i.useEffect(() => {
    var e;
    !T && (h(!0), (0, a.startBrowserCheckout)(C.loadId), ! function(e, t, n, r) {
      let i = P.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
        a = new URL(o.default.makeUrl(P.Routes.BILLING_LOGIN_HANDOFF)),
        u = (0, s.v4)();
      a.searchParams.append("handoff_key", u), a.searchParams.append("redirect_to", i), l.HTTP.post({
        url: P.Endpoints.HANDOFF,
        body: {
          key: u
        },
        oldFormErrors: !0
      }).then(e => {
        a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
      }, () => {
        r()
      })
    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : E.SubscriptionPlans.PREMIUM_MONTH_TIER_2, I, C.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
  }, [n, I, T, h, C, t]), i.useEffect(() => {
    x === C.loadId && _ === f.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
  }, [_, x, C, t]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.default, {}), (0, r.jsx)(S.PaymentPortalBody, {
      children: (0, r.jsx)(p.AwaitingBrowserCheckoutStepBody, {})
    }), (0, r.jsx)(S.PaymentPortalFooter, {
      children: (0, r.jsx)(p.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(c.Step.PLAN_SELECT)
      })
    })]
  })
}