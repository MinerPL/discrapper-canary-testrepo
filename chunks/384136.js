n.d(t, {
  Z: function() {
return o;
  }
}), n(411104);
var r = n(836560),
  i = n(376398);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class o extends r.EventEmitter {
  static async get(e, t) {
var n;
let r = {
  ...e,
  frameRate: 30
};
if ((null === (n = navigator.mediaDevices) || void 0 === n ? void 0 : n.getDisplayMedia) != null)
  return new o(await navigator.mediaDevices.getDisplayMedia({
    audio: t,
    video: r
  }));
throw Error('UNKNOWN');
  }
  destroy() {
this.removeAllListeners(), (0, i.jC)(this.streamId), this.stream.getTracks().forEach(e => e.stop());
  }
  reset() {
this.refreshSpeaking();
  }
  getStreamId() {
return this.streamId;
  }
  refreshSpeaking() {
this.emit('speaking', this.stream.getAudioTracks().some(e => e.enabled));
  }
  constructor(e) {
super(), a(this, 'id', void 0), a(this, 'stream', void 0), a(this, 'streamId', void 0), e.getVideoTracks().forEach(e => {
  e.onended = () => {
    this.emit('desktopsourceend');
  };
}), this.id = e.getVideoTracks()[0].label, this.stream = e, this.streamId = (0, i.N7)(e);
  }
}