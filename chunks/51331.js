t.d(s, {
    Z: function () {
        return d;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(838436),
    c = t(415292);
function d(e) {
    let { value: s, onChange: t, className: i, note: d, title: _, disabled: u } = e,
        E = a.useRef(null),
        T = a.useRef(null),
        S = a.useId(),
        I = (0, n.jsx)(o.Switch, {
            id: S,
            checked: s,
            onChange: t,
            focusProps: { enabled: !1 },
            innerRef: E,
            disabled: u
        });
    return (0, n.jsx)('div', {
        className: r()(c.container, i, { [c.disabled]: u }),
        children: (0, n.jsx)(o.FocusRing, {
            within: !0,
            offset: -4,
            focusTarget: E,
            ringTarget: T,
            children: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)('div', {
                        className: c.text,
                        children: (0, n.jsx)(l.H, {
                            header: _,
                            description: d,
                            relatedId: S,
                            disabled: u
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: c.control,
                        children: I
                    })
                ]
            })
        })
    });
}
