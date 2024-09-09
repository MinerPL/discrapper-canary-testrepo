n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(410030),
    r = n(225784),
    l = n(229765),
    o = n(374939),
    c = n(726115),
    d = n(481685),
    u = n(252065);
function _(e) {
    let { tab: t, guilds: n, onScroll: _, onGuildCardClick: E, onGuildCardSeen: h } = e,
        m = (0, s.ZP)(),
        I = (0, c.Mf)(t),
        g = (0, c.a$)(t),
        p = (0, c.QW)(t),
        T = (0, c.lg)(t);
    return (0, i.jsxs)(o.Z, {
        title: I,
        description: g,
        onScroll: _,
        bannerBackground: (0, i.jsx)(d.Z, {}),
        children: [
            (0, i.jsx)(l.KY, {
                location: 'global_discovery',
                query: t
            }),
            (0, i.jsx)(a.Heading, {
                className: u.sectionTitle,
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: p
            }),
            (0, i.jsx)('div', {
                className: u.content,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        r.Z,
                        {
                            guild: e,
                            onView: (e) => E(e, t, T),
                            theme: m,
                            onGuildCardSeen: (e) => h(e, T)
                        },
                        e.id
                    )
                )
            })
        ]
    });
}
