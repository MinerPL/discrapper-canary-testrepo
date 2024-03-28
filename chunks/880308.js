"use strict";
n.r(t), n.d(t, {
  useFetchDeveloperActivityShelfItems: function() {
    return c
  }
});
var s = n("470079"),
  i = n("442837"),
  a = n("695346"),
  l = n("115130"),
  u = n("566620"),
  r = n("782769");

function c() {
  let e = (0, r.useIsActivitiesEnabledForCurrentPlatform)(),
    t = a.DeveloperMode.getSetting(),
    n = (0, i.useStateFromStores)([l.default], () => l.default.getFetchState(), []);
  return s.useEffect(() => {
    e && t && null == n && (0, u.fetchDeveloperApplications)()
  }, [e, n, t]), null
}