i.d(t, {
    KM: function () {
        return A;
    },
    U0: function () {
        return p;
    },
    YG: function () {
        return E;
    },
    y9: function () {
        return S;
    }
});
var e = i(470079),
    a = i(442837),
    o = i(709054),
    l = i(103879),
    s = i(364226),
    c = i(48484),
    u = i(531441),
    r = i(236289),
    _ = i(788080),
    d = i(800530);
function f() {
    return (0, a.Wu)([r.Z], () => r.Z.getClassifications()).sort((n, t) => o.default.extractTimestamp(t.id) - o.default.extractTimestamp(n.id));
}
function E(n) {
    let t;
    let i = (0, a.e7)([r.Z], () => r.Z.getClassification(n)),
        o = (0, a.e7)([r.Z], () => r.Z.getClassificationRequestState(n)),
        f = (0, a.e7)([r.Z], () => r.Z.getIsDsaEligible()),
        E = (0, s.A)('classification_detail'),
        S = (0, c.V)('classification_detail');
    if ((0, _.FB)(i)) {
        var A;
        t = (null === (A = i.guild_metadata) || void 0 === A ? void 0 : A.member_type) === u.wO.OWNER ? d.qS.GUILD_OWNER : d.qS.GUILD_MEMBER;
    } else t = d.qS.USER;
    return (
        e.useEffect(() => {
            void 0 === i && null == o && l.NA(n);
        }, [n, i, o]),
        {
            classification: i,
            classificationRequestState: o,
            isDsaEligible: f,
            isAppealEligible: S && null != i && null == i.appeal_status && (!(0, _.FB)(i) || E),
            violationType: t
        }
    );
}
function S() {
    let n = f(),
        t = new Date();
    return n.filter((n) => new Date(n.max_expiration_time) > t);
}
function A() {
    let n = f(),
        t = new Date();
    return n.filter((n) => new Date(n.max_expiration_time) <= t);
}
function p() {
    return (0, a.e7)([r.Z], () => r.Z.getAppealSignal());
}
