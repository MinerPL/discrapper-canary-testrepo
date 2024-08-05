n.d(t, {
  J: function() {
return p;
  }
}), n(47120);
var r = n(470079),
  i = n(512722),
  a = n.n(i),
  s = n(399606),
  o = n(704215),
  l = n(232567),
  u = n(634894),
  c = n(211242),
  d = n(410154),
  _ = n(243778),
  E = n(594174),
  f = n(318661),
  h = n(436478);
let p = e => {
  let {
popoutUser: t,
source: n,
guildId: i
  } = e, p = 'useShouldShowUserPopoutCollectiblesUpsell';
  (0, u.j)({
location: p + 'auto on',
autoTrackExposure: !0
  }), (0, u.j)({
location: p + 'auto off',
autoTrackExposure: !1
  });
  let m = (0, d.ZP)(p),
{
  upsellSource: I
} = (0, h.k)(),
T = (0, s.e7)([E.default], () => E.default.getCurrentUser());
  a()(null != T, 'currentUser should not be null');
  let g = (0, c.Q)(),
S = (0, f.ZP)(T.id, i),
A = (0, f.ZP)(t.id, i);
  r.useEffect(() => {
null == S && (0, l.In)(T.id);
  }, [
S,
T
  ]);
  let N = m !== d.C5.DEFAULT && (null == T ? void 0 : T.id) !== t.id && !g && !(null != I && I !== n),
v = N && (null == T ? void 0 : T.avatarDecoration) == null && (null == t ? void 0 : t.avatarDecoration) != null,
O = N && null != S && null == S.profileEffectId && (null == A ? void 0 : A.profileEffectId) != null,
[R, C] = (0, _.U)((v, []), void 0, !0);
  return {
shouldShow: R === o.z.SHOP_FOR_ALL_USER_POPOUT_UPSELL,
canShowAvatarDecorationUpsell: v,
canShowProfileEffectUpsell: O,
onDismiss: C
  };
};