n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(481060), s = n(479313), r = n(765104), o = n(502568), c = n(626135), u = n(981631), d = n(814249), h = n(689938);
function p(e) {
    let {channel: t} = e, n = (0, a.e7)([r.Z], () => r.Z.shouldShowTopicsBar());
    return (0, i.jsx)(o.ZP.Icon, {
        icon: l.TopicsIcon,
        onClick: () => {
            c.default.track(u.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: d.Dc.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type
            }), (0, s.e7)();
        },
        tooltip: n ? h.Z.Messages.SUMMARIES_SHOWN : h.Z.Messages.SUMMARIES_HIDDEN,
        selected: n,
        'aria-expanded': n
    });
}
