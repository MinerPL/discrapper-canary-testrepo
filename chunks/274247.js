"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var s = n("735250"),
  r = n("470079"),
  i = n("153832"),
  l = n("544891"),
  a = n("355467"),
  o = n("591759"),
  u = n("987209"),
  d = n("598"),
  c = n("409813"),
  p = n("35248"),
  f = n("362755"),
  m = n("51499"),
  S = n("614277"),
  E = n("981631"),
  P = n("474936");

function x(e) {
  let {
    handleStepChange: t
  } = e, {
    selectedPlan: n,
    browserCheckoutState: x,
    browserCheckoutStateLoadId: h,
    contextMetadata: C
  } = (0, d.usePaymentContext)(), {
    isGift: _
  } = (0, u.useGiftContext)(), [T, g] = r.useState(!1);
  return r.useEffect(() => {
    var e;
    !T && (g(!0), (0, a.startBrowserCheckout)(C.loadId), ! function(e, t, n, s) {
      let r = E.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
        a = new URL(o.default.makeUrl(E.Routes.BILLING_LOGIN_HANDOFF)),
        u = (0, i.v4)();
      a.searchParams.append("handoff_key", u), a.searchParams.append("redirect_to", r), l.HTTP.post({
        url: E.Endpoints.HANDOFF,
        body: {
          key: u
        },
        oldFormErrors: !0
      }).then(e => {
        a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
      }, () => {
        s()
      })
    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, _, C.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
  }, [n, _, T, g, C, t]), r.useEffect(() => {
    h === C.loadId && x === f.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
  }, [x, h, C, t]), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(m.default, {}), (0, s.jsx)(S.PaymentPortalBody, {
      children: (0, s.jsx)(p.AwaitingBrowserCheckoutStepBody, {})
    }), (0, s.jsx)(S.PaymentPortalFooter, {
      children: (0, s.jsx)(p.AwaitingBrowserCheckoutStepFooter, {
        onStepChange: t,
        onBackClick: () => t(c.Step.PLAN_SELECT)
      })
    })]
  })
}