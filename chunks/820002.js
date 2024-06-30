n.d(t, {
    O: function () {
        return o;
    }
});
var r = n(182823), i = n(706682), a = n(612001);
function o(e, t, n) {
    let {
        isDisabled: o = !1,
        isReadOnly: s = !1,
        value: l,
        name: u,
        children: c,
        'aria-label': d,
        'aria-labelledby': _,
        validationState: E = 'valid',
        isInvalid: f
    } = e;
    !(null != c) && !(null != d || null != _) && console.warn('If you do not provide children, you must specify an aria-label for accessibility');
    let {
            pressProps: h,
            isPressed: p
        } = (0, a.r7)({ isDisabled: o }), {
            pressProps: m,
            isPressed: I
        } = (0, a.r7)({
            isDisabled: o || s,
            onPress() {
                t.toggle();
            }
        }), {focusableProps: T} = (0, i.kc)(e, n), g = (0, r.dG)(h, T), S = (0, r.zL)(e, { labelable: !0 });
    return (0, r.y$)(n, t.isSelected, t.setSelected), {
        labelProps: (0, r.dG)(m, { onClick: e => e.preventDefault() }),
        inputProps: (0, r.dG)(S, {
            'aria-invalid': f || 'invalid' === E || void 0,
            'aria-errormessage': e['aria-errormessage'],
            'aria-controls': e['aria-controls'],
            'aria-readonly': s || void 0,
            onChange: e => {
                e.stopPropagation(), t.setSelected(e.target.checked);
            },
            disabled: o,
            ...null == l ? {} : { value: l },
            name: u,
            type: 'checkbox',
            ...g
        }),
        isSelected: t.isSelected,
        isPressed: p || I,
        isDisabled: o,
        isReadOnly: s,
        isInvalid: f || 'invalid' === E
    };
}
