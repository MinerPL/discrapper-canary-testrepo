"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("37983");
n("884691");
var i = n("759843"),
  a = n("77078"),
  s = n("716241"),
  r = n("428958"),
  o = n("592407"),
  u = n("45395"),
  d = n("272091"),
  c = n("49111"),
  f = n("782340"),
  g = n("191455"),
  h = n("149361");

function I(e) {
  let {
    permanentInviteSelected: t,
    guildId: n,
    onClick: I
  } = e, m = (0, d.default)(null != n ? n : "", t);
  return ((0, r.default)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.GUILD_PERMANENT_LINKS_UPSELL
  }), m) ? (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)("div", {
      className: g.imageContainer,
      children: (0, l.jsx)("img", {
        src: h,
        className: g.image,
        alt: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_ALT_TEXT
      })
    }), (0, l.jsxs)("div", {
      className: g.textContainer,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        className: g.header,
        children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_HEADER
      }), (0, l.jsx)(a.Text, {
        variant: "text-sm/medium",
        className: g.description,
        children: f.default.Messages.GROWING_FRIEND_GUILD_PERMANENT_INVITE_LINKS_UPSELL_DESCRIPTION
      }), (0, l.jsx)(a.Button, {
        size: a.ButtonSizes.SMALL,
        color: a.Button.Colors.BRAND,
        className: g.button,
        onClick: () => {
          s.default.trackWithMetadata(c.AnalyticEvents.PERMANENT_INVITE_COMMUNITY_UPSELL_CLICKED, {}), o.default.init(null != n ? n : ""), u.default.open(), I()
        },
        children: f.default.Messages.GET_STARTED
      })]
    })]
  }) : null
}