"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
});
var s = a("735250");
a("470079");
var n = a("120356"),
  l = a.n(n),
  o = a("960524"),
  i = a("793030"),
  c = a("481060"),
  r = a("759198"),
  u = a("552958"),
  d = a("767157"),
  C = a("689938"),
  O = a("883169");

function I(e) {
  let {
    label: t,
    className: a,
    description: n,
    soundpack: I,
    location: _
  } = e, {
    playSound: T,
    isPlaying: N
  } = (0, u.default)();
  return (0, s.jsxs)(c.Clickable, {
    "aria-label": C.default.Messages.PLAY,
    className: l()(O.container, a, {
      [O.containerActive]: N
    }),
    onClick: () => {
      (0, d.default)(I, _), T(I)
    },
    children: [(0, s.jsx)(o.CirclePlayIcon, {
      className: O.playButton,
      color: N ? c.tokens.colors.INTERACTIVE_ACTIVE : c.tokens.colors.INTERACTIVE_NORMAL
    }), (0, s.jsxs)("div", {
      className: O.textContainer,
      children: [(0, s.jsx)(r.default, {
        variant: "text-md/medium",
        children: t
      }), (0, s.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}