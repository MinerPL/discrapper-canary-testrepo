n.d(t, {
    Z: function () {
        return f;
    }
}), n(653041), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(442837), o = n(481060), c = n(239091), d = n(586902), u = n(512384), _ = n(484459), E = n(103575), h = n(314897), I = n(131951), m = n(51144), p = n(524484), g = n(689938), T = n(258720);
let S = { offset: 2 }, C = {
        serverDeaf: {
            icon: o.HeadphonesDenyIcon,
            colorize: !0,
            getStatus: () => g.Z.Messages.SERVER_DEAFENED
        },
        serverMute: {
            icon: o.MicrophoneDenyIcon,
            colorize: !0,
            getStatus: () => g.Z.Messages.SERVER_MUTED
        },
        deaf: {
            icon: o.HeadphonesSlashIcon,
            colorize: !1,
            getStatus: () => g.Z.Messages.VOICE_CHANNEL_DEAFENED
        },
        mute: {
            icon: o.MicrophoneSlashIcon,
            colorize: !1,
            getStatus: () => g.Z.Messages.VOICE_CHANNEL_MUTED
        },
        localMute: {
            icon: o.MicrophoneDenyIcon,
            colorize: !1,
            getStatus: () => g.Z.Messages.VOICE_CHANNEL_LOCAL_MUTED
        }
    };
function N(e) {
    var t, s;
    let {
            channel: a,
            user: h,
            nick: N,
            mute: f,
            deaf: A,
            serverMute: Z,
            serverDeaf: L
        } = e, v = (0, l.e7)([I.Z], () => I.Z.isLocalMute(h.id)), O = (0, d.Z)({
            userId: h.id,
            checkSoundSharing: !0
        }), R = null !== (t = a.getGuildId()) && void 0 !== t ? t : void 0, x = h.getAvatarURL(a.guild_id, 24), P = null != N ? N : m.ZP.getName(h), {
            icon: b,
            colorize: M,
            getStatus: D
        } = null !== (s = function (e) {
            let {
                serverDeaf: t,
                deaf: n,
                serverMute: i,
                mute: s,
                localMute: a
            } = e;
            if (t)
                return C.serverDeaf;
            if (n)
                return C.deaf;
            if (i)
                return C.serverMute;
            else if (a)
                return C.localMute;
            else if (s)
                return C.mute;
        }({
            serverDeaf: L,
            deaf: A,
            serverMute: Z,
            mute: f,
            localMute: v
        })) && void 0 !== s ? s : {}, y = null != D ? g.Z.Messages.VOICE_PANEL_USER_TOOLTIP.format({
            userName: P,
            status: D()
        }) : P;
    function j(e) {
        null != R ? (0, c.jW)(e, async () => {
            let {default: e} = await Promise.all([
                n.e('79695'),
                n.e('17400'),
                n.e('12435'),
                n.e('47195')
            ]).then(n.bind(n, 757387));
            return t => (0, i.jsx)(e, {
                ...t,
                user: h,
                guildId: R,
                channel: a,
                showMediaItems: !0
            });
        }) : (0, c.jW)(e, async () => {
            let {default: e} = await Promise.all([
                n.e('79695'),
                n.e('17400'),
                n.e('61035')
            ]).then(n.bind(n, 881351));
            return t => (0, i.jsx)(e, {
                ...t,
                user: h,
                showMediaItems: !0
            });
        });
    }
    return (0, i.jsx)(o.Popout, {
        preload: () => (0, _.W)(h.id, h.getAvatarURL(R, 80), {
            guildId: R,
            channelId: a.id
        }),
        position: 'top',
        renderPopout: e => (0, i.jsx)(E.Z, {
            location: 'RTCConnectionVoiceUsers',
            userId: h.id,
            guildId: R,
            channelId: a.id,
            ...e
        }),
        children: e => (0, i.jsx)(o.Tooltip, {
            text: y,
            children: t => (0, i.jsx)(o.Clickable, {
                ...t,
                ...e,
                className: T.avatarContainer,
                onContextMenu: j,
                focusProps: S,
                children: (0, i.jsx)(u.Z, {
                    shakeLocation: p.oZ.VOICE_USER,
                    isShaking: O,
                    children: (0, i.jsx)('div', {
                        className: r()(T.avatar, { [T.speaking]: O }),
                        style: { backgroundImage: 'url('.concat(x, ')') },
                        children: null != b ? (0, i.jsx)(b, {
                            className: r()(T.avatarIconOverlay, { [T.avatarIconRed]: M }),
                            color: 'currentColor',
                            size: 'xs'
                        }) : null
                    })
                })
            })
        })
    });
}
function f(e) {
    let {
            voiceStates: t,
            channel: n,
            className: a
        } = e, [c, d] = s.useState(!1), u = c ? o.MinusIcon : o.PlusSmallIcon, _ = (0, i.jsx)(o.CircleIconButton, {
            className: T.expandButton,
            onClick: () => d(!c),
            color: o.CircleIconButtonColors.PRIMARY,
            size: o.CircleIconButtonSizes.SIZE_24,
            tooltip: c ? g.Z.Messages.VOICE_PANEL_HIDE_EXTRAS : g.Z.Messages.VOICE_PANEL_SHOW_EXTRAS,
            icon: (0, i.jsx)(u, {
                size: 'xs',
                color: 'currentColor'
            }),
            focusProps: S
        }), E = (0, l.e7)([h.default], () => h.default.getId(), []), [I, m] = function (e, t) {
            let n = [];
            for (let i of e) {
                if (!(i.user.id === t || n.some(e => e.user.id === i.user.id))) {
                    if (n.length >= 7)
                        return [
                            n,
                            !0
                        ];
                    n.push(i);
                }
            }
            return [
                n,
                !1
            ];
        }(t, E), p = m && c ? t : I;
    return p.length <= 0 ? null : (0, i.jsx)(o.ScrollerThin, {
        className: r()(T.scroller, a),
        fade: !0,
        children: (0, i.jsxs)('div', {
            className: T.voiceUsers,
            role: 'group',
            'aria-label': g.Z.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
            children: [
                p.map(e => {
                    let {
                        user: t,
                        nick: s,
                        voiceState: a
                    } = e;
                    return t.id !== E ? (0, i.jsx)(N, {
                        channel: n,
                        user: t,
                        nick: s,
                        mute: a.isVoiceMuted(),
                        deaf: a.isVoiceDeafened(),
                        video: a.selfVideo,
                        serverMute: a.mute,
                        serverDeaf: a.deaf
                    }, t.id) : null;
                }),
                m ? _ : null
            ]
        })
    });
}
