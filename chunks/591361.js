n.d(t, {
    O: function () {
        return c;
    },
    a8: function () {
        return _;
    },
    u6: function () {
        return f;
    }
});
var r = n(192379),
    i = n(464170),
    a = n(969129),
    s = n(558883),
    o = n(661763),
    l = n(523603),
    u = n(491116);
function c(e, t, n) {
    let o = (0, a.Q3)({
            ...e,
            value: t.isSelected
        }),
        { isInvalid: l, validationErrors: u, validationDetails: c } = o.displayValidation,
        {
            labelProps: d,
            inputProps: f,
            isSelected: _,
            isPressed: h,
            isDisabled: p,
            isReadOnly: m
        } = (0, s.O)(
            {
                ...e,
                isInvalid: l
            },
            t,
            n
        );
    (0, i.Q)(e, o, n);
    let { isIndeterminate: g, isRequired: E, validationBehavior: v = 'aria' } = e;
    return (
        (0, r.useEffect)(() => {
            n.current && (n.current.indeterminate = !!g);
        }),
        {
            labelProps: d,
            inputProps: {
                ...f,
                checked: _,
                'aria-required': (E && 'aria' === v) || void 0,
                required: E && 'native' === v
            },
            isSelected: _,
            isPressed: h,
            isDisabled: p,
            isReadOnly: m,
            isInvalid: l,
            validationErrors: u,
            validationDetails: c
        }
    );
}
let d = new WeakMap();
function f(e, t) {
    let { isDisabled: n, name: r, validationBehavior: i = 'aria' } = e,
        { isInvalid: a, validationErrors: s, validationDetails: u } = t.displayValidation,
        {
            labelProps: c,
            fieldProps: f,
            descriptionProps: _,
            errorMessageProps: h
        } = (0, l.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: a,
            errorMessage: e.errorMessage || s
        });
    d.set(t, {
        name: r,
        descriptionId: _.id,
        errorMessageId: h.id,
        validationBehavior: i
    });
    let p = (0, o.zL)(e, { labelable: !0 });
    return {
        groupProps: (0, o.dG)(p, {
            role: 'group',
            'aria-disabled': n || void 0,
            ...f
        }),
        labelProps: c,
        descriptionProps: _,
        errorMessageProps: h,
        isInvalid: a,
        validationErrors: s,
        validationDetails: u
    };
}
function _(e, t, n) {
    var i, s;
    let o = (0, u.l)({
            isReadOnly: e.isReadOnly || t.isReadOnly,
            isSelected: t.isSelected(e.value),
            onChange(n) {
                n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
            }
        }),
        { name: l, descriptionId: f, errorMessageId: _, validationBehavior: h } = d.get(t);
    h = null !== (i = e.validationBehavior) && void 0 !== i ? i : h;
    let { realtimeValidation: p } = (0, a.Q3)({
            ...e,
            value: o.isSelected,
            name: void 0,
            validationBehavior: 'aria'
        }),
        m = (0, r.useRef)(a.PS),
        g = () => {
            t.setInvalid(e.value, p.isInvalid ? p : m.current);
        };
    (0, r.useEffect)(g);
    let E = t.realtimeValidation.isInvalid ? t.realtimeValidation : p,
        v = 'native' === h ? t.displayValidation : E,
        I = c(
            {
                ...e,
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isDisabled: e.isDisabled || t.isDisabled,
                name: e.name || l,
                isRequired: null !== (s = e.isRequired) && void 0 !== s ? s : t.isRequired,
                validationBehavior: h,
                [a.tL]: {
                    realtimeValidation: E,
                    displayValidation: v,
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation,
                    updateValidation(e) {
                        (m.current = e), g();
                    }
                }
            },
            o,
            n
        );
    return {
        ...I,
        inputProps: {
            ...I.inputProps,
            'aria-describedby': [e['aria-describedby'], t.isInvalid ? _ : null, f].filter(Boolean).join(' ') || void 0
        }
    };
}
