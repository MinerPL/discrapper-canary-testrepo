l.d(n, {
    Z: function () {
        return u;
    },
    q: function () {
        return c;
    }
});
var a = l(735250);
l(470079);
var r = l(442837), i = l(325708), t = l(213557), s = l(433355), d = l(981631), o = l(176505);
let c = 656;
function u(e) {
    let {
            pageWidth: n,
            onSidebarResize: l
        } = e, u = (0, r.e7)([s.ZP], () => s.ZP.getSidebarState(o.oC.GUILD_HOME));
    if (null == u || null == u.channelId)
        return null;
    let h = n - d.PrS - c;
    return (0, a.jsx)(i.Z, {
        sidebarType: i.y.HomeSidebar,
        maxWidth: h,
        onWidthChange: l,
        children: (0, a.jsx)(t.Z, {
            channelId: u.channelId,
            baseChannelId: o.oC.GUILD_HOME,
            channelViewSource: 'Home View',
            isResourceChannelView: !0
        })
    });
}
