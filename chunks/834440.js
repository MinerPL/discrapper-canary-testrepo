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
  u = n("272030"),
  d = n("79112"),
  c = n("433487"),
  f = n("815496"),
  E = n("448881"),
  h = n("879364"),
  _ = n("2973"),
  C = n("588025"),
  S = n("227231"),
  I = n("534801"),
  m = n("762985"),
  p = n("385416"),
  T = n("255697"),
  g = n("49111"),
  A = n("782340"),
  N = n("647439");

function R(e) {
  var t;
  let {
    quest: n
  } = e, s = (0, h.useQuestFormattedDate)(n.config.expiresAt), l = (0, h.useQuestFormattedDate)(n.config.rewardCodeExpiresAt), i = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
  return (0, a.jsxs)("div", {
    className: N.heading,
    children: [(0, a.jsx)("img", {
      className: N.headingGameTile,
      alt: "",
      src: (0, S.getGameTileAssetUrl)(n.id)
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
  var t, l, O;
  let {
    quest: v
  } = e, L = (0, r.useStateFromStores)([_.default], () => _.default.isEnrolling(v.id), [v]), M = s.useCallback(e => {
    e.stopPropagation()
  }, []), P = s.useCallback(e => {
    (0, f.trackQuestContentClicked)(v.id, C.QuestContent.ACTIVITY_PANEL, f.QuestContentCTA.OPEN_CONTEXT_MENU), (0, u.openContextMenuLazy)(e, async () => {
      let {
        QuestsEntryContextMenu: e
      } = await n.el("275986").then(n.bind(n, "275986"));
      return t => {
        var n;
        return (0, a.jsx)(e, {
          ...t,
          quest: v,
          questContent: C.QuestContent.ACTIVITY_PANEL,
          shouldShowDisclosure: (null === (n = v.userStatus) || void 0 === n ? void 0 : n.enrolledAt) == null
        })
      }
    })
  }, [v]), y = s.useCallback(() => {
    (0, E.enrollInQuest)(v.id, {
      questContent: C.QuestContent.ACTIVITY_PANEL,
      questContentCTA: f.QuestContentCTA.ACCEPT_QUEST
    })
  }, [v]), D = s.useCallback(() => {
    null != v && ((0, f.trackQuestContentClicked)(v.id, C.QuestContent.ACTIVITY_PANEL, f.QuestContentCTA.TRACK_PROGRESS), d.default.open(g.UserSettingsSections.INVENTORY))
  }, [v]), x = s.useCallback(() => {
    (0, f.trackQuestContentClicked)(v.id, C.QuestContent.ACTIVITY_PANEL, f.QuestContentCTA.LEARN_MORE), d.default.open(g.UserSettingsSections.INVENTORY)
  }, [v]), b = (0, p.useHandleClaimQuestsReward)({
    quest: v,
    location: C.QuestContent.ACTIVITY_PANEL
  }), U = (0, h.useIsQuestExpired)(v), G = (null === (t = v.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, j = (null === (l = v.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, w = (null === (O = v.userStatus) || void 0 === O ? void 0 : O.claimedAt) != null, k = (null == v ? void 0 : v.userStatus) == null || (0, S.isDismissed)(v.userStatus, C.QuestContent.ACTIVITY_PANEL);
  return k || U || w ? null : (0, a.jsx)(I.QuestContentImpressionTracker, {
    questId: v.id,
    questContent: C.QuestContent.ACTIVITY_PANEL,
    children: e => (0, a.jsxs)("div", {
      ref: t => {
        e.current = t
      },
      className: i(N.wrapper, {
        [N.wrapperQuestAccepted]: G
      }),
      onClick: M,
      onKeyPress: M,
      children: [(0, a.jsxs)("div", {
        className: N.utils,
        children: [G ? (0, a.jsx)(R, {
          quest: v
        }) : (0, a.jsx)(m.default, {
          textOpacity: .5
        }), (0, a.jsx)(o.Clickable, {
          className: N.submenuWrapper,
          onClick: P,
          children: (0, a.jsx)(c.default, {
            className: N.submenuIcon
          })
        })]
      }), !G && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(R, {
          quest: v
        }), (0, a.jsx)(o.Text, {
          className: N.instructions,
          variant: "text-sm/normal",
          color: "text-normal",
          children: A.default.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD.format({
            gameTitle: v.config.messages.gameTitle,
            questReward: v.config.messages.rewardNameWithArticle,
            streamingDurationRequirement: v.config.streamDurationRequirementMinutes
          })
        })]
      }), G && !j && (0, a.jsx)(T.default, {
        className: N.rewardTileWithInstructions,
        quest: v
      }), (0, a.jsxs)("div", {
        className: N.ctas,
        children: [!G && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(o.Button, {
            className: N.cta,
            color: o.Button.Colors.PRIMARY,
            fullWidth: !0,
            size: o.Button.Sizes.SMALL,
            onClick: x,
            children: A.default.Messages.QUESTS_LEARN_MORE_V2
          }), (0, a.jsx)(o.Button, {
            className: N.cta,
            color: o.Button.Colors.GREEN,
            fullWidth: !0,
            onClick: y,
            size: o.Button.Sizes.SMALL,
            submitting: L,
            children: A.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), G && !j && (0, a.jsx)(o.Button, {
          className: N.cta,
          color: o.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: D,
          size: o.Button.Sizes.SMALL,
          children: A.default.Messages.QUESTS_TRACK_YOUR_PROGRESS
        }), j && (0, a.jsx)(o.Button, {
          className: N.cta,
          color: o.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: b,
          size: o.Button.Sizes.SMALL,
          children: A.default.Messages.QUESTS_CLAIM_REWARD
        })]
      })]
    })
  })
}