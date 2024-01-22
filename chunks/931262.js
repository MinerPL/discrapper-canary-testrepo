"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopRouting: function() {
    return u
  }
}), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
var l, s, r = a("884691"),
  n = a("90915"),
  i = a("54239"),
  o = a("393414"),
  c = a("49111");

function u() {
  let {
    search: e
  } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]), l = a.get("source"), s = null != l ? parseInt(l, 10) : null, u = r.useCallback(() => {
    if (0 === s) {
      (0, o.back)(), (0, i.pushLayer)(c.Layers.USER_SETTINGS);
      return
    }
    if ((0, o.currentRouteHasBackNavigation)()) {
      (0, o.back)();
      return
    }(0, o.transitionTo)(c.Routes.APP)
  }, [s]);
  return {
    onClose: u,
    source: s,
    ...t
  }
}(s = l || (l = {}))[s.SETTINGS = 0] = "SETTINGS", s[s.CHANGELOG = 1] = "CHANGELOG", s[s.DM_LIST = 2] = "DM_LIST"