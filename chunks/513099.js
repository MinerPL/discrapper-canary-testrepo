"use strict";
n.d(t, {
  Z: function() {
    return C
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(420660),
  l = n(100527),
  u = n(906732),
  _ = n(233440),
  d = n(199902),
  c = n(158776),
  E = n(74538),
  I = n(998502),
  T = n(785717),
  h = n(204197),
  S = n(652853),
  f = n(228168),
  N = n(981631),
  A = n(474936),
  m = n(579935);
let O = o.AvatarSizes.SIZE_80,
  R = I.ZP.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

function C(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: I,
    channelId: C,
    animateOnHover: p,
    onOpenProfile: g
  } = e, {
    theme: L
  } = (0, S.z)(), {
    analyticsLocations: v
  } = (0, u.ZP)(l.Z.AVATAR), {
    trackUserProfileAction: D
  } = (0, T.KZ)(), M = E.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, A.p9.TIER_2), P = r.useMemo(() => (0, _.W)(t, C), [t, C]), {
    status: y,
    isMobileOnline: U
  } = (0, s.cj)([d.Z, c.Z], () => {
    let e = null != d.Z.getAnyStreamForUser(t.id),
      n = c.Z.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === N.IIU.PLAYING : n !== N.IIU.CUSTOM_STATUS
      });
    return {
      status: (0, a.Z)(n) ? N.Skl.STREAMING : c.Z.getStatus(t.id),
      isMobileOnline: c.Z.isMobileOnline(t.id)
    }
  }), {
    avatarDecorationSrc: b,
    avatarSrc: G,
    eventHandlers: w
  } = (0, h.Z)({
    user: t,
    guildId: I,
    size: O,
    animateOnHover: p
  });
  return (0, i.jsx)(o.Clickable, {
    ...w,
    className: m.clickable,
    onClick: null == g ? void 0 : () => {
      D({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: v
      }), null == g || g()
    },
    children: (0, i.jsx)(R, {
      src: G,
      avatarDecoration: b,
      size: O,
      "aria-label": t.username,
      imageClassName: null != g ? m.overlay : void 0,
      status: P ? N.Skl.UNKNOWN : y,
      statusBackdropColor: M && !P ? (0, o.getStatusBackdropColor)(L) : void 0,
      isMobile: U,
      statusTooltip: !0,
      statusTooltipDelay: f.vB
    })
  })
}