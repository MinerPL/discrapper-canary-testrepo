n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(776568), r = n(218035), o = n(775666), c = n(858822), d = n(423589), u = n(131704), _ = n(430824);
function E(e) {
    let {
            channel: t,
            closePopout: n,
            onSelect: E,
            navId: m,
            label: I,
            location: T,
            includeGuildMute: h
        } = e, N = (0, r.c)(t), f = (0, o.EQ)(t), p = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guild_id)), C = (0, c.Z)(p), g = (0, d.Mn)('ChannelNotificationSettingsPopoutMenu') && u.$N.has(t.type);
    return (0, i.jsxs)(s.Menu, {
        navId: m,
        onClose: n,
        'aria-label': I,
        onSelect: E,
        children: [
            (0, i.jsx)(s.MenuGroup, { children: (0, l.ZP)(t, T) }),
            h ? (0, i.jsx)(s.MenuGroup, { children: C }) : null,
            g ? f : (0, i.jsx)(s.MenuGroup, { children: N })
        ]
    });
}
