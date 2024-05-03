"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var r = s("481060"),
  i = s("204197"),
  n = s("182294"),
  l = s("689938"),
  o = s("808115"),
  u = s("144343");

function d(e) {
  var t;
  let {
    referrer: s
  } = e, {
    avatarSrc: d,
    eventHandlers: c
  } = (0, i.default)({
    user: s,
    size: n.AvatarSizes.SIZE_32,
    animateOnHover: !0
  });
  return (0, a.jsx)("div", {
    className: o.attributionBannerContainer,
    children: (0, a.jsxs)("div", {
      className: o.attributionBannerContent,
      children: [(0, a.jsx)("div", {
        className: o.iconContainer,
        children: (0, a.jsx)(r.Avatar, {
          className: o.icon,
          src: d,
          "aria-label": s.username,
          size: n.AvatarSizes.SIZE_32,
          ...c
        })
      }), (0, a.jsx)(r.Heading, {
        variant: "heading-lg/medium",
        className: o.textContainer,
        children: l.default.Messages.REFERRAL_PROGRAM_SUBSCRIBER_HOMER_BANNER.format({
          username: null != (t = s).globalName ? t.globalName : t.username
        })
      }), (0, a.jsx)("img", {
        src: u,
        alt: "",
        className: o.attributionIcon
      })]
    })
  })
}