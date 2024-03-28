"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("703656"),
  d = n("976644"),
  c = n("617136"),
  f = n("272008"),
  E = n("113434"),
  _ = n("569984"),
  T = n("497505"),
  m = n("918701"),
  I = n("340100"),
  p = n("981631"),
  h = n("689938"),
  N = n("506710");
let S = (e, t, n) => n ? h.default.Messages.QUESTS_SEE_CODE : e || t ? h.default.Messages.QUESTS_CLAIM_REWARD : h.default.Messages.QUESTS_ACCEPT,
  C = (e, t) => e ? h.default.Messages.QUESTS_COMPLETE_TOOLTIP : t ? h.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : h.default.Messages.QUESTS_ACCEPT_TOOLTIP,
  A = (e, t) => {
    var a, l, i;
    return (null === (a = e.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null || (null === (l = e.userStatus) || void 0 === l ? void 0 : l.completedAt) != null || (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null ? () => {
      var a;
      (0, c.trackQuestContentClicked)({
        questId: e.id,
        questContent: t,
        questContentCTA: (null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null ? c.QuestContentCTA.SHOW_REWARD : c.QuestContentCTA.CLAIM_REWARD
      }), (0, r.openModalLazy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("61624")]).then(n.bind(n, "985866"));
        return n => (0, s.jsx)(a, {
          ...n,
          quest: e,
          location: t
        })
      })
    } : () => {
      (0, f.enrollInQuest)(e.id, {
        questContent: t,
        questContentCTA: c.QuestContentCTA.ACCEPT_QUEST
      })
    }
  },
  g = (e, t, n) => e !== T.QuestContent.QUEST_INVENTORY_CARD || n || "lg" !== t ? "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium" : "text-lg/medium";

function M(e) {
  let {
    location: t,
    isQuestAccepted: n,
    containerSize: a,
    onClick: l,
    children: i
  } = e;
  return t !== T.QuestContent.QUESTS_EMBED || n ? null : "xs" === a ? (0, s.jsx)(r.Clickable, {
    className: N.learnMoreLink,
    tag: "span",
    onClick: l,
    children: (0, s.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(r.Button, {
    wrapperClassName: N.ctaButtonWrapper,
    color: r.ButtonColors.PRIMARY,
    onClick: l,
    children: i
  })
}
t.default = e => {
  var t, n, a, f;
  let {
    quest: R,
    location: O,
    size: v
  } = e, L = (null === (t = R.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, x = (null === (n = R.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, D = (null === (a = R.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, P = x && !D && O !== T.QuestContent.QUESTS_EMBED, y = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), U = x ? r.ButtonColors.BRAND_NEW : r.ButtonColors.GREEN, b = S(L, x, D), j = C(L, x), G = A(R, O), B = x && !L, F = (0, E.useQuestFormattedDate)(null === (f = R.userStatus) || void 0 === f ? void 0 : f.completedAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), k = (0, i.useStateFromStores)([_.default], () => _.default.isEnrolling(R.id)), w = O === T.QuestContent.QUESTS_EMBED, H = O === T.QuestContent.QUEST_INVENTORY_CARD;
  return (0, s.jsxs)("div", {
    className: l()(N.outerContainer, {
      [N.outerContainerSm]: "sm" === v,
      [N.outerContainerXs]: "xs" === v
    }),
    children: [(0, s.jsx)("img", {
      src: (0, m.getRewardAssetUrl)(R),
      alt: "",
      className: l()(N.questReward, N.gridImg, {
        [N.questRewardGiftInventory]: H && "lg" === v,
        [N.questRewardEmbed]: w && "lg" === v,
        [N.questRewardEmbedSm]: "sm" === v,
        [N.questRewardEmbedXs]: "xs" === v
      })
    }), (0, s.jsxs)("div", {
      className: l()(N.gridText, N.taskDetails),
      children: [(0, s.jsx)(r.Text, {
        variant: g(O, v, x),
        className: N.taskInstructions,
        children: h.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: R.config.streamDurationRequirementMinutes,
          gameTitle: R.config.messages.gameTitle
        })
      }), (0, s.jsx)(r.Text, {
        variant: "lg" === v ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: L ? h.default.Messages.QUEST_REWARD_COMPLETED.format({
          reward: R.config.messages.rewardNameWithArticle,
          date: F
        }) : h.default.Messages.QUEST_REWARD.format({
          reward: R.config.messages.rewardNameWithArticle
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(N.ctaButtonContainer, N.gridCtaButtons),
      children: [(0, s.jsx)(M, {
        location: O,
        isQuestAccepted: x,
        containerSize: v,
        onClick: () => {
          (0, u.transitionTo)(p.Routes.SETTINGS("inventory")), (0, c.trackQuestContentClicked)({
            questId: R.id,
            questContent: O,
            questContentCTA: c.QuestContentCTA.LEARN_MORE
          })
        },
        children: h.default.Messages.QUESTS_LEARN_MORE_V2
      }), (0, s.jsx)(r.Tooltip, {
        text: j,
        tooltipContentClassName: N.ctaTooltipCopy,
        shouldShow: !D,
        children: e => L && !y ? (0, s.jsx)(d.default, {
          ...e,
          wrapperClassName: N.ctaButtonWrapper,
          color: U,
          disabled: B,
          submitting: k,
          onClick: G,
          children: b
        }) : (0, s.jsx)(r.Button, {
          ...e,
          wrapperClassName: N.ctaButtonWrapper,
          color: U,
          disabled: B,
          submitting: k,
          onClick: G,
          children: b
        })
      })]
    }), P && (0, s.jsx)(I.default, {
      className: N.gridProgressBar,
      color: L ? r.tokens.colors.TEXT_POSITIVE : r.tokens.colors.BG_BRAND,
      quest: R,
      isInventory: H
    })]
  })
}