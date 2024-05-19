"use strict";
n.r(t), n.d(t, {
  QUESTS_CARD_COLLAPSED_HEIGHT_PX: function() {
    return u
  },
  QUESTS_CARD_EXTRA_SMALL_BREAKPOINT_PX: function() {
    return _
  },
  QUESTS_CARD_ICON_SIZE_PX: function() {
    return c
  },
  QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX: function() {
    return f
  },
  QUESTS_CARD_PADDING_Y_PX: function() {
    return d
  },
  QUESTS_CARD_SMALL_BREAKPOINT_PX: function() {
    return E
  },
  isQuestCardInGiftInventory: function() {
    return i
  },
  shouldQuestBeInitiallyExpanded: function() {
    return o
  },
  shouldQuestCardBeExpandedPermanently: function() {
    return r
  }
});
var s, a, l = n("497505");

function i(e) {
  return [l.QuestContent.GIFT_INVENTORY_FOR_YOU, l.QuestContent.GIFT_INVENTORY_OTHER].includes(e)
}

function r(e) {
  return e === l.QuestContent.GIFT_INVENTORY_FOR_YOU || !i(e)
}

function o(e) {
  let {
    userStatus: t
  } = e.quest;
  return (null == t ? void 0 : t.enrolledAt) != null && null == t.completedAt || r(e.location)
}(s = a || (a = {}))[s.FOR_YOU = 0] = "FOR_YOU", s[s.OTHER = 1] = "OTHER";
let u = 100,
  d = 20,
  c = 32,
  f = 1e3,
  E = 460,
  _ = 280