"use strict";
s.r(t), s.d(t, {
  WarningBlockButtonPosition: function() {
    return E
  },
  default: function() {
    return f
  }
});
var n = s("735250");
s("470079");
var l = s("803997"),
  a = s.n(l),
  o = s("780384"),
  i = s("481060"),
  r = s("410030"),
  u = s("696936"),
  c = s("903773"),
  d = s("677852");
let E = {
  RIGHT: d.horizontalStatusWarningBlock,
  BOTTOM: d.verticalStatusWarningBlock
};

function f(e) {
  let {
    className: t,
    color: s = u.MessageBlockColors.YELLOW,
    buttonPosition: l = E.BOTTOM,
    notice: f,
    ctaLabel: h,
    ctaLoading: C,
    ctaDisabled: p,
    ctaClassName: _,
    onClick: I
  } = e, N = (0, r.default)();
  return (0, n.jsx)(c.default, {
    className: a()(d.statusWarningBlock, {
      [d.statusWarningBlockWithCta]: null != h
    }, t),
    color: (0, o.isThemeDark)(N) ? s : u.MessageBlockColors.BROWN,
    children: (0, n.jsxs)("div", {
      className: l,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: f
      }), null != h && null != I && (0, n.jsx)("div", {
        className: d.ctaButtonContainer,
        children: (0, n.jsx)(i.Button, {
          className: a()(d.ctaButton, (0, o.isThemeDark)(N) ? void 0 : d.ctaBlackButton, _),
          color: (0, o.isThemeDark)(N) ? i.Button.Colors.WHITE : i.Button.Colors.CUSTOM,
          size: i.ButtonSizes.MEDIUM,
          onClick: I,
          disabled: p,
          submitting: C,
          children: (0, n.jsx)(i.Text, {
            className: d.ctaButtonText,
            variant: "text-sm/medium",
            children: h
          })
        })
      })]
    })
  })
}