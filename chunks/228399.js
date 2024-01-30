"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("77078"),
  o = n("79112"),
  u = n("227231"),
  d = n("49111"),
  c = n("782340"),
  f = n("787207"),
  E = function(e) {
    let {
      className: t,
      quest: n
    } = e, i = s.useCallback(() => {
      o.default.open(d.UserSettingsSections.INVENTORY)
    }, []);
    return (0, a.jsxs)(r.Clickable, {
      className: l(f.questRewardTile, t),
      onClick: i,
      children: [(0, a.jsx)(r.Text, {
        color: "always-white",
        variant: "text-xs/normal",
        className: f.questRewardTileDetailsLearnMore,
        children: c.default.Messages.QUESTS_LEARN_MORE.format()
      }), (0, a.jsx)("img", {
        alt: "",
        className: f.questRewardTileAsset,
        src: (0, u.getRewardAssetUrl)(n.id)
      })]
    })
  }