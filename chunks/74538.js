"use strict";
n.d(t, {
  Af: function() {
    return Z
  },
  Ap: function() {
    return ec
  },
  CY: function() {
    return H
  },
  Gf: function() {
    return q
  },
  I5: function() {
    return D.I5
  },
  JE: function() {
    return ep
  },
  JP: function() {
    return j
  },
  L7: function() {
    return W
  },
  M5: function() {
    return D.M5
  },
  MY: function() {
    return eL
  },
  PK: function() {
    return eh
  },
  PV: function() {
    return e_
  },
  Px: function() {
    return $
  },
  Qo: function() {
    return eg
  },
  Rd: function() {
    return z
  },
  Rt: function() {
    return eR
  },
  T4: function() {
    return Y
  },
  U2: function() {
    return r
  },
  Ue: function() {
    return ev
  },
  V7: function() {
    return ei
  },
  W_: function() {
    return eA
  },
  Wz: function() {
    return ew
  },
  XK: function() {
    return eM
  },
  Z8: function() {
    return eu
  },
  Zx: function() {
    return eP
  },
  a5: function() {
    return eO
  },
  aS: function() {
    return F
  },
  al: function() {
    return eD
  },
  aq: function() {
    return Q
  },
  bt: function() {
    return eI
  },
  dn: function() {
    return em
  },
  eP: function() {
    return K
  },
  gB: function() {
    return ey
  },
  gq: function() {
    return J
  },
  gy: function() {
    return eT
  },
  if: function() {
    return eC
  },
  jP: function() {
    return X
  },
  k5: function() {
    return eG
  },
  lY: function() {
    return ed
  },
  qV: function() {
    return et
  },
  uV: function() {
    return eo
  },
  uZ: function() {
    return el
  },
  v6: function() {
    return eE
  },
  v9: function() {
    return eU
  },
  yd: function() {
    return D.yd
  },
  zL: function() {
    return en
  },
  zV: function() {
    return ef
  }
}), n(411104), n(47120), n(733860), n(724458), n(653041);
var i, r, s, o, a = n(512722),
  l = n.n(a),
  u = n(913527),
  _ = n.n(u),
  d = n(848246);
n(442837);
var c = n(782568),
  E = n(710845),
  I = n(114064),
  T = n(803905),
  h = n(424082),
  S = n(439017),
  f = n(301766),
  N = n(594174),
  A = n(351402),
  m = n(853872),
  O = n(509545),
  R = n(78839),
  C = n(122289),
  p = n(55935),
  g = n(424218),
  L = n(358085),
  v = n(380684),
  D = n(111361),
  M = n(74538),
  P = n(937615),
  y = n(981631),
  U = n(334431),
  b = n(474936),
  G = n(231338),
  w = n(689938);
let k = {
    PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
    BILLING_HISTORY: "https://support.apple.com/HT201266",
    SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
  },
  B = {
    SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
    PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
    BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
  },
  x = new E.Z("PremiumUtils.tsx"),
  V = {
    [b.Xh.NONE_MONTH]: [b.Xh.NONE_YEAR, b.Xh.PREMIUM_YEAR_TIER_2, b.Xh.PREMIUM_MONTH_TIER_2, b.Xh.PREMIUM_YEAR_TIER_1, b.Xh.PREMIUM_MONTH_TIER_1],
    [b.Xh.NONE_YEAR]: [b.Xh.PREMIUM_YEAR_TIER_2, b.Xh.PREMIUM_MONTH_TIER_2, b.Xh.PREMIUM_YEAR_TIER_1, b.Xh.PREMIUM_MONTH_TIER_1],
    [b.Xh.PREMIUM_MONTH_TIER_0]: [b.Xh.PREMIUM_YEAR_TIER_2, b.Xh.PREMIUM_MONTH_TIER_2, b.Xh.PREMIUM_YEAR_TIER_1, b.Xh.PREMIUM_MONTH_TIER_1, b.Xh.PREMIUM_YEAR_TIER_0],
    [b.Xh.PREMIUM_YEAR_TIER_0]: [b.Xh.PREMIUM_YEAR_TIER_2, b.Xh.PREMIUM_MONTH_TIER_2, b.Xh.PREMIUM_YEAR_TIER_1, b.Xh.PREMIUM_MONTH_TIER_1],
    [b.Xh.PREMIUM_MONTH_TIER_1]: [b.Xh.PREMIUM_YEAR_TIER_2, b.Xh.PREMIUM_MONTH_TIER_2, b.Xh.PREMIUM_YEAR_TIER_1],
    [b.Xh.PREMIUM_YEAR_TIER_1]: [b.Xh.PREMIUM_YEAR_TIER_2],
    [b.Xh.PREMIUM_MONTH_TIER_2]: [b.Xh.PREMIUM_YEAR_TIER_2],
    [b.Xh.PREMIUM_YEAR_TIER_2]: [],
    ALL: [b.Xh.NONE_MONTH, b.Xh.NONE_YEAR, b.Xh.PREMIUM_YEAR_TIER_2, b.Xh.PREMIUM_MONTH_TIER_2, b.Xh.PREMIUM_YEAR_TIER_1, b.Xh.PREMIUM_MONTH_TIER_1, b.Xh.PREMIUM_YEAR_TIER_0, b.Xh.PREMIUM_MONTH_TIER_0]
  };

function Z(e) {
  return e.items.find(e => b.dJ.has(e.planId))
}

function H(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = null !== (t = m.Z.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
    s = R.ZP.getPremiumTypeSubscription();
  return null != s && null != s.paymentSourceId && (r = s.paymentSourceId), F(e, n, i, {
    paymentSourceId: r
  })
}

function F(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    {
      paymentSourceId: r,
      currency: s
    } = i;
  if (null != O.Z.get(e)) {
    let i = y.tuJ.DEFAULT;
    n ? i = y.tuJ.GIFT : t && (i = y.tuJ.PREMIUM_TIER_1);
    let o = function(e) {
      let {
        paymentSourceId: t,
        purchaseType: n,
        currency: i
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        purchaseType: y.tuJ.DEFAULT
      }, r = Y(e, {
        paymentSourceId: t,
        purchaseType: n
      });
      return (0 === r.length && x.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? r.find(e => e.currency === i) : r[0]
    }(e, {
      paymentSourceId: r,
      purchaseType: i,
      currency: s
    });
    if (null == o) {
      let t = Error("Couldn't find price");
      throw (0, C.q2)(t, {
        extra: {
          paymentSourceId: r
        },
        tags: {
          purchaseType: i.toString(),
          planId: e,
          currency: null != s ? s : "unknown"
        }
      }), t
    }
    return o
  }
  let o = Error("Plan not found");
  throw (0, C.q2)(o, {
    tags: {
      planId: e,
      currency: null != s ? s : "unknown"
    },
    extra: {
      ...i,
      isGift: n
    }
  }), o
}(s = i || (i = {})).BUNDLE = "bundle", s.TIER_0 = "tier_0", s.TIER_1 = "tier_1", s.TIER_2 = "tier_2", s.PREMIUM_GUILD = "premium_guild", (o = r || (r = {})).MID = "mid", o.HIGH = "high";

function Y(e) {
  let {
    paymentSourceId: t,
    purchaseType: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    purchaseType: y.tuJ.DEFAULT
  }, i = function(e, t) {
    let n = O.Z.get(e);
    if (null == n) {
      let n = Error("Plan not found");
      throw (0, C.q2)(n, {
        tags: {
          planId: e,
          purchaseType: t.toString()
        }
      }), n
    }
    if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
    let i = n.prices[t];
    if (null == i) throw x.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
    return i
  }(e, n);
  if (null != t) {
    let r = i.paymentSourcePrices[t];
    if (null == r) {
      x.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), x.info("prices: ".concat(r));
      let s = Error("Missing prices for payment source on subscription plan");
      (0, C.q2)(s, {
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
    x.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
    let t = Error("Missing prices for country");
    throw (0, C.q2)(t, {
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
    case b.EA.MONTH:
      return w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case b.EA.YEAR:
      return w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    case b.EA.DAY:
    case b.EA.WEEK:
    default:
      throw Error("Unexpected interval")
  }
}

function W(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : b.p9.TIER_2;
  if (t || n) switch (e) {
    case b.rV.MONTH:
      let o = (s === b.p9.TIER_0 ? w.Z.Messages.BASIC_GIFT_DURATION : w.Z.Messages.GIFT_DURATION).format({
        timeInterval: w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
      });
      return r ? o : w.Z.Messages.PAYMENT_MODAL_ONE_MONTH;
    case b.rV.YEAR:
      let a = (s === b.p9.TIER_0 ? w.Z.Messages.BASIC_GIFT_DURATION : w.Z.Messages.GIFT_DURATION).format({
        timeInterval: w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
      });
      return r ? a : w.Z.Messages.PAYMENT_MODAL_ONE_YEAR;
    default:
      throw Error("Unexpected interval")
  }
  switch (e) {
    case b.rV.MONTH:
      if (1 !== i) return w.Z.Messages.MULTI_MONTHS.format({
        intervalCount: i
      });
      return w.Z.Messages.MONTHLY;
    case b.rV.YEAR:
      return w.Z.Messages.YEARLY;
    default:
      throw Error("Unexpected interval")
  }
}

function K(e) {
  switch (e) {
    case b.rV.MONTH:
      return w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
    case b.rV.YEAR:
      return w.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
    default:
      throw Error("Unexpected interval")
  }
}

function z(e) {
  let t = b.GP[e];
  if (null != t) return t.premiumType;
  let n = Error("Unsupported plan");
  throw (0, C.q2)(n, {
    tags: {
      planId: e
    }
  }), n
}

function q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  switch (e) {
    case b.Xh.PREMIUM_MONTH_TIER_0:
      return t ? w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? w.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_0;
    case b.Xh.PREMIUM_YEAR_TIER_0:
      return t ? w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
        duration: i
      }) : n ? w.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_0;
    case b.Xh.PREMIUM_MONTH_TIER_1:
      return n ? w.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_1;
    case b.Xh.PREMIUM_YEAR_TIER_1:
      return n ? w.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_1;
    case b.Xh.PREMIUM_MONTH_TIER_2:
      return t ? w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? w.Z.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : w.Z.Messages.PREMIUM_PLAN_MONTH_TIER_2;
    case b.Xh.PREMIUM_YEAR_TIER_2:
      return t ? w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
        duration: i
      }) : n ? w.Z.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : w.Z.Messages.PREMIUM_PLAN_YEAR_TIER_2;
    case b.Xh.PREMIUM_3_MONTH_TIER_2:
      return w.Z.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
    case b.Xh.PREMIUM_6_MONTH_TIER_2:
      return w.Z.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
    case b.Xh.PREMIUM_MONTH_GUILD:
      return n ? w.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : w.Z.Messages.PREMIUM_GUILD_PLAN_MONTH;
    case b.Xh.PREMIUM_YEAR_GUILD:
      return n ? w.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : w.Z.Messages.PREMIUM_GUILD_PLAN_YEAR;
    case b.Xh.PREMIUM_3_MONTH_GUILD:
      return w.Z.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
    case b.Xh.PREMIUM_6_MONTH_GUILD:
      return w.Z.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
    case b.Xh.PREMIUM_MONTH_LEGACY:
      return w.Z.Messages.PREMIUM_PLAN_MONTH;
    case b.Xh.PREMIUM_YEAR_LEGACY:
      return w.Z.Messages.PREMIUM_PLAN_YEAR
  }
  let r = Error("Unsupported plan");
  throw (0, C.q2)(r, {
    tags: {
      planId: e
    }
  }), r
}

function X(e) {
  switch (e) {
    case b.Si.TIER_0:
      return w.Z.Messages.PREMIUM_TIER_0;
    case b.Si.TIER_1:
      return w.Z.Messages.PREMIUM_TIER_1;
    case b.Si.TIER_2:
      return w.Z.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported sku");
  throw (0, C.q2)(t, {
    tags: {
      skuId: e
    }
  }), t
}

function Q(e) {
  switch (e) {
    case b.Xh.PREMIUM_MONTH_TIER_0:
    case b.Xh.PREMIUM_YEAR_TIER_0:
      return w.Z.Messages.PREMIUM_TIER_0;
    case b.Xh.PREMIUM_MONTH_TIER_1:
    case b.Xh.PREMIUM_YEAR_TIER_1:
      return w.Z.Messages.PREMIUM_TIER_1;
    case b.Xh.PREMIUM_MONTH_TIER_2:
    case b.Xh.PREMIUM_3_MONTH_TIER_2:
    case b.Xh.PREMIUM_6_MONTH_TIER_2:
    case b.Xh.PREMIUM_YEAR_TIER_2:
      return w.Z.Messages.PREMIUM_TIER_2
  }
  let t = Error("Unsupported plan");
  throw (0, C.q2)(t, {
    tags: {
      planId: e
    }
  }), t
}

function J(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case b.Xh.PREMIUM_MONTH_TIER_0:
    case b.Xh.PREMIUM_YEAR_TIER_0:
      return t ? "Basic" : "Nitro Basic";
    case b.Xh.PREMIUM_MONTH_TIER_1:
    case b.Xh.PREMIUM_YEAR_TIER_1:
      return t ? "Classic" : "Nitro Classic";
    case b.Xh.PREMIUM_MONTH_TIER_2:
    case b.Xh.PREMIUM_YEAR_TIER_2:
    case b.Xh.PREMIUM_3_MONTH_TIER_2:
    case b.Xh.PREMIUM_6_MONTH_TIER_2:
      return "Nitro"
  }
  let n = Error("Unsupported plan");
  throw (0, C.q2)(n, {
    tags: {
      planId: e
    }
  }), n
}

function $(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e) {
    case b.p9.TIER_0:
      return t ? "Basic" : w.Z.Messages.PREMIUM_TIER_0;
    case b.p9.TIER_1:
      return t ? "Classic" : w.Z.Messages.PREMIUM_TIER_1;
    case b.p9.TIER_2:
      return w.Z.Messages.PREMIUM_TIER_2
  }
}

function ee(e) {
  var t, n, i, r, s, o, a, l, u, d;
  let {
    subscription: E,
    planId: I,
    price: T,
    includePremiumGuilds: S,
    hasDiscountApplied: f,
    activeDiscountInfo: A,
    renewalInvoicePreview: m
  } = e, O = b.GP[I], R = M.ZP.formatPriceString(M.ZP.getDefaultPrice(O.id), O.interval), {
    annualDiscountPercentage: C
  } = (0, h.lf)("PremiumUtils"), g = eS(E) || null == E.paymentSourceId && !E.isPurchasedExternally && !(null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), L = null != T, v = E.status === y.O0b.UNPAID && null !== E.latestInvoice && (null === (n = E.latestInvoice) || void 0 === n ? void 0 : n.status) === y.hUK.OPEN, D = g ? y.O0b.CANCELED : v ? y.O0b.UNPAID : E.status, P = null === (s = null !== (r = null == m ? void 0 : m.taxInclusive) && void 0 !== r ? r : null === (i = E.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === s || s, U = b.cb + (S ? eo(E.additionalPlans) : 0);
  switch (I) {
    case b.Xh.PREMIUM_MONTH_TIER_0:
    case b.Xh.PREMIUM_YEAR_TIER_0:
      switch (D) {
        case y.O0b.CANCELED:
          return L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
        case y.O0b.ACCOUNT_HOLD:
          return L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
        case y.O0b.UNPAID:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
        case y.O0b.PAUSE_PENDING:
          let G = null != E.pauseEndsAt ? _()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != G ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: G
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case y.O0b.PAUSED:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case y.O0b.PAST_DUE:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, p.vc)(ed(E).expiresDate, "LL"),
            onClick: () => {
              (0, c.Z)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
      }
    case b.Xh.PREMIUM_MONTH_TIER_1:
    case b.Xh.PREMIUM_YEAR_TIER_1:
      switch (D) {
        case y.O0b.CANCELED:
          return L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
        case y.O0b.ACCOUNT_HOLD:
          return L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
        case y.O0b.UNPAID:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
        case y.O0b.PAUSE_PENDING:
          let k = null != E.pauseEndsAt ? _()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != k ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: k
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case y.O0b.PAUSED:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case y.O0b.PAST_DUE:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, p.vc)(ed(E).expiresDate, "LL"),
            onClick: () => {
              (0, c.Z)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({
            price: T
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
      }
    case b.Xh.PREMIUM_MONTH_TIER_2:
    case b.Xh.PREMIUM_YEAR_TIER_2:
    case b.Xh.PREMIUM_3_MONTH_TIER_2:
    case b.Xh.PREMIUM_6_MONTH_TIER_2:
      switch (D) {
        case y.O0b.CANCELED:
          return L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
            price: T,
            num: U
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            price: T,
            num: U
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
            num: U
          });
        case y.O0b.ACCOUNT_HOLD:
          return L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
            price: T,
            num: U
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            price: T,
            num: U
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
            num: U
          });
        case y.O0b.UNPAID:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
            num: U
          });
        case y.O0b.PAUSE_PENDING:
          let B = null != E.pauseEndsAt ? _()(E.pauseEndsAt).diff(E.currentPeriodEnd, "days") : null;
          return null != B ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
            pauseDate: E.currentPeriodEnd,
            pauseDuration: B
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
            pauseDate: E.currentPeriodEnd
          });
        case y.O0b.PAUSED:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
            resumeDate: E.pauseEndsAt
          });
        case y.O0b.BILLING_RETRY:
          return w.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({
            endDate: _()(E.currentPeriodStart).add(b.A5, "days")
          });
        case y.O0b.PAST_DUE:
          return w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_PAST_DUE_WITH_HC_LINK.format({
            endDate: (0, p.vc)(ed(E).expiresDate, "LL"),
            onClick: () => {
              (0, c.Z)("https://support.discord.com/hc/articles/23082866222871")
            }
          });
        default:
          return f ? I === b.Xh.PREMIUM_YEAR_TIER_2 ? w.Z.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (o = null == A ? void 0 : A.percentage) && void 0 !== o ? o : C,
            regularPrice: R
          }) : P ? w.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (a = null == A ? void 0 : A.percentage) && void 0 !== a ? a : b.M_,
            regularPrice: R,
            numMonths: null !== (l = null == A ? void 0 : A.duration) && void 0 !== l ? l : b.rt
          }) : w.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
            percent: null !== (u = null == A ? void 0 : A.percentage) && void 0 !== u ? u : b.M_,
            regularPrice: R,
            numMonths: null !== (d = null == A ? void 0 : A.duration) && void 0 !== d ? d : b.rt
          }) : L ? P ? w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
            price: T,
            num: U
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
            price: T,
            num: U
          }) : w.Z.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
            num: U
          })
      }
    default:
      throw Error("Invalid planId ".concat(I))
  }
}

function et(e) {
  let {
    renewalInvoicePreview: t,
    subscription: n,
    planId: i,
    includePremiumGuilds: r = !1,
    hasDiscountApplied: s = !1,
    activeDiscountInfo: o
  } = e, a = O.Z.get(i);
  return l()(null != a, "Missing plan"), ee({
    subscription: n,
    planId: a.id,
    price: function(e, t, n) {
      let i = e.invoiceItems.find(e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === n.id
        }),
        r = null == i ? F(n.id, !1, !1, {
          paymentSourceId: t.paymentSourceId,
          currency: t.currency
        }).amount : i.amount;
      return (0, P.og)((0, P.T4)(r, e.currency), n.interval, n.intervalCount)
    }(t, n, a),
    includePremiumGuilds: r,
    hasDiscountApplied: s,
    activeDiscountInfo: o,
    renewalInvoicePreview: t
  })
}

function en(e) {
  let {
    planId: t,
    additionalPlans: n
  } = e, i = (0, f.Q0)(t) ? null : q(t), r = null == n ? void 0 : n.find(e => {
    let {
      planId: t
    } = e;
    return b.Z1.has(t)
  }), s = (null == r ? void 0 : r.planId) === b.Xh.PREMIUM_MONTH_GUILD ? w.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == r ? void 0 : r.planId) === b.Xh.PREMIUM_YEAR_GUILD ? w.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, o = null == s ? void 0 : s.format({
    num: null == r ? void 0 : r.quantity
  });
  if (null != i && null != o) return w.Z.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
    premiumDescription: i,
    premiumGuildDescription: o
  });
  if (null != i) return i;
  if (null != o) return o;
  else throw Error("Subscription without premium or premium guild subscription")
}

function ei(e) {
  let {
    skuId: t,
    isPremium: n,
    multiMonthPlans: i,
    currentSubscription: r,
    isGift: s,
    isEligibleForTrial: o,
    defaultPlanId: a,
    defaultToMonthlyPlan: l
  } = e;
  if (null == t || !n) return [];
  let u = void 0 !== a && t === b.GP[a].skuId ? a : void 0;
  void 0 === u && l && !s && (u = b.IW[t]), o && !s && (void 0 === a || l && b.No.has(a)) && S.k.trackExposure({
    location: "de805e_1"
  });
  let _ = [];
  switch (t) {
    case b.Si.TIER_0:
      _ = [b.Xh.PREMIUM_YEAR_TIER_0, b.Xh.PREMIUM_MONTH_TIER_0];
      break;
    case b.Si.TIER_1:
      _ = [b.Xh.PREMIUM_MONTH_TIER_1];
      break;
    case b.Si.TIER_2:
      let d = i;
      if (null != r) {
        let e = r.items[0].planId;
        if (b.o4.has(e)) {
          let t = b.GP[e];
          d = [...b.o4].filter(e => {
            let n = b.GP[e];
            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === b.Si.TIER_2
          })
        } else d = []
      }
      _ = [b.Xh.PREMIUM_YEAR_TIER_2, ...d, b.Xh.PREMIUM_MONTH_TIER_2];
      break;
    default:
      throw Error("Unexpected SKU: ".concat(t))
  }
  if (void 0 !== u) {
    let e = _.indexOf(u);
    _.splice(e, 1), _.unshift(u)
  }
  return _
}

function er(e) {
  let t = b.GP[e];
  if (null == t) {
    let t = Error("Unsupported plan");
    throw (0, C.q2)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return t.skuId
}

function es(e) {
  var t;
  return null == e ? V.ALL : null !== (t = V[e]) && void 0 !== t ? t : []
}

function eo(e) {
  let t = O.Z.getPlanIdsForSkus([ew(b.Si.GUILD)]);
  l()(null != t, "Missing guildSubscriptionPlanIds");
  let n = e.find(e => {
    let {
      planId: n
    } = e;
    return t.includes(n)
  });
  return null != n ? n.quantity : 0
}
let ea = new Set([b.Xh.NONE_MONTH, b.Xh.NONE_3_MONTH, b.Xh.NONE_6_MONTH, b.Xh.NONE_YEAR, b.Xh.PREMIUM_MONTH_TIER_0, b.Xh.PREMIUM_MONTH_TIER_1, b.Xh.PREMIUM_MONTH_TIER_2, b.Xh.PREMIUM_YEAR_TIER_0, b.Xh.PREMIUM_YEAR_TIER_1, b.Xh.PREMIUM_YEAR_TIER_2, b.Xh.PREMIUM_3_MONTH_TIER_2, b.Xh.PREMIUM_6_MONTH_TIER_2]);

function el(e) {
  return ea.has(e)
}

function eu(e) {
  return b.Z1.has(e)
}

function e_(e) {
  return el(e) || eu(e)
}

function ed(e) {
  var t, n, i, r, s;
  if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
    let t = _()(e.metadata.apple_grace_period_expires_date);
    return {
      days: _().duration(t.diff(e.currentPeriodStart)).days(),
      expiresDate: t
    }
  }
  if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
    let t = _()(e.metadata.google_grace_period_expires_date),
      n = _()(e.metadata.google_original_expires_date);
    return {
      days: _().duration(t.diff(n)).days(),
      expiresDate: t
    }
  }
  if (e.isPurchasedExternally) {
    let t = e.isPurchasedViaApple ? b.$7 : b.Ue;
    return {
      days: t,
      expiresDate: _()(e.currentPeriodStart).add(t, "days")
    }
  }
  if ((null === (r = e.metadata) || void 0 === r ? void 0 : r.grace_period_expires_date) != null) return {
    days: _()(null === (s = e.metadata) || void 0 === s ? void 0 : s.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
    expiresDate: _()(e.metadata.grace_period_expires_date)
  };
  {
    let t = null == e.paymentSourceId ? b.UA : b.zp;
    return {
      days: t,
      expiresDate: _()(e.currentPeriodStart).add(t, "days")
    }
  }
}

function ec(e) {
  if (null == e) return !1;
  let t = m.Z.getPaymentSource(e);
  return null != t && G.Uk.has(t.type)
}

function eE(e) {
  return e.isPurchasedExternally ? e.status === y.O0b.CANCELED : function(e) {
    let {
      renewalMutations: t,
      additionalPlans: n,
      status: i
    } = e, r = eo(n);
    return 0 === (null != t ? eo(t.additionalPlans) : null) && 0 !== r ? y.O0b.CANCELED : i
  }(e) === y.O0b.CANCELED
}

function eI(e) {
  var t, n, i;
  let {
    subscription: r,
    user: s,
    price: o,
    renewalInvoicePreview: a
  } = e, {
    planId: u,
    additionalPlans: _
  } = r, d = O.Z.get(u);
  l()(null != d, "Missing plan");
  let c = eo(_),
    E = eN(r.planId, r.paymentSourceId, r.currency, s).amount * c;
  if (null != a) {
    let e = a.invoiceItems.find(e => b.Z1.has(e.subscriptionPlanId));
    null != e && (E = e.amount)
  }
  o = null != o ? o : (0, P.T4)(E, r.currency);
  let I = null === (i = null !== (n = null == a ? void 0 : a.taxInclusive) && void 0 !== n ? n : null === (t = r.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
  if (eE(r)) return r.isPurchasedViaGoogle ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
    quantity: c
  }) : I ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
    quantity: c,
    rate: (0, P.og)(o, d.interval, d.intervalCount)
  }) : w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
    quantity: c,
    rate: (0, P.og)(o, d.interval, d.intervalCount)
  });
  switch (r.status) {
    case y.O0b.ACCOUNT_HOLD:
      return r.isPurchasedViaGoogle ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
        quantity: c,
        boostQuantity: c
      }) : I ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
        quantity: c,
        boostQuantity: c,
        rate: (0, P.og)(o, d.interval, d.intervalCount)
      }) : w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
        quantity: c,
        boostQuantity: c,
        rate: (0, P.og)(o, d.interval, d.intervalCount)
      });
    case y.O0b.PAUSE_PENDING:
    case y.O0b.PAUSED:
      return w.Z.Messages.GUILD_BOOSTING_DISABLED_HEADER;
    default:
      return r.isPurchasedViaGoogle ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
        quantity: c
      }) : I ? w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
        quantity: c,
        rate: (0, P.og)(o, d.interval, d.intervalCount)
      }) : w.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
        quantity: c,
        rate: (0, P.og)(o, d.interval, d.intervalCount)
      })
  }
}

function eT(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = null != t ? F(e.id, !1, i, t) : H(e.id, !1, i),
    s = (0, P.T4)(r.amount, r.currency);
  return e.currency !== G.pK.USD && !0 === n && (s = s.concat("*")), s
}

function eh(e, t, n) {
  let i = eT(e, t, n);
  return (0, P.og)(i, e.interval, e.intervalCount)
}

function eS(e) {
  let {
    status: t,
    renewalMutations: n
  } = e;
  return t === y.O0b.CANCELED || null != n && (0, f.Q0)(n.planId) && !e.isPurchasedExternally
}

function ef(e) {
  return e === y.O0b.PAST_DUE || e === y.O0b.ACCOUNT_HOLD || e === y.O0b.BILLING_RETRY
}

function eN(e, t, n, i) {
  let r = null != t ? {
      paymentSourceId: t,
      currency: n
    } : {
      country: A.Z.ipCountryCodeWithFallback,
      currency: n
    },
    s = O.Z.get(e);
  if (null == s) {
    let t = Error("Unsupported plan");
    throw (0, C.q2)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  let o = O.Z.getForSkuAndInterval(ew(b.Si.GUILD), s.interval, s.intervalCount);
  if (null == o) {
    let t = Error("Unsupported plan");
    throw (0, C.q2)(t, {
      tags: {
        planId: e
      }
    }), t
  }
  return F(o.id, (0, D.I5)(i), !1, r)
}

function eA(e, t, n) {
  let i = t.id;
  if (null != e) switch (i) {
    case b.Xh.PREMIUM_MONTH_TIER_0:
      return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
    case b.Xh.PREMIUM_YEAR_TIER_0:
      return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
    case b.Xh.PREMIUM_MONTH_TIER_1:
      return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
    case b.Xh.PREMIUM_YEAR_TIER_1:
      return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
    case b.Xh.PREMIUM_MONTH_TIER_2:
      return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
    case b.Xh.PREMIUM_YEAR_TIER_2:
      return w.Z.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
  }
  switch (i) {
    case b.Xh.PREMIUM_MONTH_TIER_0:
      return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
    case b.Xh.PREMIUM_YEAR_TIER_0:
      return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
    case b.Xh.PREMIUM_MONTH_TIER_1:
      return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
    case b.Xh.PREMIUM_YEAR_TIER_1:
      return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
    case b.Xh.PREMIUM_MONTH_TIER_2:
      return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    case b.Xh.PREMIUM_YEAR_TIER_2:
      return n ? w.Z.Messages.BILLING_SELECT_PLAN : w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
    case b.Xh.PREMIUM_3_MONTH_TIER_2:
    case b.Xh.PREMIUM_6_MONTH_TIER_2:
      return w.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
        intervalCount: t.intervalCount
      });
    case b.Xh.NONE_MONTH:
    case b.Xh.NONE_YEAR:
    case b.Xh.NONE_3_MONTH:
    case b.Xh.NONE_6_MONTH:
    case b.Xh.PREMIUM_MONTH_GUILD:
    case b.Xh.PREMIUM_YEAR_GUILD:
    case b.Xh.PREMIUM_3_MONTH_GUILD:
    case b.Xh.PREMIUM_6_MONTH_GUILD:
      return w.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
  }
  let r = Error("User is purchasing an unsupported plan");
  throw (0, C.q2)(r, {
    tags: {
      planId: i
    }
  }), r
}

function em(e) {
  let t = e.invoiceItems[0].subscriptionPlanId,
    n = O.Z.get(t);
  return l()(null != n, "Missing subscriptionPlan"), {
    intervalType: n.interval,
    intervalCount: n.intervalCount
  }
}

function eO(e) {
  let {
    intervalType: t = b.rV.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case b.rV.DAY:
      if (n >= 7 && n % 7 == 0) return i ? w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
        weeks: n / 7
      }) : w.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
        days: n
      }) : w.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
        days: n
      });
    case b.rV.MONTH:
      return i ? w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
        months: n
      }) : w.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
        months: n
      });
    case b.rV.YEAR:
      return i ? w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
        years: n
      }) : w.Z.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eR(e) {
  let {
    intervalType: t = b.rV.MONTH,
    intervalCount: n = 1
  } = e;
  switch (t) {
    case b.rV.DAY:
      if (n >= 7 && n % 7 == 0) return w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
        weeks: n / 7
      });
      return w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
        days: n
      });
    case b.rV.MONTH:
      return w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
        months: n
      });
    case b.rV.YEAR:
      return w.Z.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function eC(e) {
  let {
    intervalType: t = b.rV.MONTH,
    intervalCount: n = 1,
    capitalize: i = !1
  } = e;
  switch (t) {
    case b.rV.DAY:
      if (n >= 7 && n % 7 == 0) return i ? w.Z.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      }) : w.Z.Messages.DURATION_WEEKS.format({
        weeks: n / 7
      });
      return i ? w.Z.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      }) : w.Z.Messages.DURATION_DAYS.format({
        days: n
      });
    case b.rV.MONTH:
      return i ? w.Z.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      }) : w.Z.Messages.DURATION_MONTHS.format({
        months: n
      });
    case b.rV.YEAR:
      return i ? w.Z.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      }) : w.Z.Messages.DURATION_YEARS.format({
        years: n
      });
    default:
      throw Error("Unsupported interval duration.")
  }
}

function ep(e, t) {
  switch (e) {
    case y.gg$.APPLE_PARTNER:
    case y.gg$.APPLE:
      return k[t];
    case y.gg$.GOOGLE:
      return B[t]
  }
  throw Error("Invalid external payment gateway ".concat(e))
}

function eg(e, t) {
  return (0, D.I5)(e) || ef(null == t ? void 0 : t.status)
}

function eL(e, t) {
  var n, i;
  let r = [],
    s = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find(e => b.dJ.has(e.planId));
  return null != s && r.push(s), r.push(...t), r.map(t => {
    for (let n of e.items)
      if (t.planId === n.planId) return {
        ...n,
        ...t
      };
    return t
  })
}

function ev(e) {
  return e.filter(e => !b.dJ.has(e.planId))
}

function eD(e, t, n, i) {
  var r, s;
  l()(i.has(t), "Expected planId in group");
  let o = !1,
    a = (null !== (s = null === (r = e.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== s ? s : e.items).map(e => i.has(e.planId) ? (o = !0, {
      ...e,
      quantity: n,
      planId: t
    }) : e);
  if (!o) {
    let i = {
        planId: t,
        quantity: n
      },
      r = e.items.find(e => e.planId === t);
    null != r && (i.id = r.id), a.push(i)
  }
  return a.filter(e => 0 !== e.quantity)
}

function eM(e, t) {
  return eD(e, t, 1, b.dJ)
}

function eP(e, t, n) {
  return eD(e, n, t, b.Z1)
}

function ey(e) {
  var t;
  let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => b.dJ.has(e.planId));
  if (null != n) {
    let t = O.Z.get(n.planId);
    l()(null != t, "Missing plan"), e = e.map(e => {
      if (e === n) return e;
      let i = O.Z.get(e.planId);
      l()(null != i, "Missing plan");
      let r = O.Z.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
      return l()(null != r, "Missing planForInterval"), {
        ...e,
        planId: r.id
      }
    })
  }
  return e
}

function eU(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      useSpace: !0
    },
    n = b.a1[e].fileSize;
  return (0, g.BU)(n / 1024, {
    useKibibytes: !0,
    useSpace: t.useSpace
  })
}

function eb(e) {
  return null == e ? null : e.items.find(e => b.Z1.has(e.planId))
}

function eG(e) {
  let t = null != e ? Z(e) : null;
  return null != t ? er(t.planId) : null
}

function ew(e) {
  return e
}
t.ZP = Object.freeze({
  isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
  isPremiumAtLeast: D.yd,
  isPremium: D.I5,
  isPremiumExactly: D.M5,
  getPrice: F,
  getDefaultPrice: H,
  getInterval: function(e) {
    let t = b.GP[e];
    if (null != t) return {
      intervalType: t.interval,
      intervalCount: t.intervalCount
    };
    let n = Error("Unsupported plan");
    throw (0, C.q2)(n, {
      tags: {
        planId: e
      }
    }), n
  },
  getIntervalString: W,
  getIntervalStringAsNoun: K,
  getPremiumType: z,
  getDisplayName: q,
  getDisplayPremiumType: J,
  getPremiumPlanOptions: ei,
  getUpgradeEligibilities: es,
  getPlanDescription: ee,
  isPremiumSku: function(e) {
    return e === b.Si.TIER_0 || e === b.Si.TIER_1 || e === b.Si.TIER_2
  },
  getClosestUpgrade: function(e) {
    let t = b.GP[e];
    if (null == t) throw Error("Unrecognized plan.");
    let {
      interval: n
    } = t, i = es(e);
    for (let e of Object.keys(b.GP)) {
      let {
        interval: t
      } = b.GP[e];
      if (n === t && i.includes(e)) return e
    }
    return null
  },
  getIntervalMonths: function(e, t) {
    if (e === b.rV.MONTH) return t;
    if (e === b.rV.YEAR) return 12 * t;
    throw Error("".concat(e, " interval subscription period not implemented"))
  },
  getUserMaxFileSize: v.h,
  getSkuIdForPlan: er,
  getSkuIdForPremiumType: function(e) {
    switch (e) {
      case b.p9.TIER_0:
        return b.Si.TIER_0;
      case b.p9.TIER_1:
        return b.Si.TIER_1;
      case b.p9.TIER_2:
        return b.Si.TIER_2
    }
  },
  getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
    if (z(e) === b.p9.TIER_2) return b.cb;
    return 0
  },
  getBillingInformationString: function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = n ? (0, P.T4)(t.invoiceItems.filter(e => b.UD.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, P.T4)(t.total, t.currency);
    if (e.status === y.O0b.CANCELED) return w.Z.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
      endDate: t.subscriptionPeriodStart
    });
    if (e.status === y.O0b.PAUSE_PENDING) return w.Z.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
      pauseDate: e.currentPeriodEnd,
      resumeDate: e.pauseEndsAt
    });
    if (e.status === y.O0b.PAUSED) return null == e.pauseEndsAt ? n ? w.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
      planName: w.Z.Messages.PREMIUM,
      price: i
    }) : w.Z.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? w.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
      planName: w.Z.Messages.PREMIUM,
      resumeDate: e.pauseEndsAt,
      price: i
    }) : w.Z.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
      resumeDate: e.pauseEndsAt
    });
    else if (e.status === y.O0b.PAST_DUE) {
      var r, s;
      let t = ed(e).expiresDate;
      return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = _()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (s = e.metadata) || void 0 === s ? void 0 : s.apple_grace_period_expires_date) != null && (t = _()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? w.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
        endDate: t,
        paymentGatewayName: G.Vz[e.paymentGateway],
        paymentSourceLink: ep(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
      }) : w.Z.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
        endDate: t,
        price: i
      })
    } else if (e.status === y.O0b.BILLING_RETRY) return w.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: _()(e.currentPeriodStart).add(b.A5, "days"),
      price: i
    });
    else if (e.status === y.O0b.ACCOUNT_HOLD) return e.isPurchasedViaGoogle && !(0, L.isAndroid)() ? w.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
      endDate: _()(e.currentPeriodStart).add(b.gh, "days"),
      paymentGatewayName: G.Vz[e.paymentGateway],
      paymentSourceLink: ep(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
    }) : w.Z.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
      endDate: _()(e.currentPeriodStart).add(b.gh, "days"),
      price: i
    });
    else return function(e) {
      return null != e.paymentSourceId && ec(e.paymentSourceId)
    }(e) ? w.Z.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
      prepaidEndDate: e.currentPeriodEnd
    }) : e.status === y.O0b.UNPAID ? w.Z.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
      maxProcessingTimeInDays: b.Rg
    }) : e.isPurchasedExternally ? w.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
      renewalDate: t.subscriptionPeriodStart,
      paymentGatewayName: G.Vz[e.paymentGateway],
      subscriptionManagementLink: ep(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
    }) : n ? w.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
      planName: w.Z.Messages.PREMIUM,
      renewalDate: t.subscriptionPeriodStart,
      price: i
    }) : w.Z.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
      renewalDate: t.subscriptionPeriodStart,
      price: i
    })
  },
  isNoneSubscription: f.Q0,
  getPlanIdFromInvoice: function(e, t) {
    let {
      planId: n
    } = e;
    if (e.status === y.O0b.CANCELED || e.status === y.O0b.PAUSE_PENDING) return n;
    l()(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return el(t)
    });
    return n = null == i || (0, f.Q0)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
  },
  getStatusFromInvoice: function(e, t) {
    let {
      status: n
    } = e;
    if (e.status === y.O0b.CANCELED || e.status === y.O0b.PAUSE_PENDING) return n;
    l()(null != t, "Expected invoicePreview");
    let i = t.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return el(t)
    });
    return (null == i || (0, f.Q0)(i.subscriptionPlanId)) && (n = y.O0b.CANCELED), n
  },
  isBaseSubscriptionCanceled: eS,
  getPremiumGuildIntervalPrice: eN,
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
  getPremiumPlanItem: Z,
  getGuildBoostPlanItem: eb,
  isBoostOnlySubscription: function(e) {
    return null != e && null == Z(e) && null != eb(e)
  },
  getPremiumSkuIdForSubscription: eG,
  getPremiumTypeFromSubscription: function(e) {
    if (null != e) {
      let t = Z(e);
      if (null != t) return z(t.planId)
    }
  },
  getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
    if (null != e && null != e.renewalMutations) {
      let t = Z(e.renewalMutations);
      if (null != t) return z(t.planId)
    }
  },
  getPremiumGradientColor: function(e) {
    switch (e) {
      case b.p9.TIER_0:
        return U.Rj.PREMIUM_TIER_0;
      case b.p9.TIER_1:
        return U.Rj.PREMIUM_TIER_1;
      case b.p9.TIER_2:
        return U.Rj.PREMIUM_TIER_2
    }
  },
  castPremiumSubscriptionAsSkuId: ew,
  canUseAnimatedEmojis: function(e) {
    return (0, T.ks)(T.g_, e)
  },
  canUseEmojisEverywhere: function(e) {
    return (0, T.ks)(T.m_, e)
  },
  canUseSoundboardEverywhere: function(e) {
    return (0, T.ks)(T._y, e)
  },
  canUseCustomCallSounds: function(e) {
    return (0, T.ks)(T.tj, e)
  },
  canUploadLargeFiles: function(e) {
    return (0, T.ks)(T.EQ, e)
  },
  canUseBadges: function(e) {
    return (0, T.ks)(T.Pl, e)
  },
  canUseHighVideoUploadQuality: function(e) {
    return (0, T.ks)(T.wN, e)
  },
  canEditDiscriminator: function(e) {
    return (0, T.ks)(T._G, e)
  },
  hasBoostDiscount: function(e) {
    return (0, T.ks)(T.j4, e)
  },
  canUseAnimatedAvatar: function(e) {
    return (0, T.ks)(T.lX, e)
  },
  canUseFancyVoiceChannelReactions: function(e) {
    return (0, T.ks)(T.Uw, e)
  },
  canInstallPremiumApplications: function(e) {
    return (0, T.ks)(T.zm, e)
  },
  canUseIncreasedMessageLength: function(e) {
    return (0, T.ks)(T.zZ, e)
  },
  canUseIncreasedGuildCap: function(e) {
    return (0, T.ks)(T.do, e)
  },
  canRedeemPremiumPerks: function(e) {
    return (0, T.ks)(T.ZE, e)
  },
  canUsePremiumProfileCustomization: function(e) {
    return (0, T.ks)(T.Ej, e)
  },
  canUsePremiumAppIcons: function(e) {
    return (0, T.ks)(T.Ct, e)
  },
  canUsePremiumGuildMemberProfile: function(e) {
    return (0, T.ks)(T.O1, e)
  },
  canUseClientThemes: function(e) {
    return (0, T.ks)(T.uw, e)
  },
  canStreamQuality: function(e, t) {
    return !! function(e) {
      var t;
      let n = I.Z.getPerksDemos();
      return null !== (t = null == n ? void 0 : n[e]) && void 0 !== t && t
    }(d.q.STREAM_HIGH_QUALITY) || ("high" === e ? (0, T.ks)(T.O8, t) : "mid" === e && (0, T.ks)(T.g7, t))
  },
  hasFreeBoosts: function(e) {
    return (0, T.ks)(T.$0, e)
  },
  canUseCustomStickersEverywhere: function(e) {
    return (0, T.ks)(T.ME, e)
  },
  canUseCustomBackgrounds: function(e) {
    return (0, T.ks)(T.AN, e)
  },
  canUseCollectibles: function(e) {
    return (0, T.ks)(T._O, e)
  },
  canUseCustomNotificationSounds: function(e) {
    return (0, T.ks)(T.qH, e)
  },
  formatPriceString: function(e, t) {
    let n = (0, P.T4)(e.amount, e.currency),
      i = K(t);
    return "".concat(n, "/").concat(i)
  },
  StreamQuality: r
})