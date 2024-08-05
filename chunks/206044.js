n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(338545),
  o = n(722770),
  c = n(442837),
  u = n(846519),
  d = n(481060),
  _ = n(393238),
  E = n(607070),
  I = n(210887),
  m = n(810090),
  T = n(572004),
  h = n(617136),
  N = n(113434),
  C = n(497505),
  f = n(918701),
  p = n(566078),
  g = n(685613),
  S = n(611855),
  A = n(644646),
  R = n(670638),
  O = n(87894),
  x = n(46140),
  M = n(689938),
  v = n(793443);
let L = (0, l.animated)(d.ChevronSmallDownIcon),
  Z = (0, l.animated)(m.Z),
  P = e => {
let {
  quest: t,
  location: n,
  questContentPosition: a,
  ...r
} = e, [l, o] = s.useState(!1), c = s.useRef(new u.V7());
s.useEffect(() => {
  let e = c.current;
  return function() {
    e.stop();
  };
}, []);
let _ = () => {
  (0, h._3)({
    questId: t.id,
    questContent: n,
    questContentCTA: h.jZ.COPY_QUEST_URL,
    questContentPosition: a
  }), (0, T.JG)((0, f.Rs)(t.id)), o(!0), c.current.start(1000, () => o(!1));
};
return (0, i.jsx)(d.Tooltip, {
  forceOpen: l,
  shouldShow: l,
  color: d.Tooltip.Colors.GREEN,
  text: M.Z.Messages.COPY_SUCCESS_1,
  children: () => (0, i.jsx)(d.Button, {
    ...r,
    className: v.shareButton,
    color: d.Button.Colors.PRIMARY,
    size: d.Button.Sizes.SMALL,
    onClick: _,
    children: M.Z.Messages.QUESTS_SHARE_QUEST
  })
});
  };
t.Z = e => {
  var t;
  let {
isFocused: n,
isQuestExpired: a,
quest: u,
location: m,
size: T,
expansionSpring: D,
isAnimating: b,
isExpanded: j,
isInConcurrentQuestExperiment: U,
contentPosition: y,
toggleExpanded: B
  } = e, {
ref: k,
height: G
  } = (0, _.Z)(), {
ref: F,
width: w,
scrollWidth: V
  } = (0, _.Z)(), H = (0, c.e7)([I.Z], () => I.Z.getState().theme), Y = (0, c.e7)([E.Z], () => E.Z.useReducedMotion), W = s.useMemo(() => (0, f.nP)(u.config.assets.hero), [u]), K = s.useRef(null), z = (0, O.uq)(m), Q = m === C.jn.QUESTS_EMBED, q = (0, N.t5)(u, x.dr.QUESTS_CARD, m), X = (null === (t = u.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, J = (0, N.B6)(u.config.expiresAt, {
year: 'numeric',
month: 'long',
day: 'numeric'
  }), $ = (0, N.B6)(p.r.build(u.config).rewardsExpireAt, {
year: 'numeric',
month: 'long',
day: 'numeric'
  }), ee = e => {
e.stopPropagation(), e.currentTarget.blur(), B(), (0, h._3)({
  questId: u.id,
  questContent: m,
  questContentCTA: j ? h.jZ.COLLAPSE : h.jZ.EXPAND,
  questContentPosition: y
});
  };
  s.useEffect(() => {
W && null != K.current && (n ? K.current.play() : !n && (K.current.pause(), K.current.currentTime = 0));
  }, [
n,
W
  ]);
  let et = (0, f.j8)(u);
  return (0, i.jsxs)('div', {
className: r()(v.outerContainer, {
  [v.outerContainerGiftInventory]: z,
  [v.outerContainerEmbed]: Q,
  [v.outerContainerXs]: 'xs' === T
}),
'aria-label': M.Z.Messages.EXPAND,
style: {
  height: z ? G : void 0
},
children: [
  (0, i.jsx)(Z, {
    style: {
      opacity: D.to({
        range: [
          0,
          1
        ],
        output: [
          0.25,
          1
        ]
      })
    },
    autoPlay: !1,
    loop: !1,
    muted: !0,
    playsInline: !0,
    className: v.questSplash,
    controls: !1,
    poster: et,
    ref: K,
    children: !Y && W && (0, i.jsx)('source', {
      src: et,
      type: (0, f.mN)(et)
    })
  }),
  (0, i.jsxs)('div', {
    className: v.header,
    'aria-expanded': j,
    children: [
      (0, i.jsxs)(l.animated.div, {
        className: r()(v.headerContent, {
          [v.headerContentEmbed]: Q
        }),
        style: {
          y: z ? D.to({
            range: [
              0,
              1
            ],
            output: [
              O.DJ,
              0
            ]
          }) : void 0
        },
        children: [
          z && (0, i.jsx)(l.animated.div, {
            className: v.headerCollapsedContent,
            style: {
              opacity: D.to({
                range: [
                  0,
                  1
                ],
                output: [
                  1,
                  0
                ]
              }),
              visibility: b || !j ? 'inherit' : 'hidden'
            },
            'aria-hidden': !b && j,
            children: (0, i.jsxs)(d.ClickableContainer, {
              'aria-label': M.Z.Messages.EXPAND,
              onClick: ee,
              className: v.headerCollapsedClickableContainer,
              children: [
                (0, i.jsx)('div', {
                  className: v.headerCollapsedContentRewardWrapper,
                  children: (0, i.jsx)(A.Z, {
                    quest: u,
                    questContent: m,
                    className: v.headerCollapsedRewardTile,
                    location: x.dr.QUESTS_CARD
                  })
                }),
                (0, i.jsxs)('div', {
                  className: v.headerCollapsedContentCopyWrapper,
                  children: [
                    (0, i.jsxs)('div', {
                      className: v.headerCollapsedContentCopyLogos,
                      children: [
                        (0, i.jsx)(g.Z, {
                          className: v.partnerBranding,
                          gameTileSize: g.f.MEDIUM,
                          quest: u,
                          theme: H
                        }),
                        (0, i.jsx)(S.Z, {
                          color: 'always-white'
                        })
                      ]
                    }),
                    (0, i.jsx)(d.Text, {
                      variant: 'text-xs/medium',
                      children: q
                    })
                  ]
                })
              ]
            })
          }),
          (0, i.jsxs)(l.animated.div, {
            ref: e => {
              k.current = e;
            },
            className: r()(v.headerExpandedContent, {
              [v.outerContainerGiftInventory]: z,
              [v.outerContainerEmbed]: Q
            }),
            style: {
              opacity: D.to({
                range: [
                  0,
                  1
                ],
                output: [
                  0,
                  1
                ]
              }),
              visibility: b || j ? 'inherit' : 'hidden'
            },
            'aria-hidden': !b && !j,
            children: [
              (0, i.jsxs)('div', {
                className: v.headerExpandedWrapper,
                children: [
                  (0, i.jsxs)('div', {
                    className: v.iconLogotypeContainer,
                    children: [
                      (0, i.jsx)(g.Z, {
                        className: v.partnerBranding,
                        gameTileSize: g.f.MEDIUM,
                        quest: u,
                        theme: H
                      }),
                      Q ? null : (0, i.jsx)(S.Z, {
                        color: 'always-white'
                      })
                    ]
                  }),
                  (0, i.jsxs)('div', {
                    className: v.questInfo,
                    children: [
                      (0, i.jsx)(d.Tooltip, {
                        text: u.config.messages.questName,
                        shouldShow: null != w && null != V && w < V,
                        children: e => (0, i.jsx)(d.Heading, {
                          ref: F,
                          variant: 'lg' === T ? 'heading-xxl/bold' : 'sm' === T ? 'heading-xl/bold' : 'heading-lg/bold',
                          className: v.heading,
                          ...e,
                          children: M.Z.Messages.QUEST.format({
                            questName: u.config.messages.questName
                          })
                        })
                      }),
                      (0, i.jsx)(d.Text, {
                        variant: 'text-xs/normal',
                        children: X ? M.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                          expirationDate: $
                        }) : a ? M.Z.Messages.QUESTS_EXPIRED_ON.format({
                          expirationDate: J
                        }) : M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                          expirationDate: J
                        })
                      })
                    ]
                  })
                ]
              }),
              !a && z && (0, i.jsx)(P, {
                quest: u,
                location: m,
                questContentPosition: y
              })
            ]
          })
        ]
      }),
      (0, i.jsxs)(l.animated.div, {
        className: v.iconsContainer,
        style: {
          top: z ? D.to({
            range: [
              0,
              1
            ],
            output: [
              O.DJ / 2 - O.Z$ / 2,
              O.jc
            ]
          }) : O.jc
        },
        children: [
          (0, i.jsx)(R.r, {
            questContent: m,
            quest: u,
            questContentPosition: y,
            shouldShowDisclosure: !0,
            hideLearnMore: z,
            showShareLink: !a && Q,
            children: e => (0, i.jsx)(l.animated.div, {
              style: {
                opacity: D,
                visibility: b || j ? 'inherit' : 'hidden'
              },
              'aria-hidden': !b && !j,
              children: (0, i.jsx)(d.Clickable, {
                ...e,
                className: v.iconWrapper,
                'aria-label': M.Z.Messages.ACTIONS,
                children: (0, i.jsx)(d.MoreHorizontalIcon, {
                  size: 'md',
                  color: o.Z.WHITE
                })
              })
            })
          }),
          U && !(0, O.W_)(m) && (0, i.jsx)(d.Clickable, {
            onClick: ee,
            className: v.iconWrapper,
            'aria-label': j ? M.Z.Messages.COLLAPSE : M.Z.Messages.EXPAND,
            children: (0, i.jsx)(L, {
              style: {
                rotate: D.to({
                  range: [
                    0,
                    1
                  ],
                  output: [
                    0,
                    180
                  ]
                })
              },
              color: o.Z.WHITE
            })
          })
        ]
      })
    ]
  })
]
  });
};