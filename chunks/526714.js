n.d(t, {
    I: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(743236),
    l = n(939350),
    u = n(837244);
function c(e) {
    let { color: t = 'default', label: n, control: a, disabled: c, isFocused: d, showDefaultFocus: _ = !1, menuItemProps: E, onClose: f } = e,
        h = i.useRef(null),
        p = i.useRef(null);
    i.useLayoutEffect(() => {
        var e, t, n;
        d ? ((0, o.F)(h), null === (e = p.current) || void 0 === e || e.focus()) : null === (n = p.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n);
    }, [d]);
    let m = i.useCallback(() => {
            var e, t;
            (null === (t = p.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t)) && f();
        }, [f]),
        I = a(
            {
                onClose: f,
                disabled: c,
                isFocused: d
            },
            p
        );
    return (0, r.jsxs)('div', {
        onClick: m,
        className: s()(u.item, l._[t], {
            [u.disabled]: c,
            [u.focused]: _ && d,
            [u.hideInteraction]: !_
        }),
        'aria-disabled': c,
        ...E,
        children: [
            null != n
                ? (0, r.jsx)('div', {
                      className: u.labelContainer,
                      children: (0, r.jsx)('div', {
                          className: u.label,
                          children: n
                      })
                  })
                : null,
            I
        ]
    });
}
