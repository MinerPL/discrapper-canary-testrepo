"use strict";
var i = n(470079),
  r = n(399606),
  s = n(311395),
  o = n(778825),
  a = n(150039),
  l = n(271383),
  u = n(25990),
  _ = n(594174),
  d = n(350327);
t.Z = e => {
  let {
    isTryItOut: t,
    analyticsLocations: n,
    guildId: c
  } = e, E = (0, r.e7)([_.default], () => _.default.getCurrentUser()), I = (0, r.e7)([l.ZP], () => null != c && null != E ? l.ZP.getMember(c, E.id) : null), T = null != I ? I.avatarDecoration : null == E ? void 0 : E.avatarDecoration, h = (0, s.Z)(n), {
    pendingAvatar: S,
    pendingAvatarDecoration: f,
    pendingErrors: N
  } = (0, r.cj)([u.Z, o.Z], () => ({
    pendingAvatar: t ? u.Z.getTryItOutAvatar() : null != c ? o.Z.getPendingAvatar() : u.Z.getPendingAvatar(),
    pendingAvatarDecoration: t ? u.Z.getTryItOutAvatarDecoration() : null != c ? o.Z.getPendingAvatarDecoration() : u.Z.getPendingAvatarDecoration(),
    pendingErrors: null != c ? o.Z.getErrors().avatarDecoration : u.Z.getErrors().avatarDecoration
  })), A = (0, i.useCallback)(e => (0, a.Jw)(e, null == E ? void 0 : E.avatar), [null == E ? void 0 : E.avatar]), m = (0, i.useCallback)(e => {
    (0, a.PO)(c, e), null != e && h(e)
  }, [h, c]);
  return {
    pendingAvatar: S,
    pendingAvatarDecoration: f,
    setPendingAvatar: t ? d.c_ : A,
    setPendingAvatarDecoration: t ? d.Xz : m,
    savedAvatarDecoration: T,
    pendingErrors: N
  }
}