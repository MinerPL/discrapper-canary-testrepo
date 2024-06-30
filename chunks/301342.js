n.d(t, {
    P: function () {
        return T;
    },
    Qo: function () {
        return L;
    },
    kw: function () {
        return b;
    },
    rj: function () {
        return A;
    }
});
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(91192), o = n(442837), c = n(481060), u = n(211739), d = n(239091), h = n(146773), p = n(680089), _ = n(430824), f = n(496675), m = n(9156), g = n(514342), C = n(151827), I = n(203818), E = n(438144), N = n(981631), x = n(689938), S = n(949601);
function Z(e) {
    e.stopPropagation();
}
let v = l.memo(function (e) {
    let t, {
            channel: r,
            connectChannelDragSource: h,
            connectChannelDropTarget: I,
            disableManageChannels: E,
            position: v,
            sortingPosition: T,
            hideIcon: L,
            children: A
        } = e, b = (0, o.e7)([m.ZP], () => m.ZP.isChannelMuted(r.getGuildId(), r.id)), M = (0, o.e7)([p.Z], () => p.Z.isCollapsed(r.id)), R = (0, o.e7)([f.Z], () => f.Z.can(N.Plq.MANAGE_CHANNELS, r));
    t = null != T ? v > T ? S.containerDragAfter : S.containerDragBefore : S.containerDefault;
    let y = l.useCallback(() => {
            M ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
        }, [
            r.id,
            M
        ]), O = l.useCallback(e => {
            if ('null' !== r.id) {
                let t = _.Z.getGuild(r.getGuildId());
                null != t && (0, d.jW)(e, async () => {
                    let {default: e} = await n.e('8965').then(n.bind(n, 139035));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        channel: r,
                        guild: t
                    });
                });
            }
        }, [r]), P = l.useCallback(() => {
            let e = r.type === N.d4z.GUILD_CATEGORY ? null : r.type, t = r.getGuildId();
            null != t && (0, c.openModalLazy)(async () => {
                let {default: l} = await Promise.all([
                    n.e('45094'),
                    n.e('9458')
                ]).then(n.bind(n, 218613));
                return n => (0, i.jsx)(l, {
                    ...n,
                    channelType: e,
                    guildId: t,
                    categoryId: 'null' !== r.id ? r.id : null
                });
            });
        }, [r]), {
            role: j,
            tabIndex: D,
            ...U
        } = (0, s.JA)(r.id), G = l.useRef(null), w = l.useRef(null), k = (0, i.jsxs)('li', {
            className: t,
            'data-dnd-name': r.name,
            children: [
                (0, i.jsx)(c.FocusRing, {
                    focusTarget: G,
                    ringTarget: w,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, i.jsxs)('div', {
                        ref: w,
                        className: a()(S.iconVisibility, S.wrapper, {
                            [S.collapsed]: M,
                            [S.muted]: b,
                            [S.clickable]: !0
                        }),
                        onContextMenu: O,
                        children: [
                            (0, i.jsxs)(c.Clickable, {
                                innerRef: G,
                                className: S.mainContent,
                                tabIndex: D,
                                ...U,
                                onClick: y,
                                'aria-label': x.Z.Messages.CATEGORY_A11Y_LABEL.format({ categoryName: r.name }),
                                'aria-expanded': !M,
                                focusProps: { enabled: !1 },
                                children: [
                                    L ? null : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: S.icon
                                    }),
                                    (0, i.jsx)(C.Z, {
                                        className: S.name,
                                        children: (0, i.jsx)(g.Z, { children: r.name })
                                    })
                                ]
                            }),
                            (0, i.jsx)('div', {
                                onClick: Z,
                                className: S.children,
                                children: R && !E ? (0, i.jsx)(c.Tooltip, {
                                    text: x.Z.Messages.CREATE_CHANNEL,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: n
                                        } = e;
                                        return (0, i.jsx)(c.Button, {
                                            'aria-label': x.Z.Messages.CREATE_CHANNEL,
                                            look: c.Button.Looks.BLANK,
                                            size: c.Button.Sizes.NONE,
                                            className: a()(S.addButton, S.forceVisible),
                                            onClick: P,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            tabIndex: D,
                                            focusProps: {
                                                offset: {
                                                    top: -3,
                                                    right: -4,
                                                    bottom: -3,
                                                    left: -4
                                                }
                                            },
                                            children: (0, i.jsx)(c.PlusSmallIcon, {
                                                size: 'sm',
                                                color: 'currentColor',
                                                className: S.addButtonIcon
                                            })
                                        });
                                    }
                                }) : null
                            })
                        ]
                    })
                }),
                A
            ]
        });
    return null != I && null != h ? I(h(k)) : k;
});
t.ZP = (0, h.B)(v);
let T = l.memo(function (e) {
        let {
            name: t,
            onDismiss: n,
            className: l
        } = e;
        return (0, i.jsx)('li', {
            className: a()(l, S.containerDefault),
            children: (0, i.jsxs)('div', {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: [
                    (0, i.jsx)('div', {
                        className: S.mainContent,
                        children: (0, i.jsx)(C.Z, {
                            className: S.name,
                            children: (0, i.jsx)(g.Z, { children: t })
                        })
                    }),
                    null != n ? (0, i.jsx)(c.TooltipContainer, {
                        text: x.Z.Messages.CLEAR_RECENT_CHANNELS,
                        className: S.dismissWrapper,
                        children: (0, i.jsx)(c.Clickable, {
                            className: S.dismissButton,
                            onClick: n,
                            children: (0, i.jsx)(c.CircleXIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: S.dismiss
                            })
                        })
                    }) : null
                ]
            })
        });
    }), L = l.memo(function (e) {
        let {category: t} = e, n = (0, o.e7)([I.Z], () => I.Z.isVoiceCategoryCollapsed(t.guild.id)), r = l.useCallback(() => {
                n ? (0, E.s)(t.guild.id) : (0, E.M)(t.guild.id);
            }, [
                t.guild.id,
                n
            ]);
        return n ? (0, i.jsxs)(c.Clickable, {
            className: S.voiceChannelsButton,
            onClick: r,
            children: [
                (0, i.jsx)(c.VoiceNormalIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: S.voiceChannelsToggleIcon
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    children: x.Z.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_EXPAND
                })
            ]
        }) : (0, i.jsxs)(c.Clickable, {
            className: S.voiceChannelsButton,
            onClick: r,
            children: [
                (0, i.jsx)(c.VoiceNormalIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: S.voiceChannelsToggleIcon
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    children: x.Z.Messages.VOICE_CHANNELS_CATEGORY_BUTTON_COLLAPSE
                })
            ]
        });
    }), A = l.memo(function (e) {
        let {
                category: t,
                channel: n
            } = e, l = (0, o.e7)([I.Z], () => I.Z.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === N.d4z.GUILD_CATEGORY ? l ? (0, i.jsx)('li', {
            className: a()(S.containerDefault),
            children: (0, i.jsx)('div', {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: (0, i.jsx)(C.Z, {
                    className: S.name,
                    children: (0, i.jsx)(g.Z, { children: x.Z.Messages.VOICE_CHANNELS_CATEGORY_HEADER })
                })
            })
        }) : null : (0, i.jsx)('div', { style: { height: 16 } });
    }), b = l.memo(function (e) {
        let {channel: t} = e;
        return (0, i.jsx)('li', {
            className: a()(S.containerDefault),
            children: (0, i.jsx)('div', {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: (0, i.jsx)(C.Z, {
                    className: S.name,
                    children: (0, i.jsx)(g.Z, { children: t.name })
                })
            })
        });
    });
