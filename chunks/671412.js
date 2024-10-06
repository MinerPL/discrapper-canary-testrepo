n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(510659),
    l = n(899007),
    u = n(287954),
    c = n(825801),
    d = n(64621),
    _ = n(228168),
    E = n(8621);
function f(e) {
    let { user: t, sourceType: n, className: a, children: s } = e,
        o = i.useRef(null),
        [l, u] = i.useState(!1),
        d = () => {
            u(!0);
        },
        _ = () => {
            u(!1);
        };
    return (0, r.jsxs)('div', {
        className: a,
        onMouseOver: d,
        onMouseLeave: _,
        onFocus: d,
        onBlur: (e) => {
            var t;
            !(null === (t = o.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && _();
        },
        ref: o,
        children: [
            s,
            (0, r.jsx)(c.ZP, {
                user: t,
                sourceType: n,
                isVisible: l,
                isExpandable: !1
            })
        ]
    });
}
function h(e) {
    let { user: t, profileType: n, animateOnHover: i, onOpenProfile: a, ...c } = e,
        h = _.n_.AVATAR,
        { interactionSource: p } = (0, o.Xo)(),
        I = s()(E.avatar, {
            [E.hoisted]: p === _.n_.AVATAR || p === _.n_.STATUS,
            [E.biteSize]: n === _.y0.BITE_SIZE,
            [E.fullSize]: n === _.y0.FULL_SIZE,
            [E.panel]: n === _.y0.PANEL
        });
    return (0, r.jsx)(d.Z, {
        sourceType: _.n_.AVATAR,
        user: t,
        children: (0, r.jsx)(u.Z, {
            user: t,
            className: I,
            profileType: n,
            sourceType: h,
            ...c,
            children: () =>
                (0, r.jsx)(f, {
                    className: I,
                    user: t,
                    sourceType: h,
                    children: (0, r.jsx)(l.Z, {
                        user: t,
                        animateOnHover: i,
                        onOpenProfile: a,
                        profileType: n,
                        className: E.withReactReply,
                        ...c
                    })
                })
        })
    });
}
