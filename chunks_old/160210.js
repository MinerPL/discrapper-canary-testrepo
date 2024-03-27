"use strict";
a.r(n), a.d(n, {
  default: function() {
    return M
  }
});
var i = a("37983");
a("884691");
var t = a("414456"),
  r = a.n(t),
  s = a("446674"),
  u = a("77078"),
  m = a("206230"),
  l = a("145131"),
  c = a("41250"),
  o = a("379863"),
  d = a("707269"),
  L = a("192441"),
  C = a("181108"),
  T = a("719923"),
  f = a("153160"),
  P = a("154889"),
  S = a("646718"),
  h = a("782340"),
  p = a("93747");
let A = e => {
  let {
    isTier0: n,
    discountAmount: a
  } = e;
  return (0, i.jsx)("div", {
    className: p.trialBadgeContainer,
    children: (0, i.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: r(p.trialOfferText, {
        [p.tier0TrialOffer]: n
      }),
      children: void 0 !== a ? h.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
        percent: a
      }) : h.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
    })
  })
};
var M = function(e) {
  var n;
  let a;
  let {
    hideCloseButton: t = !1,
    hideCloseOnFullScreen: M,
    shouldShowPrice: N,
    plan: E,
    renderAnimation: x,
    onClose: I,
    isGift: R,
    upgradeToPremiumType: _,
    headerTheme: y = S.PremiumHeaderThemes.DEFAULT,
    className: g,
    showTrialBadge: j = !1,
    showDiscountBadge: v = !1
  } = e, H = _ === S.PremiumTypes.TIER_2;
  a = _ === S.PremiumTypes.TIER_0 ? o.default : _ === S.PremiumTypes.TIER_1 ? d.default : c.default;
  let F = (0, s.useStateFromStores)([m.default], () => m.default.useReducedMotion),
    O = (0, P.usePremiumDiscountOffer)(),
    B = null == O ? void 0 : null === (n = O.discount) || void 0 === n ? void 0 : n.amount;
  return (0, i.jsxs)("div", {
    "aria-hidden": !0,
    className: r({
      [p.headerBackground]: !H,
      [y === S.PremiumHeaderThemes.WINTER ? p.tier2HeaderBackgroundWinterTheme : p.tier2HeaderBackground]: H
    }, g),
    children: [F || y !== S.PremiumHeaderThemes.WINTER ? null : (0, i.jsx)(C.default, {
      className: p.snow,
      wind: 5
    }), (j || v) && (0, i.jsx)(L.default, {
      className: p.trialBadgeSparkles
    }), x(), (0, i.jsxs)(l.default, {
      align: l.default.Align.START,
      justify: l.default.Justify.BETWEEN,
      className: p.headerTop,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(a, {
          className: r(p.headerIcon, {
            [p.nonTier2]: !H
          })
        }), (j || v) && (0, i.jsx)(A, {
          isTier0: _ === S.PremiumTypes.TIER_0,
          discountAmount: v ? B : void 0
        })]
      }), !t && (0, i.jsx)(u.ModalCloseButton, {
        hideOnFullscreen: M,
        onClick: I,
        className: p.closeButton
      })]
    }), N && null != E ? (0, i.jsx)("div", {
      className: p.price,
      children: function(e, n) {
        let a = T.default.getDefaultPrice(e),
          {
            intervalType: i
          } = T.default.getInterval(e),
          t = (0, f.formatPrice)(a.amount, a.currency);
        if (n) return t;
        switch (i) {
          case S.SubscriptionIntervalTypes.MONTH:
            return h.default.Messages.BILLING_PRICE_PER_MONTH.format({
              price: t
            });
          case S.SubscriptionIntervalTypes.YEAR:
            return h.default.Messages.BILLING_PRICE_PER_YEAR.format({
              price: t
            })
        }
      }(E, R)
    }) : null]
  })
}