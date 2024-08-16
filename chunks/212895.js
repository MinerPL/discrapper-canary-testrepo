n.d(t, {
    DE: function () {
        return f;
    },
    gr: function () {
        return p;
    },
    i1: function () {
        return E;
    },
    tD: function () {
        return h;
    }
}),
    n(47120);
var r = n(470079),
    i = n(512722),
    a = n.n(i),
    s = n(570140),
    o = n(821849),
    l = n(15640),
    u = n(509545),
    c = n(74538),
    d = n(981631),
    _ = n(474936);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [..._.YQ];
    return null == e || u.Z.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, n) => {
              s.Z.wait(async () => {
                  try {
                      await (0, o.Gn)(t), e();
                  } catch (e) {
                      n(e);
                  }
              });
          });
}
function f(e, t, n) {
    let r,
        i = [],
        s = [],
        o = { purchaseType: n ? d.tuJ.GIFT : d.tuJ.DEFAULT };
    return (r = 'string' == typeof e ? u.Z.get(e) : e), a()(r, 'subscription plan not loaded'), null != t && u.Z.hasPaymentSourceForSKUId(t, r.skuId) && (o.paymentSourceId = t), (i = (s = (0, c.T4)(r.id, o)).map((e) => e.currency)).length < 1 && (i = [d.pKx.USD]), i;
}
function h(e, t, n) {
    let r = u.Z.get(e);
    return a()(null != r, 'plan is undefined'), f(r, n, !1).includes(t);
}
function p(e, t, n, i, a) {
    let [s, o] = r.useReducer(
            (e, t) => ({
                ...e,
                ...t
            }),
            null != n
                ? {
                      paymentSourceId: n,
                      currency: e,
                      loaded: !1
                  }
                : {
                      currency: e,
                      loaded: !1
                  }
        ),
        c = (0, l.V)(a);
    r.useEffect(() => {
        (async () => {
            try {
                await E(n, a);
            } catch (e) {
                if (10027 !== e.code) throw e;
            }
            let e = [];
            null != t && null != u.Z.get(t) && (e = f(t, n, i)),
                e.length > 0
                    ? o({
                          paymentSourceId: n,
                          currency: e[0],
                          loaded: !0
                      })
                    : o({
                          paymentSourceId: n,
                          loaded: !1
                      });
        })();
    }, [n, JSON.stringify(a), t, i, c]);
    let d = s.paymentSourceId !== n || null == t || !c || !0 !== s.loaded;
    return {
        hasFetchedSubscriptionPlans: c,
        priceOptions: s,
        setCurrency: (e) => {
            o({ currency: e });
        },
        currencyLoading: d
    };
}
