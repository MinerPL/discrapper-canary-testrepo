"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("249849"),
  a = n("907561"),
  s = n("689938"),
  o = n("114266");
let l = ["#0089d9"],
  u = ["#ff9e32", "#b4eefc", "#ffffff", "#804f19"],
  d = [.2],
  _ = [{
    base: 8,
    tint: 1
  }],
  c = [.45, .7, 1, .3],
  E = [{
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 10,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }];

function I(e) {
  let {
    width: t,
    height: n,
    primaryTintColor: I,
    secondaryTintColor: T,
    ...f
  } = e, {
    primaryColorsTransformed: S,
    secondaryColorsTransformed: h
  } = (0, r.getTransformedBadgeColors)({
    primaryBaseColors: l,
    primaryTintColor: I,
    primaryTintLuminances: d,
    primaryLuminanceWeights: _,
    secondaryBaseColors: u,
    secondaryTintColor: T,
    secondaryTintLuminances: c,
    secondaryLuminanceWeights: E
  }), {
    styleContent: A,
    containerId: m
  } = (0, a.useClanBannerStyleInjection)(S, h);
  return (0, i.jsxs)("svg", {
    ...f,
    "aria-label": s.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: n,
    viewBox: "0 0 ".concat(a.CLAN_BANNER_WIDTH, " ").concat(a.CLAN_BANNER_HEIGHT),
    children: [(0, i.jsx)("defs", {
      children: (0, i.jsx)("style", {
        children: A
      })
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#wrapper-layer"),
      id: m
    })]
  })
}