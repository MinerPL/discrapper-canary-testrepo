n.d(t, {
    Vi: function () {
        return C;
    },
    W1: function () {
        return L;
    },
    k: function () {
        return D;
    },
    l2: function () {
        return O;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(399606),
    s = n(355467),
    o = n(211242),
    l = n(706454),
    u = n(594174),
    c = n(78839),
    d = n(431),
    f = n(74538),
    _ = n(937579),
    h = n(436783),
    p = n(617799),
    m = n(61196),
    g = n(104494),
    E = n(639119),
    v = n(921022),
    I = n(748770),
    S = n(725727),
    T = n(1844),
    b = n(474936),
    y = n(981631),
    A = n(388032);
function N(e) {
    var t, n, r;
    let { experimentEnabled: a, premiumSubscription: s, mostRecentSubscription: o } = e,
        l = !1,
        c = !1;
    if (null != o && o.status === y.O0b.ENDED) {
        let e = (null === (t = o.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i()(o.metadata.ended_at) : null,
            r = null === (n = (0, f.Af)(o)) || void 0 === n ? void 0 : n.planId,
            a = null != r && f.ZP.getPremiumType(r) === b.p9.TIER_2;
        c = null != e && a && e.add(10, 'days').isAfter(i()());
    }
    if (null != s) {
        let e = null === (r = (0, f.Af)(s)) || void 0 === r ? void 0 : r.planId,
            t = null != e && f.ZP.getPremiumType(e) === b.p9.TIER_2,
            n = u.default.getCurrentUser(),
            i = (null == s ? void 0 : s.trialId) != null && f.ZP.isPremiumExactly(n, b.p9.TIER_0);
        l = t || i;
    }
    return !a || l || c;
}
function C() {
    var e;
    let { paymentsBlocked: t } = o.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: n } = (0, S.mq)(),
        { enabled: r } = (0, m.ZP)(),
        { mostRecentSubscription: i, premiumSubscription: s } = (0, a.cj)([c.ZP], () => ({
            mostRecentSubscription: c.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.ZP.getPremiumTypeSubscription()
        })),
        l = (0, E.N)(),
        u = (0, g.Ng)(),
        d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf(),
        f = Date.now(),
        _ = f > d,
        { enabled: I } = (0, h.Z)();
    (0, v.Z)({
        delay: _ ? -1 : d - f,
        disable: I
    });
    let T =
            !N({
                experimentEnabled: r,
                premiumSubscription: s,
                mostRecentSubscription: i
            }) &&
            null == l &&
            null != n &&
            !t &&
            null == u,
        { enabled: b } = p.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: T,
                disable: !T
            }
        );
    return !_ && b;
}
async function R() {
    var e;
    let t = u.default.getCurrentUser(),
        n = !(null == t ? void 0 : t.isClaimed()),
        { paymentsBlocked: r } = o.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: i } = (0, m.aW)(),
        { enabled: a } = p.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 });
    if (n || r || !i || !a) return !1;
    if ((d.Z.shouldFetchOffer() && !(0, f.I5)(t) && (await (0, _.T)('BogoPromotionUtils')), d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !c.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(b.Si.TIER_2)) && (await (0, s.ou)()), !c.ZP.hasFetchedSubscriptions() && (await (0, s.jg)());
    let l = c.ZP.getMostRecentPremiumTypeSubscription();
    return !N({
        experimentEnabled: i,
        premiumSubscription: c.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: l
    });
}
async function O() {
    if (!(await R())) return;
    let e = T.Z.bogoPromotion;
    if (!(null != e && new Date(e.endDate).valueOf() >= Date.now())) await (0, I.L9)();
}
async function D() {
    let e = T.Z.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await R(),
        { enabled: r } = m.Am.getCurrentConfig({ location: '153d31_6' }, { autoTrackExposure: !1 }),
        { enabled: i } = p.Z.getCurrentConfig({ location: '153d31_7' }, { autoTrackExposure: t && r && n });
    return t && i && r && n;
}
function L() {
    switch (l.default.locale) {
        case 'de':
        case 'es-ES':
        case 'fr':
        case 'hr':
        case 'it':
        case 'lt':
        case 'nl':
        case 'pl':
        case 'pt-BR':
        case 'ro':
        case 'fi':
        case 'sv-SE':
        case 'tr':
        case 'cs':
        case 'el':
        case 'bg':
        case 'ru':
        case 'uk':
        case 'ja':
        case 'ko':
            return A.intl.string(A.t.OS9KPj);
        default:
            return A.intl.string(A.t.VeCPBQ);
    }
}
