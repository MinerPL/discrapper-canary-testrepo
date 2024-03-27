"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("65597"),
  s = n("599110"),
  l = n("544556"),
  i = n("822825"),
  r = n("922832"),
  o = n("49111"),
  u = () => {
    let e = (0, a.useStateFromStores)([i.default], () => i.default.getSelectedTab());
    return {
      selectedTab: e,
      handleTabChange: e => {
        l.default.selectTab(e), s.default.track(o.AnalyticEvents.FAMILY_CENTER_ACTION, {
          action: r.FamilyCenterAction.TabChange,
          tab: e
        })
      }
    }
  }