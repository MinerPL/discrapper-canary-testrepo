"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(846519),
  o = t(481060),
  c = t(259580),
  d = t(81543),
  u = t(689938),
  E = t(772817);
s.Z = function(e) {
  let {
    items: s,
    carouselClassName: t,
    paginationCaretClassName: l,
    intervalBetweenAutomaticItemRotations: _,
    renderItem: I
  } = e, T = i.useMemo(() => new r.Xp, []), [N, m] = i.useState(d.n.LEFT), [S, h] = i.useState(0), [g, x] = i.useState(!1), [C, R] = i.useState(!1), L = i.useCallback((e, s) => {
    h(t => {
      let n = t + s;
      return n < 0 ? n = e.length - 1 : n > e.length - 1 && (n = 0), n
    })
  }, [h]), O = i.useCallback(() => {
    if (!C) L(s, 1)
  }, [L, s, C]), A = i.useCallback(() => {
    if (!C) L(s, -1)
  }, [L, s, C]);
  return i.useEffect(() => {
    null != _ && (g ? g && T.stop() : T.start(_, O))
  }, [g, T, _, O]), (0, n.jsxs)("div", {
    className: E.root,
    onMouseEnter: () => x(!0),
    onMouseLeave: () => x(!1),
    children: [(0, n.jsx)(o.Clickable, {
      className: a()(E.carouselCaret, l),
      onClick: A,
      onMouseEnter: () => m(d.n.RIGHT),
      ignoreKeyPress: C,
      children: (0, n.jsx)(c.Z, {
        direction: c.Z.Directions.LEFT,
        height: 48,
        width: 48,
        "aria-label": u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_PREVIOUS_CARD_ARIA_LABEL
      })
    }), (0, n.jsx)(d.Z, {
      step: S,
      direction: N,
      onAnimationStart: () => R(!0),
      onAnimationEnd: () => R(!1),
      className: a()(E.carousel, t),
      children: I(s[S])
    }), (0, n.jsx)(o.Clickable, {
      className: a()(E.carouselCaret, l),
      onClick: O,
      onMouseEnter: () => m(d.n.LEFT),
      ignoreKeyPress: C,
      children: (0, n.jsx)(c.Z, {
        direction: c.Z.Directions.RIGHT,
        height: 48,
        width: 48,
        "aria-label": u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_NEXT_CARD_ARIA_LABEL
      })
    })]
  })
}