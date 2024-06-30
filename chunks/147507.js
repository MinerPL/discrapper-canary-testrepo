n.d(t, {
    ZP: function () {
        return G;
    }
}), n(47120);
var i, a, s, l, r = n(735250), o = n(470079), c = n(120356), d = n.n(c), u = n(887024), _ = n(772848), E = n(468194), m = n(477690), I = n(481060), T = n(230711), h = n(745510), N = n(739566), f = n(64078), p = n(29270), C = n(709586), g = n(482207), S = n(702346), A = n(267642), x = n(981631), O = n(689938), R = n(343774);
(s = i || (i = {})).ENTER = 'enter', s.CONFETTI = 'confetti', s.LEAF_PEEL = 'leaf_peel', s.LEAF_FALL = 'leaf_fall', s.EXIT = 'exit';
let M = {
    enter: {
        BEG: 0,
        END: 22
    },
    confetti: {
        BEG: 23,
        END: 119
    },
    leaf_peel: {
        BEG: 120,
        END: 160
    },
    leaf_fall: {
        BEG: 161,
        END: 163
    },
    exit: {
        BEG: 164,
        END: 200
    }
};
(l = a || (a = {})).TOP_LEFT = 'TOP_LEFT', l.TOP_RIGHT = 'TOP_RIGHT', l.BOTTOM_LEFT = 'BOTTOM_LEFT', l.BOTTOM_RIGHT = 'BOTTOM_RIGHT';
let v = [
        'TOP_LEFT',
        'TOP_RIGHT'
    ], L = (0, E.Mg)(m.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE), Z = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    }, P = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: e => ({
                x: e - 11,
                y: e - 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: 1
            },
            leafPosition: {
                x: 100,
                y: 144
            },
            leafRotationDirection: 1
        },
        TOP_RIGHT: {
            getConfettiPosition: e => ({
                x: 11,
                y: e - 125
            }),
            confettiVelocityDirection: {
                x: -1,
                y: 1
            },
            leafPosition: {
                x: 90,
                y: 144
            },
            leafRotationDirection: -1
        },
        BOTTOM_LEFT: {
            ...Z,
            getConfettiPosition: e => ({
                x: e - 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        },
        BOTTOM_RIGHT: {
            ...Z,
            getConfettiPosition: e => ({
                x: 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1
            }
        }
    }), b = 'falling-leaf', D = ['#61D5B2'], j = n(303893), U = n(808392), y = [
        j,
        U
    ];
function B() {
    return n.e('60005').then(n.t.bind(n, 931152, 19)).then(e => {
        let {default: t} = e;
        return t;
    });
}
function k(e) {
    let {
            onAnimationComplete: t,
            onClick: n,
            position: i,
            size: s
        } = e, l = o.useRef(null), [c, E] = o.useState(null), [m] = o.useState(null != i ? i : function () {
            switch (Math.floor(Math.random() * Object.keys(a).length)) {
            case 0:
                return 'TOP_LEFT';
            case 2:
                return 'TOP_RIGHT';
            case 3:
                return 'BOTTOM_LEFT';
            default:
                return 'BOTTOM_RIGHT';
            }
        }()), {
            createMultipleConfettiAt: T,
            confettiCanvas: N
        } = o.useContext(h.h), [f, p] = o.useState(null), C = (0, u.uR)(N, f), g = function (e, t) {
            if (null == e)
                return 'enter';
            switch (e) {
            case 'enter':
                return 'confetti';
            case 'confetti':
                if (v.includes(t))
                    return 'leaf_peel';
                return 'exit';
            case 'leaf_peel':
                return 'leaf_fall';
            case 'leaf_fall':
                return 'exit';
            case 'exit':
                return 'enter';
            }
        }(c, m), S = v.includes(m), A = S && 'exit' === c, x = o.useCallback(e => {
            E(e);
        }, []), O = o.useCallback(() => {
            'exit' === c && (null == t || t());
        }, [
            t,
            c
        ]), Z = o.useCallback(e => {
            l.current = e;
        }, []);
    return o.useEffect(() => {
        if ('confetti' === c) {
            let {confettiVelocityDirection: e} = P[m], t = function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : L, i = null == e ? void 0 : e.getBoundingClientRect();
                    if (null == i)
                        return {
                            x: 0,
                            y: 0
                        };
                    let a = P[t].getConfettiPosition(n);
                    return {
                        x: i.left + a.x,
                        y: i.top + a.y
                    };
                }(l.current, m, s);
            T(t.x, t.y, {
                velocity: {
                    type: 'static-random',
                    minValue: {
                        x: 10 * e.x,
                        y: 80 * e.y
                    },
                    maxValue: {
                        x: 80 * e.x,
                        y: 180 * e.y
                    }
                }
            });
        }
    }, [
        T,
        m,
        c,
        s
    ]), o.useEffect(() => {
        if (S && 'leaf_fall' === c) {
            let e = P[m].leafRotationDirection;
            C.createConfetti({
                id: ''.concat(b, '-').concat((0, _.Z)()),
                position: {
                    type: 'static',
                    value: function (e, t) {
                        let n = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == n)
                            return {
                                x: 0,
                                y: 0
                            };
                        let i = P[t];
                        return {
                            x: n.left + i.leafPosition.x,
                            y: n.top + i.leafPosition.y
                        };
                    }(l.current, m)
                },
                size: {
                    type: 'static',
                    value: 45
                },
                rotation: {
                    type: 'linear-random',
                    minValue: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    maxValue: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    minAddValue: {
                        x: 0,
                        y: 0,
                        z: 8 * e
                    },
                    maxAddValue: {
                        x: 0,
                        y: 0,
                        z: 12 * e
                    }
                }
            }, { sprite: 'TOP_LEFT' === m ? j : U });
        }
    }, [
        S,
        C,
        m,
        c
    ]), (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Ji, {
                ref: p,
                sprites: y,
                colors: D,
                spriteWidth: 45,
                spriteHeight: 45
            }),
            (0, r.jsx)(I.Clickable, {
                onClick: n,
                className: d()(R.easterEggAnimationClickTarget, {
                    [R.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === m,
                    [R.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === m,
                    [R.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === m,
                    [R.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === m
                }),
                children: (0, r.jsx)(I.SequencedLottieAnimation, {
                    animationRef: Z,
                    className: d()(R.easterEggAnimation, { [R.easterEggAnimationHideLeaf]: A }),
                    nextScene: g,
                    sceneSegments: M,
                    onScenePlay: x,
                    onSceneComplete: O,
                    importData: B,
                    pauseWhileUnfocused: !1
                })
            })
        ]
    });
}
function G(e) {
    let t, {
            message: n,
            compact: i,
            guild: a,
            usernameHook: s,
            onClickMessage: l
        } = e, c = function (e) {
            switch (e.type) {
            case x.uaV.GUILD_BOOST_TIER_1:
                return x.Eu4.TIER_1;
            case x.uaV.GUILD_BOOST_TIER_2:
                return x.Eu4.TIER_2;
            case x.uaV.GUILD_BOOST_TIER_3:
                return x.Eu4.TIER_3;
            }
            return null;
        }(n), d = (0, p.Z)(n), {
            createMultipleConfettiAt: u,
            addClickListener: _
        } = o.useContext(h.h), [E, m] = o.useState(!1), M = o.useRef(null), {reducedMotion: v} = o.useContext(I.AccessibilityPreferencesContext), L = (0, N.ZH)(n), Z = L.nick, P = s(L);
    t = null == c || null == a ? d > 1 ? O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
        username: Z,
        usernameHook: P,
        numSubscriptions: d
    }) : O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
        username: Z,
        usernameHook: P
    }) : d > 1 ? O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
        username: Z,
        usernameHook: P,
        numSubscriptions: d,
        guildName: a.name,
        newTierName: (0, A.nW)(c)
    }) : O.Z.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
        username: Z,
        usernameHook: P,
        guildName: a.name,
        newTierName: (0, A.nW)(c)
    });
    let D = o.useCallback(() => {
            if (!v.enabled)
                if (E || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null === (e = M.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (null == t)
                        return;
                    u(t.left + t.width / 2, t.top + t.height / 2);
                } else
                    m(!0);
        }, [
            u,
            v,
            E
        ]), j = o.useCallback(() => {
            m(!1);
        }, []), U = o.useCallback(() => {
            (0, f.AI)({ settingsVisible: !0 }), T.Z.open(x.oAB.POGGERMODE), m(!1);
        }, []), y = o.useCallback((e, t) => {
            (null == t ? void 0 : t.id.startsWith(b)) && U();
        }, [U]);
    o.useEffect(() => _(y));
    let B = (0, r.jsx)(I.Clickable, {
        className: R.iconWrapper,
        innerRef: M,
        onClick: l,
        children: (0, r.jsx)(C.Z, {
            className: R.icon,
            onMouseEnter: D
        })
    });
    return (0, r.jsxs)(S.Z, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, r.jsx)('div', {
                onClick: l,
                className: R.message,
                children: t
            }),
            E ? (0, r.jsx)(g.ZP, {
                children: (0, r.jsx)('div', {
                    className: R.cannonWrapper,
                    children: (0, r.jsx)(k, {
                        onAnimationComplete: j,
                        onClick: U
                    })
                })
            }) : null
        ]
    });
}
