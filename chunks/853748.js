"use strict";
t.d(s, {
  $: function() {
    return p
  }
}), t(653041);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(920906),
  o = t(873546),
  c = t(399606),
  u = t(481060),
  d = t(774078),
  C = t(607070),
  E = t(689938),
  f = t(549622);

function m(e) {
  let {
    endDate: s
  } = e, {
    days: t,
    hours: a,
    minutes: i,
    seconds: l
  } = (0, d.Z)(s), r = function(e, s, t, n) {
    let a = (e, s) => "".concat(e.toString().padStart(2, "0")).concat(s),
      i = [];
    return e > 0 && i.push(a(e, E.Z.Messages.COUNTDOWN_UNITS_DAYS)), (s > 0 || i.length > 0) && i.push(a(s, E.Z.Messages.COUNTDOWN_UNITS_HOURS)), (t > 0 || i.length > 0) && i.push(a(t, E.Z.Messages.COUNTDOWN_UNITS_MINUTES)), i.push(a(n, E.Z.Messages.COUNTDOWN_UNITS_SECONDS)), i.join(":")
  }(t, a, i, l);
  return (0, n.jsx)(u.Text, {
    variant: "heading-md/medium",
    className: f.countdown,
    tag: "div",
    children: (0, n.jsx)("div", {
      role: "timer",
      "aria-relevant": "all",
      children: r
    })
  })
}
let p = a.memo(function(e) {
  let {
    unpublishedAt: s,
    isVisible: t,
    displayOptions: a,
    isFullScreen: i
  } = e, d = (0, c.e7)([C.Z], () => C.Z.useReducedMotion), E = (0, r.useSpring)({
    transform: "translateX(-50%) ".concat(t ? "translateY(-100%)" : "translateY(0%)"),
    opacity: t ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: d
  });
  return (0, n.jsxs)(r.animated.div, {
    className: l()([f.countDownWrapper, i && f.fullScreenWrapper, o.tq && f.mobileWrapper]),
    role: "status",
    style: {
      backgroundColor: a.backgroundColor,
      boxShadow: a.boxShadow,
      color: a.labelColor,
      ...E
    },
    children: [null != a.iconSrc && (0, n.jsx)("img", {
      src: a.iconSrc,
      className: f.countdownIcon,
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: f.countdownLabel,
      children: a.label()
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/medium",
      className: f.countdown,
      children: "—"
    }), (0, n.jsx)(m, {
      endDate: s
    })]
  })
})