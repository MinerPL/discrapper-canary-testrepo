"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return T
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("920906"),
  i = n("686777"),
  r = n("113434"),
  o = n("497505"),
  u = n("874137"),
  d = n("87894"),
  c = n("372113"),
  f = n("206044"),
  E = n("266843"),
  _ = n("46140"),
  m = n("598762");
let T = e => {
  let {
    quest: t,
    location: n,
    initiallyExpanded: T,
    contentPosition: I
  } = e, [p, h] = a.useState(!1), N = a.useCallback(() => h(!0), []), S = a.useCallback(() => h(!1), []), C = (0, r.useIsQuestExpired)(t), {
    containerRef: A,
    size: g,
    height: M
  } = (0, E.useQuestCardSize)([t]), R = (0, i.useIsEligibleForConcurrentQuests)({
    location: _.QuestsExperimentLocations.QUESTS_CARD
  }), {
    expansionSpring: v,
    isAnimating: O,
    isExpanded: x,
    toggleExpanded: L
  } = (0, E.useQuestCardAnimation)({
    initiallyExpanded: !R || T || (0, d.shouldQuestBeInitiallyExpanded)({
      location: n,
      quest: t
    })
  }), D = null != M ? M : d.QUESTS_CARD_MAX_HEIGHT_FALLBACK_PX;
  return (0, s.jsx)(u.QuestContentImpressionTracker, {
    questOrQuests: t,
    questContent: n,
    questContentPosition: I,
    trackGuildAndChannelMetadata: n === o.QuestContent.QUESTS_EMBED,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)(l.animated.div, {
        style: {
          maxHeight: n === o.QuestContent.QUESTS_EMBED ? void 0 : v.to({
            range: [0, 1],
            output: [d.QUESTS_CARD_COLLAPSED_HEIGHT_PX, D]
          })
        },
        ref: t => {
          e.current = t, A.current = t
        },
        className: m.questsCard,
        onFocus: N,
        onMouseEnter: N,
        onBlur: S,
        onMouseLeave: S,
        children: [(0, s.jsx)(f.default, {
          isFocused: p,
          isQuestExpired: C,
          location: n,
          quest: t,
          size: g,
          expansionSpring: v,
          isAnimating: O,
          isExpanded: x,
          isInConcurrentQuestExperiment: R,
          contentPosition: I,
          toggleExpanded: L
        }), (0, s.jsx)(c.default, {
          quest: t,
          isQuestExpired: C,
          location: n,
          size: g,
          isFocused: p,
          isExpanded: x,
          isAnimating: O,
          contentPosition: I
        })]
      })
    })
  })
}