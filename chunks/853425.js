n(411104);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(386506),
  s = n(304761),
  l = n(865427),
  u = n(478543),
  c = n(366953);
async function d(e) {
  if (200 !== (await (0, o.f0)(e)).status)
throw Error('Build override couldn\'t apply');
  window.location.reload(!0);
}
async function _(e) {
  if (200 !== (await (0, o.aD)(e)).status)
throw Error('Build override couldn\'t apply');
  window.location.reload(!0);
}
async function E() {
  await (0, o.bF)(), window.location.reload(!0);
}
t.Z = i.memo(function(e) {
  let {
url: t
  } = e, n = (0, a.cj)([s.C], () => s.C.getCurrentBuildOverride()), o = (0, a.e7)([s.C], () => s.C.getBuildOverride(t)), {
payload: f,
validatedURL: h
  } = o, p = n.state === s.Z.Resolving || o.state === s.Z.Resolving, m = i.useCallback(() => {
if ((0, l.mG)(o.url) && null != o.override) {
  var e;
  return _(null === (e = o.override) || void 0 === e ? void 0 : e.targetBuildOverride);
}
if (null == f)
  return Promise.reject(Error('Invalid override payload'));
return (0, c.Z)(o.override, f), d(f);
  }, [
f,
o
  ]);
  return null != h ? (0, r.jsx)(u.Z, {
loading: p,
linkMeta: o.override,
currentOverrides: n.overrides,
applyBuildOverride: m,
clearBuildOverride: E,
url: h
  }) : null;
});