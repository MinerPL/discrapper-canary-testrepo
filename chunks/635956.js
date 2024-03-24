"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
});
var s = l("37983");
l("884691");
var n = l("414456"),
  a = l.n(n),
  i = l("446674"),
  u = l("77078"),
  o = l("79112"),
  r = l("685665"),
  c = l("788506"),
  d = l("649844"),
  T = l("393414"),
  _ = l("797647"),
  E = l("697218"),
  f = l("521012"),
  p = l("471671"),
  S = l("181114"),
  I = l("978679"),
  m = l("216422"),
  P = l("719923"),
  M = l("646718"),
  C = l("49111"),
  R = l("782340"),
  N = l("917746"),
  A = function(e) {
    let {
      isGift: t,
      subscriptionTier: n,
      onClick: A,
      size: L,
      className: U,
      trialId: O,
      isTrialCTA: h,
      buttonText: y,
      buttonTextClassName: b,
      iconClassName: x,
      postSuccessGuild: g,
      onSubscribeModalClose: B,
      premiumModalAnalyticsLocation: v,
      showIcon: j = !0,
      disableShine: D,
      applicationId: G,
      giftMessage: H,
      overrideDisabledButtonText: k,
      shinyButtonClassName: F,
      ...w
    } = e, V = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()), Y = (0, i.useStateFromStores)([p.default], () => p.default.isFocused()), K = (0, i.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), {
      analyticsLocations: W
    } = (0, r.default)(), z = e => {
      if (e.preventDefault(), null == V) {
        (0, T.transitionTo)(C.Routes.LOGIN);
        return
      }
      if (null == A || A(e), (null == K ? void 0 : K.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
        (0, c.trackPremiumSettingsPaneOpened)(), o.default.open(C.UserSettingsSections.PREMIUM), null == B || B(!1);
        return
      }! function(e) {
        let {
          isClaimed: t,
          isVerified: n,
          isGift: a,
          subscriptionTier: i,
          trialId: o,
          postSuccessGuild: r,
          onSubscribeModalClose: c,
          analyticsLocations: T,
          premiumModalAnalyticsLocation: _,
          applicationId: E,
          giftMessage: f
        } = e;
        if (!t) {
          (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await l.el("984599").then(l.bind(l, "984599"));
            return t => {
              let {
                onClose: l,
                ...n
              } = t;
              return (0, s.jsx)(e, {
                ...n,
                onClose: l
              })
            }
          });
          return
        }
        if (!n) {
          (0, u.openModalLazy)(async () => {
            let {
              default: e
            } = await l.el("899917").then(l.bind(l, "899917"));
            return t => {
              let {
                onClose: l,
                ...n
              } = t;
              return (0, s.jsx)(e, {
                ...n,
                onClose: l
              })
            }
          });
          return
        }
        let p = C.AnalyticsObjectTypes.BUY;
        null != o ? p = C.AnalyticsObjectTypes.TRIAL : a && (p = C.AnalyticsObjectTypes.GIFT), (0, d.default)({
          isGift: a,
          initialPlanId: null,
          subscriptionTier: i,
          analyticsLocations: T,
          analyticsObject: {
            object: C.AnalyticsObjects.BUTTON_CTA,
            objectType: p,
            ..._
          },
          trialId: o,
          postSuccessGuild: r,
          onClose: c,
          applicationId: E,
          giftMessage: f
        })
      }({
        isClaimed: V.isClaimed(),
        isVerified: V.verified,
        isGift: t,
        subscriptionTier: n,
        trialId: O,
        postSuccessGuild: g,
        onSubscribeModalClose: B,
        analyticsLocations: W,
        premiumModalAnalyticsLocation: v,
        applicationId: G,
        giftMessage: H
      })
    };
    if (h) return (0, s.jsxs)(u.Button, {
      size: L,
      className: U,
      innerClassName: N.premiumSubscribeButton,
      look: u.Button.Looks.INVERTED,
      onClick: z,
      ...w,
      children: [j && (0, s.jsx)(m.default, {
        className: N.premiumIcon
      }), (0, s.jsx)("span", {
        className: a(N.buttonText, b),
        children: null != y ? y : R.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
      })]
    });
    if (t) return (0, s.jsxs)(u.Button, {
      size: L,
      className: U,
      innerClassName: N.giftButton,
      color: u.Button.Colors.PRIMARY,
      onClick: z,
      ...w,
      children: [(0, s.jsx)(I.default, {
        className: N.giftIcon
      }), (0, s.jsx)("span", {
        className: a(N.buttonText, b),
        children: null != y ? y : R.default.Messages.PREMIUM_GIFTING_BUTTON
      })]
    });
    let Z = R.default.Messages.APPLICATION_STORE_GET_PREMIUM,
      q = null != K ? (0, P.getPremiumPlanItem)(K) : null,
      Q = null != q ? P.default.getPremiumType(q.planId) : null == V ? void 0 : V.premiumType,
      J = n === M.PremiumSubscriptionSKUs.TIER_2 && null != Q && [M.PremiumTypes.TIER_0, M.PremiumTypes.TIER_1].includes(Q);
    J && (Z = R.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
    let X = null != K && K.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, _.isNoneSubscription)(K.planId) && !J,
      $ = X ? null != k ? k : function(e) {
        let {
          ctaSubscriptionSkuId: t,
          currentPremiumType: l
        } = e, s = null, n = null;
        if (null != t && t !== M.PremiumSubscriptionSKUs.LEGACY && t !== M.PremiumSubscriptionSKUs.TIER_0 && t !== M.PremiumSubscriptionSKUs.TIER_1 && t !== M.PremiumSubscriptionSKUs.TIER_2) return {
          disabledButtonText: s,
          disabledButtonTooltipText: n
        };
        let a = null != t ? M.PremiumSubscriptionSKUToPremiumType[(0, P.castPremiumSubscriptionAsSkuId)(t)] : null,
          i = null != a ? M.PremiumTypeOrder[a] : null,
          u = null != l ? M.PremiumTypeOrder[l] : null;
        return null != u && null != i && i < u ? (s = R.default.Messages.APPLICATION_STORE_GET_PREMIUM, n = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != l && a === l ? (s = R.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, n = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != l && l === M.PremiumTypes.TIER_2 && (n = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
          disabledButtonText: s,
          disabledButtonTooltipText: n
        }
      }({
        ctaSubscriptionSkuId: n,
        currentPremiumType: Q
      }) : null;

    function ee(e) {
      var t, l;
      return (0, s.jsxs)(S.default, {
        disabled: X,
        onClick: z,
        innerClassName: N.premiumSubscribeButton,
        color: n === M.PremiumSubscriptionSKUs.TIER_1 ? u.Button.Colors.PRIMARY : u.Button.Colors.GREEN,
        size: L,
        className: F,
        wrapperClassName: U,
        pauseAnimation: !Y || D,
        ...w,
        ...e,
        children: [j && (0, s.jsx)(m.default, {
          className: a(N.premiumIcon, x)
        }), (0, s.jsx)("span", {
          className: a(N.buttonText, b),
          children: null !== (l = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : y) && void 0 !== l ? l : Z
        })]
      })
    }
    return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, s.jsx)(u.Tooltip, {
      text: $.disabledButtonTooltipText,
      children: ee
    }) : ee()
  }