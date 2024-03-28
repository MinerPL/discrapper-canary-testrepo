"use strict";
n.r(t), n.d(t, {
  useSafetyAlertsSettingOrDefault: function() {
    return i
  }
});
var a = n("442837"),
  l = n("581883"),
  s = n("981312");
let i = () => {
  let e = (0, a.useStateFromStores)([l.default], () => {
    var e, t, n;
    return null === (n = null === (t = l.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n
  });
  return (0, s.useUserIsTeen)("safety_warnings_setting") && e
}