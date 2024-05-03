"use strict";
a.r(n);
var t = a("735250");
a("470079");
var i = a("120356"),
  r = a.n(i),
  s = a("442837"),
  u = a("481060"),
  m = a("607070"),
  l = a("285952"),
  c = a("483444"),
  o = a("599250"),
  d = a("926153"),
  L = a("27693"),
  C = a("70613"),
  T = a("74538"),
  f = a("937615"),
  P = a("104494"),
  S = a("639119"),
  h = a("474936"),
  A = a("689938"),
  M = a("197038");
let p = e => {
  let {
    isTier0: n,
    discountAmount: a
  } = e, i = (0, S.usePremiumTrialOffer)(), s = null != i && i.trial_id === h.PREMIUM_TIER_2_REFERRAL_TRIAL_ID, m = A.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT;
  return void 0 !== a ? m = A.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: a
  }) : s && (m = A.default.Messages.REFERRAL_PROGRAM_TWO_WEEK_TRIAL), (0, t.jsx)("div", {
    className: M.trialBadgeContainer,
    children: (0, t.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: r()(M.trialOfferText, {
        [M.tier0TrialOffer]: n
      }),
      children: m
    })
  })
};
n.default = function(e) {
  var n;
  let a;
  let {
    hideCloseButton: i = !1,
    hideCloseOnFullScreen: S,
    shouldShowPrice: E,
    plan: N,
    renderAnimation: R,
    onClose: I,
    isGift: _,
    upgradeToPremiumType: x,
    headerTheme: y = h.PremiumHeaderThemes.DEFAULT,
    className: g,
    showTrialBadge: j = !1,
    showDiscountBadge: H = !1
  } = e, v = x === h.PremiumTypes.TIER_2;
  a = x === h.PremiumTypes.TIER_0 ? o.default : x === h.PremiumTypes.TIER_1 ? d.default : c.default;
  let F = (0, s.useStateFromStores)([m.default], () => m.default.useReducedMotion),
    O = (0, P.usePremiumDiscountOffer)(),
    B = null == O ? void 0 : null === (n = O.discount) || void 0 === n ? void 0 : n.amount;
  return (0, t.jsxs)("div", {
    "aria-hidden": !0,
    className: r()({
      [M.headerBackground]: !v,
      [y === h.PremiumHeaderThemes.WINTER ? M.tier2HeaderBackgroundWinterTheme : M.tier2HeaderBackground]: v
    }, g),
    children: [F || y !== h.PremiumHeaderThemes.WINTER ? null : (0, t.jsx)(C.default, {
      className: M.snow,
      wind: 5
    }), (j || H) && (0, t.jsx)(L.default, {
      className: M.trialBadgeSparkles
    }), R(), (0, t.jsxs)(l.default, {
      align: l.default.Align.START,
      justify: l.default.Justify.BETWEEN,
      className: M.headerTop,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(a, {
          className: r()(M.headerIcon, {
            [M.nonTier2]: !v
          })
        }), (j || H) && (0, t.jsx)(p, {
          isTier0: x === h.PremiumTypes.TIER_0,
          discountAmount: H ? B : void 0
        })]
      }), !i && (0, t.jsx)(u.ModalCloseButton, {
        hideOnFullscreen: S,
        onClick: I,
        className: M.closeButton
      })]
    }), E && null != N ? (0, t.jsx)("div", {
      className: M.price,
      children: function(e, n) {
        let a = T.default.getDefaultPrice(e),
          {
            intervalType: t
          } = T.default.getInterval(e),
          i = (0, f.formatPrice)(a.amount, a.currency);
        if (n) return i;
        switch (t) {
          case h.SubscriptionIntervalTypes.MONTH:
            return A.default.Messages.BILLING_PRICE_PER_MONTH.format({
              price: i
            });
          case h.SubscriptionIntervalTypes.YEAR:
            return A.default.Messages.BILLING_PRICE_PER_YEAR.format({
              price: i
            })
        }
      }(N, _)
    }) : null]
  })
}