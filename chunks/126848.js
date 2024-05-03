"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  r = n("442837"),
  o = n("524437"),
  a = n("605236"),
  c = n("328882"),
  u = n("650032"),
  d = n("104494"),
  m = n("639119"),
  h = n("655525"),
  p = n("52188"),
  f = n("248042"),
  b = n("924540"),
  S = n("886654"),
  g = n("351402"),
  T = n("170671"),
  x = n("921944"),
  v = n("474936"),
  N = n("689938"),
  j = n("759644");
let C = "UserSettingsPremiumLabel";

function E(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: E
    } = e,
    I = (0, m.usePremiumTrialOffer)(),
    P = (0, d.usePremiumDiscountOffer)(),
    R = (0, f.useIsEligibleForBogoPromotion)(),
    A = (0, r.useStateFromStores)([g.default], () => g.default.isLocalizedPromoEnabled) && null == I && null == n,
    _ = (0, c.useShouldShowNewOfferBadgeForAprilMarketingMoment)(C),
    {
      enabled: M
    } = u.ReferralProgramRecipient.useExperiment({
      location: C
    }, {
      autoTrackExposure: !1
    }),
    y = M && (null == I ? void 0 : I.trial_id) === v.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
  return t = R ? (0, i.jsx)(h.default, {}) : _ ? (0, i.jsx)(S.default, {
    copy: N.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: E,
    onSelect: () => (0, a.markDismissibleContentAsDismissed)(o.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: x.ContentDismissActionType.TAKE_ACTION
    })
  }) : null != P ? (0, i.jsx)(b.PremiumDiscountOfferTabBadge, {
    isTabSelected: E,
    userDiscount: P,
    includesAmountOff: !1
  }) : null == I || y ? null != n ? n : A ? (0, i.jsx)(p.LocalizedPricingBadgeIcon, {
    entryPoint: p.BadgeEntryPoint.SettingsMenu
  }) : (0, i.jsx)(T.default, {
    isSelected: E
  }) : (0, i.jsx)(b.PremiumTrialOfferTabBadge, {
    isTabSelected: E,
    trialOffer: I
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(j.premiumLabel, {
        [j.selected]: (E || A) && !R
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(j.background, {
        [j.auPromo]: A && !E,
        [j.auPromoSelected]: A && E,
        [j.selectedBackground]: !A && !R && E
      })
    })]
  })
}