var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(922482),
    l = n(979651),
    u = n(915863),
    c = n(689938),
    d = n(275778);
t.Z = (e) => {
    let { guildId: t, channelId: n, color: i, look: _, isProfile: E, onAction: f } = e,
        h = (0, s.e7)([l.Z], () => l.Z.isInChannel(n), [n]);
    return (0, r.jsx)(
        u.Z,
        {
            className: a()(d.button, { [d.popout]: !E }),
            color: i,
            look: _,
            disabled: h,
            onClick: () => {
                null == f || f(), o.AC(t, n);
            },
            fullWidth: !0,
            children: c.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
        },
        'stage'
    );
};
