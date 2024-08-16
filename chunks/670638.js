n.d(t, {
    r: function () {
        return M;
    }
});
var s = n(735250),
    o = n(470079),
    a = n(442837),
    i = n(481060),
    r = n(239091),
    l = n(479531),
    u = n(390322),
    c = n(617136),
    d = n(272008),
    E = n(113434),
    C = n(569984),
    m = n(918701),
    p = n(471985),
    x = n(341907),
    T = n(46140),
    _ = n(231338),
    q = n(689938);
function h(e) {
    var t;
    let n = (0, a.e7)([C.Z], () => C.Z.questDeliveryOverride, []),
        u = (0, m.GN)(e.questContent),
        h = (0, m.zK)(e.quest, T.S7.IN_HOUSE_CONSOLE_QUEST),
        M = (0, m.KM)(e.quest),
        N = (0, p.Z)(T.dr.QUEST_CONTEXT_MENU),
        { handleComplete: j, handleResetDismissibilityClick: I, handleResetStatusClick: S, handleOverrideDeliveryClick: b } = (0, E.kJ)(e.quest.id),
        g = o.useCallback(() => {
            (0, m.FE)(e.quest, {
                content: e.questContent,
                ctaContent: c.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [e.quest, e.questContent]),
        f = o.useCallback(() => {
            (0, m.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: c.jZ.CONTEXT_MENU_COPY_LINK
            });
        }, [e.quest, e.questContent, e.questContentPosition]),
        v = (e) => (0, i.showToast)((0, i.createToast)(new l.Z(e, e.status).message, i.ToastType.FAILURE));
    return (0, s.jsxs)(i.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': q.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : _.dG,
        children: [
            !1 === M &&
                (0, s.jsxs)(
                    i.MenuGroup,
                    {
                        children: [
                            !1 === h &&
                                (0, s.jsx)(i.MenuItem, {
                                    id: 'play-game',
                                    label: q.Z.Messages.QUESTS_GET_THIS_GAME,
                                    action: g,
                                    icon: i.LinkExternalMediumIcon
                                }),
                            !0 === e.showShareLink &&
                                (0, s.jsx)(i.MenuItem, {
                                    id: 'share-link',
                                    label: q.Z.Messages.COPY_LINK,
                                    action: f,
                                    icon: i.CopyIcon
                                })
                        ]
                    },
                    'major-actions'
                ),
            (0, s.jsxs)(
                i.MenuGroup,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, s.jsx)(i.MenuItem, {
                                id: 'learn-more',
                                label: q.Z.Messages.QUESTS_LEARN_MORE_V2,
                                action: () => {
                                    (0, c._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: c.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, x.navigateToQuestHome)(T.dr.QUEST_CONTEXT_MENU, e.quest.id);
                                }
                            }),
                        e.shouldShowDisclosure &&
                            (0, s.jsx)(i.MenuItem, {
                                id: 'display-disclosure',
                                label: q.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                                action: () => {
                                    (0, x.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: c.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
                                    });
                                }
                            }),
                        u &&
                            (0, s.jsx)(i.MenuItem, {
                                id: 'hide-entrypoint',
                                label: q.Z.Messages.QUESTS_HIDE_THIS,
                                action: () => {
                                    (0, c._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: c.jZ.CONTEXT_MENU_HIDE_CONTENT
                                    }),
                                        (0, m.GN)(e.questContent) && (0, d.gl)(e.quest.id, e.questContent);
                                },
                                subtext: N ? q.Z.Messages.QUESTS_FIND_THIS_IN_DISCOVERY_QUEST_HOME : q.Z.Messages.QUESTS_FIND_QUEST
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, s.jsxs)(
                    i.MenuGroup,
                    {
                        label: 'Preview Controls',
                        children: [
                            (0, s.jsx)(i.MenuCheckboxItem, {
                                id: 'delivery',
                                label: 'Show in Quest Bar',
                                checked: (null == n ? void 0 : n.id) === e.quest.id,
                                action: b
                            }),
                            (0, s.jsx)(i.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: I
                            }),
                            (0, s.jsx)(i.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: S
                            }),
                            (0, s.jsx)(i.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: j
                            }),
                            (0, m.$J)(e.quest) &&
                                (0, s.jsxs)(i.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, s.jsx)(i.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, m.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, s.jsx)(i.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, d.CS)(e.quest.id, !0).catch(v)
                                        }),
                                        (0, s.jsx)(i.MenuItem, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: () => (0, d.is)(e.quest.id).catch(v)
                                        })
                                    ]
                                })
                        ]
                    },
                    'preview-controls'
                )
        ]
    });
}
function M(e) {
    let { children: t, onOpen: n, onClose: a, preventIdle: r, quest: l, questContent: d, questContentPosition: E, ...C } = e,
        m = o.useCallback(() => {
            (0, c._3)({
                questId: l.id,
                questContent: d,
                questContentCTA: c.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: E
            }),
                null != n && n();
        }, [n, l.id, d, E]);
    return (0, s.jsx)(i.Popout, {
        onRequestOpen: m,
        onRequestClose: a,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return r
                ? (0, s.jsx)(u.Z, {
                      children: (0, s.jsx)(h, {
                          ...C,
                          quest: l,
                          questContent: d,
                          questContentPosition: E,
                          onClose: t
                      })
                  })
                : (0, s.jsx)(h, {
                      ...C,
                      quest: l,
                      questContent: d,
                      questContentPosition: E,
                      onClose: t
                  });
        },
        animation: i.Popout.Animation.NONE,
        children: (e) => t(e)
    });
}
