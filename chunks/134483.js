n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(780384),
  c = n(481060),
  u = n(358221),
  d = n(594190),
  _ = n(687516),
  E = n(210887),
  I = n(937995),
  m = n(158776),
  T = n(594174),
  h = n(617136),
  N = n(272008),
  C = n(113434),
  f = n(569984),
  p = n(497505),
  g = n(918701),
  S = n(5881),
  A = n(566078),
  R = n(602667),
  O = n(340100),
  x = n(611855),
  M = n(644646),
  v = n(670638),
  L = n(667105),
  Z = n(860151),
  P = n(341907),
  D = n(46140),
  b = n(981631),
  j = n(354459),
  U = n(689938),
  y = n(630706);
t.Z = function(e) {
  var t, n, a;
  let {
channelId: B,
previewQuest: k,
isParticipatingOverride: G
  } = e, [F, w] = s.useState(!1), V = s.useCallback(() => w(!0), []), H = s.useCallback(() => w(!1), []), Y = s.useContext(I.h9), W = (0, l.e7)([T.default], () => T.default.getCurrentUser()), K = (0, l.e7)([E.Z], () => E.Z.getState().theme), z = (0, o.wj)(K) ? b.BRd.DARK : b.BRd.LIGHT, {
isCurrentUserStreamingQuestApplication: Q,
quest: q
  } = (0, l.cj)([
m.Z,
u.Z,
f.Z
  ], () => {
var e, t, n, i;
let s = u.Z.getParticipants(B),
  a = null != k ? k : function(e, t, n) {
    for (let r of e) {
      var i, s, a;
      if (r.type === j.fO.STREAM) {
        let e = null !== (s = (0, _.Um)(r.stream, n)) && void 0 !== s ? s : null,
          a = (0, g.ZZ)(t, e);
        if (null != a && (null === (i = a.userStatus) || void 0 === i ? void 0 : i.claimedAt) == null)
          return a;
      }
      for (let i of e) {
        if (!(0, j.I)(i))
          for (let e of n.getActivities(i.user.id)) {
            let n = (0, g.ZZ)(t, e);
            if (null != n && (null === (a = n.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null && ((0, g.Nj)({
                quest: n
              }) || (0, g.$J)(n)))
              return n;
          }
      }
    }
    return null;
  }(s, f.Z.quests, m.Z);
return {
  isCurrentUserStreamingQuestApplication: null != a && null != W && (e = s, t = a, n = W, i = m.Z, e.some(e => {
    if (e.type !== j.fO.STREAM || e.user.id !== n.id)
      return !1;
    let s = (0, _.Um)(e.stream, i);
    return null != s && (0, g._D)(s, t);
  })),
  quest: a
};
  }, [
B,
W,
k
  ]), X = null != q ? A.r.build(q.config) : null, J = null == X ? void 0 : X.application.id, $ = (0, l.e7)([
d.ZP,
m.Z
  ], () => {
if (null == q)
  return !1;
let e = d.ZP.getRunningGames().map(e => e.id);
if ((0, g.$H)(q) && e.includes(J))
  return !0;
let t = null != W ? m.Z.findActivity(W.id, e => e.type !== b.IIU.CUSTOM_STATUS) : null;
return !!(null != t && (0, g.$J)(q) && (0, g._D)(t, q)) || !1;
  }, [
q,
J,
W
  ]), ee = !0 === G || Q || $, et = (0, l.e7)([f.Z], () => null != q && f.Z.isEnrolling(q.id), [q]), en = (0, l.e7)([u.Z], () => ((null == W ? void 0 : W.id) == null ? null : u.Z.getParticipant(B, W.id)) != null, [
B,
W
  ]), ei = (0, C.B6)(null == q ? void 0 : q.config.expiresAt), es = (0, C.B6)(null == X ? void 0 : X.rewardsExpireAt), ea = s.useCallback(() => {
null != q && (0, N.AH)(q.id, {
  questContent: p.jn.QUEST_LIVE_STREAM,
  questContentCTA: h.jZ.ACCEPT_QUEST
});
  }, [q]), er = s.useCallback(() => {
null != q && ((0, h._3)({
  questId: q.id,
  questContent: p.jn.QUEST_LIVE_STREAM,
  questContentCTA: h.jZ.TRACK_PROGRESS
}), (0, P.navigateToQuestHome)(D.dr.QUEST_CHANNEL_CALL_HEADER, q.id));
  }, [q]), el = s.useCallback(() => {
null != q && ((0, h._3)({
  questId: q.id,
  questContent: p.jn.QUEST_LIVE_STREAM,
  questContentCTA: h.jZ.LEARN_MORE
}), (0, P.navigateToQuestHome)(D.dr.QUEST_CHANNEL_CALL_HEADER, q.id));
  }, [q]), eo = (0, L.hf)({
quest: q,
location: p.jn.QUEST_LIVE_STREAM
  }), ec = s.useMemo(() => (0, S.T)({
quest: q,
location: D.dr.QUEST_CHANNEL_CALL_HEADER
  }), [q]), eu = (0, C.tP)(q);
  if (null == q || !(0, g.dl)(q))
return null;
  let ed = (null === (t = q.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
e_ = (null === (n = q.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
eE = null != q.userStatus && (0, g.zE)(q.userStatus, p.jn.QUEST_LIVE_STREAM),
eI = null != q.userStatus && (0, g.zE)(q.userStatus, p.jn.QUEST_BAR),
em = (0, g.Mi)(q, p.jn.QUEST_BAR) && !eI;
  ec.info({
isQuestCallHeaderDismissed: eE,
isQuestExpired: eu,
isQuestBarShowing: em,
isCurrentUserCallParticipant: en
  });
  let eT = null != k && (null === (a = q.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null;
  if (!eT && (eE || eu || em) || !eT && !en)
return null;
  let eh = (0, g.il)(q),
eN = (0, i.jsx)(M.Z, {
  className: y.rewardTile,
  autoplay: F,
  quest: q,
  questContent: p.jn.QUEST_LIVE_STREAM,
  location: D.dr.QUEST_CHANNEL_CALL_HEADER
});
  return (0, i.jsx)(R.A, {
questOrQuests: q,
overrideVisibility: !Y,
questContent: p.jn.QUEST_LIVE_STREAM,
children: () => {
  var e;
  return (0, i.jsxs)('div', {
    className: r()(y.wrapper, {
      [y.wrapperAccepted]: ed
    }),
    onFocus: V,
    onMouseEnter: V,
    onBlur: H,
    onMouseLeave: H,
    children: [
      !ed && (0, i.jsxs)('div', {
        className: y.rewardTileWrapper,
        children: [
          eN,
          (0, i.jsx)(x.Z, {
            bgOpacity: 0.32,
            className: y.promotedTag
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: y.content,
        children: [
          (0, i.jsxs)('div', {
            className: y.heading,
            children: [
              ed && ee ? eN : (0, i.jsx)('img', {
                className: y.gameTile,
                alt: q.config.messages.gameTitle,
                src: (0, g.uo)(q, z)
              }),
              (0, i.jsxs)('div', {
                children: [
                  (0, i.jsxs)('div', {
                    className: y.headingWithSubmenu,
                    children: [
                      (0, i.jsx)(c.Heading, {
                        className: y.questTitle,
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: ee ? (0, g.AV)({
                          quest: q,
                          taskDetails: eh
                        }) : U.Z.Messages.QUESTS_TITLE.format({
                          questName: q.config.messages.questName
                        })
                      }),
                      (0, i.jsx)(v.r, {
                        questContent: p.jn.QUEST_LIVE_STREAM,
                        quest: q,
                        preventIdle: !0,
                        shouldShowDisclosure: (null === (e = q.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                        children: e => (0, i.jsx)(c.Clickable, {
                          ...e,
                          className: y.submenuWrapper,
                          'aria-label': U.Z.Messages.ACTIONS,
                          children: (0, i.jsx)(c.MoreHorizontalIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: y.submenuIcon
                          })
                        })
                      })
                    ]
                  }),
                  (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-xs/medium',
                    children: e_ ? U.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                      expirationDate: es
                    }) : U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                      expirationDate: ei
                    })
                  })
                ]
              })
            ]
          }),
          ed && !e_ && !ee && (0, i.jsx)(Z.Z, {
            autoplay: F,
            quest: q,
            questContent: p.jn.QUEST_LIVE_STREAM,
            taskDetails: eh,
            location: D.dr.QUEST_CHANNEL_CALL_HEADER
          }),
          (0, i.jsxs)('div', {
            className: y.ctas,
            children: [
              !ed && (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(c.Button, {
                    className: y.cta,
                    color: c.Button.Colors.PRIMARY,
                    fullWidth: !0,
                    size: c.Button.Sizes.SMALL,
                    onClick: el,
                    children: U.Z.Messages.QUESTS_LEARN_MORE_V2
                  }),
                  (0, i.jsx)(c.Button, {
                    className: y.cta,
                    color: c.Button.Colors.BRAND,
                    fullWidth: !0,
                    onClick: ea,
                    size: c.Button.Sizes.SMALL,
                    submitting: et,
                    children: U.Z.Messages.QUESTS_ACCEPT_QUEST
                  })
                ]
              }),
              ed && !e_ && ee && (0, i.jsx)(O.Z, {
                color: c.tokens.colors.BG_BRAND,
                quest: q
              }),
              ed && !e_ && !ee && (0, i.jsx)(c.Button, {
                className: y.cta,
                color: c.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: er,
                size: c.Button.Sizes.SMALL,
                children: U.Z.Messages.QUESTS_CHECK_PROGRESS
              }),
              e_ && (0, i.jsx)(c.Button, {
                className: y.cta,
                color: c.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: eo,
                size: c.Button.Sizes.SMALL,
                children: U.Z.Messages.QUESTS_CLAIM_REWARD
              })
            ]
          })
        ]
      })
    ]
  });
}
  });
};