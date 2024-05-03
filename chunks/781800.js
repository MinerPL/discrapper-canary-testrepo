"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("465270"),
  i = s("481060"),
  n = s("976644"),
  l = s("626135"),
  o = s("391110"),
  u = s("981631"),
  d = s("689938"),
  c = s("3230");
t.default = e => {
  let {
    setIsAllPerksVisible: t,
    previousComponent: s
  } = e;
  return (0, a.jsx)(n.default, {
    color: i.ButtonColors.CUSTOM,
    onlyShineOnHover: !0,
    shineSize: n.ShineSizes.SMALL,
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