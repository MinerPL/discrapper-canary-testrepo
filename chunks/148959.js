n.d(t, {
  Z: function() {
return f;
  },
  y: function() {
return r;
  }
}), n(47120), n(653041);
var r, i, a = n(392711),
  o = n.n(a),
  s = n(47770),
  l = n(562319),
  u = n(70956),
  c = n(65154);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = 10 * u.Z.Millis.SECOND,
  E = 30 * u.Z.Millis.SECOND;
(i = r || (r = {})).RequestedSSRCsUpdate = 'requested-ssrcs-update', i.RequestedStreamsUpdate = 'requested-streams-update';
class f extends s.Z {
  setUserID(e) {
this.userId = e;
  }
  updateAudioAndVideoStreamInfo(e, t) {
this.audioSSRC = e, this.videoStreams = t, this.lastDowngradeChangeTime = void 0, this.update();
  }
  setGoLiveStreamDowngraded(e) {
if (!!this.senderSupportsSimulcast() && e !== this.downgraded)
  this.isDowngradeChangeAllowed(e) && (this.downgraded = e, this.lastDowngradeChangeTime = Date.now(), this.update());
  }
  isDowngraded() {
return this.downgraded;
  }
  setSimulcastDebugOverride(e) {
this.debugQualityOverride = e, this.update();
  }
  setFirstFrameReceived(e) {
this.everReceivedFrame = !0, this.pendingSSRC === e && (this.pendingSSRCReceived = !0, this.update());
  }
  setThrottleStreamDowngradeChanges(e) {
this.throttleDowngradeChanges = e;
  }
  hasEverReceivedFrame() {
return this.everReceivedFrame;
  }
  senderSupportsSimulcast() {
return this.videoStreams.length > 1;
  }
  onClientConnect(e) {
e.forEach(e => this.otherUsers.add(e)), this.update();
  }
  onClientDisconnect(e) {
this.otherUsers.delete(e), this.update();
  }
  update() {
if (void 0 === this.userId || null === this.userId)
  return;
let e = {},
  t = [];
if (this.senderSupportsSimulcast()) {
  let n = this.getQualityConfig();
  if (null === n)
    return;
  let [r, i, a, o] = n;
  e[r] = i, e[a] = 0, t.push(r), this.hasEverReceivedFrame() && this.supportsSeamless && l.Z.isIncomingVideoEnabled() && (-1 === this.pendingSSRC ? (this.pendingSSRC = r, t.push(a), e[a] = o) : this.pendingSSRC === r ? this.pendingSSRCReceived ? (this.pendingSSRC = -1, this.pendingSSRCReceived = !1) : (t.push(a), e[a] = o) : this.pendingSSRC === a && (this.pendingSSRC = -1));
} else
  e[this.videoStreams[0].ssrc] = l.Z.isIncomingVideoEnabled() ? 100 : 0, t.push(this.videoStreams[0].ssrc);
this.emit('requested-ssrcs-update', this.userId, this.audioSSRC, t), this.emit('requested-streams-update', e);
  }
  isDowngradeChangeAllowed(e) {
return !this.throttleDowngradeChanges || void 0 === this.lastDowngradeChangeTime || (e ? Date.now() - this.lastDowngradeChangeTime >= E : Date.now() - this.lastDowngradeChangeTime >= _);
  }
  isOneToOneCall() {
return 1 === this.otherUsers.size;
  }
  getQualityConfig() {
let e = o().minBy(this.videoStreams, e => e.quality),
  t = o().maxBy(this.videoStreams, e => e.quality);
if (void 0 === e || void 0 === t)
  return null;
if (!l.Z.isIncomingVideoEnabled())
  return [
    e.ssrc,
    0,
    t.ssrc,
    0
  ];
if (this.debugQualityOverride === c.Z.LOW)
  return [
    e.ssrc,
    60,
    t.ssrc,
    100
  ];
if (this.debugQualityOverride === c.Z.HIGH || this.isOneToOneCall())
  return [
    t.ssrc,
    100,
    e.ssrc,
    60
  ];
else if (this.downgraded)
  return [
    e.ssrc,
    60,
    t.ssrc,
    100
  ];
else
  return [
    t.ssrc,
    100,
    e.ssrc,
    60
  ];
  }
  constructor(e) {
super(), d(this, 'supportsSeamless', void 0), d(this, 'userId', void 0), d(this, 'videoStreams', void 0), d(this, 'audioSSRC', void 0), d(this, 'downgraded', void 0), d(this, 'debugQualityOverride', void 0), d(this, 'pendingSSRC', void 0), d(this, 'everReceivedFrame', void 0), d(this, 'pendingSSRCReceived', void 0), d(this, 'throttleDowngradeChanges', void 0), d(this, 'lastDowngradeChangeTime', void 0), d(this, 'otherUsers', void 0), this.supportsSeamless = e, this.videoStreams = [], this.audioSSRC = 0, this.downgraded = !1, this.debugQualityOverride = c.Z.NO_OVERRIDE, this.pendingSSRC = -1, this.everReceivedFrame = !1, this.pendingSSRCReceived = !1, this.throttleDowngradeChanges = !0, this.lastDowngradeChangeTime = void 0, this.otherUsers = new Set(), l.Z.subscribe(() => {
  this.update();
});
  }
}