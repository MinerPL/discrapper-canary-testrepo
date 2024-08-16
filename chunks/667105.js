n.d(t, {
    Ks: function () {
        return v;
    },
    g2: function () {
        return A;
    },
    hf: function () {
        return g;
    },
    k3: function () {
        return N;
    },
    tP: function () {
        return S;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(338545),
    s = n(442837),
    o = n(481060),
    l = n(594190),
    u = n(594174),
    c = n(617136),
    d = n(272008),
    _ = n(113434),
    E = n(918701),
    f = n(796111),
    h = n(920916),
    p = n(669041),
    m = n(341907),
    I = n(46140),
    T = n(689938);
function g(e) {
    let { quest: t, location: n, questContentPosition: r, questContentRowIndex: a } = e,
        o = (0, s.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasVerifiedEmailOrPhone();
        });
    return i.useCallback(() => {
        null != t &&
            ((0, c._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: c.jZ.CLAIM_REWARD,
                questContentPosition: r,
                questContentRowIndex: a
            }),
            o
                ? (0, E.Xv)(t.config)
                    ? (0, h.openCollectibleRewardModal)(t, n)
                    : (0, E.vQ)(t.config)
                      ? (0, m.openQuestInGameRewardModal)(t, n)
                      : (0, m.openQuestsRewardCodeModal)({
                            questId: t.id,
                            location: n,
                            questContentPosition: r
                        })
                : (0, p.openRewardModalUnverified)());
    }, [t, n, r, o, a]);
}
function S(e) {
    var t;
    let n = (0, s.Wu)([l.ZP], () => l.ZP.getGamesSeen(!1)).find((t) => (null == t ? void 0 : t.id) === e);
    if (null == n) return !1;
    let r = Date.now() - 25920000000;
    return r <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let A = (e) => {
        let { useReducedMotion: t, className: n } = e,
            [s, l] = (0, o.useSpring)(() => ({})),
            u = i.useRef(!1),
            c = (0, a.animated)(o.RefreshIcon);
        return {
            render: () =>
                (0, r.jsx)(c, {
                    className: n,
                    style: t ? void 0 : s,
                    color: 'currentColor',
                    size: 'xs'
                }),
            startAnimation: () => {
                (u.current = !0),
                    l({
                        from: { rotate: '0deg' },
                        to: { rotate: '360deg' },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100
                        },
                        loop: () => u.current,
                        immediate: t
                    });
            },
            stopAnimation: () => {
                u.current = !1;
            }
        };
    },
    N = (e, t) => {
        let { message: n, xboxURL: i } = (0, _.KX)();
        return (0, r.jsx)('span', {
            onClick: (n) => {
                var r;
                let a = n.target;
                if ((null == a ? void 0 : null === (r = a.tagName) || void 0 === r ? void 0 : r.toLowerCase()) !== 'a') return;
                let s = a.getAttribute('href') === i ? c.jZ.HOW_TO_HELP_ARTICLE_XBOX : c.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION;
                (0, c._3)({
                    questId: e,
                    questContent: t,
                    questContentCTA: s
                });
            },
            children: n
        });
    };
function v(e) {
    let { quest: t, progressState: n, isCollectibleQuest: r, location: a, questContentPosition: s, questContentRowIndex: o, isInHouseQuest: l, inGiftInventory: u } = e,
        h = g({
            quest: t,
            location: a,
            questContentPosition: s,
            questContentRowIndex: o
        }),
        p = (0, _._s)({ quest: t });
    return i.useMemo(() => {
        switch (n) {
            case _.OH.UNACCEPTED:
                return {
                    text: T.Z.Messages.QUESTS_ACCEPT,
                    tooltipText: T.Z.Messages.QUESTS_ACCEPT_TOOLTIP,
                    onClick: () =>
                        (0, d.AH)(t.id, {
                            questContent: a,
                            questContentCTA: c.jZ.ACCEPT_QUEST,
                            questContentPosition: s,
                            questContentRowIndex: o
                        })
                };
            case _.OH.ACCEPTED:
            case _.OH.IN_PROGRESS:
                if (p && u)
                    return {
                        text: T.Z.Messages.QUESTS_CONNECT_CONSOLE,
                        tooltipText: null,
                        onClick: () =>
                            (0, E.gI)(
                                {
                                    quest: t,
                                    showInline: (0, f.i)({ location: I.dr.QUESTS_CARD })
                                },
                                {
                                    content: a,
                                    ctaContent: c.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: o
                                }
                            )
                    };
                return {
                    text: T.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: T.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
                    onClick: null
                };
            case _.OH.COMPLETED:
                return {
                    text: T.Z.Messages.QUESTS_CLAIM_REWARD,
                    tooltipText: l ? T.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null,
                    onClick: h
                };
            case _.OH.CLAIMED:
                let e = {
                    tooltipText: null,
                    onClick: h
                };
                if (l)
                    return {
                        ...e,
                        text: T.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                if (r)
                    return {
                        ...e,
                        text: T.Z.Messages.COLLECTIBLES_USE_NOW
                    };
                else if ((0, E.vQ)(t.config))
                    return {
                        ...e,
                        text: T.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                    };
                return {
                    ...e,
                    text: T.Z.Messages.QUESTS_SEE_CODE
                };
        }
    }, [t, r, l, a, h, n, s, o, p, u]);
}
