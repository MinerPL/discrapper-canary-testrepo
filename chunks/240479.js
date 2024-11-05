n.d(e, {
    v: function () {
        return x;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    i = n.n(o),
    l = n(593473),
    s = n(512969),
    c = n(481060),
    u = n(489863),
    d = n(511540),
    f = n(828878),
    p = n(388032),
    h = n(74939);
function x(t) {
    let { onUserCodeAccepted: e, usePrefilledCode: n } = t,
        [o, x] = r.useState(() => {
            let { user_code: t } = l.parse(window.location.search);
            return n && null != t ? t : '';
        }),
        C = (0, s.TH)(),
        _ = r.useCallback(() => {
            (0, u.c$)(C);
        }, [C]),
        { manualSubmit: m, error: I, submitting: v } = (0, d.c)(o, e, _);
    return (0, a.jsxs)('div', {
        className: h.content,
        children: [
            (0, a.jsxs)('div', {
                className: h.innerContent,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: 'heading-xl/extrabold',
                        className: h.text,
                        children: p.intl.string(p.t.KYPNUl)
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: h.text,
                        children: p.intl.string(p.t.xRHk7e)
                    }),
                    (0, a.jsx)(c.TextInput, {
                        placeholder: p.intl.formatToPlainString(p.t['0tbz6+'], { number: f.A.USER_CODE_LENGTH }),
                        maxLength: f.A.USER_CODE_LENGTH,
                        className: h.textInputContainer,
                        inputClassName: i()(h.textInput, { [h.textInputError]: null != I }),
                        autoComplete: 'off',
                        autoFocus: !0,
                        value: o,
                        onChange: x,
                        error: I
                    })
                ]
            }),
            (0, a.jsx)(c.Button, {
                fullWidth: !0,
                color: c.Button.Colors.BRAND,
                onClick: m,
                submitting: v,
                disabled: o.length !== f.A.USER_CODE_LENGTH,
                children: (0, a.jsx)(c.Text, {
                    variant: 'text-md/medium',
                    children: p.intl.string(p.t['3PatS0'])
                })
            })
        ]
    });
}
