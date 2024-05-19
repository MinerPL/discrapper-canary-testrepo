"use strict";
n.r(t), n.d(t, {
  GoLiveQualityManagerEvent: function() {
    return i
  },
  default: function() {
    return u
  }
}), n("653041"), n("47120");
var i, r, a = n("392711"),
  s = n.n(a),
  o = n("47770");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(r = i || (i = {})).RequestedSSRCsUpdate = "requested-ssrcs-update", r.RequestedStreamsUpdate = "requested-streams-update";
class u extends o.default {
  setUserID(e) {
    this.userId = e
  }
  updateAudioAndVideoStreamInfo(e, t) {
    this.audioSSRC = e, this.videoStreams = t, this.update()
  }
  setGoLiveStreamDowngraded(e) {
    this.downgraded = e, this.update()
  }
  update() {
    let e = {
      any: 100
    };
    if (null != this.userId) {
      let t = [];
      if (this.downgraded) {
        let n = s().minBy(this.videoStreams, e => e.quality);
        null != n && (t.push(n.ssrc), e[n.ssrc] = 60)
      } else {
        let n = s().maxBy(this.videoStreams, e => e.quality);
        null != n && (t.push(n.ssrc), e[n.ssrc] = 100)
      }
      this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, t), this.emit("requested-streams-update", e)
    }
  }
  constructor(...e) {
    super(...e), l(this, "userId", void 0), l(this, "videoStreams", []), l(this, "audioSSRC", 0), l(this, "downgraded", !1)
  }
}