n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    s = n(430824),
    o = n(970606),
    c = n(979264),
    d = n(550271),
    u = n(116175),
    h = n(308083),
    m = n(388032),
    p = n(969676),
    g = n(602075);
t.Z = (e) => {
    var t, n;
    let { guildId: f, badge: _, primaryColor: E, secondaryColor: I, tag: C, inSettings: v } = e,
        S = r.useMemo(() => {
            let e = (0, u.yf)();
            return {
                primary: null != E ? E : e.primary,
                secondary: null != I ? I : e.secondary
            };
        }, [E, I]),
        [N, T] = r.useState(!1),
        x = r.useCallback(
            (e) => {
                e &&
                    (0, o.Gx)({
                        guildId: f,
                        signupPage: o._9.CUSTOMIZE_DISCOVERY,
                        actionType: o.eI.CHOOSE_GUILD_DISCOVERY,
                        enabledDiscovery: e,
                        inSettings: v
                    }),
                    T(e);
            },
            [f, v]
        ),
        b = (0, a.e7)([s.Z], () => s.Z.getGuild(f), [f]);
    return (0, i.jsxs)('div', {
        className: g.slideContent,
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-xxl/medium',
                className: g.title,
                children: m.intl.string(m.t.Z36xlZ)
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: g.subtitle,
                children: m.intl.string(m.t['07QTAg'])
            }),
            (0, i.jsx)('div', {
                className: p.container,
                children: (0, i.jsxs)('div', {
                    className: p.mainContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: p.itemContainer,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: m.intl.string(m.t.WO4DiI)
                                }),
                                (0, i.jsxs)('div', {
                                    className: p.itemSelectionContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            children: (0, i.jsx)('div', {
                                                className: p.iconContainer,
                                                children: (0, i.jsx)('div', {
                                                    children: (0, i.jsx)(c.aG, {
                                                        guildId: f,
                                                        clanTag: C,
                                                        className: p.tag,
                                                        clanBadge: (0, i.jsx)(d.A, {
                                                            badge: _,
                                                            width: h.NC.SIZE_12,
                                                            height: h.NC.SIZE_12,
                                                            primaryTintColor: S.primary,
                                                            secondaryTintColor: S.secondary
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: p.itemDescription,
                                            children: [
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: m.intl.string(m.t.QotFUV)
                                                }),
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: m.intl.format(m.t['g/mtUF'], { guildName: null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : '' })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: p.itemContainer,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: m.intl.string(m.t.LMz2R0)
                                }),
                                (0, i.jsxs)('div', {
                                    className: p.itemSelectionContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            children: (0, i.jsx)('div', {
                                                className: p.iconContainer,
                                                children: (0, i.jsx)(l.CompassIcon, {
                                                    width: 24,
                                                    height: 24,
                                                    size: 'custom'
                                                })
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: p.itemDescription,
                                            children: [
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: m.intl.string(m.t.s0u7oq)
                                                }),
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: m.intl.format(m.t['5uK+gY'], { guildName: null !== (n = null == b ? void 0 : b.name) && void 0 !== n ? n : '' })
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(l.FormSwitch, {
                                            className: p.toggle,
                                            hideBorder: !0,
                                            onChange: x,
                                            value: N
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
