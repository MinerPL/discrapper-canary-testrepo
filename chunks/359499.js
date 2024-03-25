"use strict";
s.r(t), s.d(t, {
  useFreeBoostUserTenureReward: function() {
    return p
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return g
  },
  useTenureRewardBadgeDescription: function() {
    return P
  },
  useShouldShowConfettiAndGlow: function() {
    return M
  },
  useClearTenureBadge: function() {
    return h
  },
  useFetchEntitlementsForTenureReward: function() {
    return L
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
  I = s("449008"),
  f = s("764364"),
  R = s("908309"),
  S = s("53641"),
  m = s("485426"),
  N = s("646718"),
  A = s("511143");

function p() {
  let e = function() {
      var e;
      let t = (0, n.useStateFromStoresObject)([S.default], () => S.default.getState());
      if (null != t && t.fetchState === S.FetchState.FETCHED) return null !== (e = t.userTenureRewardStatusByRewardId[A.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[A.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = g(),
    s = (0, n.useStateFromStores)([E.default], () => E.default.boostSlots),
    r = a.useMemo(() => {
      let e = Object.values(s);
      return e.some(e => null == e.premiumGuildSubscription)
    }, [s]),
    l = null != t;
  if (l && !1 === r) return {
    nitroTenureStatus: A.NitroRewardStatus.REDEEMED,
    tenureRewardSkuId: t.skuId,
    showNotification: !0
  };
  if (l) return {
    nitroTenureStatus: A.NitroRewardStatus.REDEEMABLE,
    tenureRewardSkuId: t.skuId,
    showNotification: !0
  };
  if (!(null != e && (0, m.isUserTenureRewardStatusActive)(e))) return null;
  else {
    if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
    let t = i(e.redeemable_at).diff(i.utc(), "days");
    if (t < 0) return null;
    let s = e.next_tenure_reward_id === A.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH && t <= A.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT,
      a = e.next_tenure_reward_id === A.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS && t <= A.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT;
    return {
      nitroTenureStatus: A.NitroRewardStatus.PENDING,
      tenureRewardSkuId: e.next_tenure_reward_id,
      redeemableInDays: 0 === t ? 1 : t,
      showNotification: a || s
    }
  }
}
let C = new Set;

function g() {
  let e = (0, n.useStateFromStores)([T.default], () => {
      var e;
      return null !== (e = T.default.getForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION)) && void 0 !== e ? e : C
    }, [], I.areSetsEqual),
    t = (0, m.getPremiumTier2Entitlement)(e);
  if (null == t) return;
  let s = (0, m.getTenureRewardEntitlement)([A.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, A.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e);
  return s
}
let O = e => {
    switch (e) {
      case A.NitroRewardStatus.PENDING:
        return [l.DismissibleContent.TENURE_REWARD_PENDING];
      case A.NitroRewardStatus.REDEEMABLE:
        return [l.DismissibleContent.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  P = () => {
    let e = p(),
      t = null == e ? void 0 : e.nitroTenureStatus,
      [s, r] = a.useState(O(t)),
      i = (0, R.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    a.useEffect(() => {
      r(O(t))
    }, [t]);
    let [n] = (0, c.useSelectedDismissibleContent)(s);
    return i ? null != e && !0 === e.showNotification && (n === l.DismissibleContent.TENURE_REWARD_REDEEMABLE || n === l.DismissibleContent.TENURE_REWARD_PENDING) ? (0, m.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  M = () => {
    var e;
    let t = null === (e = p()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      s = (0, R.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }),
      [a] = (0, c.useSelectedDismissibleContent)([l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI]);
    return !!s && null != t && t === A.NitroRewardStatus.REDEEMABLE && a === l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  h = () => {
    let e = p(),
      t = null == e ? void 0 : e.nitroTenureStatus,
      s = O(t),
      [r] = (0, d.useGetDismissibleContent)(s);
    a.useEffect(() => {
      null != e && !0 === e.showNotification && (r === l.DismissibleContent.TENURE_REWARD_REDEEMABLE || r === l.DismissibleContent.TENURE_REWARD_PENDING) && (0, u.markDismissibleContentAsDismissed)(r)
    }, [e, r])
  };

function L() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, n.useStateFromStoresObject)([T.default], () => ({
    hasFetchedPremiumApplicationEntitlements: T.default.isFetchedForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION),
    isFetchingPremiumApplicationEntitlements: T.default.isFetchingForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION)
  })), s = (0, n.useStateFromStores)([_.default], () => {
    let e = _.default.getCurrentUser();
    return null != e && (0, f.isPremiumExactly)(e, N.PremiumTypes.TIER_2)
  }), r = a.useRef(!1);
  a.useEffect(() => {
    !1 === e && !1 === t && !0 === s && !1 === r.current && (o.fetchUserEntitlementsForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION), r.current = !0)
  }, [e, t, s])
}