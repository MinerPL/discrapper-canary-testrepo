"use strict";
var i = n(735250);
n(470079);
var r = n(920906),
  s = n(399606),
  o = n(481060),
  a = n(607070),
  l = n(346656),
  u = n(678558),
  _ = n(981631),
  d = n(530978);
t.Z = function(e) {
  let {
    closeLayer: t,
    guild: n,
    isVisible: c
  } = e, E = (0, s.e7)([a.Z], () => a.Z.useReducedMotion), I = (0, r.useSpring)({
    transform: c ? "translateY(-100%)" : "translateY(0%)",
    opacity: c ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: E
  });
  return (0, i.jsx)(r.animated.div, {
    className: d.wrapper,
    style: I,
    children: (0, i.jsxs)("div", {
      className: d.innerWrapper,
      children: [(0, i.jsxs)("div", {
        className: d.guildInfo,
        children: [(0, i.jsx)(l.Z, {
          className: d.guildIcon,
          guild: n,
          size: l.Z.Sizes.LARGER
        }), (0, i.jsx)(o.Heading, {
          className: d.guildName,
          variant: "text-lg/bold",
          children: n.name
        })]
      }), (0, i.jsx)(u.Z, {
        className: d.ctaButton,
        guild: n,
        analyticsLocation: {
          page: _.ZY5.PREMIUM_GUILD_USER_MODAL,
          section: _.jXE.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
          object: _.qAy.BUTTON_CTA,
          objectType: _.Qqv.BUY
        },
        closeLayer: t,
        pauseAnimation: !c,
        size: o.Button.Sizes.LARGE
      })]
    })
  })
}