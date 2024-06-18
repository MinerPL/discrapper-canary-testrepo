"use strict";
n.d(t, {
  Z: function() {
    return c
  },
  y: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s = n(392711),
  o = n.n(s),
  a = n(47770),
  l = n(562319),
  u = n(70956),
  _ = n(65154);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(r = i || (i = {})).RequestedSSRCsUpdate = "requested-ssrcs-update", r.RequestedStreamsUpdate = "requested-streams-update";
class c extends a.Z {
  setUserID(e) {
    this.userId = e
  }
  updateAudioAndVideoStreamInfo(e, t) {
    this.audioSSRC = e, this.videoStreams = t, this.update()
  }
  setGoLiveStreamDowngraded(e) {
    this.throttleDowngradeChanges ? this.throttledSetStreamDowngraded(e) : this.setStreamDowngradedInternal(e)
  }
  setSimulcastDebugOverride(e) {
    this.debugQualityOverride = e, this.update()
  }
  setFirstFrameReceived(e) {
    this.everReceivedFrame = !0, this.pendingSSRC === e && (this.pendingSSRCReceived = !0, this.update())
  }
  setThrottleStreamDowngradeChanges(e) {
    this.throttleDowngradeChanges = e
  }
  hasEverReceivedFrame() {
    return this.everReceivedFrame
  }
  update() {
    if (void 0 === this.userId || null === this.userId) return;
    let e = this.videoStreams.length > 1,
      t = {},
      n = [];
    if (e) {
      let e = this.getQualityConfig();
      if (null === e) return;
      let [i, r, s, o] = e;
      t[i] = r, t[s] = 0, n.push(i), this.hasEverReceivedFrame() && this.supportsSeamless && (-1 === this.pendingSSRC ? (this.pendingSSRC = i, n.push(s), t[s] = o) : this.pendingSSRC === i ? this.pendingSSRCReceived ? (this.pendingSSRC = -1, this.pendingSSRCReceived = !1) : (n.push(s), t[s] = o) : this.pendingSSRC === s && (this.pendingSSRC = -1))
    } else t[this.videoStreams[0].ssrc] = 100, n.push(this.videoStreams[0].ssrc);
    if (!l.Z.isIncomingVideoEnabled())
      for (let e in t) "any" !== e && (t[e] = 0);
    this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, n), this.emit("requested-streams-update", t)
  }
  setStreamDowngradedInternal(e) {
    e !== this.downgraded && (this.downgraded = e, this.update())
  }
  getQualityConfig() {
    let e = o().minBy(this.videoStreams, e => e.quality),
      t = o().maxBy(this.videoStreams, e => e.quality);
    if (void 0 === e || void 0 === t) return null;
    if (this.debugQualityOverride === _.Z.LOW) return [e.ssrc, 60, t.ssrc, 100];
    if (this.debugQualityOverride === _.Z.HIGH) return [t.ssrc, 100, e.ssrc, 60];
    if (this.downgraded) return [e.ssrc, 60, t.ssrc, 100];
    else return [t.ssrc, 100, e.ssrc, 60]
  }
  constructor(e) {
    super(), d(this, "supportsSeamless", void 0), d(this, "userId", void 0), d(this, "videoStreams", void 0), d(this, "audioSSRC", void 0), d(this, "downgraded", void 0), d(this, "debugQualityOverride", void 0), d(this, "pendingSSRC", void 0), d(this, "everReceivedFrame", void 0), d(this, "pendingSSRCReceived", void 0), d(this, "throttleDowngradeChanges", void 0), d(this, "STREAM_DOWNGRADE_CHANGE_INTERVAL_MS", void 0), d(this, "throttledSetStreamDowngraded", void 0), this.supportsSeamless = e, this.videoStreams = [], this.audioSSRC = 0, this.downgraded = !1, this.debugQualityOverride = _.Z.NO_OVERRIDE, this.pendingSSRC = -1, this.everReceivedFrame = !1, this.pendingSSRCReceived = !1, this.throttleDowngradeChanges = !0, this.STREAM_DOWNGRADE_CHANGE_INTERVAL_MS = 30 * u.Z.Millis.SECOND, this.throttledSetStreamDowngraded = o().throttle(this.setStreamDowngradedInternal, this.STREAM_DOWNGRADE_CHANGE_INTERVAL_MS, {
      leading: !0,
      trailing: !1
    }), l.Z.subscribe(() => {
      this.update()
    })
  }
}