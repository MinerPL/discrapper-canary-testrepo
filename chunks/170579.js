"use strict";
a.r(n);
var t = a("735250");
a("470079");
var i = a("803997"),
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
  S = a("474936"),
  h = a("689938"),
  p = a("546610");
let A = e => {
  let {
    isTier0: n,
    discountAmount: a
  } = e;
  return (0, t.jsx)("div", {
    className: p.trialBadgeContainer,
    children: (0, t.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: r()(p.trialOfferText, {
        [p.tier0TrialOffer]: n
      }),
      children: void 0 !== a ? h.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
        percent: a
      }) : h.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
    })
  })
};
n.default = function(e) {
  var n;
  let a;
  let {
    hideCloseButton: i = !1,
    hideCloseOnFullScreen: M,
    shouldShowPrice: N,
    plan: E,
    renderAnimation: I,
    onClose: x,
    isGift: R,
    upgradeToPremiumType: _,
    headerTheme: y = S.PremiumHeaderThemes.DEFAULT,
    className: g,
    showTrialBadge: j = !1,
    showDiscountBadge: H = !1
  } = e, v = _ === S.PremiumTypes.TIER_2;
  a = _ === S.PremiumTypes.TIER_0 ? o.default : _ === S.PremiumTypes.TIER_1 ? d.default : c.default;
  let F = (0, s.useStateFromStores)([m.default], () => m.default.useReducedMotion),
    O = (0, P.usePremiumDiscountOffer)(),
    B = null == O ? void 0 : null === (n = O.discount) || void 0 === n ? void 0 : n.amount;
  return (0, t.jsxs)("div", {
    "aria-hidden": !0,
    className: r()({
      [p.headerBackground]: !v,
      [y === S.PremiumHeaderThemes.WINTER ? p.tier2HeaderBackgroundWinterTheme : p.tier2HeaderBackground]: v
    }, g),
    children: [F || y !== S.PremiumHeaderThemes.WINTER ? null : (0, t.jsx)(C.default, {
      className: p.snow,
      wind: 5
    }), (j || H) && (0, t.jsx)(L.default, {
      className: p.trialBadgeSparkles
    }), I(), (0, t.jsxs)(l.default, {
      align: l.default.Align.START,
      justify: l.default.Justify.BETWEEN,
      className: p.headerTop,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(a, {
          className: r()(p.headerIcon, {
            [p.nonTier2]: !v
          })
        }), (j || H) && (0, t.jsx)(A, {
          isTier0: _ === S.PremiumTypes.TIER_0,
          discountAmount: H ? B : void 0
        })]
      }), !i && (0, t.jsx)(u.ModalCloseButton, {
        hideOnFullscreen: M,
        onClick: x,
        className: p.closeButton
      })]
    }), N && null != E ? (0, t.jsx)("div", {
      className: p.price,
      children: function(e, n) {
        let a = T.default.getDefaultPrice(e),
          {
            intervalType: t
          } = T.default.getInterval(e),
          i = (0, f.formatPrice)(a.amount, a.currency);
        if (n) return i;
        switch (t) {
          case S.SubscriptionIntervalTypes.MONTH:
            return h.default.Messages.BILLING_PRICE_PER_MONTH.format({
              price: i
            });
          case S.SubscriptionIntervalTypes.YEAR:
            return h.default.Messages.BILLING_PRICE_PER_YEAR.format({
              price: i
            })
        }
      }(E, R)
    }) : null]
  })
}