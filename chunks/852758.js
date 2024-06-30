n.d(t, {
    F0: function () {
        return A;
    },
    HR: function () {
        return Z;
    },
    ZP: function () {
        return L;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(990547), r = n(442837), l = n(544891), o = n(481060), c = n(893776), d = n(37234), u = n(809206), _ = n(110924), E = n(714338), h = n(213609), I = n(144114), m = n(210887), p = n(23434), g = n(610001), T = n(78415), S = n(1964), C = n(981631), N = n(815660), f = n(689938);
let A = 'Email Verification', Z = 'PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY';
function L() {
    let {
            action: e,
            theme: t
        } = (0, r.cj)([
            p.Z,
            m.Z
        ], () => ({
            action: p.Z.getAction(),
            theme: m.Z.theme
        })), L = S.Z.getVerificationTypes(e), [v, O] = s.useState(0), R = (0, _.Z)(L);
    (0, h.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.USER_ACTION_REQUIRED,
        properties: {
            verification_type: L[0],
            verification_types: L
        }
    }, {}, [L.toString()]);
    let x = () => {
            (0, u.FD)(), (0, o.openModalLazy)(async () => {
                let {default: e} = await n.e('35401').then(n.bind(n, 284549));
                return t => (0, i.jsx)(e, { ...t });
            }, {
                modalKey: A,
                Layer: T.ZP
            });
        }, P = () => {
            (0, o.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('76540'),
                    n.e('71126')
                ]).then(n.bind(n, 607018));
                return t => (0, i.jsx)(e, {
                    reason: I.L.USER_ACTION_REQUIRED,
                    ...t
                });
            }, {
                modalKey: N.M,
                Layer: T.ZP
            });
        };
    return s.useEffect(() => (E.Z.disable(), () => {
        E.Z.enable();
    }), []), s.useEffect(() => {
        (null == R ? void 0 : R[0]) === C.PUi.PHONE && (null == L ? void 0 : L[0]) === C.PUi.EMAIL && (0, o.openModalLazy)(async () => {
            let {default: e} = await Promise.resolve().then(n.bind(n, 468026));
            return t => (0, i.jsx)(e, {
                ...t,
                title: f.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
                body: f.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
                confirmText: f.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
            });
        }, {
            modalKey: Z,
            Layer: T.ZP,
            onCloseCallback: x
        });
    }, [
        L,
        R
    ]), (0, i.jsx)(g.Z, {
        types: L,
        captchaKey: v,
        onCaptchaVerify: e => {
            l.tn.post({
                url: C.ANM.CAPTCHA,
                body: { captcha_key: e },
                oldFormErrors: !0
            }).then(d.xf, () => {
                O(e => e + 1);
            });
        },
        theme: t,
        onClick: e => {
            e === C.PUi.EMAIL_OR_PHONE || e === C.PUi.EMAIL || e === C.PUi.REVERIFY_EMAIL ? x() : P();
        },
        onLogout: () => {
            (0, o.openModalLazy)(async () => {
                let {
                    ConfirmModal: e,
                    Text: t
                } = await Promise.resolve().then(n.bind(n, 481060));
                return n => (0, i.jsx)(e, {
                    header: f.Z.Messages.LOGOUT,
                    confirmText: f.Z.Messages.LOGOUT,
                    cancelText: f.Z.Messages.CANCEL,
                    onConfirm: () => c.Z.logout(),
                    ...n,
                    children: (0, i.jsx)(t, {
                        variant: 'text-md/normal',
                        children: f.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
                    })
                });
            }, { Layer: T.ZP });
        }
    });
}
