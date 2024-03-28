"use strict";
n.r(t), n.d(t, {
  CustomCallSoundUpsell: function() {
    return I
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("693789"),
  i = n("260034"),
  r = n("993365"),
  o = n("481060"),
  u = n("230711"),
  d = n("197115"),
  c = n("504983"),
  f = n("594174"),
  h = n("465670"),
  m = n("466111"),
  p = n("74538"),
  E = n("981631"),
  C = n("921944"),
  g = n("474936"),
  S = n("526761"),
  _ = n("689938"),
  T = n("665978");

function I(e) {
  var t;
  let {
    onClose: n,
    markAsDismissed: I
  } = e, A = (0, l.useStateFromStores)([f.default], () => f.default.getCurrentUser());
  let v = (t = null == A ? void 0 : A.premiumType) === g.PremiumTypes.TIER_2 ? _.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? _.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : _.default.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
    N = p.default.canUseCustomCallSounds(A);
  return (0, a.jsxs)(c.default, {
    isShown: !0,
    type: c.FeatureBorderTypes.PREMIUM,
    className: T.upsellOuter,
    backgroundClassName: T.upsellInner,
    children: [null != I ? (0, a.jsx)(o.Clickable, {
      className: T.close,
      onClick: () => null == I ? void 0 : I(C.ContentDismissActionType.DISMISS),
      "aria-label": _.default.Messages.CLOSE,
      children: (0, a.jsx)(h.default, {
        className: T.closeIcon,
        width: 16,
        height: 16
      })
    }) : null, (0, a.jsxs)("div", {
      className: T.upsellTitle,
      children: [(0, a.jsx)(m.default, {
        className: T.nitroWheel,
        width: 18,
        height: 18
      }), (0, a.jsx)(i.Heading, {
        variant: "heading-sm/bold",
        children: _.default.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
      })]
    }), (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      children: v
    }), N ? (0, a.jsx)(s.Button, {
      onClick: function() {
        u.default.open(E.UserSettingsSections.VOICE, S.SOUNDBOARD_SUBSECTION), null == n || n(), null == I || I(C.ContentDismissActionType.PRIMARY)
      },
      children: _.default.Messages.CHECK_IT_OUT
    }) : (0, a.jsx)(d.default, {
      buttonText: _.default.Messages.PREMIUM_UPSELL_GET_NITRO,
      subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
      premiumModalAnalyticsLocation: {
        section: E.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
        object: E.AnalyticsObjects.BUTTON_CTA
      },
      color: s.Button.Colors.GREEN,
      onSubscribeModalClose: () => null == I ? void 0 : I(C.ContentDismissActionType.PRIMARY)
    })]
  })
}