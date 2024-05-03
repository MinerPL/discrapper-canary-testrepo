"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("481060"),
  r = n("918701"),
  o = n("644646"),
  u = n("689938"),
  d = n("16353");
t.default = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: l,
    questContent: c
  } = e;
  return (0, a.jsxs)("div", {
    className: s()(d.wrapper, t),
    style: {
      color: l.config.colors.primary
    },
    children: [(0, a.jsx)(o.default, {
      autoplay: n,
      className: d.rewardTile,
      quest: l,
      questContent: c
    }), (0, a.jsx)(i.Text, {
      className: d.instructions,
      variant: "text-sm/normal",
      color: "text-normal",
      children: (0, r.isTieredRewardCodeQuest)({
        quest: l
      }) ? u.default.Messages.QUESTS_ACCEPTED_INSTRUCTIONS_TO_WIN_REWARD_TIERED.format({
        gameTitle: l.config.messages.gameTitle,
        streamingDurationRequirement: l.config.streamDurationRequirementMinutes
      }) : u.default.Messages.QUESTS_ACCEPTED_INSTRUCTIONS_TO_WIN_REWARD.format({
        gameTitle: l.config.messages.gameTitle,
        questReward: l.config.messages.rewardNameWithArticle,
        streamingDurationRequirement: l.config.streamDurationRequirementMinutes
      })
    })]
  })
}