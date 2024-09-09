n(47120);
var r = n(268146),
    i = n(46973),
    a = n(147913),
    s = n(314897),
    o = n(998502),
    l = n(981631);
let u = new Set();
function c(e) {
    switch (e) {
        case i.Yn.DEFAULT:
            return r.X4.VideoMediaSessionId;
        case i.Yn.STREAM:
            return r.X4.StreamMediaSessionId;
    }
}
function d(e) {
    var t;
    o.ZP.setCrashInformation(c(e.context), null !== (t = e.mediaSessionId) && void 0 !== t ? t : null);
}
function _(e) {
    var t;
    let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
    switch (e.state) {
        case l.hes.RTC_CONNECTED:
            u.add(n), o.ZP.setCrashInformation(r.X4.HasRTCConnection, 1);
            break;
        case l.hes.DISCONNECTED:
            o.ZP.setCrashInformation(c(e.context), null),
                u.delete(n),
                0 === u.size &&
                    !(function () {
                        for (let e of [r.X4.HasRTCConnection, r.X4.IsSendingVideo, r.X4.IsSendingStream, r.X4.IsReceivingVideo, r.X4.IsReceivingStream]) o.ZP.setCrashInformation(e, 0);
                    })();
    }
}
function E(e) {
    let t = e.userId === s.default.getId(),
        n = null != e.streamId,
        a = null;
    switch (e.context) {
        case i.Yn.DEFAULT:
            a = t ? r.X4.IsSendingVideo : r.X4.IsReceivingVideo;
            break;
        case i.Yn.STREAM:
            a = t ? r.X4.IsSendingStream : r.X4.IsReceivingStream;
    }
    o.ZP.setCrashInformation(a, n ? 1 : 0);
}
class f extends a.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                RTC_CONNECTION_STATE: _,
                RTC_CONNECTION_VIDEO: E,
                MEDIA_SESSION_JOINED: d
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new f();
