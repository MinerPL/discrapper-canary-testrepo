n(47120), n(627341);
var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(278074),
  c = n(442837),
  d = n(481060),
  u = n(70097),
  p = n(358085),
  m = n(617136),
  x = n(272008),
  g = n(113434),
  f = n(569984),
  C = n(497505),
  _ = n(918701),
  E = n(988303),
  h = n(665430),
  S = n(585500),
  T = n(644646),
  N = n(78826),
  v = n(670638),
  j = n(693900),
  A = n(760171),
  B = n(164495),
  b = n(759853),
  O = n(205511),
  R = n(569379),
  y = n(95985),
  P = n(50476),
  I = n(658590),
  L = n(740697),
  k = n(46140),
  M = n(743294),
  U = n(689938),
  q = n(689065);
let Z = o.forwardRef(function(e, t) {
  var n, r;
  let {
children: Z,
className: w,
collapsedHeight: Q,
isExpanded: D,
isExpansionAnimationComplete: W,
expansionSpring: H,
onCtxMenuOpen: V,
onCtxMenuClose: z,
onCtxMenuSelect: G,
overlayRef: K,
quest: Y,
useReducedMotion: F,
taskDetails: X
  } = e, J = o.useRef(null), $ = (0, c.e7)([f.Z], () => f.Z.isEnrolling(Y.id), [Y]), ee = (0, g.B6)(Y.config.expiresAt), et = o.useMemo(() => (0, _.nP)(Y.config.assets.questBarHero), [Y]), en = o.useCallback(() => {
(0, x.AH)(Y.id, {
  questContent: C.jn.QUEST_BAR_V2,
  questContentCTA: m.jZ.ACCEPT_QUEST
});
  }, [Y]), es = (0, h.p)({
location: k.dr.QUESTS_BAR
  }), {
primaryVariant: eo
  } = E.u.useExperiment({
location: k.dr.QUESTS_BAR
  }, {
autoTrackExposure: !1
  }), er = (null === (n = Y.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, ea = (null === (r = Y.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, el = D && W, ei = (0, g._s)({
quest: Y
  }), ec = X.percentComplete > 0, ed = (0, g.z)(Y), [eu, ep, em] = (0, R.me)(Y, X), ex = (0, _.ph)(Y), eg = (0, S.D)({
quest: Y,
location: k.dr.QUESTS_BAR,
questContent: C.jn.QUEST_BAR_V2,
taskDetails: X,
useV2Variants: eo === E.P.V2 || (0, I.a)(Y)
  });
  return (0, s.jsxs)(l.animated.div, {
'aria-hidden': !el,
className: a()(w, q.contentExpanded, {
  [q.contentInteractable]: el,
  [q.contentExpandedAccepted]: er
}),
style: {
  transform: (0, l.to)([
    H.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        -100
      ]
    }),
    H.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        Q
      ]
    })
  ], (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))'))
},
children: [
  er && (0, s.jsx)(l.animated.div, {
    className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundCollapsed),
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(M.aY, ', ').concat(M.v6, ')'),
      opacity: H.to({
        range: [
          0,
          1
        ],
        output: [
          1,
          0
        ]
      })
    }
  }),
  Z,
  (0, s.jsx)(l.animated.div, {
    style: {
      opacity: 1
    },
    children: er ? (0, s.jsxs)('div', {
      className: q.questAcceptedContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: q.questAcceptedHeader,
          children: [
            (0, s.jsx)(d.Text, {
              variant: 'text-xxs/medium',
              className: a()(q.flex, q.headerText),
              children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: ee
              })
            }),
            (0, s.jsx)(v.r, {
              onOpen: V,
              onClose: z,
              onSelect: G,
              questContent: C.jn.QUEST_BAR_V2,
              quest: Y,
              shouldShowDisclosure: !1,
              showShareLink: !0,
              children: e => (0, s.jsx)(d.Clickable, {
                ...e,
                className: q.submenuWrapper,
                'aria-label': U.Z.Messages.ACTIONS,
                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: a()(q.submenuIcon, q.interactiveNormal)
                })
              })
            })
          ]
        }),
        (0, s.jsx)('div', {
          className: q.divider
        }),
        (0, s.jsx)(b.Z, {
          expansionSpring: H,
          overlayRef: K,
          progressBarRef: J,
          quest: Y,
          isExpanded: D
        }),
        (0, s.jsx)(y.Z, {
          contentLocation: 'expanded',
          quest: Y,
          progressBarRef: J,
          isExpanded: !0,
          taskDetails: X,
          activeScreen: eu
        }),
        (0, s.jsx)(j.n, {
          children: !ea && (0, i.EQ)(eu).with(A.L.SELECT, () => (0, s.jsx)(P.Z, {
            onConsole: () => em(k.cd.CONSOLE),
            onDesktop: () => em(k.cd.DESKTOP)
          })).with(A.L.DESKTOP, () => (0, p.isWeb)() && es && (0, s.jsx)(L.Z, {})).with(A.L.CONSOLE, () => (0, s.jsx)(O.Z, {
            quest: Y,
            taskDetails: X
          })).exhaustive()
        }),
        (0, s.jsx)(j.n, {
          children: (0, s.jsx)(B.y, {
            quest: Y,
            useReducedMotion: F,
            isExpanded: D,
            awaitingConsoleConnections: ei,
            hasMadeProgress: ec,
            isProgressing: ed,
            activeScreen: eu,
            showBackButton: eu !== A.L.SELECT && ep.length > 1 && !ec && !ed && es,
            onBack: () => em(null)
          })
        })
      ]
    }) : (0, s.jsx)('div', {
      children: (0, s.jsxs)('div', {
        className: q.questPromoContent,
        ref: t,
        children: [
          (0, s.jsxs)('div', {
            className: q.details,
            children: [
              (0, s.jsx)(T.Z, {
                className: q.rewardTile,
                learnMoreStyle: 'text',
                quest: Y,
                questContent: C.jn.QUEST_BAR_V2,
                location: k.dr.QUESTS_BAR
              }),
              (0, s.jsx)(d.Heading, {
                className: q.title,
                variant: 'heading-md/medium',
                children: U.Z.Messages.QUESTS_TITLE.format({
                  questName: Y.config.messages.questName
                })
              }),
              (0, s.jsx)(d.Text, {
                className: q.description,
                variant: 'text-xs/normal',
                children: eg
              })
            ]
          }),
          (0, s.jsx)(d.Button, {
            className: q.cta,
            color: d.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: el ? en : void 0,
            size: d.Button.Sizes.SMALL,
            submitting: $,
            children: U.Z.Messages.QUESTS_ACCEPT_QUEST
          })
        ]
      })
    })
  }),
  er ? (0, s.jsx)('div', {
    className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundExpanded),
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(M.aY, ', ').concat(M.v6, ')')
    }
  }) : (0, s.jsxs)(l.animated.div, {
    className: q.heroAssetWrapper,
    style: {
      backdropFilter: H.to([
        0,
        1
      ], [
        5,
        0
      ]).to(e => 'blur('.concat(e, 'px)')),
      filter: H.to([
        0,
        1
      ], [
        0.8,
        1
      ]).to(e => 'brightness('.concat(e, ')'))
    },
    children: [
      (0, s.jsx)(l.animated.div, {
        className: q.heroAssetDarken,
        style: {
          opacity: H.to([
            0,
            1
          ], [
            1,
            0
          ])
        }
      }),
      (0, s.jsx)(l.animated.div, {
        className: q.heroAssetTint,
        style: {
          backgroundColor: Y.config.colors.primary,
          opacity: H.to([
            0,
            1
          ], [
            1,
            0
          ])
        }
      }),
      et ? (0, s.jsx)(N.Fl, {
        id: 'QuestBarV2ContentExpanded_heroAnimated',
        children: e => (0, s.jsx)(u.Z, {
          ref: e,
          autoPlay: !F,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: q.heroAsset,
          controls: !1,
          children: (0, s.jsx)('source', {
            src: ex,
            type: (0, _.mN)(ex)
          })
        })
      }) : (0, s.jsx)(N.Fl, {
        id: 'QuestBarV2ContentExpanded_heroStatic',
        children: e => (0, s.jsx)('img', {
          ref: e,
          alt: '',
          className: q.heroAsset,
          src: ex
        })
      }),
      (0, s.jsx)(l.animated.div, {
        className: q.legibilityGradient,
        style: {
          opacity: H.to({
            range: [
              0,
              1
            ],
            output: [
              0,
              1
            ]
          })
        }
      })
    ]
  })
]
  });
});
t.Z = Z;