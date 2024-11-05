n.r(t),
    n.d(t, {
        default: function () {
            return G;
        },
        openCollectibleRewardModal: function () {
            return B;
        }
    }),
    n(773603),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(703533),
    l = n(979554),
    u = n(442837),
    c = n(481060),
    d = n(809206),
    f = n(607070),
    _ = n(235400),
    h = n(204418),
    p = n(583434),
    m = n(530618),
    g = n(70097),
    E = n(454585),
    v = n(164946),
    I = n(369111),
    S = n(25990),
    T = n(594174),
    b = n(960048),
    y = n(272008),
    A = n(497505),
    N = n(918701),
    C = n(475595),
    R = n(566078),
    O = n(114732),
    D = n(46140),
    L = n(675654),
    x = n(388032),
    w = n(837053);
function M() {
    let e = S.Z.getAllPending(),
        t = (0, v.ED)(e);
    return (0, d.Mn)(t).finally(d.si);
}
function P(e) {
    var t;
    let { transitionState: n, onClose: a, quest: l, location: d, reward: _, decoration: h, onUseNow: p, preview: g } = e,
        E = i.useRef(null),
        [v, I] = i.useState(null),
        S = i.useRef(new o.qA()),
        b = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        N = (0, u.e7)([T.default], () => T.default.getCurrentUser()),
        R = i.useMemo(() => (0, C.fh)(l, C.eC.HERO), [l]),
        D = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        [x, M] = i.useState(!0 === g || D ? 'claimed' : 'loading');
    i.useEffect(() => {
        !D &&
            !0 !== g &&
            (0, y.QB)(l.id, A.y$.CROSS_PLATFORM, d)
                .then(() => M('claimed'))
                .catch(() => M('error'));
    }, [l, d, D, g]);
    let P = null == N || null == h || 'loading' === x;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.O_, {
                ref: I,
                className: w.confettiCanvas,
                environment: S.current
            }),
            (0, r.jsx)('div', {
                ref: E,
                children: (0, r.jsx)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.DYNAMIC,
                    className: s()(w.rootContainer, { [w.rootContainerLoading]: P }),
                    hideShadow: !0,
                    children: P
                        ? (0, r.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
                        : 'error' === x
                          ? (0, r.jsx)(O.Z, { onClose: a })
                          : (0, r.jsx)(U, {
                                quest: l,
                                user: N,
                                primaryColor: l.config.colors.primary,
                                secondaryColor: l.config.colors.secondary,
                                decoration: h,
                                decorationName: _.messages.name,
                                backgroundUrl: R.url,
                                isSaving: 'applying' === x,
                                onClose: a,
                                onConfirm: () => {
                                    M('applying'), p().finally(a);
                                }
                            })
                })
            }),
            !b &&
                !D &&
                'claimed' === x &&
                (0, r.jsx)(m.Z, {
                    confettiTarget: E.current,
                    confettiCanvas: v,
                    sprites: L.CA,
                    colors: L.Br
                })
        ]
    });
}
function k(e) {
    let { quest: t } = e,
        n = i.useMemo(() => (0, C.fh)(t, C.eC.LOGO_TYPE, 'dark'), [t]),
        a = R.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[A.y$.CROSS_PLATFORM];
    return (0, r.jsxs)('div', {
        className: w.additionalRedemptionInstructions,
        children: [
            (0, r.jsx)('img', {
                src: n.url,
                alt: '',
                className: w.sponsorLogo
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'always-white',
                children: E.Z.parse(a, !1, { allowLinks: !0 })
            })
        ]
    });
}
function U(e) {
    let { quest: t, user: n, decoration: i, decorationName: a, primaryColor: s, secondaryColor: o, backgroundUrl: l, isSaving: u, onClose: d, onConfirm: f } = e,
        _ = (0, N.Kr)(t.config),
        p =
            null == _
                ? x.intl.formatToPlainString(x.t.l9uXLy, { decorationName: a })
                : x.intl.formatToPlainString(x.t.tTlItr, {
                      decorationName: a,
                      duration: _
                  });
    return (0, r.jsxs)('div', {
        className: w.claimedRootContainer,
        children: [
            (0, r.jsxs)('div', {
                className: w.headerContainer,
                children: [
                    (0, r.jsx)(g.Z, {
                        className: w.headerBackground,
                        autoPlay: !1,
                        loop: !1,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        poster: l
                    }),
                    (0, r.jsxs)('div', {
                        className: w.headerForeground,
                        children: [
                            (0, r.jsx)('div', {
                                className: w.previewContainer,
                                children: (0, r.jsx)(h.Z, {
                                    user: n,
                                    guildId: null,
                                    avatarDecorationOverride: i
                                })
                            }),
                            (0, r.jsx)(c.ModalCloseButton, {
                                className: w.close,
                                withCircleBackground: !0,
                                onClick: d
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.ModalFooter, {
                className: w.footerContainer,
                separator: !1,
                children: (0, r.jsxs)('div', {
                    className: w.gradient,
                    style: { backgroundImage: 'linear-gradient(180deg, '.concat(s, ', ').concat(o, ')') },
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: 'heading-lg/bold',
                            color: 'always-white',
                            className: w.heading,
                            children: x.intl.string(x.t['0/Yz+f'])
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: w.text,
                            children: p
                        }),
                        (0, r.jsx)(c.Button, {
                            submitting: u,
                            onClick: f,
                            children: x.intl.string(x.t.MAS7uL)
                        }),
                        (0, N.zK)(t, D.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, r.jsx)(k, { quest: t })
                    ]
                })
            })
        ]
    });
}
function G(e) {
    var t, n;
    let { quest: a, location: s, onClose: o, transitionState: u, preview: c } = e,
        f = i.useMemo(() => (0, N.xn)(a.config), [a]),
        [h, m] = (function (e) {
            let { product: t, isFetching: n } = (0, p.T)(e),
                {} = (0, I.Z)({}),
                r = i.useMemo(() => {
                    if (null == t || n) return null;
                    let e = t.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
                    return null == e ? null : e;
                }, [t, n]);
            return [r, () => (null == r ? (b.Z.addBreadcrumb({ message: 'Error saving avatar decoration; it is null' }), Promise.reject()) : ((0, d.cV)(r), M()))];
        })(null !== (n = null == f ? void 0 : f.skuId) && void 0 !== n ? n : null);
    if (null == f) return null;
    let g = (0, N.zK)(a, D.S7.IN_HOUSE_CONSOLE_QUEST);
    return (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || g
        ? (0, r.jsx)(P, {
              onClose: o,
              transitionState: u,
              quest: a,
              location: s,
              reward: f,
              decoration: h,
              onUseNow: m,
              preview: c
          })
        : (0, r.jsx)(_.default, {
              transitionState: u,
              onCloseModal: M,
              onClose: o,
              analyticsLocations: [],
              initialSelectedDecoration: h
          });
}
function B(e, t, i) {
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
