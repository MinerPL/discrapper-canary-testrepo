n.d(t, {
    Vi: function () {
        return y;
    },
    W1: function () {
        return M;
    },
    k: function () {
        return b;
    },
    l2: function () {
        return L;
    }
});
var r = n(913527), i = n.n(r), a = n(399606), o = n(704215), s = n(355467), l = n(774078), u = n(211242), c = n(605236), d = n(706454), _ = n(594174), E = n(78839), f = n(295226), h = n(74538), p = n(316941), m = n(59561), I = n(388622), T = n(61196), g = n(639119), S = n(748770), A = n(725727), N = n(1844), v = n(474936), O = n(981631), R = n(689938);
function C(e) {
    var t, n, r;
    let {
            experimentEnabled: a,
            premiumSubscription: o,
            mostRecentSubscription: s
        } = e, l = !1, u = !1;
    if (null != s && s.status === O.O0b.ENDED) {
        let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i()(s.metadata.ended_at) : null, r = null === (n = (0, h.Af)(s)) || void 0 === n ? void 0 : n.planId, a = null != r && h.ZP.getPremiumType(r) === v.p9.TIER_2;
        u = null != e && a && e.add(10, 'days').isAfter(i()());
    }
    if (null != o) {
        let e = null === (r = (0, h.Af)(o)) || void 0 === r ? void 0 : r.planId, t = null != e && h.ZP.getPremiumType(e) === v.p9.TIER_2, n = _.default.getCurrentUser(), i = (null == o ? void 0 : o.trialId) != null && h.ZP.isPremiumExactly(n, v.p9.TIER_0);
        l = t || i;
    }
    return !a || l || u;
}
function y() {
    var e;
    let {paymentsBlocked: t} = u.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }), {promotion: n} = (0, A.mq)(), {enabled: r} = (0, T.ZP)(), {
            mostRecentSubscription: i,
            premiumSubscription: o
        } = (0, a.cj)([E.ZP], () => ({
            mostRecentSubscription: E.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: E.ZP.getPremiumTypeSubscription()
        })), s = (0, g.N)(), c = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
    (0, l.Z)(c, 1000, void 0, c + 2000 < Date.now());
    let d = !C({
            experimentEnabled: r,
            premiumSubscription: o,
            mostRecentSubscription: i
        }) && null == s && null != n && !t, _ = Date.now(), {enabled: f} = I.Z.useExperiment({ location: '153d31_2' }, {
            autoTrackExposure: d,
            disable: !d
        });
    return !(_ > c) && f;
}
async function D() {
    var e;
    let t = _.default.getCurrentUser(), n = !(null == t ? void 0 : t.isClaimed()), {paymentsBlocked: r} = u.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }), {enabled: i} = (0, T.aW)(), {enabled: a} = I.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 }), {enabled: o} = m.p.getCurrentConfig({ location: '153d31_5' }, { autoTrackExposure: !1 });
    if (n || r || !i || !o && !a)
        return !1;
    if (f.Z.shouldFetchOffer() && await p.Z.fetchUserTrialOffer(), f.Z.hasFetchedOffer() && f.Z.hasAnyUnexpiredOffer())
        return !1;
    !E.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(v.Si.TIER_2)) && await (0, s.ou)(), !E.ZP.hasFetchedSubscriptions() && await (0, s.jg)();
    let l = E.ZP.getMostRecentPremiumTypeSubscription();
    return !C({
        experimentEnabled: i,
        premiumSubscription: E.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: l
    });
}
async function L() {
    if (!await D())
        return;
    let e = N.Z.bogoPromotion;
    if (!(null != e && new Date(e.endDate).valueOf() >= Date.now()))
        await (0, S.L9)();
}
async function b() {
    let e = N.Z.bogoPromotion, t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(), n = (0, c.un)(o.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL), r = await D(), {enabled: i} = T.Am.getCurrentConfig({ location: '153d31_6' }, { autoTrackExposure: !1 }), {enabled: a} = m.p.getCurrentConfig({ location: '153d31_7' }, { autoTrackExposure: t && i && !n && r });
    return t && a && i && !n && r;
}
function M() {
    switch (d.default.locale) {
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
        return R.Z.Messages.NITRO_BADGE_TEXT;
    default:
        return R.Z.Messages.BOGO_PILL;
    }
}
