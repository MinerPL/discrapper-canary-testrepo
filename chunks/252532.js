"use strict";
n.d(t, {
  w: function() {
    return _
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(607070),
  o = n(654904),
  a = n(271383),
  l = n(451478),
  u = n(166625);

function _(e) {
  let {
    user: t,
    guildId: n,
    size: _,
    showPending: d = !1,
    animateOnHover: c = !1,
    avatarOverride: E
  } = e, [I, T] = i.useState(!1), h = (0, r.e7)([s.Z], () => s.Z.useReducedMotion), S = (0, r.e7)([l.Z], () => l.Z.isFocused()) && (I || !h && !c), {
    pendingAvatar: f
  } = (0, u.Z)({}), N = void 0 !== E ? E : d ? f : void 0, A = (0, r.e7)([a.ZP], () => null != n && null != t ? a.ZP.getMember(n, t.id) : null), m = i.useMemo(() => null != t ? (0, o.SG)(N, A, t, {
    canAnimate: S,
    size: _
  }) : void 0, [N, A, t, S, _]), O = i.useCallback(() => T(!0), []);
  return {
    avatarSrc: m,
    isAvatarAnimating: S,
    eventHandlers: {
      onMouseEnter: O,
      onMouseLeave: i.useCallback(() => T(!1), [])
    }
  }
}