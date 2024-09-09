n.d(t, {
    o: function () {
        return E;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(636977),
    a = n(481060),
    s = n(212093),
    o = n(831565),
    c = n(571457),
    u = n(836768),
    d = n(341907),
    h = n(703656),
    p = n(683301),
    _ = n(603592),
    f = n(981631),
    g = n(731455),
    m = n(49898),
    C = n(46140),
    I = n(689938);
function E(e) {
    let t = (0, o.a)({ location: 'discovery_button' }),
        n = window.location.pathname.startsWith(f.Z5c.GUILD_DISCOVERY),
        i = p.ZP.getCurrentCategoryId() === g.Gj.Clans;
    if (t) {
        if (e === m.F$.QUESTS) {
            (0, d.navigateToQuestHome)(C.dr.DISCOVERY_COMPASS, r.j.DISCOVERY_COMPASS);
            return;
        }
        if (e === m.F$.SERVERS) {
            (0, h.uL)(f.Z5c.GLOBAL_DISCOVERY_SERVERS);
            return;
        }
        (0, h.uL)(f.Z5c.GLOBAL_DISCOVERY);
        return;
    }
    n && !i && ((0, s.AQ)(), (0, s.uY)(g.Hk, !0));
    let l = (0, h.s1)().location.search;
    (0, h.uL)(f.Z5c.GUILD_DISCOVERY, { search: l });
}
let N = l.forwardRef(function (e, t) {
    let { selected: n, className: l, onClick: r } = e,
        s = (0, o.v)({ location: 'guild_discovery_button' }) ? I.Z.Messages.DISCOVER : I.Z.Messages.GUILD_DISCOVERY_TOOLTIP,
        d = u.d.getState().selectedTab;
    return (0, i.jsx)(_.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: l,
        onClick: () => {
            null == r || r(), (0, c.k5)({ source: m.JU.GUILDS_BAR_ICON }), E(d);
        },
        selected: n,
        tooltip: s,
        icon: a.CompassIcon
    });
});
t.Z = N;
