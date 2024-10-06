var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(636977),
    c = n(731965),
    d = n(481060),
    u = n(352057),
    _ = n(341907),
    E = n(703656),
    h = n(836768),
    m = n(766219),
    I = n(49898),
    p = n(981631),
    g = n(46140),
    T = n(689938),
    f = n(696165);
function S(e) {
    let { tab: t } = e,
        n = (0, h.d)((e) => e.selectedTab === t, l.Z),
        s = a.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case I.F$.SERVERS:
                            return (0, i.jsx)(d.ServerIcon, { color: 'currentColor' });
                        case I.F$.APPS:
                            return (0, i.jsx)(d.AppsIcon, { color: 'currentColor' });
                        case I.F$.QUESTS:
                            return (0, i.jsx)(d.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        u = a.useMemo(() => (0, m.sm)(t), [t]),
        T = a.useCallback(() => {
            switch (((0, c.j)(() => h.d.setState({ selectedTab: t })), t)) {
                case I.F$.QUESTS:
                    return (0, _.navigateToQuestHome)(g.dr.DISCOVERY_SIDEBAR, o.j.DISCOVERY_SIDEBAR);
                case I.F$.APPS:
                    return (0, E.uL)(p.Z5c.GLOBAL_DISCOVERY_APPS);
                case I.F$.SERVERS:
                    return (0, E.uL)(p.Z5c.GLOBAL_DISCOVERY_SERVERS);
            }
        }, [t]);
    return (0, i.jsxs)(d.Clickable, {
        onClick: T,
        className: r()(f.navItem, { [f.selected]: n }),
        children: [
            (0, i.jsx)('div', {
                className: f.navItemIcon,
                children: s
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: u
            })
        ]
    });
}
t.Z = function () {
    let e = (0, u.h)({ location: 'GlobalDiscoverySidebar' });
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)('div', {
                className: f.header,
                children: (0, i.jsx)(d.Heading, {
                    variant: 'text-lg/semibold',
                    children: T.Z.Messages.GLOBAL_DISCOVERY_TITLE
                })
            }),
            (0, i.jsx)('nav', {
                className: f.nav,
                children: I.mc.map((t) => (t !== I.F$.APPS || e ? (0, i.jsx)(S, { tab: t }, t) : null))
            })
        ]
    });
};
