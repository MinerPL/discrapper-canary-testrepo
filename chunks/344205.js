"use strict";
a.r(t), a.d(t, {
  CollectiblesCountdown: function() {
    return c
  }
});
var s = a("37983");
a("884691");
var r = a("146606"),
  l = a("65597"),
  n = a("77078"),
  o = a("174727"),
  i = a("206230"),
  u = a("556538");

function c(e) {
  let {
    unpublishedAt: t,
    isVisible: a,
    displayOptions: c
  } = e, {
    days: d,
    hours: f,
    minutes: m,
    seconds: C
  } = (0, o.default)(t), p = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), g = (0, r.useSpring)({
    transform: "translateX(-50%) ".concat(a ? "translateY(-100%)" : "translateY(0%)"),
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: p
  });
  return (0, s.jsxs)(r.animated.div, {
    className: u.countDownWrapper,
    style: {
      backgroundColor: c.backgroundColor,
      boxShadow: c.boxShadow,
      color: c.labelColor,
      ...g
    },
    children: [null != c.iconSrc && (0, s.jsx)("img", {
      src: c.iconSrc,
      alt: "shy"
    }), (0, s.jsx)(n.Heading, {
      variant: "heading-md/medium",
      className: u.countdownLabel,
      children: c.label()
    }), (0, s.jsx)(n.Heading, {
      variant: "heading-md/medium",
      className: u.countdown,
      children: "—"
    }), (0, s.jsxs)(n.Heading, {
      variant: "heading-md/medium",
      className: u.countdown,
      children: [d, ".", f, ".", m, ".", C]
    })]
  })
}