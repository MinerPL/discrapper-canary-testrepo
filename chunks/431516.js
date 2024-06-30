n.d(t, {
    N: function () {
        return l;
    }
});
var s = n(399606), a = n(999382), i = n(594174), r = n(981631);
function l() {
    let e = (0, s.e7)([i.default], () => i.default.getCurrentUser()), t = (0, s.e7)([a.Z], () => a.Z.getProps().mfaLevel), n = (null == e ? void 0 : e.mfaEnabled) === !0;
    return {
        isUserMFAEnabled: n,
        isModerationMFAEnabled: t === r.BpS.ELEVATED
    };
}
