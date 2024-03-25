"use strict";
s.r(t), s.d(t, {
  WarningBlockButtonPosition: function() {
    return E
  },
  default: function() {
    return f
  }
});
var n = s("37983");
s("884691");
var l = s("414456"),
  o = s.n(l),
  a = s("819855"),
  r = s("77078"),
  i = s("841098"),
  u = s("223984"),
  c = s("417186"),
  d = s("715202");
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
    ctaLabel: _,
    ctaLoading: C,
    ctaDisabled: I,
    ctaClassName: N,
    onClick: h
  } = e, g = (0, i.default)();
  return (0, n.jsx)(c.default, {
    className: o(d.statusWarningBlock, {
      [d.statusWarningBlockWithCta]: null != _
    }, t),
    color: (0, a.isThemeDark)(g) ? s : u.MessageBlockColors.BROWN,
    children: (0, n.jsxs)("div", {
      className: l,
      children: [(0, n.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "interactive-active",
        children: f
      }), null != _ && null != h && (0, n.jsx)("div", {
        className: d.ctaButtonContainer,
        children: (0, n.jsx)(r.Button, {
          className: o(d.ctaButton, (0, a.isThemeDark)(g) ? void 0 : d.ctaBlackButton, N),
          color: (0, a.isThemeDark)(g) ? r.Button.Colors.WHITE : r.Button.Colors.CUSTOM,
          size: r.ButtonSizes.MEDIUM,
          onClick: h,
          disabled: I,
          submitting: C,
          children: (0, n.jsx)(r.Text, {
            className: d.ctaButtonText,
            variant: "text-sm/medium",
            children: _
          })
        })
      })]
    })
  })
}