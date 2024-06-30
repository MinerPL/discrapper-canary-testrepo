var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(399606), o = n(481060), c = n(287734), u = n(654904), d = n(314897), h = n(271383), p = n(496675), m = n(19780), _ = n(594174), f = n(626135), E = n(906605), C = n(574176), g = n(833858), I = n(866071), x = n(223135), T = n(625938), N = n(981631), v = n(689938), S = n(684501);
t.Z = e => {
    let {
            hangStatusActivity: t,
            userId: l,
            channel: Z,
            previewIsOpen: A
        } = e, {enableHangStatus: M} = C.n.useExperiment({
            guildId: Z.guild_id,
            location: 'HangStatusPopout'
        }), b = (0, r.e7)([d.default], () => d.default.getId()), R = (0, r.e7)([_.default], () => _.default.getUser(l)), j = (0, r.e7)([m.Z], () => m.Z.getChannelId() === Z.id), L = (0, r.e7)([p.Z], () => p.Z.can(N.Plq.CONNECT, Z)), P = (null == t ? void 0 : t.emoji) == null || (0, I.K)(t.emoji, Z), O = (0, r.e7)([h.ZP], () => null != Z.guild_id && null != R ? h.ZP.getMember(Z.guild_id, l) : null), y = a.useMemo(() => null != R ? (0, u.SG)(void 0, O, R, { size: 40 }) : void 0, [
            O,
            R
        ]);
    return (a.useEffect(() => {
        (0, E.UP)();
    }, []), a.useEffect(() => {
        M && null != t && A && null != R && b !== l && f.default.track(N.rMx.VIEW_HANG_STATUS, {
            source: 'HangStatusPopout',
            guild_id: Z.guild_id,
            channel_id: Z.id
        });
    }, [
        M,
        t,
        A,
        R,
        b,
        l,
        Z
    ]), M && null != R) ? b === l ? (0, i.jsx)('div', {
        className: s()(S.popoutWrapper, { [S.mounted]: A }),
        children: (0, i.jsx)(T.y, {
            currentStatus: t,
            channel: Z
        })
    }) : null == t ? null : (0, i.jsx)('div', {
        className: s()(S.popoutWrapper, { [S.mounted]: A }),
        children: (0, i.jsxs)('div', {
            className: S.popout,
            children: [
                (0, i.jsxs)('div', {
                    className: S.contentContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.statusGroup,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-muted',
                                    children: v.Z.Messages.STATUS_LEAD_IN_JUST
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'text-normal',
                                    className: S.statusText,
                                    children: (0, g.O8)(t)
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: S.iconGroup,
                            children: [
                                (0, i.jsx)(x.Z, {
                                    className: S.statusIcon,
                                    hangStatusActivity: t
                                }),
                                (0, i.jsxs)('div', {
                                    className: S.avatarWrapper,
                                    children: [
                                        (0, i.jsx)(o.Avatar, {
                                            className: S.avatar,
                                            size: o.AvatarSizes.SIZE_40,
                                            src: y,
                                            'aria-hidden': !0
                                        }),
                                        (0, i.jsx)('div', { className: S.outline })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                !j && L ? (0, i.jsx)(o.Button, {
                    className: S.cta,
                    size: o.Button.Sizes.SMALL,
                    onClick: () => {
                        !j && L && (c.default.selectVoiceChannel(Z.id), f.default.track(N.rMx.HANG_STATUS_CTA_CLICKED, {
                            source: 'HangStatusPopout',
                            guild_id: Z.guild_id,
                            channel_id: Z.id
                        }));
                    },
                    children: v.Z.Messages.CUSTOM_HANG_STATUS_CTA
                }) : null,
                j && P ? (0, i.jsx)(o.Button, {
                    className: S.cta,
                    size: o.Button.Sizes.SMALL,
                    onClick: () => {
                        let e = t.state;
                        e === N.tNA.CUSTOM ? (0, o.openModalLazy)(async () => {
                            let {default: e} = await n.e('1631').then(n.bind(n, 333541));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                startingText: t.details,
                                startingEmoji: t.emoji
                            });
                        }) : (0, E.Zx)(e, !0), f.default.track(N.rMx.SWIPE_HANG_STATUS, {
                            guild_id: Z.guild_id,
                            channel_id: Z.id,
                            media_session_id: m.Z.getMediaSessionId()
                        });
                    },
                    children: v.Z.Messages.CUSTOM_HANGS_STATUS_COPY_CTA
                }) : null
            ]
        })
    }) : null;
};
