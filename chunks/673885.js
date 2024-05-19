"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  i = s.n(l),
  n = s("481060"),
  r = s("906732"),
  u = s("171368"),
  o = s("768581"),
  d = s("51144"),
  c = s("981631"),
  E = s("313602");

function I(e) {
  let {
    user: t,
    guildId: s,
    className: l
  } = e, {
    username: I
  } = t, T = o.default.getUserAvatarURL(t), {
    analyticsLocations: f
  } = (0, r.default)();
  return (0, a.jsxs)("div", {
    className: i()(E.container, l),
    children: [(0, a.jsx)(n.Anchor, {
      onClick: () => {
        (0, u.openUserProfileModal)({
          userId: t.id,
          guildId: s,
          sourceAnalyticsLocations: f,
          analyticsLocation: {
            section: c.AnalyticsSections.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
            object: c.AnalyticsObjects.JOIN_REQUEST
          }
        })
      },
      children: (0, a.jsx)(n.Avatar, {
        src: T,
        size: n.AvatarSizes.SIZE_80,
        "aria-label": I,
        className: E.avatar
      })
    }), (0, a.jsx)("div", {
      className: E.username,
      children: (0, a.jsx)(n.Heading, {
        variant: "heading-lg/semibold",
        children: d.default.getFormattedName(t)
      })
    })]
  })
}