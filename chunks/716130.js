n.d(t, {
    Z: function () {
        return g;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i), l = n(399606), o = n(481060), c = n(668781), d = n(603211), u = n(710344), _ = n(430824), E = n(570961), I = n(208665), T = n(959508), m = n(290511), N = n(689938), S = n(621524);
function h(e) {
    let {
            guild: t,
            prejoinOnly: n,
            postjoinOnly: i
        } = e, c = (0, l.e7)([I.Z], () => I.Z.editedOnboardingPrompts), u = c.filter(e => e.inOnboarding), _ = u.length, {
            drag: T,
            drop: h,
            dragSourcePosition: g,
            setIsDraggable: C
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_CARD',
            index: _,
            optionId: 'separator',
            onDragStart: () => {
            },
            onDragComplete: () => {
            },
            onDragReset: () => {
            }
        }), x = a.useRef(null);
    return a.useEffect(() => {
        C(!1);
    }, [C]), a.useEffect(() => {
        T(h(x));
    }, [
        T,
        h,
        x
    ]), (0, s.jsxs)('div', {
        ref: x,
        className: r()(S.separatorSection, {
            [S.dropIndicatorBefore]: null != g && _ < g,
            [S.dropIndicatorAfter]: null != g && _ > g
        }),
        children: [
            !i && u.length < m.b3 ? (0, s.jsxs)(o.Clickable, {
                className: S.addPrompt,
                onClick: () => (0, E.tS)(t, [
                    ...c,
                    (0, m.yZ)(!0)
                ], !1),
                children: [
                    (0, s.jsx)(o.CirclePlusIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: S.plusIcon,
                        width: 20,
                        height: 20
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'text-brand',
                        children: N.Z.Messages.ONBOARDING_PROMPT_ADD_PROMPT
                    })
                ]
            }) : null,
            n ? null : (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)('div', { className: S.divider }),
                    (0, s.jsx)(o.Heading, {
                        variant: 'heading-md/bold',
                        children: N.Z.Messages.ONBOARDING_QUESTIONS_POST_JOIN_HEADER
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        className: S.subtitle,
                        children: N.Z.Messages.ONBOARDING_QUESTIONS_POST_JOIN_SUBHEADER
                    })
                ]
            })
        ]
    });
}
function g(e) {
    let {
            guildId: t,
            prejoinOnly: n,
            postjoinOnly: a,
            includeCount: i,
            singleColumn: r
        } = e, d = (0, l.e7)([_.Z], () => _.Z.getGuild(t)), g = (0, l.e7)([I.Z], () => I.Z.editedOnboardingPrompts), C = g.filter(e => e.inOnboarding), x = g.filter(e => !0 !== e.inOnboarding), p = [
            ...C.map(e => ({
                id: e.id,
                data: e
            })),
            {
                id: 'separator',
                data: (0, m.ae)()
            },
            ...x.map(e => ({
                id: e.id,
                data: e
            }))
        ], {
            handleDragStart: R,
            handleDragReset: f,
            handleDragComplete: L
        } = (0, u.Z)(p, e => {
            let t = e.findIndex(e => 'separator' === e.id), n = e.slice(0, t).map(e => ({
                    ...e.data,
                    inOnboarding: !0
                })), s = e.slice(t + 1).map(e => ({
                    ...e.data,
                    inOnboarding: !1,
                    required: !1
                }));
            if (n.length > m.b3) {
                c.Z.show({
                    title: N.Z.Messages.ONBOARDING_QUESTIONS_CANNOT_MOVE,
                    body: N.Z.Messages.ONBOARDING_QUESTIONS_SAVE_TOO_MANY_PROMPTS_IN_ONBOARDING.format({ numQuestions: m.b3 })
                });
                return;
            }
            (0, E.tS)(d, [
                ...n,
                ...s
            ]);
        });
    return null == d ? null : (0, s.jsxs)(s.Fragment, {
        children: [
            a ? null : (0, s.jsxs)(s.Fragment, {
                children: [
                    n ? null : (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(o.Heading, {
                                variant: 'heading-md/bold',
                                children: N.Z.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_HEADER
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                className: S.subtitle,
                                children: N.Z.Messages.ONBOARDING_QUESTIONS_PRE_JOIN_SUBHEADER
                            })
                        ]
                    }),
                    C.map((e, t) => (0, s.jsx)(T.Z, {
                        guild: d,
                        prompt: e,
                        disableAutofocus: n,
                        includeCount: i,
                        singleColumn: r,
                        promptIndex: t,
                        dragIndex: t,
                        onPromptDragStart: R,
                        onPromptDragReset: f,
                        onPromptDragComplete: L
                    }, e.id))
                ]
            }),
            (0, s.jsx)(h, {
                guild: d,
                prejoinOnly: n,
                postjoinOnly: a
            }),
            n ? null : (0, s.jsxs)(s.Fragment, {
                children: [
                    x.map((e, t) => (0, s.jsx)(T.Z, {
                        guild: d,
                        prompt: e,
                        promptIndex: t + C.length,
                        dragIndex: t + C.length + 1,
                        onPromptDragStart: R,
                        onPromptDragReset: f,
                        onPromptDragComplete: L
                    }, e.id)),
                    g.length < m.YW ? (0, s.jsxs)(o.Clickable, {
                        className: S.addPrompt,
                        onClick: () => (0, E.tS)(d, [
                            ...g,
                            (0, m.yZ)(!1)
                        ], !1),
                        children: [
                            (0, s.jsx)(o.CirclePlusIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                className: S.plusIcon,
                                width: 20,
                                height: 20
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'text-brand',
                                children: N.Z.Messages.ONBOARDING_PROMPT_ADD_PROMPT
                            })
                        ]
                    }) : null
                ]
            })
        ]
    });
}
