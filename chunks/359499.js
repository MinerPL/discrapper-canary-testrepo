"use strict";
r.r(t), r.d(t, {
  useFreeBoostUserTenureReward: function() {
    return D
  },
  useFreeBoostTenureRewardEntitlement: function() {
    return w
  },
  useTenureRewardBadgeDescription: function() {
    return F
  },
  useShouldShowConfettiAndGlow: function() {
    return M
  },
  useClearTenureBadge: function() {
    return U
  },
  useFetchEntitlementsForTenureReward: function() {
    return p
  }
}), r("222007");
var n = r("884691"),
  i = r("866227"),
  s = r.n(i),
  u = r("446674"),
  l = r("151426"),
  a = r("316718"),
  o = r("10641"),
  c = r("235145"),
  d = r("384997"),
  E = r("697218"),
  _ = r("625634"),
  R = r("437712"),
  C = r("449008"),
  f = r("764364"),
  S = r("908309"),
  T = r("53641"),
  m = r("485426"),
  N = r("646718"),
  h = r("511143");

function D() {
  let e = function() {
      var e;
      let t = (0, u.useStateFromStoresObject)([T.default], () => T.default.getState());
      if (null != t && t.fetchState === T.FetchState.FETCHED) return null !== (e = t.userTenureRewardStatusByRewardId[h.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH]) && void 0 !== e ? e : t.userTenureRewardStatusByRewardId[h.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS]
    }(),
    t = w(),
    r = (0, u.useStateFromStores)([_.default], () => _.default.boostSlots),
    i = n.useMemo(() => {
      let e = Object.values(r);
      return e.some(e => null == e.premiumGuildSubscription)
    }, [r]),
    l = null != t;
  if (l && !1 === i) return {
    nitroTenureStatus: h.NitroRewardStatus.REDEEMED,
    tenureRewardSkuId: t.skuId,
    showNotification: !0
  };
  if (l) return {
    nitroTenureStatus: h.NitroRewardStatus.REDEEMABLE,
    tenureRewardSkuId: t.skuId,
    showNotification: !0
  };
  if (!(null != e && (0, m.isUserTenureRewardStatusActive)(e))) return null;
  else {
    if (null == e.redeemable_at || null == e.next_tenure_reward_id) return null;
    let t = s(e.redeemable_at).diff(s.utc(), "days");
    if (t < 0) return null;
    let r = e.next_tenure_reward_id === h.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH && t <= h.MAX_DAYS_LEFT_TO_SHOW_CARD_1_MONTH_VARIANT,
      n = e.next_tenure_reward_id === h.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS && t <= h.MAX_DAYS_LEFT_TO_SHOW_CARD_3_MONTH_VARIANT;
    return {
      nitroTenureStatus: h.NitroRewardStatus.PENDING,
      tenureRewardSkuId: e.next_tenure_reward_id,
      redeemableInDays: 0 === t ? 1 : t,
      showNotification: n || r
    }
  }
}
let I = new Set;

function w() {
  let e = (0, u.useStateFromStores)([R.default], () => {
      var e;
      return null !== (e = R.default.getForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION)) && void 0 !== e ? e : I
    }, [], C.areSetsEqual),
    t = (0, m.getPremiumTier2Entitlement)(e);
  if (null == t) return;
  let r = (0, m.getTenureRewardEntitlement)([h.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH, h.TenureRewardSKUs.FREE_GUILD_BOOST_3_MONTHS], e);
  return r
}
let A = e => {
    switch (e) {
      case h.NitroRewardStatus.PENDING:
        return [l.DismissibleContent.TENURE_REWARD_PENDING];
      case h.NitroRewardStatus.REDEEMABLE:
        return [l.DismissibleContent.TENURE_REWARD_REDEEMABLE];
      default:
        return []
    }
  },
  F = () => {
    let e = D(),
      t = null == e ? void 0 : e.nitroTenureStatus,
      [r, i] = n.useState(A(t)),
      s = (0, S.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      });
    n.useEffect(() => {
      i(A(t))
    }, [t]);
    let [u] = (0, d.useSelectedDismissibleContent)(r);
    return s ? null != e && !0 === e.showNotification && (u === l.DismissibleContent.TENURE_REWARD_REDEEMABLE || u === l.DismissibleContent.TENURE_REWARD_PENDING) ? (0, m.getTenureRewardBadgeDescription)(e.nitroTenureStatus) : null : null
  },
  M = () => {
    var e;
    let t = null === (e = D()) || void 0 === e ? void 0 : e.nitroTenureStatus,
      r = (0, S.useUserEligibleForNitroTenureRewardCard)({
        location: "Home"
      }),
      [n] = (0, d.useSelectedDismissibleContent)([l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI]);
    return !!r && null != t && t === h.NitroRewardStatus.REDEEMABLE && n === l.DismissibleContent.TENURE_REWARD_REDEEMABLE_CONFETTI
  },
  U = () => {
    let e = D(),
      t = null == e ? void 0 : e.nitroTenureStatus,
      r = A(t),
      [i] = (0, c.useGetDismissibleContent)(r);
    n.useEffect(() => {
      null != e && !0 === e.showNotification && (i === l.DismissibleContent.TENURE_REWARD_REDEEMABLE || i === l.DismissibleContent.TENURE_REWARD_PENDING) && (0, o.markDismissibleContentAsDismissed)(i)
    }, [e, i])
  };

function p() {
  let {
    hasFetchedPremiumApplicationEntitlements: e,
    isFetchingPremiumApplicationEntitlements: t
  } = (0, u.useStateFromStoresObject)([R.default], () => ({
    hasFetchedPremiumApplicationEntitlements: R.default.isFetchedForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION),
    isFetchingPremiumApplicationEntitlements: R.default.isFetchingForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION)
  })), r = (0, u.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return null != e && (0, f.isPremiumExactly)(e, N.PremiumTypes.TIER_2)
  }), i = n.useRef(!1);
  n.useEffect(() => {
    !1 === e && !1 === t && !0 === r && !1 === i.current && (a.fetchUserEntitlementsForApplication(N.PREMIUM_SUBSCRIPTION_APPLICATION), i.current = !0)
  }, [e, t, r])
}