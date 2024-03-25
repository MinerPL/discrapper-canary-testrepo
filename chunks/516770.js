"use strict";
n.r(t), n.d(t, {
  PublishedBadge: function() {
    return S
  },
  DraftBadge: function() {
    return E
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  l = n("449918"),
  s = n("20606"),
  u = n("832132"),
  o = n("952479"),
  a = n("49111"),
  d = n("782340"),
  c = n("358329");

function f(e) {
  let {
    label: t,
    backgroundColor: n = s.default.BUTTON_SECONDARY_BACKGROUND,
    icon: l,
    iconColor: u
  } = e;
  return (0, i.jsxs)("div", {
    className: c.badge,
    style: {
      backgroundColor: n
    },
    children: [(0, i.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: c.badgeText,
      children: t
    }), (0, i.jsx)(l, {
      className: c.badgeIcon,
      color: null != u ? u : "currentColor",
      "aria-hidden": !0
    })]
  })
}

function S() {
  return (0, i.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
    backgroundColor: "#207B8D",
    icon: o.default
  })
}

function E() {
  return (0, i.jsx)(f, {
    label: d.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
    icon: u.default,
    iconColor: (0, l.getColor)(a.Color.PRIMARY_330)
  })
}