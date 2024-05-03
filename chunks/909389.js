"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("35148"),
  l = n("266685"),
  i = n("212169");
t.default = function(e) {
  let {
    expandedContentRef: t,
    expansionSpring: n,
    isExpanded: r,
    isExpansionAnimationComplete: o,
    onCtxMenuOpened: u,
    onCtxMenuClosed: d,
    onCtxMenuSelection: c,
    quest: f,
    useReducedMotion: E
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.default, {
      className: i.content,
      expansionSpring: n,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: f,
      useReducedMotion: E
    }), (0, a.jsx)(l.default, {
      className: i.content,
      onCtxMenuOpen: u,
      onCtxMenuClose: d,
      onCtxMenuSelect: c,
      isExpanded: r,
      isExpansionAnimationComplete: o,
      quest: f,
      useReducedMotion: E,
      ref: t
    })]
  })
}