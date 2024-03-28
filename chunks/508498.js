"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopRouting: function() {
    return c
  }
}), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
var s, l, r = a("470079"),
  n = a("613828"),
  o = a("37234"),
  i = a("703656"),
  u = a("981631");

function c() {
  let {
    search: e
  } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]).get("source"), s = null != a ? parseInt(a, 10) : null;
  return {
    onClose: r.useCallback(() => {
      if (0 === s) {
        (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
        return
      }
      if ((0, i.currentRouteHasBackNavigation)()) {
        (0, i.back)();
        return
      }(0, i.transitionTo)(u.Routes.APP)
    }, [s]),
    source: s,
    ...t
  }
}(l = s || (s = {}))[l.SETTINGS = 0] = "SETTINGS", l[l.CHANGELOG = 1] = "CHANGELOG", l[l.DM_LIST = 2] = "DM_LIST"