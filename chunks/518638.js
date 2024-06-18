"use strict";
n.d(t, {
  A2: function() {
    return f
  },
  BU: function() {
    return N
  },
  Nw: function() {
    return O
  },
  Pz: function() {
    return E
  },
  Qf: function() {
    return R
  },
  X_: function() {
    return I
  },
  ZC: function() {
    return m
  },
  kr: function() {
    return T
  },
  t8: function() {
    return S
  },
  tq: function() {
    return A
  }
}), n(789020), n(757143);
var i = n(544891),
  r = n(780384),
  s = n(706454),
  o = n(78839),
  a = n(295226),
  l = n(630388),
  u = n(358085),
  _ = n(1844),
  d = n(474936),
  c = n(981631);

function E(e, t) {
  let n = (0, r.wj)(t) ? "logo-dark" : "logo-light",
    i = window.GLOBAL_ENV.CDN_HOST,
    s = "?size=256";
  return null != i ? "".concat(location.protocol, "//").concat(i, "/promotions/").concat(e, "/").concat(n).concat(s) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(s)
}

function I(e) {
  return {
    id: e.id,
    startDate: e.start_date,
    endDate: e.end_date,
    outboundRedemptionEndDate: e.outbound_redemption_end_date,
    outboundTitle: e.outbound_title,
    outboundRedemptionModalBody: e.outbound_redemption_modal_body,
    outboundRedemptionPageLink: e.outbound_redemption_page_link,
    outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
    outboundTermsAndConditions: e.outbound_terms_and_conditions,
    flags: e.flags
  }
}

function T(e) {
  return {
    id: e.id,
    startDate: e.start_date,
    endDate: e.end_date
  }
}

function h(e) {
  return {
    code: e.code,
    userId: e.user_id,
    claimedAt: e.claimed_at,
    promotion: I(e.promotion)
  }
}
async function S() {
  return (await i.tn.get({
    url: c.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
    query: {
      locale: s.default.locale
    },
    oldFormErrors: !0
  })).body.map(h)
}
async function f(e) {
  return h((await i.tn.post({
    url: c.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e)
  })).body)
}

function N(e, t) {
  return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e)) : t.outboundRedemptionPageLink
}

function A() {
  let e = _.Z.lastSeenOutboundPromotionStartDate,
    t = _.Z.outboundPromotions,
    n = _.Z.consumedInboundPromotionId,
    i = t.filter(e => {
      let {
        id: t,
        flags: i
      } = e;
      return t !== n && !(0, l.yE)(i, d.TD.SUPPRESS_NOTIFICATION)
    }),
    r = null == e ? i : i.filter(t => {
      let {
        startDate: n
      } = t;
      return new Date(n) > new Date(e)
    }),
    s = _.Z.lastDismissedOutboundPromotionStartDate,
    u = o.ZP.getPremiumTypeSubscription(),
    c = (null == u ? void 0 : u.trialId) != null,
    E = a.Z.hasAnyUnexpiredOffer(),
    I = c || E ? r.filter(e => O(e)) : r;
  return 0 !== I.length && (null == s || I.some(e => {
    let {
      startDate: t
    } = e;
    return new Date(t) > new Date(s)
  }))
}

function m(e) {
  return !(0, u.isIOS)() || !(0, l.yE)(e.flags, d.TD.IS_BLOCKED_IOS)
}

function O(e) {
  return (0, l.yE)(e.flags, d.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
}

function R(e, t) {
  return null != t[e.id] || O(e)
}