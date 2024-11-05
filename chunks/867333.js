n.d(t, {
    k: function () {
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
    f = n(186523),
    _ = n(553826),
    h = n(939350),
    p = n(667947);
function m(e) {
    let { color: t = 'default', label: n, checked: a, subtext: m, disabled: g, isFocused: E, menuItemProps: v, action: I } = e,
        S = i.useRef(null),
        T = (0, d.Q)('MenuRadioItem');
    return (
        i.useEffect(() => {
            E && (0, u.F)(S);
        }, [E]),
        (0, r.jsxs)(o.P, {
            innerRef: S,
            className: s()(p.item, p.labelContainer, h._[t], {
                [p.disabled]: g,
                [p.focused]: E
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
                    children: T
                        ? (0, r.jsx)(c.RadioIndicator, {
                              checked: a,
                              radioItemIconClassName: p.radioIcon
                          })
                        : a
                          ? (0, r.jsx)(_.Z, {
                                className: p.icon,
                                background: p.__invalid_radio,
                                foreground: p.radioSelection
                            })
                          : (0, r.jsx)(f.Z, {
                                className: p.icon,
                                foreground: p.__invalid_radio
                            })
                })
            ]
        })
    );
}
