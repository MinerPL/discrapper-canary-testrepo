"use strict";
i.r(t), i.d(t, {
  default: function() {
    return g
  }
});
var l = i("735250"),
  a = i("470079"),
  s = i("442837"),
  n = i("481060"),
  o = i("100527"),
  r = i("906732"),
  u = i("411477"),
  d = i("197115"),
  c = i("594174"),
  f = i("154921"),
  E = i("626135"),
  _ = i("74538"),
  T = i("981631"),
  N = i("486324"),
  m = i("474936"),
  p = i("689938"),
  I = i("897370");

function g(e) {
  let {
    analyticsSection: t,
    type: i
  } = e, g = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()), R = _.default.canUseAnimatedAvatar(g), A = _.default.canUsePremiumProfileCustomization(g), h = i === N.UploadTypes.BANNER && A || i === N.UploadTypes.AVATAR && R, {
    sourceAnalyticsLocations: B
  } = (0, r.default)(o.default.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (a.useEffect(() => {
      !h && E.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: B
      })
    }, [h, t, B]), h) return null;
  let x = (0, l.jsx)(d.default, {
    className: I.__invalid_getNitroLink,
    size: n.Button.Sizes.SMALL,
    look: n.Button.Looks.LINK,
    color: n.Button.Colors.LINK,
    subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
    buttonText: p.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: T.AnalyticsObjects.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, l.jsx)(u.default, {
    reducedRightPadding: !0,
    className: I.nitroPreviewUpsell,
    text: p.default.Messages.PREMIUM_PREVIEW.format(),
    textSize: f.default.Sizes.SIZE_14,
    textColor: f.default.Colors.HEADER_PRIMARY,
    button: x
  })
}