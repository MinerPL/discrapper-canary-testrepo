"use strict";
n.r(t), n.d(t, {
  StreamQuality: function() {
    return r
  },
  castPremiumSubscriptionAsSkuId: function() {
    return eG
  },
  coerceExistingItemsToNewItemInterval: function() {
    return ey
  },
  experimentalGetPrices: function() {
    return Y
  },
  formatIntervalDuration: function() {
    return eO
  },
  formatTrialCtaIntervalDuration: function() {
    return ep
  },
  formatTrialOfferIntervalDuration: function() {
    return eN
  },
  getBillingGracePeriodDaysAndExpiresDate: function() {
    return ed
  },
  getBillingReviewSubheader: function() {
    return eA
  },
  getDefaultPrice: function() {
    return F
  },
  getDiscountIntervalString: function() {
    return j
  },
  getDisplayName: function() {
    return Z
  },
  getDisplayNameFromSku: function() {
    return X
  },
  getDisplayPremiumType: function() {
    return q
  },
  getExternalPlanDisplayName: function() {
    return et
  },
  getExternalSubscriptionMethodUrl: function() {
    return eC
  },
  getFormattedPriceForPlan: function() {
    return eI
  },
  getFormattedRateForPlan: function() {
    return eT
  },
  getIntervalForInvoice: function() {
    return em
  },
  getIntervalString: function() {
    return W
  },
  getIntervalStringAsNoun: function() {
    return K
  },
  getItemsFromNewAdditionalPlans: function() {
    return eg
  },
  getItemsWithUpsertedPlanIdForGroup: function() {
    return ev
  },
  getItemsWithUpsertedPremiumGuildPlan: function() {
    return eM
  },
  getItemsWithUpsertedPremiumPlanId: function() {
    return eD
  },
  getItemsWithoutPremiumPlanItem: function() {
    return eL
  },
  getMaxFileSizeForPremiumType: function() {
    return eP
  },
  getNumPremiumGuildSubscriptions: function() {
    return ea
  },
  getPlanDescriptionFromInvoice: function() {
    return ee
  },
  getPremiumGuildHeaderDescription: function() {
    return eE
  },
  getPremiumPlanItem: function() {
    return x
  },
  getPremiumPlanOptions: function() {
    return en
  },
  getPremiumSkuIdForSubscription: function() {
    return eb
  },
  getPremiumType: function() {
    return z
  },
  getPremiumTypeDisplayName: function() {
    return J
  },
  getPrice: function() {
    return H
  },
  getTierDisplayName: function() {
    return Q
  },
  hasPremiumSubscriptionToDisplay: function() {
    return eR
  },
  isPremium: function() {
    return v.isPremium
  },
  isPremiumAtLeast: function() {
    return v.isPremiumAtLeast
  },
  isPremiumBaseSubscriptionPlan: function() {
    return eo
  },
  isPremiumExactly: function() {
    return v.isPremiumExactly
  },
  isPremiumGuildSubscriptionCanceled: function() {
    return ec
  },
  isPremiumGuildSubscriptionPlan: function() {
    return el
  },
  isPremiumSubscriptionPlan: function() {
    return eu
  },
  isPrepaidPaymentSource: function() {
    return e_
  },
  isSubscriptionStatusFailedPayment: function() {
    return eS
  }
}), n("411104"), n("47120"), n("733860"), n("724458"), n("653041");
var i, r, a, s, o = n("512722"),
  l = n.n(o),
  u = n("913527"),
  d = n.n(u),
  _ = n("848246");
n("442837");
var c = n("710845"),
  E = n("114064"),
  I = n("803905"),
  T = n("424082"),
  f = n("439017"),
  S = n("301766"),
  h = n("594174"),
  A = n("351402"),
  m = n("853872"),
  N = n("509545"),
  p = n("78839"),
  O = n("122289"),
  C = n("55935"),
  R = n("424218"),
  g = n("358085"),
  L = n("380684"),
  v = n("111361"),
  D = n("74538"),
  M = n("937615"),
  y = n("981631"),
  P = n("334431"),
  U = n("474936"),
  b = n("231338"),
  G = n("689938");
let w = {
    PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
    BILLING_HISTORY: "https://support.apple.com/HT201266",
    SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
  },
  k = {
    SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
    PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
    BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
  },
  B = new c.default("PremiumUtils.tsx"),
  V = {
    [U.SubscriptionPlans.NONE_MONTH]: [U.SubscriptionPlans.NONE_YEAR, U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, U.SubscriptionPlans.PREMIUM_YEAR_TIER_1, U.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [U.SubscriptionPlans.NONE_YEAR]: [U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, U.SubscriptionPlans.PREMIUM_YEAR_TIER_1, U.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [U.SubscriptionPlans.PREMIUM_MONTH_TIER_0]: [U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, U.SubscriptionPlans.PREMIUM_YEAR_TIER_1, U.SubscriptionPlans.PREMIUM_MONTH_TIER_1, U.SubscriptionPlans.PREMIUM_YEAR_TIER_0],
    [U.SubscriptionPlans.PREMIUM_YEAR_TIER_0]: [U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, U.SubscriptionPlans.PREMIUM_YEAR_TIER_1, U.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
    [U.SubscriptionPlans.PREMIUM_MONTH_TIER_1]: [U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, U.SubscriptionPlans.PREMIUM_YEAR_TIER_1],
    [U.SubscriptionPlans.PREMIUM_YEAR_TIER_1]: [U.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
    [U.SubscriptionPlans.PREMIUM_MONTH_TIER_2]: [U.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
    [U.SubscriptionPlans.PREMIUM_YEAR_TIER_2]: [],
    ALL: [U.SubscriptionPlans.NONE_MONTH, U.SubscriptionPlans.NONE_YEAR, U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, U.SubscriptionPlans.PREMIUM_YEAR_TIER_1, U.SubscriptionPlans.PREMIUM_MONTH_TIER_1, U.SubscriptionPlans.PREMIUM_YEAR_TIER_0, U.SubscriptionPlans.PREMIUM_MONTH_TIER_0]
  };

function x(e) {
  return e.items.find(e => U.PREMIUM_PLANS.has(e.planId))
}

function F(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null !== (t = m.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
    a = p.default.getPremiumTypeSubscription();
  return null != a && null != a.paymentSourceId && (r = a.paymentSourceId), H(e, n, i, {
    paymentSourceId: r
  })
}

function H(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    {
      paymentSourceId: r,
      currency: a
    } = i;
  if (null != N.default.get(e)) {
    let i = y.PriceSetAssignmentPurchaseTypes.DEFAULT;
    n ? i = y.PriceSetAssignmentPurchaseTypes.GIFT : t && (i = y.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
    let s = function(e) {
      let {
        paymentSourceId: t,
        purchaseType: n,
        currency: i
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        purchaseType: y.PriceSetAssignmentPurchaseTypes.DEFAULT
      }, r = Y(e, {
        paymentSourceId: t,
        purchaseType: n
      });
      return (0 === r.length && B.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? r.find(e => e.currency === i) : r[0]
    }(e, {
      paymentSourceId: r,
      purchaseType: i,
      currency: a
    });
    if (null == s) {
      let t = Error("Couldn't find price");
      throw (0, O.captureBillingException)(t, {
        extra: {
          paymentSourceId: r
        },
        tags: {
          purchaseType: i.toString(),
          planId: e,
          currency: null != a ? a : "unknown"
        }
      }), t
    }
    return s
  }
  let s = Error("Plan not found");
  throw (0, O.captureBillingException)(s, {
    tags: {
      planId: e,
      currency: null != a ? a : "unknown"
    },
    extra: {
      ...i,
      isGift: n
    }
  }), s
}(a = i || (i = {})).BUNDLE = "bundle", a.TIER_0 = "tier_0", a.TIER_1 = "tier_1", a.TIER_2 = "tier_2", a.PREMIUM_GUILD = "premium_guild", (s = r || (r = {})).MID = "mid", s.HIGH = "high";

function Y(e) {
  let {
    paymentSourceId: t,
    purchaseType: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    purchaseType: y.PriceSetAssignmentPurchaseTypes.DEFAULT
  }, i = function(e, t) {
    let n = N.default.get(e);
    if (null == n) {
      let n = Error("Plan not found");
      throw (0, O.captureBillingException)(n, {
        tags: {
          planId: e,
          purchaseType: t.toString()
        }
      }), n
    }
    if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
    let i = n.prices[t];
    if (null == i) throw B.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
    return i
  }(e, n);
  if (null != t) {
    let r = i.paymentSourcePrices[t];
    if (null == r) {
      B.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), B.info("prices: ".concat(r));
      let a = Error("Missing prices for payment source on subscription plan");
      (0, O.captureBillingException)(a, {
        extra: {
          paymentSourceId: t
        },
        tags: {
          purchaseType: n.toString(),
          planId: e
        }
      })
    } else if (0 !== r.length) return r
  }
  if (null == i.countryPrices.prices) {
    B.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
    let t = Error("Missing prices for country");
    throw (0, O.captureBillingException)(t, {
      tags: {
        countryCode: i.countryPrices.countryCode,
        planId: e
      }
    }), t
  }
  return i.countryPrices.prices
}

function j(e) {
  switch (e) {
    case U.DiscountUserUsageLimitIntervalTypes.MONTH:
      return G.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case U.DiscountUserUsageLimitIntervalTypes.YEAR:
      return G.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    case U.DiscountUserUsageLimitIntervalTypes.DAY:
    case U.DiscountUserUsageLimitIntervalTypes.WEEK:
    default:
      throw Error("Unexpected interval")
  }
}

function W(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : U.PremiumTypes.TIER_2;
  if (t || n) switch (e) {
    case U.SubscriptionIntervalTypes.MONTH:
      let s = (a === U.PremiumTypes.TIER_0 ? G.default.Messages.BASIC_GIFT_DURATION : G.default.Messages.GIFT_DURATION).format({
        timeInterval: G.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
      });
      return r ? s : G.default.Messages.PAYMENT_MODAL_ONE_MONTH;
    case U.SubscriptionIntervalTypes.YEAR:
      let o = (a === U.PremiumTypes.TIER_0 ? G.default.Messages.BASIC_GIFT_DURATION : G.default.Messages.GIFT_DURATION).format({
        timeInterval: G.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
      });
      return r ? o : G.default.Messages.PAYMENT_MODAL_ONE_YEAR;
    default:
      throw Error("Unexpected interval")
  }
  switch (e) {
    case U.SubscriptionIntervalTypes.MONTH:
      if (1 !== i) return G.default.Messages.MULTI_MONTHS.format({
        intervalCount: i
      });
      return G.default.Messages.MONTHLY;
    case U.SubscriptionIntervalTypes.YEAR:
      return G.default.Messages.YEARLY;
    default:
      throw Error("Unexpected interval")
  }
}

function K(e) {
  switch (e) {
    case U.SubscriptionIntervalTypes.MONTH:
      return G.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case U.SubscriptionIntervalTypes.YEAR:
      return G.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    default:
      throw Error("Unexpected interval")
  }
}

function z(e) {
  let t = U.SubscriptionPlanInfo[e];
  if (null != t) return t.premiumType;
  let n = Error("Unsupported plan");
  throw (0, O.captureBillingException)(n, {
    tags: {
      planId: e
    }
  }), n
}

function Z(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  switch (e) {
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return t ? G.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? G.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : G.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return t ? G.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? G.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : G.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return n ? G.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : G.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return n ? G.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : G.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return t ? G.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? G.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : G.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return t ? G.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? G.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : G.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
    case U.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      return G.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
    case U.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return G.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
    case U.SubscriptionPlans.PREMIUM_MONTH_GUILD:
      return n ? G.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : G.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
    case U.SubscriptionPlans.PREMIUM_YEAR_GUILD:
      return n ? G.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : G.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
    case U.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
      return G.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
    case U.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
      return G.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
    case U.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
      return G.default.Messages.PREMIUM_PLAN_MONTH;
    case U.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
      return G.default.Messages.PREMIUM_PLAN_YEAR
  }
  let r = Error("Unsupported plan");
  throw (0, O.captureBillingException)(r, {
    tags: {
      planId: e
    }
  }), r
}

function X(e) {
  switch (e) {
    case U.PremiumSubscriptionSKUs.TIER_0:
      return G.default.Messages.PREMIUM_TIER_0;
    case U.PremiumSubscriptionSKUs.TIER_1:
      return G.default.Messages.PREMIUM_TIER_1;
    case U.PremiumSubscriptionSKUs.TIER_2:
      return G.default.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported sku");
  throw (0, O.captureBillingException)(t, {
    tags: {
      skuId: e
    }
  }), t
}

function Q(e) {
  switch (e) {
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return G.default.Messages.PREMIUM_TIER_0;
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return G.default.Messages.PREMIUM_TIER_1;
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case U.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case U.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return G.default.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported plan");
  throw (0, O.captureBillingException)(t, {
    tags: {
      planId: e
    }
  }), t
}

function q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return t ? "Basic" : "Nitro Basic";
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return t ? "Classic" : "Nitro Classic";
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
    case U.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case U.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return "Nitro"
  }
  let n = Error("Unsupported plan");
  throw (0, O.captureBillingException)(n, {
    tags: {
      planId: e
    }
  }), n
}

function J(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case U.PremiumTypes.TIER_0:
      return t ? "Basic" : G.default.Messages.PREMIUM_TIER_0;
    case U.PremiumTypes.TIER_1:
      return t ? "Classic" : G.default.Messages.PREMIUM_TIER_1;
    case U.PremiumTypes.TIER_2:
      return G.default.Messages.PREMIUM_TIER_2
  }
}

function $(e) {
  var t, n, i, r, a, s, o, l, u, _;
  let {
    subscription: c,
    planId: E,
    price: I,
    includePremiumGuilds: f,
    hasDiscountApplied: S,
    activeDiscountInfo: A,
    renewalInvoicePreview: m
  } = e, N = U.SubscriptionPlanInfo[E], p = D.default.formatPriceString(D.default.getDefaultPrice(N.id), N.interval), {
    annualDiscountPercentage: O
  } = (0, T.getAnnualDiscountsExperimentConfig)("PremiumUtils"), R = ef(c) || null == c.paymentSourceId && !c.isPurchasedExternally && !(null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), g = null != I, L = c.status === y.SubscriptionStatusTypes.UNPAID && null !== c.latestInvoice && (null === (n = c.latestInvoice) || void 0 === n ? void 0 : n.status) === y.InvoiceStatusTypes.OPEN, v = R ? y.SubscriptionStatusTypes.CANCELED : L ? y.SubscriptionStatusTypes.UNPAID : c.status, M = null === (a = null !== (r = null == m ? void 0 : m.taxInclusive) && void 0 !== r ? r : null === (i = c.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === a || a, P = U.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (f ? ea(c.additionalPlans) : 0);
  switch (E) {
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      switch (v) {
        case y.SubscriptionStatusTypes.CANCELED:
          return g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
        case y.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
        case y.SubscriptionStatusTypes.UNPAID:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
        case y.SubscriptionStatusTypes.PAUSE_PENDING:
          let b = null != c.pauseEndsAt ? d()(c.pauseEndsAt).diff(c.currentPeriodEnd, "days") : null;
          return null != b ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: c.currentPeriodEnd,
            pauseDuration: b
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: c.currentPeriodEnd
          });
        case y.SubscriptionStatusTypes.PAUSED:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: c.pauseEndsAt
          });
        case y.SubscriptionStatusTypes.PAST_DUE:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, C.dateFormat)(ed(c).expiresDate, "LL"),
            onClick: () => {
              window.open("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
      }
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      switch (v) {
        case y.SubscriptionStatusTypes.CANCELED:
          return g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
        case y.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
        case y.SubscriptionStatusTypes.UNPAID:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
        case y.SubscriptionStatusTypes.PAUSE_PENDING:
          let w = null != c.pauseEndsAt ? d()(c.pauseEndsAt).diff(c.currentPeriodEnd, "days") : null;
          return null != w ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: c.currentPeriodEnd,
            pauseDuration: w
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: c.currentPeriodEnd
          });
        case y.SubscriptionStatusTypes.PAUSED:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: c.pauseEndsAt
          });
        case y.SubscriptionStatusTypes.PAST_DUE:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, C.dateFormat)(ed(c).expiresDate, "LL"),
            onClick: () => {
              window.open("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({
            price: I
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
      }
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
    case U.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case U.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      switch (v) {
        case y.SubscriptionStatusTypes.CANCELED:
          return g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
            price: I,
            num: P
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: I,
            num: P
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
            num: P
          });
        case y.SubscriptionStatusTypes.ACCOUNT_HOLD:
          return g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
            price: I,
            num: P
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: I,
            num: P
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
            num: P
          });
        case y.SubscriptionStatusTypes.UNPAID:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
            num: P
          });
        case y.SubscriptionStatusTypes.PAUSE_PENDING:
          let k = null != c.pauseEndsAt ? d()(c.pauseEndsAt).diff(c.currentPeriodEnd, "days") : null;
          return null != k ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: c.currentPeriodEnd,
            pauseDuration: k
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: c.currentPeriodEnd
          });
        case y.SubscriptionStatusTypes.PAUSED:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: c.pauseEndsAt
          });
        case y.SubscriptionStatusTypes.BILLING_RETRY:
          return G.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({
            endDate: d()(c.currentPeriodStart).add(U.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days")
          });
        case y.SubscriptionStatusTypes.PAST_DUE:
          return G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, C.dateFormat)(ed(c).expiresDate, "LL"),
            onClick: () => {
              window.open("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return S ? E === U.SubscriptionPlans.PREMIUM_YEAR_TIER_2 ? G.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (s = null == A ? void 0 : A.percentage) && void 0 !== s ? s : O,
            regularPrice: p
          }) : M ? G.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (o = null == A ? void 0 : A.percentage) && void 0 !== o ? o : U.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: p,
            numMonths: null !== (l = null == A ? void 0 : A.duration) && void 0 !== l ? l : U.DISCOUNT_DURATION_FALLBACK
          }) : G.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
            percent: null !== (u = null == A ? void 0 : A.percentage) && void 0 !== u ? u : U.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: p,
            numMonths: null !== (_ = null == A ? void 0 : A.duration) && void 0 !== _ ? _ : U.DISCOUNT_DURATION_FALLBACK
          }) : g ? M ? G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
            price: I,
            num: P
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
            price: I,
            num: P
          }) : G.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
            num: P
          })
      }
    default:
      throw Error("Invalid planId ".concat(E))
  }
}

function ee(e) {
  let {
    renewalInvoicePreview: t,
    subscription: n,
    planId: i,
    includePremiumGuilds: r = !1,
    hasDiscountApplied: a = !1,
    activeDiscountInfo: s
  } = e, o = N.default.get(i);
  return l()(null != o, "Missing plan"), $({
    subscription: n,
    planId: o.id,
    price: function(e, t, n) {
      let i = e.invoiceItems.find(e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === n.id
        }),
        r = null == i ? H(n.id, !1, !1, {
          paymentSourceId: t.paymentSourceId,
          currency: t.currency
        }).amount : i.amount;
      return (0, M.formatRate)((0, M.formatPrice)(r, e.currency), n.interval, n.intervalCount)
    }(t, n, o),
    includePremiumGuilds: r,
    hasDiscountApplied: a,
    activeDiscountInfo: s,
    renewalInvoicePreview: t
  })
}

function et(e) {
  let {
    planId: t,
    additionalPlans: n
  } = e, i = (0, S.isNoneSubscription)(t) ? null : Z(t), r = null == n ? void 0 : n.find(e => {
    let {
      planId: t
    } = e;
    return U.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
  }), a = (null == r ? void 0 : r.planId) === U.SubscriptionPlans.PREMIUM_MONTH_GUILD ? G.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == r ? void 0 : r.planId) === U.SubscriptionPlans.PREMIUM_YEAR_GUILD ? G.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, s = null == a ? void 0 : a.format({
    num: null == r ? void 0 : r.quantity
  });
  if (null != i && null != s) return G.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
    premiumDescription: i,
    premiumGuildDescription: s
  });
  if (null != i) return i;
  if (null != s) return s;
  else throw Error("Subscription without premium or premium guild subscription")
}

function en(e) {
  let {
    skuId: t,
    isPremium: n,
    multiMonthPlans: i,
    currentSubscription: r,
    isGift: a,
    isEligibleForTrial: s,
    defaultPlanId: o,
    defaultToMonthlyPlan: l
  } = e;
  if (null == t || !n) return [];
  let u = void 0 !== o && t === U.SubscriptionPlanInfo[o].skuId ? o : void 0;
  void 0 === u && l && !a && (u = U.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), s && !a && (void 0 === o || l && U.PREMIUM_MONTHLY_PLANS.has(o)) && f.TrialRedemptionDefaultPlanExperiment.trackExposure({
    location: "de805e_1"
  });
  let d = [];
  switch (t) {
    case U.PremiumSubscriptionSKUs.TIER_0:
      d = [U.SubscriptionPlans.PREMIUM_YEAR_TIER_0, U.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
      break;
    case U.PremiumSubscriptionSKUs.TIER_1:
      d = [U.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
      break;
    case U.PremiumSubscriptionSKUs.TIER_2:
      let _ = i;
      if (null != r) {
        let e = r.items[0].planId;
        if (U.MULTI_MONTH_PLANS.has(e)) {
          let t = U.SubscriptionPlanInfo[e];
          _ = [...(0, U.MULTI_MONTH_PLANS)].filter(e => {
            let n = U.SubscriptionPlanInfo[e];
            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === U.PremiumSubscriptionSKUs.TIER_2
          })
        } else _ = []
      }
      d = [U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, ..._, U.SubscriptionPlans.PREMIUM_MONTH_TIER_2];
      break;
    default:
      throw Error("Unexpected SKU: ".concat(t))
  }
  if (void 0 !== u) {
    let e = d.indexOf(u);
    d.splice(e, 1), d.unshift(u)
  }
  return d
}

function ei(e) {
  let t = U.SubscriptionPlanInfo[e];
  if (null == t) {
    let t = Error("Unsupported plan");
    throw (0, O.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return t.skuId
}

function er(e) {
  var t;
  return null == e ? V.ALL : null !== (t = V[e]) && void 0 !== t ? t : []
}

function ea(e) {
  let t = N.default.getPlanIdsForSkus([eG(U.PremiumSubscriptionSKUs.GUILD)]);
  l()(null != t, "Missing guildSubscriptionPlanIds");
  let n = e.find(e => {
    let {
      planId: n
    } = e;
    return t.includes(n)
  });
  return null != n ? n.quantity : 0
}
let es = new Set([U.SubscriptionPlans.NONE_MONTH, U.SubscriptionPlans.NONE_3_MONTH, U.SubscriptionPlans.NONE_6_MONTH, U.SubscriptionPlans.NONE_YEAR, U.SubscriptionPlans.PREMIUM_MONTH_TIER_0, U.SubscriptionPlans.PREMIUM_MONTH_TIER_1, U.SubscriptionPlans.PREMIUM_MONTH_TIER_2, U.SubscriptionPlans.PREMIUM_YEAR_TIER_0, U.SubscriptionPlans.PREMIUM_YEAR_TIER_1, U.SubscriptionPlans.PREMIUM_YEAR_TIER_2, U.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, U.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

function eo(e) {
  return es.has(e)
}

function el(e) {
  return U.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
}

function eu(e) {
  return eo(e) || el(e)
}

function ed(e) {
  var t, n, i, r, a;
  if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
    let t = d()(e.metadata.apple_grace_period_expires_date);
    return {
      days: d().duration(t.diff(e.currentPeriodStart)).days(),
      expiresDate: t
    }
  }
  if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
    let t = d()(e.metadata.google_grace_period_expires_date),
      n = d()(e.metadata.google_original_expires_date);
    return {
      days: d().duration(t.diff(n)).days(),
      expiresDate: t
    }
  }
  if (e.isPurchasedExternally) {
    let t = e.isPurchasedViaApple ? U.DEFAULT_APPLE_GRACE_PERIOD_DAYS : U.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
    return {
      days: t,
      expiresDate: d()(e.currentPeriodStart).add(t, "days")
    }
  }
  if ((null === (r = e.metadata) || void 0 === r ? void 0 : r.grace_period_expires_date) != null) return {
    days: d()(null === (a = e.metadata) || void 0 === a ? void 0 : a.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
    expiresDate: d()(e.metadata.grace_period_expires_date)
  };
  {
    let t = null == e.paymentSourceId ? U.DEFAULT_MAX_GRACE_PERIOD_DAYS : U.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
    return {
      days: t,
      expiresDate: d()(e.currentPeriodStart).add(t, "days")
    }
  }
}

function e_(e) {
  if (null == e) return !1;
  let t = m.default.getPaymentSource(e);
  return null != t && b.PREPAID_PAYMENT_SOURCES.has(t.type)
}

function ec(e) {
  return e.isPurchasedExternally ? e.status === y.SubscriptionStatusTypes.CANCELED : function(e) {
    let {
      renewalMutations: t,
      additionalPlans: n,
      status: i
    } = e, r = ea(n);
    return 0 === (null != t ? ea(t.additionalPlans) : null) && 0 !== r ? y.SubscriptionStatusTypes.CANCELED : i
  }(e) === y.SubscriptionStatusTypes.CANCELED
}

function eE(e) {
  var t, n, i;
  let {
    subscription: r,
    user: a,
    price: s,
    renewalInvoicePreview: o
  } = e, {
    planId: u,
    additionalPlans: d
  } = r, _ = N.default.get(u);
  l()(null != _, "Missing plan");
  let c = ea(d),
    E = eh(r.planId, r.paymentSourceId, r.currency, a).amount * c;
  if (null != o) {
    let e = o.invoiceItems.find(e => U.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId));
    null != e && (E = e.amount)
  }
  s = null != s ? s : (0, M.formatPrice)(E, r.currency);
  let I = null === (i = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = r.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
  if (ec(r)) return r.isPurchasedViaGoogle ? G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
    quantity: c
  }) : I ? G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
    quantity: c,
    rate: (0, M.formatRate)(s, _.interval, _.intervalCount)
  }) : G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
    quantity: c,
    rate: (0, M.formatRate)(s, _.interval, _.intervalCount)
  });
  switch (r.status) {
    case y.SubscriptionStatusTypes.ACCOUNT_HOLD:
      return r.isPurchasedViaGoogle ? G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
        quantity: c,
        boostQuantity: c
      }) : I ? G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
        quantity: c,
        boostQuantity: c,
        rate: (0, M.formatRate)(s, _.interval, _.intervalCount)
      }) : G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
        quantity: c,
        boostQuantity: c,
        rate: (0, M.formatRate)(s, _.interval, _.intervalCount)
      });
    case y.SubscriptionStatusTypes.PAUSE_PENDING:
    case y.SubscriptionStatusTypes.PAUSED:
      return G.default.Messages.GUILD_BOOSTING_DISABLED_HEADER;
    default:
      return r.isPurchasedViaGoogle ? G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
        quantity: c
      }) : I ? G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
        quantity: c,
        rate: (0, M.formatRate)(s, _.interval, _.intervalCount)
      }) : G.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
        quantity: c,
        rate: (0, M.formatRate)(s, _.interval, _.intervalCount)
      })
  }
}

function eI(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = null != t ? H(e.id, !1, i, t) : F(e.id, !1, i),
    a = (0, M.formatPrice)(r.amount, r.currency);
  return e.currency !== b.CurrencyCodes.USD && !0 === n && (a = a.concat("*")), a
}

function eT(e, t, n) {
  let i = eI(e, t, n);
  return (0, M.formatRate)(i, e.interval, e.intervalCount)
}

function ef(e) {
  let {
    status: t,
    renewalMutations: n
  } = e;
  return t === y.SubscriptionStatusTypes.CANCELED || null != n && (0, S.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
}

function eS(e) {
  return e === y.SubscriptionStatusTypes.PAST_DUE || e === y.SubscriptionStatusTypes.ACCOUNT_HOLD || e === y.SubscriptionStatusTypes.BILLING_RETRY
}

function eh(e, t, n, i) {
  let r = null != t ? {
      paymentSourceId: t,
      currency: n
    } : {
      country: A.default.ipCountryCodeWithFallback,
      currency: n
    },
    a = N.default.get(e);
  if (null == a) {
    let t = Error("Unsupported plan");
    throw (0, O.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  let s = N.default.getForSkuAndInterval(eG(U.PremiumSubscriptionSKUs.GUILD), a.interval, a.intervalCount);
  if (null == s) {
    let t = Error("Unsupported plan");
    throw (0, O.captureBillingException)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return H(s.id, (0, v.isPremium)(i), !1, r)
}

function eA(e, t, n) {
  let i = t.id;
  if (null != e) switch (i) {
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return G.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return G.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return G.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return G.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return G.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return G.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
  }
  switch (i) {
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      return n ? G.default.Messages.BILLING_SELECT_PLAN : G.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      return n ? G.default.Messages.BILLING_SELECT_PLAN : G.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      return n ? G.default.Messages.BILLING_SELECT_PLAN : G.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      return n ? G.default.Messages.BILLING_SELECT_PLAN : G.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
    case U.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      return n ? G.default.Messages.BILLING_SELECT_PLAN : G.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    case U.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      return n ? G.default.Messages.BILLING_SELECT_PLAN : G.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
    case U.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
    case U.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
      return G.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
        intervalCount: t.intervalCount
      });
    case U.SubscriptionPlans.NONE_MONTH:
    case U.SubscriptionPlans.NONE_YEAR:
    case U.SubscriptionPlans.NONE_3_MONTH:
    case U.SubscriptionPlans.NONE_6_MONTH:
    case U.SubscriptionPlans.PREMIUM_MONTH_GUILD:
    case U.SubscriptionPlans.PREMIUM_YEAR_GUILD:
    case U.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
    case U.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
      return G.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
  }
  let r = Error("User is purchasing an unsupported plan");
  throw (0, O.captureBillingException)(r, {
    tags: {
      planId: i
    }
  }), r
}

function em(e) {
  let t = e.invoiceItems[0].subscriptionPlanId,
    n = N.default.get(t);
  return l()(null != n, "Missing subscriptionPlan"), {
    intervalType: n.interval,
    intervalCount: n.intervalCount
  }
}

function eN(e) {
  let {
    intervalType: t = U.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case U.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return i ? G.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
        weeks: n / 7
      }) : G.default.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? G.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
        days: n
      }) : G.default.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
        days: n
      });
    case U.SubscriptionIntervalTypes.MONTH:
      return i ? G.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
        months: n
      }) : G.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
        months: n
      });
    case U.SubscriptionIntervalTypes.YEAR:
      return i ? G.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
        years: n
      }) : G.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function ep(e) {
  let {
    intervalType: t = U.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1
  } = e;
  switch (t) {
    case U.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return G.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
        weeks: n / 7
      });
      return G.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
        days: n
      });
    case U.SubscriptionIntervalTypes.MONTH:
      return G.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
        months: n
      });
    case U.SubscriptionIntervalTypes.YEAR:
      return G.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eO(e) {
  let {
    intervalType: t = U.SubscriptionIntervalTypes.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case U.SubscriptionIntervalTypes.DAY:
      if (n >= 7 && n % 7 == 0) return i ? G.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      }) : G.default.Messages.DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? G.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      }) : G.default.Messages.DURATION_DAYS.format({
        days: n
      });
    case U.SubscriptionIntervalTypes.MONTH:
      return i ? G.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      }) : G.default.Messages.DURATION_MONTHS.format({
        months: n
      });
    case U.SubscriptionIntervalTypes.YEAR:
      return i ? G.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      }) : G.default.Messages.DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eC(e, t) {
  switch (e) {
    case y.PaymentGateways.APPLE_PARTNER:
    case y.PaymentGateways.APPLE:
      return w[t];
    case y.PaymentGateways.GOOGLE:
      return k[t]
  }
  throw Error("Invalid external payment gateway ".concat(e))
}

function eR(e, t) {
  return (0, v.isPremium)(e) || eS(null == t ? void 0 : t.status)
}

function eg(e, t) {
  var n, i;
  let r = [],
    a = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find(e => U.PREMIUM_PLANS.has(e.planId));
  return null != a && r.push(a), r.push(...t), r.map(t => {
    for (let n of e.items)
      if (t.planId === n.planId) return {
        ...n,
        ...t
      };
    return t
  })
}

function eL(e) {
  return e.filter(e => !U.PREMIUM_PLANS.has(e.planId))
}

function ev(e, t, n, i) {
  var r, a;
  l()(i.has(t), "Expected planId in group");
  let s = !1,
    o = (null !== (a = null === (r = e.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== a ? a : e.items).map(e => i.has(e.planId) ? (s = !0, {
      ...e,
      quantity: n,
      planId: t
    }) : e);
  if (!s) {
    let i = {
        planId: t,
        quantity: n
      },
      r = e.items.find(e => e.planId === t);
    null != r && (i.id = r.id), o.push(i)
  }
  return o.filter(e => 0 !== e.quantity)
}

function eD(e, t) {
  return ev(e, t, 1, U.PREMIUM_PLANS)
}

function eM(e, t, n) {
  return ev(e, n, t, U.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
}

function ey(e) {
  var t;
  let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => U.PREMIUM_PLANS.has(e.planId));
  if (null != n) {
    let t = N.default.get(n.planId);
    l()(null != t, "Missing plan"), e = e.map(e => {
      if (e === n) return e;
      let i = N.default.get(e.planId);
      l()(null != i, "Missing plan");
      let r = N.default.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
      return l()(null != r, "Missing planForInterval"), {
        ...e,
        planId: r.id
      }
    })
  }
  return e
}

function eP(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      useSpace: !0
    },
    n = U.PremiumUserLimits[e].fileSize;
  return (0, R.formatSize)(n / 1024, {
    useKibibytes: !0,
    useSpace: t.useSpace
  })
}

function eU(e) {
  return null == e ? null : e.items.find(e => U.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId))
}

function eb(e) {
  let t = null != e ? x(e) : null;
  return null != t ? ei(t.planId) : null
}

function eG(e) {
  return e
}
t.default = Object.freeze({
  isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
  isPremiumAtLeast: v.isPremiumAtLeast,
  isPremium: v.isPremium,
  isPremiumExactly: v.isPremiumExactly,
  getPrice: H,
  getDefaultPrice: F,
  getInterval: function(e) {
    let t = U.SubscriptionPlanInfo[e];
    if (null != t) return {
      intervalType: t.interval,
      intervalCount: t.intervalCount
    };
    let n = Error("Unsupported plan");
    throw (0, O.captureBillingException)(n, {
      tags: {
        planId: e
      }
    }), n
  },
  getIntervalString: W,
  getIntervalStringAsNoun: K,
  getPremiumType: z,
  getDisplayName: Z,
  getDisplayPremiumType: q,
  getPremiumPlanOptions: en,
  getUpgradeEligibilities: er,
  getPlanDescription: $,
  isPremiumSku: function(e) {
    return e === U.PremiumSubscriptionSKUs.TIER_0 || e === U.PremiumSubscriptionSKUs.TIER_1 || e === U.PremiumSubscriptionSKUs.TIER_2
  },
  getClosestUpgrade: function(e) {
    let t = U.SubscriptionPlanInfo[e];
    if (null == t) throw Error("Unrecognized plan.");
    let {
      interval: n
    } = t, i = er(e);
    for (let e of Object.keys(U.SubscriptionPlanInfo)) {
      let {
        interval: t
      } = U.SubscriptionPlanInfo[e];
      if (n === t && i.includes(e)) return e
    }
    return null
  },
  getIntervalMonths: function(e, t) {
    if (e === U.SubscriptionIntervalTypes.MONTH) return t;
    if (e === U.SubscriptionIntervalTypes.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"))
  },
  getUserMaxFileSize: L.getUserMaxFileSize,
  getSkuIdForPlan: ei,
  getSkuIdForPremiumType: function(e) {
    switch (e) {
      case U.PremiumTypes.TIER_0:
        return U.PremiumSubscriptionSKUs.TIER_0;
      case U.PremiumTypes.TIER_1:
        return U.PremiumSubscriptionSKUs.TIER_1;
      case U.PremiumTypes.TIER_2:
        return U.PremiumSubscriptionSKUs.TIER_2
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
    if (z(e) === U.PremiumTypes.TIER_2) return U.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    return 0
  },
  getBillingInformationString: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = n ? (0, M.formatPrice)(t.invoiceItems.filter(e => U.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, M.formatPrice)(t.total, t.currency);
    if (e.status === y.SubscriptionStatusTypes.CANCELED) return G.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
      endDate: t.subscriptionPeriodStart
    });
    if (e.status === y.SubscriptionStatusTypes.PAUSE_PENDING) return G.default.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
      pauseDate: e.currentPeriodEnd,
      resumeDate: e.pauseEndsAt
    });
    if (e.status === y.SubscriptionStatusTypes.PAUSED) return null == e.pauseEndsAt ? n ? G.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
      planName: G.default.Messages.PREMIUM,
      price: i
    }) : G.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? G.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
      planName: G.default.Messages.PREMIUM,
      resumeDate: e.pauseEndsAt,
      price: i
    }) : G.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
      resumeDate: e.pauseEndsAt
    });
    else if (e.status === y.SubscriptionStatusTypes.PAST_DUE) {
      var r, a;
      let t = ed(e).expiresDate;
      return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = d()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (a = e.metadata) || void 0 === a ? void 0 : a.apple_grace_period_expires_date) != null && (t = d()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? G.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
        endDate: t,
        paymentGatewayName: b.PaymentGatewayToFriendlyName[e.paymentGateway],
        paymentSourceLink: eC(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
      }) : G.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
        endDate: t,
        price: i
      })
    } else return e.status === y.SubscriptionStatusTypes.BILLING_RETRY ? G.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: d()(e.currentPeriodStart).add(U.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days"),
      price: i
    }) : e.status === y.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, g.isAndroid)() ? G.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
      endDate: d()(e.currentPeriodStart).add(U.MAX_ACCOUNT_HOLD_DAYS, "days"),
      paymentGatewayName: b.PaymentGatewayToFriendlyName[e.paymentGateway],
      paymentSourceLink: eC(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
    }) : G.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: d()(e.currentPeriodStart).add(U.MAX_ACCOUNT_HOLD_DAYS, "days"),
      price: i
    }) : function(e) {
      return null != e.paymentSourceId && e_(e.paymentSourceId)
    }(e) ? G.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
      prepaidEndDate: e.currentPeriodEnd
    }) : e.status === y.SubscriptionStatusTypes.UNPAID ? G.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
      maxProcessingTimeInDays: U.MAX_PAYMENT_PROCESSING_TIME_DAYS
    }) : e.isPurchasedExternally ? G.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
      renewalDate: t.subscriptionPeriodStart,
      paymentGatewayName: b.PaymentGatewayToFriendlyName[e.paymentGateway],
      subscriptionManagementLink: eC(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : n ? G.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
      planName: G.default.Messages.PREMIUM,
      renewalDate: t.subscriptionPeriodStart,
      price: i
    }) : G.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
      renewalDate: t.subscriptionPeriodStart,
      price: i
    })
  },
  isNoneSubscription: S.isNoneSubscription,
  getPlanIdFromInvoice: function(e, t) {
    let {
      planId: n
    } = e;
    if (e.status === y.SubscriptionStatusTypes.CANCELED || e.status === y.SubscriptionStatusTypes.PAUSE_PENDING) return n;
    l()(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return eo(t)
    });
    return n = null == i || (0, S.isNoneSubscription)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
  },
  getStatusFromInvoice: function(e, t) {
    let {
      status: n
    } = e;
    if (e.status === y.SubscriptionStatusTypes.CANCELED || e.status === y.SubscriptionStatusTypes.PAUSE_PENDING) return n;
    l()(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return eo(t)
    });
    return (null == i || (0, S.isNoneSubscription)(i.subscriptionPlanId)) && (n = y.SubscriptionStatusTypes.CANCELED), n
  },
  isBaseSubscriptionCanceled: ef,
  getPremiumGuildIntervalPrice: eh,
  hasAccountCredit: function(e) {
    return null != e && 0 !== e.size && Array.from(e).some(e => {
      let {
        subscriptionPlanId: t,
        parentId: n,
        consumed: i
      } = e;
      return null != t && null != n && !i
    })
  },
  getBillingReviewSubheader: eA,
  getIntervalForInvoice: em,
  getPremiumPlanItem: x,
  getGuildBoostPlanItem: eU,
  isBoostOnlySubscription: function(e) {
    return null != e && null == x(e) && null != eU(e)
  },
  getPremiumSkuIdForSubscription: eb,
  getPremiumTypeFromSubscription: function(e) {
    if (null != e) {
      let t = x(e);
      if (null != t) return z(t.planId)
    }
  },
  getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
    if (null != e && null != e.renewalMutations) {
      let t = x(e.renewalMutations);
      if (null != t) return z(t.planId)
    }
  },
  getPremiumGradientColor: function(e) {
    switch (e) {
      case U.PremiumTypes.TIER_0:
        return P.Gradients.PREMIUM_TIER_0;
      case U.PremiumTypes.TIER_1:
        return P.Gradients.PREMIUM_TIER_1;
      case U.PremiumTypes.TIER_2:
        return P.Gradients.PREMIUM_TIER_2
    }
  },
  castPremiumSubscriptionAsSkuId: eG,
  canUseAnimatedEmojis: function(e) {
    return (0, I.canUserUse)(I.ANIMATED_EMOJIS, e)
  },
  canUseEmojisEverywhere: function(e) {
    return (0, I.canUserUse)(I.EMOJIS_EVERYWHERE, e)
  },
  canUseSoundboardEverywhere: function(e) {
    return (0, I.canUserUse)(I.SOUNDBOARD_EVERYWHERE, e)
  },
  canUseCustomCallSounds: function(e) {
    return (0, I.canUserUse)(I.CUSTOM_CALL_SOUNDS, e)
  },
  canUploadLargeFiles: function(e) {
    return (0, I.canUserUse)(I.UPLOAD_LARGE_FILES, e)
  },
  canUseBadges: function(e) {
    return (0, I.canUserUse)(I.PROFILE_BADGES, e)
  },
  canUseHighVideoUploadQuality: function(e) {
    return (0, I.canUserUse)(I.INCREASED_VIDEO_UPLOAD_QUALITY, e)
  },
  canEditDiscriminator: function(e) {
    return (0, I.canUserUse)(I.CUSTOM_DISCRIMINATOR, e)
  },
  hasBoostDiscount: function(e) {
    return (0, I.canUserUse)(I.BOOST_DISCOUNT, e)
  },
  canUseAnimatedAvatar: function(e) {
    return (0, I.canUserUse)(I.ANIMATED_AVATAR, e)
  },
  canUseFancyVoiceChannelReactions: function(e) {
    return (0, I.canUserUse)(I.FANCY_VOICE_CHANNEL_REACTIONS, e)
  },
  canInstallPremiumApplications: function(e) {
    return (0, I.canUserUse)(I.INSTALL_PREMIUM_APPLICATIONS, e)
  },
  canUseIncreasedMessageLength: function(e) {
    return (0, I.canUserUse)(I.INCREASED_MESSAGE_LENGTH, e)
  },
  canUseIncreasedGuildCap: function(e) {
    return (0, I.canUserUse)(I.INCREASED_GUILD_LIMIT, e)
  },
  canRedeemPremiumPerks: function(e) {
    return (0, I.canUserUse)(I.REDEEM_PREMIUM_PERKS, e)
  },
  canUsePremiumProfileCustomization: function(e) {
    return (0, I.canUserUse)(I.PROFILE_PREMIUM_FEATURES, e)
  },
  canUsePremiumAppIcons: function(e) {
    return (0, I.canUserUse)(I.APP_ICONS, e)
  },
  canUsePremiumGuildMemberProfile: function(e) {
    return (0, I.canUserUse)(I.PREMIUM_GUILD_MEMBER_PROFILE, e)
  },
  canUseClientThemes: function(e) {
    return (0, I.canUserUse)(I.CLIENT_THEMES, e)
  },
  canStreamQuality: function(e, t) {
    return !! function(e) {
      var t;
      let n = E.default.getPerksDemos();
      return null !== (t = null == n ? void 0 : n[e]) && void 0 !== t && t
    }(_.EntitlementFeatureNames.STREAM_HIGH_QUALITY) || ("high" === e ? (0, I.canUserUse)(I.STREAM_HIGH_QUALITY, t) : "mid" === e && (0, I.canUserUse)(I.STREAM_MID_QUALITY, t))
  },
  hasFreeBoosts: function(e) {
    return (0, I.canUserUse)(I.FREE_BOOSTS, e)
  },
  canUseCustomStickersEverywhere: function(e) {
    return (0, I.canUserUse)(I.STICKERS_EVERYWHERE, e)
  },
  canUseCustomBackgrounds: function(e) {
    return (0, I.canUserUse)(I.VIDEO_FILTER_ASSETS, e)
  },
  canUseCollectibles: function(e) {
    return (0, I.canUserUse)(I.COLLECTIBLES, e)
  },
  canUseCustomNotificationSounds: function(e) {
    return (0, I.canUserUse)(I.CUSTOM_NOTIFICATION_SOUNDS, e)
  },
  formatPriceString: function(e, t) {
    let n = (0, M.formatPrice)(e.amount, e.currency),
      i = K(t);
    return "".concat(n, "/").concat(i)
  },
  StreamQuality: r
})