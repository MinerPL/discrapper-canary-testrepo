"use strict";
n.d(t, {
  J: function() {
    return h
  }
}), n(47120);
var i = n(470079),
  r = n(512722),
  s = n.n(r),
  o = n(399606),
  a = n(704215),
  l = n(232567),
  u = n(634894),
  _ = n(211242),
  d = n(410154),
  c = n(243778),
  E = n(594174),
  I = n(318661),
  T = n(436478);
let h = e => {
  let {
    popoutUser: t,
    source: n,
    guildId: r
  } = e, h = "useShouldShowUserPopoutCollectiblesUpsell";
  (0, u.j)({
    location: h + "auto on",
    autoTrackExposure: !0
  }), (0, u.j)({
    location: h + "auto off",
    autoTrackExposure: !1
  });
  let S = (0, d.ZP)(h),
    {
      upsellSource: f
    } = (0, T.k)(),
    N = (0, o.e7)([E.default], () => E.default.getCurrentUser());
  s()(null != N, "currentUser should not be null");
  let A = (0, _.Q)(),
    m = (0, I.ZP)(N.id, r),
    O = (0, I.ZP)(t.id, r);
  i.useEffect(() => {
    null == m && (0, l.In)(N.id)
  }, [m, N]);
  let R = S !== d.C5.DEFAULT && (null == N ? void 0 : N.id) !== t.id && !A && !(null != f && f !== n),
    C = R && (null == N ? void 0 : N.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
    p = R && null != m && null == m.profileEffectId && (null == O ? void 0 : O.profileEffectId) != null,
    [g, L] = (0, c.U)((C, []), void 0, !0);
  return {
    shouldShow: g === a.z.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
    canShowAvatarDecorationUpsell: C,
    canShowProfileEffectUpsell: p,
    onDismiss: L
  }
}