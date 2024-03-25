"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("204597"),
  l = n("904945"),
  i = n("59678");

function r(e) {
  let {
    relationshipCount: t,
    statusSections: n,
    renderRow: r,
    searchQuery: o,
    sectionFilter: u,
    useReducedMotion: d
  } = e;
  return t >= i.RELATIONSHIP_COUNT_ANIMATION_THRESHOLD ? (0, a.jsx)(s.default, {
    statusSections: n,
    renderRow: r,
    searchQuery: o
  }) : (0, a.jsx)(l.default, {
    statusSections: n,
    renderRow: r,
    sectionFilter: u,
    searchQuery: o,
    useReducedMotion: d
  })
}