n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(663002),
    c = n(481060),
    d = n(210887),
    u = n(617136),
    _ = n(272008),
    E = n(113434),
    h = n(569984),
    m = n(497505),
    I = n(918701),
    p = n(585500),
    g = n(475595),
    T = n(566078),
    f = n(602667),
    S = n(611855),
    C = n(670638),
    N = n(667105),
    A = n(860151),
    v = n(341907),
    Z = n(46140),
    L = n(981631),
    R = n(689938),
    O = n(233342);
function x(e) {
    var t;
    let { quest: n } = e,
        a = (0, E.B6)(n.config.expiresAt),
        s = (0, E.B6)(T.r.build(n.config).rewardsExpireAt),
        r = (0, l.e7)([d.Z], () => d.Z.getState().theme),
        u = (0, o.wj)(r) ? L.BRd.DARK : L.BRd.LIGHT,
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
    return (0, i.jsxs)('div', {
        className: O.heading,
        children: [
            (0, i.jsx)('img', {
                className: O.headingGameTile,
                alt: '',
                src: (0, g.fh)(n, g.Bd.GAME_TILE, u).url
            }),
            (0, i.jsxs)('div', {
                className: O.headingCopy,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: _ ? R.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : R.Z.Messages.QUESTS_TITLE.format({ questName: n.config.messages.questName })
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: _ ? R.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: s }) : R.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: a })
                    })
                ]
            })
        ]
    });
}
t.Z = function (e) {
    var t, n, s;
    let { quest: o } = e,
        d = (0, l.e7)([h.Z], () => h.Z.isEnrolling(o.id), [o]),
        [g, T] = a.useState(!1),
        L = a.useCallback(() => T(!0), []),
        b = a.useCallback(() => T(!1), []),
        M = a.useCallback((e) => {
            e.stopPropagation();
        }, []),
        P = a.useCallback(() => {
            (0, _.AH)(o.id, {
                questContent: m.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [o]),
        D = a.useCallback(() => {
            null != o &&
                ((0, u._3)({
                    questId: o.id,
                    questContent: m.jn.ACTIVITY_PANEL,
                    questContentCTA: u.jZ.TRACK_PROGRESS
                }),
                (0, v.navigateToQuestHome)(Z.dr.ACTIVITY_PANEL, m.jn.ACTIVITY_PANEL, o.id));
        }, [o]),
        y = a.useCallback(() => {
            (0, u._3)({
                questId: o.id,
                questContent: m.jn.ACTIVITY_PANEL,
                questContentCTA: u.jZ.LEARN_MORE
            }),
                (0, v.navigateToQuestHome)(Z.dr.ACTIVITY_PANEL, m.jn.ACTIVITY_PANEL, o.id);
        }, [o]),
        j = (0, N.hf)({
            quest: o,
            location: m.jn.ACTIVITY_PANEL
        }),
        U = (0, E.tP)(o),
        G = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        w = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        k = (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
        B = (null == o ? void 0 : o.userStatus) == null || (0, I.zE)(o.userStatus, m.jn.ACTIVITY_PANEL),
        V = (0, E.Rf)(o),
        H = (0, p.D)({
            quest: o,
            taskDetails: V,
            location: Z.dr.ACTIVITY_PANEL,
            questContent: m.jn.ACTIVITY_PANEL
        });
    return B || U || k || !(0, I.dl)(o)
        ? null
        : (0, i.jsx)(f.A, {
              questOrQuests: o,
              questContent: m.jn.ACTIVITY_PANEL,
              children: (e) => {
                  var t;
                  return (0, i.jsxs)('div', {
                      ref: (t) => {
                          e.current = t;
                      },
                      className: r()(O.wrapper, { [O.wrapperQuestAccepted]: G }),
                      onClick: M,
                      onKeyPress: M,
                      onFocus: L,
                      onMouseEnter: L,
                      onBlur: b,
                      onMouseLeave: b,
                      children: [
                          (0, i.jsxs)('div', {
                              className: O.utils,
                              children: [
                                  G ? (0, i.jsx)(x, { quest: o }) : (0, i.jsx)(S.Z, { textOpacity: 0.5 }),
                                  (0, i.jsx)(C.r, {
                                      quest: o,
                                      questContent: m.jn.ACTIVITY_PANEL,
                                      shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
                                      showShareLink: !0,
                                      children: (e) =>
                                          (0, i.jsx)(c.Clickable, {
                                              ...e,
                                              'aria-label': R.Z.Messages.ACTIONS,
                                              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: O.submenuIcon
                                              })
                                          })
                                  })
                              ]
                          }),
                          !G &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(x, { quest: o }),
                                      (0, i.jsx)(c.Text, {
                                          className: O.instructions,
                                          variant: 'text-sm/normal',
                                          color: 'text-normal',
                                          children: H
                                      })
                                  ]
                              }),
                          G &&
                              !w &&
                              (0, i.jsx)(A.Z, {
                                  autoplay: g,
                                  className: O.rewardTileWithInstructions,
                                  quest: o,
                                  questContent: m.jn.ACTIVITY_PANEL,
                                  location: Z.dr.ACTIVITY_PANEL,
                                  taskDetails: V
                              }),
                          (0, i.jsxs)('div', {
                              className: O.ctas,
                              children: [
                                  !G &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(c.Button, {
                                                  className: O.cta,
                                                  color: c.Button.Colors.PRIMARY,
                                                  fullWidth: !0,
                                                  size: c.Button.Sizes.SMALL,
                                                  onClick: y,
                                                  children: R.Z.Messages.QUESTS_LEARN_MORE_V2
                                              }),
                                              (0, i.jsx)(c.Button, {
                                                  className: O.cta,
                                                  color: c.Button.Colors.BRAND,
                                                  fullWidth: !0,
                                                  onClick: P,
                                                  size: c.Button.Sizes.SMALL,
                                                  submitting: d,
                                                  children: R.Z.Messages.QUESTS_ACCEPT_QUEST
                                              })
                                          ]
                                      }),
                                  G &&
                                      !w &&
                                      (0, i.jsx)(c.Button, {
                                          className: O.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: D,
                                          size: c.Button.Sizes.SMALL,
                                          children: R.Z.Messages.QUESTS_CHECK_PROGRESS
                                      }),
                                  w &&
                                      (0, i.jsx)(c.Button, {
                                          className: O.cta,
                                          color: c.Button.Colors.BRAND,
                                          fullWidth: !0,
                                          onClick: j,
                                          size: c.Button.Sizes.SMALL,
                                          children: R.Z.Messages.QUESTS_CLAIM_REWARD
                                      })
                              ]
                          })
                      ]
                  });
              }
          });
};
