n.d(t, {
    k: function () {
        return f;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(1561), l = n(761224), u = n(743236), c = n(186523), d = n(553826), _ = n(939350), E = n(639897);
function f(e) {
    let {
            color: t = 'default',
            label: n,
            checked: a,
            subtext: f,
            disabled: h,
            isFocused: p,
            menuItemProps: m,
            action: I
        } = e, T = i.useRef(null);
    return i.useEffect(() => {
        p && (0, u.F)(T);
    }, [p]), (0, r.jsxs)(s.P, {
        innerRef: T,
        className: o()(E.item, E.labelContainer, _._[t], {
            [E.disabled]: h,
            [E.focused]: p
        }),
        onClick: h ? void 0 : I,
        ...m,
        'aria-checked': a,
        'aria-disabled': h,
        children: [
            (0, r.jsxs)('div', {
                className: E.label,
                children: [
                    (0, l.I)(n, e),
                    null != f && (0, r.jsx)('div', {
                        className: E.subtext,
                        children: f
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: E.iconContainer,
                children: a ? (0, r.jsx)(d.Z, {
                    className: E.icon,
                    background: E.__invalid_radio,
                    foreground: E.radioSelection
                }) : (0, r.jsx)(c.Z, {
                    className: E.icon,
                    foreground: E.__invalid_radio
                })
            })
        ]
    });
}
