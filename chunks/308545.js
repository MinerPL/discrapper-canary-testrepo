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
  o = n("444816");
let l = ["#2d456e", "#395788", "#486ead", "#4f7ac2", "#5989d9", "#729bdd", "#96b3e3", "#b5c9e9", "#e0e0e2"],
  u = ["#f7931e"],
  d = [.05, .09, .15, .2, .25, .33, .44, .57, .95],
  _ = [{
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 7,
    tint: 1
  }],
  c = [.4],
  E = [{
    base: 1,
    tint: 5
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