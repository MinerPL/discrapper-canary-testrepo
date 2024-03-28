"use strict";
s.r(t), s.d(t, {
  useClearTenureBadge: function() {
    return x
  },
  useFetchEntitlementsForTenureReward: function() {
    return v
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return P
  },
  useFreeBoostUserTenureReward: function() {
    return g
  },
  useShouldShowConfettiAndGlow: function() {
    return L
  },
  useTenureRewardBadgeDescription: function() {
    return h
  }
}), s("47120");
var a = s("470079"),
  i = s("913527"),
  r = s.n(i),
  n = s("442837"),
  l = s("524437"),
  o = s("496929"),
  u = s("605236"),
  d = s("706140"),
  c = s("243778"),
  _ = s("594174"),
  E = s("314884"),
  T = s("580130"),
  I = s("626135"),
  R = s("823379"),
  S = s("111361"),
  f = s("595878"),
  m = s("513785"),
  N = s("106255"),
  A = s("474936"),
  p = s("735825"),
  C = s("981631");

function g() {
  let e = function() {
      var e;
      let t = (0, n.useStateFromStoresObject)([m.default], () => m.default.getState());
      if (null != t && t.fetchState === m.FetchState.FETCHED) return null !== (e = t.userTenureRewardStatusByRewardId[p.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[p.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = P(),
    s = (0, n.useStateFromStores)([E.default], () => E.default.boostSlots),
    i = a.useMemo(() => Object.values(s).some(e => null == e.premiumGuildSubscription), [s]),
    l = null != t,
    o = {
      redeemableAt: null == e ? void 0 : e.redeemable_at,
      tenureRewardStatusId: null == e ? void 0 : e.id
    };
  if (l && !1 === i) return {
    ...o,
    nitroTenureStatus: p.NitroRewardStatus.REDEEMED,
    tenureRewardSkuId: t.skuId,
    showNotification: !0
  };
  if (l) return {
    ...o,
    nitroTenureStatus: p.NitroRewardStatus.REDEEMABLE,
    tenureRewardSkuId: t.skuId,
    showNotification: !0
  };
  if (!(null != e && (0, N.isUserTenureRewardStatusActive)(e))) return null;
  else {
    if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
    let t = r()(e.redeemable_at).diff(r().utc(), "days");
    if (t < 0) return null;
    let s = e.next_tenure_reward_id === p.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH && t <= p.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT,
      a = e.next_tenure_reward_id === p.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS && t <= p.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT;
    return {
      ...o,
      nitroTenureStatus: p.NitroRewardStatus.PENDING,
      tenureRewardSkuId: e.next_tenure_reward_id,
      redeemableInDays: 0 === t ? 1 : t,
      showNotification: a || s
    }
  }
}
let O = new Set;

function P() {
  let e = (0, n.useStateFromStores)([T.default], () => {
    var e;
    return null !== (e = T.default.getForApplication(A.PREMIUM_SUBSCRIPTION_APPLICATION)) && void 0 !== e ? e : O
  }, [], R.areSetsEqual);
  if (null != (0, N.getPremiumTier2Entitlement)(e)) return (0, N.getTenureRewardEntitlement)([p.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, p.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e)
}
let M = e => {
    switch (e) {
      case p.NitroRewardStatus.PENDING:
        return [l.DismissibleContent.TENURE_REWARD_PENDING];
      case p.NitroRewardStatus.REDEEMABLE:
        return [l.DismissibleContent.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  h = () => {
    let e = g(),
      t = null == e ? void 0 : e.nitroTenureStatus,
      [s, i] = a.useState(M(t)),
      r = (0, f.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    a.useEffect(() => {
      i(M(t))
    }, [t]);
    let [n] = (0, c.useSelectedDismissibleContent)(s);
    return r ? null != e && !0 === e.showNotification && (n === l.DismissibleContent.TENURE_REWARD_REDEEMABLE || n === l.DismissibleContent.TENURE_REWARD_PENDING) ? (0, N.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  L = () => {
    var e;
    let t = null === (e = g()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      s = (0, f.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }),
      [a] = (0, c.useSelectedDismissibleContent)([l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI]);
    return !!s && null != t && t === p.NitroRewardStatus.REDEEMABLE && a === l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  x = () => {
    let e = g(),
      t = M(null == e ? void 0 : e.nitroTenureStatus),
      [s] = (0, d.useGetDismissibleContent)(t),
      i = a.useRef(!1);
    return a.useCallback(() => {
      null != e && !0 === e.showNotification && (s === l.DismissibleContent.TENURE_REWARD_REDEEMABLE || s === l.DismissibleContent.TENURE_REWARD_PENDING) && ((0, u.markDismissibleContentAsDismissed)(s), s === l.DismissibleContent.TENURE_REWARD_PENDING && !1 === i.current && (I.default.track(C.AnalyticEvents.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
        user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
        tenure_reward_id: e.tenureRewardSkuId,
        reward_type: p.NitroRewardType.SERVER_BOOST,
        redeemable_at: null == e ? void 0 : e.redeemableAt
      }), i.current = !0))
    }, [e, s])
  };

function v() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, n.useStateFromStoresObject)([T.default], () => ({
    hasFetchedPremiumApplicationEntitlements: T.default.isFetchedForApplication(A.PREMIUM_SUBSCRIPTION_APPLICATION),
    isFetchingPremiumApplicationEntitlements: T.default.isFetchingForApplication(A.PREMIUM_SUBSCRIPTION_APPLICATION)
  })), s = (0, n.useStateFromStores)([_.default], () => {
    let e = _.default.getCurrentUser();
    return null != e && (0, S.isPremiumExactly)(e, A.PremiumTypes.TIER_2)
  }), i = a.useRef(!1);
  a.useEffect(() => {
    !1 === e && !1 === t && !0 === s && !1 === i.current && (o.fetchUserEntitlementsForApplication(A.PREMIUM_SUBSCRIPTION_APPLICATION), i.current = !0)
  }, [e, t, s])
}