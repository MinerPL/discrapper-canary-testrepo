n.d(t, {
    W: function () {
        return h;
    },
    Z: function () {
        return p;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(111028),
    l = n(318374),
    u = n(565138),
    c = n(769654),
    d = n(938475),
    _ = n(652853),
    E = n(228168),
    f = n(676411);
let h = 3;
function p(e) {
    let { user: t, guild: n, channel: p, onAction: I, onClose: m } = e,
        { profileType: T } = (0, _.z)(),
        S = (0, i.Wu)([d.ZP], () =>
            d.ZP.getVoiceStatesForChannel(p).map((e) => {
                let { user: t } = e;
                return t;
            })
        ),
        g = p.isGuildStageVoice() ? a.StageIcon : a.VoiceNormalIcon;
    return (0, r.jsxs)('div', {
        className: f.voiceChannel,
        children: [
            (0, r.jsx)(u.Z, {
                showTooltip: !0,
                guild: n,
                size: u.Z.Sizes.SMOL,
                className: f.guildIcon
            }),
            (0, r.jsx)(a.ChevronSmallRightIcon, {
                size: 'xxs',
                color: a.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, r.jsxs)('div', {
                className: f.voiceChannelText,
                children: [
                    (0, r.jsx)(g, {
                        size: 'xxs',
                        color: a.tokens.colors.INTERACTIVE_NORMAL,
                        className: f.voiceIcon
                    }),
                    (0, r.jsx)(a.Clickable, {
                        onClick: () => {
                            s.default.selectVoiceChannel(p.id), (0, c.X)(n.id), null == I || I({ action: 'OPEN_VOICE_CHANNEL' }), null == m || m();
                        },
                        className: f.clickable,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'interactive-normal',
                            lineClamp: 1,
                            children: (0, r.jsx)(o.Z, { children: p.name })
                        })
                    })
                ]
            }),
            (0, r.jsx)(l.Z, {
                users: S,
                guildId: n.id,
                channelId: p.id,
                maxUsers: h,
                size: a.AvatarSizes.SIZE_16,
                onClick: () => (null == I ? void 0 : I({ action: 'PRESS_VOICE_CHANNEL_AVATARS' })),
                disableUserPopout: T !== E.y0.FULL_SIZE || ((e) => e === t.id),
                overflowCountVariant: 'text-xs/normal'
            })
        ]
    });
}
