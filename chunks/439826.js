n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(571269),
    n(298267);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(567526),
    o = n(186325),
    c = n(780384),
    d = n(481060),
    u = n(393238),
    _ = n(410030),
    h = n(70097),
    E = n(113434),
    m = n(497505),
    I = n(918701),
    g = n(78826),
    p = n(670638),
    T = n(642145),
    S = n(981631),
    f = n(689938),
    C = n(222307);
function N(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: r } = e,
        { ref: o, height: c = 0 } = (0, u.Z)([s]),
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        h = (0, E.z)(n),
        m = !_ && !h && s.length > 0,
        I = !_ && !h && r.length > 0 && 0 === s.length,
        [g, p] = a.useState(() => s),
        [S, f] = a.useState(() => r),
        N = (0, d.useSpring)({
            opacity: m ? 1 : 0,
            height: m ? c : 0,
            config: T.Y,
            onStart() {
                m && p(s);
            },
            onRest() {
                !m && p(s);
            }
        }),
        A = (0, d.useSpring)({
            opacity: I ? 1 : 0,
            height: I ? c : 0,
            config: T.Y,
            onStart() {
                I && f(r);
            },
            onRest() {
                !I && f(r);
            }
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.animated.div, {
                style: N,
                children: (0, i.jsxs)('div', {
                    ref: o,
                    className: C.hints,
                    children: [
                        (0, i.jsx)(d.CircleWarningIcon, {
                            size: 'xs',
                            color: d.tokens.colors.TEXT_DANGER
                        }),
                        (0, i.jsx)('div', {
                            className: C.hintsContainer,
                            children: (0, i.jsx)(d.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: g.map((e) => e.message).join(' ')
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(l.animated.div, {
                style: A,
                children: (0, i.jsxs)('div', {
                    ref: o,
                    className: C.hints,
                    children: [
                        (0, i.jsx)(d.CircleInformationIcon, {
                            size: 'xs',
                            color: d.tokens.colors.TEXT_NORMAL
                        }),
                        (0, i.jsx)('div', {
                            className: C.hintsContainer,
                            children: (0, i.jsx)(d.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: S.at(0)
                            })
                        })
                    ]
                })
            })
        ]
    });
}
function A(e) {
    var t;
    let { quest: n, isHovering: s, errorHints: l, warningHints: u, onCtxMenuClose: T, onCtxMenuOpen: A, onCtxMenuSelect: v } = e,
        Z = (0, I.j8)(n),
        L = (0, _.ZP)(),
        O = (0, c.wj)(L) ? S.BRd.DARK : S.BRd.LIGHT,
        R = O === S.BRd.DARK,
        x = a.useMemo(() => (0, I.nP)(n.config.assets.hero), [n]),
        b = a.useContext(o.S).reducedMotion.enabled,
        P = (0, I.Mi)(n, m.jn.GIFT_INVENTORY_FOR_YOU),
        M = (0, E.tP)(n),
        D = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        y = a.useRef(s),
        j = a.useRef(null),
        U = (0, E.B6)(n.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        });
    return (
        a.useEffect(() => {
            if (x && null != j.current)
                return (
                    y.current !== s && (s ? j.current.play() : (j.current.pause(), (j.current.currentTime = 0))),
                    (y.current = s),
                    () => {
                        var e;
                        null === (e = j.current) || void 0 === e || e.pause();
                    }
                );
        }, [s, x]),
        (0, i.jsxs)('div', {
            className: C.container,
            children: [
                (0, i.jsx)('div', {
                    className: C.heroAssetWrapper,
                    children:
                        x && !b
                            ? (0, i.jsx)(g.Fl, {
                                  id: 'QuestTileBanner_heroAnimated',
                                  children: (e) => (
                                      null != e.current && (j.current = e.current),
                                      (0, i.jsx)(h.Z, {
                                          ref: e,
                                          autoPlay: !b && s,
                                          loop: !0,
                                          playsInline: !0,
                                          className: C.heroAsset,
                                          controls: !1,
                                          children: (0, i.jsx)('source', {
                                              src: Z,
                                              type: (0, I.mN)(Z)
                                          })
                                      })
                                  )
                              })
                            : (0, i.jsx)(g.Fl, {
                                  id: 'QuestTileBanner',
                                  children: (e) =>
                                      (0, i.jsx)('img', {
                                          ref: e,
                                          alt: ''.concat(n.config.messages.questName),
                                          className: C.heroAsset,
                                          src: Z
                                      })
                              })
                }),
                (0, i.jsx)('div', {
                    className: r()(C.overlay, {
                        [C.darkThemeGradient]: R,
                        [C.lightThemeGradient]: !R
                    })
                }),
                (0, i.jsxs)('div', {
                    className: C.positionContentOverBackground,
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.contents,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: C.topRow,
                                    children: [
                                        P &&
                                            !M &&
                                            !D &&
                                            (0, i.jsx)('div', {
                                                className: C.pill,
                                                children: (0, i.jsx)(d.Text, {
                                                    variant: 'eyebrow',
                                                    color: 'always-white',
                                                    className: C.eyebrowText,
                                                    children: f.Z.Messages.RECOMMENDED
                                                })
                                            }),
                                        (0, i.jsx)(p.r, {
                                            onOpen: A,
                                            onClose: T,
                                            onSelect: v,
                                            questContent: m.jn.QUEST_HOME_DESKTOP,
                                            quest: n,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: (e) =>
                                                (0, i.jsx)(d.Clickable, {
                                                    ...e,
                                                    className: C.submenuWrapper,
                                                    'aria-label': f.Z.Messages.ACTIONS,
                                                    children: (0, i.jsx)(d.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: r()(C.submenuIcon)
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(g.Fl, {
                                    id: 'QuestPartnerBranding_gameLogotype',
                                    children: (e) =>
                                        (0, i.jsx)('img', {
                                            ref: e,
                                            className: C.partnerBranding,
                                            alt: n.config.messages.gameTitle,
                                            src: (0, I.Gs)(n, O)
                                        })
                                }),
                                (0, i.jsxs)('div', {
                                    className: C.bottomRow,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            children: f.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: n.config.messages.gamePublisher })
                                        }),
                                        M || D
                                            ? null
                                            : (0, i.jsx)(d.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-muted',
                                                  children: f.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: U })
                                              })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsx)(N, {
                            quest: n,
                            errorHints: l,
                            warningHints: u
                        })
                    ]
                })
            ]
        })
    );
}
