n.d(t, {
    r: function () {
        return g;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(239091), o = n(230711), c = n(479531), d = n(390322), u = n(617136), _ = n(272008), E = n(113434), m = n(569984), I = n(918701), T = n(341907), h = n(46140), N = n(981631), f = n(231338), p = n(689938);
function C(e) {
    var t;
    let n = (0, s.e7)([m.Z], () => m.Z.questDeliveryOverride, []), d = (0, I.GN)(e.questContent), C = (0, I.zK)(e.quest, h.S7.IN_HOUSE_CONSOLE_QUEST), {
            handleComplete: g,
            handleResetDismissibilityClick: S,
            handleResetStatusClick: A,
            handleOverrideDeliveryClick: x
        } = (0, E.kJ)(e.quest.id), O = a.useCallback(() => {
            (0, I.FE)(e.quest, {
                content: e.questContent,
                ctaContent: u.jZ.CONTEXT_MENU_OPEN_GAME_LINK
            });
        }, [
            e.quest,
            e.questContent
        ]), R = a.useCallback(() => {
            (0, I.f2)(e.quest.id, {
                content: e.questContent,
                position: e.questContentPosition,
                ctaContent: u.jZ.CONTEXT_MENU_COPY_LINK
            });
        }, [
            e.quest,
            e.questContent,
            e.questContentPosition
        ]), M = e => (0, l.showToast)((0, l.createToast)(new c.Z(e, e.status).message, l.ToastType.FAILURE));
    return (0, i.jsxs)(l.Menu, {
        variant: 'fixed',
        onSelect: () => {
            null != e.onSelect ? e.onSelect() : (0, r.Zy)();
        },
        navId: 'quests-entry',
        'aria-label': p.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : f.dG,
        children: [
            (0, i.jsxs)(l.MenuGroup, {
                children: [
                    !1 === C && (0, i.jsx)(l.MenuItem, {
                        id: 'play-game',
                        label: p.Z.Messages.QUESTS_GET_THIS_GAME,
                        action: O,
                        icon: l.LinkExternalMediumIcon
                    }),
                    !0 === e.showShareLink && (0, i.jsx)(l.MenuItem, {
                        id: 'share-link',
                        label: p.Z.Messages.COPY_LINK,
                        action: R,
                        icon: l.CopyIcon
                    })
                ]
            }, 'major-actions'),
            (0, i.jsxs)(l.MenuGroup, {
                children: [
                    !e.hideLearnMore && (0, i.jsx)(l.MenuItem, {
                        id: 'learn-more',
                        label: p.Z.Messages.QUESTS_LEARN_MORE_V2,
                        action: () => {
                            (0, u._3)({
                                questId: e.quest.id,
                                questContent: e.questContent,
                                questContentPosition: e.questContentPosition,
                                questContentCTA: u.jZ.CONTEXT_MENU_LEARN_MORE
                            }), o.Z.open(N.oAB.INVENTORY);
                        }
                    }),
                    e.shouldShowDisclosure && (0, i.jsx)(l.MenuItem, {
                        id: 'display-disclosure',
                        label: p.Z.Messages.QUESTS_DISCLOSURE_LABEL,
                        action: () => {
                            (0, T.a)(e.quest, {
                                content: e.questContent,
                                position: e.questContentPosition,
                                ctaContent: u.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
                            });
                        }
                    }),
                    d && (0, i.jsx)(l.MenuItem, {
                        id: 'hide-entrypoint',
                        label: p.Z.Messages.QUESTS_HIDE_THIS,
                        action: () => {
                            (0, u._3)({
                                questId: e.quest.id,
                                questContent: e.questContent,
                                questContentPosition: e.questContentPosition,
                                questContentCTA: u.jZ.CONTEXT_MENU_HIDE_CONTENT
                            }), (0, I.GN)(e.questContent) && (0, _.gl)(e.quest.id, e.questContent);
                        },
                        subtext: p.Z.Messages.QUESTS_FIND_QUEST
                    })
                ]
            }, 'minor-actions'),
            e.quest.preview && (0, i.jsxs)(l.MenuGroup, {
                label: 'Preview Controls',
                children: [
                    (0, i.jsx)(l.MenuCheckboxItem, {
                        id: 'delivery',
                        label: 'Show in Quest Bar',
                        checked: (null == n ? void 0 : n.id) === e.quest.id,
                        action: x
                    }),
                    (0, i.jsx)(l.MenuItem, {
                        id: 'dismiss',
                        label: 'Reset Dismissibility',
                        action: S
                    }),
                    (0, i.jsx)(l.MenuItem, {
                        id: 'enrollment',
                        label: 'Reset Quest',
                        action: A
                    }),
                    (0, i.jsx)(l.MenuItem, {
                        id: 'complete',
                        label: 'Complete Quest',
                        action: g
                    }),
                    (0, I.$J)(e.quest) && (0, i.jsxs)(l.MenuItem, {
                        id: 'console',
                        label: 'Console Heartbeat',
                        children: [
                            (0, i.jsx)(l.MenuItem, {
                                disabled: !0,
                                id: 'status',
                                label: 'Status: '.concat((0, I.Bz)(e.quest) ? 'alive' : 'dead')
                            }),
                            (0, i.jsx)(l.MenuItem, {
                                id: 'start',
                                label: 'Start heartbeat (cheatmode)',
                                action: () => (0, _.CS)(e.quest.id, !0).catch(M)
                            }),
                            (0, i.jsx)(l.MenuItem, {
                                id: 'stop',
                                label: 'Stop heartbeat',
                                action: () => (0, _.is)(e.quest.id).catch(M)
                            })
                        ]
                    })
                ]
            }, 'preview-controls')
        ]
    });
}
function g(e) {
    let {
            children: t,
            onOpen: n,
            onClose: s,
            preventIdle: r,
            quest: o,
            questContent: c,
            questContentPosition: _,
            ...E
        } = e, m = a.useCallback(() => {
            (0, u._3)({
                questId: o.id,
                questContent: c,
                questContentCTA: u.jZ.OPEN_CONTEXT_MENU,
                questContentPosition: _
            }), null != n && n();
        }, [
            n,
            o.id,
            c,
            _
        ]);
    return (0, i.jsx)(l.Popout, {
        onRequestOpen: m,
        onRequestClose: s,
        renderPopout: e => {
            let {closePopout: t} = e;
            return r ? (0, i.jsx)(d.Z, {
                children: (0, i.jsx)(C, {
                    ...E,
                    quest: o,
                    questContent: c,
                    questContentPosition: _,
                    onClose: t
                })
            }) : (0, i.jsx)(C, {
                ...E,
                quest: o,
                questContent: c,
                questContentPosition: _,
                onClose: t
            });
        },
        animation: l.Popout.Animation.NONE,
        children: e => t(e)
    });
}
