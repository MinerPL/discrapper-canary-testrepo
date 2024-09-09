var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(636977),
    c = n(731965),
    d = n(481060),
    u = n(341907),
    _ = n(703656),
    E = n(836768),
    h = n(766219),
    m = n(49898),
    I = n(981631),
    g = n(46140),
    p = n(689938),
    T = n(542601);
function S(e) {
    let { tab: t } = e,
        n = (0, E.d)((e) => e.selectedTab === t, l.Z),
        s = a.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case m.F$.SERVERS:
                            return (0, i.jsx)(d.ServerIcon, { color: 'currentColor' });
                        case m.F$.QUESTS:
                            return (0, i.jsx)(d.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        p = a.useMemo(() => (0, h.s)(t), [t]),
        S = a.useCallback(() => {
            switch (((0, c.j)(() => E.d.setState({ selectedTab: t })), t)) {
                case m.F$.QUESTS:
                    return (0, u.navigateToQuestHome)(g.dr.DISCOVERY_SIDEBAR, o.j.DISCOVERY_SIDEBAR);
                case m.F$.SERVERS:
                    return (0, _.uL)(I.Z5c.GLOBAL_DISCOVERY_SERVERS);
            }
        }, [t]);
    return (0, i.jsxs)(d.Clickable, {
        onClick: S,
        className: r()(T.navItem, { [T.selected]: n }),
        children: [
            (0, i.jsx)('div', {
                className: T.navItemIcon,
                children: s
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: p
            })
        ]
    });
}
t.Z = function () {
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsx)('div', {
                className: T.header,
                children: (0, i.jsx)(d.Heading, {
                    variant: 'text-lg/semibold',
                    children: p.Z.Messages.GLOBAL_DISCOVERY_TITLE
                })
            }),
            (0, i.jsx)('nav', {
                className: T.nav,
                children: m.mc.map((e) => (0, i.jsx)(S, { tab: e }, e))
            })
        ]
    });
};
