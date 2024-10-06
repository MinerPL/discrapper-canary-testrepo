var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(212433),
    i = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    m = n(703656),
    x = n(358085),
    _ = n(617136),
    C = n(272008),
    g = n(113434),
    f = n(569984),
    E = n(497505),
    h = n(918701),
    S = n(865364),
    T = n(585500),
    v = n(475595),
    N = n(566078),
    j = n(340100),
    A = n(611855),
    R = n(644646),
    b = n(78826),
    B = n(670638),
    I = n(667105),
    M = n(46140),
    O = n(981631),
    y = n(701488),
    L = n(689938),
    w = n(609706);
let k = o.forwardRef(function (e, t) {
    var n, r;
    let { children: S, className: k, collapsedHeight: Z, expansionSpring: q, isExpanded: P, isExpansionAnimationComplete: Q, onCtxMenuOpen: D, onCtxMenuClose: W, onCtxMenuSelect: H, quest: V, useReducedMotion: z } = e,
        G = (0, i.e7)([f.Z], () => f.Z.isEnrolling(V.id), [V]),
        F = (0, g.B6)(V.config.expiresAt),
        K = N.r.build(V.config),
        Y = (0, g.B6)(K.rewardsExpireAt),
        X = o.useMemo(() => (0, v.fh)(V, v.Bd.HERO), [V]),
        J = (0, I.tP)(K.application.id),
        $ = K.features.has(M.S7.START_QUEST_CTA) ? _.jZ.START_QUEST : _.jZ.ACCEPT_QUEST,
        ee = K.features.has(M.S7.START_QUEST_CTA) ? L.Z.Messages.QUESTS_START_QUEST : L.Z.Messages.QUESTS_ACCEPT_QUEST,
        et = o.useCallback(() => {
            (0, C.AH)(V.id, {
                questContent: E.jn.QUEST_BAR,
                questContentCTA: $
            }),
                K.features.has(M.S7.START_QUEST_CTA) && (0, m.uL)(O.Z5c.ACTIVITY_DETAILS(y.In), void 0);
        }, [V, $, K.features]),
        en = (0, I.hf)({
            quest: V,
            location: E.jn.QUEST_BAR
        }),
        es = o.useCallback(() => {
            (0, h.FE)(V, {
                content: E.jn.QUEST_BAR,
                ctaContent: _.jZ.OPEN_GAME_LINK
            });
        }, [V]),
        eo = K.features.has(M.S7.POST_ENROLLMENT_CTA),
        er = (0, g.Rf)(V),
        ea = (0, g.Jf)(V),
        el = null != ea ? ea.progress > 0 : er.progressSeconds > 0,
        ei = (null === (n = V.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        ec = (null === (r = V.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        ed = o.useMemo(() => (0, h.Xv)(V.config), [V.config]),
        eu = P && Q,
        ep = (0, T.D)({
            quest: V,
            taskDetails: er,
            location: M.dr.QUESTS_BAR,
            questContent: E.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0
        }),
        em = (0, x.isWeb)(),
        ex = o.useMemo(() => {
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
        className: a()(k, w.contentExpanded, { [w.contentInteractable]: eu }),
        style: {
            backgroundColor: V.config.colors.secondary,
            transform: ec
                ? void 0
                : (0, l.to)(
                      [
                          q.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          q.to({
                              range: [0, 1],
                              output: [0, Z]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            S,
            (0, s.jsx)('div', {
                'aria-hidden': !eu,
                children: ei
                    ? (0, s.jsxs)('div', {
                          className: w.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, s.jsxs)('div', {
                                  className: w.utils,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: w.questAcceptedContentHeading,
                                          children: [
                                              (0, s.jsx)(R.Z, {
                                                  className: w.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: V,
                                                  questContent: E.jn.QUEST_BAR,
                                                  location: M.dr.QUESTS_BAR
                                              }),
                                              (0, s.jsxs)('div', {
                                                  children: [
                                                      (0, s.jsx)(u.Heading, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, h.AV)({
                                                              quest: V,
                                                              taskDetails: er,
                                                              thirdPartyTaskDetails: null != ea ? ea : void 0
                                                          })
                                                      }),
                                                      (0, s.jsx)(u.Text, {
                                                          className: w.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: ec ? L.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: Y }) : L.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: F })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(B.r, {
                                          onOpen: D,
                                          onClose: W,
                                          onSelect: H,
                                          questContent: E.jn.QUEST_BAR,
                                          quest: V,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, s.jsx)(u.Clickable, {
                                                  ...e,
                                                  className: w.submenuWrapper,
                                                  'aria-label': L.Z.Messages.ACTIONS,
                                                  children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: w.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              ec
                                  ? (0, s.jsx)(u.Button, {
                                        className: a()(w.cta, w.ctaClaimReward),
                                        style: ed ? ex : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: en,
                                        size: u.Button.Sizes.NONE,
                                        children: L.Z.Messages.QUESTS_CLAIM_REWARD
                                    })
                                  : (0, s.jsx)(u.Text, {
                                        className: w.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ep
                                    }),
                              (0, s.jsx)(j.Z, { quest: V }),
                              !em && !el && !J && eo && (0, s.jsx)(U, { onClick: eu ? es : void 0 })
                          ]
                      })
                    : (0, s.jsxs)('div', {
                          children: [
                              (0, s.jsxs)('div', {
                                  className: w.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, s.jsxs)('div', {
                                          className: w.utils,
                                          children: [
                                              (0, s.jsx)(A.Z, { color: 'always-white' }),
                                              (0, s.jsx)(B.r, {
                                                  onOpen: D,
                                                  onClose: W,
                                                  onSelect: H,
                                                  questContent: E.jn.QUEST_BAR,
                                                  quest: V,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, s.jsx)(u.Clickable, {
                                                          ...e,
                                                          className: w.submenuWrapper,
                                                          'aria-label': L.Z.Messages.ACTIONS,
                                                          children: (0, s.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: w.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, s.jsxs)('div', {
                                          className: w.details,
                                          children: [
                                              (0, s.jsx)(R.Z, {
                                                  className: w.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: V,
                                                  questContent: E.jn.QUEST_BAR,
                                                  location: M.dr.QUESTS_BAR
                                              }),
                                              (0, s.jsx)(u.Heading, {
                                                  className: w.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: L.Z.Messages.QUESTS_TITLE.format({ questName: V.config.messages.questName })
                                              }),
                                              (0, s.jsx)(u.Text, {
                                                  className: w.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ep
                                              })
                                          ]
                                      }),
                                      (0, s.jsx)(u.Button, {
                                          className: w.cta,
                                          style: '1232852290197655573' !== V.id ? ex : void 0,
                                          color: u.Button.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eu ? et : void 0,
                                          size: u.Button.Sizes.NONE,
                                          submitting: G,
                                          children: ee
                                      })
                                  ]
                              }),
                              (0, s.jsx)('div', {
                                  className: w.heroAssetWrapper,
                                  style: { color: V.config.colors.secondary },
                                  children: X.isAnimated
                                      ? (0, s.jsx)(b.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, s.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !z,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: w.heroAsset,
                                                    controls: !1,
                                                    children: (0, s.jsx)('source', {
                                                        src: X.url,
                                                        type: null !== (t = X.mimetype) && void 0 !== t ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, s.jsx)(b.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, s.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: w.heroAsset,
                                                    src: X.url
                                                })
                                        })
                              })
                          ]
                      })
            })
        ]
    });
});
function U(e) {
    let { style: t, onClick: n } = e;
    return (0, S.O)({
        location: M.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, s.jsx)(u.Button, {
              className: w.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: L.Z.Messages.QUESTS_GET_THIS_GAME
          })
        : null;
}
t.Z = k;
