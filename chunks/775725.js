"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("446674"),
  r = n("77078"),
  o = n("206230"),
  u = n("393414"),
  d = n("181114"),
  c = n("815496"),
  E = n("448881"),
  f = n("879364"),
  _ = n("2973"),
  T = n("588025"),
  I = n("227231"),
  m = n("315130"),
  N = n("49111"),
  p = n("782340"),
  S = n("199890");
let A = (e, t, n) => n ? p.default.Messages.QUESTS_SEE_CODE : e || t ? p.default.Messages.QUESTS_CLAIM_REWARD : p.default.Messages.QUESTS_ACCEPT,
  C = (e, t) => e ? p.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? p.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : p.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  h = (e, t) => {
    var l, a, i;
    return (null === (l = e.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null || (null === (a = e.userStatus) || void 0 === a ? void 0 : a.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null ? () => {
      var l;
      (0, c.trackQuestContentClicked)(e.id, t, (null === (l = e.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null ? c.QuestContentCTA.SHOW_REWARD : c.QuestContentCTA.CLAIM_REWARD), (0, r.openModalLazy)(async () => {
        let {
          default: l
        } = await n.el("36170").then(n.bind(n, "36170"));
        return n => (0, s.jsx)(l, {
          ...n,
          quest: e,
          location: t
        })
      })
    } : () => {
      (0, E.enrollInQuest)(e.id, {
        questContent: t,
        questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
      })
    }
  },
  g = (e, t, n) => {
    let s = e === T.QuestContent.QUEST_INVENTORY_CARD;
    return s && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium"
  };

function M(e) {
  let {
    location: t,
    isQuestAccepted: n,
    containerSize: l,
    onClick: a,
    children: i
  } = e;
  return t !== T.QuestContent.QUESTS_EMBED || n ? null : "xs" === l ? (0, s.jsx)(r.Clickable, {
    className: S.learnMoreLink,
    tag: "span",
    onClick: a,
    children: (0, s.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(r.Button, {
    wrapperClassName: S.ctaButtonWrapper,
    color: r.ButtonColors.PRIMARY,
    onClick: a,
    children: i
  })
}
var O = e => {
  var t, n, l, c;
  let {
    quest: E,
    location: O,
    size: R
  } = e, v = (null === (t = E.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, L = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, P = (null === (l = E.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null, D = L && !P && O !== T.QuestContent.QUESTS_EMBED, x = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), y = L ? r.ButtonColors.BRAND_NEW : r.ButtonColors.GREEN, U = A(v, L, P), j = C(v, L), b = h(E, O), G = L && !v, B = (0, f.useQuestFormattedDate)(null === (c = E.userStatus) || void 0 === c ? void 0 : c.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), F = (0, i.useStateFromStores)([_.default], () => _.default.isEnrolling(E.id)), k = O === T.QuestContent.QUESTS_EMBED, w = O === T.QuestContent.QUEST_INVENTORY_CARD;
  return (0, s.jsxs)("div", {
    className: a(S.outerContainer, {
      [S.outerContainerSm]: "sm" === R,
      [S.outerContainerXs]: "xs" === R
    }),
    children: [(0, s.jsx)("img", {
      src: (0, I.getRewardAssetUrl)(E.id),
      alt: "",
      className: a(S.questReward, S.gridImg, {
        [S.questRewardGiftInventory]: w && "lg" === R,
        [S.questRewardEmbed]: k && "lg" === R,
        [S.questRewardEmbedSm]: "sm" === R,
        [S.questRewardEmbedXs]: "xs" === R
      })
    }), (0, s.jsxs)("div", {
      className: a(S.gridText, S.taskDetails),
      children: [(0, s.jsx)(r.Text, {
        variant: g(O, R, L),
        className: S.taskInstructions,
        children: p.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: E.config.streamDurationRequirementMinutes,
          gameTitle: E.config.messages.gameTitle
        })
      }), (0, s.jsx)(r.Text, {
        variant: "lg" === R ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: v ? p.default.Messages.QUEST_REWARD_COMPLETED.format({
          reward: E.config.messages.rewardNameWithArticle,
          date: B
        }) : p.default.Messages.QUEST_REWARD.format({
          reward: E.config.messages.rewardNameWithArticle
        })
      })]
    }), (0, s.jsxs)("div", {
      className: a(S.ctaButtonContainer, S.gridCtaButtons),
      children: [(0, s.jsx)(M, {
        location: O,
        isQuestAccepted: L,
        containerSize: R,
        onClick: () => {
          (0, u.transitionTo)(N.Routes.SETTINGS("inventory"))
        },
        children: p.default.Messages.QUESTS_LEARN_MORE_V2
      }), (0, s.jsx)(r.Tooltip, {
        text: j,
        tooltipContentClassName: S.ctaTooltipCopy,
        shouldShow: !P,
        children: e => v && !x ? (0, s.jsx)(d.default, {
          ...e,
          wrapperClassName: S.ctaButtonWrapper,
          color: y,
          disabled: G,
          submitting: F,
          onClick: b,
          children: U
        }) : (0, s.jsx)(r.Button, {
          ...e,
          wrapperClassName: S.ctaButtonWrapper,
          color: y,
          disabled: G,
          submitting: F,
          onClick: b,
          children: U
        })
      })]
    }), D && (0, s.jsx)(m.default, {
      className: S.gridProgressBar,
      color: v ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
      quest: E,
      isInventory: w
    })]
  })
}