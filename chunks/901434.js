var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(287734),
    o = n(358221),
    c = n(305325),
    u = n(281956),
    d = n(27457),
    h = n(823379),
    m = n(5192),
    p = n(501655),
    _ = n(689938),
    E = n(226409);
let f = (e, t) => m.ZP.getName(e.getGuildId(), e.id, t.user);
t.Z = function (e) {
    var t, n;
    let { participants: m, channel: C, hasConnectPermission: g } = e,
        I = (0, u.J)(C.guild_id),
        x = a.useCallback(() => {
            I ? (0, c.hk)(C.guild_id, () => r.default.selectVoiceChannel(C.id)) : r.default.selectVoiceChannel(C.id);
        }, [C.id, C.guild_id, I]),
        T = m.filter((e) => e.type === p.Ui.VOICE),
        N = 4 === T.length ? 2 : 3,
        v = (0, s.Wu)([o.Z], () => T.map((e) => o.Z.getParticipant(C.id, e.id)).filter(h.lm), [C.id, T]);
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsx)('div', {
                className: E.tiles,
                style: { maxWidth: 168 * N },
                children: v.slice(0, 5).map((e) =>
                    (0, i.jsx)(
                        d.ZP,
                        {
                            participant: e,
                            channel: C,
                            className: E.tile,
                            paused: !0,
                            inCall: !0,
                            noVideoRender: !0,
                            inPopout: !1,
                            width: 48
                        },
                        e.id
                    )
                )
            }),
            (0, i.jsx)(l.Heading, {
                className: E.channelName,
                variant: 'heading-xxl/semibold',
                children: C.name
            }),
            (0, i.jsx)('div', {
                className: E.participantsRow,
                children: (0, i.jsx)(l.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children:
                        ((t = C),
                        0 === (n = T).length
                            ? _.Z.Messages.CURRENTLY_IN_STAGE_EMPTY
                            : 1 === n.length
                              ? _.Z.Messages.CURRENTLY_IN_STAGE_1.format({ a: f(t, n[0]) })
                              : 2 === n.length
                                ? _.Z.Messages.CURRENTLY_IN_STAGE_2.format({
                                      a: f(t, n[0]),
                                      b: f(t, n[1])
                                  })
                                : n.length > 2
                                  ? _.Z.Messages.CURRENTLY_IN_STAGE_2_N.format({
                                        a: f(t, n[0]),
                                        b: f(t, n[1]),
                                        n: n.length - 2
                                    })
                                  : void 0)
                })
            }),
            (0, i.jsx)(l.Button, {
                disabled: !g,
                className: E.joinButton,
                color: g ? l.Button.Colors.GREEN : l.Button.Colors.PRIMARY,
                onClick: x,
                size: l.Button.Sizes.MEDIUM,
                children: g ? _.Z.Messages.STAGE_CHANNEL_JOIN : _.Z.Messages.CHANNEL_LOCKED_SHORT
            })
        ]
    });
};
