n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(481060),
    o = n(239091),
    c = n(586902),
    u = n(40851),
    d = n(184301),
    h = n(347475),
    m = n(237583),
    p = n(768581),
    _ = n(363422);
function f(e) {
    let { channel: t, speaker: a, className: m } = e,
        f = (0, u.bp)(),
        { reducedMotion: E } = s.useContext(r.AccessibilityPreferencesContext),
        g = (0, c.Z)({ userId: a.id }),
        C = null != a.member ? (0, p.CA)(a.member) : null,
        I = (e) => {
            (0, o.jW)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('90286'), n.e('12435'), n.e('46563')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: a.user,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: !0,
                            showChatItems: !1
                        });
                },
                { context: f }
            );
        };
    return (0, i.jsx)(r.Popout, {
        preload: () =>
            (0, d.Z)(a.user, {
                guildId: t.guild_id,
                channelId: t.id
            }),
        renderPopout: (e) =>
            (0, i.jsx)(h.Z, {
                ...e,
                guildId: t.guild_id,
                channelId: t.id,
                userId: a.id
            }),
        position: 'right',
        spacing: 8,
        children: (e) =>
            (0, i.jsx)(r.Tooltip, {
                text: a.userNick,
                position: 'bottom',
                children: (n) =>
                    (0, i.jsx)(r.Clickable, {
                        ...n,
                        ...e,
                        onClick: (t) => {
                            t.stopPropagation(), e.onClick(t);
                        },
                        onContextMenu: I,
                        children: (0, i.jsx)(r.Avatar, {
                            src: null != C ? C : a.user.getAvatarURL(t.guild_id, 24),
                            size: r.AvatarSizes.SIZE_24,
                            className: l()(_.avatar, m),
                            'aria-label': a.userNick,
                            isSpeaking: g && !E.enabled
                        })
                    })
            })
    });
}
function E(e) {
    let { speakers: t, channel: n } = e;
    return (0, i.jsx)(m.Z, {
        className: _.summary,
        guildId: n.guild_id,
        users: t,
        max: 10,
        renderUser: (e, t, s) =>
            (0, i.jsx)(
                f,
                {
                    channel: n,
                    speaker: e,
                    className: t
                },
                s
            ),
        renderMoreUsers: (e, t, n) =>
            (0, i.jsx)(
                'div',
                {
                    className: l()(_.speakers, t),
                    children: e
                },
                n
            )
    });
}
