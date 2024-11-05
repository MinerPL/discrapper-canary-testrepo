n.d(t, {
    Nx: function () {
        return p;
    },
    UV: function () {
        return I;
    },
    WR: function () {
        return v;
    },
    lr: function () {
        return g;
    },
    t7: function () {
        return m;
    },
    x8: function () {
        return S;
    }
}),
    n(47120);
var r = n(192379),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(544891),
    l = n(78839),
    u = n(775412),
    c = n(769415),
    d = n(104494),
    f = n(639119),
    _ = n(474936),
    h = n(981631);
function p() {
    let e = (0, f.N)(),
        t = (0, u._O)(),
        n = (0, d.Ng)(),
        r = m();
    return null != e || t || null != n || r;
}
let m = () => {
        var e;
        let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != n && a()(Date.now()) <= a()(n);
    },
    g = () => {
        var e;
        let t = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
        switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
            case _.dT:
            case _.rB:
                return {
                    duration: 1,
                    percentage: 30
                };
            case _.dB:
            case _.hs:
            case _.RU:
                return {
                    duration: 3,
                    percentage: 30
                };
            case _.ih:
                return {
                    duration: 1,
                    percentage: 40
                };
            case _.gW:
                return {
                    duration: 1,
                    percentage: 20
                };
            case _.Nl:
                return {
                    duration: 1,
                    percentage: 25
                };
            case _.n5:
                return {
                    duration: 1,
                    percentage: 40
                };
            default:
                return;
        }
    },
    E = async () => {
        let e = null;
        try {
            var t;
            let n = await o.tn.post({ url: h.ANM.CHURN_USER_OFFER });
            e = null !== (t = n.body.offer) && void 0 !== t ? t : null;
        } catch (e) {}
        return e;
    },
    v = (e) => {
        let [t, n] = r.useState(!1),
            [i, a] = r.useState(!1),
            [s, o] = r.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: i
            };
        let l = () => {
            n(!0), a(!1);
        };
        return (
            !i &&
                !t &&
                (a(!0),
                E()
                    .then((e) => {
                        o(e), l();
                    })
                    .catch((e) => {
                        l();
                    })),
            {
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: i
            }
        );
    },
    I = () => {
        let e = (0, s.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            t = m(),
            n = null !== e && e.hasPremiumNitroMonthly,
            r = null != e && null != e.trialId;
        return n && !r && !t;
    },
    S = (e) => {
        let t = (0, s.e7)([l.ZP], () => l.ZP.inReverseTrial()),
            n = (0, s.e7)([l.ZP], () => {
                var e;
                return (null === (e = l.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialId) === _.jz;
            }),
            r = c.Z.useExperiment(
                { location: e },
                {
                    disable: !n,
                    autoTrackExposure: n
                }
            ).enabled;
        return t || r;
    };
