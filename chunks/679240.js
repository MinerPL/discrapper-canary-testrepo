n.d(t, {
    x: function () {
        return s;
    }
}), n(789020);
var r = n(271383), i = n(630388), a = n(549817), o = n(372897);
function s(e) {
    return new Promise(t => {
        r.ZP.addConditionalChangeListener(() => {
            var n;
            let s = r.ZP.getSelfMember(e);
            return !(0, i.yE)(null !== (n = null == s ? void 0 : s.flags) && void 0 !== n ? n : 0, o.q.COMPLETED_ONBOARDING) || (a.Z.finishOnboarding(e), t(), !1);
        });
    });
}
