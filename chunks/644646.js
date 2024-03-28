"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("481060"),
  o = n("230711"),
  u = n("617136"),
  d = n("918701"),
  c = n("78826"),
  f = n("981631"),
  E = n("689938"),
  h = n("176126");
t.default = function(e) {
  let {
    className: t,
    quest: n
  } = e, l = s.useCallback(() => {
    (0, u.trackQuestContentClicked)({
      questId: n.id,
      questContent: e.questContent,
      questContentCTA: u.QuestContentCTA.REWARD_LEARN_MORE
    }), o.default.open(f.UserSettingsSections.INVENTORY)
  }, [n, e.questContent]);
  return (0, a.jsxs)(r.Clickable, {
    className: i()(h.questRewardTile, t),
    onClick: l,
    children: [(0, a.jsx)(r.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: h.questRewardTileDetailsLearnMore,
      children: E.default.Messages.QUESTS_LEARN_MORE_STACKED.format()
    }), (0, a.jsx)(c.QuestsAsset, {
      id: "QuestRewardTile_rewardTile",
      children: e => (0, a.jsx)("img", {
        ref: e,
        alt: n.config.messages.rewardName,
        className: h.questRewardTileAsset,
        src: (0, d.getRewardAssetUrl)(n)
      })
    })]
  })
}