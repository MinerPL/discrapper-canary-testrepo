"use strict";
i.r(t), i.d(t, {
  useDeveloperActivityShelfItems: function() {
    return u
  }
});
var l = i("470079"),
  n = i("442837"),
  a = i("115130"),
  d = i("701488");
let u = () => {
  let {
    isEnabled: e,
    lastUsedObject: t
  } = (0, n.useStateFromStoresObject)([a.default], () => ({
    isEnabled: a.default.getIsEnabled(),
    lastUsedObject: a.default.getLastUsedObject()
  }), []), i = (0, n.useStateFromStoresArray)([a.default], () => a.default.getDeveloperShelfItems(), []);
  return l.useMemo(() => e ? i.map(e => ({
    application: e,
    activity: {
      ...d.DEFAULT_EMBEDDED_ACTIVITY_CONFIG,
      ...e.embeddedActivityConfig,
      application_id: e.id
    }
  })).sort((e, i) => {
    let l = t[e.application.id],
      n = t[i.application.id];
    return null == l ? 1 : null == n ? -1 : n - l
  }) : [], [i, e, t])
}