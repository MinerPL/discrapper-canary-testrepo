var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(442837),
  c = n(950104),
  d = n(780384),
  u = n(481060),
  p = n(703656),
  m = n(810090),
  x = n(358085),
  g = n(617136),
  f = n(272008),
  C = n(113434),
  _ = n(569984),
  h = n(497505),
  E = n(918701),
  S = n(865364),
  T = n(585500),
  v = n(566078),
  N = n(340100),
  j = n(611855),
  A = n(644646),
  B = n(78826),
  b = n(670638),
  R = n(667105),
  y = n(46140),
  I = n(981631),
  O = n(701488),
  q = n(689938),
  U = n(47067);
let k = o.forwardRef(function(e, t) {
  var n, r;
  let {
children: S,
className: k,
collapsedHeight: P,
expansionSpring: Z,
isExpanded: Q,
isExpansionAnimationComplete: w,
onCtxMenuOpen: L,
onCtxMenuClose: W,
onCtxMenuSelect: D,
quest: V,
useReducedMotion: H
  } = e, z = (0, i.e7)([_.Z], () => _.Z.isEnrolling(V.id), [V]), G = (0, C.B6)(V.config.expiresAt), F = v.r.build(V.config), Y = (0, C.B6)(F.rewardsExpireAt), K = o.useMemo(() => (0, E.nP)(V.config.assets.questBarHero), [V]), X = (0, R.tP)(F.application.id), J = F.features.has(y.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST, $ = F.features.has(y.S7.START_QUEST_CTA) ? q.Z.Messages.QUESTS_START_QUEST : q.Z.Messages.QUESTS_ACCEPT_QUEST, ee = o.useCallback(() => {
(0, f.AH)(V.id, {
  questContent: h.jn.QUEST_BAR,
  questContentCTA: J
}), F.features.has(y.S7.START_QUEST_CTA) && (0, p.uL)(I.Z5c.ACTIVITY_DETAILS(O.In), void 0);
  }, [
V,
J,
F.features
  ]), et = (0, R.hf)({
quest: V,
location: h.jn.QUEST_BAR
  }), en = o.useCallback(() => {
(0, E.FE)(V, {
  content: h.jn.QUEST_BAR,
  ctaContent: g.jZ.OPEN_GAME_LINK
});
  }, [V]), es = F.features.has(y.S7.POST_ENROLLMENT_CTA), eo = (0, C.Rf)(V), er = (0, C.Jf)(V), ea = null != er ? er.progress > 0 : eo.progressSeconds > 0, el = (null === (n = V.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, ei = (null === (r = V.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, ec = o.useMemo(() => (0, E.Xv)(V.config), [V.config]), ed = Q && w, eu = (0, E.ph)(V), ep = (0, T.D)({
quest: V,
taskDetails: eo,
location: y.dr.QUESTS_BAR,
questContent: h.jn.QUEST_BAR,
thirdPartyTaskDetails: null != er ? er : void 0
  }), em = (0, x.isWeb)(), ex = o.useMemo(() => {
let e = (0, d.Qg)(V.config.colors.primary, {
  base: '#ffffff',
  contrastRatio: d.S3.Text
});
return {
  '--custom-cta-color': e,
  '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
  '--custom-cta-color-active': (0, c.r5)(e, 0.35)
};
  }, [V.config.colors.primary]);
  return (0, s.jsxs)(l.animated.div, {
className: a()(k, U.contentExpanded, {
  [U.contentInteractable]: ed
}),
style: {
  backgroundColor: V.config.colors.secondary,
  transform: ei ? void 0 : (0, l.to)([
    Z.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        -100
      ]
    }),
    Z.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        P
      ]
    })
  ], (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))'))
},
children: [
  S,
  (0, s.jsx)('div', {
    'aria-hidden': !ed,
    children: el ? (0, s.jsxs)('div', {
      className: U.questAcceptedContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: U.utils,
          children: [
            (0, s.jsxs)('div', {
              className: U.questAcceptedContentHeading,
              children: [
                (0, s.jsx)(A.Z, {
                  className: U.questProgressRewardTile,
                  learnMoreStyle: 'icon',
                  quest: V,
                  questContent: h.jn.QUEST_BAR,
                  location: y.dr.QUESTS_BAR
                }),
                (0, s.jsxs)('div', {
                  children: [
                    (0, s.jsx)(u.Heading, {
                      color: 'always-white',
                      variant: 'heading-sm/semibold',
                      children: (0, E.AV)({
                        quest: V,
                        taskDetails: eo,
                        thirdPartyTaskDetails: null != er ? er : void 0
                      })
                    }),
                    (0, s.jsx)(u.Text, {
                      className: U.questAcceptedContentCopySubheading,
                      color: 'always-white',
                      variant: 'text-xxs/normal',
                      children: ei ? q.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                        expirationDate: Y
                      }) : q.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                        expirationDate: G
                      })
                    })
                  ]
                })
              ]
            }),
            (0, s.jsx)(b.r, {
              onOpen: L,
              onClose: W,
              onSelect: D,
              questContent: h.jn.QUEST_BAR,
              quest: V,
              shouldShowDisclosure: !1,
              showShareLink: !0,
              children: e => (0, s.jsx)(u.Clickable, {
                ...e,
                className: U.submenuWrapper,
                'aria-label': q.Z.Messages.ACTIONS,
                children: (0, s.jsx)(u.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: U.submenuIcon
                })
              })
            })
          ]
        }),
        ei ? (0, s.jsx)(u.Button, {
          className: a()(U.cta, U.ctaClaimReward),
          style: ec ? ex : void 0,
          color: u.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: et,
          size: u.Button.Sizes.NONE,
          children: q.Z.Messages.QUESTS_CLAIM_REWARD
        }) : (0, s.jsx)(u.Text, {
          className: U.description,
          color: 'always-white',
          variant: 'text-xs/normal',
          children: ep
        }),
        (0, s.jsx)(N.Z, {
          quest: V
        }),
        !em && !ea && !X && es && (0, s.jsx)(M, {
          onClick: ed ? en : void 0
        })
      ]
    }) : (0, s.jsxs)('div', {
      children: [
        (0, s.jsxs)('div', {
          className: U.questPromoContent,
          ref: t,
          children: [
            (0, s.jsxs)('div', {
              className: U.utils,
              children: [
                (0, s.jsx)(j.Z, {
                  color: 'always-white'
                }),
                (0, s.jsx)(b.r, {
                  onOpen: L,
                  onClose: W,
                  onSelect: D,
                  questContent: h.jn.QUEST_BAR,
                  quest: V,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: e => (0, s.jsx)(u.Clickable, {
                    ...e,
                    className: U.submenuWrapper,
                    'aria-label': q.Z.Messages.ACTIONS,
                    children: (0, s.jsx)(u.MoreHorizontalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: U.submenuIcon
                    })
                  })
                })
              ]
            }),
            (0, s.jsxs)('div', {
              className: U.details,
              children: [
                (0, s.jsx)(A.Z, {
                  className: U.rewardTile,
                  learnMoreStyle: 'text',
                  quest: V,
                  questContent: h.jn.QUEST_BAR,
                  location: y.dr.QUESTS_BAR
                }),
                (0, s.jsx)(u.Heading, {
                  className: U.title,
                  color: 'always-white',
                  variant: 'heading-md/medium',
                  children: q.Z.Messages.QUESTS_TITLE.format({
                    questName: V.config.messages.questName
                  })
                }),
                (0, s.jsx)(u.Text, {
                  className: U.description,
                  color: 'always-white',
                  variant: 'text-sm/normal',
                  children: ep
                })
              ]
            }),
            (0, s.jsx)(u.Button, {
              className: U.cta,
              style: '1232852290197655573' !== V.id ? ex : void 0,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: ed ? ee : void 0,
              size: u.Button.Sizes.NONE,
              submitting: z,
              children: $
            })
          ]
        }),
        (0, s.jsx)('div', {
          className: U.heroAssetWrapper,
          style: {
            color: V.config.colors.secondary
          },
          children: K ? (0, s.jsx)(B.Fl, {
            id: 'QuestBarContentExpanded_heroAnimated',
            children: e => (0, s.jsx)(m.Z, {
              ref: e,
              autoPlay: !H,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: U.heroAsset,
              controls: !1,
              children: (0, s.jsx)('source', {
                src: eu,
                type: (0, E.mN)(eu)
              })
            })
          }) : (0, s.jsx)(B.Fl, {
            id: 'QuestBarContentExpanded_heroStatic',
            children: e => (0, s.jsx)('img', {
              ref: e,
              alt: '',
              className: U.heroAsset,
              src: eu
            })
          })
        })
      ]
    })
  })
]
  });
});

function M(e) {
  let {
style: t,
onClick: n
  } = e;
  return (0, S.O)({
location: y.dr.QUESTS_BAR,
autoTrackExposure: !0
  }) ? (0, s.jsx)(u.Button, {
className: U.cta,
style: t,
color: u.Button.Colors.CUSTOM,
fullWidth: !0,
onClick: n,
size: u.Button.Sizes.NONE,
children: q.Z.Messages.QUESTS_GET_THIS_GAME
  }) : null;
}
t.Z = k;