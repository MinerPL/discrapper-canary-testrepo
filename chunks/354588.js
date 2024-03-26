"use strict";
r.r(t), r.d(t, {
  default: function() {
    return _
  }
});
var n = r("37983");
r("884691");
var i = r("414456"),
  s = r.n(i),
  u = r("446674"),
  l = r("206230"),
  a = r("359499"),
  o = r("672950"),
  c = r("594455"),
  d = r("511143"),
  E = r("627887"),
  _ = e => {
    let {
      showAnimations: t = !0,
      iconClassName: r,
      staticPercentage: i,
      innerCircleClassName: _,
      progressCircleStrokeSize: R,
      gemBackgroundCircleSize: C
    } = e, f = (0, a.useFreeBoostUserTenureReward)(), S = (0, u.useStateFromStores)([l.default], () => l.default.useReducedMotion), T = t && !S;
    if (null == f) return null;
    let {
      redeemableInDays: m = 0,
      tenureRewardSkuId: N
    } = f, h = d.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === N ? d.NUM_DAYS_REQUIRED_1_MONTH_VARIANT : d.NUM_DAYS_3_REQUIRED_MONTH_VARIANT, D = Math.min(h, Math.max(h - m, 0)), I = 100 * D / h, w = T ? 100 * Math.max(D - .25 * h, 0) / h : I;
    return (0, n.jsx)("div", {
      className: s(E.gemProgressCircle, r),
      children: (0, n.jsx)(c.default, {
        animationClassName: s(E.activeProgressCircle, {
          [E.activeProgressCircleAnimation]: T
        }),
        progressCircleStrokeSize: R,
        percentage: null != i ? i : I,
        initialPercentage: null != i ? i : w,
        children: (0, n.jsx)(o.default, {
          className: T ? E.nitroGemAnimation : void 0,
          backgroundColor: s(E.gemBackgroundFill, _),
          backgroundCircleSize: C
        })
      })
    })
  }