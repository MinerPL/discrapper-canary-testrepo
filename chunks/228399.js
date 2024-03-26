"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("79112"),
  u = n("815496"),
  d = n("227231"),
  c = n("49111"),
  f = n("782340"),
  E = n("297261"),
  h = function(e) {
    let {
      className: t,
      quest: n
    } = e, l = s.useCallback(() => {
      (0, u.trackQuestContentClicked)({
        questId: n.id,
        questContent: e.questContent,
        questContentCTA: u.QuestContentCTA.REWARD_LEARN_MORE
      }), o.default.open(c.UserSettingsSections.INVENTORY)
    }, [n, e.questContent]);
    return (0, a.jsxs)(r.Clickable, {
      className: i(E.questRewardTile, t),
      onClick: l,
      children: [(0, a.jsx)(r.Text, {
        color: "always-white",
        variant: "text-xs/normal",
        className: E.questRewardTileDetailsLearnMore,
        children: f.default.Messages.QUESTS_LEARN_MORE_STACKED.format()
      }), (0, a.jsx)("img", {
        alt: n.config.messages.rewardName,
        className: E.questRewardTileAsset,
        src: (0, d.getRewardAssetUrl)(n.id)
      })]
    })
  }