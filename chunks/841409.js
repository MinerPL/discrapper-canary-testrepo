"use strict";
n.r(t);
var a = n("399606"),
  s = n("626135"),
  l = n("280570"),
  i = n("914788"),
  r = n("292352"),
  o = n("981631");
t.default = () => {
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