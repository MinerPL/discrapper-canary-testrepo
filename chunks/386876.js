"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
}), s("424973"), s("222007");
var a = s("446674"),
  n = s("913144"),
  i = s("8966");
let l = [];

function r(e) {
  let {
    payment: t
  } = e, s = i.default.createFromServer(t), a = l.findIndex(e => e.id === t.id); - 1 === a ? (l.push(s), l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : l[a] = s, l = [...l]
}
class u extends a.default.Store {
  getPayment(e) {
    return l.find(t => t.id === e)
  }
  getPayments() {
    return l
  }
}
u.displayName = "PaymentStore";
var o = new u(n.default, {
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
    let {
      payments: t
    } = e;
    for (let e of t) {
      let t = i.default.createFromServer(e),
        s = l.findIndex(t => t.id === e.id); - 1 !== s ? l[s] = t : l.push(t)
    }
    l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), l = [...l]
  },
  PAYMENT_UPDATE: r,
  BILLING_PAYMENT_FETCH_SUCCESS: r,
  LOGOUT: function() {
    l = []
  }
})