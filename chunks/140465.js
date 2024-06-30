n.d(t, {
    Nx: function () {
        return h;
    },
    UV: function () {
        return g;
    },
    WR: function () {
        return T;
    },
    lr: function () {
        return m;
    },
    t7: function () {
        return p;
    }
}), n(47120);
var r = n(470079), i = n(913527), a = n.n(i), o = n(442837), s = n(544891), l = n(78839), u = n(775412), c = n(529537), d = n(104494), _ = n(639119), E = n(474936), f = n(981631);
function h() {
    let e = (0, _.N)(), t = (0, u._O)(), n = (0, d.Ng)(), r = p();
    return null != e || t || null != n || r;
}
let p = () => {
        var e;
        let t = (0, o.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()), n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
        return null != n && a()(Date.now()) <= a()(n);
    }, m = () => {
        var e;
        let t = (0, o.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription());
        switch (null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_id) {
        case E.dT:
        case E.rB:
            return {
                duration: 1,
                percentage: 30
            };
        case E.dB:
        case E.hs:
        case E.RU:
            return {
                duration: 3,
                percentage: 30
            };
        case E.ih:
            return {
                duration: 1,
                percentage: 40
            };
        case E.gW:
            return {
                duration: 1,
                percentage: 20
            };
        case E.Nl:
            return {
                duration: 1,
                percentage: 25
            };
        default:
            return;
        }
    }, I = async () => {
        let e = null;
        try {
            var t;
            let n = await s.tn.post({ url: f.ANM.CHURN_USER_OFFER });
            e = null !== (t = n.body.offer) && void 0 !== t ? t : null;
        } catch (e) {
        }
        return e;
    }, T = e => {
        let [t, n] = r.useState(!1), [i, a] = r.useState(!1), [o, s] = r.useState(null);
        if (e)
            return {
                churnUserDiscountOffer: o,
                isFetchingChurnDiscountOffer: i
            };
        let l = () => {
            n(!0), a(!1);
        };
        return !i && !t && (a(!0), I().then(e => {
            s(e), l();
        }).catch(e => {
            l();
        })), {
            churnUserDiscountOffer: o,
            isFetchingChurnDiscountOffer: i
        };
    }, g = () => {
        let {enabled: e} = c.Z.useExperiment({ location: 'useShouldFetchChurnOffer' }, { autoTrackExposure: !1 }), t = (0, o.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()), n = p(), r = null !== t && t.hasPremiumNitroMonthly, i = null != t && null != t.trialId;
        return e && r && !i && !n;
    };
