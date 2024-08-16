var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140);
let c = !1,
    u = !1,
    d = !1;
class _ extends (r = l.ZP.Store) {
    getIsTargeted() {
        return d;
    }
    shouldFetchCheckoutRecovery() {
        return !c && !u;
    }
}
(s = 'CheckoutRecoveryStore'),
    (a = 'displayName') in (i = _)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new _(o.Z, {
        CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
            (u = !0), (c = !1), (d = e.isTargeted);
        },
        CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
            (u = !0), (c = !1);
        },
        CHECKOUT_RECOVERY_STATUS_FETCH: function () {
            c = !0;
        },
        LOGOUT: function () {
            (c = !1), (u = !1), (d = !1);
        }
    }));
