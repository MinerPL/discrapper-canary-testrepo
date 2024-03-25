"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var l = n("146606"),
  s = n("46829"),
  i = n("981913"),
  r = n("782340"),
  u = n("643708");
let o = (0, l.animated)(e => {
  let {
    percentComplete: t
  } = e, n = 20;
  return (0, a.jsx)("svg", {
    className: u.countdown,
    width: 40,
    height: 40,
    viewBox: "0 0 ".concat(40, " ").concat(40),
    children: (0, a.jsx)("circle", {
      style: {
        strokeDashoffset: Math.round(100 * t)
      },
      className: u.progress,
      cx: n,
      cy: n,
      r: n - 6,
      fill: "none",
      stroke: "#4F545C",
      pathLength: "100"
    })
  })
});

function d(e) {
  let {
    totalCooldownSeconds: t,
    remainingCooldownSeconds: n,
    onClick: d,
    onKeyDown: c,
    onMouseEnter: f,
    onMouseLeave: h,
    isActive: m = !1,
    isCenterButton: p = !1,
    ...E
  } = e, g = n > 0, S = (0, l.useSpring)({
    percentComplete: 0 !== n ? (t - n) / t : 0,
    config: {
      ...l.config.molasses,
      duration: 1e3
    }
  }), C = g ? r.default.Messages.VOICE_CHANNEL_EFFECTS_COOLDOWN.format({
    seconds: n
  }) : void 0, _ = p ? i.CenterControlButton : i.default;
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [g ? (0, a.jsx)(o, {
      percentComplete: S.percentComplete
    }) : null, (0, a.jsx)(_, {
      ...E,
      disabled: g,
      label: C,
      iconComponent: s.default,
      onClick: d,
      onKeyDown: c,
      onMouseEnter: f,
      onMouseLeave: h,
      isActive: m,
      grow: !1
    })]
  })
}