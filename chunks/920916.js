n.r(t),
    n.d(t, {
        default: function () {
            return G;
        },
        openCollectibleRewardModal: function () {
            return k;
        }
    }),
    n(773603),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(887024),
    l = n(979554),
    u = n(442837),
    c = n(481060),
    d = n(809206),
    _ = n(607070),
    E = n(235400),
    f = n(204418),
    h = n(583434),
    p = n(530618),
    I = n(70097),
    m = n(454585),
    T = n(164946),
    S = n(369111),
    g = n(25990),
    A = n(594174),
    N = n(272008),
    O = n(497505),
    R = n(918701),
    v = n(475595),
    C = n(566078),
    L = n(114732),
    y = n(46140),
    D = n(675654),
    b = n(689938),
    M = n(837053);
function P() {
    let e = g.Z.getAllPending(),
        t = (0, T.ED)(e);
    return (0, d.Mn)(t).finally(d.si);
}
function U(e) {
    var t;
    let { transitionState: n, onClose: a, quest: l, location: d, reward: E, decoration: f, onUseNow: h, preview: I } = e,
        m = i.useRef(null),
        [T, S] = i.useState(null),
        g = i.useRef(new o.qA()),
        R = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
        C = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        y = i.useMemo(() => (0, v.fh)(l, v.Bd.HERO), [l]),
        b = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [P, U] = i.useState(!0 === I || b ? 'claimed' : 'loading');
    i.useEffect(() => {
        !b &&
            !0 !== I &&
            (0, N.QB)(l.id, O.y$.CROSS_PLATFORM, d)
                .then(() => U('claimed'))
                .catch(() => U('error'));
    }, [l, d, b, I]);
    let w = null == C || null == f || 'loading' === P;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.O_, {
                ref: S,
                className: M.confettiCanvas,
                environment: g.current
            }),
            (0, r.jsx)('div', {
                ref: m,
                children: (0, r.jsx)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.DYNAMIC,
                    className: s()(M.rootContainer, { [M.rootContainerLoading]: w }),
                    hideShadow: !0,
                    children: w
                        ? (0, r.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
                        : 'error' === P
                          ? (0, r.jsx)(L.Z, { onClose: a })
                          : (0, r.jsx)(x, {
                                quest: l,
                                user: C,
                                primaryColor: l.config.colors.primary,
                                secondaryColor: l.config.colors.secondary,
                                decoration: f,
                                decorationName: E.messages.name,
                                backgroundUrl: y.url,
                                isSaving: 'applying' === P,
                                onClose: a,
                                onConfirm: () => {
                                    U('applying'), h().finally(a);
                                }
                            })
                })
            }),
            !R &&
                !b &&
                'claimed' === P &&
                (0, r.jsx)(p.Z, {
                    confettiTarget: m.current,
                    confettiCanvas: T,
                    sprites: D.CA,
                    colors: D.Br
                })
        ]
    });
}
function w(e) {
    let { quest: t } = e,
        n = i.useMemo(() => (0, v.fh)(t, v.Bd.LOGO_TYPE, 'dark'), [t]),
        a = C.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[O.y$.CROSS_PLATFORM];
    return (0, r.jsxs)('div', {
        className: M.additionalRedemptionInstructions,
        children: [
            (0, r.jsx)('img', {
                src: n.url,
                alt: '',
                className: M.sponsorLogo
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: m.Z.parse(a, !1, { allowLinks: !0 })
            })
        ]
    });
}
function x(e) {
    let { quest: t, user: n, decoration: i, decorationName: a, primaryColor: s, secondaryColor: o, backgroundUrl: l, isSaving: u, onClose: d, onConfirm: _ } = e,
        E = (0, R.Kr)(t.config),
        h =
            null == E
                ? b.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({ decorationName: a })
                : b.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY_WITH_EXPIRATION.format({
                      decorationName: a,
                      duration: E
                  });
    return (0, r.jsxs)('div', {
        className: M.claimedRootContainer,
        children: [
            (0, r.jsxs)('div', {
                className: M.headerContainer,
                children: [
                    (0, r.jsx)(I.Z, {
                        className: M.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: l
                    }),
                    (0, r.jsxs)('div', {
                        className: M.headerForeground,
                        children: [
                            (0, r.jsx)('div', {
                                className: M.previewContainer,
                                children: (0, r.jsx)(f.Z, {
                                    user: n,
                                    guildId: null,
                                    avatarDecorationOverride: i
                                })
                            }),
                            (0, r.jsx)(c.ModalCloseButton, {
                                className: M.close,
                                withCircleBackground: !0,
                                onClick: d
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.ModalFooter, {
                className: M.footerContainer,
                separator: !1,
                children: (0, r.jsxs)('div', {
                    className: M.gradient,
                    style: { backgroundImage: 'linear-gradient(180deg, '.concat(s, ', ').concat(o, ')') },
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            className: M.heading,
                            children: b.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: M.text,
                            children: h
                        }),
                        (0, r.jsx)(c.Button, {
                            submitting: u,
                            onClick: _,
                            children: b.Z.Messages.COLLECTIBLES_USE_NOW
                        }),
                        (0, R.zK)(t, y.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, r.jsx)(w, { quest: t })
                    ]
                })
            })
        ]
    });
}
function G(e) {
    var t, n;
    let { quest: a, location: s, onClose: o, transitionState: u, preview: c } = e,
        _ = i.useMemo(() => (0, R.xn)(a.config), [a]),
        [f, p] = (function (e) {
            let { product: t, isFetching: n } = (0, h.T)(e),
                {} = (0, S.Z)({}),
                r = i.useMemo(() => {
                    if (null == t || n) return null;
                    let e = t.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
                    return null == e ? null : e;
                }, [t, n]);
            return [r, () => (null == r ? Promise.reject() : ((0, d.cV)(r), P()))];
        })(null !== (n = null == _ ? void 0 : _.skuId) && void 0 !== n ? n : null);
    if (null == _) return null;
    let I = (0, R.zK)(a, y.S7.IN_HOUSE_CONSOLE_QUEST);
    return (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || I
        ? (0, r.jsx)(U, {
              onClose: o,
              transitionState: u,
              quest: a,
              location: s,
              reward: _,
              decoration: f,
              onUseNow: p,
              preview: c
          })
        : (0, r.jsx)(E.default, {
              transitionState: u,
              onCloseModal: P,
              onClose: o,
              analyticsLocations: [],
              initialSelectedDecoration: f
          });
}
function k(e, t, i) {
    (0, c.openModalLazy)(async () => {
        let { default: a } = await Promise.resolve().then(n.bind(n, 920916));
        return (n) =>
            (0, r.jsx)(a, {
                ...n,
                quest: e,
                location: t,
                preview: i
            });
    });
}
