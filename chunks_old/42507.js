"use strict";
a.r(t), a.d(t, {
  useFrecencySettings: function() {
    return i
  }
});
var n = a("884691"),
  o = a("446674"),
  l = a("872173"),
  s = a("374363");

function i() {
  return n.useEffect(() => {
    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, o.useStateFromStores)([s.default], () => s.default.frecencyWithoutFetchingLatest)
}