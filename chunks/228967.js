"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var r = s("748802"),
  n = s("77078"),
  i = s("181114"),
  l = s("599110"),
  o = s("907648"),
  u = s("49111"),
  d = s("782340"),
  c = s("390553"),
  _ = e => {
    let {
      setIsAllPerksVisible: t,
      previousComponent: s
    } = e;
    return (0, a.jsx)(i.default, {
      color: n.ButtonColors.CUSTOM,
      onlyShineOnHover: !0,
      shineSize: i.ShineSizes.SMALL,
      className: c.seeAllPerksButton,
      onClick: () => {
        t(!0), l.default.track(u.AnalyticEvents.NITRO_HOME_NAVIGATION, {
          current_component: s,
          next_component: o.NitroLandingPages.SEE_ALL,
          interaction_component: "See All Button"
        })
      },
      children: (0, a.jsxs)("div", {
        className: c.seeAllPerksButtonContent,
        children: [d.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, a.jsx)(r.ChevronSmallRightIcon, {
          color: "currentColor"
        })]
      })
    })
  }