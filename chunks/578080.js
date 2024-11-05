var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(100621),
    l = n(442837),
    c = n(950104),
    d = n(780384),
    u = n(481060),
    p = n(70097),
    m = n(703656),
    x = n(358085),
    g = n(617136),
    f = n(272008),
    h = n(113434),
    C = n(569984),
    v = n(497505),
    j = n(918701),
    _ = n(865364),
    E = n(585500),
    b = n(475595),
    N = n(566078),
    S = n(340100),
    T = n(611855),
    B = n(644646),
    A = n(78826),
    y = n(670638),
    R = n(667105),
    w = n(46140),
    I = n(981631),
    k = n(701488),
    q = n(388032),
    P = n(609706);
let O = r.forwardRef(function (e, t) {
    var n, s;
    let { children: _, className: O, collapsedHeight: W, expansionSpring: L, isExpanded: Q, isExpansionAnimationComplete: Z, onCtxMenuOpen: D, onCtxMenuClose: H, onCtxMenuSelect: U, quest: V, useReducedMotion: z } = e,
        F = (0, l.e7)([C.Z], () => C.Z.isEnrolling(V.id), [V]),
        G = (0, h.B6)(V.config.expiresAt),
        K = N.r.build(V.config),
        Y = (0, h.B6)(K.rewardsExpireAt),
        X = r.useMemo(() => (0, b.fh)(V, b.eC.HERO), [V]),
        J = (0, R.tP)(K.application.id),
        $ = K.features.has(w.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
        ee = K.features.has(w.S7.START_QUEST_CTA) ? q.intl.string(q.t.E80Bdn) : q.intl.string(q.t.l7E81t),
        et = r.useCallback(() => {
            (0, f.AH)(V.id, {
                questContent: v.jn.QUEST_BAR,
                questContentCTA: $
            }),
                K.features.has(w.S7.START_QUEST_CTA) && (0, m.uL)(I.Z5c.ACTIVITY_DETAILS(k.In), void 0);
        }, [V, $, K.features]),
        en = (0, R.hf)({
            quest: V,
            location: v.jn.QUEST_BAR
        }),
        eo = r.useCallback(() => {
            (0, j.FE)(V, {
                content: v.jn.QUEST_BAR,
                ctaContent: g.jZ.OPEN_GAME_LINK
            });
        }, [V]),
        er = K.features.has(w.S7.POST_ENROLLMENT_CTA),
        es = (0, h.Rf)(V),
        ea = (0, h.Jf)(V),
        ei = null != ea ? ea.progress > 0 : es.progressSeconds > 0,
        el = (null === (n = V.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        ec = (null === (s = V.userStatus) || void 0 === s ? void 0 : s.completedAt) != null,
        ed = r.useMemo(() => (0, j.Xv)(V.config), [V.config]),
        eu = Q && Z,
        ep = (0, E.D)({
            quest: V,
            taskDetails: es,
            location: w.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR,
            thirdPartyTaskDetails: null != ea ? ea : void 0
        }),
        em = (0, x.isWeb)(),
        ex = r.useMemo(() => {
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
    return (0, o.jsxs)(i.animated.div, {
        className: a()(O, P.contentExpanded, { [P.contentInteractable]: eu }),
        style: {
            backgroundColor: V.config.colors.secondary,
            transform: ec
                ? void 0
                : (0, i.to)(
                      [
                          L.to({
                              range: [0, 1],
                              output: [0, -100]
                          }),
                          L.to({
                              range: [0, 1],
                              output: [0, W]
                          })
                      ],
                      (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
                  )
        },
        children: [
            _,
            (0, o.jsx)('div', {
                'aria-hidden': !eu,
                children: el
                    ? (0, o.jsxs)('div', {
                          className: P.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, o.jsxs)('div', {
                                  className: P.utils,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: P.questAcceptedContentHeading,
                                          children: [
                                              (0, o.jsx)(B.Z, {
                                                  className: P.questProgressRewardTile,
                                                  learnMoreStyle: 'icon',
                                                  quest: V,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: w.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsxs)('div', {
                                                  children: [
                                                      (0, o.jsx)(u.Heading, {
                                                          color: 'always-white',
                                                          variant: 'heading-sm/semibold',
                                                          children: (0, j.AV)({
                                                              quest: V,
                                                              taskDetails: es,
                                                              thirdPartyTaskDetails: null != ea ? ea : void 0
                                                          })
                                                      }),
                                                      (0, o.jsx)(u.Text, {
                                                          className: P.questAcceptedContentCopySubheading,
                                                          color: 'always-white',
                                                          variant: 'text-xxs/normal',
                                                          children: ec ? q.intl.formatToPlainString(q.t.APddvL, { expirationDate: Y }) : q.intl.formatToPlainString(q.t['pX+fmp'], { expirationDate: G })
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(y.r, {
                                          onOpen: D,
                                          onClose: H,
                                          onSelect: U,
                                          questContent: v.jn.QUEST_BAR,
                                          quest: V,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, o.jsx)(u.Clickable, {
                                                  ...e,
                                                  className: P.submenuWrapper,
                                                  'aria-label': q.intl.string(q.t.DEoVWV),
                                                  children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: P.submenuIcon
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              ec
                                  ? (0, o.jsx)(u.Button, {
                                        className: a()(P.cta, P.ctaClaimReward),
                                        style: ed ? ex : void 0,
                                        color: u.Button.Colors.CUSTOM,
                                        fullWidth: !0,
                                        onClick: en,
                                        size: u.Button.Sizes.NONE,
                                        children: q.intl.string(q.t.cfY4PD)
                                    })
                                  : (0, o.jsx)(u.Text, {
                                        className: P.description,
                                        color: 'always-white',
                                        variant: 'text-xs/normal',
                                        children: ep
                                    }),
                              (0, o.jsx)(S.Z, { quest: V }),
                              !em && !ei && !J && er && (0, o.jsx)(M, { onClick: eu ? eo : void 0 })
                          ]
                      })
                    : (0, o.jsxs)('div', {
                          children: [
                              (0, o.jsxs)('div', {
                                  className: P.questPromoContent,
                                  ref: t,
                                  children: [
                                      (0, o.jsxs)('div', {
                                          className: P.utils,
                                          children: [
                                              (0, o.jsx)(T.Z, { color: 'always-white' }),
                                              (0, o.jsx)(y.r, {
                                                  onOpen: D,
                                                  onClose: H,
                                                  onSelect: U,
                                                  questContent: v.jn.QUEST_BAR,
                                                  quest: V,
                                                  shouldShowDisclosure: !0,
                                                  showShareLink: !0,
                                                  children: (e) =>
                                                      (0, o.jsx)(u.Clickable, {
                                                          ...e,
                                                          className: P.submenuWrapper,
                                                          'aria-label': q.intl.string(q.t.DEoVWV),
                                                          children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                                              size: 'md',
                                                              color: 'currentColor',
                                                              className: P.submenuIcon
                                                          })
                                                      })
                                              })
                                          ]
                                      }),
                                      (0, o.jsxs)('div', {
                                          className: P.details,
                                          children: [
                                              (0, o.jsx)(B.Z, {
                                                  className: P.rewardTile,
                                                  learnMoreStyle: 'text',
                                                  quest: V,
                                                  questContent: v.jn.QUEST_BAR,
                                                  location: w.dr.QUESTS_BAR
                                              }),
                                              (0, o.jsx)(u.Heading, {
                                                  className: P.title,
                                                  color: 'always-white',
                                                  variant: 'heading-md/medium',
                                                  children: q.intl.format(q.t.EQa7oq, { questName: V.config.messages.questName })
                                              }),
                                              (0, o.jsx)(u.Text, {
                                                  className: P.description,
                                                  color: 'always-white',
                                                  variant: 'text-sm/normal',
                                                  children: ep
                                              })
                                          ]
                                      }),
                                      (0, o.jsx)(u.Button, {
                                          className: P.cta,
                                          style: '1232852290197655573' !== V.id ? ex : void 0,
                                          color: u.Button.Colors.CUSTOM,
                                          fullWidth: !0,
                                          onClick: eu ? et : void 0,
                                          size: u.Button.Sizes.NONE,
                                          submitting: F,
                                          children: ee
                                      })
                                  ]
                              }),
                              (0, o.jsx)('div', {
                                  className: P.heroAssetWrapper,
                                  style: { color: V.config.colors.secondary },
                                  children: X.isAnimated
                                      ? (0, o.jsx)(A.Fl, {
                                            id: 'QuestBarContentExpanded_heroAnimated',
                                            children: (e) => {
                                                var t;
                                                return (0, o.jsx)(p.Z, {
                                                    ref: e,
                                                    autoPlay: !z,
                                                    loop: !0,
                                                    muted: !0,
                                                    playsInline: !0,
                                                    className: P.heroAsset,
                                                    controls: !1,
                                                    children: (0, o.jsx)('source', {
                                                        src: X.url,
                                                        type: null !== (t = X.mimetype) && void 0 !== t ? t : void 0
                                                    })
                                                });
                                            }
                                        })
                                      : (0, o.jsx)(A.Fl, {
                                            id: 'QuestBarContentExpanded_heroStatic',
                                            children: (e) =>
                                                (0, o.jsx)('img', {
                                                    ref: e,
                                                    alt: '',
                                                    className: P.heroAsset,
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
function M(e) {
    let { style: t, onClick: n } = e;
    return (0, _.O)({
        location: w.dr.QUESTS_BAR,
        autoTrackExposure: !0
    })
        ? (0, o.jsx)(u.Button, {
              className: P.cta,
              style: t,
              color: u.Button.Colors.CUSTOM,
              fullWidth: !0,
              onClick: n,
              size: u.Button.Sizes.NONE,
              children: q.intl.string(q.t.lwQdjI)
          })
        : null;
}
t.Z = O;
