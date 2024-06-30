n.d(t, {
    U: function () {
        return I;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(657707), r = n(823379), l = n(51448), o = n(164427), c = n(624383), d = n(742916), u = n(982345), _ = n(49898), E = n(689938), h = n(432403);
function I() {
    let [e, t] = s.useState(''), {
            tabs: n,
            selectedTab: I,
            onSelectTab: m
        } = (0, u.Y)(), p = s.useRef(new d.m()), g = s.useCallback(e => {
            switch (e) {
            case _.v.GUILDS:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
                        description: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                        backgroundImageUrl: 'https://cdn.discordapp.com/assets/clans/DiscoveryUpsell_Valorant_Background.png'
                    })
                });
            case _.v.GAMING:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_TITLE.format({ category: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY }),
                        description: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_DESCRIPTION
                    })
                });
            case _.v.MUSIC:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_TITLE.format({ category: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY }),
                        description: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_DESCRIPTION
                    })
                });
            case _.v.ENTERTAINMENT:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_TITLE.format({ category: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY }),
                        description: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_DESCRIPTION
                    })
                });
            case _.v.TECH:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_TITLE.format({ category: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY }),
                        description: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_DESCRIPTION
                    })
                });
            case _.v.EDUCATION:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_TITLE.format({ category: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY }),
                        description: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_DESCRIPTION
                    })
                });
            case _.v.HUBS:
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(c.c, {
                        title: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_TITLE.format({ category: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUBS_CATEGORY }),
                        description: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GENERIC_HERO_DESCRIPTION
                    })
                });
            default:
                (0, r.vE)(e);
            }
        }, []);
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)(l.f, {
                icon: (0, i.jsx)(a.QTo, {}),
                title: E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE,
                tabs: n,
                selectedTab: I,
                onTabSelect: m,
                searchQuery: e,
                onSearch: t,
                onSearchClear: () => t(''),
                scrollManager: p
            }),
            (0, i.jsx)(o.J, {
                scrollManager: p,
                children: g(I.id)
            })
        ]
    });
}
