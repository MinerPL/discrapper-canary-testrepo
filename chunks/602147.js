n(47120);
var i = n(200651),
    l = n(192379),
    r = n(636977),
    a = n(704215),
    o = n(481060),
    s = n(169559),
    c = n(243778),
    u = n(571457),
    d = n(836768),
    h = n(749681),
    p = n(667105),
    f = n(603592),
    m = n(921944),
    g = n(49898),
    C = n(128449),
    _ = n(46140),
    x = n(388032),
    v = n(55869);
let I = l.forwardRef(function (e, t) {
    let { selected: n, className: I, onClick: b } = e,
        S = (0, s.Z)('discovery_button'),
        Z = (0, p.Ws)({ location: _.dr.CONFLICT_CHECKS }),
        [N, E] = (0, c.US)(S && Z ? [a.z.RAPIDASH_MORE_GUILDS_UPSELL] : [], m.R.SIDEBAR, !0),
        y = N === a.z.RAPIDASH_MORE_GUILDS_UPSELL,
        j = l.useCallback(() => {
            null == b || b(),
                (0, u.k5)({ source: g.JU.GUILDS_BAR_ICON }),
                !(function (e) {
                    switch (e) {
                        case g.F$.QUESTS:
                            return (0, h.transitionToGlobalDiscovery)({
                                tab: g.F$.QUESTS,
                                location: _.dr.DISCOVERY_COMPASS,
                                questContent: r.j.DISCOVERY_COMPASS
                            });
                        case g.F$.SERVERS:
                            return (0, h.transitionToGlobalDiscovery)({
                                tab: g.F$.SERVERS,
                                entrypoint: C.Qq.GUILDS_BAR
                            });
                        default:
                            return (0, h.transitionToGlobalDiscovery)({ tab: e });
                    }
                })(d.Z.getField('selectedTab')),
                y && E(m.L.DISMISS);
        }, [b, E, y]),
        T = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: y ? (0, i.jsx)('div', { className: v.guildNotif }) : void 0
            }),
            [y]
        );
    return (0, i.jsx)(f.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: I,
        onClick: j,
        selected: n,
        tooltip: x.intl.string(x.t['4nEZLi']),
        icon: o.CompassIcon,
        ...T
    });
});
t.Z = I;
