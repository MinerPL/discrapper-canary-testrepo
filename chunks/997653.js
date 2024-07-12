n.d(t, {
  Q: function() {
return I;
  }
});
var r = n(264344),
  i = n.n(r),
  a = n(259443),
  o = n(46973),
  s = n(912095),
  l = n(912978),
  u = n(886848),
  c = n(236842),
  d = n(649318),
  _ = n(199857),
  E = n(65154),
  f = n(436620);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function p(e) {
  return e.split('-')[0];
}
class m extends s.Z {
  destroy() {
super.destroy(), this.pc.close();
  }
  setCodecs(e, t, n) {
var r, i, a;
let o;
if (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t)
  o = this.codecs.find(t => t.name === e), this.fpc.audioCodec = e, this.fpc.audioPayloadType = null !== (r = null == o ? void 0 : o.payloadType) && void 0 !== r ? r : 0, o = this.codecs.find(e => e.name === t), this.fpc.videoCodec = t, this.fpc.videoPayloadType = null !== (i = null == o ? void 0 : o.payloadType) && void 0 !== i ? i : 0, this.fpc.rtxPayloadType = null !== (a = null == o ? void 0 : o.rtxPayloadType) && void 0 !== a ? a : 0, this.pc.negotiationNeeded();
  }
  setStream(e) {
this.fpc.direction = null != e ? d.Ns.SENDRECV : d.Ns.SENDONLY, this.pc.setStream(null != e ? e : null);
  }
  createUser(e, t, n) {
var r;
if (0 === t) {
  this.logger.warn('Attempting to create user '.concat(e, ' with 0 audio SSRC'));
  return;
}
this.logger.info('Creating user: '.concat(e, ' with audio SSRC: ').concat(t, ' and video SSRCs: ').concat(null !== (r = null == n ? void 0 : n.join(',')) && void 0 !== r ? r : 0));
let i = null != n && n.length > 0 ? n[0] : 0;
this.fpc.addStream(e, t, i);
  }
  destroyUser(e) {
this.fpc.removeStream(e);
  }
  setBitRate(e) {
this.voiceBitrate !== e && (super.setBitRate(e), this.pc.setBitRate(e));
  }
  setSDP(e) {
this.pc.on('offer', () => this.fpc.createAnswer()), this.fpc.sdp = e;
  }
  getUserIdBySsrc(e) {}
  getRawStats() {
return this.pc.getStats();
  }
  setVideoEncoderParameters(e) {}
  constructor(e, t, n, r) {
super(e, t, n, r), h(this, 'pc', void 0), h(this, 'fpc', void 0), h(this, 'codecs', []), h(this, 'logger', void 0), this.logger = new a.Y('Connection('.concat(e, ')'));
let i = new l.Z();
i.on('answer', e => this.pc.setRemoteDescription(e).catch(e => this.logger.error('Failed to set remote description (answer): '.concat(e)))), i.on('offer', e => {
  this.pc.setRemoteDescription(e).then(() => this.pc.createAnswer()).then(e => this.fpc.setRemoteDescription(e)).catch(e => this.logger.error('Failed to set remote description (offer): '.concat(e)));
}), i.direction = null != this.input.stream ? d.Ns.SENDRECV : d.Ns.SENDONLY, this.fpc = i;
let s = new c.Z(this.voiceBitrate);
s.on('addtrack', (e, t) => this.createOutput(p(e), t)), s.on('removetrack', (e, t) => this.destroyOutput(p(e), t)), s.once('connected', () => {
  this.input.reset(), this.setConnectionState(E.$j.CONNECTED), this.on(o.Sh.Stats, this.handleStats), this.input.on(u.G.VoiceActivity, this.handleVoiceActivity);
}), s.on('connecting', () => this.setConnectionState(E.$j.DTLS_CONNECTING)), s.on('checking', () => this.setConnectionState(E.$j.ICE_CHECKING)), s.on('failed', () => this.setConnectionState(E.$j.NO_ROUTE)), s.on('disconnected', () => this.setConnectionState(E.$j.DISCONNECTED)), s.on('closed', () => this.setConnectionState(E.$j.DISCONNECTED)), s.on('offer', e => {
  let {
    sdp: t
  } = e, {
    outboundStreams: n,
    codecs: r,
    audioSSRC: a,
    videoSSRC: s,
    rtxSSRC: l
  } = (0, d.Nl)(t);
  this.codecs = r;
  let u = (0, d.nX)(t);
  i.outboundStreams = n, this.audioSSRC = a, i.extensions = u, (this.videoStreamParameters[0].ssrc !== s || this.videoStreamParameters[0].rtxSsrc !== l || !this.videoReady) && (this.videoStreamParameters[0].ssrc = s, this.videoStreamParameters[0].rtxSsrc = l, this.emit(o.Sh.Video, this.userId, this.input.getVideoStreamId(), this.audioSSRC, this.videoStreamParameters[0].ssrc, this.videoStreamParameters[0].rtxSsrc, this.videoStreamParameters), this.videoReady = !0);
}), s.once('offer', e => {
  let {
    sdp: t
  } = e;
  this.emit(o.Sh.Connected, 'webrtc', (0, d.sc)(t));
}), null != this.input.stream ? s.setStream(this.input.stream) : s.negotiationNeeded(), this.pc = s;
  }
}

function I(e, t, n, r) {
  let o = ''.concat(null != i().name && '' !== i().name ? i().name : 'unknown', ' ').concat(null != i().version && '' !== i().version ? i().version : 'unknown'),
s = new a.Y('Connection('.concat(e, ')'));
  return f.WS ? (s.info('Using Unified Plan ('.concat(o, ')')), new _.Z(e, t, n, r)) : (s.info('Using Plan B ('.concat(o, ')')), new m(e, t, n, r));
}