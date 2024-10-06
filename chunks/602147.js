n.d(t, {
    o: function () {
        return N;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(636977),
    a = n(704215),
    s = n(481060),
    o = n(169559),
    c = n(706140),
    u = n(571457),
    d = n(836768),
    h = n(341907),
    p = n(703656),
    f = n(603592),
    _ = n(981631),
    m = n(921944),
    g = n(49898),
    C = n(46140),
    I = n(689938),
    E = n(55869);
function N(e) {
    switch (e) {
        case g.F$.QUESTS:
            return (0, h.navigateToQuestHome)(C.dr.DISCOVERY_COMPASS, r.j.DISCOVERY_COMPASS);
        case g.F$.APPS:
            return (0, p.uL)(_.Z5c.GLOBAL_DISCOVERY_APPS);
        case g.F$.SERVERS:
            return (0, p.uL)(_.Z5c.GLOBAL_DISCOVERY_SERVERS);
        default:
            return (0, p.uL)(_.Z5c.GLOBAL_DISCOVERY);
    }
}
let S = l.forwardRef(function (e, t) {
    let { selected: n, className: r, onClick: h } = e,
        p = d.d.getState().selectedTab,
        _ = (0, o.Z)('discovery_button'),
        [C, S] = (0, c.cv)([a.z.GLOBAL_DISCOVERY_RAPIDASH_NOTIF]),
        x = l.useCallback(() => {
            null == h || h(), (0, u.k5)({ source: g.JU.GUILDS_BAR_ICON }), N(p), S(m.L.DISMISS);
        }, [h, p, S]),
        v = null != C && _,
        T = l.useMemo(
            () => ({
                lowerBadgeSize: {
                    width: 12,
                    height: 12
                },
                lowerBadge: v ? (0, i.jsx)('div', { className: E.guildNotif }) : void 0
            }),
            [v]
        );
    return (0, i.jsx)(f.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: r,
        onClick: x,
        selected: n,
        tooltip: I.Z.Messages.DISCOVER,
        icon: s.CompassIcon,
        ...T
    });
});
t.Z = S;
