"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("77078"),
  r = n("227231"),
  u = n("782340"),
  o = n("267678"),
  d = function(e) {
    let {
      className: t,
      quest: n
    } = e;
    return (0, a.jsxs)("div", {
      className: s(o.wrapper, t),
      style: {
        color: n.config.colors.primary
      },
      children: [(0, a.jsx)("img", {
        alt: n.config.messages.rewardName,
        className: o.rewardTile,
        src: (0, r.getRewardAssetUrl)(n.id)
      }), (0, a.jsx)(i.Text, {
        className: o.instructions,
        variant: "text-sm/normal",
        color: "text-normal",
        children: u.default.Messages.QUESTS_ACCEPTED_INSTRUCTIONS_TO_WIN_REWARD.format({
          gameTitle: n.config.messages.gameTitle,
          questReward: n.config.messages.rewardNameWithArticle,
          streamingDurationRequirement: n.config.streamDurationRequirementMinutes
        })
      })]
    })
  }