"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("79112"),
  d = n("433487"),
  c = n("815496"),
  f = n("448881"),
  E = n("879364"),
  h = n("2973"),
  _ = n("588025"),
  C = n("227231"),
  S = n("534801"),
  I = n("762985"),
  m = n("275986"),
  p = n("385416"),
  T = n("255697"),
  g = n("49111"),
  A = n("782340"),
  N = n("647439");

function R(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, E.useQuestFormattedDate)(n.config.expiresAt), l = (0, E.useQuestFormattedDate)(n.config.rewardCodeExpiresAt), i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: N.heading,
    children: [(0, a.jsx)("img", {
      className: N.headingGameTile,
      alt: "",
      src: (0, C.getGameTileAssetUrl)(n.id)
    }), (0, a.jsxs)("div", {
      className: N.headingCopy,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: i ? A.default.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE_ACTIVITY_PANEL : A.default.Messages.QUESTS_TITLE.format({
          questName: n.config.messages.questName
        })
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: i ? A.default.Messages.QUESTS_CLAIM_BY.format({
          expirationDate: l
        }) : A.default.Messages.QUESTS_AVAILABLE_UNTIL.format({
          expirationDate: s
        })
      })]
    })]
  })
}
var O = function(e) {
  var t, n, l;
  let {
    quest: O
  } = e, v = (0, r.useStateFromStores)([h.default], () => h.default.isEnrolling(O.id), [O]), L = s.useCallback(e => {
    e.stopPropagation()
  }, []), M = s.useCallback(() => {
    (0, f.enrollInQuest)(O.id, {
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
    })
  }, [O]), P = s.useCallback(() => {
    null != O && ((0, c.trackQuestContentClicked)({
      questId: O.id,
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.TRACK_PROGRESS
    }), u.default.open(g.UserSettingsSections.INVENTORY))
  }, [O]), y = s.useCallback(() => {
    (0, c.trackQuestContentClicked)({
      questId: O.id,
      questContent: _.QuestContent.ACTIVITY_PANEL,
      questContentCTA: c.QuestContentCTA.LEARN_MORE
    }), u.default.open(g.UserSettingsSections.INVENTORY)
  }, [O]), D = (0, p.useHandleClaimQuestsReward)({
    quest: O,
    location: _.QuestContent.ACTIVITY_PANEL
  }), x = (0, E.useIsQuestExpired)(O), b = (null === (t = O.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, U = (null === (n = O.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, G = (null === (l = O.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, j = (null == O ? void 0 : O.userStatus) == null || (0, C.isDismissed)(O.userStatus, _.QuestContent.ACTIVITY_PANEL);
  return j || x || G ? null : (0, a.jsx)(S.QuestContentImpressionTracker, {
    questId: O.id,
    questContent: _.QuestContent.ACTIVITY_PANEL,
    children: e => {
      var t;
      return (0, a.jsxs)("div", {
        ref: t => {
          e.current = t
        },
        className: i(N.wrapper, {
          [N.wrapperQuestAccepted]: b
        }),
        onClick: L,
        onKeyPress: L,
        children: [(0, a.jsxs)("div", {
          className: N.utils,
          children: [b ? (0, a.jsx)(R, {
            quest: O
          }) : (0, a.jsx)(I.default, {
            textOpacity: .5
          }), (0, a.jsx)(m.QuestsEntryContextMenuPopout, {
            quest: O,
            questContent: _.QuestContent.ACTIVITY_PANEL,
            shouldShowDisclosure: (null === (t = O.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null,
            children: e => (0, a.jsx)(o.Clickable, {
              ...e,
              className: N.submenuWrapper,
              "aria-label": A.default.Messages.ACTIONS,
              children: (0, a.jsx)(d.default, {
                className: N.submenuIcon
              })
            })
          })]
        }), !b && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(R, {
            quest: O
          }), (0, a.jsx)(o.Text, {
            className: N.instructions,
            variant: "text-sm/normal",
            color: "text-normal",
            children: A.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
              gameTitle: O.config.messages.gameTitle,
              questReward: O.config.messages.rewardNameWithArticle,
              streamingDurationRequirement: O.config.streamDurationRequirementMinutes
            })
          })]
        }), b && !U && (0, a.jsx)(T.default, {
          className: N.rewardTileWithInstructions,
          quest: O
        }), (0, a.jsxs)("div", {
          className: N.ctas,
          children: [!b && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(o.Button, {
              className: N.cta,
              color: o.Button.Colors.PRIMARY,
              fullWidth: !0,
              size: o.Button.Sizes.SMALL,
              onClick: y,
              children: A.default.Messages.QUESTS_LEARN_MORE_V2
            }), (0, a.jsx)(o.Button, {
              className: N.cta,
              color: o.Button.Colors.GREEN,
              fullWidth: !0,
              onClick: M,
              size: o.Button.Sizes.SMALL,
              submitting: v,
              children: A.default.Messages.QUESTS_ACCEPT_QUEST
            })]
          }), b && !U && (0, a.jsx)(o.Button, {
            className: N.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: P,
            size: o.Button.Sizes.SMALL,
            children: A.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
          }), U && (0, a.jsx)(o.Button, {
            className: N.cta,
            color: o.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: D,
            size: o.Button.Sizes.SMALL,
            children: A.default.Messages.QUESTS_CLAIM_REWARD
          })]
        })]
      })
    }
  })
}