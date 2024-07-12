n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(663002),
  c = n(481060),
  d = n(230711),
  u = n(210887),
  _ = n(617136),
  h = n(272008),
  E = n(113434),
  I = n(569984),
  m = n(497505),
  g = n(918701),
  p = n(585500),
  T = n(566078),
  S = n(602667),
  C = n(611855),
  f = n(670638),
  N = n(667105),
  A = n(860151),
  Z = n(46140),
  L = n(981631),
  v = n(689938),
  O = n(921430);

function R(e) {
  var t;
  let {
quest: n
  } = e, s = (0, E.B6)(n.config.expiresAt), a = (0, E.B6)(T.r.build(n.config).rewardsExpireAt), r = (0, l.e7)([u.Z], () => u.Z.getState().theme), d = (0, o.w)(r) ? L.BRd.DARK : L.BRd.LIGHT, _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, i.jsxs)('div', {
className: O.heading,
children: [
  (0, i.jsx)('img', {
    className: O.headingGameTile,
    alt: '',
    src: (0, g.uo)(n, d)
  }),
  (0, i.jsxs)('div', {
    className: O.headingCopy,
    children: [
      (0, i.jsx)(c.Heading, {
        variant: 'heading-md/semibold',
        color: 'header-primary',
        children: _ ? v.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : v.Z.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }),
      (0, i.jsx)(c.Text, {
        variant: 'text-xs/normal',
        color: 'header-secondary',
        children: _ ? v.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
          expirationDate: a
        }) : v.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
          expirationDate: s
        })
      })
    ]
  })
]
  });
}
t.Z = function(e) {
  var t, n, a;
  let {
quest: o
  } = e, u = (0, l.e7)([I.Z], () => I.Z.isEnrolling(o.id), [o]), [T, x] = s.useState(!1), b = s.useCallback(() => x(!0), []), P = s.useCallback(() => x(!1), []), M = s.useCallback(e => {
e.stopPropagation();
  }, []), D = s.useCallback(() => {
(0, h.AH)(o.id, {
  questContent: m.jn.ACTIVITY_PANEL,
  questContentCTA: _.jZ.ACCEPT_QUEST
});
  }, [o]), y = s.useCallback(() => {
null != o && ((0, _._3)({
  questId: o.id,
  questContent: m.jn.ACTIVITY_PANEL,
  questContentCTA: _.jZ.TRACK_PROGRESS
}), d.Z.open(L.oAB.INVENTORY));
  }, [o]), j = s.useCallback(() => {
(0, _._3)({
  questId: o.id,
  questContent: m.jn.ACTIVITY_PANEL,
  questContentCTA: _.jZ.LEARN_MORE
}), d.Z.open(L.oAB.INVENTORY);
  }, [o]), U = (0, N.hf)({
quest: o,
location: m.jn.ACTIVITY_PANEL
  }), G = (0, E.tP)(o), k = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, w = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, B = (null === (a = o.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, H = (null == o ? void 0 : o.userStatus) == null || (0, g.zE)(o.userStatus, m.jn.ACTIVITY_PANEL), V = (0, E.Rf)(o), F = (0, p.D)({
quest: o,
taskDetails: V,
location: Z.dr.ACTIVITY_PANEL,
questContent: m.jn.ACTIVITY_PANEL
  });
  return H || G || B || !(0, g.dl)(o) ? null : (0, i.jsx)(S.A, {
questOrQuests: o,
questContent: m.jn.ACTIVITY_PANEL,
children: e => {
  var t;
  return (0, i.jsxs)('div', {
    ref: t => {
      e.current = t;
    },
    className: r()(O.wrapper, {
      [O.wrapperQuestAccepted]: k
    }),
    onClick: M,
    onKeyPress: M,
    onFocus: b,
    onMouseEnter: b,
    onBlur: P,
    onMouseLeave: P,
    children: [
      (0, i.jsxs)('div', {
        className: O.utils,
        children: [
          k ? (0, i.jsx)(R, {
            quest: o
          }) : (0, i.jsx)(C.Z, {
            textOpacity: 0.5
          }),
          (0, i.jsx)(f.r, {
            quest: o,
            questContent: m.jn.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            showShareLink: !0,
            children: e => (0, i.jsx)(c.Clickable, {
              ...e,
              'aria-label': v.Z.Messages.ACTIONS,
              children: (0, i.jsx)(c.MoreHorizontalIcon, {
                size: 'md',
                color: 'currentColor',
                className: O.submenuIcon
              })
            })
          })
        ]
      }),
      !k && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(R, {
            quest: o
          }),
          (0, i.jsx)(c.Text, {
            className: O.instructions,
            variant: 'text-sm/normal',
            color: 'text-normal',
            children: F
          })
        ]
      }),
      k && !w && (0, i.jsx)(A.Z, {
        autoplay: T,
        className: O.rewardTileWithInstructions,
        quest: o,
        questContent: m.jn.ACTIVITY_PANEL,
        location: Z.dr.ACTIVITY_PANEL,
        taskDetails: V
      }),
      (0, i.jsxs)('div', {
        className: O.ctas,
        children: [
          !k && (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c.Button, {
                className: O.cta,
                color: c.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: c.Button.Sizes.SMALL,
                onClick: j,
                children: v.Z.Messages.QUESTS_LEARN_MORE_V2
              }),
              (0, i.jsx)(c.Button, {
                className: O.cta,
                color: c.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: D,
                size: c.Button.Sizes.SMALL,
                submitting: u,
                children: v.Z.Messages.QUESTS_ACCEPT_QUEST
              })
            ]
          }),
          k && !w && (0, i.jsx)(c.Button, {
            className: O.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: y,
            size: c.Button.Sizes.SMALL,
            children: v.Z.Messages.QUESTS_CHECK_PROGRESS
          }),
          w && (0, i.jsx)(c.Button, {
            className: O.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: U,
            size: c.Button.Sizes.SMALL,
            children: v.Z.Messages.QUESTS_CLAIM_REWARD
          })
        ]
      })
    ]
  });
}
  });
};