n(627341);
var r = n(470079),
  i = n(278074),
  a = n(979554),
  s = n(399606),
  o = n(626135),
  l = n(597688),
  u = n(884697),
  c = n(981631),
  d = n(474936);
t.Z = e => {
  let t = (0, s.e7)([l.Z], () => l.Z.products);
  return (0, r.useCallback)(n => {
let {
  type: r,
  skuId: s
} = n, l = t.get(s);
o.default.track(c.rMx.PREMIUM_FEATURE_TRY_OUT, {
  feature_name: (0, i.EQ)(r).with(a.Z.AVATAR_DECORATION, () => d.QP.AVATAR_DECORATION).with(a.Z.PROFILE_EFFECT, () => d.QP.PROFILE_EFFECT).otherwise(() => void 0),
  feature_tier: (0, u.G1)(l) ? d.h1.FREE : d.h1.PREMIUM_STANDARD,
  feature_selection: null == l ? void 0 : l.name,
  location_stack: e
});
  }, [
t,
e
  ]);
};