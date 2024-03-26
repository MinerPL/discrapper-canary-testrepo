"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("446674"),
  l = s("206230"),
  o = s("359499"),
  u = s("672950"),
  d = s("594455"),
  c = s("511143"),
  _ = s("627887"),
  E = e => {
    let {
      showAnimations: t = !0,
      iconClassName: s,
      staticPercentage: r,
      innerCircleClassName: E,
      progressCircleStrokeSize: T,
      gemBackgroundCircleSize: I
    } = e, f = (0, o.useFreeBoostUserTenureReward)(), R = (0, n.useStateFromStores)([l.default], () => l.default.useReducedMotion), S = t && !R;
    if (null == f) return null;
    let {
      redeemableInDays: m = 0,
      tenureRewardSkuId: N
    } = f, A = c.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === N ? c.NUM_DAYS_REQUIRED_1_MONTH_VARIANT : c.NUM_DAYS_3_REQUIRED_MONTH_VARIANT, p = Math.min(A, Math.max(A - m, 0)), C = 100 * p / A, g = S ? 100 * Math.max(p - .25 * A, 0) / A : C;
    return (0, a.jsx)("div", {
      className: i(_.gemProgressCircle, s),
      children: (0, a.jsx)(d.default, {
        animationClassName: i(_.activeProgressCircle, {
          [_.activeProgressCircleAnimation]: S
        }),
        progressCircleStrokeSize: T,
        percentage: null != r ? r : C,
        initialPercentage: null != r ? r : g,
        children: (0, a.jsx)(u.default, {
          className: S ? _.nitroGemAnimation : void 0,
          backgroundColor: i(_.gemBackgroundFill, E),
          backgroundCircleSize: I
        })
      })
    })
  }