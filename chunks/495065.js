"use strict";
n.r(t), n.d(t, {
  QuestUserSettingsBadge: function() {
    return a
  }
});
var i = n("735250");
n("470079");
var s = n("26290"),
  l = n("497505"),
  r = n("874137"),
  o = n("689938");

function a(e) {
  return (0, i.jsx)(r.QuestContentImpressionTracker, {
    questOrQuests: e.quests,
    questContent: l.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE,
    children: e => (0, i.jsx)("span", {
      ref: e,
      children: (0, i.jsx)(s.TextBadge, {
        text: o.default.Messages.NEW
      })
    })
  })
}