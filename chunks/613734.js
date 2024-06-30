n.d(t, {
    KM: function () {
        return S;
    },
    U0: function () {
        return A;
    },
    YG: function () {
        return d;
    },
    y9: function () {
        return T;
    }
});
var i = n(470079), a = n(442837), s = n(709054), l = n(103879), r = n(364226), o = n(531441), c = n(236289), _ = n(788080), u = n(800530);
function E() {
    return (0, a.Wu)([c.Z], () => c.Z.getClassifications()).sort((e, t) => s.default.extractTimestamp(t.id) - s.default.extractTimestamp(e.id));
}
function d(e) {
    let t;
    let n = (0, a.e7)([c.Z], () => c.Z.getClassification(e)), s = (0, a.e7)([c.Z], () => c.Z.getClassificationRequestState(e)), E = (0, a.e7)([c.Z], () => c.Z.getIsDsaEligible()), d = (0, r.A)('classification_detail');
    if ((0, _.FB)(n)) {
        var T;
        t = (null === (T = n.guild_metadata) || void 0 === T ? void 0 : T.member_type) === o.wO.OWNER ? u.qS.GUILD_OWNER : u.qS.GUILD_MEMBER;
    } else
        t = u.qS.USER;
    return i.useEffect(() => {
        void 0 === n && null == s && l.NA(e);
    }, [
        e,
        n,
        s
    ]), {
        classification: n,
        classificationRequestState: s,
        isDsaEligible: E,
        isAppealEligible: E && null != n && null == n.appeal_status && (!(0, _.FB)(n) || d),
        violationType: t
    };
}
function T() {
    let e = E(), t = new Date();
    return e.filter(e => new Date(e.max_expiration_time) > t);
}
function S() {
    let e = E(), t = new Date();
    return e.filter(e => new Date(e.max_expiration_time) <= t);
}
function A() {
    return (0, a.e7)([c.Z], () => c.Z.getAppealSignal());
}
