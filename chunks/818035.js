"use strict";
s.r(t), s("653041"), s("47120");
var a, n, i, l, r = s("442837"),
  u = s("570140"),
  o = s("461655");
let d = [];

function c(e) {
  let {
    payment: t
  } = e, s = o.default.createFromServer(t), a = d.findIndex(e => e.id === t.id); - 1 === a ? (d.push(s), d.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : d[a] = s, d = [...d]
}
class E extends(a = r.default.Store) {
  getPayment(e) {
    return d.find(t => t.id === e)
  }
  getPayments() {
    return d
  }
}
l = "PaymentStore", (i = "displayName") in(n = E) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, t.default = new E(u.default, {
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
    let {
      payments: t
    } = e;
    for (let e of t) {
      let t = o.default.createFromServer(e),
        s = d.findIndex(t => t.id === e.id); - 1 !== s ? d[s] = t : d.push(t)
    }
    d.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), d = [...d]
  },
  PAYMENT_UPDATE: c,
  BILLING_PAYMENT_FETCH_SUCCESS: c,
  LOGOUT: function() {
    d = []
  }
})