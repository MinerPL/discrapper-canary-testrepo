t.r(s),
    t.d(s, {
        default: function () {
            return R;
        }
    }),
    t(47120);
var n = t(735250),
    o = t(470079),
    a = t(990547),
    l = t(442837),
    r = t(481060),
    i = t(809206),
    E = t(594174),
    _ = t(626135),
    N = t(706734),
    c = t(264119),
    d = t(75788),
    u = t(22150),
    A = t(361833),
    C = t(134562),
    M = t(526761),
    S = t(981631),
    m = t(259076),
    I = t(859565),
    x = t(800010),
    T = t(75277);
function R(e) {
    var s;
    let { transitionState: t, onClose: R } = e,
        O = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        h = o.useRef(null !== (s = null == O ? void 0 : O.verified) && void 0 !== s && s);
    o.useEffect(() => (_.default.track(S.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, i.Zy)()), []);
    let L = null == O ? void 0 : O.verified,
        f = L ? M.Ax.CONFIRM_START : M.Ax.EMAIL_AND_PASSWORD,
        [p, g] = o.useState(f),
        [G, j] = o.useState(null),
        [v, U] = o.useState(null),
        [D, H] = o.useState(null),
        [Z, B] = o.useState(''),
        [k, P] = o.useState(),
        [b, F] = o.useState(''),
        y = p === M.Ax.CHANGE_EMAIL_WARNING ? I.wumpusExclamationImg : I.emailHeaderImg,
        w = p === M.Ax.CHANGE_EMAIL_WARNING ? T : x,
        K = { impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
    return (0, n.jsxs)(r.ModalRoot, {
        transitionState: t,
        disableTrack: !0,
        children: [
            (0, n.jsx)('img', {
                alt: '',
                className: y,
                src: w
            }),
            (0, n.jsxs)(r.Slides, {
                activeSlide: p,
                width: 440,
                onSlideReady: (e) => j(e),
                children: [
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.CONFIRM_START,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        impressionProperties: K,
                        children: (0, n.jsx)(u.Z, {
                            onNext: () => g(M.Ax.CONFIRM_CODE),
                            onClose: R
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.CONFIRM_CODE,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                        impressionProperties: K,
                        children: (0, n.jsx)(d.Z, {
                            error: D,
                            setError: H,
                            setEmailToken: U,
                            isSlideReady: G === M.Ax.CONFIRM_CODE,
                            onNext: () => g(M.Ax.CHANGE_EMAIL_REASONS),
                            onClose: R
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.CHANGE_EMAIL_REASONS,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
                        impressionProperties: K,
                        children: (0, n.jsx)(N.Z, {
                            onNext: () => (_.default.track(S.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: k }), null != k && m.Mr.has(k) ? g(M.Ax.CHANGE_EMAIL_WARNING) : g(M.Ax.EMAIL_AND_PASSWORD)),
                            onClose: R,
                            reason: k,
                            onReasonChange: P,
                            freeTextResponse: b,
                            setFreeTextResponse: F
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.CHANGE_EMAIL_WARNING,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
                        impressionProperties: K,
                        children: (0, n.jsx)(C.Z, {
                            onNext: () => {
                                _.default.track(S.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: k }), g(M.Ax.EMAIL_AND_PASSWORD);
                            },
                            onClose: R
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.EMAIL_AND_PASSWORD,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                        impressionProperties: {
                            ...K,
                            email_verified: h.current
                        },
                        children: (0, n.jsx)(A.Z, {
                            emailToken: v,
                            isSlideReady: G === M.Ax.EMAIL_AND_PASSWORD,
                            onBack: L ? () => g(null != k && m.Mr.has(k) ? M.Ax.CHANGE_EMAIL_WARNING : M.Ax.CHANGE_EMAIL_REASONS) : null,
                            onNext: (e) => {
                                _.default.track(S.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
                                    change_email_reason_enum: k,
                                    free_text_response: b
                                }),
                                    B(e),
                                    g(M.Ax.COMPLETE);
                            },
                            onClose: R
                        })
                    }),
                    (0, n.jsx)(r.Slide, {
                        id: M.Ax.COMPLETE,
                        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
                        impressionProperties: K,
                        children: (0, n.jsx)(c.Z, {
                            email: Z,
                            onClose: R
                        })
                    })
                ]
            })
        ]
    });
}
