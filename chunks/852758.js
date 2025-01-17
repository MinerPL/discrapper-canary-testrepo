n.d(t, {
    F0: function () {
        return A;
    },
    HR: function () {
        return v;
    },
    ZP: function () {
        return Z;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(442837),
    l = n(544891),
    o = n(481060),
    c = n(893776),
    d = n(37234),
    u = n(809206),
    _ = n(110924),
    E = n(714338),
    h = n(213609),
    m = n(429142),
    I = n(144114),
    g = n(210887),
    p = n(23434),
    T = n(1964),
    S = n(762756),
    f = n(981631),
    C = n(815660),
    N = n(689938);
let A = 'Email Verification',
    v = 'PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY';
function Z() {
    let { action: e, theme: t } = (0, r.cj)([p.Z, g.Z], () => ({
            action: p.Z.getAction(),
            theme: g.Z.theme
        })),
        Z = T.Z.getVerificationTypes(e),
        [L, O] = a.useState(0),
        R = (0, _.Z)(Z);
    (0, h.Z)(
        {
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.USER_ACTION_REQUIRED,
            properties: {
                verification_type: Z[0],
                verification_types: Z
            }
        },
        {},
        [Z.toString()]
    );
    let x = () => {
            (0, u.FD)(),
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e('35401').then(n.bind(n, 284549));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    {
                        modalKey: A,
                        Layer: m.ZP
                    }
                );
        },
        b = () => {
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('76540'), n.e('40857')]).then(n.bind(n, 607018));
                    return (t) =>
                        (0, i.jsx)(e, {
                            reason: I.L.USER_ACTION_REQUIRED,
                            ...t
                        });
                },
                {
                    modalKey: C.M,
                    Layer: m.ZP
                }
            );
        };
    return (
        a.useEffect(
            () => (
                E.Z.disable(),
                () => {
                    E.Z.enable();
                }
            ),
            []
        ),
        a.useEffect(() => {
            (null == R ? void 0 : R[0]) === f.PUi.PHONE &&
                (null == Z ? void 0 : Z[0]) === f.PUi.EMAIL &&
                (0, o.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 468026));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                title: N.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
                                body: N.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
                                confirmText: N.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
                            });
                    },
                    {
                        modalKey: v,
                        Layer: m.ZP,
                        onCloseCallback: x
                    }
                );
        }, [Z, R]),
        (0, i.jsx)(S.Z, {
            types: Z,
            captchaKey: L,
            onCaptchaVerify: (e) => {
                l.tn
                    .post({
                        url: f.ANM.CAPTCHA,
                        body: { captcha_key: e },
                        oldFormErrors: !0
                    })
                    .then(d.xf, () => {
                        O((e) => e + 1);
                    });
            },
            theme: t,
            onClick: (e) => {
                e === f.PUi.EMAIL_OR_PHONE || e === f.PUi.EMAIL || e === f.PUi.REVERIFY_EMAIL ? x() : b();
            },
            onLogout: () => {
                (0, o.openModalLazy)(
                    async () => {
                        let { ConfirmModal: e, Text: t } = await Promise.resolve().then(n.bind(n, 481060));
                        return (n) =>
                            (0, i.jsx)(e, {
                                header: N.Z.Messages.LOGOUT,
                                confirmText: N.Z.Messages.LOGOUT,
                                cancelText: N.Z.Messages.CANCEL,
                                onConfirm: () => c.Z.logout(),
                                ...n,
                                children: (0, i.jsx)(t, {
                                    variant: 'text-md/normal',
                                    children: N.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
                                })
                            });
                    },
                    { Layer: m.ZP }
                );
            }
        })
    );
}
