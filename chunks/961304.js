"use strict";
n.d(t, {
  X: function() {
    return r
  },
  Z: function() {
    return c
  }
});
var i, r, s = n(259443),
  o = n(47770),
  a = n(740197),
  l = n(376398),
  u = n(65154);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = new s.Y("Output");
(i = r || (r = {})).InteractionRequired = "interactionrequired", i.Speaking = "speaking", i.Video = "video";
class c extends o.Z {
  play() {
    var e;
    null === (e = this.audioElement) || void 0 === e || e.play()
  }
  destroy() {
    var e;
    null === (e = this.audioElement) || void 0 === e || e.pause(), null != this.videoStreamId && (0, l.jC)(this.videoStreamId), null != this.streamSourceNode && (this.streamSourceNode.disconnect(), this.streamSourceNode = null), null != this.levelNode && (this.levelNode.disconnect(), this.levelNode.port.postMessage("close"), this.levelNode = null), this.setSpeakingFlags(u.Dg.NONE), this.removeAllListeners()
  }
  addTrack(e) {
    if (this.stream.getTracks().includes(e)) return this.stream.getTracks().length;
    if (this.stream.addTrack(e), null == this.audioElement) {
      let e = document.createElement("audio");
      e.srcObject = this.stream;
      let t = e.play();
      null != t && t.catch(() => this.emit("interactionrequired", !0)), this.audioElement = e, this.updateAudioElement()
    }
    if (null == this.levelNode && this.stream.getAudioTracks().length > 0) {
      this.streamSourceNode = this.audioContext.createMediaStreamSource(this.stream);
      try {
        this.levelNode = new AudioWorkletNode(this.audioContext, "level-processor"), this.levelNode.port.onmessage = e => {
          this.emit("speaking", e.data)
        }, null != this.streamSourceNode && this.streamSourceNode.connect(this.levelNode)
      } catch (e) {
        d.warn("Output#Failed to setup speaking indicator: ".concat(e))
      }
    }
    return "video" === e.kind && (null != this.videoStreamId && (0, l.jC)(this.videoStreamId), this.stream.getVideoTracks().forEach(t => {
      e !== t && (t.discordIsTearingDown = !0, this.stream.removeTrack(t))
    }), this.videoStreamId = (0, l.N7)(this.stream), this.emit("video", this.videoStreamId)), "audio" === e.kind && this.stream.getAudioTracks().forEach(t => {
      e !== t && (t.discordIsTearingDown = !0, this.stream.removeTrack(t))
    }), this.stream.getTracks().length
  }
  removeTrack(e) {
    return this.stream.removeTrack(e), "video" === e.kind && (null != this.videoStreamId && (0, l.jC)(this.videoStreamId), this.emit("video", null)), this.stream.getTracks().length
  }
  setSinkId(e) {
    this.sinkId = e, this.updateAudioElement()
  }
  get mute() {
    return this._mute
  }
  set mute(e) {
    this._mute = e || !1, this.updateAudioElement()
  }
  get priority() {
    return (this._speakingFlags & u.Dg.PRIORITY) === u.Dg.PRIORITY
  }
  get volume() {
    return this._volume
  }
  set volume(e) {
    this._volume = Math.max(0, Math.min(Math.round(e), u.Qx)), this.updateAudioElement()
  }
  get speakingFlags() {
    return this._speakingFlags
  }
  setSpeakingFlags(e) {
    this._speakingFlags !== e && (this._speakingFlags = e, this.updateAudioElement())
  }
  updateAudioElement() {
    let e = this.audioElement;
    if (null != e) {
      e.muted = this._mute, e.volume = this._volume / 100;
      let t = this.sinkId;
      null != t && a.ZA && e.setSinkId(t)
    }
  }
  constructor(e, t) {
    super(), _(this, "id", void 0), _(this, "_speakingFlags", u.Dg.NONE), _(this, "_mute", !1), _(this, "_volume", u.Qx), _(this, "sinkId", null), _(this, "audioElement", null), _(this, "stream", new MediaStream), _(this, "videoStreamId", null), _(this, "levelNode", null), _(this, "streamSourceNode", null), _(this, "audioContext", void 0), this.id = e, this.audioContext = t
  }
}