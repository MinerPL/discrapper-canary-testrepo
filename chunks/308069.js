var s = n(735250),
  o = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(338545),
  i = n(481060),
  c = n(617136),
  d = n(497505),
  u = n(918701),
  p = n(302245),
  x = n(685613),
  m = n(670638),
  g = n(341907),
  _ = n(303385),
  C = n(788284),
  f = n(46140),
  h = n(689938),
  E = n(91242);
t.Z = e => {
  let {
quest: t,
expansionSpring: a,
onCtxMenuSelect: T,
onCtxMenuOpen: S,
onCtxMenuClose: v,
useReducedMotion: A,
isExpanded: N,
isExpansionAnimationComplete: j
  } = e, B = o.useCallback(() => {
(0, g.openDisclosureModal)(t, {
  content: d.jn.QUEST_BAR_V2,
  ctaContent: c.jZ.OPEN_DISCLOSURE
});
  }, [t]), b = o.useCallback(() => {
(0, u.FE)(t, {
  content: d.jn.QUEST_BAR_V2,
  ctaContent: c.jZ.OPEN_GAME_LINK
});
  }, [t]), R = N && j, y = (0, p.vI)(t, f.dr.QUESTS_BAR, !0), I = (0, s.jsx)(i.Clickable, {
onClick: b,
className: r()({
  [E.logo]: R
}),
children: (0, s.jsx)(x.Z, {
  quest: t,
  withGameTile: !1
})
  });
  return (0, s.jsxs)(l.animated.div, {
className: r()(E.wrapper, {
  [E.interactable]: R,
  [E.rewardHighlightWrapper]: y
}),
style: {
  transform: (0, l.to)([a.to({
    range: [
      0,
      1
    ],
    output: [
      y ? 8 : 4,
      0
    ]
  })], e => 'translateY('.concat(e, 'px'))
},
children: [
  (0, s.jsx)(l.animated.div, {
    className: E.opaqueExpandedBackground,
    style: {
      opacity: a.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          1
        ]
      }),
      backdropFilter: a.to([
        0,
        1
      ], [
        0,
        1
      ]).to(e => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 5, ')'))
    }
  }),
  (0, s.jsx)(l.animated.div, {
    className: E.backgroundWrapper,
    style: {
      opacity: a.to({
        range: [
          0,
          1
        ],
        output: [
          0.5,
          0
        ]
      }),
      borderBottomLeftRadius: a.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          8
        ]
      }),
      borderBottomRightRadius: a.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          8
        ]
      })
    },
    children: (0, s.jsx)(C.Z, {
      className: E.background,
      animationClassName: E.backgroundAnimation,
      quest: t,
      useReducedMotion: A
    })
  }),
  y ? (0, s.jsx)(_.Z, {
    quest: t,
    expansionSpring: a,
    isFullyExpanded: R,
    partnerBranding: I,
    useReducedMotion: A
  }) : (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(l.animated.img, {
        alt: '',
        className: E.wreathIcon,
        style: {
          opacity: a.to({
            range: [
              0,
              1
            ],
            output: [
              1,
              0
            ]
          })
        },
        src: n(858595)
      }),
      (0, s.jsx)(l.animated.div, {
        style: {
          opacity: a.to({
            range: [
              0,
              1
            ],
            output: [
              1,
              R ? 1 : 0.8
            ]
          }),
          transform: (0, l.to)([
            a.to({
              range: [
                0,
                1
              ],
              output: [
                0,
                -16
              ]
            }),
            a.to({
              range: [
                0,
                1
              ],
              output: [
                0,
                8
              ]
            })
          ], (e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)'))
        },
        children: I
      }),
      (0, s.jsx)(l.animated.div, {
        className: E.questAvailable,
        style: {
          opacity: a.to({
            range: [
              0,
              1
            ],
            output: [
              0.7,
              0
            ]
          }),
          transform: (0, l.to)([a.to({
            range: [
              0,
              1
            ],
            output: [
              0,
              -20
            ]
          })], e => 'translate('.concat(e, 'px'))
        },
        children: (0, s.jsx)(i.Text, {
          color: 'always-white',
          variant: 'text-xs/medium',
          className: E.questAvailableText,
          children: h.Z.Messages.QUEST_AVAILABLE
        })
      })
    ]
  }),
  (0, s.jsxs)(l.animated.div, {
    className: E.promotedBadgeWrapper,
    style: {
      opacity: a.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          1
        ]
      })
    },
    children: [
      (0, s.jsxs)(i.Clickable, {
        className: E.promotedBadge,
        onClick: B,
        children: [
          (0, s.jsx)(i.Text, {
            color: 'always-white',
            variant: 'text-xs/normal',
            children: h.Z.Messages.QUESTS_PROMOTED
          }),
          (0, s.jsx)(i.CircleQuestionIcon, {
            color: i.tokens.colors.WHITE,
            className: E.promotedBadgeIcon
          })
        ]
      }),
      (0, s.jsx)(m.r, {
        onOpen: S,
        onClose: v,
        onSelect: T,
        questContent: d.jn.QUEST_BAR_V2,
        quest: t,
        shouldShowDisclosure: !0,
        showShareLink: !0,
        children: e => (0, s.jsx)(i.Clickable, {
          ...e,
          className: E.submenuWrapper,
          'aria-label': h.Z.Messages.ACTIONS,
          children: (0, s.jsx)(i.MoreHorizontalIcon, {
            size: 'md',
            color: 'currentColor',
            className: r()(E.submenuIcon, E.white)
          })
        })
      })
    ]
  })
]
  });
};