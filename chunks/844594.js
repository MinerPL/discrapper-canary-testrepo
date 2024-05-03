"use strict";
s.r(a), s.d(a, {
  default: function() {
    return A
  }
});
var n = s("735250"),
  l = s("470079"),
  i = s("481060"),
  t = s("197115"),
  r = s("962746"),
  o = s("318661"),
  d = s("721987"),
  c = s("153124"),
  u = s("626135"),
  p = s("981631"),
  m = s("486324"),
  h = s("474936"),
  I = s("689938"),
  f = s("450220");

function A(e) {
  let {
    user: a,
    guildId: s,
    transitionState: A,
    imageSrc: R,
    uploadType: g,
    onSubscribe: E,
    onClose: x
  } = e, N = (0, c.useUID)(), v = (0, o.default)(a.id, s), {
    primaryColor: M,
    secondaryColor: b
  } = (0, d.default)({
    user: a,
    displayProfile: v,
    pendingAvatar: g === m.UploadTypes.AVATAR ? R : void 0,
    isPreview: !0
  });
  return l.useEffect(() => {
    u.default.track(p.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: h.PremiumUpsellTypes.ANIMATED_AVATAR_PREVIEW_GIF_MODAL
    })
  }, []), (0, n.jsxs)(i.ModalRoot, {
    className: f.modalRoot,
    transitionState: A,
    size: i.ModalSize.SMALL,
    "aria-labelledby": N,
    hideShadow: !0,
    children: [(0, n.jsx)(r.default, {
      user: a,
      canUsePremiumCustomization: !0,
      disabledInputs: !0,
      pendingAvatar: g === m.UploadTypes.AVATAR ? R : void 0,
      pendingBanner: g === m.UploadTypes.BANNER ? R : void 0,
      pendingThemeColors: [M, b],
      onAvatarChange: p.NOOP,
      onBannerChange: p.NOOP
    }), (0, n.jsxs)("div", {
      className: f.upsellSection,
      children: [(0, n.jsx)(i.Text, {
        className: f.joinText,
        variant: "text-sm/normal",
        children: g === m.UploadTypes.AVATAR ? I.default.Messages.PREMIUM_PREVIEW_JOIN_AVATAR : I.default.Messages.PREMIUM_PREVIEW_JOIN_BANNER
      }), (0, n.jsx)(t.default, {
        buttonText: I.default.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        className: f.premiumSubscribeButton,
        size: i.Button.Sizes.SMALL,
        premiumModalAnalyticsLocation: {
          section: p.AnalyticsSections.SETTINGS_EDIT_PROFILE,
          object: p.AnalyticsObjects.BUTTON_CTA
        },
        onSubscribeModalClose: e => {
          e && (null == E || E(), x())
        }
      }), (0, n.jsx)(i.Button, {
        onClick: x,
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.PRIMARY,
        look: i.Button.Looks.FILLED,
        children: I.default.Messages.PREMIUM_PREVIEW_EXIT
      })]
    })]
  })
}