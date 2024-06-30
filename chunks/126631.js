s.d(t, {
    Z: function () {
        return C;
    }
}), s(47120);
var n = s(735250), a = s(470079), i = s(481060), r = s(541716), o = s(752305), l = s(893718), c = s(131704), d = s(153124), _ = s(993413), E = s(981631), u = s(689938), T = s(236235);
let I = (0, d.hQ)(), S = (0, c.kt)({
        id: '1',
        type: E.d4z.DM
    }), N = (0, d.hQ)();
function C(e) {
    let {
            sectionTitle: t,
            errors: s,
            onBioChange: c,
            pendingBio: d,
            placeholder: C,
            currentBio: m,
            disabled: A = !1
        } = e, [h, g] = a.useState(null != d ? d : m), [O, p] = a.useState((0, o.JM)(h)), R = a.useRef(!1);
    return a.useEffect(() => {
        if (void 0 === d) {
            let e = (0, o.JM)(m);
            g(m), p(e);
        }
    }, [
        d,
        m
    ]), (0, n.jsxs)(_.Z, {
        title: t,
        titleId: I,
        description: u.Z.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
        errors: s,
        disabled: A,
        children: [
            (0, n.jsx)(l.Z, {
                'aria-describedby': N,
                'aria-labelledby': I,
                innerClassName: T.bioTextArea,
                maxCharacterCount: E.tPV,
                onChange: function (e, t, s) {
                    t !== h && (g(t), p(s), c(t));
                },
                placeholder: C,
                channel: S,
                textValue: h,
                richValue: O,
                type: r.I.PROFILE_BIO_INPUT,
                onBlur: () => {
                    R.current = !1;
                },
                onFocus: () => {
                    R.current = !0;
                },
                focused: R.current,
                onSubmit: function () {
                    return new Promise(e => {
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
    });
}
