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
var i = n(333392),
    a = n(903797),
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
    let a = [];
    o.vJ ? (s.intl.setLocale(e), a.push((0, i.loadAllMessagesInLocale)(e))) : (l.Z.setLocale(e), a.push(l.Z.loadPromise)),
        null != r && (r.setLocale(e), a.push(r.loadPromise)),
        a.push(f(e)),
        a.push(_(e)),
        a.push(
            (function (e) {
                let { setTags: t } = n(960048).Z;
                return t({ locale: e }), Promise.resolve();
            })(e)
        ),
        await Promise.all(a).catch((n) => t.setLoadingFailed(n, e)),
        t.setLoadingSucceeded(e);
}
async function f(e) {
    let t = n(602473).q[e];
    if (null == t) return;
    let r = await t().default;
    {
        let { registerLocale: t } = n(674091);
        t(e, r);
    }
}
async function _(e) {
    let t = n(352968).y[e];
    null != t && (await t());
    let r = [],
        i = ('no' === e ? 'nb' : e).split('-');
    for (; i.length > 0; ) r.push(i.join('-')), i.pop();
    r.push('en-US'), n(913527).locale(r);
}
