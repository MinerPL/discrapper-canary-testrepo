"use strict";
a.r(t), a.d(t, {
  CollectiblesCountdown: function() {
    return m
  }
}), a("653041");
var s = a("735250"),
  l = a("470079"),
  r = a("718017"),
  n = a("399606"),
  o = a("481060"),
  i = a("774078"),
  u = a("607070"),
  c = a("689938"),
  d = a("13574");

function f(e) {
  let {
    endDate: t
  } = e, {
    days: a,
    hours: l,
    minutes: r,
    seconds: n
  } = (0, i.default)(t), u = function(e, t, a, s) {
    let l = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      r = [];
    return e > 0 && r.push(l(e, c.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || r.length > 0) && r.push(l(t, c.default.Messages.COUNTDOWN_UNITS_HOURS)), (a > 0 || r.length > 0) && r.push(l(a, c.default.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(l(s, c.default.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(a, l, r, n);
  return (0, s.jsx)(o.Heading, {
    variant: "heading-md/medium",
    className: d.countdown,
    children: u
  })
}
let m = l.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: a,
    displayOptions: l
  } = e, i = (0, n.useStateFromStores)([u.default], () => u.default.useReducedMotion), c = (0, r.useSpring)({
    transform: "translateX(-50%) ".concat(a ? "translateY(-100%)" : "translateY(0%)"),
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: i
  });
  return (0, s.jsxs)(r.animated.div, {
    className: d.countDownWrapper,
    "aria-live": "polite",
    style: {
      backgroundColor: l.backgroundColor,
      boxShadow: l.boxShadow,
      color: l.labelColor,
      ...c
    },
    children: [null != l.iconSrc && (0, s.jsx)("img", {
      src: l.iconSrc,
      className: d.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, s.jsx)(o.Heading, {
      variant: "heading-md/medium",
      className: d.countdownLabel,
      children: l.label()
    }), (0, s.jsx)(o.Heading, {
      variant: "heading-md/medium",
      className: d.countdown,
      children: "—"
    }), (0, s.jsx)(f, {
      endDate: t
    })]
  })
})