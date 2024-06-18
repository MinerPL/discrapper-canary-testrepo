"use strict";
n.d(t, {
  u: function() {
    return I
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(481060),
  u = n(130402),
  _ = n(153066),
  d = n(185923),
  c = n(689938),
  E = n(525011);
let I = {
  tension: 800,
  friction: 24
};
t.Z = function(e) {
  var t;
  let {
    tabIndex: n,
    className: s,
    renderButtonContents: T,
    active: h,
    onClick: S,
    "aria-controls": f,
    focusProps: N
  } = e, [A, m] = r.useState(!1), [O, R] = r.useState(50), C = A || h, p = (0, _.l)(E, "emojiButton", C ? "Hovered" : "Normal");
  let g = (t = O, {
      "--custom-emoji-sprite-size": "".concat(24, "px"),
      "--custom-emoji-sprite-row": Math.floor(t / 20),
      "--custom-emoji-sprite-col": t % 20
    }),
    L = r.useCallback(() => {
      if (C) return;
      let e = Math.floor(77 * Math.random());
      m(!0), R(e), (0, u.x)(d.qR.EmojiButtonMouseEntered)
    }, [C, m, R]),
    v = r.useCallback(() => {
      m(!1)
    }, [m]),
    D = r.useCallback(() => (0, u.x)(d.qR.EmojiButtonFocused), []);
  return (0, i.jsx)(l.Button, {
    look: l.Button.Looks.BLANK,
    size: l.Button.Sizes.NONE,
    tabIndex: n,
    className: o()(p, s),
    onMouseEnter: L,
    onMouseOver: L,
    onMouseLeave: v,
    onFocus: D,
    onClick: S,
    "aria-label": c.Z.Messages.SELECT_EMOJI,
    "aria-controls": f,
    "aria-expanded": h,
    "aria-haspopup": "dialog",
    focusProps: N,
    children: null != T ? T() : (0, i.jsx)(a.Spring, {
      config: I,
      to: {
        value: C ? 1 : 0
      },
      children: e => {
        let {
          value: t
        } = e;
        return (0, i.jsxs)(a.animated.div, {
          className: E.spriteContainer,
          style: {
            ...g,
            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
          },
          children: [(0, i.jsx)("div", {
            className: o()(E.sprite, E.spriteColored, C ? E.active : E.inactive)
          }), (0, i.jsx)("div", {
            className: o()(E.sprite, E.spriteGreyscale, C ? E.inactive : E.active)
          })]
        })
      }
    })
  })
}