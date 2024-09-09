t(653041), t(47120);
var n,
    a,
    i,
    r,
    o = t(442837),
    l = t(570140),
    c = t(461655);
let d = [];
function _(e) {
    let { payment: s } = e,
        t = c.Z.createFromServer(s),
        n = d.findIndex((e) => e.id === s.id);
    -1 === n ? (d.push(t), d.sort((e, s) => s.createdAt.getTime() - e.createdAt.getTime())) : (d[n] = t), (d = [...d]);
}
class E extends (n = o.ZP.Store) {
    getPayment(e) {
        return d.find((s) => s.id === e);
    }
    getPayments() {
        return d;
    }
}
(r = 'PaymentStore'),
    (i = 'displayName') in (a = E)
        ? Object.defineProperty(a, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[i] = r),
    (s.Z = new E(l.Z, {
        BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
            let { payments: s } = e;
            for (let e of s) {
                let s = c.Z.createFromServer(e),
                    t = d.findIndex((s) => s.id === e.id);
                -1 !== t ? (d[t] = s) : d.push(s);
            }
            d.sort((e, s) => s.createdAt.getTime() - e.createdAt.getTime()), (d = [...d]);
        },
        PAYMENT_UPDATE: _,
        BILLING_PAYMENT_FETCH_SUCCESS: _,
        LOGOUT: function () {
            d = [];
        }
    }));
