var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(442837),
  c = n(950104),
  d = n(780384),
  u = n(481060),
  p = n(70097),
  m = n(703656),
  x = n(358085),
  g = n(617136),
  f = n(272008),
  C = n(113434),
  _ = n(569984),
  E = n(497505),
  h = n(918701),
  S = n(865364),
  T = n(585500),
  N = n(566078),
  v = n(340100),
  j = n(611855),
  A = n(644646),
  B = n(78826),
  b = n(670638),
  O = n(667105),
  R = n(46140),
  y = n(981631),
  P = n(701488),
  I = n(689938),
  L = n(47067);
let k = o.forwardRef(function(e, t) {
  var n, r;
  let {
children: S,
className: k,
collapsedHeight: U,
expansionSpring: q,
isExpanded: Z,
isExpansionAnimationComplete: w,
onCtxMenuOpen: Q,
onCtxMenuClose: D,
onCtxMenuSelect: W,
quest: H,
useReducedMotion: V
  } = e, z = (0, i.e7)([_.Z], () => _.Z.isEnrolling(H.id), [H]), G = (0, C.B6)(H.config.expiresAt), K = N.r.build(H.config), Y = (0, C.B6)(K.rewardsExpireAt), F = o.useMemo(() => (0, h.nP)(H.config.assets.questBarHero), [H]), X = (0, O.tP)(K.application.id), J = K.features.has(R.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST, $ = K.features.has(R.S7.START_QUEST_CTA) ? I.Z.Messages.QUESTS_START_QUEST : I.Z.Messages.QUESTS_ACCEPT_QUEST, ee = o.useCallback(() => {
(0, f.AH)(H.id, {
  questContent: E.jn.QUEST_BAR,
  questContentCTA: J
}), K.features.has(R.S7.START_QUEST_CTA) && (0, m.uL)(y.Z5c.ACTIVITY_DETAILS(P.In), void 0);
  }, [
H,
J,
K.features
  ]), et = (0, O.hf)({
quest: H,
location: E.jn.QUEST_BAR
  }), en = o.useCallback(() => {
(0, h.FE)(H, {
  content: E.jn.QUEST_BAR,
  ctaContent: g.jZ.OPEN_GAME_LINK
});
  }, [H]), es = K.features.has(R.S7.POST_ENROLLMENT_CTA), eo = (0, C.Rf)(H), er = (0, C.Jf)(H), ea = null != er ? er.progress > 0 : eo.progressSeconds > 0, el = (null === (n = H.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, ei = (null === (r = H.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, ec = o.useMemo(() => (0, h.Xv)(H.config), [H.config]), ed = Z && w, eu = (0, h.ph)(H), ep = (0, T.D)({
quest: H,
taskDetails: eo,
location: R.dr.QUESTS_BAR,
questContent: E.jn.QUEST_BAR,
thirdPartyTaskDetails: null != er ? er : void 0
  }), em = (0, x.isWeb)(), ex = o.useMemo(() => {
let e = (0, d.Qg)(H.config.colors.primary, {
  base: '#ffffff',
  contrastRatio: d.S3.Text
});
return {
  '--custom-cta-color': e,
  '--custom-cta-color-hover': (0, c.r5)(e, 0.3),
  '--custom-cta-color-active': (0, c.r5)(e, 0.35)
};
  }, [H.config.colors.primary]);
  return (0, s.jsxs)(l.animated.div, {
className: a()(k, L.contentExpanded, {
  [L.contentInteractable]: ed
}),
style: {
  backgroundColor: H.config.colors.secondary,
  transform: ei ? void 0 : (0, l.to)([
    q.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        -100
      ]
    }),
    q.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        U
      ]
    })
  ], (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))'))
},
children: [
  S,
  (0, s.jsx)('div', {
    'aria-hidden': !ed,
    children: el ? (0, s.jsxs)('div', {
      className: L.questAcceptedContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: L.utils,
          children: [
            (0, s.jsxs)('div', {
              className: L.questAcceptedContentHeading,
              children: [
                (0, s.jsx)(A.Z, {
                  className: L.questProgressRewardTile,
                  learnMoreStyle: 'icon',
                  quest: H,
                  questContent: E.jn.QUEST_BAR,
                  location: R.dr.QUESTS_BAR
                }),
                (0, s.jsxs)('div', {
                  children: [
                    (0, s.jsx)(u.Heading, {
                      color: 'always-white',
                      variant: 'heading-sm/semibold',
                      children: (0, h.AV)({
                        quest: H,
                        taskDetails: eo,
                        thirdPartyTaskDetails: null != er ? er : void 0
                      })
                    }),
                    (0, s.jsx)(u.Text, {
                      className: L.questAcceptedContentCopySubheading,
                      color: 'always-white',
                      variant: 'text-xxs/normal',
                      children: ei ? I.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                        expirationDate: Y
                      }) : I.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                        expirationDate: G
                      })
                    })
                  ]
                })
              ]
            }),
            (0, s.jsx)(b.r, {
              onOpen: Q,
              onClose: D,
              onSelect: W,
              questContent: E.jn.QUEST_BAR,
              quest: H,
              shouldShowDisclosure: !1,
              showShareLink: !0,
              children: e => (0, s.jsx)(u.Clickable, {
                ...e,
                className: L.submenuWrapper,
                'aria-label': I.Z.Messages.ACTIONS,
                children: (0, s.jsx)(u.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: L.submenuIcon
                })
              })
            })
          ]
        }),
        ei ? (0, s.jsx)(u.Button, {
          className: a()(L.cta, L.ctaClaimReward),
          style: ec ? ex : void 0,
          color: u.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: et,
          size: u.Button.Sizes.NONE,
          children: I.Z.Messages.QUESTS_CLAIM_REWARD
        }) : (0, s.jsx)(u.Text, {
          className: L.description,
          color: 'always-white',
          variant: 'text-xs/normal',
          children: ep
        }),
        (0, s.jsx)(v.Z, {
          quest: H
        }),
        !em && !ea && !X && es && (0, s.jsx)(M, {
          onClick: ed ? en : void 0
        })
      ]
    }) : (0, s.jsxs)('div', {
      children: [
        (0, s.jsxs)('div', {
          className: L.questPromoContent,
          ref: t,
          children: [
            (0, s.jsxs)('div', {
              className: L.utils,
              children: [
                (0, s.jsx)(j.Z, {
                  color: 'always-white'
                }),
                (0, s.jsx)(b.r, {
                  onOpen: Q,
                  onClose: D,
                  onSelect: W,
                  questContent: E.jn.QUEST_BAR,
                  quest: H,
                  shouldShowDisclosure: !0,
                  showShareLink: !0,
                  children: e => (0, s.jsx)(u.Clickable, {
                    ...e,
                    className: L.submenuWrapper,
                    'aria-label': I.Z.Messages.ACTIONS,
                    children: (0, s.jsx)(u.MoreHorizontalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: L.submenuIcon
                    })
                  })
                })
              ]
            }),
            (0, s.jsxs)('div', {
              className: L.details,
              children: [
                (0, s.jsx)(A.Z, {
                  className: L.rewardTile,
                  learnMoreStyle: 'text',
                  quest: H,
                  questContent: E.jn.QUEST_BAR,
                  location: R.dr.QUESTS_BAR
                }),
                (0, s.jsx)(u.Heading, {
                  className: L.title,
                  color: 'always-white',
                  variant: 'heading-md/medium',
                  children: I.Z.Messages.QUESTS_TITLE.format({
                    questName: H.config.messages.questName
                  })
                }),
                (0, s.jsx)(u.Text, {
                  className: L.description,
                  color: 'always-white',
                  variant: 'text-sm/normal',
                  children: ep
                })
              ]
            }),
            (0, s.jsx)(u.Button, {
              className: L.cta,
              style: '1232852290197655573' !== H.id ? ex : void 0,
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
          className: L.heroAssetWrapper,
          style: {
            color: H.config.colors.secondary
          },
          children: F ? (0, s.jsx)(B.Fl, {
            id: 'QuestBarContentExpanded_heroAnimated',
            children: e => (0, s.jsx)(p.Z, {
              ref: e,
              autoPlay: !V,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: L.heroAsset,
              controls: !1,
              children: (0, s.jsx)('source', {
                src: eu,
                type: (0, h.mN)(eu)
              })
            })
          }) : (0, s.jsx)(B.Fl, {
            id: 'QuestBarContentExpanded_heroStatic',
            children: e => (0, s.jsx)('img', {
              ref: e,
              alt: '',
              className: L.heroAsset,
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
location: R.dr.QUESTS_BAR,
autoTrackExposure: !0
  }) ? (0, s.jsx)(u.Button, {
className: L.cta,
style: t,
color: u.Button.Colors.CUSTOM,
fullWidth: !0,
onClick: n,
size: u.Button.Sizes.NONE,
children: I.Z.Messages.QUESTS_GET_THIS_GAME
  }) : null;
}
t.Z = k;