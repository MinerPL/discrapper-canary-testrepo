"use strict";
n.r(t), n("47120");
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("680295"),
  i = n("158776"),
  r = n("735336"),
  o = n("184325"),
  u = n("131640"),
  d = n("228168"),
  c = n("68065");
t.default = e => {
  let {
    user: t,
    displayProfile: n,
    channel: f,
    animateAssets: h,
    forceShowPremiumBadge: m
  } = e, p = t.isNonUserBot(), [E, C] = (0, l.useStateFromStoresArray)([i.default], () => [p ? null : i.default.getStatus(t.id), i.default.isMobileOnline(t.id)]), g = null == n ? void 0 : n.profileEffectId;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(r.default, {
      user: t,
      displayProfile: n,
      profileType: d.UserProfileTypes.PANEL,
      showPremiumBadgeUpsell: !0,
      isHovering: m,
      animateOnHover: !h
    }), (0, a.jsx)(u.UserPopoutAvatar, {
      user: t,
      displayProfile: n,
      status: E,
      isMobile: C,
      channelId: f.id,
      disableUserProfileLink: !0,
      hasBanner: (null == n ? void 0 : n.banner) != null,
      profileType: d.UserProfileTypes.PANEL,
      animateOnHover: !h
    }), (0, a.jsx)("div", {
      className: c.badgelistGroup,
      children: (0, a.jsx)(o.default, {
        className: c.badgeList,
        user: t,
        size: o.BadgeSizes.SIZE_22
      })
    }), null != g && (0, a.jsx)(s.default, {
      profileEffectId: g,
      maxLoops: 0,
      resetOnHover: !0,
      isHovering: m,
      urlQueryString: "dm-view",
      noBorderRadius: !0
    })]
  })
}