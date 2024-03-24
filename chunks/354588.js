"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("359499"),
  l = s("672950"),
  o = s("594455"),
  u = s("511143"),
  d = s("627887"),
  c = e => {
    let {
      showAnimations: t = !0,
      iconClassName: s,
      staticPercentage: r,
      innerCircleClassName: c,
      progressCircleStrokeSize: _,
      gemBackgroundCircleSize: E
    } = e, T = (0, i.useFreeBoostUserTenureReward)();
    if (null == T) return null;
    let {
      redeemableInDays: I = 0,
      tenureRewardSkuId: f
    } = T, R = u.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === f ? u.NUM_DAYS_REQUIRED_1_MONTH_VARIANT : u.NUM_DAYS_3_REQUIRED_MONTH_VARIANT, S = Math.min(R, Math.max(R - I, 0));
    return (0, a.jsx)("div", {
      className: n(d.gemProgressCircle, s),
      children: (0, a.jsx)(o.default, {
        animationClassName: n(d.activeProgressCircle, {
          [d.activeProgressCircleAnimation]: t
        }),
        progressCircleStrokeSize: _,
        percentage: null != r ? r : 100 * S / R,
        initialPercentage: null != r ? r : 100 * Math.max(S - .25 * R, 0) / R,
        children: (0, a.jsx)(l.default, {
          className: t ? d.nitroGemAnimation : void 0,
          backgroundColor: n(d.gemBackgroundFill, c),
          backgroundCircleSize: E
        })
      })
    })
  }