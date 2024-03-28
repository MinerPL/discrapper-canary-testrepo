"use strict";
a.r(t), a.d(t, {
  useActivateDeviceStepTracking: function() {
    return u
  }
});
var n = a("470079"),
  r = a("110924"),
  s = a("626135"),
  o = a("497350"),
  i = a("981631");

function u(e) {
  let t = (0, r.default)(e);
  n.useEffect(() => {
    if (e === t) return;
    let a = null;
    "user-code-input" !== e.type && (a = (0, o.clientIdToActivateDevicePlatform)(e.userCodeData.clientId)), s.default.track(i.AnalyticEvents.DEVICE_LINK_STEP, {
      previous_step: null == t ? void 0 : t.type,
      current_step: e.type,
      platform_type: a
    })
  }, [t, e])
}