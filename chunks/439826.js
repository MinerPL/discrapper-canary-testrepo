n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(571269),
    n(298267);
var s,
    o,
    r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    c = n(212433),
    d = n(186325),
    u = n(780384),
    p = n(481060),
    m = n(393238),
    x = n(410030),
    _ = n(44315),
    C = n(70097),
    g = n(113434),
    f = n(497505),
    E = n(918701),
    h = n(475595),
    S = n(623249),
    T = n(78826),
    v = n(670638),
    N = n(642145),
    j = n(981631),
    A = n(689938),
    R = n(411702);
function b(e) {
    var t;
    let { quest: n, errorHints: s, warningHints: o, isDarkTheme: l } = e,
        { ref: i, height: d = 0 } = (0, m.Z)([s]),
        u = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        x = (0, g.z)(n),
        { type: C, hints: f } = a.useMemo(
            () =>
                u || x
                    ? {
                          type: 2,
                          hints: []
                      }
                    : s.length > 0
                      ? {
                            type: 0,
                            hints: s.map((e) => e.message)
                        }
                      : o.length > 0
                        ? {
                              type: 1,
                              hints: o
                          }
                        : {
                              type: 2,
                              hints: []
                          },
            [s, u, x, o]
        ),
        E = 2 !== C,
        h = (0, p.useSpring)({
            opacity: E ? 1 : 0,
            height: E ? d : 0,
            config: N.Y
        }),
        T = 0 === C ? p.CircleWarningIcon : p.CircleInformationIcon,
        v = (0, _.Lq)(j.Ilk.RED_345),
        A = 0 === C ? v : l ? p.tokens.colors.TEXT_NORMAL : p.tokens.colors.WHITE;
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(c.animated.div, {
            style: h,
            children: (0, r.jsxs)('div', {
                ref: i,
                className: R.hints,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.hintsContainer,
                        children: [
                            (0, r.jsx)(T, {
                                size: 'xs',
                                color: A
                            }),
                            (0, r.jsx)(p.Text, {
                                variant: 'text-xs/medium',
                                color: l ? 'text-muted' : 'always-white',
                                children: f.at(0)
                            })
                        ]
                    }),
                    0 === C &&
                        (0, r.jsx)(p.Button, {
                            onClick: () =>
                                (0, S.openConsoleConnectionErrorsModal)({
                                    questId: n.id,
                                    errorHints: s
                                }),
                            size: p.ButtonSizes.MIN,
                            look: p.ButtonLooks.LINK,
                            color: p.ButtonColors.CUSTOM,
                            style: { color: (0, _.Lq)(j.Ilk.BLUE_345) },
                            children: 'See Details'
                        })
                ]
            })
        })
    });
}
function B(e) {
    var t;
    let { quest: n, isHovering: s, errorHints: o, warningHints: l, onCtxMenuClose: c, onCtxMenuOpen: m, onCtxMenuSelect: _ } = e,
        S = a.useMemo(() => (0, h.fh)(n, h.Bd.HERO), [n]),
        N = a.useMemo(() => (0, h.fh)(n, h.Bd.LOGO_TYPE, 'dark'), [n]),
        B = (0, x.ZP)(),
        I = ((0, u.wj)(B) ? j.BRd.DARK : j.BRd.LIGHT) === j.BRd.DARK,
        M = a.useContext(d.S).reducedMotion.enabled,
        O = (0, E.Mi)(n, f.jn.GIFT_INVENTORY_FOR_YOU),
        y = (0, g.tP)(n),
        L = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
        w = a.useRef(s),
        k = a.useRef(null),
        U = (0, g.B6)(n.config.expiresAt, {
            month: 'numeric',
            day: 'numeric'
        });
    return (
        a.useEffect(() => {
            if (S.isAnimated && null != k.current)
                return (
                    w.current !== s && (s && !M ? k.current.play() : (k.current.pause(), (k.current.currentTime = 0))),
                    (w.current = s),
                    () => {
                        var e;
                        null === (e = k.current) || void 0 === e || e.pause();
                    }
                );
        }, [s, S, M]),
        (0, r.jsxs)('div', {
            className: R.container,
            children: [
                (0, r.jsx)('div', {
                    className: R.heroAssetWrapper,
                    children: S.isAnimated
                        ? (0, r.jsx)(T.Fl, {
                              id: 'QuestTileBanner_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (k.current = e.current),
                                      (0, r.jsx)(C.Z, {
                                          ref: e,
                                          autoPlay: !M && s,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: R.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: S.url,
                                              type: null !== (t = S.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(T.Fl, {
                              id: 'QuestTileBanner',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: ''.concat(n.config.messages.questName),
                                      className: R.heroAsset,
                                      src: S.url
                                  })
                          })
                }),
                (0, r.jsx)('div', {
                    className: i()(R.overlay, {
                        [R.darkThemeGradient]: I,
                        [R.lightThemeGradient]: !I
                    })
                }),
                (0, r.jsxs)('div', {
                    className: R.positionContentOverBackground,
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.contents,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: R.topRow,
                                    children: [
                                        O &&
                                            !y &&
                                            !L &&
                                            (0, r.jsx)('div', {
                                                className: R.pill,
                                                children: (0, r.jsx)(p.Text, {
                                                    variant: 'eyebrow',
                                                    color: 'always-white',
                                                    className: R.eyebrowText,
                                                    children: A.Z.Messages.RECOMMENDED
                                                })
                                            }),
                                        (0, r.jsx)(v.r, {
                                            onOpen: m,
                                            onClose: c,
                                            onSelect: _,
                                            questContent: f.jn.QUEST_HOME_DESKTOP,
                                            quest: n,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: (e) =>
                                                (0, r.jsx)(p.Clickable, {
                                                    ...e,
                                                    className: R.submenuWrapper,
                                                    'aria-label': A.Z.Messages.ACTIONS,
                                                    children: (0, r.jsx)(p.MoreHorizontalIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: i()(R.submenuIcon)
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(T.Fl, {
                                    id: 'QuestPartnerBranding_gameLogotype',
                                    children: (e) =>
                                        (0, r.jsx)('img', {
                                            ref: e,
                                            className: R.partnerBranding,
                                            alt: n.config.messages.gameTitle,
                                            src: N.url
                                        })
                                }),
                                (0, r.jsxs)('div', {
                                    className: R.bottomRow,
                                    children: [
                                        (0, r.jsx)(p.Text, {
                                            variant: 'text-sm/medium',
                                            color: I ? 'text-muted' : 'always-white',
                                            children: A.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: n.config.messages.gamePublisher })
                                        }),
                                        y || L
                                            ? null
                                            : (0, r.jsx)(p.Text, {
                                                  variant: 'text-sm/medium',
                                                  color: I ? 'text-muted' : 'always-white',
                                                  children: A.Z.Messages.QUESTS_TILE_BANNER_ENDS_DATE.format({ expiryDate: U })
                                              })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)(b, {
                            quest: n,
                            errorHints: o,
                            warningHints: l,
                            isDarkTheme: I
                        })
                    ]
                })
            ]
        })
    );
}
((o = s || (s = {}))[(o.ERROR = 0)] = 'ERROR'), (o[(o.WARNING = 1)] = 'WARNING'), (o[(o.NONE = 2)] = 'NONE');
