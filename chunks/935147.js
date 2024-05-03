"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("809206"),
  o = s("634894"),
  d = s("100527"),
  u = s("906732"),
  c = s("588126"),
  S = s("175756"),
  E = s("104494"),
  T = s("639119"),
  f = s("165583"),
  m = s("197115"),
  _ = s("350327"),
  g = s("318661"),
  h = s("996073"),
  I = s("25990"),
  N = s("466111"),
  p = s("626135"),
  C = s("74538"),
  A = s("962746"),
  O = s("296810"),
  x = s("433411"),
  R = s("532432"),
  M = s("504983"),
  v = s("134795"),
  D = s("513901"),
  L = s("451392"),
  P = s("981631"),
  j = s("474936"),
  b = s("526761"),
  U = s("689938"),
  y = s("142051");

function B(e) {
  var t, B, F;
  let {
    user: G
  } = e, {
    reducedMotion: k
  } = n.useContext(i.AccessibilityPreferencesContext), w = C.default.isPremium(G), {
    pendingAvatar: H,
    pendingBanner: V,
    pendingThemeColors: Y,
    pendingPronouns: W,
    pendingBio: K,
    tryItOutThemeColors: z,
    tryItOutAvatar: Q,
    tryItOutBanner: q,
    tryItOutAvatarDecoration: Z,
    tryItOutProfileEffectId: X
  } = (0, l.useStateFromStoresObject)([I.default], () => {
    let e = I.default.getAllPending(),
      t = I.default.getErrors(),
      s = I.default.getAllTryItOut();
    return {
      ...e,
      ...s,
      errors: t
    }
  }), J = (0, c.default)(Z), $ = (0, S.default)(X), ee = n.useRef(null);
  (0, h.default)(ee, b.ProfileCustomizationScrollPositions.TRY_IT_OUT);
  let et = (0, g.default)(G.id),
    es = null == et ? void 0 : et.getPreviewBio(K),
    {
      analyticsLocations: ea,
      sourceAnalyticsLocations: en
    } = (0, u.default)(d.default.USER_SETTINGS_TRY_OUT_PREMIUM);
  n.useEffect(() => {
    p.default.track(P.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: j.PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
      location: {
        page: P.AnalyticsPages.USER_SETTINGS
      },
      location_stack: en
    })
  }, [en, G]);
  let el = (null === (B = (0, T.usePremiumTrialOffer)()) || void 0 === B ? void 0 : null === (t = B.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === j.PremiumSubscriptionSKUs.TIER_2,
    ei = (0, E.usePremiumDiscountOffer)(),
    er = (0, E.discountOfferHasTier)(ei, j.PremiumSubscriptionSKUs.TIER_2),
    eo = "TryOutPremiumSection";
  return (0, o.useTriggerDebuggingAA)({
    location: eo + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: eo + " auto off",
    autoTrackExposure: !1
  }), (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: ea,
    children: (0, a.jsxs)(M.default, {
      ref: ee,
      className: y.tryItOutSection,
      type: M.FeatureBorderTypes.PREMIUM,
      isShown: !0,
      hasBackground: !0,
      children: [(0, a.jsx)(O.default, {
        layoutClassName: y.tryItOutLayout,
        previewTitle: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(N.default, {
            className: y.premiumIcon
          }), U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_PREVIEW]
        }),
        profilePreview: (0, a.jsx)(A.default, {
          user: G,
          onAvatarChange: _.setTryItOutAvatar,
          onBannerChange: _.setTryItOutBanner,
          pendingPronouns: W,
          pendingBio: K,
          pendingBanner: null !== (F = null != q ? q : V) && void 0 !== F ? F : s("466045"),
          pendingAvatar: null != Q ? Q : H,
          pendingThemeColors: null != z ? z : Y,
          pendingAvatarDecoration: J,
          pendingProfileEffectId: $,
          avatarClassName: null != Q || null != H || k.enabled ? void 0 : y.spinningAvatar,
          canUsePremiumCustomization: !0,
          isTryItOutFlow: !0,
          hideExampleButton: !0,
          hideFakeActivity: !!(null == es ? void 0 : es.value)
        }),
        children: (0, a.jsxs)("div", {
          className: y.editor,
          children: [(0, a.jsxs)("div", {
            children: [(0, a.jsx)(i.Heading, {
              variant: "heading-xl/extrabold",
              children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_HEADER
            }), (0, a.jsx)(i.Text, {
              className: y.description,
              variant: "text-sm/normal",
              children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_DESCRIPTION
            })]
          }), (0, a.jsx)(L.default, {
            className: y.customizationSection,
            user: G,
            pendingAvatar: null != Q ? Q : H,
            pendingColors: null != z ? z : Y,
            onThemeColorsChange: _.setTryItOutThemeColors,
            showPremiumIcon: !1,
            preventDisabled: !0
          }), (0, a.jsx)(v.default, {
            className: y.customizationSection,
            isTryItOutFlow: !0,
            showRemoveBannerButton: null != q,
            onBannerChange: _.setTryItOutBanner,
            showPremiumIcon: !1
          }), (0, a.jsx)(R.default, {
            className: y.customizationSection,
            isTryItOutFlow: !0,
            onAvatarChange: _.setTryItOutAvatar,
            showRemoveAvatarButton: !1,
            changeAvatarButtonText: U.default.Messages.USER_SETTINGS_ADD_ANIMATED_AVATAR,
            sectionTitle: U.default.Messages.PREMIUM_TIER_0_FEATURE_AVATAR
          }), (0, a.jsx)(x.default, {
            isTryItOutFlow: !0,
            className: y.customizationSection,
            user: G,
            sectionTitle: U.default.Messages.USER_SETTINGS_AVATAR_DECORATION
          }, "decoration"), (0, a.jsx)(D.default, {
            className: y.customizationSection,
            isTryItOutFlow: !0,
            initialSelectedEffectId: $,
            user: G,
            sectionTitle: U.default.Messages.USER_SETTINGS_PROFILE_EFFECT
          }, "effect"), !el && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(i.Text, {
              variant: "text-sm/normal",
              className: y.premiumPerksListTitle,
              children: U.default.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_ALSO_INCLUDES
            }), (0, a.jsx)(m.default, {
              onSubscribeModalClose: e => {
                e && ((0, r.setPendingAvatar)(Q), (0, _.setPendingBanner)(q), (0, _.setPendingThemeColors)(z))
              },
              subscriptionTier: j.PremiumSubscriptionSKUs.TIER_2,
              className: y.premiumSubscribeButton,
              size: i.Button.Sizes.MEDIUM,
              buttonText: w ? U.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : er ? U.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                percent: null == ei ? void 0 : ei.discount.amount
              }) : U.default.Messages.PREMIUM_UPSELL_GET_NITRO
            })]
          })]
        })
      }), el && (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: y.premiumTier2Divider
        }), (0, a.jsx)(f.default, {
          type: j.PremiumUpsellTypes.CUSTOM_PROFILE_TRY_OUT_UPSELL,
          subscriptionTier: j.PremiumSubscriptionSKUs.TIER_2
        })]
      })]
    })
  })
}