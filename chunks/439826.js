n.d(t, {
    Z: function () {
        return q;
    }
}),
    n(571269),
    n(298267);
var o,
    r,
    s = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    c = n(100621),
    d = n(186325),
    u = n(780384),
    p = n(481060),
    m = n(393238),
    x = n(410030),
    g = n(44315),
    f = n(70097),
    h = n(617136),
    C = n(272008),
    v = n(113434),
    j = n(497505),
    _ = n(918701),
    E = n(475595),
    b = n(720293),
    N = n(623249),
    S = n(78826),
    T = n(670638),
    B = n(341907),
    A = n(642145),
    y = n(981631),
    R = n(388032),
    w = n(411702);
function I(e) {
    var t;
    let { quest: n, errorHints: o, warningHints: r, isDarkTheme: i } = e,
        { ref: l, height: d = 0 } = (0, m.Z)([o]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        x = (0, v.z)(n),
        { type: f, hints: h } = a.useMemo(
            () =>
                u || x
                    ? {
                          type: 2,
                          hints: []
                      }
                    : o.length > 0
                      ? {
                            type: 0,
                            hints: o.map((e) => e.message)
                        }
                      : r.length > 0
                        ? {
                              type: 1,
                              hints: r
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [o, u, x, r]
        ),
        C = 2 !== f,
        j = (0, p.useSpring)({
            opacity: C ? 1 : 0,
            height: C ? d : 0,
            config: A.Y
        }),
        _ = 0 === f ? p.CircleWarningIcon : p.CircleInformationIcon,
        E = (0, g.Lq)(y.Ilk.RED_345),
        b = 0 === f ? E : i ? p.tokens.colors.TEXT_NORMAL : p.tokens.colors.WHITE;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsx)(c.animated.div, {
            style: j,
            children: (0, s.jsxs)('div', {
                ref: l,
                className: w.hints,
                children: [
                    (0, s.jsxs)('div', {
                        className: w.hintsContainer,
                        children: [
                            (0, s.jsx)(_, {
                                size: 'xs',
                                color: b
                            }),
                            (0, s.jsx)(p.Text, {
                                variant: 'text-xs/medium',
                                color: i ? 'text-muted' : 'always-white',
                                children: h.at(0)
                            })
                        ]
                    }),
                    0 === f &&
                        (0, s.jsx)(p.Button, {
                            onClick: () =>
                                (0, N.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: o
                                }),
                            size: p.ButtonSizes.MIN,
                            look: p.ButtonLooks.LINK,
                            color: p.ButtonColors.CUSTOM,
                            style: { color: (0, g.Lq)(y.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function k(e) {
    var t;
    let { asset: n, reducedMotionEnabled: o, visible: r } = e,
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            null != i.current && r && i.current.play();
        }, [r]),
        (0, s.jsx)(f.Z, {
            ref: i,
            autoPlay: !o,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: l()(w.videoOverlay, { [w.videoOverlayVisible]: r }),
            controls: !1,
            children: (0, s.jsx)('source', {
                src: n.url,
                type: null !== (t = n.mimetype) && void 0 !== t ? t : void 0
            })
        })
    );
}
function q(e) {
    var t, n, o;
    let { quest: r, isHovering: i, errorHints: c, warningHints: m, onCtxMenuClose: g, onCtxMenuOpen: N, onCtxMenuSelect: A } = e,
        q = (0, _.cr)(r),
        P = a.useMemo(() => (0, E.fh)(r, E.eC.HERO), [r]),
        O = a.useMemo(() => (0, E.fh)(r, E.eC.LOGO_TYPE, 'dark'), [r]),
        M = (0, x.ZP)(),
        W = ((0, u.wj)(M) ? y.BRd.DARK : y.BRd.LIGHT) === y.BRd.DARK,
        L = a.useContext(d.S).reducedMotion.enabled,
        Q = (0, _.Mi)(r, j.jn.GIFT_INVENTORY_FOR_YOU),
        Z = (0, v.tP)(r),
        D = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        H = a.useRef(i),
        U = a.useRef(null),
        V = (0, v.B6)(r.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        }),
        z = (null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        F = (null === (o = r.userStatus) || void 0 === o ? void 0 : o.completedAt) != null,
        G = a.useCallback(() => {
            if (!!q)
                (0, C.AH)(r.id, {
                    questContent: j.jn.QUEST_HOME_DESKTOP,
                    questContentCTA: h.jZ.ACCEPT_QUEST
                }),
                    (0, B.openVideoQuestModal)(r);
        }, [q, r]);
    a.useEffect(() => {
        if (P.isAnimated && null != U.current)
            return (
                H.current !== i && (i && !L ? U.current.play() : (U.current.pause(), (U.current.currentTime = 0))),
                (H.current = i),
                () => {
                    var e;
                    null === (e = U.current) || void 0 === e || e.pause();
                }
            );
    }, [i, P, L]);
    let K = a.useMemo(() => (0, b.z)(b.i.QUEST_HOME_VIDEO, r), [r]);
    return (0, s.jsxs)('div', {
        className: w.container,
        children: [
            (0, s.jsxs)('div', {
                className: w.heroAssetWrapper,
                children: [
                    P.isAnimated
                        ? (0, s.jsx)(S.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (U.current = e.current),
                                      (0, s.jsx)(f.Z, {
                                          ref: e,
                                          autoPlay: !L && i,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: w.heroAsset,
                                          controls: !1,
                                          children: (0, s.jsx)('source', {
                                              src: P.url,
                                              type: null !== (t = P.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, s.jsx)(S.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, s.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(r.config.messages.questName),
                                      className: w.heroAsset,
                                      src: P.url
                                  })
                          }),
                    q &&
                        !L &&
                        null != K &&
                        (0, s.jsx)(k, {
                            asset: K,
                            reducedMotionEnabled: L,
                            visible: i
                        })
                ]
            }),
            (0, s.jsx)('div', {
                className: l()(w.overlay, {
                    [w.darkThemeGradient]: W,
                    [w.lightThemeGradient]: !W
                })
            }),
            (0, s.jsxs)('div', {
                className: w.positionContentOverBackground,
                children: [
                    (0, s.jsxs)('div', {
                        className: w.contents,
                        children: [
                            (0, s.jsxs)('div', {
                                className: w.topRow,
                                children: [
                                    Q &&
                                        !Z &&
                                        !D &&
                                        (0, s.jsx)('div', {
                                            className: w.pill,
                                            children: (0, s.jsx)(p.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: w.eyebrowText,
                                                children: R.intl.string(R.t.WThgAQ)
                                            })
                                        }),
                                    q &&
                                        (0, s.jsx)(p.Tooltip, {
                                            text: F ? 'Watch again' : z ? 'Continue watching' : 'Start video quest',
                                            children: (e) =>
                                                (0, s.jsx)(p.Clickable, {
                                                    ...e,
                                                    className: w.utilButtonWrapper,
                                                    'aria-label': R.intl.string(R.t.RscU7O),
                                                    onClick: G,
                                                    children: (0, s.jsx)(p.PlayIcon, { className: w.utilButtonIcon })
                                                })
                                        }),
                                    (0, s.jsx)(T.r, {
                                        onOpen: N,
                                        onClose: g,
                                        onSelect: A,
                                        questContent: j.jn.QUEST_HOME_DESKTOP,
                                        quest: r,
                                        hideLearnMore: !0,
                                        shouldShowDisclosure: !0,
                                        showShareLink: !0,
                                        children: (e) =>
                                            (0, s.jsx)(p.Clickable, {
                                                ...e,
                                                className: w.utilButtonWrapper,
                                                'aria-label': R.intl.string(R.t.DEoVWV),
                                                children: (0, s.jsx)(p.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: l()(w.utilButtonIcon)
                                                })
                                            })
                                    })
                                ]
                            }),
                            (0, s.jsx)(S.Fl, {
                                id: 'QuestPartnerBranding_gameLogotype',
                                children: (e) =>
                                    (0, s.jsx)('img', {
                                        ref: e,
                                        className: w.partnerBranding,
                                        alt: r.config.messages.gameTitle,
                                        src: O.url
                                    })
                            }),
                            (0, s.jsxs)('div', {
                                className: w.bottomRow,
                                children: [
                                    (0, s.jsx)(p.Text, {
                                        variant: 'text-sm/medium',
                                        color: W ? 'text-muted' : 'always-white',
                                        children: R.intl.format(R.t.buEvBw, { brandName: r.config.messages.gamePublisher })
                                    }),
                                    Z || D
                                        ? null
                                        : (0, s.jsx)(p.Text, {
                                              variant: 'text-sm/medium',
                                              color: W ? 'text-muted' : 'always-white',
                                              children: R.intl.format(R.t['7D8r4O'], { expiryDate: V })
                                          })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsx)(I, {
                        quest: r,
                        errorHints: c,
                        warningHints: m,
                        isDarkTheme: W
                    })
                ]
            })
        ]
    });
}
((r = o || (o = {}))[(r.ERROR = 0)] = 'ERROR'), (r[(r.WARNING = 1)] = 'WARNING'), (r[(r.NONE = 2)] = 'NONE');
