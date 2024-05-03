"use strict";
n.r(t), n.d(t, {
  NitroTabButton: function() {
    return k
  }
});
var a, s, l = n("735250");
n("470079");
var i = n("924826"),
  r = n("442837"),
  o = n("524437"),
  u = n("515753"),
  d = n("605236"),
  c = n("594174"),
  f = n("351402"),
  E = n("78839"),
  h = n("466111"),
  _ = n("626135"),
  C = n("74538"),
  S = n("502087"),
  m = n("328882"),
  p = n("647265"),
  I = n("650032"),
  T = n("104494"),
  g = n("639119"),
  A = n("655525"),
  N = n("314684"),
  v = n("52188"),
  R = n("248042"),
  L = n("924540"),
  O = n("649765"),
  M = n("565626"),
  P = n("701910"),
  y = n("886654"),
  x = n("487980"),
  D = n("474936"),
  b = n("981631"),
  U = n("921944"),
  j = n("689938"),
  G = n("47848");
let w = "NitroTabButton";
(a = s || (s = {}))[a.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", a[a.PREMIUM_APRIL_2024_MARKETING_MOMENT = 1] = "PREMIUM_APRIL_2024_MARKETING_MOMENT", a[a.TENURE_REWARD = 2] = "TENURE_REWARD", a[a.NEW_PERKS_BADGE = 3] = "NEW_PERKS_BADGE", a[a.DISCOUNT_OFFER = 4] = "DISCOUNT_OFFER", a[a.TRIAL_OFFER = 5] = "TRIAL_OFFER", a[a.LOCALIZED_PRICING = 6] = "LOCALIZED_PRICING", a[a.REFERRAL_PROGRAM = 7] = "REFERRAL_PROGRAM";
let k = e => {
  let t, n, a, {
      selected: s,
      route: k,
      locationState: F,
      ...B
    } = e,
    H = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    V = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()),
    Y = (0, C.hasPremiumSubscriptionToDisplay)(H, V),
    W = (0, i.useListItem)("nitro"),
    K = (0, g.usePremiumTrialOffer)(),
    z = (0, T.usePremiumDiscountOffer)(),
    q = (0, r.useStateFromStores)([f.default], () => f.default.isLocalizedPromoEnabled) && null == K,
    Q = (0, R.useIsEligibleForBogoPromotion)(),
    Z = (0, M.default)(),
    X = (0, N.useTenureRewardBadgeDescription)(),
    J = (0, m.useShouldShowNewOfferBadgeForAprilMarketingMoment)(w),
    $ = (0, x.useIsEligibleSenderForReferralProgramTabBadge)(w),
    ee = (0, r.useStateFromStores)([S.default], () => S.default.getCreatedAtOverride()),
    et = null != ee ? ee : null == H ? void 0 : H.createdAt,
    en = s || null != K || null != z || Q || J || Z || null != X || Y,
    {
      enabled: ea
    } = I.ReferralProgramRecipient.useExperiment({
      location: w
    }, {
      autoTrackExposure: !1
    }),
    es = ea && (null == K ? void 0 : K.trial_id) === D.PREMIUM_TIER_2_REFERRAL_TRIAL_ID,
    el = (0, p.usePremiumMarketingTabDisplayTimingExperiment)({
      location: "NitroTabButton",
      showTabForOtherReasons: en
    });
  if (!(en = en || null != H && null != et && Date.now() - et.getTime() > el)) return null;
  Q ? (n = (0, l.jsx)(A.default, {
    isNitroTab: !0
  }), a = 0) : J ? (n = (0, l.jsx)(y.default, {
    copy: j.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: U.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 1) : null != X ? (n = (0, l.jsx)(P.default, {
    copy: X
  }), a = 2) : Z ? (n = (0, l.jsx)(P.default, {}), a = 3) : null != z ? (n = (0, l.jsx)(L.PremiumDiscountOfferTabBadge, {
    userDiscount: z,
    isTabSelected: s,
    includesAmountOff: !1
  }), a = 4) : null == K || es ? $ ? (n = (0, l.jsx)(O.default, {
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: U.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 7) : q && (n = (0, l.jsx)(v.LocalizedPricingBadgeIcon, {
    entryPoint: v.BadgeEntryPoint.PrivateMessages
  }), !s && (t = G.localizeBadge), a = 6) : (n = (0, l.jsx)(L.PremiumTrialOfferTabBadge, {
    trialOffer: K,
    isTabSelected: s
  }), a = 5);
  let ei = (0, l.jsx)(u.LinkButton, {
    selected: s,
    route: k,
    icon: h.default,
    text: j.default.Messages.PREMIUM,
    locationState: F,
    onClick: () => {
      _.default.track(b.AnalyticEvents.NITRO_TAB_VISITED, {
        badge_decorator: a,
        has_premium: Y
      })
    },
    ...B,
    ...W,
    className: t,
    children: n
  });
  return $ ? (0, l.jsx)(O.ReferralProgramCoachtipLinkButton, {
    children: ei
  }) : ei
}