"use strict";
n.r(t), n.d(t, {
  useFetchDeveloperActivityShelfItems: function() {
    return c
  }
});
var s = n("884691"),
  i = n("446674"),
  a = n("845579"),
  l = n("84460"),
  u = n("550766"),
  r = n("126939");

function c() {
  let e = (0, r.useIsActivitiesEnabledForCurrentPlatform)(),
    t = a.DeveloperMode.getSetting(),
    n = (0, i.useStateFromStores)([l.default], () => l.default.getFetchState(), []);
  return s.useEffect(() => {
    e && t && null == n && (0, u.fetchDeveloperApplications)()
  }, [e, n, t]), null
}