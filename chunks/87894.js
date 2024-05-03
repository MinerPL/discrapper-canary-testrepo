"use strict";
n.r(t), n.d(t, {
  QUESTS_CARD_COLLAPSED_HEIGHT_PX: function() {
    return o
  },
  QUESTS_CARD_EXTRA_SMALL_BREAKPOINT_PX: function() {
    return E
  },
  QUESTS_CARD_ICON_SIZE_PX: function() {
    return d
  },
  QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX: function() {
    return c
  },
  QUESTS_CARD_PADDING_Y_PX: function() {
    return u
  },
  QUESTS_CARD_SMALL_BREAKPOINT_PX: function() {
    return f
  },
  QuestsInventorySection: function() {
    return a
  },
  shouldQuestBeInitiallyExpanded: function() {
    return r
  },
  shouldQuestCardBeExpandedPermanently: function() {
    return i
  }
});
var s, a, l = n("497505");

function i(e) {
  return e.location !== l.QuestContent.QUEST_INVENTORY_CARD || 0 === e.giftInventorySection
}

function r(e) {
  let {
    userStatus: t
  } = e.quest;
  return (null == t ? void 0 : t.enrolledAt) != null && null == t.completedAt || i(e)
}(s = a || (a = {}))[s.FOR_YOU = 0] = "FOR_YOU", s[s.OTHER = 1] = "OTHER";
let o = 100,
  u = 20,
  d = 32,
  c = 1e3,
  f = 460,
  E = 280