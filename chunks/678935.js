"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("113434"),
  i = n("710914"),
  r = n("77608"),
  o = n("214655");

function u(e) {
  let {} = e, [t, n] = s.useState(l.QuestFilters.INCOMPLETE), {
    quests: u
  } = (0, l.useFilteredQuests)(t);
  return (0, a.jsxs)("div", {
    className: o.container,
    children: [(0, a.jsx)(r.default, {
      setSelectedFilter: e => {
        n(e)
      },
      selectedFilter: t
    }), (0, a.jsx)(i.default, {
      quests: u
    })]
  })
}