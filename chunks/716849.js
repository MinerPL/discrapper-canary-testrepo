"use strict";
n.r(t), n.d(t, {
  NON_SUBSCRIBER_SENTINEL: function() {
    return S
  },
  maybeFetchPremiumLikelihood: function() {
    return p
  },
  useMaybeFetchPremiumLikelihood: function() {
    return T
  }
});
var u = n("884691"),
  r = n("65597"),
  i = n("872717"),
  a = n("913144"),
  o = n("775433"),
  s = n("697218"),
  c = n("10514"),
  l = n("764364"),
  d = n("719923"),
  f = n("676572"),
  E = n("646718"),
  _ = n("49111");
let S = "nonSubscriber";
async function I() {
  try {
    a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
    });
    let {
      body: e
    } = await i.HTTP.get({
      url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
    });
    a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
      premiumLikelihood: function(e) {
        return {
          [S]: e.non_subscriber,
          [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
          [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
        }
      }(e)
    })
  } catch (e) {
    404 === e.status ? a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
    }) : a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
    })
  }
}

function p(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.getCurrentConfig({
    location: "443cca_1"
  }, {
    autoTrackExposure: !1
  }), u = f.default.shouldFetchPremiumLikelihood(), r = s.default.getCurrentUser();
  h(r, u, t, n)
}

function T(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.useExperiment({
    location: "443cca_2"
  }, {
    autoTrackExposure: !1
  }), i = (0, r.useStateFromStores)([f.default], () => f.default.shouldFetchPremiumLikelihood()), a = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser());
  u.useEffect(() => {
    h(a, i, t, n)
  }, [a, i, t, n])
}

function h(e, t, n, u) {
  null != e && !(0, l.isPremium)(e) && n && (t && I(), u && (!c.default.isLoadedForSKU((0, d.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_0)) && !c.default.isFetchingForSKU((0, d.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_0)) && (0, o.fetchSubscriptionPlansForSKU)((0, d.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_0)), !c.default.isLoadedForSKU((0, d.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_2)) && !c.default.isFetchingForSKU((0, d.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_2)) && (0, o.fetchSubscriptionPlansForSKU)((0, d.castPremiumSubscriptionAsSkuId)(E.PremiumSubscriptionSKUs.TIER_2))))
}