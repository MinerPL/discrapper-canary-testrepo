"use strict";
a.r(t), a.d(t, {
  CollectiblesCountdown: function() {
    return h
  }
}), a("653041");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("718017"),
  o = a("873546"),
  u = a("399606"),
  c = a("481060"),
  d = a("774078"),
  f = a("607070"),
  m = a("689938"),
  C = a("722858");

function p(e) {
  let {
    endDate: t
  } = e, {
    days: a,
    hours: s,
    minutes: r,
    seconds: n
  } = (0, d.default)(t), i = function(e, t, a, l) {
    let s = (e, t) => "".concat(e.toString().padStart(2, "0")).concat(t),
      r = [];
    return e > 0 && r.push(s(e, m.default.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || r.length > 0) && r.push(s(t, m.default.Messages.COUNTDOWN_UNITS_HOURS)), (a > 0 || r.length > 0) && r.push(s(a, m.default.Messages.COUNTDOWN_UNITS_MINUTES)), r.push(s(l, m.default.Messages.COUNTDOWN_UNITS_SECONDS)), r.join(":")
  }(a, s, r, n);
  return (0, l.jsx)(c.Text, {
    variant: "heading-md/medium",
    className: C.countdown,
    tag: "div",
    children: (0, l.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: i
    })
  })
}
let h = s.memo(function(e) {
  let {
    unpublishedAt: t,
    isVisible: a,
    displayOptions: s,
    isFullScreen: r
  } = e, d = (0, u.useStateFromStores)([f.default], () => f.default.useReducedMotion), m = (0, i.useSpring)({
    transform: "translateX(-50%) ".concat(a ? "translateY(-100%)" : "translateY(0%)"),
    opacity: a ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, l.jsxs)(i.animated.div, {
    className: n()([C.countDownWrapper, r && C.fullScreenWrapper, o.isMobile && C.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: s.backgroundColor,
      boxShadow: s.boxShadow,
      color: s.labelColor,
      ...m
    },
    children: [null != s.iconSrc && (0, l.jsx)("img", {
      src: s.iconSrc,
      className: C.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, l.jsx)(c.Heading, {
      variant: "heading-md/medium",
      className: C.countdownLabel,
      children: s.label()
    }), (0, l.jsx)(c.Heading, {
      variant: "heading-md/medium",
      className: C.countdown,
      children: "—"
    }), (0, l.jsx)(p, {
      endDate: t
    })]
  })
})