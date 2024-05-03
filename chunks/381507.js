"use strict";
s.r(t);
var n = s("735250");
s("470079");
var i = s("780384"),
  r = s("481060"),
  l = s("410030"),
  a = s("204197"),
  o = s("51144"),
  C = s("105759"),
  u = s("898969"),
  d = s("703614"),
  c = s("182294"),
  p = s("689938"),
  f = s("363336");
t.default = () => {
  let e = (0, C.default)(),
    {
      avatarSrc: t,
      eventHandlers: s
    } = (0, a.default)({
      user: e,
      size: c.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }),
    x = (0, l.useTheme)(),
    _ = (0, i.isThemeLight)(x),
    m = o.default.getName(e),
    L = _ ? u.default : d.default;
  return null == e ? null : (0, n.jsxs)("div", {
    className: f.attributionBannerContainer,
    children: [(0, n.jsx)("div", {
      className: f.avatarContainer,
      children: (0, n.jsx)(r.Avatar, {
        src: t,
        "aria-label": e.username,
        size: c.AvatarSizes.SIZE_32,
        ...s
      })
    }), (0, n.jsx)(r.Text, {
      variant: "text-xs/bold",
      className: f.bannerHeader,
      children: p.default.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({
        userName: m
      })
    }), (0, n.jsx)(L, {
      className: f.bannerIcon
    })]
  })
}