"use strict";
a.r(t), a.d(t, {
  serializePushNotificationLogs: function() {
    return s
  },
  getPushNotificationLogs: function() {
    return r
  }
});
var n = a("95410"),
  l = a("271938"),
  o = a("49111");

function s(e, t) {
  if (0 === e.length) return "No logs";
  let a = n.default.get(o.DEVICE_TOKEN),
    l = n.default.get(o.DEVICE_VOIP_TOKEN),
    s = e.map(e => {
      let a = e.silent ? "Silent" : "Displayed",
        n = t ? "".concat(e.channelId, " - ").concat(e.messageId) : "".concat(e.title, " - ").concat(e.content);
      return "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(a, " - ").concat(n)
    }).join("\n");
  return "".concat(null != a ? "Device Token: ".concat(a) : "", "\n").concat(null != l ? "Device Voip Token: ".concat(l) : "", "\n\n").concat(s)
}
async function r() {
  let e = l.default.getId(),
    t = [];
  return t
}