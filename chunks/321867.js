"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  r = a("481060"),
  i = a("100527"),
  u = a("906732"),
  o = a("411477"),
  c = a("197115"),
  d = a("594174"),
  A = a("154921"),
  E = a("626135"),
  f = a("74538"),
  h = a("981631"),
  _ = a("486324"),
  R = a("474936"),
  p = a("689938"),
  g = a("553949");

function I(e) {
  let {
    analyticsSection: t,
    type: a
  } = e, I = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), m = f.default.canUseAnimatedAvatar(I), N = f.default.canUsePremiumProfileCustomization(I), M = a === _.UploadTypes.BANNER && N || a === _.UploadTypes.AVATAR && m, {
    sourceAnalyticsLocations: T
  } = (0, u.default)(i.default.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (s.useEffect(() => {
      !M && E.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: T
      })
    }, [M, t, T]), M) return null;
  let S = (0, n.jsx)(c.default, {
    className: g.__invalid_getNitroLink,
    size: r.Button.Sizes.SMALL,
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
    buttonText: p.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: h.AnalyticsObjects.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, n.jsx)(o.default, {
    reducedRightPadding: !0,
    className: g.nitroPreviewUpsell,
    text: p.default.Messages.PREMIUM_PREVIEW.format(),
    textSize: A.default.Sizes.SIZE_14,
    textColor: A.default.Colors.HEADER_PRIMARY,
    button: S
  })
}