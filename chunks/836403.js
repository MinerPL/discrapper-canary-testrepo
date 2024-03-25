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
  o = a("271938"),
  l = a("49111");

function s(e, t) {
  if (0 === e.length) return "No logs";
  let a = n.Storage.get(l.DEVICE_TOKEN),
    o = n.Storage.get(l.DEVICE_VOIP_TOKEN),
    s = e.map(e => {
      let a = e.silent ? "Silent" : "Displayed",
        n = t ? "".concat(e.channelId, " - ").concat(e.messageId) : "".concat(e.title, " - ").concat(e.content);
      return "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(a, " - ").concat(n)
    }).join("\n");
  return "".concat(null != a ? "Device Token: ".concat(a) : "", "\n").concat(null != o ? "Device Voip Token: ".concat(o) : "", "\n\n").concat(s)
}
async function r() {
  let e = o.default.getId(),
    t = [];
  return t
}