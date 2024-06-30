n.d(t, {
    ZP: function () {
        return p;
    },
    Zm: function () {
        return f;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(442837), r = n(481060), l = n(852860), o = n(471445), c = n(45966), d = n(637853), u = n(999382), _ = n(889369), E = n(983135), I = n(570961), T = n(208665), m = n(974513), N = n(716130), S = n(981631), h = n(290511), g = n(689938), C = n(621524);
function x(e) {
    let {
            guildId: t,
            prompts: n
        } = e, l = (0, i.e7)([_.Z], () => _.Z.editedDefaultChannelIds), [c, u] = (0, d.dF)(t, n, [...l]), E = c.length, I = c.length + u.length, T = E / I * 100, m = Math.max(Math.ceil(85 * I / 100) - E, 0), [N, S] = a.useState(!1), h = N ? r.ChevronSmallDownIcon : r.ChevronSmallUpIcon;
    return (0, s.jsxs)('div', {
        className: C.channelCoverage,
        children: [
            (0, s.jsxs)(r.Clickable, {
                className: C.coverageHeader,
                onClick: () => S(!N),
                children: [
                    (0, s.jsxs)('div', {
                        className: C.warningTextContainer,
                        children: [
                            T <= 85 && (0, s.jsx)(r.CircleExclamationPointIcon, {
                                size: 'xs',
                                color: 'currentColor',
                                className: C.warning
                            }),
                            (0, s.jsx)(r.Text, {
                                className: C.coverageTitle,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: g.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_MISSING_CHANNELS.format({ numChannelsMissing: I - E })
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: C.progressContainer,
                        children: [
                            (0, s.jsx)(r.Progress, {
                                className: C.coverageProgress,
                                foregroundColor: T > 85 ? 'var(--status-positive)' : 'var(--status-warning)',
                                percent: T
                            }),
                            (0, s.jsx)(h, {
                                size: 'md',
                                color: 'currentColor',
                                className: C.caret
                            })
                        ]
                    })
                ]
            }),
            N ? (0, s.jsxs)('div', {
                className: C.channelCoverageDetails,
                children: [
                    (0, s.jsx)(r.Text, {
                        variant: 'text-xs/semibold',
                        color: 'text-muted',
                        children: g.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_CHANNELS
                    }),
                    (0, s.jsx)('div', {
                        className: C.channels,
                        children: u.map(e => {
                            var t;
                            let n = null !== (t = (0, o.KS)(e)) && void 0 !== t ? t : r.TextIcon;
                            return (0, s.jsx)('div', {
                                className: C.channelPill,
                                children: (0, s.jsxs)(r.Text, {
                                    className: C.channel,
                                    variant: 'text-xs/normal',
                                    color: 'interactive-active',
                                    children: [
                                        (0, s.jsx)(n, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        e.name
                                    ]
                                })
                            }, e.id);
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: C.channelCoverageHint,
                        children: m > 0 ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(r.CircleExclamationPointIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                }),
                                (0, s.jsx)(r.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: g.Z.Messages.ONBOARDING_PROMPT_CHANNEL_COVERAGE_ADD_HELP.format({ numChannels: m })
                                })
                            ]
                        }) : (0, s.jsx)(r.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: g.Z.Messages.GUILD_NO_CHANNELS_HEADER
                        })
                    })
                ]
            }) : null
        ]
    });
}
function p(e) {
    let {saveOnClose: t} = e, n = (0, i.e7)([u.Z], () => u.Z.getGuild());
    return null == n ? null : (0, s.jsx)(R, {
        guild: n,
        saveOnClose: t
    });
}
function R(e) {
    let {
            guild: t,
            saveOnClose: n
        } = e, l = (0, i.e7)([c.Z], () => c.Z.isLoading()), o = (0, i.e7)([T.Z], () => T.Z.editedOnboardingPrompts), d = (0, i.e7)([T.Z], () => T.Z.advancedMode), u = a.useRef(!1);
    if (a.useEffect(() => {
            !l && !u.current && 0 === o.length && (u.current = !0, !d && (0, I.tS)(t, [(0, h.ae)()], !1));
        }), a.useEffect(() => {
            if (n)
                return () => {
                    (0, I.rS)(t, { ignoreDefaultPrompt: !0 }).catch(() => {
                    });
                };
        }, [n]), null == t)
        return null;
    let _ = async () => {
        try {
            await (0, I.rS)(t), await (0, E.di)(t.id);
        } catch {
        }
    };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.Heading, {
                className: C.header,
                variant: 'heading-lg/extrabold',
                children: d ? g.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER_ADVANCED : g.Z.Messages.ONBOARDING_PROMPT_SETTINGS_HEADER
            }),
            (0, s.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: g.Z.Messages.ONBOARDING_PROMPT_SETTINGS_SUBHEADER
            }),
            (0, s.jsxs)('div', {
                className: C.links,
                children: [
                    (0, s.jsx)(r.Anchor, {
                        target: '_blank',
                        href: S.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, s.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: g.Z.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
                        })
                    }),
                    (0, s.jsx)('div', { className: C.dot }),
                    (0, s.jsx)(r.Anchor, {
                        onClick: _,
                        children: (0, s.jsx)(r.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: g.Z.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
                        })
                    }),
                    (0, s.jsx)('div', { className: C.dot }),
                    (0, s.jsx)(m.Wu, { guildId: t.id })
                ]
            }),
            (0, s.jsx)(x, {
                guildId: t.id,
                prompts: o
            }),
            (0, s.jsx)('div', {
                className: C.prompts,
                children: l ? (0, s.jsx)(r.Spinner, {}) : (0, s.jsx)(N.Z, {
                    postjoinOnly: d,
                    guildId: t.id
                })
            })
        ]
    });
}
function f() {
    let e = (0, i.e7)([u.Z], () => u.Z.getGuild()), t = (0, i.e7)([T.Z], () => T.Z.submitting);
    return null == e ? null : (0, s.jsx)(l.Z, {
        onSave: () => {
            try {
                (0, I.rS)(e);
            } catch {
            }
        },
        onReset: I.NB,
        submitting: t,
        onSaveText: g.Z.Messages.SAVE
    });
}
