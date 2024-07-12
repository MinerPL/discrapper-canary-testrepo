var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(442837),
  l = n(950104),
  c = n(780384),
  d = n(481060),
  u = n(703656),
  p = n(810090),
  x = n(358085),
  m = n(617136),
  g = n(272008),
  C = n(113434),
  f = n(569984),
  _ = n(497505),
  h = n(918701),
  E = n(865364),
  T = n(585500),
  S = n(566078),
  N = n(340100),
  A = n(611855),
  v = n(644646),
  j = n(78826),
  B = n(670638),
  R = n(667105),
  b = n(46140),
  O = n(981631),
  I = n(701488),
  U = n(689938),
  y = n(47067);
let M = o.forwardRef(function(e, t) {
  var n, r;
  let {
className: E,
isExpanded: M,
isExpansionAnimationComplete: Z,
onCtxMenuOpen: P,
onCtxMenuClose: k,
onCtxMenuSelect: Q,
quest: L,
useReducedMotion: w
  } = e, W = (0, i.e7)([f.Z], () => f.Z.isEnrolling(L.id), [L]), H = (0, C.B6)(L.config.expiresAt), D = S.r.build(L.config), V = (0, C.B6)(D.rewardsExpireAt), z = o.useMemo(() => (0, h.nP)(L.config.assets.questBarHero), [L]), G = (0, R.tP)(D.application.id), F = D.features.has(b.S7.START_QUEST_CTA) ? m.jZ.START_QUEST : m.jZ.ACCEPT_QUEST, X = D.features.has(b.S7.START_QUEST_CTA) ? U.Z.Messages.QUESTS_START_QUEST : U.Z.Messages.QUESTS_ACCEPT_QUEST, Y = o.useCallback(() => {
(0, g.AH)(L.id, {
  questContent: _.jn.QUEST_BAR,
  questContentCTA: F
}), D.features.has(b.S7.START_QUEST_CTA) && (0, u.uL)(O.Z5c.ACTIVITY_DETAILS(I.In), void 0);
  }, [
L,
F,
D.features
  ]), K = (0, R.hf)({
quest: L,
location: _.jn.QUEST_BAR
  }), J = o.useCallback(() => {
(0, h.FE)(L, {
  content: _.jn.QUEST_BAR,
  ctaContent: m.jZ.OPEN_GAME_LINK
});
  }, [L]), $ = D.features.has(b.S7.POST_ENROLLMENT_CTA), ee = (0, C.Rf)(L), et = (0, C.Jf)(L), en = null != et ? et.progress > 0 : ee.progressSeconds > 0, es = (null === (n = L.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, eo = (null === (r = L.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, er = o.useMemo(() => (0, h.Xv)(L.config), [L.config]), ea = M && Z, ei = (0, h.ph)(L), el = (0, T.D)({
quest: L,
taskDetails: ee,
location: b.dr.QUESTS_BAR,
questContent: _.jn.QUEST_BAR,
thirdPartyTaskDetails: null != et ? et : void 0
  }), ec = (0, x.isWeb)(), ed = o.useMemo(() => {
let e = (0, c.Qg)(L.config.colors.primary, {
  base: '#ffffff',
  contrastRatio: c.S3.Text
});
return {
  '--custom-cta-color': e,
  '--custom-cta-color-hover': (0, l.r5)(e, 0.3),
  '--custom-cta-color-active': (0, l.r5)(e, 0.35)
};
  }, [L.config.colors.primary]);
  return (0, s.jsx)('div', {
style: {
  backgroundColor: L.config.colors.secondary
},
'aria-hidden': !ea,
className: a()(E, y.contentExpanded, {
  [y.contentInteractable]: ea
}),
children: es ? (0, s.jsxs)('div', {
  className: y.questAcceptedContent,
  ref: t,
  children: [
    (0, s.jsxs)('div', {
      className: y.utils,
      children: [
        (0, s.jsxs)('div', {
          className: y.questAcceptedContentHeading,
          children: [
            (0, s.jsx)(v.Z, {
              className: y.questProgressRewardTile,
              learnMoreStyle: 'icon',
              quest: L,
              questContent: _.jn.QUEST_BAR
            }),
            (0, s.jsxs)('div', {
              children: [
                (0, s.jsx)(d.Heading, {
                  color: 'always-white',
                  variant: 'heading-sm/semibold',
                  children: (0, h.AV)({
                    quest: L,
                    taskDetails: ee,
                    thirdPartyTaskDetails: null != et ? et : void 0
                  })
                }),
                (0, s.jsx)(d.Text, {
                  className: y.questAcceptedContentCopySubheading,
                  color: 'always-white',
                  variant: 'text-xxs/normal',
                  children: eo ? U.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                    expirationDate: V
                  }) : U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                    expirationDate: H
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)(B.r, {
          onOpen: P,
          onClose: k,
          onSelect: Q,
          questContent: _.jn.QUEST_BAR,
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
              className: y.submenuIcon
            })
          })
        })
      ]
    }),
    eo ? (0, s.jsx)(d.Button, {
      className: a()(y.cta, y.ctaClaimReward),
      style: er ? ed : void 0,
      color: d.Button.Colors.CUSTOM,
      fullWidth: !0,
      onClick: K,
      size: d.Button.Sizes.NONE,
      children: U.Z.Messages.QUESTS_CLAIM_REWARD
    }) : (0, s.jsx)(d.Text, {
      className: y.description,
      color: 'always-white',
      variant: 'text-xs/normal',
      children: el
    }),
    (0, s.jsx)(N.Z, {
      quest: L
    }),
    !ec && !en && !G && $ && (0, s.jsx)(q, {
      onClick: ea ? J : void 0
    })
  ]
}) : (0, s.jsxs)('div', {
  children: [
    (0, s.jsxs)('div', {
      className: y.questPromoContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: y.utils,
          children: [
            (0, s.jsx)(A.Z, {
              color: 'always-white'
            }),
            (0, s.jsx)(B.r, {
              onOpen: P,
              onClose: k,
              onSelect: Q,
              questContent: _.jn.QUEST_BAR,
              quest: L,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, s.jsx)(d.Clickable, {
                ...e,
                className: y.submenuWrapper,
                'aria-label': U.Z.Messages.ACTIONS,
                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: y.submenuIcon
                })
              })
            })
          ]
        }),
        (0, s.jsxs)('div', {
          className: y.details,
          children: [
            (0, s.jsx)(v.Z, {
              className: y.rewardTile,
              learnMoreStyle: 'text',
              quest: L,
              questContent: _.jn.QUEST_BAR
            }),
            (0, s.jsx)(d.Heading, {
              className: y.title,
              color: 'always-white',
              variant: 'heading-md/medium',
              children: U.Z.Messages.QUESTS_TITLE.format({
                questName: L.config.messages.questName
              })
            }),
            (0, s.jsx)(d.Text, {
              className: y.description,
              color: 'always-white',
              variant: 'text-sm/normal',
              children: el
            })
          ]
        }),
        (0, s.jsx)(d.Button, {
          className: y.cta,
          style: '1232852290197655573' !== L.id ? ed : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: ea ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: W,
          children: X
        })
      ]
    }),
    (0, s.jsx)('div', {
      className: y.heroAssetWrapper,
      style: {
        color: L.config.colors.secondary
      },
      children: z ? (0, s.jsx)(j.Fl, {
        id: 'QuestBarContentExpanded_heroAnimated',
        children: e => (0, s.jsx)(p.Z, {
          ref: e,
          autoPlay: !w,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: y.heroAsset,
          controls: !1,
          children: (0, s.jsx)('source', {
            src: ei,
            type: (0, h.mN)(ei)
          })
        })
      }) : (0, s.jsx)(j.Fl, {
        id: 'QuestBarContentExpanded_heroStatic',
        children: e => (0, s.jsx)('img', {
          ref: e,
          alt: '',
          className: y.heroAsset,
          src: ei
        })
      })
    })
  ]
})
  });
});

function q(e) {
  let {
style: t,
onClick: n
  } = e;
  return (0, E.O)({
location: b.dr.QUESTS_BAR,
autoTrackExposure: !0
  }) ? (0, s.jsx)(d.Button, {
className: y.cta,
style: t,
color: d.Button.Colors.CUSTOM,
fullWidth: !0,
onClick: n,
size: d.Button.Sizes.NONE,
children: U.Z.Messages.QUESTS_GET_THIS_GAME
  }) : null;
}
t.Z = M;