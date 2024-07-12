var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(338545),
  l = n(754700),
  c = n(442837),
  d = n(481060),
  u = n(810090),
  p = n(617136),
  x = n(272008),
  m = n(113434),
  g = n(569984),
  C = n(497505),
  f = n(918701),
  _ = n(988303),
  h = n(585500),
  E = n(644646),
  T = n(78826),
  S = n(670638),
  N = n(330039),
  A = n(693900),
  v = n(524824),
  j = n(164495),
  B = n(759853),
  R = n(205511),
  b = n(95985),
  O = n(658590),
  I = n(46140),
  U = n(689938),
  y = n(689065);
let M = o.forwardRef(function(e, t) {
  var n;
  let {
className: r,
isExpanded: M,
isExpansionAnimationComplete: q,
expansionSpring: Z,
onCtxMenuOpen: P,
onCtxMenuClose: k,
onCtxMenuSelect: Q,
quest: L,
useReducedMotion: w,
taskDetails: W
  } = e, H = o.useRef(null), D = (0, c.e7)([g.Z], () => g.Z.isEnrolling(L.id), [L]), V = (0, m.B6)(L.config.expiresAt), z = o.useMemo(() => (0, f.nP)(L.config.assets.questBarHero), [L]), G = o.useCallback(() => {
(0, x.AH)(L.id, {
  questContent: C.jn.QUEST_BAR_V2,
  questContentCTA: p.jZ.ACCEPT_QUEST
});
  }, [L]), {
primaryVariant: F
  } = _.u.useExperiment({
location: I.dr.QUESTS_BAR
  }, {
autoTrackExposure: !1
  }), X = (null === (n = L.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Y = M && q, {
questSupportsConsole: K,
isProgressingOnConsole: J
  } = o.useMemo(() => ({
questSupportsConsole: (0, f.$J)(L),
isProgressingOnConsole: (0, f.Bz)(L)
  }), [L]), $ = (0, m.pe)(L), ee = W.percentComplete > 0, et = !J && !l.T.CONSOLE.has(W.taskType) && ($ || l.T.DESKTOP.has(W.taskType)), en = (0, f.ph)(L), es = (0, h.D)({
quest: L,
location: I.dr.QUESTS_BAR,
questContent: C.jn.QUEST_BAR_V2,
taskDetails: W,
useV2Variants: F === _.P.V2 || (0, O.a)(L)
  });
  return (0, s.jsx)('div', {
'aria-hidden': !Y,
className: a()(r, y.contentExpanded, {
  [y.contentInteractable]: Y,
  [y.contentExpandedAccepted]: X
}),
children: X ? (0, s.jsxs)('div', {
  className: y.questAcceptedContent,
  ref: t,
  children: [
    (0, s.jsxs)('div', {
      className: y.questAcceptedHeader,
      children: [
        (0, s.jsx)(d.Text, {
          variant: 'text-xxs/medium',
          className: a()(y.flex, y.headerText),
          children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
            expirationDate: V
          })
        }),
        (0, s.jsx)(S.r, {
          onOpen: P,
          onClose: k,
          onSelect: Q,
          questContent: C.jn.QUEST_BAR_V2,
          quest: L,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, s.jsx)(d.Clickable, {
            ...e,
            className: y.submenuWrapper,
            'aria-label': U.Z.Messages.ACTIONS,
            children: (0, s.jsx)(d.MoreHorizontalIcon, {
              size: 'md',
              color: 'currentColor',
              className: a()(y.submenuIcon, y.interactiveNormal)
            })
          })
        })
      ]
    }),
    (0, s.jsx)('div', {
      className: y.divider
    }),
    (0, s.jsx)(B.Z, {
      progressBarRef: H,
      quest: L,
      isExpanded: M
    }),
    (0, s.jsx)(b.Z, {
      quest: L,
      progressBarRef: H,
      isExpanded: !0,
      taskDetails: W
    }),
    (0, v.r)(L) && (0, s.jsx)(N.Z, {
      style: {
        marginTop: 8
      }
    }),
    (0, s.jsx)(A.n, {
      children: K && !et && (0, s.jsx)(R.Z, {
        quest: L,
        taskDetails: W
      })
    }),
    (0, s.jsx)(A.n, {
      children: (0, s.jsx)(j.y, {
        quest: L,
        useReducedMotion: w,
        isExpanded: M,
        hasMadeProgress: ee
      })
    })
  ]
}) : (0, s.jsxs)('div', {
  children: [
    (0, s.jsxs)('div', {
      className: y.questPromoContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: y.details,
          children: [
            (0, s.jsx)(E.Z, {
              className: y.rewardTile,
              learnMoreStyle: 'text',
              quest: L,
              questContent: C.jn.QUEST_BAR_V2
            }),
            (0, s.jsx)(d.Heading, {
              className: y.title,
              variant: 'heading-md/medium',
              children: U.Z.Messages.QUESTS_TITLE.format({
                questName: L.config.messages.questName
              })
            }),
            (0, s.jsx)(d.Text, {
              className: y.description,
              variant: 'text-xs/normal',
              children: es
            })
          ]
        }),
        (0, s.jsx)(d.Button, {
          className: y.cta,
          color: d.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: Y ? G : void 0,
          size: d.Button.Sizes.SMALL,
          submitting: D,
          children: U.Z.Messages.QUESTS_ACCEPT_QUEST
        })
      ]
    }),
    (0, s.jsxs)(i.animated.div, {
      className: y.heroAssetWrapper,
      style: {
        backdropFilter: Z.to([
          0,
          1
        ], [
          5,
          0
        ]).to(e => 'blur('.concat(e, 'px)')),
        filter: Z.to([
          0,
          1
        ], [
          0.8,
          1
        ]).to(e => 'brightness('.concat(e, ')'))
      },
      children: [
        (0, s.jsx)(i.animated.div, {
          className: y.heroAssetDarken,
          style: {
            opacity: Z.to([
              0,
              1
            ], [
              1,
              0
            ])
          }
        }),
        (0, s.jsx)(i.animated.div, {
          className: y.heroAssetTint,
          style: {
            backgroundColor: L.config.colors.primary,
            opacity: Z.to([
              0,
              1
            ], [
              1,
              0
            ])
          }
        }),
        z ? (0, s.jsx)(T.Fl, {
          id: 'QuestBarV2ContentExpanded_heroAnimated',
          children: e => (0, s.jsx)(u.Z, {
            ref: e,
            autoPlay: !w,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: y.heroAsset,
            controls: !1,
            children: (0, s.jsx)('source', {
              src: en,
              type: (0, f.mN)(en)
            })
          })
        }) : (0, s.jsx)(T.Fl, {
          id: 'QuestBarV2ContentExpanded_heroStatic',
          children: e => (0, s.jsx)('img', {
            ref: e,
            alt: '',
            className: y.heroAsset,
            src: en
          })
        }),
        (0, s.jsx)(i.animated.div, {
          className: y.legibilityGradient,
          style: {
            opacity: Z.to({
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
})
  });
});
t.Z = M;