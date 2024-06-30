n(47120), n(653041);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(348327), o = n.n(l), c = n(225857), d = n(290843), u = n(442837), _ = n(481060), E = n(239091), I = n(596454), T = n(607070), m = n(933557), N = n(471445), S = n(339085), h = n(621923), g = n(524329), C = n(575258), x = n(514698), p = n(592125), R = n(940627), f = n(346656), L = n(499150), O = n(4912), A = n(626135), M = n(700785), v = n(434404), D = n(92160), j = n(981631), Z = n(231338), b = n(689938), U = n(551550);
let G = 'WELCOME_CHANNEL', P = e => {
        var t;
        let i, {
                guildId: l,
                welcomeChannel: o,
                onEdit: T,
                onChannelReorder: g,
                isDropHovered: C,
                index: R
            } = e, [f, L] = a.useState(!1), A = a.useRef(null), v = (0, u.e7)([p.Z], () => p.Z.getChannel(o.channel_id)), D = (0, u.e7)([S.Z], () => null != o.emoji_id ? S.Z.getUsableCustomEmojiById(o.emoji_id) : null), P = null != v && M.Uu(j.Plq.VIEW_CHANNEL, v), B = null !== (t = (0, N.KS)(v)) && void 0 !== t ? t : _.TextIcon, y = (0, m.ZP)(v, !1), {homeSettingsEnabled: F} = (0, h.kZ)(l), [, k] = (0, c.c)({
                type: G,
                item: {
                    channel: o,
                    index: R
                },
                end: (e, t) => {
                    null != e && !t.didDrop() && g(e.channel, null, !0);
                }
            }), [, w] = (0, d.L)({
                accept: G,
                hover: e => {
                    g(e.channel, R, !1);
                },
                drop: e => {
                    g(e.channel, R, !0);
                }
            });
        return a.useLayoutEffect(() => (k(w(A)), () => {
            k(null), w(null);
        }), [
            k,
            w
        ]), i = P ? null != D || null != o.emoji_name ? (0, s.jsx)(I.Z, {
            emojiId: null == D ? void 0 : D.id,
            emojiName: null != D ? D.name : o.emoji_name,
            animated: !!(null == D ? void 0 : D.animated)
        }) : (0, s.jsx)(B, {
            size: 'md',
            color: 'currentColor',
            className: U.channelIcon
        }) : (0, s.jsx)(O.Z, {
            width: 24,
            height: 24,
            className: U.warningIcon
        }), (0, s.jsxs)('div', {
            className: r()(U.welcomeChannel, { [U.dragging]: C }),
            ref: A,
            'data-dnd-name': o.description,
            onContextMenu: e => {
                (0, E.jW)(e, async () => {
                    let {default: e} = await n.e('68535').then(n.bind(n, 602320));
                    return t => (0, s.jsx)(e, {
                        ...t,
                        guildId: l,
                        welcomeChannel: o,
                        onChannelReorder: g,
                        setShowConfirmModal: L,
                        onEdit: T,
                        index: R
                    });
                });
            },
            children: [
                i,
                (0, s.jsxs)('div', {
                    className: U.channelDescriptionWrapper,
                    children: [
                        (0, s.jsx)(_.Text, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: o.description
                        }),
                        (0, s.jsxs)(_.Text, {
                            className: P ? void 0 : U.channelWarning,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: [
                                (0, s.jsx)(B, {
                                    className: U.channelTitleIcon,
                                    size: 'xxs',
                                    color: 'currentColor'
                                }),
                                (0, s.jsx)('span', { children: P ? y : b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_INVALID_CHANNEL })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(_.Button, {
                    color: _.Button.Colors.PRIMARY,
                    size: _.Button.Sizes.SMALL,
                    disabled: F,
                    onClick: () => (0, _.openModalLazy)(async () => {
                        let {default: e} = await n.e('39143').then(n.bind(n, 737868));
                        return t => (0, s.jsx)(e, {
                            ...t,
                            welcomeChannel: o,
                            guildId: l,
                            onSave: T
                        });
                    }, { onCloseRequest: () => Z.Vq }),
                    children: b.Z.Messages.EDIT
                }),
                f && (0, s.jsx)(x.Z, {
                    onConfirm: () => T(),
                    onCancel: () => L(!1),
                    channelId: o.channel_id
                })
            ]
        });
    };
t.Z = e => {
    var t;
    let {
            guild: i,
            showCreateModal: r
        } = e, {
            welcomeSettings: l,
            originalWelcomeSettings: c
        } = (0, u.e7)([C.Z], () => C.Z.getSettingsProps()), d = (0, u.e7)([T.Z], () => T.Z.useReducedMotion), [E, I] = a.useState(null), [m, N] = a.useState(!1), [S, x] = a.useState(!1), {
            description: p,
            channels: M,
            enabled: G
        } = l, {homeSettingsEnabled: B} = (0, h.kZ)(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : j.lds), y = () => {
            if (null != i)
                p !== c.description && ((0, g.Es)(i.id, { description: null == p ? void 0 : p.trim() }), N(!0));
        }, F = e => {
            if (null != i)
                !o()(e, c.channels) && ((0, g.Es)(i.id, { channels: e }), N(!0));
        }, k = e => {
            if (null != i)
                e !== c.enabled && ((0, g.Es)(i.id, { enabled: e }), x(!d), N(!0));
        }, w = e => {
            if (null == e)
                return;
            let t = [
                ...null != M ? M : [],
                e
            ];
            (0, g.VP)({ channels: t }), F(t);
        }, H = e => t => {
            let n = [...null != M ? M : []];
            null == t ? n.splice(e, 1) : n[e] = t, (0, g.VP)({ channels: n }), F(n), 0 === n.length && G && ((0, g.VP)({ enabled: !1 }), k(!1));
        }, V = (e, t, n) => {
            if (null == M)
                return;
            let s = M.indexOf(e), a = [...M];
            null != t && t !== s && (a.splice(s, 1), a.splice(t, 0, e), (0, g.VP)({ channels: a })), n ? (F(a), I(null)) : I(t);
        }, Y = a.useRef(!1);
    a.useEffect(() => (null != i && r && (0, _.openModalLazy)(async () => {
        let {default: e} = await n.e('39143').then(n.bind(n, 737868));
        return t => (0, s.jsx)(e, {
            ...t,
            guildId: i.id,
            onSave: w
        });
    }, { onCloseRequest: () => Z.Vq }), () => {
        Y.current = !0;
    }), []), a.useEffect(() => () => {
        if (Y.current && m) {
            let e = [], t = [], n = !1;
            null == M || M.forEach(s => {
                e.push(s.description), t.push(s.channel_id), null != s.emoji_id && (n = !0);
            }), A.default.track(j.rMx.GUILD_WELCOME_SCREEN_SETTINGS_UPDATED, {
                guild_id: null == i ? void 0 : i.id,
                options: e,
                options_channel_ids: t,
                guild_description: p,
                has_custom_emojis: n,
                is_enabled: G
            });
        }
    }, [
        m,
        M,
        p,
        G,
        i,
        Y
    ]), a.useEffect(() => () => (0, g.sm)(), []);
    let W = a.useCallback(() => {
        null != i && v.Z.open(i.id, j.pNK.ONBOARDING);
    }, [i]);
    return null == i ? null : (0, s.jsxs)(_.FormSection, {
        title: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME,
        tag: _.FormTitleTags.H1,
        children: [
            B && (0, s.jsx)('div', {
                className: U.notice,
                children: (0, s.jsxs)(_.Text, {
                    variant: 'text-md/normal',
                    children: [
                        (0, s.jsx)(O.Z, { className: U.noticeIcon }),
                        b.Z.Messages.WELCOME_SCREEN_DEPRECATED.format({
                            onboardingLink: e => (0, s.jsx)(L.Z, {
                                onClick: W,
                                children: e
                            })
                        })
                    ]
                })
            }),
            (0, s.jsx)(_.Text, {
                className: U.__invalid_description,
                variant: 'text-sm/normal',
                children: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SETTINGS_TEXT
            }),
            (0, s.jsx)(D.Z, {
                enabled: G,
                onPreview: (null == M ? void 0 : M.length) === 0 ? void 0 : () => {
                    null != i && (0, _.openModalLazy)(async () => {
                        let {default: e} = await n.e('90542').then(n.bind(n, 184782));
                        return t => (0, s.jsx)(e, {
                            ...t,
                            guildId: i.id,
                            isPreview: !0
                        });
                    });
                },
                onToggle: G || (null == M ? void 0 : M.length) !== 0 ? () => {
                    k(!G);
                } : void 0,
                animateStatus: S,
                firstLine: G ? b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED : b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PROGRESS_WILL_SAVE,
                secondLine: G ? b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLED_SECOND_LINE : b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ENABLE_REMINDER
            }),
            (0, s.jsxs)('div', {
                className: U.previewContainer,
                children: [
                    (0, s.jsxs)('div', {
                        className: U.welcomeHeader,
                        children: [
                            (0, s.jsx)(f.Z, {
                                size: f.Z.Sizes.LARGER,
                                className: U.icon,
                                guild: i,
                                animate: !0,
                                tabIndex: -1
                            }),
                            (0, s.jsx)(_.Heading, {
                                className: U.welcomeTitle,
                                variant: 'heading-xl/semibold',
                                children: b.Z.Messages.WELCOME_SCREEN_TITLE.format({
                                    guildName: i.name,
                                    guildNameHook: (e, t) => (0, s.jsxs)('span', {
                                        children: [
                                            (0, s.jsx)(R.Z, {
                                                guild: i,
                                                className: U.headerGuildBadge,
                                                flowerStarClassName: U.flowerStar
                                            }),
                                            (0, s.jsx)('strong', { children: e })
                                        ]
                                    }, t)
                                })
                            }),
                            (0, s.jsx)('div', {
                                className: U.descriptionWrapper,
                                children: (0, s.jsx)(_.TextArea, {
                                    className: U.descriptionInput,
                                    placeholder: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_DESCRIPTION_PLACEHOLDER,
                                    onChange: e => {
                                        (0, g.VP)({ description: e });
                                    },
                                    onBlur: () => {
                                        y();
                                    },
                                    onKeyDown: e => {
                                        e.keyCode === j.yXg.ENTER && e.preventDefault();
                                    },
                                    value: p,
                                    maxLength: 140,
                                    disabled: B
                                })
                            })
                        ]
                    }),
                    (0, s.jsx)(_.FormDivider, { className: U.divider }),
                    (0, s.jsxs)('div', {
                        className: U.welcomeChannels,
                        children: [
                            (0, s.jsx)(_.FormTitle, { children: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_TITLE }),
                            (0, s.jsx)(_.Text, {
                                variant: 'text-sm/normal',
                                className: U.addChannelSubtext,
                                children: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_RECOMMENDED_CHANNELS_DESCRIPTION
                            }),
                            null == M ? void 0 : M.map((e, t) => (0, s.jsx)(P, {
                                guildId: i.id,
                                welcomeChannel: e,
                                onEdit: H(t),
                                onChannelReorder: V,
                                isDropHovered: t === E,
                                index: t
                            }, t)),
                            (null == M || M.length < 5) && (0, s.jsx)(_.Button, {
                                onClick: () => (0, _.openModalLazy)(async () => {
                                    let {default: e} = await n.e('39143').then(n.bind(n, 737868));
                                    return t => (0, s.jsx)(e, {
                                        ...t,
                                        guildId: i.id,
                                        onSave: w
                                    });
                                }, { onCloseRequest: () => Z.Vq }),
                                className: U.addChannelButton,
                                disabled: B,
                                color: _.Button.Colors.PRIMARY,
                                children: b.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ADD_RECOMMENDED_CHANNEL
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
