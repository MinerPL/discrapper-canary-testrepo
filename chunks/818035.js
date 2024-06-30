s(653041), s(47120);
var n, a, i, r, o = s(442837), l = s(570140), c = s(461655);
let d = [];
function _(e) {
    let {payment: t} = e, s = c.Z.createFromServer(t), n = d.findIndex(e => e.id === t.id);
    -1 === n ? (d.push(s), d.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : d[n] = s, d = [...d];
}
class E extends (n = o.ZP.Store) {
    getPayment(e) {
        return d.find(t => t.id === e);
    }
    getPayments() {
        return d;
    }
}
r = 'PaymentStore', (i = 'displayName') in (a = E) ? Object.defineProperty(a, i, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[i] = r, t.Z = new E(l.Z, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let {payments: t} = e;
        for (let e of t) {
            let t = c.Z.createFromServer(e), s = d.findIndex(t => t.id === e.id);
            -1 !== s ? d[s] = t : d.push(t);
        }
        d.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), d = [...d];
    },
    PAYMENT_UPDATE: _,
    BILLING_PAYMENT_FETCH_SUCCESS: _,
    LOGOUT: function () {
        d = [];
    }
});
