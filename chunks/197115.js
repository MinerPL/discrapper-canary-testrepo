var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(481060),
  l = n(230711),
  u = n(906732),
  c = n(543241),
  d = n(963249),
  _ = n(703656),
  E = n(301766),
  f = n(594174),
  h = n(78839),
  p = n(451478),
  m = n(74538),
  I = n(639119),
  T = n(474936),
  g = n(981631),
  S = n(689938),
  A = n(614623);
t.Z = function(e) {
  let {
isGift: t,
subscriptionTier: i,
onClick: N,
size: v,
className: O,
isTrialCTA: R,
buttonText: C,
buttonTextClassName: y,
iconClassName: D,
postSuccessGuild: L,
onSubscribeModalClose: b,
premiumModalAnalyticsLocation: M,
showIcon: P = !0,
disableShine: U,
applicationId: w,
giftMessage: x,
overrideDisabledButtonText: G,
shinyButtonClassName: k,
showGradient: B = !1,
...F
  } = e, V = (0, s.e7)([f.default], () => f.default.getCurrentUser()), H = (0, s.e7)([p.Z], () => p.Z.isFocused()), Z = (0, s.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()), {
analyticsLocations: Y
  } = (0, u.ZP)(), j = (0, I.N)(), W = !t && null != j && null != i && T.nG[j.trial_id].skus.includes(i), K = e => {
var a;
if (e.preventDefault(), null == V) {
  (0, _.uL)(g.Z5c.LOGIN);
  return;
}
if (null == N || N(e), (null == Z ? void 0 : Z.status) === g.O0b.ACCOUNT_HOLD) {
  (0, c.A3)(), l.Z.open(g.oAB.PREMIUM), null == b || b(!1);
  return;
}! function(e) {
  let {
    isClaimed: t,
    isVerified: i,
    isGift: a,
    subscriptionTier: s,
    trialId: l,
    postSuccessGuild: u,
    onSubscribeModalClose: c,
    analyticsLocations: _,
    premiumModalAnalyticsLocation: E,
    applicationId: f,
    giftMessage: h
  } = e;
  if (!t) {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('69417').then(n.bind(n, 918995));
      return t => {
        let {
          onClose: n,
          ...i
        } = t;
        return (0, r.jsx)(e, {
          ...i,
          onClose: n
        });
      };
    });
    return;
  }
  if (!i) {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('20102').then(n.bind(n, 444688));
      return t => {
        let {
          onClose: n,
          ...i
        } = t;
        return (0, r.jsx)(e, {
          ...i,
          onClose: n
        });
      };
    });
    return;
  }
  let p = g.Qqv.BUY;
  null != l ? p = g.Qqv.TRIAL : a && (p = g.Qqv.GIFT), (0, d.Z)({
    isGift: a,
    initialPlanId: null,
    subscriptionTier: s,
    analyticsLocations: _,
    analyticsObject: {
      object: g.qAy.BUTTON_CTA,
      objectType: p,
      ...E
    },
    trialId: l,
    postSuccessGuild: u,
    onClose: c,
    applicationId: f,
    giftMessage: h
  });
}({
  isClaimed: V.isClaimed(),
  isVerified: V.verified,
  isGift: t,
  subscriptionTier: i,
  trialId: W ? null === (a = j.subscription_trial) || void 0 === a ? void 0 : a.id : null,
  postSuccessGuild: L,
  onSubscribeModalClose: b,
  analyticsLocations: Y,
  premiumModalAnalyticsLocation: M,
  applicationId: w,
  giftMessage: x
});
  };
  if (R)
return (0, r.jsxs)(o.Button, {
  size: v,
  className: O,
  innerClassName: A.premiumSubscribeButton,
  color: o.Button.Colors.BRAND_INVERTED,
  onClick: K,
  ...F,
  children: [
    P && (0, r.jsx)(o.NitroWheelIcon, {
      size: 'md',
      color: 'currentColor',
      className: A.premiumIcon
    }),
    (0, r.jsx)('span', {
      className: a()(A.buttonText, y),
      children: null != C ? C : S.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
    })
  ]
});
  if (t)
return (0, r.jsxs)(o.Button, {
  size: v,
  className: O,
  innerClassName: A.giftButton,
  color: o.Button.Colors.PRIMARY,
  onClick: K,
  ...F,
  children: [
    (0, r.jsx)(o.GiftIcon, {
      size: 'md',
      color: 'currentColor',
      className: A.giftIcon
    }),
    (0, r.jsx)('span', {
      className: a()(A.buttonText, y),
      children: null != C ? C : S.Z.Messages.PREMIUM_GIFTING_BUTTON
    })
  ]
});
  let z = S.Z.Messages.APPLICATION_STORE_GET_PREMIUM,
q = null != Z ? (0, m.Af)(Z) : null,
Q = null != q ? m.ZP.getPremiumType(q.planId) : null == V ? void 0 : V.premiumType,
X = i === T.Si.TIER_2 && null != Q && [
  T.p9.TIER_0,
  T.p9.TIER_1
].includes(Q);
  X && (z = S.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE);
  let $ = null != Z && Z.status !== g.O0b.ACCOUNT_HOLD && !(0, E.Q0)(Z.planId) && !X,
J = $ ? null != G ? G : function(e) {
  let {
    ctaSubscriptionSkuId: t,
    currentPremiumType: n
  } = e, r = null, i = null;
  if (null != t && t !== T.Si.LEGACY && t !== T.Si.TIER_0 && t !== T.Si.TIER_1 && t !== T.Si.TIER_2)
    return {
      disabledButtonText: r,
      disabledButtonTooltipText: i
    };
  let a = null != t ? T.y7[(0, m.Wz)(t)] : null,
    s = null != a ? T.$e[a] : null,
    o = null != n ? T.$e[n] : null;
  return null != o && null != s && s < o ? (r = S.Z.Messages.APPLICATION_STORE_GET_PREMIUM, i = S.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != n && a === n ? (r = S.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = S.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != n && n === T.p9.TIER_2 && (i = S.Z.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
    disabledButtonText: r,
    disabledButtonTooltipText: i
  };
}({
  ctaSubscriptionSkuId: i,
  currentPremiumType: Q
}) : null;

  function ee(e) {
var t, n;
return (0, r.jsxs)(o.ShinyButton, {
  disabled: $,
  onClick: K,
  innerClassName: A.premiumSubscribeButton,
  color: i === T.Si.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
  size: v,
  className: k,
  wrapperClassName: a()({
    [A.tier2Gradient]: B && i === T.Si.TIER_2,
    [A.tier1Gradient]: B && i === T.Si.TIER_1
  }, O),
  pauseAnimation: !H || U,
  ...F,
  ...e,
  children: [
    P && (0, r.jsx)(o.NitroWheelIcon, {
      size: 'md',
      color: 'currentColor',
      className: a()(A.premiumIcon, D)
    }),
    (0, r.jsx)('span', {
      className: a()(A.buttonText, y),
      children: null !== (n = null !== (t = null == J ? void 0 : J.disabledButtonText) && void 0 !== t ? t : C) && void 0 !== n ? n : z
    })
  ]
});
  }
  return (null == J ? void 0 : J.disabledButtonTooltipText) != null ? (0, r.jsx)(o.Tooltip, {
text: J.disabledButtonTooltipText,
children: ee
  }) : ee();
};