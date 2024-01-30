"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var r = s("748802"),
  n = s("77078"),
  l = s("181114"),
  i = s("782340"),
  u = s("137537"),
  o = e => {
    let {
      setIsAllPerksVisible: t
    } = e;
    return (0, a.jsx)(l.default, {
      color: n.ButtonColors.CUSTOM,
      onlyShineOnHover: !0,
      shineSize: l.ShineSizes.SMALL,
      className: u.seeAllPerksButton,
      onClick: () => {
        t(!0)
      },
      children: (0, a.jsxs)("div", {
        className: u.seeAllPerksButtonContent,
        children: [i.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, (0, a.jsx)(r.ChevronSmallRightIcon, {
          color: "currentColor"
        })]
      })
    })
  }