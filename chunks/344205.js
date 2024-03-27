"use strict";
a.r(t), a.d(t, {
  CollectiblesCountdown: function() {
    return c
  }
});
var s = a("37983");
a("884691");
var l = a("146606"),
  r = a("65597"),
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
  } = (0, o.default)(t), p = (0, r.useStateFromStores)([i.default], () => i.default.useReducedMotion), g = (0, l.useSpring)({
    transform: "translateX(-50%) ".concat(a ? "translateY(-100%)" : "translateY(0%)"),
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: p
  });
  return (0, s.jsxs)(l.animated.div, {
    className: u.countDownWrapper,
    style: {
      backgroundColor: c.backgroundColor,
      boxShadow: c.boxShadow,
      color: c.labelColor,
      ...g
    },
    children: [null != c.iconSrc && (0, s.jsx)("img", {
      src: c.iconSrc,
      className: u.countdownIcon,
      alt: "",
      "aria-hidden": !0
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