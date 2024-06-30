n.d(t, {
    o: function () {
        return g;
    }
});
var i = n(735250), l = n(470079), r = n(704215), a = n(481060), s = n(212093), o = n(963202), c = n(605236), u = n(703656), d = n(683301), h = n(603592), p = n(981631), _ = n(731455), f = n(689938), m = n(356131);
function g() {
    let e = window.location.pathname.startsWith(p.Z5c.GUILD_DISCOVERY), t = d.ZP.getCurrentCategoryId() === _.Gj.Clans;
    e && !t && ((0, s.AQ)(), (0, s.uY)(_.Hk, !0));
    let n = (0, u.s1)().location.search;
    (0, u.uL)(p.Z5c.GUILD_DISCOVERY, { search: n });
}
let C = l.forwardRef(function (e, t) {
    let {
            selected: n,
            tooltip: l,
            className: s,
            onClick: u
        } = e, {clanDiscoveryEnabled: d} = (0, o.nk)('guild_discovery'), p = (0, c.wE)(r.z.NEW_GAMING_DISCOVERY_NOTIF), _ = {
            lowerBadgeSize: {
                width: 12,
                height: 12
            }
        };
    return d && !p && (_.lowerBadge = (0, i.jsx)('div', { className: m.guildNotif })), (0, i.jsx)(h.Z, {
        id: 'guild-discover-button',
        ref: t,
        className: s,
        onClick: null != u ? u : g,
        selected: n,
        tooltip: null != l ? l : f.Z.Messages.GUILD_DISCOVERY_TOOLTIP,
        icon: a.CompassIcon,
        ..._
    });
});
t.Z = C;
