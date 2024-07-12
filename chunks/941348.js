var s = n(735250),
  o = n(470079),
  r = n(113434),
  a = n(308069),
  i = n(613087),
  l = n(457153),
  c = n(254197),
  d = n(321025),
  u = n(768545);
t.Z = function(e) {
  var t;
  let {
expandedContentRef: n,
expansionSpring: p,
isExpanded: x,
isExpansionAnimationComplete: m,
onCtxMenuOpened: g,
onCtxMenuClosed: C,
onCtxMenuSelection: f,
quest: _,
useReducedMotion: h
  } = e, E = o.useRef(null), T = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, S = (0, r.Rf)(_);
  return (0, s.jsxs)(i.p, {
expandedContentRef: n,
collapsedContentRef: E,
expansionSpring: p,
isExpansionAnimationComplete: m,
children: [
  !T && (0, s.jsx)(a.Z, {
    quest: _,
    expansionSpring: p,
    useReducedMotion: h,
    isExpanded: x,
    isExpansionAnimationComplete: m,
    onCtxMenuOpen: g,
    onCtxMenuClose: C,
    onCtxMenuSelect: f
  }),
  (0, s.jsx)(l.Z, {
    ref: E,
    className: u.content,
    expansionSpring: p,
    isExpanded: x,
    isExpansionAnimationComplete: m,
    quest: _,
    useReducedMotion: h,
    taskDetails: S
  }),
  (0, s.jsx)(c.Z, {
    expansionSpring: p,
    className: u.content,
    onCtxMenuOpen: g,
    onCtxMenuClose: C,
    onCtxMenuSelect: f,
    isExpanded: x,
    isExpansionAnimationComplete: m,
    quest: _,
    useReducedMotion: h,
    ref: n,
    taskDetails: S
  }),
  (0, s.jsx)(d.Z, {
    expansionSpring: p,
    isExpanded: x
  })
]
  });
};