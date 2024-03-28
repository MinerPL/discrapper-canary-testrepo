"use strict";
n.r(t), n.d(t, {
  DraftBadge: function() {
    return g
  },
  PublishedBadge: function() {
    return S
  }
});
var r = n("735250");
n("470079");
var i = n("481060"),
  l = n("44315"),
  s = n("377171"),
  o = n("586791"),
  u = n("127384"),
  a = n("981631"),
  c = n("689938"),
  d = n("326219");

function f(e) {
  let {
    label: t,
    backgroundColor: n = s.default.BUTTON_SECONDARY_BACKGROUND,
    icon: l,
    iconColor: o
  } = e;
  return (0, r.jsxs)("div", {
    className: d.badge,
    style: {
      backgroundColor: n
    },
    children: [(0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      className: d.__invalid_badgeText,
      children: t
    }), (0, r.jsx)(l, {
      className: d.badgeIcon,
      color: null != o ? o : "currentColor",
      "aria-hidden": !0
    })]
  })
}

function S() {
  return (0, r.jsx)(f, {
    label: c.default.Messages.GUILD_PRODUCT_STATUS_BADGE_PUBLISHED,
    backgroundColor: "#207B8D",
    icon: u.default
  })
}

function g() {
  return (0, r.jsx)(f, {
    label: c.default.Messages.GUILD_PRODUCT_STATUS_BADGE_DRAFT,
    icon: o.default,
    iconColor: (0, l.getColor)(a.Color.PRIMARY_330)
  })
}