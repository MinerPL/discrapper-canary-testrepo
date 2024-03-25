"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("862337"),
  o = s("77078"),
  d = s("461380"),
  u = s("926633"),
  c = s("782340"),
  E = s("314424"),
  _ = function(e) {
    let {
      items: t,
      carouselClassName: s,
      paginationCaretClassName: n,
      intervalBetweenAutomaticItemRotations: _,
      renderItem: I
    } = e, T = l.useMemo(() => new r.Interval, []), [S, f] = l.useState(u.SlideDirection.LEFT), [m, N] = l.useState(0), [g, h] = l.useState(!1), [C, R] = l.useState(!1), x = l.useCallback((e, t) => {
      N(s => {
        let a = s + t;
        return a < 0 ? a = e.length - 1 : a > e.length - 1 && (a = 0), a
      })
    }, [N]), L = l.useCallback(() => {
      !C && x(t, 1)
    }, [x, t, C]), O = l.useCallback(() => {
      !C && x(t, -1)
    }, [x, t, C]);
    return l.useEffect(() => {
      null != _ && (g ? g && T.stop() : T.start(_, L))
    }, [g, T, _, L]), (0, a.jsxs)("div", {
      className: E.root,
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      children: [(0, a.jsx)(o.Clickable, {
        className: i(E.carouselCaret, n),
        onClick: O,
        onMouseEnter: () => f(u.SlideDirection.RIGHT),
        ignoreKeyPress: C,
        children: (0, a.jsx)(d.default, {
          direction: d.default.Directions.LEFT,
          height: 48,
          width: 48,
          "aria-label": c.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_PREVIOUS_CARD_ARIA_LABEL
        })
      }), (0, a.jsx)(u.default, {
        step: m,
        direction: S,
        onAnimationStart: () => R(!0),
        onAnimationEnd: () => R(!1),
        className: i(E.carousel, s),
        children: I(t[m])
      }), (0, a.jsx)(o.Clickable, {
        className: i(E.carouselCaret, n),
        onClick: L,
        onMouseEnter: () => f(u.SlideDirection.LEFT),
        ignoreKeyPress: C,
        children: (0, a.jsx)(d.default, {
          direction: d.default.Directions.RIGHT,
          height: 48,
          width: 48,
          "aria-label": c.default.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_NEXT_CARD_ARIA_LABEL
        })
      })]
    })
  }