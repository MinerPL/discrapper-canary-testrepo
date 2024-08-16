n.d(t, {
    _: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(731965),
    c = n(481060),
    d = n(703656),
    u = n(836768),
    _ = n(766219),
    E = n(49898),
    h = n(981631),
    m = n(689938),
    I = n(671590);
function g(e) {
    let { tab: t } = e,
        n = (0, u.d)((e) => e.selectedPage === t, l.Z),
        s = a.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case E.F$.SERVERS:
                            return (0, i.jsx)(c.ServerIcon, { color: 'currentColor' });
                        case E.F$.QUESTS:
                            return (0, i.jsx)(c.QuestsIcon, { color: 'currentColor' });
                    }
                })(t),
            [t]
        ),
        m = a.useMemo(() => (0, _.sm)(t), [t]),
        g = a.useCallback(() => {
            switch (((0, o.j)(() => u.d.setState({ selectedPage: t })), t)) {
                case E.F$.QUESTS:
                    return (0, d.uL)(h.Z5c.QUEST_HOME);
                case E.F$.SERVERS:
                    return (0, d.uL)(h.Z5c.GLOBAL_DISCOVERY_SERVERS);
            }
        }, [t]);
    return (0, i.jsxs)(c.Clickable, {
        onClick: g,
        className: r()(I.navItem, { [I.selected]: n }),
        children: [
            (0, i.jsx)('div', {
                className: I.navItemIcon,
                children: s
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/medium',
                color: 'none',
                children: m
            })
        ]
    });
}
function p() {
    return (0, i.jsxs)('div', {
        className: I.container,
        children: [
            (0, i.jsx)('div', {
                className: I.header,
                children: (0, i.jsx)(c.Heading, {
                    variant: 'text-lg/semibold',
                    children: m.Z.Messages.GLOBAL_DISCOVERY_TITLE
                })
            }),
            (0, i.jsx)('nav', {
                className: I.nav,
                children: E.mc.map((e) => (0, i.jsx)(g, { tab: e }, e))
            })
        ]
    });
}
