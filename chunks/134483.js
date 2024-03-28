"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("230711"),
  d = n("358221"),
  c = n("687516"),
  f = n("937995"),
  h = n("158776"),
  m = n("594174"),
  p = n("808268"),
  E = n("617136"),
  C = n("272008"),
  g = n("113434"),
  S = n("569984"),
  _ = n("497505"),
  T = n("918701"),
  I = n("874137"),
  A = n("340100"),
  v = n("611855"),
  N = n("670638"),
  x = n("667105"),
  M = n("860151"),
  R = n("981631"),
  L = n("354459"),
  y = n("689938"),
  O = n("682164");
t.default = function(e) {
  var t, n;
  let {
    channelId: s
  } = e, j = l.useContext(f.IdleStateContext), P = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    isCurrentUserStreamingQuestApplication: D,
    quest: b
  } = (0, r.useStateFromStoresObject)([h.default, d.default, S.default], () => {
    let e = d.default.getParticipants(s),
      t = function(e, t, n) {
        for (let l of e)
          if (l.type === L.ParticipantTypes.STREAM) {
            var a;
            let e = (0, c.getStreamerApplication)(l.stream, n),
              s = (null == e ? void 0 : e.id) != null ? (0, T.getQuestByApplicationId)(t, e.id) : null;
            if (null != s && (null === (a = s.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return s
          } return null
      }(e, S.default.quests, h.default);
    return {
      isCurrentUserStreamingQuestApplication: null != t && null != P && function(e, t, n, a) {
        for (let s of e) {
          var l;
          if (s.type === L.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (l = (0, c.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
        }
        return !1
      }(e, t, P, h.default),
      quest: t
    }
  }, [s, P]), U = (0, r.useStateFromStores)([S.default], () => null != b && S.default.isEnrolling(b.id), [b]), F = (0, r.useStateFromStores)([d.default], () => ((null == P ? void 0 : P.id) == null ? null : d.default.getParticipant(s, P.id)) != null, [s, P]), w = (0, g.useQuestFormattedDate)(null == b ? void 0 : b.config.expiresAt), k = (0, g.useQuestFormattedDate)(null == b ? void 0 : b.config.rewardCodeExpiresAt), H = l.useCallback(() => {
    null != b && (0, C.enrollInQuest)(b.id, {
      questContent: _.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
    })
  }, [b]), B = l.useCallback(() => {
    null != b && ((0, E.trackQuestContentClicked)({
      questId: b.id,
      questContent: _.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: E.QuestContentCTA.TRACK_PROGRESS
    }), u.default.open(R.UserSettingsSections.INVENTORY))
  }, [b]), G = l.useCallback(() => {
    null != b && ((0, E.trackQuestContentClicked)({
      questId: b.id,
      questContent: _.QuestContent.QUEST_LIVE_STREAM,
      questContentCTA: E.QuestContentCTA.LEARN_MORE
    }), u.default.open(R.UserSettingsSections.INVENTORY))
  }, [b]), V = (0, x.useHandleClaimQuestsReward)({
    quest: b,
    location: _.QuestContent.QUEST_LIVE_STREAM
  }), W = (0, g.useIsQuestExpired)(b);
  if (null == b) return null;
  let Y = (null === (t = b.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
    z = (null === (n = b.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
    Z = null != b.userStatus && (0, T.isDismissed)(b.userStatus, _.QuestContent.QUEST_LIVE_STREAM),
    K = null != b.userStatus && (0, T.isDismissed)(b.userStatus, _.QuestContent.QUEST_BAR);
  return Z || W || !K || !F ? null : (0, a.jsx)(I.QuestContentImpressionTracker, {
    questId: b.id,
    overrideVisibility: !j,
    questContent: _.QuestContent.QUEST_LIVE_STREAM,
    children: () => {
      var e;
      return (0, a.jsxs)("div", {
        className: i()(O.wrapper, {
          [O.wrapperAccepted]: Y
        }),
        children: [!Y && (0, a.jsxs)("div", {
          className: O.rewardTileWrapper,
          children: [(0, a.jsx)("img", {
            alt: b.config.messages.rewardName,
            className: O.rewardTile,
            src: (0, T.getRewardAssetUrl)(b)
          }), (0, a.jsx)(v.default, {
            bgOpacity: .32,
            className: O.promotedTag
          })]
        }), (0, a.jsxs)("div", {
          className: O.content,
          children: [(0, a.jsxs)("div", {
            className: O.heading,
            children: [Y && D ? (0, a.jsx)("img", {
              alt: b.config.messages.rewardName,
              className: O.rewardTile,
              src: (0, T.getRewardAssetUrl)(b)
            }) : (0, a.jsx)("img", {
              className: O.gameTile,
              alt: b.config.messages.gameTitle,
              src: (0, T.getGameTileAssetUrl)(b)
            }), (0, a.jsxs)("div", {
              className: O.__invalid_details,
              children: [(0, a.jsxs)("div", {
                className: O.headingWithSubmenu,
                children: [(0, a.jsx)(o.Heading, {
                  className: O.questTitle,
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: D ? (0, T.getContextualEntrypointHeading)(b) : y.default.Messages.QUESTS_TITLE.format({
                    questName: b.config.messages.questName
                  })
                }), (0, a.jsx)(N.QuestsEntryContextMenuPopout, {
                  questContent: _.QuestContent.QUEST_LIVE_STREAM,
                  quest: b,
                  preventIdle: !0,
                  shouldShowDisclosure: (null === (e = b.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                  children: e => (0, a.jsx)(o.Clickable, {
                    ...e,
                    className: O.submenuWrapper,
                    "aria-label": y.default.Messages.ACTIONS,
                    children: (0, a.jsx)(p.default, {
                      className: O.submenuIcon
                    })
                  })
                })]
              }), (0, a.jsx)(o.Text, {
                color: "header-secondary",
                variant: "text-xs/medium",
                children: z ? y.default.Messages.QUESTS_CLAIM_BY.format({
                  expirationDate: k
                }) : y.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                  expirationDate: w
                })
              })]
            })]
          }), Y && !z && !D && (0, a.jsx)(M.default, {
            quest: b
          }), (0, a.jsxs)("div", {
            className: O.ctas,
            children: [!Y && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(o.Button, {
                className: O.cta,
                color: o.Button.Colors.PRIMARY,
                fullWidth: !0,
                size: o.Button.Sizes.SMALL,
                onClick: G,
                children: y.default.Messages.QUESTS_LEARN_MORE_V2
              }), (0, a.jsx)(o.Button, {
                className: O.cta,
                color: o.Button.Colors.GREEN,
                fullWidth: !0,
                onClick: H,
                size: o.Button.Sizes.SMALL,
                submitting: U,
                children: y.default.Messages.QUESTS_ACCEPT_QUEST
              })]
            }), Y && !z && D && (0, a.jsx)(A.default, {
              color: o.tokens.colors.BG_BRAND,
              quest: b
            }), Y && !z && !D && (0, a.jsx)(o.Button, {
              className: O.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: B,
              size: o.Button.Sizes.SMALL,
              children: y.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
            }), z && (0, a.jsx)(o.Button, {
              className: O.cta,
              color: o.Button.Colors.BRAND,
              fullWidth: !0,
              onClick: V,
              size: o.Button.Sizes.SMALL,
              children: y.default.Messages.QUESTS_CLAIM_REWARD
            })]
          })]
        })]
      })
    }
  })
}