"use strict";
n.d(t, {
  Z: function() {
    return l
  },
  a: function() {
    return r.a
  }
});
var i = n(47770),
  r = n(11934),
  s = n(65154);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = 0;
class l extends i.Z {
  destroy() {
    this.destroyed = !0, this.setConnectionState(s.$j.DISCONNECTED), this.emit(r.a.Destroy, this), this.removeAllListeners()
  }
  setConnectionState(e) {
    this.connectionState = e, this.emit(r.a.ConnectionStateChange, this.connectionState)
  }
  initializeStreamParameters(e) {
    this.videoStreamParameters = e.filter(e => e.type === s.Tr.TEST).map(e => {
      var t;
      return {
        type: e.type,
        active: e.active,
        rid: null !== (t = e.rid) && void 0 !== t ? t : "",
        ssrc: e.ssrc
      }
    })
  }
  constructor(e) {
    super(), o(this, "mediaEngineConnectionId", "WebRTC-".concat(a++)), o(this, "userId", void 0), o(this, "streamUserId", void 0), o(this, "destroyed", !1), o(this, "audioSSRC", 0), o(this, "videoStreamParameters", []), o(this, "connectionState", s.$j.CONNECTING), this.userId = e
  }
}