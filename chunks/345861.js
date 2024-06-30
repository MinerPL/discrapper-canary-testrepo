t.d(n, {
    Z: function () {
        return i;
    }
});
var s = t(735250);
t(470079);
var o = t(120356), r = t.n(o), a = t(481060), l = t(813197);
function i(e) {
    let {
        buttonCTA: n,
        onChange: t,
        'aria-label': o,
        multiple: i = !1,
        disabled: c = !1,
        submitting: u = !1,
        ...d
    } = e;
    return (0, s.jsx)(a.FocusRing, {
        within: !0,
        children: (0, s.jsxs)('div', {
            className: r()((0, a.getButtonStyle)({
                ...d,
                submitting: u,
                disabled: c
            })),
            style: { width: 'max-content' },
            'aria-disabled': c,
            children: [
                (0, s.jsx)('span', {
                    'aria-hidden': !0,
                    children: n
                }),
                (0, s.jsx)(l.ZP, {
                    tabIndex: 0,
                    onChange: t,
                    multiple: i,
                    'aria-label': null != o ? o : n,
                    disabled: c
                })
            ]
        })
    });
}
