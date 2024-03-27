"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("77078"),
  l = s("599110"),
  o = s("907648"),
  u = s("646718"),
  d = s("49111"),
  c = s("782340"),
  _ = s("497151");
let E = (e, t, s) => {
  l.default.track(d.AnalyticEvents.NITRO_HOME_NAVIGATION, {
    current_component: "".concat(o.NitroLandingPages.MARKETING, "-").concat(t),
    next_component: "".concat(o.NitroLandingPages.MARKETING, "-").concat(e),
    interaction_component: "Nitro Toggle"
  }), s(e)
};
var T = e => {
  let {
    selectedPremiumType: t,
    setSelectedPremiumType: s
  } = e, r = [{
    type: u.PremiumTypes.TIER_2,
    label: c.default.Messages.PREMIUM
  }, {
    type: u.PremiumTypes.TIER_0,
    label: c.default.Messages.BASIC
  }];
  return (0, a.jsxs)("div", {
    className: i(_.toggleSwitch, {
      [_.toggleSwitchStandard]: t === u.PremiumTypes.TIER_2,
      [_.toggleSwitchBasic]: t === u.PremiumTypes.TIER_0
    }),
    children: [r.map(e => (0, a.jsx)(n.Clickable, {
      className: _.toggleOption,
      onClick: () => E(e.type, t, s),
      children: (0, a.jsx)(n.Heading, {
        className: _.sectionHeader,
        variant: "heading-md/semibold",
        children: e.label
      })
    }, e.type)), (0, a.jsx)("div", {
      className: i(_.slider, {
        [_.sliderStandard]: t === u.PremiumTypes.TIER_2,
        [_.sliderBasic]: t === u.PremiumTypes.TIER_0
      })
    })]
  })
}