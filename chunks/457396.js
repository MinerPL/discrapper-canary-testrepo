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
  m = n("502087"),
  S = n("647265"),
  p = n("650032"),
  g = n("104494"),
  I = n("639119"),
  T = n("655525"),
  A = n("314684"),
  N = n("52188"),
  v = n("248042"),
  R = n("924540"),
  O = n("649765"),
  L = n("565626"),
  M = n("734741"),
  y = n("701910"),
  P = n("487980"),
  x = n("474936"),
  D = n("981631"),
  b = n("921944"),
  U = n("689938"),
  j = n("985252");
let G = "NitroTabButton";
(a = s || (s = {}))[a.BOGO_PROMOTION = 0] = "BOGO_PROMOTION", a[a.TENURE_REWARD = 1] = "TENURE_REWARD", a[a.NEW_PERKS_BADGE = 2] = "NEW_PERKS_BADGE", a[a.DISCOUNT_OFFER = 3] = "DISCOUNT_OFFER", a[a.TRIAL_OFFER = 4] = "TRIAL_OFFER", a[a.LOCALIZED_PRICING = 5] = "LOCALIZED_PRICING", a[a.REFERRAL_PROGRAM = 6] = "REFERRAL_PROGRAM";
let k = e => {
  let t, n, a, {
      selected: s,
      route: k,
      locationState: w,
      ...B
    } = e,
    F = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    H = (0, r.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()),
    V = (0, C.hasPremiumSubscriptionToDisplay)(F, H),
    Y = (0, i.useListItem)("nitro"),
    W = (0, I.usePremiumTrialOffer)(),
    K = (0, g.usePremiumDiscountOffer)(),
    z = (0, r.useStateFromStores)([f.default], () => f.default.isLocalizedPromoEnabled) && null == W,
    q = (0, v.useIsEligibleForBogoPromotion)(),
    Q = (0, L.default)(),
    Z = (0, M.useShouldShowWhatsNewBadge)(),
    X = (0, A.useTenureRewardBadgeDescription)(),
    J = (0, P.useIsEligibleSenderForReferralProgramTabBadge)(G),
    $ = (0, r.useStateFromStores)([m.default], () => m.default.getCreatedAtOverride()),
    ee = null != $ ? $ : null == F ? void 0 : F.createdAt,
    et = s || null != W || null != K || q || Q || Z || null != X || V,
    {
      enabled: en
    } = p.ReferralProgramRecipient.useExperiment({
      location: G
    }, {
      autoTrackExposure: !1
    }),
    ea = en && (null == W ? void 0 : W.trial_id) === x.PREMIUM_TIER_2_REFERRAL_TRIAL_ID,
    es = (0, S.usePremiumMarketingTabDisplayTimingExperiment)({
      location: "NitroTabButton",
      showTabForOtherReasons: et
    });
  if (!(et = et || null != F && null != ee && Date.now() - ee.getTime() > es)) return null;
  Z ? (n = (0, l.jsx)(y.PerksDiscoverabilityMarketingMomentWhatsNewBadge, {}), a = 2) : q ? (n = (0, l.jsx)(T.default, {
    isNitroTab: !0
  }), a = 0) : null != X ? (n = (0, l.jsx)(y.default, {
    copy: X
  }), a = 1) : Q ? (n = (0, l.jsx)(y.default, {}), a = 2) : null != K ? (n = (0, l.jsx)(R.PremiumDiscountOfferTabBadge, {
    userDiscount: K,
    isTabSelected: s,
    includesAmountOff: !1
  }), a = 3) : null == W || ea ? J ? (n = (0, l.jsx)(O.default, {
    isSelected: s,
    onSelect: () => (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: b.ContentDismissActionType.TAKE_ACTION
    })
  }), a = 6) : z && (n = (0, l.jsx)(N.LocalizedPricingBadgeIcon, {
    entryPoint: N.BadgeEntryPoint.PrivateMessages
  }), !s && (t = j.localizeBadge), a = 5) : (n = (0, l.jsx)(R.PremiumTrialOfferTabBadge, {
    trialOffer: W,
    isTabSelected: s
  }), a = 4);
  let el = (0, l.jsx)(u.LinkButton, {
    selected: s,
    route: k,
    icon: h.default,
    text: U.default.Messages.PREMIUM,
    locationState: w,
    onClick: () => {
      _.default.track(D.AnalyticEvents.NITRO_TAB_VISITED, {
        badge_decorator: a,
        has_premium: V
      })
    },
    ...B,
    ...Y,
    className: t,
    children: n
  });
  return J ? (0, l.jsx)(O.ReferralProgramCoachtipLinkButton, {
    children: el
  }) : el
}