n.d(t, {
    y: function () {
        return S;
    }
});
var i = n(735250), s = n(470079), r = n(120356), l = n.n(r), o = n(481060), a = n(601964), u = n(598077), d = n(346656), c = n(727218), _ = n(154921), E = n(806519), p = n(689938), h = n(709101);
let f = e => {
        var t;
        let {
                speaker: n,
                guildId: s,
                isEmbed: r
            } = e, l = new u.Z(n.user);
        return (0, i.jsxs)('div', {
            className: h.speaker,
            children: [
                (0, i.jsx)(o.Avatar, {
                    src: l.getAvatarURL(s, r ? 16 : 24),
                    size: r ? o.AvatarSizes.SIZE_16 : o.AvatarSizes.SIZE_24,
                    'aria-label': ''.concat(n.nick, '-avatar'),
                    className: r ? null : h.avatar
                }),
                (0, i.jsx)(_.Z, {
                    size: r ? _.Z.Sizes.SIZE_12 : _.Z.Sizes.SIZE_14,
                    color: _.Z.Colors.HEADER_SECONDARY,
                    className: h.username,
                    children: null !== (t = n.nick) && void 0 !== t ? t : l.username
                })
            ]
        });
    }, S = e => {
        let {
            guild: t,
            onlineCount: n
        } = e;
        if (null == t)
            return null;
        let s = new a.ZP(t), {
                name: r,
                description: l
            } = s;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(c.Z, {
                    muted: !0,
                    uppercase: !0,
                    className: h.alignStart,
                    children: p.Z.Messages.STAGE_INVITE_GUILD_HEADER
                }),
                (0, i.jsxs)('div', {
                    className: h.guild,
                    children: [
                        (0, i.jsx)(E.ZP, {
                            mask: E.ZP.Masks.SQUIRCLE,
                            width: 40,
                            height: 40,
                            children: (0, i.jsx)(d.Z, {
                                guild: s,
                                size: d.Z.Sizes.MEDIUM,
                                active: !0
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: h.guildInfo,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-sm/semibold',
                                    children: r
                                }),
                                (0, i.jsxs)('div', {
                                    className: h.speaker,
                                    children: [
                                        (0, i.jsx)('div', { className: h.dot }),
                                        null != n && n > 0 ? (0, i.jsx)(o.Text, {
                                            variant: 'text-sm/normal',
                                            children: p.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: n })
                                        }) : null
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                null != l && '' !== l && (0, i.jsx)(o.Text, {
                    color: 'header-secondary',
                    className: h.alignStart,
                    variant: 'text-sm/normal',
                    children: l
                })
            ]
        });
    };
t.Z = e => {
    var t;
    let {
            stageInstance: n,
            guild: r,
            isCard: u = !1,
            isEmbed: S = !1,
            onClick: m
        } = e, I = s.useMemo(() => null == r ? null : r instanceof a.ZP ? r : new a.ZP(r), [r]);
    if (null == n || null == I)
        return null;
    let {
            topic: g,
            speaker_count: A,
            participant_count: C
        } = n, v = null !== (t = n.members) && void 0 !== t ? t : [], R = S ? v.slice(0, 3) : v, O = A - R.length;
    return S && (O += v.length - R.length), (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: h.flex,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.flex,
                        children: [
                            (0, i.jsx)(o.StageIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 24,
                                width: 24,
                                className: h.live
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: 'eyebrow',
                                className: l()(h.__invalid_label, h.live),
                                children: p.Z.Messages.STAGE_CHANNEL_LIVE_NOW
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: h.background,
                        children: [
                            (0, i.jsx)(o.HeadphonesIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 16,
                                width: 16,
                                className: h.listeners
                            }),
                            (0, i.jsx)(o.Heading, {
                                className: l()(h.__invalid_label, h.listeners),
                                variant: 'heading-sm/semibold',
                                children: C
                            })
                        ]
                    })
                ]
            }),
            S && (0, i.jsxs)('div', {
                className: l()(h.guild, { [h.embed]: S }),
                children: [
                    (0, i.jsx)(E.ZP, {
                        mask: E.ZP.Masks.SQUIRCLE,
                        width: 20,
                        height: 20,
                        children: (0, i.jsx)(d.Z, {
                            guild: I,
                            size: d.Z.Sizes.MINI,
                            active: !0
                        })
                    }),
                    (0, i.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: h.__invalid_label,
                        variant: 'text-sm/normal',
                        children: I.name
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                size: u || S ? c.Z.Sizes.SIZE_16 : c.Z.Sizes.SIZE_20,
                className: l()(h.header, { [h.embed]: S }),
                children: g
            }),
            (0, i.jsxs)('div', {
                className: l()(h.members, { [h.embed]: S }),
                children: [
                    R.length > 0 && (0, i.jsxs)('div', {
                        className: h.speakers,
                        children: [
                            R.map(e => (0, i.jsx)(f, {
                                speaker: e,
                                guildId: I.id,
                                isEmbed: S
                            }, e.user.id)),
                            O > 0 ? (0, i.jsxs)('div', {
                                className: h.speaker,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: l()(h.icon, { [h.embed]: S }),
                                        children: (0, i.jsx)(o.MicrophoneIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            height: S ? 12 : 14,
                                            className: h.listeners
                                        })
                                    }),
                                    (0, i.jsxs)(_.Z, {
                                        size: S ? _.Z.Sizes.SIZE_12 : _.Z.Sizes.SIZE_14,
                                        color: _.Z.Colors.HEADER_SECONDARY,
                                        children: [
                                            '+',
                                            p.Z.Messages.STAGE_INVITE_SPEAKER_COUNT.format({ count: O })
                                        ]
                                    })
                                ]
                            }) : null
                        ]
                    }),
                    S && (0, i.jsx)(o.Button, {
                        color: o.Button.Colors.GREEN,
                        onClick: m,
                        className: h.joinButton,
                        children: p.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON
                    })
                ]
            })
        ]
    });
};
