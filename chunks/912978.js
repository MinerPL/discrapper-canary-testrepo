"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(653041), n(411104), n(47120);
var i = n(836560),
  r = n(264344),
  s = n.n(r),
  o = n(649318);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class l extends i.EventEmitter {
  addStream(e, t, n) {
    let i = !1;
    !this.streams.some(e => e.ssrc === t) && this.streams.push({
      ssrc: t,
      cname: e,
      type: "audio"
    }), this.activeAudioSSRCs[e] !== t && (this.activeAudioSSRCs = {
      ...this.activeAudioSSRCs,
      [e]: t
    }, i = !0), null != n && (n > 0 ? (!this.streams.some(e => e.ssrc === n) && this.streams.push({
      ssrc: n,
      cname: e,
      type: "video"
    }), this.activeVideoSSRCs[e] !== n && (this.activeVideoSSRCs = {
      ...this.activeVideoSSRCs,
      [e]: n
    }, i = !0)) : null != this.activeVideoSSRCs[e] && (i = !0, this.activeVideoSSRCs = {
      ...this.activeVideoSSRCs
    }, delete this.activeVideoSSRCs[e])), i && this.negotiationNeeded()
  }
  removeStream(e) {
    let t = !1;
    null != this.activeAudioSSRCs[e] && (t = !0, this.activeAudioSSRCs = {
      ...this.activeAudioSSRCs
    }, delete this.activeAudioSSRCs[e]), null != this.activeVideoSSRCs[e] && (t = !0, this.activeVideoSSRCs = {
      ...this.activeVideoSSRCs
    }, delete this.activeVideoSSRCs[e]), t && this.negotiationNeeded()
  }
  get sdp() {
    if (null == this._sdp) throw Error("sdp is not set");
    return this._sdp
  }
  set sdp(e) {
    if (!(0, o.$6)(e)) throw Error("Incorrect SDP received from rtc-worker: ".concat(e));
    this._sdp = e, this.createAnswer(), this.connected = !0, this._negotiationNeeded && this.negotiationNeeded()
  }
  negotiationNeeded() {
    if (this.negotiating) {
      this._negotiationNeeded = !0;
      return
    }
    null != this._sdp ? (this.negotiating = !0, this._negotiationNeeded = !1, this.generateSessionDescription("offer")) : this._negotiationNeeded = !0
  }
  setRemoteDescription(e) {
    return this.negotiating = !1, this._negotiationNeeded && this.negotiationNeeded(), Promise.resolve()
  }
  createAnswer() {
    return this.generateSessionDescription("answer")
  }
  getSSRCs(e) {
    let t = this.streams.map((e, t) => {
      let {
        cname: n,
        ssrc: i,
        type: r
      } = e, s = this.activeAudioSSRCs[n], a = this.activeVideoSSRCs[n], l = "".concat(r, "_inbound_").concat(t);
      return [i, n, r, s === i || a === i ? this.direction : o.Ns.INACTIVE, l]
    });
    if ("Firefox" !== s().name) return this.connected ? t : [];
    let n = this.outboundStreams.map((e, t) => [0, "outbound", e.type, (0, o.Mg)(e.direction), "".concat(e.type, "_outbound_").concat(t)]);
    if ("answer" !== e) return n.concat(t);
    {
      let e = n.length - t.length;
      return n.slice(0, e).concat(t).slice(0, n.length).map((e, t) => {
        let [n, i, r, s, a] = e;
        return [n, i, r, (0, o.Mg)(this.outboundStreams[t].direction), this.outboundStreams[t].mid]
      })
    }
  }
  generateSessionDescription(e) {
    let t = this.audioCodec,
      n = this.audioPayloadType,
      i = this.videoCodec,
      r = this.videoPayloadType,
      s = this.rtxPayloadType,
      a = this.sdp;
    if (null == t || null == n || null == i || null == r || null == s || null == a || null == this.direction) throw Error("Invalid payload: audioCodec: ".concat(t, ", audioPayloadType: ").concat(null == n ? "null" : n, ", videoCodec: ").concat(i, ", videoCodecPayloadType: ").concat(null == r ? "null" : r, ", rtxPayloadType: ").concat(null == s ? "null" : s, ", sdp: ").concat(a));
    let l = (0, o.MP)({
      type: e,
      baseSDP: a,
      direction: this.direction,
      audioCodec: t,
      audioPayloadType: n,
      audioBitRate: 40,
      videoCodec: i,
      videoPayloadType: r,
      videoBitRate: 2500,
      rtxPayloadType: s,
      ssrcs: this.getSSRCs(e),
      extensions: this.extensions
    });
    return this.emit(e, l), Promise.resolve(l)
  }
  constructor(...e) {
    super(...e), a(this, "audioCodec", null), a(this, "audioPayloadType", null), a(this, "videoCodec", null), a(this, "videoPayloadType", null), a(this, "rtxPayloadType", null), a(this, "direction", null), a(this, "outboundStreams", []), a(this, "extensions", []), a(this, "streams", []), a(this, "activeAudioSSRCs", {}), a(this, "activeVideoSSRCs", {}), a(this, "_sdp", null), a(this, "connected", !1), a(this, "negotiating", !1), a(this, "_negotiationNeeded", !1)
  }
}