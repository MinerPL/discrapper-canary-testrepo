var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(212433),
    i = n(481060),
    c = n(617136),
    d = n(497505),
    u = n(918701),
    p = n(302245),
    m = n(685613),
    x = n(670638),
    _ = n(341907),
    C = n(303385),
    g = n(788284),
    f = n(46140),
    E = n(689938),
    h = n(404846);
t.Z = (e) => {
    let { quest: t, expansionSpring: r, onCtxMenuSelect: S, onCtxMenuOpen: T, onCtxMenuClose: v, useReducedMotion: N, isExpanded: j, isExpansionAnimationComplete: A } = e,
        R = o.useCallback(() => {
            (0, _.openDisclosureModal)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        b = o.useCallback(() => {
            (0, u.FE)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK
            });
        }, [t]),
        B = j && A,
        I = (0, p.vI)(t, f.dr.QUESTS_BAR, !0),
        M = !1 === (0, u.KM)(t),
        O = (0, s.jsx)(i.Clickable, {
            onClick: M ? b : () => {},
            className: a()({
                [h.logo]: B,
                [h.clickable]: M
            }),
            children: (0, s.jsx)(m.Z, {
                quest: t,
                withGameTile: !1
            })
        });
    return (0, s.jsxs)(l.animated.div, {
        className: a()(h.wrapper, {
            [h.interactable]: B,
            [h.rewardHighlightWrapper]: I
        }),
        style: {
            transform: (0, l.to)(
                [
                    r.to({
                        range: [0, 1],
                        output: [I ? 8 : 4, 0]
                    })
                ],
                (e) => 'translateY('.concat(e, 'px')
            )
        },
        children: [
            (0, s.jsx)(l.animated.div, {
                className: h.opaqueExpandedBackground,
                style: {
                    opacity: r.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: r.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 5, ')'))
                }
            }),
            (0, s.jsx)(l.animated.div, {
                className: h.backgroundWrapper,
                style: {
                    opacity: r.to({
                        range: [0, 1],
                        output: [0.5, 0]
                    }),
                    borderBottomLeftRadius: r.to({
                        range: [0, 1],
                        output: [0, 8]
                    }),
                    borderBottomRightRadius: r.to({
                        range: [0, 1],
                        output: [0, 8]
                    })
                },
                children: (0, s.jsx)(g.Z, {
                    className: h.background,
                    animationClassName: h.backgroundAnimation,
                    quest: t,
                    useReducedMotion: N
                })
            }),
            I
                ? (0, s.jsx)(C.Z, {
                      quest: t,
                      expansionSpring: r,
                      isFullyExpanded: B,
                      partnerBranding: O,
                      useReducedMotion: N
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(l.animated.img, {
                              alt: '',
                              className: h.wreathIcon,
                              style: {
                                  opacity: r.to({
                                      range: [0, 1],
                                      output: [1, 0]
                                  })
                              },
                              src: n(858595)
                          }),
                          (0, s.jsx)(l.animated.div, {
                              style: {
                                  opacity: r.to({
                                      range: [0, 1],
                                      output: [1, B ? 1 : 0.8]
                                  }),
                                  transform: (0, l.to)(
                                      [
                                          r.to({
                                              range: [0, 1],
                                              output: [0, -16]
                                          }),
                                          r.to({
                                              range: [0, 1],
                                              output: [0, 8]
                                          })
                                      ],
                                      (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
                                  )
                              },
                              children: O
                          }),
                          (0, s.jsx)(l.animated.div, {
                              className: h.questAvailable,
                              style: {
                                  opacity: r.to({
                                      range: [0, 1],
                                      output: [0.7, 0]
                                  }),
                                  transform: (0, l.to)(
                                      [
                                          r.to({
                                              range: [0, 1],
                                              output: [0, -20]
                                          })
                                      ],
                                      (e) => 'translate('.concat(e, 'px')
                                  )
                              },
                              children: (0, s.jsx)(i.Text, {
                                  color: 'always-white',
                                  variant: 'text-xs/medium',
                                  className: h.questAvailableText,
                                  children: E.Z.Messages.QUEST_AVAILABLE
                              })
                          })
                      ]
                  }),
            (0, s.jsxs)(l.animated.div, {
                className: h.promotedBadgeWrapper,
                style: {
                    opacity: r.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, s.jsxs)(i.Clickable, {
                        className: h.promotedBadge,
                        onClick: R,
                        children: [
                            (0, s.jsx)(i.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: E.Z.Messages.QUESTS_PROMOTED
                            }),
                            (0, s.jsx)(i.CircleQuestionIcon, {
                                color: i.tokens.colors.WHITE,
                                className: h.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, s.jsx)(x.r, {
                        onOpen: T,
                        onClose: v,
                        onSelect: S,
                        questContent: d.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, s.jsx)(i.Clickable, {
                                ...e,
                                className: h.submenuWrapper,
                                'aria-label': E.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(i.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(h.submenuIcon, h.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
