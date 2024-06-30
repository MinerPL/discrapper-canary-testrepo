n.d(t, {
    Z: function () {
        return p;
    }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(442837), a = n(352527), o = n(183584), r = n(487029), l = n(592125), c = n(944486), d = n(554174), u = n(710111), h = n(641973);
function p() {
    let [e, t] = (0, s.Wu)([a.Z], () => [
            a.Z.enabled,
            a.Z.keepOpen
        ]), n = (0, s.e7)([c.Z], () => c.Z.getVoiceChannelId()), p = (0, s.e7)([l.Z], () => l.Z.getChannel(n), [n]), f = null == p ? void 0 : p.getGuildId();
    return e && null != p ? (0, i.jsx)('div', {
        className: h.widget,
        children: (0, i.jsx)(r.Z, {
            width: u.FW.width,
            height: u.FW.height,
            guildId: f,
            channel: p,
            keepOpen: t,
            onClose: function () {
                let e = (0, d.Z)();
                null != e && (0, o.oZ)(e);
            },
            analyticsSource: 'overlay'
        })
    }) : null;
}
