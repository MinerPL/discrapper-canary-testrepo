"use strict";
n.d(t, {
  Q: function() {
    return f
  }
});
var i = n(264344),
  r = n.n(i),
  s = n(259443),
  o = n(46973),
  a = n(912095),
  l = n(912978),
  u = n(886848),
  _ = n(236842),
  d = n(649318),
  c = n(199857),
  E = n(65154),
  I = n(436620);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function h(e) {
  return e.split("-")[0]
}
class S extends a.Z {
  destroy() {
    super.destroy(), this.pc.close()
  }
  setCodecs(e, t, n) {
    var i, r, s;
    let o;
    if (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) o = this.codecs.find(t => t.name === e), this.fpc.audioCodec = e, this.fpc.audioPayloadType = null !== (i = null == o ? void 0 : o.payloadType) && void 0 !== i ? i : 0, o = this.codecs.find(e => e.name === t), this.fpc.videoCodec = t, this.fpc.videoPayloadType = null !== (r = null == o ? void 0 : o.payloadType) && void 0 !== r ? r : 0, this.fpc.rtxPayloadType = null !== (s = null == o ? void 0 : o.rtxPayloadType) && void 0 !== s ? s : 0, this.pc.negotiationNeeded()
  }
  setStream(e) {
    this.fpc.direction = null != e ? d.Ns.SENDRECV : d.Ns.SENDONLY, this.pc.setStream(null != e ? e : null)
  }
  createUser(e, t, n) {
    var i;
    if (0 === t) {
      this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
      return
    }
    this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (i = null == n ? void 0 : n.join(",")) && void 0 !== i ? i : 0));
    let r = null != n && n.length > 0 ? n[0] : 0;
    this.fpc.addStream(e, t, r)
  }
  destroyUser(e) {
    this.fpc.removeStream(e)
  }
  setBitRate(e) {
    this.voiceBitrate !== e && (super.setBitRate(e), this.pc.setBitRate(e))
  }
  setSDP(e) {
    this.pc.on("offer", () => this.fpc.createAnswer()), this.fpc.sdp = e
  }
  getUserIdBySsrc(e) {}
  getRawStats() {
    return this.pc.getStats()
  }
  setVideoEncoderParameters(e) {}
  constructor(e, t, n, i) {
    super(e, t, n, i), T(this, "pc", void 0), T(this, "fpc", void 0), T(this, "codecs", []), T(this, "logger", void 0), this.logger = new s.Y("Connection(".concat(e, ")"));
    let r = new l.Z;
    r.on("answer", e => this.pc.setRemoteDescription(e).catch(e => this.logger.error("Failed to set remote description (answer): ".concat(e)))), r.on("offer", e => {
      this.pc.setRemoteDescription(e).then(() => this.pc.createAnswer()).then(e => this.fpc.setRemoteDescription(e)).catch(e => this.logger.error("Failed to set remote description (offer): ".concat(e)))
    }), r.direction = null != this.input.stream ? d.Ns.SENDRECV : d.Ns.SENDONLY, this.fpc = r;
    let a = new _.Z(this.voiceBitrate);
    a.on("addtrack", (e, t) => this.createOutput(h(e), t)), a.on("removetrack", (e, t) => this.destroyOutput(h(e), t)), a.once("connected", () => {
      this.input.reset(), this.setConnectionState(E.$j.CONNECTED), this.on(o.Sh.Stats, this.handleStats), this.input.on(u.G.VoiceActivity, this.handleVoiceActivity)
    }), a.on("connecting", () => this.setConnectionState(E.$j.DTLS_CONNECTING)), a.on("checking", () => this.setConnectionState(E.$j.ICE_CHECKING)), a.on("failed", () => this.setConnectionState(E.$j.NO_ROUTE)), a.on("disconnected", () => this.setConnectionState(E.$j.DISCONNECTED)), a.on("closed", () => this.setConnectionState(E.$j.DISCONNECTED)), a.on("offer", e => {
      let {
        sdp: t
      } = e, {
        outboundStreams: n,
        codecs: i,
        audioSSRC: s,
        videoSSRC: a,
        rtxSSRC: l
      } = (0, d.Nl)(t);
      this.codecs = i;
      let u = (0, d.nX)(t);
      r.outboundStreams = n, this.audioSSRC = s, r.extensions = u, (this.videoStreamParameters[0].ssrc !== a || this.videoStreamParameters[0].rtxSsrc !== l || !this.videoReady) && (this.videoStreamParameters[0].ssrc = a, this.videoStreamParameters[0].rtxSsrc = l, this.emit(o.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, this.videoStreamParameters[0].ssrc, this.videoStreamParameters[0].rtxSsrc, this.videoStreamParameters), this.videoReady = !0)
    }), a.once("offer", e => {
      let {
        sdp: t
      } = e;
      this.emit(o.Sh.Connected, "webrtc", (0, d.sc)(t))
    }), null != this.input.stream ? a.setStream(this.input.stream) : a.negotiationNeeded(), this.pc = a
  }
}

function f(e, t, n, i) {
  let o = "".concat(null != r().name && "" !== r().name ? r().name : "unknown", " ").concat(null != r().version && "" !== r().version ? r().version : "unknown"),
    a = new s.Y("Connection(".concat(e, ")"));
  return I.WS ? (a.info("Using Unified Plan (".concat(o, ")")), new c.Z(e, t, n, i)) : (a.info("Using Plan B (".concat(o, ")")), new S(e, t, n, i))
}