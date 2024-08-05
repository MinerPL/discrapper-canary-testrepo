n.d(t, {
  Z: function() {
return O;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(420660),
  c = n(100527),
  d = n(906732),
  _ = n(233440),
  E = n(158776),
  f = n(74538),
  h = n(998502),
  p = n(785717),
  m = n(204197),
  I = n(929498),
  T = n(652853),
  g = n(228168),
  S = n(981631),
  A = n(474936),
  N = n(905936);
let v = h.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function O(e) {
  let {
user: t,
displayProfile: n,
guildId: a,
channelId: h,
profileType: O,
animateOnHover: R,
onOpenProfile: C
  } = e, {
theme: y
  } = (0, T.z)(), {
analyticsLocations: D
  } = (0, d.ZP)(c.Z.AVATAR), {
trackUserProfileAction: L
  } = (0, p.KZ)(), b = f.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, A.p9.TIER_2), M = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, h), [
t,
h
  ]), {
live: P,
stream: U
  } = (0, I.Z)(t.id), [w] = P, {
status: x,
isMobileOnline: G
  } = (0, o.cj)([E.Z], () => ({
status: null != U || (0, u.Z)(w) ? S.Skl.STREAMING : E.Z.getStatus(t.id),
isMobileOnline: E.Z.isMobileOnline(t.id)
  })), k = O === g.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80, B = s()(N.avatar, {
[N.biteSize]: O === g.y0.BITE_SIZE,
[N.fullSize]: O === g.y0.FULL_SIZE,
[N.panel]: O === g.y0.PANEL
  }), {
avatarDecorationSrc: F,
avatarSrc: V,
eventHandlers: H
  } = (0, m.Z)({
user: t,
guildId: a,
size: k,
animateOnHover: R
  }), Z = (0, r.jsx)(v, {
src: V,
avatarDecoration: F,
size: k,
'aria-label': t.username,
imageClassName: null != C ? N.overlay : void 0,
status: M ? S.Skl.UNKNOWN : x,
statusBackdropColor: b && !M ? (0, l.getStatusBackdropColor)(y) : void 0,
isMobile: G,
statusTooltip: !0,
statusTooltipDelay: g.vB
  });
  return null == C ? (0, r.jsx)('div', {
...H,
className: B,
children: Z
  }) : (0, r.jsx)(l.Clickable, {
...H,
className: s()(B, N.clickable),
onClick: () => {
  L({
    action: 'PRESS_VIEW_PROFILE',
    analyticsLocations: D
  }), null == C || C();
},
children: Z
  });
}