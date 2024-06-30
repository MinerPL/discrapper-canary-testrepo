n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), l = n(481060), s = n(358221), r = n(441061), o = n(431368), c = n(167675), u = n(418469), d = n(673539), h = n(354459), p = n(689938);
function m(e) {
    let {
            channelId: t,
            onClose: n,
            appContext: m,
            exitFullScreen: _,
            onSelect: f
        } = e, E = (0, a.e7)([s.Z], () => s.Z.getSelectedParticipant(t)), C = (null == E ? void 0 : E.type) === h.fO.STREAM ? E.stream : null, g = (0, r.Z)(t), I = (0, c.Z)(), x = (0, o.Z)(t), T = (0, d.Z)(t);
    return (0, i.jsxs)(l.Menu, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': p.Z.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
        onSelect: f,
        children: [
            g,
            I,
            x,
            T,
            (0, u.Z)(C, m, _)
        ]
    });
}
