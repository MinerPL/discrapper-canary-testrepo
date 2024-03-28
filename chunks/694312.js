"use strict";
i.r(t), i.d(t, {
  useActivityShelfData: function() {
    return f
  }
}), i("47120");
var l = i("470079"),
  n = i("442837"),
  a = i("835473"),
  d = i("594174"),
  u = i("695103"),
  o = i("823379"),
  r = i("358085"),
  c = i("317381"),
  s = i("761122");

function f(e) {
  let t = (0, n.useStateFromStores)([d.default], d.default.getCurrentUser),
    i = (0, n.useStateFromStoresArray)([c.default], () => c.default.getShelfActivities(e)),
    f = (0, n.useStateFromStores)([u.default], () => u.default.testModeEmbeddedApplicationId),
    p = i.map(e => e.application_id),
    v = null != f ? [f, ...p] : p,
    m = (0, a.default)(v),
    A = l.useMemo(() => m.filter(o.isNotNullish), [m]),
    E = l.useMemo(() => null != f && A.length > 0 && A[0].id === f && null != A[0].embeddedActivityConfig ? [{
      activity: A[0].embeddedActivityConfig,
      application: A[0]
    }] : [], [A, f]),
    y = l.useMemo(() => i.map(e => {
      let t = A.find(t => t.id === e.application_id);
      return null == t ? null : {
        activity: e,
        application: t
      }
    }).filter(o.isNotNullish), [i, A]);
  return l.useMemo(() => [...E, ...y].filter(e => {
    var t;
    let {
      activity: i
    } = e;
    return (null !== (t = i.supported_platforms) && void 0 !== t ? t : []).includes((0, s.default)((0, r.getOS)()))
  }).filter(e => {
    let {
      activity: i
    } = e;
    return !i.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
  }), [null == t ? void 0 : t.nsfwAllowed, y, E])
}