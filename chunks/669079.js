"use strict";
n.d(t, {
  Bg: function() {
    return b
  },
  E5: function() {
    return q
  },
  Fp: function() {
    return k
  },
  JT: function() {
    return z
  },
  L2: function() {
    return Y
  },
  MY: function() {
    return y
  },
  Nz: function() {
    return x
  },
  Q_: function() {
    return B
  },
  TO: function() {
    return H
  },
  Z0: function() {
    return G
  },
  bT: function() {
    return V
  },
  dM: function() {
    return Z
  },
  dQ: function() {
    return F
  },
  e$: function() {
    return W
  },
  iM: function() {
    return j
  },
  pO: function() {
    return U
  },
  xr: function() {
    return i
  },
  z2: function() {
    return K
  }
}), n(47120), n(757143), n(627341);
var i, r, s = n(278074),
  o = n(873546),
  a = n(442837),
  l = n(34756),
  u = n(100159),
  _ = n(912788),
  d = n(594174),
  c = n(626135),
  E = n(823379),
  I = n(358085),
  T = n(74538),
  h = n(226951),
  S = n(73346),
  f = n(981631),
  N = n(474936),
  A = n(689938);
let m = h.Z.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
  O = [m, ...["discordapp.com/gifts", "discord.com/gifts"].map(e => h.Z.escape(e))].join("|"),
  R = RegExp("(?: |^|https?://)(?:".concat(O, ")/([a-z0-9-]+)"), "gi"),
  C = [...["discord.com/billing/promotions", "promos.discord.gg"].map(e => h.Z.escape(e))].join("|"),
  p = RegExp("(?: |^|https?://)(?:".concat(C, ")/([a-z0-9-]+)"), "gi"),
  g = (e, t) => Array(t).fill(void 0).map(() => "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")).join("-?"),
  L = g(4, 4),
  v = g(4, 6),
  D = g(5, 3),
  M = [L, v, D, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
  P = new RegExp("^(".concat("WUMP-?", ")?(").concat(M, ")$"));
(r = i || (i = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.CUSTOM_STYLE = 1] = "CUSTOM_STYLE", r[r.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD";
let y = (e, t) => o.tq || o.Em ? 0 : null != e || t ? 2 : 1,
  U = e => 0 !== y(e);

function b(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : void 0;
  return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
}

function G(e) {
  let [t, n, i] = e.split(":");
  return {
    skuId: t,
    subscriptionPlanId: "" === n ? null : n,
    giftStyle: "" !== i && null != i ? Number.parseInt(i) : void 0
  }
}

function w(e) {
  return e.replace(/[^A-Za-z0-9]/g, "")
}
let k = e => (null == e ? void 0 : e.type) === f.uaV.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === f.hBH.GIFT,
  B = e => {
    let t;
    if (null == e) return [];
    let n = new Set;
    for (; null != (t = R.exec(e)) && n.size < 3;) n.add(w(t[1]));
    for (; null != (t = p.exec(e)) && n.size < 3;) n.add(w(t[1]));
    return Array.from(n)
  };

function x() {
  let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    n = window.GLOBAL_ENV.GIFT_CODE_HOST;
  return null == n || (0, I.isAndroid)() ? (n = location.host, e = "/gifts/".concat(t)) : e = "/".concat(t), "".concat(location.protocol, "//").concat(n).concat(e)
}
async function V(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  try {
    let i = (await (0, S.Kb)({
      url: f.ANM.GIFT_CODE_RESOLVE(e),
      query: {
        with_application: t,
        with_subscription_plan: n
      },
      oldFormErrors: !0
    })).body;
    return c.default.track(f.rMx.GIFT_CODE_RESOLVED, {
      resolved: !0,
      gift_code: i.code,
      gift_code_max_uses: i.max_uses,
      sku_id: i.store_listing.sku.id,
      sku_type: i.store_listing.sku.type,
      application_id: i.store_listing.sku.application_id,
      store_title: i.store_listing.sku.name
    }, {
      flush: !0
    }), i
  } catch (t) {
    throw c.default.track(f.rMx.GIFT_CODE_RESOLVED, {
      resolved: !1,
      gift_code: e
    }), new l.Z(t)
  }
}

function Z(e, t) {
  c.default.track(f.rMx.GIFT_CODE_COPIED, {
    ...(0, u.Z)(t, !1, !1),
    ...e.analyticsData
  })
}

function H(e, t, n, i, r, s, o) {
  return null == n && (i || r || null == e) ? !o || s || i || r ? i && (t.isSubscription || null != e) ? f.wZ8.SUCCESS : f.wZ8.CONFIRM : f.wZ8.OPEN : f.wZ8.ERROR
}

function F(e, t, n) {
  switch (e) {
    case f.wZ8.ERROR:
      return A.Z.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
    case f.wZ8.SUCCESS:
      return t.isSubscription ? A.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
        skuName: n.name
      }) : A.Z.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
    case f.wZ8.CONFIRM:
    default:
      return t.isSubscription ? A.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
        skuName: n.name
      }) : A.Z.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
  }
}

function Y(e, t, n) {
  switch (e) {
    case f.wZ8.ERROR:
      return A.Z.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
    case f.wZ8.SUCCESS:
      if (__OVERLAY__) return A.Z.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
      if (t.isSubscription) return A.Z.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
      return A.Z.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
    case f.wZ8.OPEN:
      return A.Z.Messages.GIFT_OPEN_PROMPT;
    case f.wZ8.CONFIRM:
    default:
      if (null != n && n) return A.Z.Messages.GIFT_CODE_AUTH_ACCEPT;
      if (null != t.giftStyle) return t.isClaimed ? A.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : A.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
      return t.isSubscription ? A.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : A.Z.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
  }
}

function j(e) {
  let {
    step: t,
    sku: n,
    libraryApplication: i,
    error: r,
    accepted: o,
    accepting: a,
    onGoToLibrary: l,
    subscriptionPlan: u = null
  } = e;
  switch (t) {
    case f.wZ8.ERROR:
      return W(i, r, o, a, l);
    case f.wZ8.SUCCESS:
      if (null != u) {
        var _;
        return _ = u, (0, s.EQ)(_).with({
          interval: N.rV.MONTH,
          premiumSubscriptionType: N.p9.TIER_2
        }, () => A.Z.Messages.PREMIUM_FEATURES_TIER_2.format({
          timeInterval: A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
        })).with({
          interval: N.rV.YEAR,
          premiumSubscriptionType: N.p9.TIER_2
        }, () => A.Z.Messages.PREMIUM_FEATURES_TIER_2.format({
          timeInterval: A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
        })).with({
          interval: N.rV.MONTH,
          premiumSubscriptionType: N.p9.TIER_1
        }, () => A.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({
          intervalCount: _.intervalCount
        })).with({
          interval: N.rV.YEAR,
          premiumSubscriptionType: N.p9.TIER_1
        }, () => A.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({
          intervalCount: _.intervalCount
        })).otherwise(() => A.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC)
      }
      return A.Z.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
        skuName: n.name
      });
    case f.wZ8.CONFIRM:
    default:
      if (null != u) return (u.interval === N.rV.MONTH ? A.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : A.Z.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM).format({
        skuName: n.name,
        intervalCount: u.intervalCount
      });
      return A.Z.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
        skuName: n.name
      })
  }
}

function W(e, t, n, i, r) {
  let s = A.Z.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
    onGoToLibrary: r
  });
  return null != (n || i ? void 0 : e) ? s : null == t ? null : function(e, t) {
    switch (e.code) {
      case f.evJ.INVALID_GIFT_SELF_REDEMPTION:
        return A.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
      case f.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED:
        return A.Z.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
      case f.evJ.INVALID_GIFT_REDEMPTION_OWNED:
        return A.Z.Messages.GIFT_ERROR_OWNED;
      case f.evJ.UNKNOWN_GIFT_CODE:
        return A.Z.Messages.GIFT_CONFIRMATION_BODY_INVALID;
      case f.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
        return A.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
          planName: (0, T.M5)(t, N.p9.TIER_2) ? A.Z.Messages.PREMIUM_TIER_2 : A.Z.Messages.PREMIUM_TIER_1
        });
      case f.evJ.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
        return A.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
      case f.evJ.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
        return A.Z.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
      case f.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
        return A.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
      case f.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
        return A.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
      default:
        return A.Z.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
    }
  }(t, d.default.getCurrentUser())
}

function K(e, t, n) {
  let i = t.applicationId,
    r = e.length > 0 ? e : [i],
    s = r.map(e => n.getLibraryApplication(i, e, !0)).filter(E.lm);
  return s.length === r.length ? s[0] : null
}

function z(e) {
  let t = e.trim().split("/").pop().match(P);
  if (null == t) return null;
  let [n, i, r] = t;
  return null == r ? null : r.replace(/-/g, "")
}
let q = (e, t) => (0, a.e7)([_.Z], () => {
  if (null == e || !t) return null;
  let n = _.Z.getGiftCode(e);
  return null == n || "" === n ? null : n
})