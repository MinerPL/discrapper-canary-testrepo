var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), i = n(442837), l = n(481060), c = n(607070), d = n(63063), u = n(617136), p = n(113434), x = n(497505), m = n(918701), g = n(566078), C = n(667105), f = n(585857), h = n(693900), _ = n(46140), E = n(981631), S = n(689938), T = n(517107);
function N(e) {
    let {
        children: t,
        isComplete: n,
        hasNextStep: o
    } = e;
    return (0, s.jsxs)('li', {
        className: a()(T.stepWrapper, { [T.stepWrapperComplete]: n }, { [T.stepWrapperWithNextStep]: o }),
        children: [
            (0, s.jsxs)('div', {
                className: T.stepIndicator,
                children: [
                    (0, s.jsx)('div', {
                        className: T.stepIconWrapper,
                        children: n && (0, s.jsx)(l.CheckmarkBoldIcon, {
                            className: T.stepIcon,
                            color: l.tokens.colors.WHITE
                        })
                    }),
                    o && (0, s.jsx)('div', { className: T.stepConnector })
                ]
            }),
            (0, s.jsx)('div', {
                className: T.stepContent,
                children: t
            })
        ]
    });
}
function v(e) {
    let {
            quest: t,
            useReducedMotion: n,
            connectedAccounts: r
        } = e, i = (0, C.g2)({ useReducedMotion: n }), {
            errorHints: c,
            startingConsoleQuest: f,
            startConsoleQuest: h
        } = (0, p.GI)({
            questId: t.id,
            beforeRequest: () => {
                (0, u._3)({
                    questId: t.id,
                    questContent: x.jn.QUEST_BAR_V2,
                    questContentCTA: u.jZ.DEFIBRILLATOR
                }), i.startAnimation();
            },
            afterRequest: i.stopAnimation
        }), {
            header: N,
            renderBody: v
        } = o.useMemo(() => {
            let e = c.length > 0, n = () => (0, s.jsx)('div', {
                    children: c.map((e, t) => (0, s.jsx)(l.Text, {
                        className: T.microphoneUnitBodyText,
                        color: 'text-muted',
                        variant: 'text-xxs/normal',
                        children: e
                    }, t))
                });
            if ((0, m.zK)(t, _.S7.IN_HOUSE_CONSOLE_QUEST))
                return {
                    header: e ? S.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : S.Z.Messages.QUESTS_MICROPHONE_UNIT_HEADER,
                    renderBody: e ? n : () => (0, s.jsx)(l.Text, {
                        className: T.microphoneUnitBodyText,
                        color: 'text-muted',
                        variant: 'text-xxs/normal',
                        children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY_ANY_GAME
                    })
                };
            let o = g.r.build(t.config).application.name;
            return {
                header: e ? S.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: o }) : S.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: o }),
                renderBody: e ? n : () => (0, s.jsx)(l.Text, {
                    className: T.microphoneUnitBodyText,
                    color: 'text-muted',
                    variant: 'text-xxs/normal',
                    children: S.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({ gameTitle: o })
                })
            };
        }, [
            t,
            c
        ]);
    return (0, s.jsxs)('div', {
        className: T.microphoneUnit,
        children: [
            (0, s.jsxs)('div', {
                className: T.microphoneUnitHeader,
                children: [
                    (0, s.jsx)(l.CircleExclamationPointIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === c.length ? T.warningCircle : T.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        children: N
                    }),
                    (0, s.jsx)(l.Clickable, {
                        className: a()(T.microphoneUnitRefreshIconWrapper, { [T.disabled]: f }),
                        onClick: () => h(),
                        children: i.render()
                    })
                ]
            }),
            v(),
            0 === c.length ? null : (0, s.jsx)(l.Text, {
                className: T.microphoneUnitBodyText,
                color: 'text-muted',
                variant: 'text-xxs/normal',
                children: function () {
                    let e = r.playstationAccounts.length > 0, t = r.xboxAccounts.length > 0;
                    return e && !t || !e && t ? S.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_SINGLE_CONSOLE.format({ helpdeskArticle: d.Z.getArticleURL(e ? E.BhN.PS_CONNECTION : E.BhN.XBOX_CONNECTION) }) : S.Z.Messages.QUESTS_MICROPHONE_UNIT_FOOTER_PLAYSTATION_OR_XBOX.format({
                        psHelpdeskArticle: d.Z.getArticleURL(E.BhN.PS_CONNECTION),
                        xboxHelpdeskArticle: d.Z.getArticleURL(E.BhN.XBOX_CONNECTION)
                    });
                }()
            })
        ]
    });
}
function j(e) {
    let {text: t} = e;
    return (0, s.jsx)(l.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: t
    });
}
t.Z = function (e) {
    let {quest: t} = e, n = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), r = (0, p.Rf)(t), a = (0, p.z6)(), {
            steps: d,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: x,
            isQuestComplete: C
        } = o.useMemo(() => {
            var e;
            let n = a.xboxAndPlaystationAccounts.length > 0, o = n && (0, m.Bz)(t), i = (0, m.zK)(t, _.S7.IN_HOUSE_CONSOLE_QUEST), l = g.r.build(t.config).application.name, c = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(f.Q, {
                            ...a,
                            quest: t
                        }),
                        isComplete: n || o || c
                    },
                    {
                        renderContent: () => (0, s.jsx)(j, { text: i ? S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_ANY_GAME : S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_LAUNCH_GAME.format({ gameTitle: l }) }),
                        isComplete: o || c
                    },
                    {
                        renderContent: () => (0, s.jsx)(j, { text: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_PLAYTIME.format({ numMinutes: r.targetMinutes }) }),
                        isComplete: c
                    }
                ],
                hasConnectedAccounts: n,
                isProgressingQuestForLaunchedGame: o,
                isQuestComplete: c
            };
        }, [
            a,
            t,
            r
        ]);
    return (0, s.jsxs)('div', {
        className: T.wrapper,
        children: [
            (0, s.jsx)('div', {
                className: T.headingWrapper,
                children: (0, s.jsx)(l.Heading, {
                    className: T.heading,
                    variant: 'text-xs/medium',
                    children: S.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_HEADING
                })
            }),
            (0, s.jsx)(h.n, {
                children: (0, s.jsxs)('div', {
                    className: T.stepsWrapper,
                    children: [
                        (0, s.jsx)('ul', {
                            children: d.map((e, t) => (0, s.jsx)(N, {
                                isComplete: e.isComplete,
                                hasNextStep: t < d.length - 1,
                                children: e.renderContent()
                            }, t))
                        }),
                        u && !x && !C && (0, s.jsx)(v, {
                            connectedAccounts: a,
                            useReducedMotion: n,
                            quest: t
                        })
                    ]
                })
            })
        ]
    });
};
