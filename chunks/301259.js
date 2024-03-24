"use strict";
n.r(t), n.d(t, {
  useQuestCardSize: function() {
    return c
  },
  QuestsCard: function() {
    return E
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("731898"),
  i = n("534801"),
  r = n("775725"),
  o = n("749332"),
  u = n("419292"),
  d = n("896451");

function c() {
  let {
    ref: e,
    width: t
  } = (0, a.default)(), n = l.useMemo(() => null == t || t > 460 ? "lg" : t > 280 ? "sm" : "xs", [t]);
  return {
    containerRef: e,
    size: n
  }
}
let E = e => {
  let {
    quest: t,
    location: n
  } = e, [a, E] = l.useState(!1), f = l.useCallback(() => E(!0), []), _ = l.useCallback(() => E(!1), []), {
    containerRef: T,
    size: I
  } = c();
  return (0, s.jsx)(i.QuestContentImpressionTracker, {
    questId: t.id,
    questContent: n,
    children: e => (0, s.jsx)(s.Fragment, {
      children: (0, s.jsxs)("div", {
        ref: t => {
          e.current = t, T.current = t
        },
        className: d.questsCard,
        onFocus: f,
        onMouseEnter: f,
        onBlur: _,
        onMouseLeave: _,
        children: [(0, s.jsx)(o.default, {
          isFocused: a,
          quest: t,
          location: n,
          size: I
        }), (0, s.jsx)(r.default, {
          quest: t,
          location: n,
          size: I
        }), (0, s.jsx)(u.default, {
          quest: t,
          location: n
        })]
      })
    })
  })
}