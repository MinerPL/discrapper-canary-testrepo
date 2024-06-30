s.r(t), s(47120);
var i = s(735250), n = s(470079), a = s(442837), o = s(481060), l = s(893776), r = s(809206), h = s(155433), d = s(23434), u = s(25990), c = s(594174), m = s(201092), g = s(1964), p = s(981631), E = s(689938);
t.default = e => {
    let {
            transitionState: t,
            onClose: s
        } = e, _ = (0, a.e7)([u.Z], () => u.Z.getErrors()), f = (0, a.e7)([u.Z], () => u.Z.getFormState()), C = (0, a.e7)([c.default], () => c.default.getCurrentUser()), I = (0, a.e7)([d.Z], () => d.Z.getAction()), R = !g.Z.isEmailReverification(I), [v, M] = n.useState(!0), y = f === p.QZA.SUBMITTING;
    function A(e) {
        var t, s;
        return null !== (s = null == _ ? void 0 : null === (t = _[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : '';
    }
    let T = A('email'), Z = A('password');
    return (0, i.jsx)(m.Z, {
        transitionState: t,
        email: null == C ? void 0 : C.email,
        emailError: T,
        passwordError: Z,
        submitting: y,
        canResend: v && !y && (null == C ? void 0 : C.email) != null && 0 === T.length && 0 === Z.length,
        canChange: R,
        onChangeEmailClick: function () {
            M(!1);
        },
        onVerify: function (e, t) {
            (0, r.Mn)({
                email: e,
                password: t
            }).then(e => {
                if (!(null == e ? void 0 : e.ok)) {
                    var t;
                    (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null ? (0, h.P)() : 0 === Z.length && 0 === T.length && (0, o.showToast)((0, o.createToast)(E.Z.Messages.ERROR_GENERIC_TITLE, o.ToastType.FAILURE));
                }
            }), M(!0);
        },
        onResend: function () {
            l.Z.verifyResend();
        },
        onClose: s
    });
};
