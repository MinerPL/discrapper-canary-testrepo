n.d(e, {
    v: function () {
        return C;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
    o = n(120356),
    s = n.n(o),
    c = n(593473),
    u = n(266067),
    l = n(481060),
    i = n(489863),
    d = n(511540),
    _ = n(828878),
    f = n(689938),
    I = n(847597);
function C(t) {
    let { onUserCodeAccepted: e, usePrefilledCode: n } = t,
        [o, C] = r.useState(() => {
            let { user_code: t } = c.parse(window.location.search);
            return n && null != t ? t : '';
        }),
        E = (0, u.TH)(),
        A = r.useCallback(() => {
            (0, i.c$)(E);
        }, [E]),
        { manualSubmit: T, error: p, submitting: h } = (0, d.c)(o, e, A);
    return (0, a.jsxs)('div', {
        className: I.content,
        children: [
            (0, a.jsx)(l.Heading, {
                variant: 'heading-xl/extrabold',
                className: I.text,
                children: f.Z.Messages.ACTIVATE_DEVICE_TITLE
            }),
            (0, a.jsx)(l.Text, {
                tag: 'p',
                variant: 'text-md/medium',
                color: 'header-secondary',
                className: I.text,
                children: f.Z.Messages.ACTIVATE_DEVICE_BODY
            }),
            (0, a.jsx)(l.TextInput, {
                placeholder: f.Z.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({ number: _.A.USER_CODE_LENGTH }),
                maxLength: _.A.USER_CODE_LENGTH,
                className: I.textInputContainer,
                inputClassName: s()(I.textInput, { [I.textInputError]: null != p }),
                autoComplete: 'off',
                autoFocus: !0,
                value: o,
                onChange: C,
                error: p
            }),
            (0, a.jsx)(l.Button, {
                fullWidth: !0,
                color: l.Button.Colors.BRAND,
                onClick: T,
                submitting: h,
                disabled: o.length !== _.A.USER_CODE_LENGTH,
                children: (0, a.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    children: f.Z.Messages.SUBMIT
                })
            })
        ]
    });
}
