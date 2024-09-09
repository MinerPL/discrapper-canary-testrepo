n(653041), n(47120), n(724458);
var i = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    r = n(959078),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    u = n(553795),
    d = n(358085),
    _ = n(617136),
    E = n(111382),
    I = n(113434),
    m = n(918701),
    T = n(566078),
    h = n(667105),
    N = n(689938),
    C = n(410301);
let f = (e) => (0 === e.length ? C.warning : C.danger),
    p = (e, t) => (0 === e.length ? N.Z.Messages.QUESTS_LAUNCHED_GAME.format({ gameTitle: t }) : N.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: t })),
    g = (e) => {
        let { quest: t, location: n, errors: s, gameTitle: a, consoleHelpArticle: l, expiredCredentialsInteractable: c } = e;
        if (0 === s.length)
            return (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                children: N.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({ gameTitle: a })
            });
        let E = [];
        (0, m.Nj)({ quest: t }) && E.push((0, d.isWeb)() ? N.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB : N.Z.Messages.QUEST_PROGRESS_NO_GAME);
        let I = [
            ...E,
            ...s.map((e) => {
                if (e.type !== r.K.EXPIRED_CREDENTIAL || !c) return e.message;
                let i = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                    s = (0, m.C9)(e),
                    a = (0, m._j)(e);
                return s.format({
                    account_name: null == i ? void 0 : i.name,
                    onClick: () => {
                        (0, m.fY)(
                            {
                                quest: t,
                                platformType: a
                            },
                            {
                                content: n,
                                ctaContent: _.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
                            }
                        );
                    }
                });
            }),
            l
        ];
        return (0, i.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: I.reduce((e, t) => [...e, t, ' '], [])
        });
    };
t.Z = function (e) {
    let t = T.r.build(e.quest.config).application.name,
        n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        s = (0, h.k3)(e.quest.id, e.location),
        r = (0, E.n)(),
        u = (0, h.g2)({
            useReducedMotion: n,
            className: C.refreshIcon
        }),
        {
            errorHints: d,
            startingConsoleQuest: m,
            startConsoleQuest: S
        } = (0, I.GI)({
            questId: e.quest.id,
            beforeRequest: () => {
                u.startAnimation(),
                    (0, _._3)({
                        questId: e.quest.id,
                        questContent: e.location,
                        questContentCTA: _.jZ.DEFIBRILLATOR
                    });
            },
            afterRequest: u.stopAnimation
        });
    return (0, i.jsxs)('div', {
        className: a()(C.container, { [C.inFlight]: m }),
        children: [
            (0, i.jsxs)('div', {
                className: C.info,
                children: [
                    (0, i.jsxs)('div', {
                        className: C.header,
                        children: [
                            (0, i.jsx)(o.CircleWarningIcon, {
                                className: a()(C.headerIcon, f(d)),
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: p(d, t)
                            })
                        ]
                    }),
                    g({
                        quest: e.quest,
                        errors: d,
                        gameTitle: t,
                        location: e.location,
                        consoleHelpArticle: s,
                        expiredCredentialsInteractable: r
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: C.cta,
                children: (0, i.jsx)(o.Button, {
                    color: o.ButtonColors.PRIMARY,
                    onClick: S,
                    disabled: m,
                    children: (0, i.jsxs)('div', {
                        className: C.ctaInner,
                        children: [u.render(), N.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA]
                    })
                })
            })
        ]
    });
};
