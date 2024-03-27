"use strict";
n.r(t), n.d(t, {
  QuestUserSettingsBadge: function() {
    return a
  }
});
var i = n("37983");
n("884691");
var s = n("956089"),
  l = n("588025"),
  r = n("534801"),
  o = n("782340");

function a(e) {
  return (0, i.jsx)(r.QuestContentImpressionTracker, {
    questId: e.questIds,
    questContent: l.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE,
    children: e => (0, i.jsx)("span", {
      ref: e,
      children: (0, i.jsx)(s.TextBadge, {
        text: o.default.Messages.NEW
      })
    })
  })
}