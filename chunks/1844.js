"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(581883);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l() {
  return {
    hasFetchedConsumedInboundPromotionId: !1,
    consumedInboundPromotionId: null,
    lastSeenOutboundPromotionStartDate: null,
    bogoPromotion: null
  }
}
let u = l(),
  _ = !1,
  d = null,
  c = !1,
  E = null,
  I = [],
  T = null;

function h() {
  let e = null;
  for (let t of I)(null == e || new Date(t.startDate) > new Date(e)) && (e = t.startDate);
  return e
}

function S() {
  var e, t, n;
  T = null !== (n = null === (t = o.Z.settings.userContent) || void 0 === t ? void 0 : null === (e = t.lastDismissedOutboundPromotionStartDate) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null
}
class f extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    null != e && (u = e), this.waitFor(o.Z), this.syncWith([o.Z], S)
  }
  get outboundPromotions() {
    return I
  }
  get lastSeenOutboundPromotionStartDate() {
    return u.lastSeenOutboundPromotionStartDate
  }
  get lastDismissedOutboundPromotionStartDate() {
    return T
  }
  get lastFetchedActivePromotions() {
    return E
  }
  get isFetchingActiveOutboundPromotions() {
    return c
  }
  get hasFetchedConsumedInboundPromotionId() {
    return u.hasFetchedConsumedInboundPromotionId
  }
  get consumedInboundPromotionId() {
    return u.consumedInboundPromotionId
  }
  get bogoPromotion() {
    return u.bogoPromotion
  }
  get isFetchingActiveBogoPromotion() {
    return _
  }
  get lastFetchedActiveBogoPromotion() {
    return d
  }
  getState() {
    return u
  }
}
a(f, "displayName", "PromotionsStore"), a(f, "persistKey", "PromotionsPersistedStore"), t.Z = new f(s.Z, {
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS: function(e) {
    let {
      activeOutboundPromotions: t,
      consumedInboundPromotionId: n
    } = e;
    I = t, E = Date.now(), c = !1, !u.hasFetchedConsumedInboundPromotionId && (u.hasFetchedConsumedInboundPromotionId = !0, u.consumedInboundPromotionId = n)
  },
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH: function() {
    c = !0
  },
  ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL: function() {
    I = [], c = !1
  },
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function(e) {
    let {
      activePromotion: t
    } = e;
    u.bogoPromotion = t, d = Date.now(), _ = !1
  },
  ACTIVE_BOGO_PROMOTION_FETCH: function() {
    _ = !0
  },
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function() {
    u.bogoPromotion = null, _ = !1
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function() {
    if (0 === I.length) return !1;
    let e = h();
    null != e && (T = e)
  },
  OUTBOUND_PROMOTIONS_SEEN: function() {
    if (0 === I.length) return !1;
    let e = h();
    null != e && (T = e, u.lastSeenOutboundPromotionStartDate = e)
  },
  LOGOUT: function() {
    u = l(), c = !1, E = null, _ = !1, d = null, I = []
  }
})