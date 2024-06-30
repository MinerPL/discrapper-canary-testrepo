n.d(t, {
    Z: function () {
        return O;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(442837), r = n(692547), l = n(481060), o = n(287734), c = n(872810), d = n(367907), u = n(835473), _ = n(871118), E = n(543882), h = n(314897), I = n(944486), m = n(594174), p = n(366695), g = n(602623), T = n(51144), S = n(498058), C = n(158631), N = n(143614), f = n(981631), A = n(70722), Z = n(689938), L = n(938138);
function v(e) {
    let {users: t} = e;
    return (0, i.jsxs)('div', {
        className: L.viewers,
        children: [
            (0, i.jsx)(l.VoiceNormalIcon, {
                size: 'custom',
                width: 16,
                height: 16,
                color: r.Z.colors.HEADER_PRIMARY.css
            }),
            (0, i.jsx)(g.Z, {
                showUserPopout: !0,
                useFallbackUserForPopout: !0,
                users: t,
                max: 6,
                size: g.u.SIZE_24
            })
        ]
    });
}
function O(e) {
    var t;
    let {broadcast: n} = e, {
            userId: r,
            applicationId: g,
            channelId: O,
            streamKey: R
        } = n, [x, P] = s.useState(!1), b = (0, a.e7)([m.default], () => m.default.getUser(r)), [M] = (0, u.Z)([g]), D = null !== (t = T.ZP.getGlobalName(b)) && void 0 !== t ? t : T.ZP.getUserTag(b), y = (0, N.Z)(), j = (0, a.e7)([E.Z], () => E.Z.getPreviewURL(null, O, r)), U = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()), G = (0, C.ZP)(), w = (0, S.Z)(O);
    if (s.useEffect(() => {
            x && U === O && P(!1);
        }, [
            U,
            x,
            O
        ]), null == b || null == D)
        return null;
    let {
        buttonColor: k,
        buttonCTA: B,
        disabled: H
    } = function (e, t) {
        let n = h.default.getId(), i = t.some(e => e.id === n) || e === n, s = t.length >= f.keq;
        return {
            buttonColor: s ? l.ButtonColors.RED : l.ButtonColors.GREEN,
            buttonCTA: s ? Z.Z.Messages.BROADCAST_FULL : i ? Z.Z.Messages.VIEW_BROADCAST : Z.Z.Messages.JOIN_BROADCAST,
            disabled: s
        };
    }(r, w);
    return (0, i.jsxs)('div', {
        className: L.container,
        children: [
            (0, i.jsx)(l.Avatar, {
                size: l.AvatarSizes.SIZE_32,
                src: b.getAvatarURL(null, 32),
                'aria-label': D
            }),
            (0, i.jsxs)('div', {
                className: L.details,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        children: D
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: null != M ? Z.Z.Messages.STREAMING.format({ name: M.name }) : Z.Z.Messages.STREAMING_A_GAME
                    }),
                    (0, i.jsxs)('div', {
                        className: L.activity,
                        children: [
                            w.length > 0 && (0, i.jsx)(v, { users: w }),
                            (0, i.jsxs)(l.Button, {
                                onClick: () => {
                                    if (U === O) {
                                        o.default.selectPrivateChannel(O);
                                        return;
                                    }
                                    P(!0), (0, c.W1)(O, R), d.ZP.trackWithMetadata(f.rMx.BROADCAST_VIEWED, {
                                        num_active_broadcasts: y.length,
                                        broadcast_position: y.findIndex(e => e.userId === r) + 1,
                                        is_broadcasting: G,
                                        broadcast_channel_id: O
                                    });
                                },
                                color: k,
                                size: l.ButtonSizes.SMALL,
                                className: L.button,
                                disabled: H,
                                innerClassName: L.innerButton,
                                children: [
                                    (0, i.jsx)(l.MicrophoneArrowRightIcon, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 16,
                                        height: 16
                                    }),
                                    B
                                ]
                            })
                        ]
                    })
                ]
            }),
            null != j ? (0, i.jsx)(_.Z, {
                className: L.stream,
                stream: {
                    streamType: A.lo.CALL,
                    ownerId: r,
                    channelId: O
                }
            }) : (0, i.jsx)(p.Z, {
                game: M,
                size: p.Z.Sizes.LARGE,
                className: L.gameIcon
            })
        ]
    });
}
