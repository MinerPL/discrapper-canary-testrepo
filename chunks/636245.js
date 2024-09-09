var i = n(735250);
n(470079);
var s = n(442837),
    a = n(922482),
    l = n(979651),
    r = n(915863),
    o = n(689938),
    c = n(275778);
t.Z = (e) => {
    let { guildId: t, channelId: n, color: u, look: d, onAction: h } = e,
        m = (0, s.e7)([l.Z], () => l.Z.isInChannel(n), [n]);
    return (0, i.jsx)(
        r.Z,
        {
            className: c.button,
            color: u,
            look: d,
            disabled: m,
            onClick: () => {
                null == h || h(), a.AC(t, n);
            },
            fullWidth: !0,
            children: o.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
        },
        'stage'
    );
};
