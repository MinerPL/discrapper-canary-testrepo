n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(510659),
    o = n(899007),
    l = n(287954),
    u = n(660579),
    c = n(64621),
    d = n(228168),
    f = n(8621);
function _(e) {
    let { user: t, profileType: n, animateOnHover: i, onOpenProfile: _, ...h } = e,
        p = d.n_.AVATAR,
        { interactionSource: m } = (0, s.Xo)(),
        g = a()(f.avatar, {
            [f.hoisted]: m === d.n_.AVATAR || m === d.n_.STATUS,
            [f.biteSize]: n === d.y0.BITE_SIZE,
            [f.fullSize]: n === d.y0.FULL_SIZE,
            [f.panel]: n === d.y0.PANEL
        });
    return (0, r.jsx)(c.Z, {
        sourceType: d.n_.AVATAR,
        user: t,
        children: (0, r.jsx)(l.Z, {
            user: t,
            className: g,
            profileType: n,
            sourceType: p,
            ...h,
            children: () =>
                (0, r.jsx)(u.Z, {
                    className: g,
                    user: t,
                    sourceType: p,
                    children: (0, r.jsx)(o.Z, {
                        user: t,
                        animateOnHover: i,
                        onOpenProfile: _,
                        profileType: n,
                        className: f.withReactReply,
                        ...h
                    })
                })
        })
    });
}
