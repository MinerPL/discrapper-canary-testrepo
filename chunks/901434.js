var i = n(735250), a = n(470079), l = n(442837), s = n(481060), r = n(287734), o = n(358221), c = n(305325), u = n(281956), d = n(27457), h = n(823379), p = n(5192), m = n(501655), _ = n(689938), f = n(679386);
let E = (e, t) => p.ZP.getName(e.getGuildId(), e.id, t.user);
t.Z = function (e) {
    var t, n;
    let {
            participants: p,
            channel: C,
            hasConnectPermission: g
        } = e, I = (0, u.J)(C.guild_id), x = a.useCallback(() => {
            I ? (0, c.hk)(C.guild_id, () => r.default.selectVoiceChannel(C.id)) : r.default.selectVoiceChannel(C.id);
        }, [
            C.id,
            C.guild_id,
            I
        ]), T = p.filter(e => e.type === m.Ui.VOICE), N = 4 === T.length ? 2 : 3, v = (0, l.Wu)([o.Z], () => T.map(e => o.Z.getParticipant(C.id, e.id)).filter(h.lm), [
            C.id,
            T
        ]);
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)('div', {
                className: f.tiles,
                style: { maxWidth: 168 * N },
                children: v.slice(0, 5).map(e => (0, i.jsx)(d.ZP, {
                    participant: e,
                    channel: C,
                    className: f.tile,
                    paused: !0,
                    inCall: !0,
                    noVideoRender: !0,
                    inPopout: !1,
                    width: 48
                }, e.id))
            }),
            (0, i.jsx)(s.Heading, {
                className: f.channelName,
                variant: 'heading-xxl/semibold',
                children: C.name
            }),
            (0, i.jsx)('div', {
                className: f.participantsRow,
                children: (0, i.jsx)(s.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: (t = C, 0 === (n = T).length ? _.Z.Messages.CURRENTLY_IN_STAGE_EMPTY : 1 === n.length ? _.Z.Messages.CURRENTLY_IN_STAGE_1.format({ a: E(t, n[0]) }) : 2 === n.length ? _.Z.Messages.CURRENTLY_IN_STAGE_2.format({
                        a: E(t, n[0]),
                        b: E(t, n[1])
                    }) : n.length > 2 ? _.Z.Messages.CURRENTLY_IN_STAGE_2_N.format({
                        a: E(t, n[0]),
                        b: E(t, n[1]),
                        n: n.length - 2
                    }) : void 0)
                })
            }),
            (0, i.jsx)(s.Button, {
                disabled: !g,
                className: f.joinButton,
                color: g ? s.Button.Colors.GREEN : s.Button.Colors.PRIMARY,
                onClick: x,
                size: s.Button.Sizes.MEDIUM,
                children: g ? _.Z.Messages.STAGE_CHANNEL_JOIN : _.Z.Messages.CHANNEL_LOCKED_SHORT
            })
        ]
    });
};
