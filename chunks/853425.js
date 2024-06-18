"use strict";
n(411104);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(386506),
  a = n(304761),
  l = n(865427),
  u = n(478543),
  _ = n(366953);
async function d(e) {
  if (200 !== (await (0, o.f0)(e)).status) throw Error("Build override couldn't apply");
  window.location.reload(!0)
}
async function c(e) {
  if (200 !== (await (0, o.aD)(e)).status) throw Error("Build override couldn't apply");
  window.location.reload(!0)
}
async function E() {
  await (0, o.bF)(), window.location.reload(!0)
}
t.Z = r.memo(function(e) {
  let {
    url: t
  } = e, n = (0, s.cj)([a.C], () => a.C.getCurrentBuildOverride()), o = (0, s.e7)([a.C], () => a.C.getBuildOverride(t)), {
    payload: I,
    validatedURL: T
  } = o, h = n.state === a.Z.Resolving || o.state === a.Z.Resolving, S = r.useCallback(() => {
    if ((0, l.mG)(o.url) && null != o.override) {
      var e;
      return c(null === (e = o.override) || void 0 === e ? void 0 : e.targetBuildOverride)
    }
    if (null == I) return Promise.reject(Error("Invalid override payload"));
    return (0, _.Z)(o.override, I), d(I)
  }, [I, o]);
  return null != T ? (0, i.jsx)(u.Z, {
    loading: h,
    linkMeta: o.override,
    currentOverrides: n.overrides,
    applyBuildOverride: S,
    clearBuildOverride: E,
    url: T
  }) : null
})