"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("79112"),
  d = n("191145"),
  c = n("582415"),
  f = n("908583"),
  h = n("824563"),
  m = n("697218"),
  p = n("433487"),
  E = n("815496"),
  g = n("448881"),
  S = n("879364"),
  C = n("2973"),
  _ = n("588025"),
  I = n("227231"),
  T = n("534801"),
  v = n("315130"),
  x = n("762985"),
  N = n("275986"),
  A = n("385416"),
  M = n("255697"),
  R = n("49111"),
  j = n("99795"),
  L = n("782340"),
  y = n("140999"),
  O = function(e) {
    var t, n;
    let {
      channelId: s
    } = e, O = l.useContext(f.IdleStateContext), P = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
      isCurrentUserStreamingQuestApplication: D,
      quest: b
    } = (0, r.useStateFromStoresObject)([h.default, d.default, C.default], () => {
      let e = d.default.getParticipants(s),
        t = function(e, t, n) {
          for (let l of e)
            if (l.type === j.ParticipantTypes.STREAM) {
              var a;
              let e = (0, c.getStreamerApplication)(l.stream, n),
                s = (null == e ? void 0 : e.id) != null ? (0, I.getQuestByApplicationId)(t, e.id) : null;
              if (null != s && (null === (a = s.userStatus) || void 0 === a ? void 0 : a.claimedAt) == null) return s
            } return null
        }(e, C.default.quests, h.default),
        n = null != t && null != P && function(e, t, n, a) {
          for (let s of e) {
            var l;
            if (s.type === j.ParticipantTypes.STREAM && s.user.id === n.id && t.config.applicationId === (null === (l = (0, c.getStreamerApplication)(s.stream, a)) || void 0 === l ? void 0 : l.id)) return !0
          }
          return !1
        }(e, t, P, h.default);
      return {
        isCurrentUserStreamingQuestApplication: n,
        quest: t
      }
    }, [s, P]), U = (0, r.useStateFromStores)([C.default], () => null != b && C.default.isEnrolling(b.id), [b]), w = (0, r.useStateFromStores)([d.default], () => ((null == P ? void 0 : P.id) == null ? null : d.default.getParticipant(s, P.id)) != null, [s, P]), F = (0, S.useQuestFormattedDate)(null == b ? void 0 : b.config.expiresAt), V = (0, S.useQuestFormattedDate)(null == b ? void 0 : b.config.rewardCodeExpiresAt), H = l.useCallback(() => {
      null != b && (0, g.enrollInQuest)(b.id, {
        questContent: _.QuestContent.QUEST_LIVE_STREAM,
        questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
      })
    }, [b]), k = l.useCallback(() => {
      null != b && ((0, E.trackQuestContentClicked)({
        questId: b.id,
        questContent: _.QuestContent.QUEST_LIVE_STREAM,
        questContentCTA: E.QuestContentCTA.TRACK_PROGRESS
      }), o.default.open(R.UserSettingsSections.INVENTORY))
    }, [b]), B = l.useCallback(() => {
      null != b && ((0, E.trackQuestContentClicked)({
        questId: b.id,
        questContent: _.QuestContent.QUEST_LIVE_STREAM,
        questContentCTA: E.QuestContentCTA.LEARN_MORE
      }), o.default.open(R.UserSettingsSections.INVENTORY))
    }, [b]), G = (0, A.useHandleClaimQuestsReward)({
      quest: b,
      location: _.QuestContent.QUEST_LIVE_STREAM
    }), W = (0, S.useIsQuestExpired)(b);
    if (null == b) return null;
    let Y = (null === (t = b.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      z = (null === (n = b.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      K = null != b.userStatus && (0, I.isDismissed)(b.userStatus, _.QuestContent.QUEST_LIVE_STREAM),
      Z = null != b.userStatus && (0, I.isDismissed)(b.userStatus, _.QuestContent.QUEST_BAR);
    return K || W || !Z || !w ? null : (0, a.jsx)(T.QuestContentImpressionTracker, {
      questId: b.id,
      overrideVisibility: !O,
      questContent: _.QuestContent.QUEST_LIVE_STREAM,
      children: () => {
        var e;
        return (0, a.jsxs)("div", {
          className: i(y.wrapper, {
            [y.wrapperAccepted]: Y
          }),
          children: [!Y && (0, a.jsxs)("div", {
            className: y.rewardTileWrapper,
            children: [(0, a.jsx)("img", {
              alt: b.config.messages.rewardName,
              className: y.rewardTile,
              src: (0, I.getRewardAssetUrl)(b.id)
            }), (0, a.jsx)(x.default, {
              bgOpacity: .32,
              className: y.promotedTag
            })]
          }), (0, a.jsxs)("div", {
            className: y.content,
            children: [(0, a.jsxs)("div", {
              className: y.heading,
              children: [Y && D ? (0, a.jsx)("img", {
                alt: b.config.messages.rewardName,
                className: y.rewardTile,
                src: (0, I.getRewardAssetUrl)(b.id)
              }) : (0, a.jsx)("img", {
                className: y.gameTile,
                alt: b.config.messages.gameTitle,
                src: (0, I.getGameTileAssetUrl)(b.id)
              }), (0, a.jsxs)("div", {
                className: y.details,
                children: [(0, a.jsxs)("div", {
                  className: y.headingWithSubmenu,
                  children: [(0, a.jsx)(u.Heading, {
                    className: y.questTitle,
                    variant: "heading-md/semibold",
                    color: "header-primary",
                    children: D ? (0, I.getContextualEntrypointHeading)(b) : L.default.Messages.QUESTS_TITLE.format({
                      questName: b.config.messages.questName
                    })
                  }), (0, a.jsx)(N.QuestsEntryContextMenuPopout, {
                    questContent: _.QuestContent.QUEST_LIVE_STREAM,
                    quest: b,
                    preventIdle: !0,
                    shouldShowDisclosure: (null === (e = b.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null,
                    children: e => (0, a.jsx)(u.Clickable, {
                      ...e,
                      className: y.submenuWrapper,
                      "aria-label": L.default.Messages.ACTIONS,
                      children: (0, a.jsx)(p.default, {
                        className: y.submenuIcon
                      })
                    })
                  })]
                }), (0, a.jsx)(u.Text, {
                  color: "header-secondary",
                  variant: "text-xs/medium",
                  children: z ? L.default.Messages.QUESTS_CLAIM_BY.format({
                    expirationDate: V
                  }) : L.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
                    expirationDate: F
                  })
                })]
              })]
            }), Y && !z && !D && (0, a.jsx)(M.default, {
              quest: b
            }), (0, a.jsxs)("div", {
              className: y.ctas,
              children: [!Y && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.Button, {
                  className: y.cta,
                  color: u.Button.Colors.PRIMARY,
                  fullWidth: !0,
                  size: u.Button.Sizes.SMALL,
                  onClick: B,
                  children: L.default.Messages.QUESTS_LEARN_MORE_V2
                }), (0, a.jsx)(u.Button, {
                  className: y.cta,
                  color: u.Button.Colors.GREEN,
                  fullWidth: !0,
                  onClick: H,
                  size: u.Button.Sizes.SMALL,
                  submitting: U,
                  children: L.default.Messages.QUESTS_ACCEPT_QUEST
                })]
              }), Y && !z && D && (0, a.jsx)(v.default, {
                color: u.tokens.colors.BG_BRAND,
                quest: b
              }), Y && !z && !D && (0, a.jsx)(u.Button, {
                className: y.cta,
                color: u.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: k,
                size: u.Button.Sizes.SMALL,
                children: L.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
              }), z && (0, a.jsx)(u.Button, {
                className: y.cta,
                color: u.Button.Colors.BRAND,
                fullWidth: !0,
                onClick: G,
                size: u.Button.Sizes.SMALL,
                children: L.default.Messages.QUESTS_CLAIM_REWARD
              })]
            })]
          })]
        })
      }
    })
  }