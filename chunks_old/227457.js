"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  i = s.n(l),
  n = s("77078"),
  r = s("685665"),
  u = s("401642"),
  o = s("315102"),
  d = s("49111"),
  c = s("782340"),
  E = s("870690");

function I(e) {
  let {
    user: t,
    guildId: s,
    className: l
  } = e, {
    discriminator: I,
    username: f
  } = t, T = o.default.getUserAvatarURL(t), {
    analyticsLocations: R
  } = (0, r.default)();
  return (0, a.jsxs)("div", {
    className: i(E.container, l),
    children: [(0, a.jsx)(n.Avatar, {
      src: T,
      size: n.AvatarSizes.SIZE_80,
      "aria-label": f,
      className: E.avatar
    }), (0, a.jsxs)("div", {
      className: E.username,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        children: f
      }), (0, a.jsxs)(n.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: ["#", I]
      })]
    }), (0, a.jsx)(n.Anchor, {
      onClick: () => {
        (0, u.openUserProfileModal)({
          userId: t.id,
          guildId: s,
          sourceAnalyticsLocations: R,
          analyticsLocation: {
            section: d.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: d.AnalyticsObjects.JOIN_REQUEST
          }
        })
      },
      children: c.default.Messages.VIEW_PROFILE
    })]
  })
}