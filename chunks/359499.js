"use strict";
s.r(t), s.d(t, {
  useFreeBoostUserTenureReward: function() {
    return g
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return P
  },
  useTenureRewardBadgeDescription: function() {
    return h
  },
  useShouldShowConfettiAndGlow: function() {
    return L
  },
  useClearTenureBadge: function() {
    return x
  },
  useFetchEntitlementsForTenureReward: function() {
    return v
  }
}), s("222007");
var a = s("884691"),
  r = s("866227"),
  i = s.n(r),
  n = s("446674"),
  l = s("151426"),
  o = s("316718"),
  u = s("10641"),
  d = s("235145"),
  c = s("384997"),
  _ = s("697218"),
  E = s("625634"),
  T = s("437712"),
  I = s("599110"),
  f = s("449008"),
  R = s("764364"),
  S = s("908309"),
  m = s("53641"),
  N = s("485426"),
  A = s("646718"),
  p = s("511143"),
  C = s("49111");

function g() {
  let e = function() {
      var e;
      let t = (0, n.useStateFromStoresObject)([m.default], () => m.default.getState());
      if (null != t && t.fetchState === m.FetchState.FETCHED) return null !== (e = t.userTenureRewardStatusByRewardId[p.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[p.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = P(),
    s = (0, n.useStateFromStores)([E.default], () => E.default.boostSlots),
    r = a.useMemo(() => {
      let e = Object.values(s);
      return e.some(e => null == e.premiumGuildSubscription)
    }, [s]),
    l = null != t,
    o = {
      redeemableAt: null == e ? void 0 : e.redeemable_at,
      tenureRewardStatusId: null == e ? void 0 : e.id
    };
  if (l && !1 === r) return {
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
    let t = i(e.redeemable_at).diff(i.utc(), "days");
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
    }, [], f.areSetsEqual),
    t = (0, N.getPremiumTier2Entitlement)(e);
  if (null == t) return;
  let s = (0, N.getTenureRewardEntitlement)([p.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, p.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e);
  return s
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
      [s, r] = a.useState(M(t)),
      i = (0, S.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    a.useEffect(() => {
      r(M(t))
    }, [t]);
    let [n] = (0, c.useSelectedDismissibleContent)(s);
    return i ? null != e && !0 === e.showNotification && (n === l.DismissibleContent.TENURE_REWARD_REDEEMABLE || n === l.DismissibleContent.TENURE_REWARD_PENDING) ? (0, N.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  L = () => {
    var e;
    let t = null === (e = g()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      s = (0, S.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }),
      [a] = (0, c.useSelectedDismissibleContent)([l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI]);
    return !!s && null != t && t === p.NitroRewardStatus.REDEEMABLE && a === l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  x = () => {
    let e = g(),
      t = null == e ? void 0 : e.nitroTenureStatus,
      s = M(t),
      [r] = (0, d.useGetDismissibleContent)(s),
      i = a.useRef(!1),
      n = a.useCallback(() => {
        null != e && !0 === e.showNotification && (r === l.DismissibleContent.TENURE_REWARD_REDEEMABLE || r === l.DismissibleContent.TENURE_REWARD_PENDING) && ((0, u.markDismissibleContentAsDismissed)(r), r === l.DismissibleContent.TENURE_REWARD_PENDING && !1 === i.current && (I.default.track(C.AnalyticEvents.USER_NITRO_TENURE_REWARD_ACKNOWLEDGED, {
          user_tenure_reward_id: null == e ? void 0 : e.tenureRewardStatusId,
          tenure_reward_id: e.tenureRewardSkuId,
          reward_type: p.NitroRewardType.SERVER_BOOST,
          redeemable_at: null == e ? void 0 : e.redeemableAt
        }), i.current = !0))
      }, [e, r]);
    return n
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
    return null != e && (0, R.isPremiumExactly)(e, A.PremiumTypes.TIER_2)
  }), r = a.useRef(!1);
  a.useEffect(() => {
    !1 === e && !1 === t && !0 === s && !1 === r.current && (o.fetchUserEntitlementsForApplication(A.PREMIUM_SUBSCRIPTION_APPLICATION), r.current = !0)
  }, [e, t, s])
}