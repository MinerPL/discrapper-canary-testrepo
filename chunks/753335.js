var i = n(570140),
    a = n(703656),
    s = n(998502),
    r = n(852926),
    l = n(186901),
    o = n(981631);
t.Z = {
    [o.Etm.OPEN_MESSAGE]: {
        scope: l.lH,
        handler(e) {
            let {
                args: { guild_id: t, channel_id: n, message_id: l, pid: c }
            } = e;
            if ((0, r.jU)(c).context === o.IlC.OVERLAY) {
                i.Z.dispatch({
                    type: 'OVERLAY_OPEN_MESSAGE',
                    guildId: t,
                    channelId: n,
                    messageId: l
                });
                return;
            }
            (0, a.dL)({ pathname: o.Z5c.CHANNEL(t, n, l) }), s.ZP.focus();
        }
    }
};
