"use strict";
r.r(t), r.d(t, {
  getTenureRewardDimissibleContentType: function() {
    return L
  },
  useClearTenureBadge: function() {
    return F
  },
  useFetchEntitlementsForTenureReward: function() {
    return U
  },
  useFetchTenureRewardStatusDetails: function() {
    return M
  },
  useFreeBoostDaysPercentage: function() {
    return g
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return I
  },
  useFreeBoostUserTenureReward: function() {
    return A
  },
  useShouldShowConfettiAndGlow: function() {
    return y
  },
  useTenureRewardBadgeDescription: function() {
    return D
  }
}), r("47120");
var s = r("470079"),
  i = r("913527"),
  n = r.n(i),
  l = r("442837"),
  a = r("524437"),
  o = r("496929"),
  u = r("607070"),
  d = r("605236"),
  c = r("706140"),
  _ = r("243778"),
  C = r("594174"),
  f = r("314884"),
  p = r("580130"),
  E = r("626135"),
  x = r("823379"),
  R = r("111361"),
  h = r("595878"),
  T = r("944880"),
  m = r("513785"),
  S = r("106255"),
  O = r("474936"),
  w = r("735825"),
  N = r("981631");

function A() {
  let e = function() {
      var e;
      let t = (0, l.useStateFromStoresObject)([m.default], () => m.default.getState());
      if (null != t) return null !== (e = t.userTenureRewardStatusByRewardId[w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = I(),
    r = (0, l.useStateFromStores)([f.default], () => f.default.boostSlots),
    i = s.useMemo(() => Object.values(r).some(e => null == e.premiumGuildSubscription), [r]),
    a = null != t,
    o = a && !1 === i;
  return s.useMemo(() => {
    let r = {
      redeemableAt: null == e ? void 0 : e.redeemable_at,
      tenureRewardStatusId: null == e ? void 0 : e.id
    };
    if (o) return {
      ...r,
      nitroTenureStatus: w.NitroRewardStatus.REDEEMED,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (a) return {
      ...r,
      nitroTenureStatus: w.NitroRewardStatus.REDEEMABLE,
      tenureRewardSkuId: t.skuId,
      showNotification: !0,
      showCard: !0
    };
    if (!(null != e && (0, S.isUserTenureRewardStatusActive)(e))) return null;
    else {
      if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
      let t = n()(e.redeemable_at).diff(n().utc(), "days"),
        s = null != e.redeemable_in_ms ? Math.ceil(n().duration(e.redeemable_in_ms).asDays()) : t;
      if (t < 0) return null;
      let i = !1,
        l = !1;
      return e.next_tenure_reward_id === w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH ? (l = t <= w.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_1_MONTH_VARIANT, i = t <= w.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT) : e.next_tenure_reward_id === w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS && (l = t <= w.MAX_DAYS_LEFT_TO_SHOW_NOTIFICATION_3_MONTH_VARIANT, i = t <= w.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT), {
        ...r,
        nitroTenureStatus: w.NitroRewardStatus.PENDING,
        tenureRewardSkuId: e.next_tenure_reward_id,
        redeemableInDays: 0 === s ? 1 : s,
        showNotification: l,
        showCard: i
      }
    }
  }, [a, t, e, o])
}

function g(e) {
  let {
    showAnimations: t
  } = e, r = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion), s = A();
  if (null == s) return;
  let {
    redeemableInDays: i = 0,
    tenureRewardSkuId: n
  } = s, a = w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === n ? w.NUM_DAYS_REQUIRED_1_MONTH_VARIANT : w.NUM_DAYS_3_REQUIRED_MONTH_VARIANT, o = Math.min(a, Math.max(a - i, 0)), d = 100 * o / a;
  return {
    initialPercentage: t && !r ? 100 * Math.max(o - .25 * a, 0) / a : d,
    percentage: d
  }
}
let j = new Set;

function I() {
  let e = (0, l.useStateFromStores)([p.default], () => {
      var e;
      return null !== (e = p.default.getForApplication(O.PREMIUM_SUBSCRIPTION_APPLICATION)) && void 0 !== e ? e : j
    }, [], x.areSetsEqual),
    t = (0, l.useStateFromStores)([C.default], () => {
      let e = C.default.getCurrentUser();
      return null != e && (0, R.isPremiumExactly)(e, O.PremiumTypes.TIER_2)
    });
  if (null != (0, S.getPremiumTier2Entitlement)(e) || !!t) return (0, S.getTenureRewardEntitlement)([w.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, w.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e)
}
let L = e => {
    if (null == e || (null == e ? void 0 : e.showNotification) === !1) return [];
    switch (e.nitroTenureStatus) {
      case w.NitroRewardStatus.PENDING:
        return [a.DismissibleContent.TENURE_REWARD_PENDING];
      case w.NitroRewardStatus.REDEEMABLE:
        return [a.DismissibleContent.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  D = () => {
    let e = A(),
      [t, r] = s.useState(L(e)),
      i = (0, h.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    s.useEffect(() => {
      !1 !== i && r(L(e))
    }, [e, i]);
    let [n] = (0, _.useSelectedDismissibleContent)(i ? t : []);
    return i ? null != e && !0 === e.showNotification && (n === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || n === a.DismissibleContent.TENURE_REWARD_PENDING) ? (0, S.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  y = () => {
    var e;
    let t = null === (e = A()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      r = (0, h.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }) && null != t && t === w.NitroRewardStatus.REDEEMABLE,
      [s] = (0, _.useSelectedDismissibleContent)(r ? [a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI] : []);
    return !!r && s === a.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  F = () => {
    let e = A(),
      t = s.useMemo(() => L(e), [e]),
      [r] = (0, c.useGetDismissibleContent)(t),
      i = s.useRef(!1);
    return s.useCallback(() => {
      null != e && !0 === e.showNotification && (r === a.DismissibleContent.TENURE_REWARD_REDEEMABLE || r === a.DismissibleContent.TENURE_REWARD_PENDING) && ((0, d.markDismissibleContentAsDismissed)(r), r === a.DismissibleContent.TENURE_REWARD_PENDING && !1 === i.current && (E.default.track(N.AnalyticEvents.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
        tenure_reward_id: e.tenureRewardSkuId,
        reward_type: w.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == e ? void 0 : e.redeemableAt
      }), i.current = !0))
    }, [e, r])
  };

function U() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, l.useStateFromStoresObject)([p.default], () => ({
    hasFetchedPremiumApplicationEntitlements: p.default.isFetchedForApplication(O.PREMIUM_SUBSCRIPTION_APPLICATION),
    isFetchingPremiumApplicationEntitlements: p.default.isFetchingForApplication(O.PREMIUM_SUBSCRIPTION_APPLICATION)
  })), r = (0, l.useStateFromStores)([C.default], () => {
    let e = C.default.getCurrentUser();
    return null != e && (0, R.isPremiumExactly)(e, O.PremiumTypes.TIER_2)
  }), i = s.useRef(!1);
  s.useEffect(() => {
    !1 === e && !1 === t && !0 === r && !1 === i.current && (o.fetchUserEntitlementsForApplication(O.PREMIUM_SUBSCRIPTION_APPLICATION), i.current = !0)
  }, [e, t, r])
}

function M() {
  var e;
  U();
  let t = A(),
    r = null !== (e = null == t ? void 0 : t.showCard) && void 0 !== e && e;
  s.useEffect(() => {
    r && T.default.forceRefreshIfOutdated()
  }, [r])
}