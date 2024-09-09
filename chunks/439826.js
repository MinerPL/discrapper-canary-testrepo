n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(571269),
    n(298267);
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(180081),
    d = n(186325),
    u = n(780384),
    _ = n(481060),
    E = n(393238),
    h = n(410030),
    m = n(70097),
    I = n(113434),
    g = n(497505),
    p = n(918701),
    T = n(623249),
    S = n(78826),
    C = n(670638),
    f = n(642145),
    N = n(981631),
    A = n(689938),
    v = n(222307);
function L(e) {
    var t;
    let { quest: n, errorHints: i, warningHints: a } = e,
        { ref: l, height: o = 0 } = (0, E.Z)([i]),
        d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        u = (0, I.z)(n),
        { type: h, hints: m } = r.useMemo(
            () =>
                d || u
                    ? {
                          type: 2,
                          hints: []
                      }
                    : i.length > 0
                      ? {
                            type: 0,
                            hints: i.map((e) => e.message)
                        }
                      : a.length > 0
                        ? {
                              type: 1,
                              hints: a
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [i, d, u, a]
        ),
        g = 2 !== h,
        p = (0, _.useSpring)({
            opacity: g ? 1 : 0,
            height: g ? o : 0,
            config: f.Y
        }),
        S = 0 === h ? _.CircleWarningIcon : _.CircleInformationIcon,
        C = 0 === h ? _.tokens.colors.TEXT_DANGER : _.tokens.colors.TEXT_NORMAL;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsx)(c.animated.div, {
            style: p,
            children: (0, s.jsxs)('div', {
                ref: l,
                className: v.hints,
                children: [
                    (0, s.jsxs)('div', {
                        className: v.hintsContainer,
                        children: [
                            (0, s.jsx)(S, {
                                size: 'xs',
                                color: C
                            }),
                            (0, s.jsx)(_.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: m.at(0)
                            })
                        ]
                    }),
                    0 === h &&
                        (0, s.jsx)(_.Button, {
                            onClick: () =>
                                (0, T.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: i
                                }),
                            look: _.ButtonLooks.LINK,
                            color: _.ButtonColors.LINK,
                            size: _.ButtonSizes.MIN,
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function Z(e) {
    var t;
    let { quest: n, isHovering: i, errorHints: a, warningHints: l, onCtxMenuClose: c, onCtxMenuOpen: E, onCtxMenuSelect: T } = e,
        f = (0, p.j8)(n),
        Z = (0, h.ZP)(),
        R = (0, u.wj)(Z) ? N.BRd.DARK : N.BRd.LIGHT,
        O = R === N.BRd.DARK,
        x = r.useMemo(() => (0, p.nP)(n.config.assets.hero), [n]),
        b = r.useContext(d.S).reducedMotion.enabled,
        P = (0, p.Mi)(n, g.jn.GIFT_INVENTORY_FOR_YOU),
        M = (0, I.tP)(n),
        D = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        y = r.useRef(i),
        j = r.useRef(null),
        U = (0, I.B6)(n.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        });
    return (
        r.useEffect(() => {
            if (x && null != j.current)
                return (
                    y.current !== i && (i && !b ? j.current.play() : (j.current.pause(), (j.current.currentTime = 0))),
                    (y.current = i),
                    () => {
                        var e;
                        null === (e = j.current) || void 0 === e || e.pause();
                    }
                );
        }, [i, x, b]),
        (0, s.jsxs)('div', {
            className: v.container,
            children: [
                (0, s.jsx)('div', {
                    className: v.heroAssetWrapper,
                    children: x
                        ? (0, s.jsx)(S.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => (
                                  null != e.current && (j.current = e.current),
                                  (0, s.jsx)(m.Z, {
                                      ref: e,
                                      autoPlay: !b && i,
                                      loop: !0,
                                      muted: !0,
                                      playsInline: !0,
                                      className: v.heroAsset,
                                      controls: !1,
                                      children: (0, s.jsx)('source', {
                                          src: f,
                                          type: (0, p.mN)(f)
                                      })
                                  })
                              )
                          })
                        : (0, s.jsx)(S.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, s.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(n.config.messages.questName),
                                      className: v.heroAsset,
                                      src: f
                                  })
                          })
                }),
                (0, s.jsx)('div', {
                    className: o()(v.overlay, {
                        [v.darkThemeGradient]: O,
                        [v.lightThemeGradient]: !O
                    })
                }),
                (0, s.jsxs)('div', {
                    className: v.positionContentOverBackground,
                    children: [
                        (0, s.jsxs)('div', {
                            className: v.contents,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: v.topRow,
                                    children: [
                                        P &&
                                            !M &&
                                            !D &&
                                            (0, s.jsx)('div', {
                                                className: v.pill,
                                                children: (0, s.jsx)(_.Text, {
                                                    variant: 'eyebrow',
                                                    color: 'always-white',
                                                    className: v.eyebrowText,
                                                    children: A.Z.Messages.RECOMMENDED
                                                })
                                            }),
                                        (0, s.jsx)(C.r, {
                                            onOpen: E,
                                            onClose: c,
                                            onSelect: T,
                                            questContent: g.jn.QUEST_HOME_DESKTOP,
                                            quest: n,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: (e) =>
                                                (0, s.jsx)(_.Clickable, {
                                                    ...e,
                                                    className: v.submenuWrapper,
                                                    'aria-label': A.Z.Messages.ACTIONS,
                                                    children: (0, s.jsx)(_.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: o()(v.submenuIcon)
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
                                            className: v.partnerBranding,
                                            alt: n.config.messages.gameTitle,
                                            src: (0, p.Gs)(n, R)
                                        })
                                }),
                                (0, s.jsxs)('div', {
                                    className: v.bottomRow,
                                    children: [
                                        (0, s.jsx)(_.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-muted',
                                            children: A.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: n.config.messages.gamePublisher })
                                        }),
                                        M || D
                                            ? null
                                            : (0, s.jsx)(_.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: 'text-muted',
                                                  children: A.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: U })
                                              })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(L, {
                            quest: n,
                            errorHints: a,
                            warningHints: l
                        })
                    ]
                })
            ]
        })
    );
}
((a = i || (i = {}))[(a.ERROR = 0)] = 'ERROR'), (a[(a.WARNING = 1)] = 'WARNING'), (a[(a.NONE = 2)] = 'NONE');
