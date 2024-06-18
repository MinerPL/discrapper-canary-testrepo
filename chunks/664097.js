"use strict";
n.d(t, {
  o: function() {
    return a
  }
});
var i = n(470079),
  r = n(442837),
  s = n(115130),
  o = n(701488);
let a = () => {
  let {
    isEnabled: e,
    lastUsedObject: t
  } = (0, r.cj)([s.Z], () => ({
    isEnabled: s.Z.getIsEnabled(),
    lastUsedObject: s.Z.getLastUsedObject()
  }), []), n = (0, r.Wu)([s.Z], () => s.Z.getDeveloperShelfItems(), []);
  return i.useMemo(() => e ? n.map(e => ({
    application: e,
    activity: {
      ...o.wT,
      ...e.embeddedActivityConfig,
      application_id: e.id
    }
  })).sort((e, n) => {
    let i = t[e.application.id],
      r = t[n.application.id];
    return null == i ? 1 : null == r ? -1 : r - i
  }) : [], [n, e, t])
}