"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("442837"),
  l = s("607070"),
  o = s("314684"),
  u = s("967538"),
  d = s("914677"),
  c = s("735825"),
  _ = s("527752");
t.default = e => {
  let {
    showAnimations: t = !0,
    iconClassName: s,
    staticPercentage: i,
    innerCircleClassName: E,
    progressCircleStrokeSize: T,
    gemBackgroundCircleSize: I
  } = e, R = (0, o.useFreeBoostUserTenureReward)(), S = (0, n.useStateFromStores)([l.default], () => l.default.useReducedMotion), f = t && !S;
  if (null == R) return null;
  let {
    redeemableInDays: m = 0,
    tenureRewardSkuId: N
  } = R, A = c.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === N ? c.NUM_DAYS_REQUIRED_1_MONTH_VARIANT : c.NUM_DAYS_3_REQUIRED_MONTH_VARIANT, p = Math.min(A, Math.max(A - m, 0)), C = 100 * p / A, g = f ? 100 * Math.max(p - .25 * A, 0) / A : C;
  return (0, a.jsx)("div", {
    className: r()(_.gemProgressCircle, s),
    children: (0, a.jsx)(d.default, {
      animationClassName: r()(_.activeProgressCircle, {
        [_.activeProgressCircleAnimation]: f
      }),
      progressCircleStrokeSize: T,
      percentage: null != i ? i : C,
      initialPercentage: null != i ? i : g,
      children: (0, a.jsx)(u.default, {
        className: f ? _.nitroGemAnimation : void 0,
        backgroundColor: r()(_.gemBackgroundFill, E),
        backgroundCircleSize: I
      })
    })
  })
}