n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(810097);
function s(e) {
    let { user: t, sourceType: n, className: s, children: o, interactionSourceId: l } = e,
        u = i.useRef(null),
        [c, d] = i.useState(!1),
        f = () => {
            d(!0);
        },
        _ = () => {
            d(!1);
        };
    return (0, r.jsxs)('div', {
        className: s,
        onMouseOver: f,
        onMouseLeave: _,
        onFocus: f,
        onBlur: (e) => {
            var t;
            !(null === (t = u.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && _();
        },
        ref: u,
        children: [
            o,
            (0, r.jsx)(a.ZP, {
                user: t,
                sourceType: n,
                isVisible: c,
                isExpandable: !1,
                interactionSourceId: l
            })
        ]
    });
}
