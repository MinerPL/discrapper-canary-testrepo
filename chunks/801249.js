let r;
var i,
    a = n(442837),
    s = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = { lastGuildDismissedTime: {} };
class u extends (i = a.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        r = e;
    }
    getUserAgnosticState() {
        return r;
    }
    getLastGuildDismissedTime(e) {
        return r.lastGuildDismissedTime[e];
    }
}
o(u, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'),
    o(u, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'),
    (t.Z = new u(s.Z, {
        APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
            let { guildId: t } = e;
            r.lastGuildDismissedTime[t] = Date.now();
        }
    }));
