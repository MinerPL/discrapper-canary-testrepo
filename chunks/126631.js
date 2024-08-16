t.d(s, {
    Z: function () {
        return C;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(541716),
    o = t(752305),
    l = t(893718),
    c = t(313201),
    d = t(131704),
    _ = t(993413),
    E = t(981631),
    u = t(689938),
    I = t(637309);
let T = (0, c.hQ)(),
    S = (0, d.kt)({
        id: '1',
        type: E.d4z.DM
    }),
    N = (0, c.hQ)();
function C(e) {
    let { sectionTitle: s, errors: t, onBioChange: c, pendingBio: d, placeholder: C, currentBio: m, disabled: A = !1 } = e,
        [O, g] = a.useState(null != d ? d : m),
        [h, p] = a.useState((0, o.JM)(O)),
        R = a.useRef(!1);
    return (
        a.useEffect(() => {
            if (void 0 === d) {
                let e = (0, o.JM)(m);
                g(m), p(e);
            }
        }, [d, m]),
        (0, n.jsxs)(_.Z, {
            title: s,
            titleId: T,
            description: u.Z.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
            errors: t,
            disabled: A,
            children: [
                (0, n.jsx)(l.Z, {
                    'aria-describedby': N,
                    'aria-labelledby': T,
                    innerClassName: I.bioTextArea,
                    maxCharacterCount: E.tPV,
                    onChange: function (e, s, t) {
                        s !== O && (g(s), p(t), c(s));
                    },
                    placeholder: C,
                    channel: S,
                    textValue: O,
                    richValue: h,
                    type: r.I.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        R.current = !1;
                    },
                    onFocus: () => {
                        R.current = !0;
                    },
                    focused: R.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        });
                    }
                }),
                (0, n.jsx)(i.HiddenVisually, {
                    id: N,
                    children: u.Z.Messages.MAXIMUM_LENGTH.format({ maxLength: E.tPV })
                })
            ]
        })
    );
}
