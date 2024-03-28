"use strict";
n.r(t), n.d(t, {
  QuestsCard: function() {
    return f
  },
  useQuestCardSize: function() {
    return c
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("393238"),
  i = n("874137"),
  r = n("372113"),
  o = n("206044"),
  u = n("21029"),
  d = n("25269");

function c() {
  let {
    ref: e,
    width: t
  } = (0, l.default)();
  return {
    containerRef: e,
    size: a.useMemo(() => null == t || t > 460 ? "lg" : t > 280 ? "sm" : "xs", [t])
  }
}
let f = e => {
  let {
    quest: t,
    location: n
  } = e, [l, f] = a.useState(!1), E = a.useCallback(() => f(!0), []), _ = a.useCallback(() => f(!1), []), {
    containerRef: T,
    size: m
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
        onFocus: E,
        onMouseEnter: E,
        onBlur: _,
        onMouseLeave: _,
        children: [(0, s.jsx)(o.default, {
          isFocused: l,
          quest: t,
          location: n,
          size: m
        }), (0, s.jsx)(r.default, {
          quest: t,
          location: n,
          size: m
        }), (0, s.jsx)(u.default, {
          quest: t,
          location: n
        })]
      })
    })
  })
}