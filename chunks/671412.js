n.d(t, {
  Z: function() {
return y;
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
  E = n(199902),
  f = n(158776),
  h = n(74538),
  p = n(998502),
  m = n(785717),
  I = n(204197),
  T = n(825801),
  g = n(215105),
  S = n(652853),
  A = n(429974),
  N = n(228168),
  v = n(981631),
  O = n(474936),
  R = n(905936);
let C = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function y(e) {
  let {
user: t,
displayProfile: n,
guildId: a,
channelId: p,
profileType: y,
animateOnHover: D,
onOpenProfile: L,
isReplySource: b,
onReply: M,
showReplyPopout: P = !1,
showGuildProfile: U = !0
  } = e, {
theme: w
  } = (0, S.z)(), {
analyticsLocations: x
  } = (0, d.ZP)(c.Z.AVATAR), {
trackUserProfileAction: G
  } = (0, m.KZ)(), k = y === N.y0.FULL_SIZE ? U ? A.TW : A.c1 : void 0, B = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, O.p9.TIER_2), F = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, p), [
t,
p
  ]), [V, H] = i.useState(!1), Z = () => {
H(!0);
  }, Y = () => {
H(!1);
  }, {
status: j,
isMobileOnline: W
  } = (0, o.cj)([
E.Z,
f.Z
  ], () => {
let e = null != E.Z.getAnyStreamForUser(t.id),
  n = f.Z.findActivity(t.id, t => {
    let {
      type: n
    } = t;
    return e ? n === v.IIU.PLAYING : n !== v.IIU.CUSTOM_STATUS;
  });
return {
  status: (0, u.Z)(n) ? v.Skl.STREAMING : f.Z.getStatus(t.id),
  isMobileOnline: f.Z.isMobileOnline(t.id)
};
  }), K = y === N.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80, z = s()(R.avatar, {
[R.hoisted]: b,
[R.biteSize]: y === N.y0.BITE_SIZE,
[R.fullSize]: y === N.y0.FULL_SIZE,
[R.panel]: y === N.y0.PANEL
  }), {
avatarDecorationSrc: q,
avatarSrc: Q,
eventHandlers: X
  } = (0, I.Z)({
user: t,
guildId: null != n ? n.guildId : a,
size: K,
animateOnHover: D
  }), $ = (0, r.jsx)(C, {
src: Q,
avatarDecoration: q,
size: K,
'aria-label': t.username,
imageClassName: null != L ? R.overlay : void 0,
status: F ? v.Skl.UNKNOWN : j,
statusBackdropColor: B && !F ? (0, l.getStatusBackdropColor)(w) : void 0,
isMobile: W,
statusTooltip: !0,
statusTooltipDelay: N.vB
  }), J = () => null == L ? (0, r.jsx)('div', {
...X,
children: $
  }) : (0, r.jsx)(l.Clickable, {
...X,
onClick: () => {
  G({
    action: 'PRESS_VIEW_PROFILE',
    analyticsLocations: x
  }), null == L || L();
},
className: R.clickable,
children: $
  });
  return (0, r.jsxs)('div', {
className: z,
onFocus: Z,
onBlur: Y,
onMouseOver: Z,
onMouseLeave: Y,
children: [
  (0, r.jsx)(l.Popout, {
    renderPopout: e => {
      let {
        setPopoutRef: n
      } = e;
      return (0, r.jsx)(g.Z, {
        user: t,
        guildId: a,
        channelId: p,
        profileType: y,
        sourceType: N.N9.AVATAR,
        modalKey: k,
        setPopoutRef: n,
        onReply: M
      });
    },
    animationPosition: 'top',
    position: 'bottom',
    align: 'center',
    shouldShow: P,
    children: () => J()
  }),
  (0, r.jsx)(T.Z, {
    user: t,
    sourceType: N.N9.AVATAR,
    isVisible: V,
    isExpandable: !1,
    onReply: M
  })
]
  });
}