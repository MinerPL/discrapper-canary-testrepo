"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(28531),
  l = n(819758),
  u = n(898140),
  _ = n(149203),
  d = n(689938),
  c = n(181710);
let E = e => {
  let {
    emojiSubCategory: t
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(c.badgeLabel, t === _.t0.TOP_GUILD_EMOJI ? c.topGuildEmojiBadge : c.newlyAddedBadge),
    children: [t === _.t0.TOP_GUILD_EMOJI ? (0, i.jsx)(a.Z, {
      foreground: c.newlyAddedBadgeIcon
    }) : (0, i.jsx)(l.Z, {
      foreground: c.newlyAddedBadgeIcon
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: t === _.t0.TOP_GUILD_EMOJI ? d.Z.Messages.TOP_GUILD_EMOJI_BADGE : d.Z.Messages.NEWLY_ADDED_GUILD_EMOJI_BADGE
    })]
  })
};
t.Z = e => {
  let {
    className: t,
    graphicPrimary: n,
    graphicSecondary: r,
    titlePrimary: a,
    titleSecondary: l,
    isFavorite: I = !1,
    emojiSubCategory: T = _.t0.NONE
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(c.inspector, t),
    children: [(0, i.jsx)("div", {
      className: c.graphicPrimary,
      "aria-hidden": !0,
      children: n
    }), (0, i.jsxs)("div", {
      className: c.textWrapper,
      children: [(0, i.jsxs)(o.Text, {
        className: c.titlePrimary,
        variant: "text-md/semibold",
        children: [I ? (0, i.jsx)(u.Z, {
          "aria-label": I ? d.Z.Messages.EMOJI_IS_FAVORITE_ARIA_LABEL.format({
            names: a
          }) : void 0,
          width: 15,
          height: 15,
          className: c.favorite
        }) : null, a]
      }), null != l && (0, i.jsx)(o.Text, {
        className: c.titleSecondary,
        variant: "text-xs/normal",
        children: l
      })]
    }), T === _.t0.NONE ? null != r && (0, i.jsx)("div", {
      className: c.graphicSecondary,
      "aria-hidden": !0,
      children: r
    }) : (0, i.jsx)(E, {
      emojiSubCategory: T
    })]
  })
}