"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopRouting: function() {
    return c
  }
}), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
var s, l, r = a("884691"),
  n = a("90915"),
  o = a("54239"),
  i = a("393414"),
  u = a("49111");

function c() {
  let {
    search: e
  } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]), s = a.get("source"), l = null != s ? parseInt(s, 10) : null, c = r.useCallback(() => {
    if (0 === l) {
      (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
      return
    }
    if ((0, i.currentRouteHasBackNavigation)()) {
      (0, i.back)();
      return
    }(0, i.transitionTo)(u.Routes.APP)
  }, [l]);
  return {
    onClose: c,
    source: l,
    ...t
  }
}(l = s || (s = {}))[l.SETTINGS = 0] = "SETTINGS", l[l.CHANGELOG = 1] = "CHANGELOG", l[l.DM_LIST = 2] = "DM_LIST"