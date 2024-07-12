var s = n(735250);
n(470079);
var o = n(35148),
  r = n(266685),
  a = n(432237);
t.Z = function(e) {
  let {
expandedContentRef: t,
expansionSpring: n,
isExpanded: i,
isExpansionAnimationComplete: l,
onCtxMenuOpened: c,
onCtxMenuClosed: d,
onCtxMenuSelection: u,
quest: p,
useReducedMotion: x
  } = e;
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(o.Z, {
    className: a.content,
    expansionSpring: n,
    isExpanded: i,
    isExpansionAnimationComplete: l,
    quest: p,
    useReducedMotion: x
  }),
  (0, s.jsx)(r.Z, {
    className: a.content,
    onCtxMenuOpen: c,
    onCtxMenuClose: d,
    onCtxMenuSelect: u,
    isExpanded: i,
    isExpansionAnimationComplete: l,
    quest: p,
    useReducedMotion: x,
    ref: t
  })
]
  });
};