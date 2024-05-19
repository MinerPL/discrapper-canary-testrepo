"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("780384"),
  u = n("481060"),
  d = n("230711"),
  c = n("358221"),
  f = n("594190"),
  h = n("687516"),
  m = n("210887"),
  p = n("937995"),
  E = n("158776"),
  C = n("594174"),
  g = n("808268"),
  S = n("617136"),
  _ = n("272008"),
  T = n("113434"),
  I = n("569984"),
  A = n("497505"),
  N = n("918701"),
  v = n("242755"),
  x = n("5881"),
  M = n("874137"),
  R = n("340100"),
  y = n("611855"),
  L = n("644646"),
  O = n("670638"),
  j = n("667105"),
  P = n("860151"),
  D = n("46140"),
  b = n("981631"),
  U = n("354459"),
  F = n("689938"),
  w = n("599660");
t.default = function(e) {
  var t, n, s;
  let {
    channelId: k,
    previewQuest: B,
    isParticipatingOverride: H
  } = e, [G, V] = l.useState(!1), W = l.useCallback(() => V(!0), []), Y = l.useCallback(() => V(!1), []), z = l.useContext(p.IdleStateContext), K = (0, r.useStateFromStores)([C.default], () => C.default.getCurrentUser()), Z = (0, r.useStateFromStores)([m.default], () => m.default.getState().theme), q = (0, o.isThemeDark)(Z) ? b.ThemeTypes.DARK : b.ThemeTypes.LIGHT, {
    isCurrentUserStreamingQuestApplication: X,
    quest: Q
  } = (0, r.useStateFromStoresObject)([E.default, c.default, I.default], () => {
    let e = c.default.getParticipants(k),
      t = function(e, t, n) {
        for (let s of e) {
          var a, l;
          if (s.type === U.ParticipantTypes.STREAM) {
            let e = (0, h.getStreamerApplication)(s.stream, n),
              l = (null == e ? void 0 : e.id) != null ? (0, N.getQuestByApplicationId)(t, e.id) : null;
            if (null != l && (null === (a = l.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return l
          }
          if ((0, v.isEligibleForQuestPlaytime)({
              location: D.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
            }))
            for (let a of e) {
              if (!(0, U.isActivityParticipant)(a))
                for (let e of n.getActivities(a.user.id)) {
                  if (null == e.application_id) continue;
                  let n = (0, N.getPlaytimeQuestByApplicationId)(t, e.application_id);
                  if (null != n && (null === (l = n.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null) return n
                }
            }
        }
        return null
      }(e, I.default.quests, E.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != K && function(e, t, n, a) {
        for (let s of e) {
          var l;
          if (s.type === U.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (l = (0, h.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
        }
        return !1
      }(e, t, K, E.default),
      quest: t
    }
  }, [k, K]), J = (0, r.useStateFromStoresObject)([f.default], () => {
    let e = f.default.getRunningGames().map(e => e.id);
    return null != Q && (0, v.isEligibleForQuestPlaytime)({
      location: D.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
    }) && (0, N.hasPlaytimeTaskVariant)({
      quest: Q
    }) && e.includes(Q.config.applicationId)
  }, [Q]), $ = !0 === H || X || J, ee = (0, r.useStateFromStores)([I.default], () => null != Q && I.default.isEnrolling(Q.id), [Q]), et = (0, r.useStateFromStores)([c.default], () => ((null == K ? void 0 : K.id) == null ? null : c.default.getParticipant(k, K.id)) != null, [k, K]), en = (0, T.useQuestFormattedDate)(null == Q ? void 0 : Q.config.expiresAt), ea = (0, T.useQuestFormattedDate)(null == Q ? void 0 : Q.config.rewardCodeExpiresAt), el = l.useCallback(() => {
    null != Q && (0, _.enrollInQuest)(Q.id, {
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.ACCEPT_QUEST
    })
  }, [Q]), es = l.useCallback(() => {
    null != Q && ((0, S.trackQuestContentClicked)({
      questId: Q.id,
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.TRACK_PROGRESS
    }), d.default.open(b.UserSettingsSections.INVENTORY))
  }, [Q]), ei = l.useCallback(() => {
    null != Q && ((0, S.trackQuestContentClicked)({
      questId: Q.id,
      questContent: A.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: S.QuestContentCTA.LEARN_MORE
    }), d.default.open(b.UserSettingsSections.INVENTORY))
  }, [Q]), er = (0, j.useHandleClaimQuestsReward)({
    quest: Q,
    location: A.QuestContent.QUEST_LIVE_STREAM
  }), eo = l.useMemo(() => (0, x.getQuestLogger)({
    quest: Q,
    location: D.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
  }), [Q]), eu = (0, T.useIsQuestExpired)(Q);
  if (null != B && (Q = B), null == Q) return null;
  let ed = (null === (t = Q.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    ec = (null === (n = Q.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    ef = null != Q.userStatus && (0, N.isDismissed)(Q.userStatus, A.QuestContent.QUEST_LIVE_STREAM),
    eh = null != Q.userStatus && (0, N.isDismissed)(Q.userStatus, A.QuestContent.QUEST_BAR),
    em = (0, N.isTargetedForContent)(Q, A.QuestContent.QUEST_BAR) && !eh;
  eo.info({
    isQuestCallHeaderDismissed: ef,
    isQuestExpired: eu,
    isQuestBarShowing: em,
    isCurrentUserCallParticipant: et
  });
  let ep = null != B && (null === (s = Q.userStatus) || void 0 === s ? void 0 : s.claimedAt) == null;
  if (!ep && (ef || eu || em) || !ep && !et) return null;
  let eE = (0, a.jsx)(L.default, {
    className: w.rewardTile,
    autoplay: G,
    quest: Q,
    questContent: A.QuestContent.QUEST_LIVE_STREAM
  });
  return (0, a.jsx)(M.QuestContentImpressionTracker, {
    questOrQuests: Q,
    overrideVisibility: !z,
    questContent: A.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, a.jsxs)("div", {
        className: i()(w.wrapper, {
          [w.wrapperAccepted]: ed
        }),
        onFocus: W,
        onMouseEnter: W,
        onBlur: Y,
        onMouseLeave: Y,
        children: [!ed && (0, a.jsxs)("div", {
          className: w.rewardTileWrapper,
          children: [eE, (0, a.jsx)(y.default, {
            bgOpacity: .32,
            className: w.promotedTag
          })]
        }), (0, a.jsxs)("div", {
          className: w.content,
          children: [(0, a.jsxs)("div", {
            className: w.heading,
            children: [ed && $ ? eE : (0, a.jsx)("img", {
              className: w.gameTile,
              alt: Q.config.messages.gameTitle,
              src: (0, N.getGameTileAssetUrl)(Q, q)
            }), (0, a.jsxs)("div", {
              className: w.__invalid_details,
              children: [(0, a.jsxs)("div", {
                className: w.headingWithSubmenu,
                children: [(0, a.jsx)(u.Heading, {
                  className: w.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: $ ? (0, N.getContextualEntrypointHeading)(Q) : F.default.Messages.QUESTS_TITLE.format({
                    questName: Q.config.messages.questName
                  })
                }), (0, a.jsx)(O.QuestsEntryContextMenuPopout, {
                  questContent: A.QuestContent.QUEST_LIVE_STREAM,
                  quest: Q,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = Q.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, a.jsx)(u.Clickable, {
                    ...e,
                    className: w.submenuWrapper,
                    "aria-label": F.default.Messages.ACTIONS,
                    children: (0, a.jsx)(g.default, {
                      className: w.submenuIcon
                    })
                  })
                })]
              }), (0, a.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: ec ? F.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: ea
                }) : F.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: en
                })
              })]
            })]
          }), ed && !ec && !$ && (0, a.jsx)(P.default, {
            autoplay: G,
            quest: Q,
            questContent: A.QuestContent.QUEST_LIVE_STREAM,
            questExperimentLocation: D.QuestsExperimentLocations.QUEST_CHANNEL_CALL_HEADER
          }), (0, a.jsxs)("div", {
            className: w.ctas,
            children: [!ed && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(u.Button, {
                className: w.cta,
                color: u.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: u.Button.Sizes.SMALL,
                onClick: ei,
                children: F.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, a.jsx)(u.Button, {
                className: w.cta,
                color: u.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: el,
                size: u.Button.Sizes.SMALL,
                submitting: ee,
                children: F.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), ed && !ec && $ && (0, a.jsx)(R.default, {
              color: u.tokens.colors.BG_BRAND,
              quest: Q
            }), ed && !ec && !$ && (0, a.jsx)(u.Button, {
              className: w.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: es,
              size: u.Button.Sizes.SMALL,
              children: F.default.Messages.QUESTS_CHECK_PROGRESS
            }), ec && (0, a.jsx)(u.Button, {
              className: w.cta,
              color: u.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: er,
              size: u.Button.Sizes.SMALL,
              children: F.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}