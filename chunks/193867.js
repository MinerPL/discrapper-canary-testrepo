"use strict";
i.r(t), i.d(t, {
  default: function() {
    return N
  }
});
var s = i("37983"),
  n = i("884691"),
  l = i("446674"),
  r = i("77078"),
  o = i("812204"),
  a = i("685665"),
  u = i("67069"),
  c = i("635956"),
  d = i("697218"),
  f = i("258078"),
  h = i("599110"),
  v = i("719923"),
  p = i("49111"),
  g = i("75015"),
  m = i("646718"),
  C = i("782340"),
  I = i("931720");

function N(e) {
  let {
    analyticsSection: t,
    type: i
  } = e, N = (0, l.useStateFromStores)([d.default], () => d.default.getCurrentUser()), x = v.default.canUseAnimatedAvatar(N), b = v.default.canUsePremiumProfileCustomization(N), E = i === g.UploadTypes.BANNER && b || i === g.UploadTypes.AVATAR && x, {
    sourceAnalyticsLocations: _
  } = (0, a.default)(o.default.PREMIUM_PREVIEW_UPSELL_HEADER);
  if (n.useEffect(() => {
      !E && h.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: t,
        location_stack: _
      })
    }, [E, t, _]), E) return null;
  let T = (0, s.jsx)(c.default, {
    className: I.getNitroLink,
    size: r.Button.Sizes.SMALL,
    look: r.Button.Looks.LINK,
    color: r.Button.Colors.LINK,
    subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
    buttonText: C.default.Messages.PREMIUM_PREVIEW_GET_NITRO.format(),
    showIcon: !1,
    premiumModalAnalyticsLocation: {
      section: t,
      object: p.AnalyticsObjects.BUTTON_CTA
    },
    disableShine: !0
  });
  return (0, s.jsx)(u.default, {
    reducedRightPadding: !0,
    className: I.nitroPreviewUpsell,
    text: C.default.Messages.PREMIUM_PREVIEW.format(),
    textSize: f.default.Sizes.SIZE_14,
    textColor: f.default.Colors.HEADER_PRIMARY,
    button: T
  })
}