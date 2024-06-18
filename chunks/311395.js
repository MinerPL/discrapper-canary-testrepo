"use strict";
n(627341);
var i = n(470079),
  r = n(278074),
  s = n(979554),
  o = n(399606),
  a = n(626135),
  l = n(597688),
  u = n(884697),
  _ = n(981631),
  d = n(474936);
t.Z = e => {
  let t = (0, o.e7)([l.Z], () => l.Z.products);
  return (0, i.useCallback)(n => {
    let {
      type: i,
      skuId: o
    } = n, l = t.get(o);
    a.default.track(_.rMx.PREMIUM_FEATURE_TRY_OUT, {
      feature_name: (0, r.EQ)(i).with(s.Z.AVATAR_DECORATION, () => d.QP.AVATAR_DECORATION).with(s.Z.PROFILE_EFFECT, () => d.QP.PROFILE_EFFECT).otherwise(() => void 0),
      feature_tier: (0, u.G1)(l) ? d.h1.FREE : d.h1.PREMIUM_STANDARD,
      feature_selection: null == l ? void 0 : l.name,
      location_stack: e
    })
  }, [t, e])
}