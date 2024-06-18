"use strict";
let i;
var r, s = n(442837),
  o = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = {
  lastGuildDismissedTime: {}
};
class u extends(r = s.ZP.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
    i = e
  }
  getUserAgnosticState() {
    return i
  }
  getLastGuildDismissedTime(e) {
    return i.lastGuildDismissedTime[e]
  }
}
a(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"), a(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore"), t.Z = new u(o.Z, {
  APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function(e) {
    let {
      guildId: t
    } = e;
    i.lastGuildDismissedTime[t] = Date.now()
  }
})