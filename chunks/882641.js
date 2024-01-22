"use strict";
n.r(t), n.d(t, {
  EMOJI_BUTTON_SPRING_CONFIG: function() {
    return _
  },
  default: function() {
    return I
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  o = n.n(l),
  s = n("907002"),
  a = n("77078"),
  u = n("913144"),
  c = n("474293"),
  d = n("958706"),
  f = n("782340"),
  E = n("505436");
let _ = {
  tension: 800,
  friction: 24
};
var I = function(e) {
  var t;
  let {
    tabIndex: n,
    className: l,
    renderButtonContents: I,
    active: h,
    onClick: p,
    "aria-controls": S,
    focusProps: C
  } = e, [T, N] = r.useState(!1), [v, m] = r.useState(50), g = T || h, A = (0, c.getClass)(E, "emojiButton", g ? "Hovered" : "Normal");
  let L = (t = v, {
      "--custom-emoji-sprite-size": "".concat(24, "px"),
      "--custom-emoji-sprite-row": Math.floor(t / 20),
      "--custom-emoji-sprite-col": t % 20
    }),
    R = r.useCallback(() => {
      if (!g) N(!0), m(Math.floor(77 * Math.random())), u.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
      })
    }, [g, N, m]),
    O = r.useCallback(() => {
      N(!1)
    }, [N]),
    U = r.useCallback(() => {
      u.default.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
      })
    }, []);
  return (0, i.jsx)(a.Button, {
    look: a.Button.Looks.BLANK,
    size: a.Button.Sizes.NONE,
    tabIndex: n,
    className: o(A, l),
    onMouseEnter: R,
    onMouseOver: R,
    onMouseLeave: O,
    onFocus: U,
    onClick: p,
    "aria-label": f.default.Messages.SELECT_EMOJI,
    "aria-controls": S,
    "aria-expanded": h,
    "aria-haspopup": "dialog",
    focusProps: C,
    children: null != I ? I() : (0, i.jsx)(s.Spring, {
      config: _,
      to: {
        value: g ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, i.jsxs)(s.animated.div, {
          className: E.spriteContainer,
          style: {
            ...L,
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          },
          children: [(0, i.jsx)("div", {
            className: o(E.sprite, E.spriteColored, g ? E.active : E.inactive)
          }), (0, i.jsx)("div", {
            className: o(E.sprite, E.spriteGreyscale, g ? E.inactive : E.active)
          })]
        })
      }
    })
  })
}