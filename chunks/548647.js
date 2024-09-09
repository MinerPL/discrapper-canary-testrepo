s.d(n, {
    n: function () {
        return _;
    }
});
var a = s(470079),
    t = s(442837),
    l = s(626135),
    i = s(236289),
    o = s(451284),
    r = s(613734),
    c = s(800530),
    d = s(981631);
let _ = () => {
    let e = (0, t.e7)([i.Z], () => i.Z.getAppealClassificationId()),
        n = (0, r.YG)(null != e ? e : d.lds),
        s = (0, o.P)(),
        _ = (0, t.e7)([i.Z], () => i.Z.getIsDsaEligible());
    return a.useCallback(
        (a) => {
            l.default.track(d.rMx.SAFETY_HUB_ACTION, {
                action: a,
                account_standing: s.state,
                classification_ids: null != e ? [Number(e)] : null,
                source: c.s.AppealIngestion,
                is_dsa_eligible: _,
                violation_type: n.violationType
            });
        },
        [s.state, e, n, _]
    );
};
