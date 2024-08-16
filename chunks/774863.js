let r;
n(47120);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(570140),
    c = n(70956),
    d = n(709054);
let _ = 14 * c.Z.Millis.DAY,
    E = Object.freeze([]);
let f = {},
    h = {};
function p() {
    (f = {}), (h = {});
}
class m extends (i = l.ZP.Store) {
    getFpMessageInfo(e) {
        return f[e];
    }
    getChannelFpInfo(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : E;
    }
    canSubmitFpReport(e) {
        let t = f[e];
        return null != t && !t.reportSubmit && d.default.age(t.messageId) < _;
    }
    get validContentScanVersion() {
        return r;
    }
}
(o = 'FalsePositiveStore'),
    (s = 'displayName') in (a = m)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new m(u.Z, {
        LOGOUT: function () {
            (function () {
                (f = {}), (h = {});
            })();
        },
        CONNECTION_OPEN: function (e) {
            let { explicitContentScanVersion: t } = e;
            (r = t),
                (function () {
                    (f = {}), (h = {});
                })();
        },
        MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function (e) {
            var t;
            let { messageId: n, channelId: r, attachments: i } = e,
                a = {
                    messageId: n,
                    channelId: r,
                    attachments: i,
                    reportSubmit: !1
                },
                s = null !== (t = h[r]) && void 0 !== t ? t : E;
            (h[r] = [...s, a]), (f[n] = a);
        },
        MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function (e) {
            let { messageId: t, channelId: n } = e,
                r = h[n];
            null != r &&
                ((h[n] = r.map((e) =>
                    e.messageId === t
                        ? {
                              ...e,
                              reportSubmit: !0
                          }
                        : e
                )),
                (f[t] = {
                    ...f[t],
                    reportSubmit: !0
                }));
        }
    }));
