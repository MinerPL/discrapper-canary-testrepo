var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(481060),
  c = n(617136),
  d = n(497505),
  u = n(918701),
  p = n(685613),
  m = n(670638),
  x = n(341907),
  g = n(898170),
  f = n(689938),
  C = n(560594);
t.Z = e => {
  let {
quest: t,
expansionSpring: r,
onCtxMenuSelect: _,
onCtxMenuOpen: h,
onCtxMenuClose: E,
useReducedMotion: S,
isExpanded: T,
isExpansionAnimationComplete: v
  } = e, N = o.useCallback(() => {
(0, x.openDisclosureModal)(t, {
  content: d.jn.QUEST_BAR_V2,
  ctaContent: c.jZ.OPEN_DISCLOSURE
});
  }, [t]), j = o.useCallback(() => {
(0, u.FE)(t, {
  content: d.jn.QUEST_BAR_V2,
  ctaContent: c.jZ.OPEN_GAME_LINK
});
  }, [t]), A = T && v;
  return (0, s.jsxs)(l.animated.div, {
className: a()(C.wrapper, {
  [C.interactable]: A
}),
style: {
  margin: r.to({
    range: [
      0,
      1
    ],
    output: [
      0,
      8
    ]
  }),
  borderRadius: r.to({
    range: [
      0,
      1
    ],
    output: [
      0,
      8
    ]
  }),
  paddingLeft: r.to({
    range: [
      0,
      1
    ],
    output: [
      12,
      8
    ]
  }),
  paddingRight: r.to({
    range: [
      0,
      1
    ],
    output: [
      12,
      8
    ]
  }),
  paddingTop: r.to({
    range: [
      0,
      1
    ],
    output: [
      8,
      4
    ]
  }),
  paddingBottom: r.to({
    range: [
      0,
      1
    ],
    output: [
      8,
      4
    ]
  }),
  backdropFilter: r.to([
    0,
    1
  ], [
    0,
    1
  ]).to(e => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 5, ')'))
},
children: [
  (0, s.jsx)(l.animated.div, {
    className: C.backgroundWrapper,
    style: {
      opacity: r.to({
        range: [
          0,
          1
        ],
        output: [
          0.5,
          0
        ]
      }),
      borderBottomLeftRadius: r.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          8
        ]
      }),
      borderBottomRightRadius: r.to({
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
    children: (0, s.jsx)(g.Z, {
      className: C.background,
      animationClassName: C.backgroundAnimation,
      quest: t,
      useReducedMotion: S
    })
  }),
  (0, s.jsx)(l.animated.img, {
    alt: '',
    className: C.wreathIcon,
    style: {
      opacity: r.to({
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
      opacity: r.to({
        range: [
          0,
          1
        ],
        output: [
          1,
          A ? 1 : 0.8
        ]
      }),
      x: r.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          -24
        ]
      })
    },
    children: (0, s.jsx)(i.Clickable, {
      onClick: j,
      className: a()({
        [C.logo]: A
      }),
      children: (0, s.jsx)(p.Z, {
        quest: t,
        withGameTile: !1
      })
    })
  }),
  (0, s.jsx)(l.animated.div, {
    className: C.questAvailable,
    style: {
      opacity: r.to({
        range: [
          0,
          1
        ],
        output: [
          0.7,
          0
        ]
      }),
      x: r.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          -20
        ]
      })
    },
    children: (0, s.jsx)(i.Text, {
      color: 'always-white',
      variant: 'text-xs/medium',
      className: C.questAvailableText,
      children: f.Z.Messages.QUEST_AVAILABLE
    })
  }),
  (0, s.jsxs)(l.animated.div, {
    className: C.promotedBadgeWrapper,
    style: {
      opacity: r.to({
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
        className: C.promotedBadge,
        onClick: N,
        children: [
          (0, s.jsx)(i.Text, {
            color: 'always-white',
            variant: 'text-xs/normal',
            children: f.Z.Messages.QUESTS_PROMOTED
          }),
          (0, s.jsx)(i.CircleQuestionIcon, {
            color: i.tokens.colors.WHITE,
            className: C.promotedBadgeIcon
          })
        ]
      }),
      (0, s.jsx)(m.r, {
        onOpen: h,
        onClose: E,
        onSelect: _,
        questContent: d.jn.QUEST_BAR_V2,
        quest: t,
        shouldShowDisclosure: !0,
        showShareLink: !0,
        children: e => (0, s.jsx)(i.Clickable, {
          ...e,
          className: C.submenuWrapper,
          'aria-label': f.Z.Messages.ACTIONS,
          children: (0, s.jsx)(i.MoreHorizontalIcon, {
            size: 'md',
            color: 'currentColor',
            className: a()(C.submenuIcon, C.white)
          })
        })
      })
    ]
  })
]
  });
};