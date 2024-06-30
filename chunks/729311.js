n.d(t, {
    Z: function () {
        return Z;
    },
    j: function () {
        return b;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(442837), o = n(481060), c = n(852860), d = n(977258), u = n(45966), _ = n(473403), E = n(454585), I = n(323502), T = n(958832), m = n(324067), N = n(984933), S = n(514342), h = n(259580), g = n(999382), C = n(743475), x = n(889369), p = n(570961), R = n(208665), f = n(868814), L = n(974513), O = n(2348), A = n(353890), M = n(716130), v = n(689938), D = n(924337);
function j(e) {
    let {guild: t} = e, i = (0, l.e7)([u.Z], () => u.Z.getEnabled(t.id)), r = (0, l.e7)([T.Z], () => T.Z.hasFetched(t.id)), c = (0, f.Z)(t), m = (0, l.e7)([x.Z], () => x.Z.editedDefaultChannelIds), N = c.filter(e => !m.has(e.id)), [h, g] = a.useState(!1);
    a.useEffect(() => {
        !r && !i && (0, I.S)(t.id);
    }, [
        t.id,
        r,
        i
    ]);
    let p = e => {
        (0, o.openModalLazy)(async () => {
            let {default: a} = await n.e('35641').then(n.bind(n, 89216));
            return n => (0, s.jsx)(a, {
                ...n,
                guildId: t.id,
                startingChannelId: e
            });
        });
    };
    return h || 0 === N.length ? null : (0, s.jsxs)('div', {
        className: D.recommendations,
        children: [
            (0, s.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: v.Z.Messages.CHANNEL_RECOMMENDED
            }),
            (0, s.jsxs)('div', {
                className: D.recsSubheader,
                children: [
                    (0, s.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: v.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DESCRIPTION
                    }),
                    (0, s.jsxs)(o.Clickable, {
                        className: D.dismissAll,
                        onClick: () => g(!0),
                        children: [
                            (0, s.jsx)(o.CheckmarkLargeIcon, {
                                size: 'xxs',
                                color: 'currentColor',
                                className: D.checkmark
                            }),
                            (0, s.jsx)(o.Text, {
                                className: D.dismissAllText,
                                variant: 'text-xs/medium',
                                color: 'text-brand',
                                children: v.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DISMISS_ALL
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: D.recommendedChannels,
                children: N.map((e, n) => (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)('div', {
                            className: D.channelRow,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: D.channelInfo,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: D.channelName,
                                            children: [
                                                (0, s.jsx)(_._, {
                                                    channel: e,
                                                    guild: t
                                                }),
                                                (0, s.jsx)(S.Z, {
                                                    className: D.__invalid_name,
                                                    children: (0, s.jsx)(o.Text, {
                                                        className: D.__invalid_channelText,
                                                        variant: 'text-md/medium',
                                                        lineClamp: 1,
                                                        color: 'text-normal',
                                                        children: e.name
                                                    })
                                                })
                                            ]
                                        }),
                                        null != e.topic && e.topic.length > 0 ? (0, s.jsx)(S.Z, {
                                            children: (0, s.jsx)(o.Text, {
                                                className: D.topic,
                                                variant: 'text-xs/normal',
                                                children: E.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                            })
                                        }, 'topic') : null
                                    ]
                                }),
                                (0, d.s)(t.id, e.id) ? (0, s.jsx)(o.Button, {
                                    color: o.Button.Colors.BRAND,
                                    size: o.Button.Sizes.SMALL,
                                    className: D.addChannelCTA,
                                    onClick: () => (0, C.pt)(e.id),
                                    children: v.Z.Messages.ADD
                                }) : (0, s.jsxs)(o.Button, {
                                    look: o.Button.Looks.OUTLINED,
                                    color: o.Button.Colors.PRIMARY,
                                    className: D.lockedPill,
                                    innerClassName: D.lockedPillInner,
                                    onClick: () => p(e.id),
                                    children: [
                                        (0, s.jsx)(o.LockIcon, {
                                            size: 'xs',
                                            color: 'currentColor'
                                        }),
                                        (0, s.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            children: v.Z.Messages.UNLOCK
                                        })
                                    ]
                                })
                            ]
                        }),
                        n < N.length - 1 ? (0, s.jsx)('div', { className: D.separator }) : null
                    ]
                }))
            }),
            (0, s.jsx)('div', { className: D.largeSeparator })
        ]
    });
}
function Z(e) {
    let {
            saveOnClose: t = !1
        } = e, n = (0, l.e7)([g.Z], () => g.Z.getGuild()), i = (0, l.e7)([u.Z], () => u.Z.isLoading()), c = (0, l.e7)([N.ZP], () => N.ZP.getChannels(null == n ? void 0 : n.id)), d = (0, l.e7)([m.Z], () => m.Z.getCategories(null == n ? void 0 : n.id)), _ = (0, l.e7)([R.Z], () => R.Z.advancedMode), E = a.useRef(null), [I, T] = a.useState(!1);
    return (a.useEffect(() => {
        if (t)
            return () => {
                null != n && (0, C.DO)(n).then(() => {
                    _ && (0, p.rS)(n, { ignoreDefaultPrompt: !0 }).catch(() => {
                    });
                }).catch(() => {
                });
            };
    }, [
        t,
        _
    ]), null == n) ? null : i ? (0, s.jsx)(o.Spinner, {}) : (0, s.jsxs)('div', {
        className: D.columns,
        children: [
            (0, s.jsxs)('div', {
                className: D.channelBrowser,
                children: [
                    (0, s.jsx)(o.Clickable, {
                        className: D.collapseButton,
                        onClick: () => T(e => !e),
                        children: (0, s.jsx)(h.Z, {
                            direction: I ? h.Z.Directions.DOWN : h.Z.Directions.UP,
                            height: 16,
                            width: 16
                        })
                    }),
                    (0, s.jsx)(o.Heading, {
                        className: D.header,
                        variant: 'heading-lg/extrabold',
                        children: v.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: v.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_SUBHEADER
                    }),
                    (0, s.jsx)(L.Wu, {
                        className: D.advancedModeToggle,
                        guildId: n.id
                    }),
                    I ? null : (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(j, { guild: n }),
                            (0, s.jsx)(O.Z, {
                                className: r()(D.channelBrowserOuter),
                                guild: n,
                                categories: d,
                                channels: c,
                                hasSidebar: !1
                            })
                        ]
                    }),
                    _ && (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)('div', { className: D.largeSeparator }),
                            (0, s.jsx)(o.Heading, {
                                className: D.prejoinHeader,
                                variant: 'heading-lg/extrabold',
                                children: v.Z.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_HEADER
                            }),
                            (0, s.jsx)(o.Text, {
                                className: D.prejoinSubHeader,
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: v.Z.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_SUBHEADER
                            }),
                            (0, s.jsx)('div', {
                                ref: E,
                                className: D.advancedModeQuestions,
                                children: (0, s.jsx)(M.Z, {
                                    guildId: n.id,
                                    prejoinOnly: !0,
                                    includeCount: !0,
                                    singleColumn: !0
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)(A.Z, {
                guild: n,
                scrollToQuestions: () => {
                    null != E.current && E.current.scrollIntoView({ behavior: 'smooth' });
                }
            })
        ]
    });
}
function b() {
    let e = (0, l.e7)([g.Z], () => g.Z.getProps().guild), t = (0, l.e7)([x.Z], () => x.Z.submitting), n = (0, l.e7)([R.Z], () => R.Z.advancedMode);
    return null == e ? null : (0, s.jsx)(c.Z, {
        onSave: () => {
            (0, C.DO)(e).then(() => {
                n && (0, p.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {
                });
            }).catch(() => {
            });
        },
        onReset: C.BG,
        submitting: t,
        onSaveText: v.Z.Messages.SAVE
    });
}
