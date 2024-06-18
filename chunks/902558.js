"use strict";
n(47120);
var i = n(268146),
  r = n(46973),
  s = n(147913),
  o = n(314897),
  a = n(998502),
  l = n(981631);
let u = new Set;

function _(e) {
  switch (e) {
    case r.Yn.DEFAULT:
      return i.X4.VideoMediaSessionId;
    case r.Yn.STREAM:
      return i.X4.StreamMediaSessionId
  }
}

function d(e) {
  var t;
  a.ZP.setCrashInformation(_(e.context), null !== (t = e.mediaSessionId) && void 0 !== t ? t : null)
}

function c(e) {
  var t;
  let n = (null !== (t = e.channelId) && void 0 !== t ? t : "unknown") + e.context;
  switch (e.state) {
    case l.hes.RTC_CONNECTED:
      u.add(n), a.ZP.setCrashInformation(i.X4.HasRTCConnection, 1);
      break;
    case l.hes.DISCONNECTED:
      a.ZP.setCrashInformation(_(e.context), null), u.delete(n), 0 === u.size && ! function() {
        for (let e of [i.X4.HasRTCConnection, i.X4.IsSendingVideo, i.X4.IsSendingStream, i.X4.IsReceivingVideo, i.X4.IsReceivingStream]) a.ZP.setCrashInformation(e, 0)
      }()
  }
}

function E(e) {
  let t = e.userId === o.default.getId(),
    n = null != e.streamId,
    s = null;
  switch (e.context) {
    case r.Yn.DEFAULT:
      s = t ? i.X4.IsSendingVideo : i.X4.IsReceivingVideo;
      break;
    case r.Yn.STREAM:
      s = t ? i.X4.IsSendingStream : i.X4.IsReceivingStream
  }
  a.ZP.setCrashInformation(s, n ? 1 : 0)
}
class I extends s.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      RTC_CONNECTION_STATE: c,
      RTC_CONNECTION_VIDEO: E,
      MEDIA_SESSION_JOINED: d
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new I