n.d(t, {
    O: function () {
        return s;
    }
});
var r = n(661763),
    i = n(662845),
    a = n(921336);
function s(e, t, n) {
    let { isDisabled: s = !1, isReadOnly: o = !1, value: l, name: u, children: c, 'aria-label': d, 'aria-labelledby': f, validationState: _ = 'valid', isInvalid: h } = e;
    !(null != c) && !(null != d || null != f) && console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    let { pressProps: p, isPressed: m } = (0, a.r7)({ isDisabled: s }),
        { pressProps: g, isPressed: E } = (0, a.r7)({
            isDisabled: s || o,
            onPress() {
                t.toggle();
            }
        }),
        { focusableProps: v } = (0, i.kc)(e, n),
        I = (0, r.dG)(p, v),
        S = (0, r.zL)(e, { labelable: !0 });
    return (
        (0, r.y$)(n, t.isSelected, t.setSelected),
        {
            labelProps: (0, r.dG)(g, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, r.dG)(S, {
                'aria-invalid': h || 'invalid' === _ || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-controls': e['aria-controls'],
                'aria-readonly': o || void 0,
                onChange: (e) => {
                    e.stopPropagation(), t.setSelected(e.target.checked);
                },
                disabled: s,
                ...(null == l ? {} : { value: l }),
                name: u,
                type: 'checkbox',
                ...I
            }),
            isSelected: t.isSelected,
            isPressed: m || E,
            isDisabled: s,
            isReadOnly: o,
            isInvalid: h || 'invalid' === _
        }
    );
}
