n.d(t, {
    S: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(761224),
    u = n(743236),
    c = n(481060),
    d = n(540059),
    f = n(448239),
    _ = n(247442),
    h = n(939350),
    p = n(667947);
function m(e) {
    let { color: t = 'default', label: n, checked: a, subtext: m, disabled: g, isFocused: E, menuItemProps: v, action: I, className: S, focusedClassName: T } = e,
        b = i.useRef(null),
        y = (0, d.Q)('MenuCheckboxItem');
    return (
        i.useEffect(() => {
            E && (0, u.F)(b);
        }, [E]),
        (0, r.jsxs)(o.P, {
            innerRef: b,
            className: s()(p.item, p.checkboxContainer, p.labelContainer, h._[t], S, {
                [p.disabled]: g,
                [p.focused]: E,
                [null != T ? T : '']: E
            }),
            onClick: g ? void 0 : I,
            ...v,
            'aria-checked': a,
            'aria-disabled': g,
            children: [
                (0, r.jsxs)('div', {
                    className: p.label,
                    children: [
                        (0, l.I)(n, e),
                        null != m &&
                            (0, r.jsx)('div', {
                                className: p.subtext,
                                children: m
                            })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: p.iconContainer,
                    children: y
                        ? (0, r.jsx)(c.CheckboxIndicator, {
                              shape: c.Checkbox.Shapes.BOX,
                              size: 20,
                              value: a,
                              disabled: g
                          })
                        : a
                          ? (0, r.jsx)(_.Z, {
                                className: p.icon,
                                background: p.checkbox,
                                foreground: p.check
                            })
                          : (0, r.jsx)(f.Z, {
                                className: p.icon,
                                foreground: p.__invalid_checkboxEmpty
                            })
                })
            ]
        })
    );
}
