"use strict";
n.r(t), n("411104"), n("47120");
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("570140"),
  i = n("317770"),
  r = n("100527"),
  o = n("963249"),
  u = n("594174"),
  d = n("295226"),
  c = n("74538"),
  f = n("937579"),
  E = n("316941"),
  _ = n("633361");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class m extends i.default {
  _initialize() {
    __OVERLAY__ ? l.default.subscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (l.default.subscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), l.default.subscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), l.default.subscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer))
  }
  _terminate() {
    __OVERLAY__ ? l.default.unsubscribe("PREMIUM_PAYMENT_MODAL_OPEN", this._handlePremiumPaymentModalOpen) : (l.default.unsubscribe("PREMIUM_PAYMENT_MODAL_CLOSE", this._handlePremiumPaymentModalClose), l.default.unsubscribe("MESSAGE_LENGTH_UPSELL", this.handleMessageLengthUpsell), l.default.unsubscribe("POST_CONNECTION_OPEN", this._maybeFetchPremiumOffer))
  }
  handleMessageLengthUpsell(e) {
    let {
      channel: t,
      content: l
    } = e;
    (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("33184").then(n.bind(n, "465836"));
      return n => (0, s.jsx)(e, {
        channel: t,
        content: l,
        ...n
      })
    })
  }
  openPremiumPaymentModalInApp(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    return new Promise((t, n) => {
      (0, o.default)({
        ...e,
        onClose: e => {
          e ? t() : n()
        }
      })
    })
  }
  openPremiumPaymentModalInOverlay(e) {
    if (__OVERLAY__) throw Error("Should not use this function from the overlay, use ModalAPI.openModal instead");
    let {
      initialPlanId: t,
      subscriptionTier: n,
      followupSKUInfo: s,
      analyticsObject: a
    } = null != e ? e : {};
    return new Promise((e, i) => {
      this._premiumPaymentModalCloseResolve = e, this._premiumPaymentModalCloseReject = i, l.default.dispatch({
        type: "PREMIUM_PAYMENT_MODAL_OPEN",
        initialPlanId: t,
        subscriptionTier: n,
        followupSKUInfo: s,
        analyticsObject: a
      })
    })
  }
  constructor(...e) {
    super(...e), T(this, "_premiumPaymentModalCloseResolve", null), T(this, "_premiumPaymentModalCloseReject", null), T(this, "_maybeFetchPremiumOffer", () => {
      let e = u.default.getCurrentUser();
      null != e && e.verified && !(0, c.isPremium)(e) && d.default.shouldFetchOffer() && ((0, _.shouldHitUserOfferEndPoints)("PremiumManager") ? (0, f.fetchUserOffer)() : E.default.fetchUserTrialOffer())
    }), T(this, "_handlePremiumPaymentModalOpen", e => {
      (0, o.default)({
        ...e,
        analyticsLocations: [r.default.OVERLAY],
        onClose: e => {
          l.default.dispatch({
            type: "PREMIUM_PAYMENT_MODAL_CLOSE",
            didSucceed: e
          })
        }
      })
    }), T(this, "_handlePremiumPaymentModalClose", e => {
      let {
        didSucceed: t
      } = e;
      t && null != this._premiumPaymentModalCloseResolve ? this._premiumPaymentModalCloseResolve() : null != this._premiumPaymentModalCloseReject && this._premiumPaymentModalCloseReject(), this._premiumPaymentModalCloseResolve = null, this._premiumPaymentModalCloseReject = null
    })
  }
}
t.default = new m