n.d(t, {
    J0: function () {
        return d;
    },
    _O: function () {
        return u;
    },
    rT: function () {
        return c;
    }
});
var r = n(442837),
    i = n(594174),
    a = n(78839),
    s = n(295226),
    o = n(786397),
    l = n(474936);
let u = () => {
    let e = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription());
    return (null == e ? void 0 : e.trialId) != null;
};
function c() {
    let e = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        t = (0, r.e7)([i.default], () => i.default.getCurrentUser());
    return (null == e ? void 0 : e.trialId) != null ? (null == t ? void 0 : t.premiumType) : null;
}
function d() {
    return l.CR.map((e) => s.Z.getUserTrialOffer(e))
        .filter((e) => null != e && !(0, o.B)(e))
        .shift();
}
