let r;
n.d(t, {
    Ql: function () {
        return c;
    },
    R_: function () {
        return u;
    },
    _2: function () {
        return d;
    }
}),
    n(653041),
    n(47120);
var i = n(65084),
    a = n(652874),
    s = n(388032),
    o = n(424395),
    l = n(689938);
r = n(330711).Z;
let u = (0, a.Z)((e) => ({
    isLoading: !1,
    inProgressLocale: void 0,
    error: void 0,
    setLoadingStarted: (t) =>
        e({
            isLoading: !0,
            inProgressLocale: t
        }),
    setLoadingSucceeded: (t) =>
        e((n) => {
            let { inProgressLocale: r } = n;
            r === t &&
                e({
                    isLoading: !1,
                    inProgressLocale: void 0,
                    error: void 0
                });
        }),
    setLoadingFailed: (t, n) =>
        e((r) => {
            let { inProgressLocale: i } = r;
            i === n &&
                e({
                    isLoading: !1,
                    inProgressLocale: void 0,
                    error: t
                });
        })
}));
function c(e) {
    return u.subscribe((t, n) => {
        if (null != n.inProgressLocale && null == t.inProgressLocale) null == t.error && e(n.inProgressLocale);
    });
}
async function d(e) {
    let t = u.getState();
    t.setLoadingStarted(e);
    let n = [];
    o.v ? (s.intl.setLocale(e), n.push((0, i.loadAllMessagesInLocale)(e))) : (l.Z.setLocale(e), n.push(l.Z.loadPromise)), null != r && (r.setLocale(e), n.push(r.loadPromise)), await Promise.all(n).catch((n) => t.setLoadingFailed(n, e)), t.setLoadingSucceeded(e);
}
