s.d(t, {
    Z: function () {
        return p;
    }
}), s(47120);
var n = s(735250), r = s(470079), i = s(120356), a = s.n(i), o = s(481060), l = s(153124), c = s(742458), u = s(766650), d = s(489686), h = s(838009);
function p(e) {
    let {
            alpha2: t,
            countryCode: s,
            forceMode: i,
            label: p,
            error: m,
            className: f,
            required: C,
            value: g,
            setRef: x,
            placeholder: N,
            autoFocus: v,
            maxLength: E,
            spellCheck: S,
            autoComplete: A,
            autoCapitalize: j,
            autoCorrect: y,
            onChange: T,
            inputClassName: I
        } = e, Z = (0, l.Dt)(), [_, O] = r.useState(!1), R = (0, c.o9)(i, g);
    return (0, n.jsx)(o.FormItem, {
        title: p,
        error: m,
        className: f,
        required: C,
        tag: 'label',
        htmlFor: Z,
        children: (0, n.jsxs)('div', {
            className: a()(h.input, d.input, I, {
                [h.error]: null != m,
                [h.focused]: _
            }),
            children: [
                (0, n.jsx)(u.Z, {
                    show: R,
                    alpha2: t,
                    countryCode: s
                }),
                (0, n.jsx)(o.TextInput, {
                    id: Z,
                    name: 'email',
                    type: i === c.Nz.EMAIL ? 'email' : 'text',
                    value: g,
                    inputRef: x,
                    placeholder: N,
                    'aria-label': p,
                    required: C,
                    onChange: function (e) {
                        let t = (0, c.o9)(i, e) ? s : '';
                        T(e, t);
                    },
                    autoComplete: A,
                    autoCapitalize: j,
                    autoCorrect: y,
                    autoFocus: v,
                    maxLength: E,
                    spellCheck: S,
                    className: d.inputWrapper,
                    inputClassName: d.inputField,
                    onFocus: () => O(!0),
                    onBlur: () => O(!1)
                })
            ]
        })
    });
}
