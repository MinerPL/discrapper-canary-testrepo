"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("481060"),
  l = s("626135"),
  o = s("391110"),
  u = s("474936"),
  d = s("981631"),
  c = s("689938"),
  _ = s("393845");
let E = (e, t, s) => {
  l.default.track(d.AnalyticEvents.NITRO_HOME_NAVIGATION, {
    current_component: "".concat(o.NitroLandingPages.MARKETING, "-").concat(t),
    next_component: "".concat(o.NitroLandingPages.MARKETING, "-").concat(e),
    interaction_component: "Nitro Toggle"
  }), s(e)
};
t.default = e => {
  let {
    selectedPremiumType: t,
    setSelectedPremiumType: s
  } = e, i = [{
    type: u.PremiumTypes.TIER_2,
    label: c.default.Messages.PREMIUM
  }, {
    type: u.PremiumTypes.TIER_0,
    label: c.default.Messages.BASIC
  }];
  return (0, a.jsxs)("div", {
    className: r()(_.toggleSwitch, {
      [_.toggleSwitchStandard]: t === u.PremiumTypes.TIER_2,
      [_.toggleSwitchBasic]: t === u.PremiumTypes.TIER_0
    }),
    children: [i.map(e => (0, a.jsx)(n.Clickable, {
      className: _.toggleOption,
      onClick: () => E(e.type, t, s),
      children: (0, a.jsx)(n.Heading, {
        className: _.__invalid_sectionHeader,
        variant: "heading-md/semibold",
        children: e.label
      })
    }, e.type)), (0, a.jsx)("div", {
      className: r()(_.slider, {
        [_.sliderStandard]: t === u.PremiumTypes.TIER_2,
        [_.sliderBasic]: t === u.PremiumTypes.TIER_0
      })
    })]
  })
}