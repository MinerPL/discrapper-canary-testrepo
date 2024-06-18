"use strict";
n(47120);
var i = n(470079),
  r = n(442837),
  s = n(607070),
  o = n(166625),
  a = n(271383),
  l = n(594174),
  u = n(451478),
  _ = n(768581),
  d = n(660097);
t.Z = e => {
  var t;
  let {
    user: n,
    guildId: c,
    size: E,
    animateOnHover: I = !1,
    showPending: T = !1,
    showTryItOut: h = !1,
    avatarDecorationOverride: S
  } = e, [f, N] = i.useState(!1), A = (0, r.e7)([s.Z], () => s.Z.useReducedMotion), m = (0, r.e7)([u.Z], () => u.Z.isFocused()), O = (0, r.e7)([a.ZP], () => null != c && null != n ? a.ZP.getMember(c, n.id) : null), [R, C] = (0, r.Wu)([l.default], () => {
    var e;
    return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)]
  }), p = null == O ? null == C ? void 0 : C.avatarDecoration : null === O.avatarDecoration ? null : null !== (t = O.avatarDecoration) && void 0 !== t ? t : null == C ? void 0 : C.avatarDecoration, {
    pendingAvatarDecoration: g
  } = (0, o.Z)({
    isTryItOut: h,
    guildId: c
  }), L = m && (f || !A && !I), v = T && void 0 !== g && void 0 !== R && R === (null == n ? void 0 : n.id), D = null != c && null === g, M = v ? D ? null == n ? void 0 : n.avatarDecoration : null != g ? g : p : null != p ? p : null == n ? void 0 : n.avatarDecoration, P = i.useMemo(() => (0, _.NZ)({
    avatarDecoration: void 0 !== S ? S : M,
    canAnimate: L,
    size: E
  }), [M, L, E, S]), y = i.useCallback(() => N(!0), []);
  return {
    avatarPlaceholderSrc: d,
    avatarDecorationSrc: P,
    isAvatarDecorationAnimating: L,
    eventHandlers: {
      onMouseEnter: y,
      onMouseLeave: i.useCallback(() => N(!1), [])
    }
  }
}