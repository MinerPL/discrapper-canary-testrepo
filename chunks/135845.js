n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(512722), s = n.n(a), l = n(442837), r = n(131704), o = n(601964), c = n(199902), d = n(914010), u = n(197409), _ = n(358595), E = n(981631), m = n(245335), I = n(689938), T = n(637091);
function h(e) {
    let t, n, a, {
            invite: h,
            currentUserId: N,
            guild: f,
            onTransitionToInviteChannel: p,
            onAcceptInstantInvite: C
        } = e, g = null == f ? void 0 : f.id, S = (0, l.e7)([d.Z], () => d.Z.getGuildId()), A = (0, l.e7)([c.Z], () => null != h && null != h.target_user ? c.Z.getActiveStreamForUser(h.target_user.id, g) : null, [
            h,
            g
        ]), x = (0, l.e7)([c.Z], () => null != h && null != h.target_user ? c.Z.getStreamForUser(h.target_user.id, g) : null, [
            h,
            g
        ]), O = null != h && h.target_type === m.Iq.STREAM && null != h.target_user && null != A, R = null != h && null != x && null != h.channel && null != h.guild && x.channelId === h.channel.id && x.guildId === h.guild.id;
    s()(null != h, 'Invite cannot be null');
    let {
        target_type: M,
        target_user: v
    } = h;
    s()(M === m.Iq.STREAM && null != v, 'invalid streaming invite');
    let L = N === v.id, Z = h.state === E.r2o.ACCEPTING, P = null != f;
    if (null == f) {
        if (null == h.guild)
            return (0, i.jsx)(_.Z, {});
        f = new o.ZP(h.guild);
    }
    let b = null != h.channel ? (0, r.jD)(h.channel) : null, D = O ? p : C;
    P && !R ? a = L ? I.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : I.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({ name: v.username }) : (t = I.Z.Messages.WATCH, n = u.Z.Button.Colors.GREEN, O && (t = I.Z.Messages.INVITE_BUTTON_STREAM_WATCHING, n = u.Z.Button.Colors.PRIMARY), a = L ? I.Z.Messages.INVITE_BUTTON_STREAMER : I.Z.Messages.INVITE_BUTTON_STREAMING.format({ name: v.username }));
    let j = S === f.id && null != b ? (0, i.jsx)(u.Z.Channel, { channel: b }) : I.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: f.name });
    return (0, i.jsxs)(u.Z, {
        children: [
            (0, i.jsx)(u.Z.Header, { text: I.Z.Messages.INVITE_BUTTON_TITLE_STREAMING }),
            (0, i.jsxs)(u.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: T.headerLine,
                        children: [
                            (0, i.jsx)(u.Z.Icon, {
                                guild: f,
                                onClick: P && R ? D : void 0
                            }),
                            (0, i.jsx)(u.Z.Info, {
                                title: a,
                                onClick: P && R ? D : void 0,
                                children: j
                            })
                        ]
                    }),
                    R ? (0, i.jsx)(u.Z.Button, {
                        disabled: P && !R,
                        onClick: D,
                        submitting: Z,
                        isDisabled: O && R,
                        color: n,
                        children: t
                    }) : null
                ]
            })
        ]
    });
}
