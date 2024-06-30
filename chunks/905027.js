s.d(t, {
    Z: function () {
        return u;
    }
}), s(47120);
var n = s(735250), a = s(470079), i = s(442837), r = s(852860), o = s(164946), l = s(350327), c = s(647699), d = s(18438), _ = s(778825), E = s(689938);
function u() {
    let e = (0, i.e7)([_.Z], () => _.Z.getIsSubmitDisabled()), t = (0, i.e7)([_.Z], () => _.Z.getGuild()), s = (0, i.e7)([_.Z], () => _.Z.getErrors()), [u, T] = a.useState(!1), I = a.useMemo(() => (null == s ? void 0 : s.message) != null ? null == s ? void 0 : s.message : Object.keys(null != s ? s : {}).length > 0 ? E.Z.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null, [s]), S = a.useCallback(async () => {
            var e, s;
            T(!0);
            let n = _.Z.getAllPending(), a = (0, o.Jo)(n), i = (0, o.g9)(n), r = !0;
            if (Object.keys(a).length > 0) {
                let s = await (0, d.iq)(null == t ? void 0 : t.id, a);
                r = r && null !== (e = null == s ? void 0 : s.ok) && void 0 !== e && e, (null == s ? void 0 : s.ok) && (0, d.IO)();
            }
            if (Object.keys(i).length > 0) {
                let e = await (0, l.Z)(i, null == t ? void 0 : t.id);
                r = r && null !== (s = null == e ? void 0 : e.ok) && void 0 !== s && s, (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, c.v)();
            }
            r && (0, d.b9)(), T(!1);
        }, [null == t ? void 0 : t.id]), N = a.useCallback(() => {
            (0, d.W3)();
        }, []);
    return (0, n.jsx)(r.Z, {
        submitting: u,
        onSave: S,
        onReset: N,
        disabled: e,
        errorMessage: null != I ? I : void 0
    });
}
