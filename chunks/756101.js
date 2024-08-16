n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(410030),
    r = n(225784),
    l = n(766219),
    o = n(374939),
    c = n(901040),
    d = n(239181);
function u(e) {
    let { tab: t, guilds: n, onScroll: u, onGuildCardClick: _, onGuildCardSeen: E } = e,
        h = (0, s.ZP)(),
        m = (0, l.Mf)(t),
        I = (0, l.a$)(t),
        g = (0, l.QW)(t),
        p = (0, l.lg)(t);
    return (0, i.jsxs)(o.Z, {
        title: m,
        description: I,
        onScroll: u,
        bannerBackground: (0, i.jsx)(c.Z, {}),
        children: [
            (0, i.jsx)(a.Heading, {
                className: d.sectionTitle,
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: g
            }),
            (0, i.jsx)('div', {
                className: d.content,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        r.Z,
                        {
                            guild: e,
                            onView: (e) => _(e, t, p),
                            theme: h,
                            onGuildCardSeen: (e) => E(e, p)
                        },
                        e.id
                    )
                )
            })
        ]
    });
}
