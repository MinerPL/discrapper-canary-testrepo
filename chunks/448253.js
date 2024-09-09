n.d(t, {
    O: function () {
        return c;
    },
    a8: function () {
        return E;
    },
    u6: function () {
        return _;
    }
});
var r = n(470079),
    i = n(705782),
    a = n(201284),
    s = n(820002),
    o = n(182823),
    l = n(251433),
    u = n(22507);
function c(e, t, n) {
    let o = (0, a.Q3)({
            ...e,
            value: t.isSelected
        }),
        { isInvalid: l, validationErrors: u, validationDetails: c } = o.displayValidation,
        {
            labelProps: d,
            inputProps: _,
            isSelected: E,
            isPressed: f,
            isDisabled: h,
            isReadOnly: p
        } = (0, s.O)(
            {
                ...e,
                isInvalid: l
            },
            t,
            n
        );
    (0, i.Q)(e, o, n);
    let { isIndeterminate: m, isRequired: I, validationBehavior: T = 'aria' } = e;
    return (
        (0, r.useEffect)(() => {
            n.current && (n.current.indeterminate = !!m);
        }),
        {
            labelProps: d,
            inputProps: {
                ..._,
                checked: E,
                'aria-required': (I && 'aria' === T) || void 0,
                required: I && 'native' === T
            },
            isSelected: E,
            isPressed: f,
            isDisabled: h,
            isReadOnly: p,
            isInvalid: l,
            validationErrors: u,
            validationDetails: c
        }
    );
}
let d = new WeakMap();
function _(e, t) {
    let { isDisabled: n, name: r, validationBehavior: i = 'aria' } = e,
        { isInvalid: a, validationErrors: s, validationDetails: u } = t.displayValidation,
        {
            labelProps: c,
            fieldProps: _,
            descriptionProps: E,
            errorMessageProps: f
        } = (0, l.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: a,
            errorMessage: e.errorMessage || s
        });
    d.set(t, {
        name: r,
        descriptionId: E.id,
        errorMessageId: f.id,
        validationBehavior: i
    });
    let h = (0, o.zL)(e, { labelable: !0 });
    return {
        groupProps: (0, o.dG)(h, {
            role: 'group',
            'aria-disabled': n || void 0,
            ..._
        }),
        labelProps: c,
        descriptionProps: E,
        errorMessageProps: f,
        isInvalid: a,
        validationErrors: s,
        validationDetails: u
    };
}
function E(e, t, n) {
    var i, s;
    let o = (0, u.l)({
            isReadOnly: e.isReadOnly || t.isReadOnly,
            isSelected: t.isSelected(e.value),
            onChange(n) {
                n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
            }
        }),
        { name: l, descriptionId: _, errorMessageId: E, validationBehavior: f } = d.get(t);
    f = null !== (i = e.validationBehavior) && void 0 !== i ? i : f;
    let { realtimeValidation: h } = (0, a.Q3)({
            ...e,
            value: o.isSelected,
            name: void 0,
            validationBehavior: 'aria'
        }),
        p = (0, r.useRef)(a.PS),
        m = () => {
            t.setInvalid(e.value, h.isInvalid ? h : p.current);
        };
    (0, r.useEffect)(m);
    let I = t.realtimeValidation.isInvalid ? t.realtimeValidation : h,
        T = 'native' === f ? t.displayValidation : I,
        g = c(
            {
                ...e,
                isReadOnly: e.isReadOnly || t.isReadOnly,
                isDisabled: e.isDisabled || t.isDisabled,
                name: e.name || l,
                isRequired: null !== (s = e.isRequired) && void 0 !== s ? s : t.isRequired,
                validationBehavior: f,
                [a.tL]: {
                    realtimeValidation: I,
                    displayValidation: T,
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation,
                    updateValidation(e) {
                        (p.current = e), m();
                    }
                }
            },
            o,
            n
        );
    return {
        ...g,
        inputProps: {
            ...g.inputProps,
            'aria-describedby': [e['aria-describedby'], t.isInvalid ? E : null, _].filter(Boolean).join(' ') || void 0
        }
    };
}
