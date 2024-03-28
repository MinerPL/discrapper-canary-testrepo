"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  i = s.n(l),
  n = s("481060"),
  u = s("906732"),
  r = s("171368"),
  o = s("768581"),
  d = s("981631"),
  c = s("689938"),
  E = s("485035");

function I(e) {
  let {
    user: t,
    guildId: s,
    className: l
  } = e, {
    discriminator: I,
    username: f
  } = t, T = o.default.getUserAvatarURL(t), {
    analyticsLocations: _
  } = (0, u.default)();
  return (0, a.jsxs)("div", {
    className: i()(E.container, l),
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
        (0, r.openUserProfileModal)({
          userId: t.id,
          guildId: s,
          sourceAnalyticsLocations: _,
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