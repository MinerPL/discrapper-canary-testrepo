"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(230711),
  u = n(906732),
  _ = n(543241),
  d = n(963249),
  c = n(703656),
  E = n(301766),
  I = n(594174),
  T = n(78839),
  h = n(451478),
  S = n(559629),
  f = n(466111),
  N = n(74538),
  A = n(474936),
  m = n(981631),
  O = n(689938),
  R = n(928069);
t.Z = function(e) {
  let {
    isGift: t,
    subscriptionTier: r,
    onClick: C,
    size: p,
    className: g,
    trialId: L,
    isTrialCTA: v,
    buttonText: D,
    buttonTextClassName: M,
    iconClassName: P,
    postSuccessGuild: y,
    onSubscribeModalClose: U,
    premiumModalAnalyticsLocation: b,
    showIcon: G = !0,
    disableShine: w,
    applicationId: k,
    giftMessage: B,
    overrideDisabledButtonText: x,
    shinyButtonClassName: V,
    onClickOverride: Z,
    showGradient: H = !1,
    ...F
  } = e, Y = (0, o.e7)([I.default], () => I.default.getCurrentUser()), j = (0, o.e7)([h.Z], () => h.Z.isFocused()), W = (0, o.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()), {
    analyticsLocations: K
  } = (0, u.ZP)(), z = e => {
    if (e.preventDefault(), null == Y) {
      (0, c.uL)(m.Z5c.LOGIN);
      return
    }
    if (null == C || C(e), (null == W ? void 0 : W.status) === m.O0b.ACCOUNT_HOLD) {
      (0, _.A3)(), l.Z.open(m.oAB.PREMIUM), null == U || U(!1);
      return
    }! function(e) {
      let {
        isClaimed: t,
        isVerified: r,
        isGift: s,
        subscriptionTier: o,
        trialId: l,
        postSuccessGuild: u,
        onSubscribeModalClose: _,
        analyticsLocations: c,
        premiumModalAnalyticsLocation: E,
        applicationId: I,
        giftMessage: T
      } = e;
      if (!t) {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("96645")]).then(n.bind(n, 918995));
          return t => {
            let {
              onClose: n,
              ...r
            } = t;
            return (0, i.jsx)(e, {
              ...r,
              onClose: n
            })
          }
        });
        return
      }
      if (!r) {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("35822")]).then(n.bind(n, 444688));
          return t => {
            let {
              onClose: n,
              ...r
            } = t;
            return (0, i.jsx)(e, {
              ...r,
              onClose: n
            })
          }
        });
        return
      }
      let h = m.Qqv.BUY;
      null != l ? h = m.Qqv.TRIAL : s && (h = m.Qqv.GIFT), (0, d.Z)({
        isGift: s,
        initialPlanId: null,
        subscriptionTier: o,
        analyticsLocations: c,
        analyticsObject: {
          object: m.qAy.BUTTON_CTA,
          objectType: h,
          ...E
        },
        trialId: l,
        postSuccessGuild: u,
        onClose: _,
        applicationId: I,
        giftMessage: T
      })
    }({
      isClaimed: Y.isClaimed(),
      isVerified: Y.verified,
      isGift: t,
      subscriptionTier: r,
      trialId: L,
      postSuccessGuild: y,
      onSubscribeModalClose: U,
      analyticsLocations: K,
      premiumModalAnalyticsLocation: b,
      applicationId: k,
      giftMessage: B
    })
  };
  if (v) return (0, i.jsxs)(a.Button, {
    size: p,
    className: g,
    innerClassName: R.premiumSubscribeButton,
    color: a.Button.Colors.BRAND_INVERTED,
    onClick: null != Z ? Z : z,
    ...F,
    children: [G && (0, i.jsx)(f.Z, {
      className: R.premiumIcon
    }), (0, i.jsx)("span", {
      className: s()(R.buttonText, M),
      children: null != D ? D : O.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
    })]
  });
  if (t) return (0, i.jsxs)(a.Button, {
    size: p,
    className: g,
    innerClassName: R.giftButton,
    color: a.Button.Colors.PRIMARY,
    onClick: null != Z ? Z : z,
    ...F,
    children: [(0, i.jsx)(S.Z, {
      className: R.giftIcon
    }), (0, i.jsx)("span", {
      className: s()(R.buttonText, M),
      children: null != D ? D : O.Z.Messages.PREMIUM_GIFTING_BUTTON
    })]
  });
  let q = O.Z.Messages.APPLICATION_STORE_GET_PREMIUM,
    X = null != W ? (0, N.Af)(W) : null,
    Q = null != X ? N.ZP.getPremiumType(X.planId) : null == Y ? void 0 : Y.premiumType,
    J = r === A.Si.TIER_2 && null != Q && [A.p9.TIER_0, A.p9.TIER_1].includes(Q);
  J && (q = O.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE);
  let $ = null != W && W.status !== m.O0b.ACCOUNT_HOLD && !(0, E.Q0)(W.planId) && !J,
    ee = $ ? null != x ? x : function(e) {
      let {
        ctaSubscriptionSkuId: t,
        currentPremiumType: n
      } = e, i = null, r = null;
      if (null != t && t !== A.Si.LEGACY && t !== A.Si.TIER_0 && t !== A.Si.TIER_1 && t !== A.Si.TIER_2) return {
        disabledButtonText: i,
        disabledButtonTooltipText: r
      };
      let s = null != t ? A.y7[(0, N.Wz)(t)] : null,
        o = null != s ? A.$e[s] : null,
        a = null != n ? A.$e[n] : null;
      return null != a && null != o && o < a ? (i = O.Z.Messages.APPLICATION_STORE_GET_PREMIUM, r = O.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != s && null != n && s === n ? (i = O.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = O.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == s && null != n && n === A.p9.TIER_2 && (r = O.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
        disabledButtonText: i,
        disabledButtonTooltipText: r
      }
    }({
      ctaSubscriptionSkuId: r,
      currentPremiumType: Q
    }) : null;

  function et(e) {
    var t, n;
    return (0, i.jsxs)(a.ShinyButton, {
      disabled: $,
      onClick: null != Z ? Z : z,
      innerClassName: R.premiumSubscribeButton,
      color: r === A.Si.TIER_1 ? a.Button.Colors.PRIMARY : a.Button.Colors.GREEN,
      size: p,
      className: V,
      wrapperClassName: s()({
        [R.tier2Gradient]: H && r === A.Si.TIER_2,
        [R.tier1Gradient]: H && r === A.Si.TIER_1
      }, g),
      pauseAnimation: !j || w,
      ...F,
      ...e,
      children: [G && (0, i.jsx)(f.Z, {
        className: s()(R.premiumIcon, P)
      }), (0, i.jsx)("span", {
        className: s()(R.buttonText, M),
        children: null !== (n = null !== (t = null == ee ? void 0 : ee.disabledButtonText) && void 0 !== t ? t : D) && void 0 !== n ? n : q
      })]
    })
  }
  return (null == ee ? void 0 : ee.disabledButtonTooltipText) != null ? (0, i.jsx)(a.Tooltip, {
    text: ee.disabledButtonTooltipText,
    children: et
  }) : et()
}