n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(362721),
    u = n(12498),
    d = n(111028),
    h = n(454585),
    p = n(626135),
    _ = n(981631),
    f = n(689938),
    g = n(51953),
    m = n(910212);
function C(e) {
    let { channel: t, connected: n, hovered: r, subtitle: C, onClick: I, enableHangStatus: E, allowChannelTopic: N } = e,
        x = (0, s.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        S = null != x && x.length > 0,
        v = (0, c.Z)(t, !0),
        Z = (!E || !!N) && v,
        T = null != C && C.length > 0;
    l.useEffect(() => {
        S &&
            p.default.track(_.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id
            });
    }, [t.id, S, t.guild_id]);
    let L = (0, o.useRedesignIconContext)().enabled ? 12 : 14;
    if (null == t.guild_id) return null;
    let A = a()(g.statusDiv, n && Z ? g.hoverable : null);
    if (S)
        return (0, i.jsx)(o.Clickable, {
            className: A,
            onClick: Z ? I : void 0,
            children: (0, i.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: a()(g.statusText, m.markup),
                children: (0, i.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(x, !0, { channelId: t.id }) })
            })
        });
    if (n && Z && (!T || r))
        return (0, i.jsxs)(o.Clickable, {
            className: A,
            onClick: I,
            children: [
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    className: g.statusText,
                    children: f.Z.Messages.VOICE_CHANNEL_SET_STATUS
                }),
                (0, i.jsx)(o.PencilIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: g.pencilIcon,
                    width: L,
                    height: L
                })
            ]
        });
    if (T) return (0, i.jsx)(d.Z, { children: C });
    return null;
}
