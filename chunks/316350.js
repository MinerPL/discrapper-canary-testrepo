n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var s,
    a,
    i,
    r,
    l = n(735250),
    o = n(470079),
    c = n(120356),
    d = n.n(c),
    u = n(212433),
    _ = n(481060),
    I = n(205641),
    E = n(119331),
    T = n(902807),
    m = n(402766),
    N = n(267642),
    S = n(981631),
    g = n(689938),
    h = n(366667);
let C = {
        tension: 200,
        friction: 20
    },
    x = {
        ...C,
        clamp: !0
    };
function p(e) {
    let [t, n] = o.useState(0),
        { numUnlocked: s, numRequired: a } = e,
        i = () => {
            n(1);
        },
        r = () => {
            n(2);
        },
        c = 2 === t,
        E = 1 === t;
    if (!(!(s >= a) && s / a >= 0.8) || c) return null;
    let T = E || c ? h.hidden : null,
        m = E ? I.Z.Stages.FLYING : I.Z.Stages.HOVERING;
    return (0, l.jsx)(_.Spring, {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: x,
        shouldAnimate: 'animate-always',
        children: (e) =>
            (0, l.jsxs)(u.animated.div, {
                className: h.tierClose,
                style: e,
                children: [
                    (0, l.jsx)(I.Z, {
                        className: h.tierCloseMechaWumpus,
                        stage: m,
                        onFlyingComplete: r
                    }),
                    (0, l.jsx)('div', {
                        className: d()(h.tierCloseHint, T),
                        children: g.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_CLOSE_HINT.format({ numLeft: a - s })
                    }),
                    (0, l.jsx)(_.Clickable, {
                        onClick: i,
                        className: d()(h.tierCloseClose, T),
                        children: (0, l.jsx)(_.CircleXIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: h.tierCloseCloseIcon
                        })
                    })
                ]
            })
    });
}
function R(e) {
    let { withCardBody: t, isAnimatedTo: n, hasAnimatedUnlocked: s, onSetRef: a, tier: i, showHeaderLockStatus: r, headerButton: c = null, subscriptionsRequired: u, subscriptionCount: I, className: E } = e,
        T = (e) => {
            null == a || a(e);
        },
        [N, S] = o.useState(0);
    return (
        o.useLayoutEffect(() => {
            n && S(1);
        }, [n]),
        (0, l.jsx)(_.Spring, {
            from: { unlockedTranslateY: 50 },
            to: { unlockedTranslateY: 0 === N ? 50 : 0 },
            config: C,
            children: (e) =>
                (0, l.jsx)('div', {
                    className: d()(
                        {
                            [h.tierHeaderWithoutCardBody]: !t,
                            [h.tierHeaderUnlocked]: s,
                            [h.tierHeaderLocked]: !s
                        },
                        E
                    ),
                    ref: T,
                    children: (0, l.jsxs)('div', {
                        className: h.tierHeaderContent,
                        children: [
                            (0, l.jsx)(m.Z, {
                                tier: i.tier,
                                className: d()(h.tierIcon, { [h.tierIconLocked]: !s })
                            }),
                            (0, l.jsx)('div', {
                                className: d()(h.tierTitle, { [h.tierTitleActive]: s }),
                                children: i.title
                            }),
                            r
                                ? (0, l.jsx)(f, {
                                      transform: null == e ? void 0 : e.unlockedTranslateY.to((e) => 'translate3d(0, '.concat(e, 'px, 0)')),
                                      headerButton: c,
                                      subscriptionsRequired: u,
                                      hasAnimatedUnlocked: s
                                  })
                                : null,
                            (0, l.jsx)(p, {
                                numUnlocked: I,
                                numRequired: u
                            })
                        ]
                    })
                })
        })
    );
}
function L(e) {
    let { children: t, subscriptionCount: n, onSetRef: s, tier: a, isAnimatedTo: i, hasBottomMargin: r, headerButton: o = null, withCardBody: c = !0, guildId: u, showHeaderLockStatus: I = !0 } = e,
        m = (0, N.vn)(u)[a.tier],
        C = i && n >= m,
        x = a.tier !== S.Eu4.NONE && a.tier !== S.Eu4.TIER_1,
        p = (e, t) => {
            var n;
            let { icon: s, className: a } = (0, E.t)(e.icon, t);
            return (0, l.jsxs)(
                'div',
                {
                    className: h.perk,
                    children: [
                        (0, l.jsx)(T.Z, {
                            name: String(e.icon),
                            icon: s,
                            className: h.perkIcon,
                            iconClassName: a
                        }),
                        (0, l.jsxs)('div', {
                            className: h.perkText,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: h.perkTitle,
                                    children: [
                                        e.title,
                                        e.isNew
                                            ? (0, l.jsx)(_.TextBadge, {
                                                  className: h.newBadge,
                                                  text: g.Z.Messages.NEW
                                              })
                                            : null
                                    ]
                                }),
                                (0, l.jsx)('div', {
                                    className: h.perkDescription,
                                    children: e.description
                                })
                            ]
                        })
                    ]
                },
                null === (n = e.title) || void 0 === n ? void 0 : n.toString()
            );
        };
    return (0, l.jsxs)(
        'div',
        {
            className: d()(h.tier, { [h.tierBottomMargin]: r }),
            children: [
                (0, l.jsx)(R, {
                    subscriptionCount: n,
                    tier: a,
                    headerButton: o,
                    showHeaderLockStatus: I,
                    onSetRef: (e) => {
                        null != s && s(e, a);
                    },
                    withCardBody: c,
                    guildId: u,
                    hasBottomMargin: r,
                    subscriptionsRequired: m,
                    hasAnimatedUnlocked: C,
                    isAnimatedTo: i
                }),
                (0, l.jsx)('div', {
                    className: d()({ [h.tierBody]: c }),
                    children:
                        null != t
                            ? t
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      x
                                          ? (0, l.jsx)('div', {
                                                className: h.previousPerks,
                                                children: g.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_PREVIOUS_PERKS
                                            })
                                          : null,
                                      null != a.perks &&
                                          (0, l.jsx)('div', {
                                              className: h.perks,
                                              children: a.perks.map((e) => p(e, C))
                                          })
                                  ]
                              })
                })
            ]
        },
        a.tier
    );
}
((i = s || (s = {}))[(i.OPEN = 0)] = 'OPEN'), (i[(i.CLOSING = 1)] = 'CLOSING'), (i[(i.CLOSED = 2)] = 'CLOSED'), ((r = a || (a = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.UNLOCKED_SLIDE = 1)] = 'UNLOCKED_SLIDE');
let f = (e) => {
        let { transform: t, hasAnimatedUnlocked: n, headerButton: s, subscriptionsRequired: a } = e;
        return null !== s ? s : n ? (0, l.jsx)(O, { transform: t }) : (0, l.jsx)(A, { subscriptionsRequired: a });
    },
    O = (e) => {
        let { transform: t } = e;
        return (0, l.jsx)(u.animated.div, {
            style: { transform: t },
            className: h.tierUnlocked,
            children: g.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_UNLOCKED
        });
    },
    A = (e) => {
        let { subscriptionsRequired: t } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)('div', {
                    className: h.tierRequirement,
                    children: g.Z.Messages.GUILD_SETTINGS_PREMIUM_GUILD_TIER_REQUIREMENT.format({ required: t })
                }),
                (0, l.jsx)(_.LockIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.tierLock
                })
            ]
        });
    };
