n.d(t, {
    r: function () {
        return f;
    }
});
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    o = n(239091),
    a = n(479531),
    u = n(390322),
    d = n(617136),
    c = n(272008),
    m = n(113434),
    x = n(569984),
    C = n(497505),
    h = n(918701),
    g = n(341907),
    p = n(46140),
    E = n(231338),
    j = n(388032);
function T(e) {
    var t;
    let n = (0, l.e7)([x.Z], () => x.Z.questDeliveryOverride, []),
        u = (0, h.GN)(e.questContent),
        T = (0, h.zK)(e.quest, p.S7.IN_HOUSE_CONSOLE_QUEST),
        f = [C.jn.QUEST_BAR_V2, C.jn.QUEST_BAR].includes(e.questContent),
        v = (0, h.zK)(e.quest, p.S7.DISMISSAL_SURVEY),
        { handleComplete: S, handleProgress: N, handleResetDismissibilityClick: q, handleResetStatusClick: _, handleOverrideDeliveryClick: A } = (0, m.kJ)(e.quest.id),
        R = s.useCallback(() => {
            (0, h.FE)(e.quest, {
                content: e.questContent,
                ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [e.quest, e.questContent]),
        b = s.useCallback(() => {
            (0, h.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK
            });
        }, [e.quest, e.questContent, e.questContentPosition]),
        I = (e) => (0, r.showToast)((0, r.createToast)(new a.Z(e, e.status).message, r.ToastType.FAILURE)),
        M = () => (0, c.is)(e.quest.id).catch(I);
    return (0, i.jsxs)(r.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, o.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': j.intl.string(j.t.ogxXGh),
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : E.dG,
        children: [
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [
                        !1 === T &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'play-game',
                                label: j.intl.string(j.t.lwQdjI),
                                action: R,
                                icon: r.LinkExternalMediumIcon
                            }),
                        !0 === e.showShareLink &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'share-link',
                                label: j.intl.string(j.t.WqhZsr),
                                action: b,
                                icon: r.CopyIcon
                            })
                    ]
                },
                'major-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [
                        !e.hideLearnMore &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'learn-more',
                                label: j.intl.string(j.t.LLLLPD),
                                action: () => {
                                    (0, d._3)({
                                        questId: e.quest.id,
                                        questContent: e.questContent,
                                        questContentPosition: e.questContentPosition,
                                        questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE
                                    }),
                                        (0, g.navigateToQuestHome)(p.dr.QUEST_CONTEXT_MENU, e.questContent, e.quest.id);
                                }
                            }),
                        e.shouldShowDisclosure &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'display-disclosure',
                                label: j.intl.string(j.t.GcsZKC),
                                action: () => {
                                    (0, g.openDisclosureModal)(e.quest, {
                                        content: e.questContent,
                                        position: e.questContentPosition,
                                        ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
                                    });
                                }
                            }),
                        u &&
                            (0, i.jsx)(r.MenuItem, {
                                id: 'hide-entrypoint',
                                label: j.intl.string(j.t.NN79Ex),
                                action: () => {
                                    if (
                                        ((0, d._3)({
                                            questId: e.quest.id,
                                            questContent: e.questContent,
                                            questContentPosition: e.questContentPosition,
                                            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
                                        }),
                                        !!(0, h.GN)(e.questContent))
                                    )
                                        (0, c.gl)(e.quest.id, e.questContent), v && f && (0, g.maybeShowSurveyForQuest)(e.quest);
                                },
                                subtext: j.intl.string(j.t['1u3YPD'])
                            })
                    ]
                },
                'minor-actions'
            ),
            e.quest.preview &&
                (0, i.jsxs)(
                    r.MenuGroup,
                    {
                        label: 'Preview Controls',
                        children: [
                            (0, i.jsx)(r.MenuCheckboxItem, {
                                id: 'delivery',
                                label: 'Show in Quest Bar',
                                checked: (null == n ? void 0 : n.id) === e.quest.id,
                                action: A
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'dismiss',
                                label: 'Reset Dismissibility',
                                action: q
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'enrollment',
                                label: 'Reset Quest',
                                action: () => {
                                    _(), M();
                                }
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'progress',
                                label: 'Set Random Quest Progress',
                                action: () => {
                                    N(0.9 * Math.random() + 0.03);
                                }
                            }),
                            (0, i.jsx)(r.MenuItem, {
                                id: 'complete',
                                label: 'Complete Quest',
                                action: S
                            }),
                            (0, h.$J)(e.quest) &&
                                (0, i.jsxs)(r.MenuItem, {
                                    id: 'console',
                                    label: 'Console Heartbeat',
                                    children: [
                                        (0, i.jsx)(r.MenuItem, {
                                            disabled: !0,
                                            id: 'status',
                                            label: 'Status: '.concat((0, h.Bz)(e.quest) ? 'alive' : 'dead')
                                        }),
                                        (0, i.jsx)(r.MenuItem, {
                                            id: 'start',
                                            label: 'Start heartbeat (cheatmode)',
                                            action: () => (0, c.CS)(e.quest.id, !0).catch(I)
                                        }),
                                        (0, i.jsx)(r.MenuItem, {
                                            id: 'stop',
                                            label: 'Stop heartbeat',
                                            action: M
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
function f(e) {
    let { children: t, onOpen: n, onClose: l, preventIdle: o, quest: a, questContent: c, questContentPosition: m, ...x } = e,
        C = s.useCallback(() => {
            (0, d._3)({
                questId: a.id,
                questContent: c,
                questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: m
            }),
                null != n && n();
        }, [n, a.id, c, m]);
    return (0, i.jsx)(r.Popout, {
        onRequestOpen: C,
        onRequestClose: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return o
                ? (0, i.jsx)(u.Z, {
                      children: (0, i.jsx)(T, {
                          ...x,
                          quest: a,
                          questContent: c,
                          questContentPosition: m,
                          onClose: t
                      })
                  })
                : (0, i.jsx)(T, {
                      ...x,
                      quest: a,
                      questContent: c,
                      questContentPosition: m,
                      onClose: t
                  });
        },
        animation: r.Popout.Animation.NONE,
        children: (e) => t(e)
    });
}
