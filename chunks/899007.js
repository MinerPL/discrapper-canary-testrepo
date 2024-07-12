n.d(t, {
  Z: function() {
return O;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(442837),
  l = n(481060),
  u = n(420660),
  c = n(100527),
  d = n(906732),
  _ = n(233440),
  E = n(199902),
  f = n(158776),
  h = n(74538),
  p = n(998502),
  m = n(785717),
  I = n(204197),
  T = n(652853),
  g = n(228168),
  S = n(981631),
  A = n(474936),
  N = n(905936);
let v = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function O(e) {
  let {
user: t,
displayProfile: n,
guildId: a,
channelId: p,
profileType: O,
animateOnHover: R,
onOpenProfile: C
  } = e, {
theme: y
  } = (0, T.z)(), {
analyticsLocations: D
  } = (0, d.ZP)(c.Z.AVATAR), {
trackUserProfileAction: L
  } = (0, m.KZ)(), b = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, A.p9.TIER_2), M = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, p), [
t,
p
  ]), {
status: P,
isMobileOnline: U
  } = (0, s.cj)([
E.Z,
f.Z
  ], () => {
let e = null != E.Z.getAnyStreamForUser(t.id),
  n = f.Z.findActivity(t.id, t => {
    let {
      type: n
    } = t;
    return e ? n === S.IIU.PLAYING : n !== S.IIU.CUSTOM_STATUS;
  });
return {
  status: (0, u.Z)(n) ? S.Skl.STREAMING : f.Z.getStatus(t.id),
  isMobileOnline: f.Z.isMobileOnline(t.id)
};
  }), w = O === g.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80, x = o()(N.avatar, {
[N.biteSize]: O === g.y0.BITE_SIZE,
[N.fullSize]: O === g.y0.FULL_SIZE,
[N.panel]: O === g.y0.PANEL
  }), {
avatarDecorationSrc: G,
avatarSrc: k,
eventHandlers: B
  } = (0, I.Z)({
user: t,
guildId: a,
size: w,
animateOnHover: R
  }), F = (0, r.jsx)(v, {
src: k,
avatarDecoration: G,
size: w,
'aria-label': t.username,
imageClassName: null != C ? N.overlay : void 0,
status: M ? S.Skl.UNKNOWN : P,
statusBackdropColor: b && !M ? (0, l.getStatusBackdropColor)(y) : void 0,
isMobile: U,
statusTooltip: !0,
statusTooltipDelay: g.vB
  });
  return null == C ? (0, r.jsx)('div', {
...B,
className: x,
children: F
  }) : (0, r.jsx)(l.Clickable, {
...B,
className: o()(x, N.clickable),
onClick: () => {
  L({
    action: 'PRESS_VIEW_PROFILE',
    analyticsLocations: D
  }), null == C || C();
},
children: F
  });
}