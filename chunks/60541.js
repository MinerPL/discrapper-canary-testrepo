n.d(t, {
  Z: function() {
return l;
  },
  a: function() {
return i.a;
  }
});
var r = n(47770),
  i = n(11934),
  a = n(65154);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let o = 0;
class l extends r.Z {
  destroy() {
this.destroyed = !0, this.setConnectionState(a.$j.DISCONNECTED), this.emit(i.a.Destroy, this), this.removeAllListeners();
  }
  setConnectionState(e) {
this.connectionState = e, this.emit(i.a.ConnectionStateChange, this.connectionState);
  }
  initializeStreamParameters(e) {
this.videoStreamParameters = e.filter(e => e.type === a.Tr.TEST).map(e => {
  var t;
  return {
    type: e.type,
    active: e.active,
    rid: null !== (t = e.rid) && void 0 !== t ? t : '',
    ssrc: e.ssrc
  };
});
  }
  constructor(e) {
super(), s(this, 'mediaEngineConnectionId', 'WebRTC-'.concat(o++)), s(this, 'userId', void 0), s(this, 'streamUserId', void 0), s(this, 'destroyed', !1), s(this, 'audioSSRC', 0), s(this, 'videoStreamParameters', []), s(this, 'connectionState', a.$j.CONNECTING), this.userId = e;
  }
}