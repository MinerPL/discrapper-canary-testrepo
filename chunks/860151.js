"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("481060"),
  r = n("918701"),
  o = n("689938"),
  u = n("732553");
t.default = function(e) {
  let {
    className: t,
    quest: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s()(u.wrapper, t),
    style: {
      color: n.config.colors.primary
    },
    children: [(0, a.jsx)("img", {
      alt: n.config.messages.rewardName,
      className: u.rewardTile,
      src: (0, r.getRewardAssetUrl)(n)
    }), (0, a.jsx)(i.Text, {
      className: u.instructions,
      variant: "text-sm/normal",
      color: "text-normal",
      children: o.default.Messages.QUESTS_ACCEPTED_INSTRUCTIONS_TO_WIN_REWARD.format({
        gameTitle: n.config.messages.gameTitle,
        questReward: n.config.messages.rewardNameWithArticle,
        streamingDurationRequirement: n.config.streamDurationRequirementMinutes
      })
    })]
  })
}