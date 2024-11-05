var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(100621),
    l = n(481060),
    c = n(617136),
    d = n(497505),
    u = n(918701),
    p = n(302245),
    m = n(685613),
    x = n(670638),
    g = n(341907),
    f = n(303385),
    h = n(788284),
    C = n(46140),
    v = n(388032),
    j = n(404846);
t.Z = (e) => {
    let { quest: t, expansionSpring: s, onCtxMenuSelect: _, onCtxMenuOpen: E, onCtxMenuClose: b, useReducedMotion: N, isExpanded: S, isExpansionAnimationComplete: T } = e,
        B = r.useCallback(() => {
            (0, g.openDisclosureModal)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE
            });
        }, [t]),
        A = r.useCallback(() => {
            (0, u.FE)(t, {
                content: d.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK
            });
        }, [t]),
        y = S && T,
        R = (0, p.vI)(t, C.dr.QUESTS_BAR, !0),
        w = (0, o.jsx)(l.Clickable, {
            onClick: A,
            className: a()({ [j.logo]: y }),
            children: (0, o.jsx)(m.Z, {
                quest: t,
                withGameTile: !1
            })
        });
    return (0, o.jsxs)(i.animated.div, {
        className: a()(j.wrapper, {
            [j.interactable]: y,
            [j.rewardHighlightWrapper]: R
        }),
        style: {
            transform: (0, i.to)(
                [
                    s.to({
                        range: [0, 1],
                        output: [R ? 8 : 4, 0]
                    })
                ],
                (e) => 'translateY('.concat(e, 'px')
            )
        },
        children: [
            (0, o.jsx)(i.animated.div, {
                className: j.opaqueExpandedBackground,
                style: {
                    opacity: s.to({
                        range: [0, 1],
                        output: [0, 1]
                    }),
                    backdropFilter: s.to([0, 1], [0, 1]).to((e) => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 5, ')'))
                }
            }),
            (0, o.jsx)(i.animated.div, {
                className: j.backgroundWrapper,
                style: {
                    opacity: s.to({
                        range: [0, 1],
                        output: [0.5, 0]
                    }),
                    borderBottomLeftRadius: s.to({
                        range: [0, 1],
                        output: [0, 8]
                    }),
                    borderBottomRightRadius: s.to({
                        range: [0, 1],
                        output: [0, 8]
                    })
                },
                children: (0, o.jsx)(h.Z, {
                    className: j.background,
                    animationClassName: j.backgroundAnimation,
                    quest: t,
                    useReducedMotion: N
                })
            }),
            R
                ? (0, o.jsx)(f.Z, {
                      quest: t,
                      expansionSpring: s,
                      isFullyExpanded: y,
                      partnerBranding: w,
                      useReducedMotion: N
                  })
                : (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)(i.animated.img, {
                              alt: '',
                              className: j.wreathIcon,
                              style: {
                                  opacity: s.to({
                                      range: [0, 1],
                                      output: [1, 0]
                                  })
                              },
                              src: n(858595)
                          }),
                          (0, o.jsx)(i.animated.div, {
                              style: {
                                  opacity: s.to({
                                      range: [0, 1],
                                      output: [1, y ? 1 : 0.8]
                                  }),
                                  transform: (0, i.to)(
                                      [
                                          s.to({
                                              range: [0, 1],
                                              output: [0, -16]
                                          }),
                                          s.to({
                                              range: [0, 1],
                                              output: [0, 8]
                                          })
                                      ],
                                      (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
                                  )
                              },
                              children: w
                          }),
                          (0, o.jsx)(i.animated.div, {
                              className: j.questAvailable,
                              style: {
                                  opacity: s.to({
                                      range: [0, 1],
                                      output: [0.7, 0]
                                  }),
                                  transform: (0, i.to)(
                                      [
                                          s.to({
                                              range: [0, 1],
                                              output: [0, -20]
                                          })
                                      ],
                                      (e) => 'translate('.concat(e, 'px')
                                  )
                              },
                              children: (0, o.jsx)(l.Text, {
                                  color: 'always-white',
                                  variant: 'text-xs/medium',
                                  className: j.questAvailableText,
                                  children: v.intl.string(v.t.g8zcER)
                              })
                          })
                      ]
                  }),
            (0, o.jsxs)(i.animated.div, {
                className: j.promotedBadgeWrapper,
                style: {
                    opacity: s.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                },
                children: [
                    (0, o.jsxs)(l.Clickable, {
                        className: j.promotedBadge,
                        onClick: B,
                        children: [
                            (0, o.jsx)(l.Text, {
                                color: 'always-white',
                                variant: 'text-xs/normal',
                                children: v.intl.string(v.t.o6FLcH)
                            }),
                            (0, o.jsx)(l.CircleQuestionIcon, {
                                color: l.tokens.colors.WHITE,
                                className: j.promotedBadgeIcon
                            })
                        ]
                    }),
                    (0, o.jsx)(x.r, {
                        onOpen: E,
                        onClose: b,
                        onSelect: _,
                        questContent: d.jn.QUEST_BAR_V2,
                        quest: t,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        children: (e) =>
                            (0, o.jsx)(l.Clickable, {
                                ...e,
                                className: j.submenuWrapper,
                                'aria-label': v.intl.string(v.t.DEoVWV),
                                children: (0, o.jsx)(l.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(j.submenuIcon, j.white)
                                })
                            })
                    })
                ]
            })
        ]
    });
};
