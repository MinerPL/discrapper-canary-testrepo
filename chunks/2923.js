n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(442837),
    s = n(592125),
    a = n(944486),
    u = n(293224),
    c = n(720870);
function d(e) {
    let { locked: t } = e,
        n = (0, l.e7)([a.Z], () => a.Z.getVoiceChannelId()),
        o = (0, l.e7)([s.Z], () => s.Z.getChannel(n)),
        d = null != o;
    return (0, i.jsxs)('div', {
        className: r()({
            [c.panelContainer]: !0,
            [c.locked]: t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: c.panelRow,
                children: [
                    (0, i.jsx)(u.Ox, {
                        voiceChannel: o,
                        locked: t
                    }),
                    (0, i.jsx)(u.SE, {
                        voiceChannel: o,
                        locked: t
                    }),
                    (0, i.jsx)(u.N3, {
                        voiceChannel: o,
                        locked: t
                    }),
                    (0, i.jsx)('div', { className: c.separator }),
                    (0, i.jsx)(u.sm, {
                        voiceChannel: o,
                        locked: t
                    }),
                    (0, i.jsx)(u.aG, {
                        voiceChannel: o,
                        locked: t
                    }),
                    (0, i.jsx)('div', { className: c.separator }),
                    (0, i.jsx)(u.c_, {
                        voiceChannel: o,
                        locked: t
                    })
                ]
            }),
            d &&
                (0, i.jsx)('div', {
                    className: c.panelRow,
                    children: (0, i.jsx)(u.L, {
                        voiceChannel: o,
                        locked: t
                    })
                })
        ]
    });
}
