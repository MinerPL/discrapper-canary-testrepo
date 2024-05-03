"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return T
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("718017"),
  i = n("686777"),
  r = n("113434"),
  o = n("497505"),
  u = n("874137"),
  d = n("87894"),
  c = n("372113"),
  f = n("206044"),
  E = n("266843"),
  _ = n("46140"),
  m = n("714153");
let T = e => {
  let {
    quest: t,
    location: n,
    giftInventorySection: T
  } = e, [I, p] = a.useState(!1), h = a.useCallback(() => p(!0), []), N = a.useCallback(() => p(!1), []), S = (0, r.useIsQuestExpired)(t), {
    containerRef: C,
    size: A,
    height: g
  } = (0, E.useQuestCardSize)([t]), M = (0, i.useIsEligibleForConcurrentQuests)({
    location: _.QuestsExperimentLocations.QUESTS_CARD
  }), {
    expansionSpring: R,
    isAnimating: v,
    isExpanded: O,
    toggleExpanded: x
  } = (0, E.useQuestCardAnimation)({
    initiallyExpanded: !M || (0, d.shouldQuestBeInitiallyExpanded)({
      giftInventorySection: T,
      location: n,
      quest: t
    })
  }), L = null != g ? g : d.QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX;
  return (0, s.jsx)(u.QuestContentImpressionTracker, {
    questOrQuests: t,
    questContent: n,
    trackGuildAndChannelMetadata: n === o.QuestContent.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)(l.animated.div, {
        style: {
          maxHeight: n === o.QuestContent.QUESTS_EMBED ? void 0 : R.to({
            range: [0, 1],
            output: [d.QUESTS_CARD_COLLAPSED_HEIGHT_PX, L]
          })
        },
        ref: t => {
          e.current = t, C.current = t
        },
        className: m.questsCard,
        onFocus: h,
        onMouseEnter: h,
        onBlur: N,
        onMouseLeave: N,
        children: [(0, s.jsx)(f.default, {
          isFocused: I,
          isQuestExpired: S,
          location: n,
          quest: t,
          size: A,
          expansionSpring: R,
          isAnimating: v,
          isExpanded: O,
          isInConcurrentQuestExperiment: M,
          giftInventorySection: T,
          toggleExpanded: x
        }), (0, s.jsx)(c.default, {
          quest: t,
          isQuestExpired: S,
          location: n,
          size: A,
          isFocused: I,
          isExpanded: O,
          isAnimating: v
        })]
      })
    })
  })
}