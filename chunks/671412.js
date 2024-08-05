n.d(t, {
  Z: function() {
return C;
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
  A = n(228168),
  N = n(981631),
  v = n(474936),
  O = n(905936);
let R = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function C(e) {
  let {
user: t,
displayProfile: n,
guildId: a,
channelId: p,
profileType: C,
animateOnHover: y,
onOpenProfile: D,
showReplyPopout: L = !1,
onReply: b
  } = e, {
theme: M
  } = (0, S.z)(), {
analyticsLocations: P
  } = (0, d.ZP)(c.Z.AVATAR), {
trackUserProfileAction: U
  } = (0, m.KZ)(), w = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, v.p9.TIER_2), x = i.useMemo(() => t.isNonUserBot() || (0, _.W)(t, p), [
t,
p
  ]), [G, k] = i.useState(!1), B = () => {
k(!0);
  }, F = () => {
k(!1);
  }, {
status: V,
isMobileOnline: H
  } = (0, o.cj)([
E.Z,
f.Z
  ], () => {
let e = null != E.Z.getAnyStreamForUser(t.id),
  n = f.Z.findActivity(t.id, t => {
    let {
      type: n
    } = t;
    return e ? n === N.IIU.PLAYING : n !== N.IIU.CUSTOM_STATUS;
  });
return {
  status: (0, u.Z)(n) ? N.Skl.STREAMING : f.Z.getStatus(t.id),
  isMobileOnline: f.Z.isMobileOnline(t.id)
};
  }), Z = C === A.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80, Y = s()(O.avatar, {
[O.biteSize]: C === A.y0.BITE_SIZE,
[O.fullSize]: C === A.y0.FULL_SIZE,
[O.panel]: C === A.y0.PANEL
  }), {
avatarDecorationSrc: j,
avatarSrc: W,
eventHandlers: K
  } = (0, I.Z)({
user: t,
guildId: a,
size: Z,
animateOnHover: y
  }), z = (0, r.jsx)(R, {
src: W,
avatarDecoration: j,
size: Z,
'aria-label': t.username,
imageClassName: null != D ? O.overlay : void 0,
status: x ? N.Skl.UNKNOWN : V,
statusBackdropColor: w && !x ? (0, l.getStatusBackdropColor)(M) : void 0,
isMobile: H,
statusTooltip: !0,
statusTooltipDelay: A.vB
  }), q = () => null == D ? (0, r.jsx)('div', {
...K,
children: z
  }) : (0, r.jsx)(l.Clickable, {
...K,
onClick: () => {
  U({
    action: 'PRESS_VIEW_PROFILE',
    analyticsLocations: P
  }), null == D || D();
},
className: O.clickable,
children: z
  });
  return (0, r.jsxs)('div', {
className: Y,
onFocus: B,
onBlur: F,
onMouseOver: B,
onMouseLeave: F,
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
        profileType: C,
        sourceType: A.N9.AVATAR,
        setPopoutRef: n,
        onReply: b
      });
    },
    animationPosition: 'top',
    position: 'bottom',
    align: 'center',
    shouldShow: L,
    children: () => q()
  }),
  (0, r.jsx)(T.Z, {
    user: t,
    sourceType: A.N9.AVATAR,
    isVisible: G,
    isExpandable: !1,
    onReply: b
  })
]
  });
}