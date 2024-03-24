"use strict";
n.r(t), n.d(t, {
  useSafetyAlertsSettingOrDefault: function() {
    return s
  }
});
var i = n("446674"),
  a = n("374363"),
  r = n("908041");
let s = () => {
  let e = (0, i.useStateFromStores)([a.default], () => {
      var e, t, n;
      return null === (n = null === (t = a.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n
    }),
    t = (0, r.useUserIsTeen)("safety_warnings_setting");
  return t && e
}