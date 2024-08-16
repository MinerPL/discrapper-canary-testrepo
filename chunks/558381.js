t.d(e, {
    Hq: function () {
        return I;
    },
    M9: function () {
        return f;
    },
    Oj: function () {
        return _;
    },
    cj: function () {
        return x;
    },
    km: function () {
        return S;
    },
    oJ: function () {
        return u;
    },
    rV: function () {
        return m;
    },
    yt: function () {
        return p;
    }
});
var i = t(544891),
    l = t(570140),
    r = t(115130);
t(812206);
var o = t(703656),
    s = t(55563);
t(551428);
var a = t(695103),
    c = t(73346),
    d = t(981631);
function u(n) {
    return (0, c.Kb)({
        url: d.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
        query: { application_id: n },
        oldFormErrors: !0
    }).then(
        (n) => (
            l.Z.dispatch({
                type: 'STORE_LISTINGS_FETCH_SUCCESS',
                storeListings: n.body.map((n) => ({
                    ...n,
                    published: !0
                }))
            }),
            n.body
        )
    );
}
function S(n) {
    let e = s.Z.get(n),
        t = null != e && (a.Z.inTestModeForApplication(e.applicationId) || r.Z.inDevModeForApplication(e.applicationId));
    return (
        l.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_START',
            skuId: n
        }),
        (0, c.Kb)(t ? d.ANM.STORE_LISTINGS_SKU(n) : d.ANM.STORE_PUBLISHED_LISTINGS_SKU(n))
            .then((n) => {
                t
                    ? l.Z.dispatch({
                          type: 'STORE_LISTINGS_FETCH_SUCCESS',
                          storeListings: n.body
                      })
                    : l.Z.dispatch({
                          type: 'STORE_LISTING_FETCH_SUCCESS',
                          storeListing: n.body
                      });
            })
            .catch(() => {
                l.Z.dispatch({
                    type: 'SKU_FETCH_FAIL',
                    skuId: n
                });
            })
    );
}
function m(n) {
    return (0, c.Kb)(d.ANM.STORE_LISTING(n)).then((n) => {
        l.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: n.body
        });
    });
}
function I(n) {
    return (0, c.Kb)(d.ANM.STORE_PUBLISHED_LISTINGS_APPLICATION(n)).then((n) => {
        l.Z.dispatch({
            type: 'STORE_LISTING_FETCH_SUCCESS',
            storeListing: n.body
        });
    });
}
function x() {
    l.Z.dispatch({ type: 'APPLICATION_STORE_MATURE_AGREE' });
}
function f() {
    (0, o.uL)(d.Z5c.APPLICATION_STORE);
}
function _(n) {
    return i.tn.post({
        url: d.ANM.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(n),
        oldFormErrors: !0
    });
}
function p(n, e) {
    let { pathname: t, ...i } = (0, c.ZI)(n, e);
    (0, o.uL)(t, i);
}
