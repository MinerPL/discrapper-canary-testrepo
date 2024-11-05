n.d(t, {
    DH: function () {
        return R;
    },
    Ks: function () {
        return C;
    },
    Ws: function () {
        return D;
    },
    g2: function () {
        return A;
    },
    hf: function () {
        return b;
    },
    k3: function () {
        return N;
    },
    qN: function () {
        return O;
    },
    tP: function () {
        return y;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(100621),
    s = n(442837),
    o = n(481060),
    l = n(594190),
    u = n(594174),
    c = n(617136),
    d = n(272008),
    f = n(113434),
    _ = n(569984),
    h = n(497505),
    p = n(918701),
    m = n(977156),
    g = n(920916),
    E = n(669041),
    v = n(341907),
    I = n(604162),
    S = n(46140),
    T = n(388032);
function b(e) {
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
                ? (0, p.zK)(t, S.S7.FRACTIONS_QUEST)
                    ? (0, v.openQuestsNitroRewardModal)(t, n)
                    : (0, p.Xv)(t.config)
                      ? (0, g.openCollectibleRewardModal)(t, n)
                      : (0, p.vQ)(t.config)
                        ? (0, v.openQuestInGameRewardModal)(t, n)
                        : (0, v.openQuestsRewardCodeModal)({
                              questId: t.id,
                              location: n,
                              questContentPosition: r
                          })
                : (0, E.openRewardModalUnverified)());
    }, [t, n, r, o, a]);
}
function y(e) {
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
            startAnimation: (e) => {
                (u.current = !0),
                    l({
                        from: { rotate: '0deg' },
                        to: { rotate: '360deg' },
                        config: {
                            tension: 750,
                            mass: 5,
                            friction: 100
                        },
                        loop: () => (null != e ? e : u.current),
                        immediate: t
                    });
            },
            stopAnimation: () => {
                u.current = !1;
            }
        };
    },
    N = (e, t) => {
        let { message: n, xboxURL: i } = (0, f.KX)();
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
function C(e) {
    let { quest: t, progressState: n, isCollectibleQuest: r, location: a, questContentPosition: s, questContentRowIndex: o, isInHouseQuest: l, inGiftInventory: u, isVideoQuest: _ } = e,
        h = b({
            quest: t,
            location: a,
            questContentPosition: s,
            questContentRowIndex: o
        }),
        m = (0, f._s)({ quest: t }),
        g = (0, f.Rf)(t);
    return i.useMemo(() => {
        switch (n) {
            case f.OH.UNACCEPTED:
                let e = _ ? T.intl.string(T.t.umdNio) : T.intl.string(T.t.kUQLMD),
                    i = _ ? c.jZ.START_QUEST : c.jZ.ACCEPT_QUEST;
                return {
                    text: e,
                    tooltipText: T.intl.string(T.t['+MW4lJ']),
                    onClick: () => {
                        (0, d.AH)(t.id, {
                            questContent: a,
                            questContentCTA: i,
                            questContentPosition: s,
                            questContentRowIndex: o
                        }),
                            _ && (0, v.openVideoQuestModal)(t);
                    }
                };
            case f.OH.ACCEPTED:
            case f.OH.IN_PROGRESS:
                if (m && u)
                    return {
                        text: T.intl.string(T.t.Cfye4u),
                        tooltipText: null,
                        onClick: () =>
                            (0, p.gI)(
                                { quest: t },
                                {
                                    content: a,
                                    ctaContent: c.jZ.CONNECT_CONSOLE,
                                    position: s,
                                    rowIndex: o
                                }
                            )
                    };
                if (_)
                    return {
                        text: (0, I.F9)(g),
                        tooltipText: T.intl.string(T.t.hsbwjo),
                        onClick: () => (0, v.openVideoQuestModal)(t)
                    };
                return {
                    text: T.intl.string(T.t.cfY4PD),
                    tooltipText: T.intl.string(T.t.hsbwjo),
                    onClick: null
                };
            case f.OH.COMPLETED:
                return {
                    text: T.intl.string(T.t.cfY4PD),
                    tooltipText: l ? T.intl.string(T.t.pqVOa2) : null,
                    onClick: h
                };
            case f.OH.CLAIMED:
                let E = {
                    tooltipText: null,
                    onClick: h
                };
                if (l)
                    return {
                        ...E,
                        text: T.intl.string(T.t.vTgCW1)
                    };
                if (r)
                    return {
                        ...E,
                        text: T.intl.string(T.t.MAS7uL)
                    };
                else if ((0, p.vQ)(t.config))
                    return {
                        ...E,
                        text: T.intl.string(T.t.vTgCW1)
                    };
                return {
                    ...E,
                    text: T.intl.string(T.t.bAGFz8)
                };
        }
    }, [t, r, _, l, a, h, n, s, o, m, u, g]);
}
function R() {
    return (0, s.e7)([_.Z], () => {
        var e, t;
        return null !== (t = null !== (e = _.Z.questDeliveryOverride) && void 0 !== e ? e : (0, p.PM)(_.Z.quests, _.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : (0, p._)(_.Z.quests, h.jn.QUEST_BAR);
    });
}
function O(e) {
    var t;
    let { location: n, quest: r } = e,
        i = (0, m.Zy)({ location: n }),
        a = (0, f.tP)(r);
    if (null == r) return !1;
    let s = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        o = null != r.userStatus && (0, p.zE)(r.userStatus, h.jn.QUEST_BAR);
    return i && !o && !s && !a;
}
function D(e) {
    let { location: t } = e,
        n = O({
            location: t,
            quest: R()
        });
    return 0 !== (0, s.e7)([_.Z], () => _.Z.lastFetchedCurrentQuests) && !n;
}
