var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(636977),
    o = n(481060),
    c = n(352057),
    d = n(836768),
    u = n(766219),
    h = n(749681),
    m = n(49898),
    p = n(46140),
    g = n(388032),
    f = n(696165);
function _(e) {
    let { tab: t } = e,
        n = d.Z.useField('selectedTab'),
        a = r.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case m.F$.SERVERS:
                            return (0, i.jsx)(o.ServerIcon, { color: 'currentColor' });
                        case m.F$.APPS:
                            return (0, i.jsx)(o.AppsIcon, { color: 'currentColor' });
                        case m.F$.QUESTS:
                            return (0, i.jsx)(o.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        c = r.useMemo(() => (0, u.sm)(t), [t]),
        g = n === t,
        _ = r.useCallback(() => {
            if (t === m.F$.QUESTS)
                return (0, h.transitionToGlobalDiscovery)({
                    tab: m.F$.QUESTS,
                    location: p.dr.DISCOVERY_SIDEBAR,
                    questContent: s.j.DISCOVERY_SIDEBAR
                });
            return (0, h.transitionToGlobalDiscovery)({ tab: t });
        }, [t]);
    return (0, i.jsxs)(o.Clickable, {
        onClick: _,
        className: l()(f.navItem, { [f.selected]: g }),
        children: [
            (0, i.jsx)('div', {
                className: f.navItemIcon,
                children: a
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: c
            })
        ]
    });
}
t.Z = function () {
    let e = (0, c.h)({ location: 'GlobalDiscoverySidebar' });
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)('div', {
                className: f.header,
                children: (0, i.jsx)(o.Heading, {
                    variant: 'text-lg/semibold',
                    children: g.intl.string(g.t['1KqYnp'])
                })
            }),
            (0, i.jsx)('nav', {
                className: f.nav,
                children: m.mc.map((t) => (t !== m.F$.APPS || e ? (0, i.jsx)(_, { tab: t }, t) : null))
            })
        ]
    });
};
