"use strict";
n.r(t), n.d(t, {
  ReferralProgramCoachtipLinkButton: function() {
    return _
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("780384"),
  o = n("481060"),
  u = n("410030"),
  d = n("206180"),
  c = n("714961"),
  f = n("25538"),
  E = n("689938"),
  h = n("515838");
let _ = e => {
  let {
    children: t
  } = e, n = (0, u.default)(), s = (0, r.isThemeLight)(n) ? f.default : c.default, l = (0, a.jsxs)("div", {
    className: h.coachTipContainer,
    children: [(0, a.jsx)("div", {
      className: h.iconContainer,
      children: (0, a.jsx)(s, {
        width: 130,
        height: 130,
        className: h.icon
      })
    }), (0, a.jsxs)("div", {
      className: h.coachtipContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: E.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
      }), (0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: E.default.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({
          numReferrals: 3
        })
      })]
    })]
  });
  return (0, a.jsx)(o.Tooltip, {
    text: l,
    position: "right",
    "aria-label": E.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    tooltipClassName: h.marketingBadgeTooltip,
    allowOverflow: !0,
    children: e => (0, a.jsx)("div", {
      ...e,
      children: t
    })
  })
};
t.default = e => {
  let {
    isSelected: t,
    onSelect: n
  } = e;
  return s.useEffect(() => {
    t && n()
  }, [t, n]), (0, a.jsxs)("div", {
    className: h.badgeContainer,
    children: [(0, a.jsx)("div", {
      className: h.newBadge,
      children: E.default.Messages.NEW
    }), (0, a.jsx)("span", {
      className: i()(h.star, h.starLeft),
      children: (0, a.jsx)(d.default, {
        width: 8,
        height: 8
      })
    }), (0, a.jsx)("span", {
      className: i()(h.star, h.starRight),
      children: (0, a.jsx)(d.default, {
        width: 13,
        height: 13
      })
    })]
  })
}