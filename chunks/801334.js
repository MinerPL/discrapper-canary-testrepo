n.d(t, {
  Z: function() {
return d;
  }
}), n(312677), n(411104), n(47120);
var r = n(259443),
  i = n(60541),
  a = n(46973),
  s = n(992774),
  o = n(149396);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let u = new r.Y('SpeedTester'),
  c = 0;
class d extends i.Z {
  static create(e, t) {
let n = new d(e);
return u.info('Creating connection to '.concat(t.address, ':').concat(t.port, ' with audio ssrc: ').concat(t.ssrc)), n.initialize(t), n;
  }
  initialize(e) {
let t;
this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.pingInterval = o.$B, this.initializeStreamParameters(e.streamParameters), e.streamParameters = this.videoStreamParameters;
let n = (0, s.zS)();
t = this.conn = n.createSpeedTestConnectionWithOptions(this.userId, e, (n, r) => {
  if (this.destroyed)
    return;
  if (null != n && '' !== n) {
    this.setConnectionState(o.$j.NO_ROUTE), this.emit(a.aj.Error, n);
    return;
  }
  if (null == r)
    throw Error('Invalid transport info');
  let {
    protocol: i,
    address: s,
    port: l
  } = r;
  u.info('Connected with local address '.concat(s, ':').concat(l, ' and protocol: ').concat(i)), this.codecs = [{
      type: 'audio',
      name: o.ad.OPUS,
      priority: 1,
      payloadType: 120
    },
    {
      type: 'test',
      name: o.ad.TEST,
      priority: 1,
      payloadType: 127
    }
  ], t.getEncryptionModes(n => {
    var r, c;
    u.info('Encryption modes: '.concat(n)), t.setTransportOptions(this.getConnectionTransportOptions()), null === (r = t.setPingInterval) || void 0 === r || r.call(t, this.pingInterval), t.setPingCallback(this.handlePing), null === (c = t.setPingTimeoutCallback) || void 0 === c || c.call(t, this.handlePingTimeout), this.setConnectionState(o.$j.CONNECTED), this.emit(a.aj.Connected, i, {
      address: s,
      port: l,
      mode: this.chooseEncryptionMode(e.modes, n),
      codecs: this.codecs
    });
  });
}), this.on('newListener', this.handleNewListenerNative);
  }
  destroy() {
this.conn.destroy(), this.setConnectionState(o.$j.DISCONNECTED), super.destroy();
  }
  setCodecs(e, t) {
this.conn.setTransportOptions(this.getCodecOptions(e, t));
  }
  setEncryption(e, t) {
this.conn.setTransportOptions({
  encryptionSettings: {
    mode: e,
    secretKey: t
  }
});
  }
  setSDP(e) {}
  getNetworkOverhead(e) {
this.conn.getNetworkOverhead(e);
  }
  setPingInterval(e) {
var t, n;
this.pingInterval = e, null === (t = (n = this.conn).setPingInterval) || void 0 === t || t.call(n, this.pingInterval);
  }
  startSpeedTestSender(e, t, n, r) {
null != this.conn.startSpeedTestSender ? this.conn.startSpeedTestSender({
  clusterSize: t,
  clusterIntervalMs: n,
  numClusters: r
}, e) : this.conn.startClientToServerSpeedTest({
  doneCb: e,
  clusterSize: t,
  clusterIntervalMs: n,
  numClusters: r
});
  }
  stopSpeedTestSender() {
null != this.conn.stopSpeedTestSender ? this.conn.stopSpeedTestSender() : this.conn.endClientToServerSpeedTest({});
  }
  startSpeedTestReceiver(e, t) {
null != this.conn.startSpeedTestReceiver ? this.conn.startSpeedTestReceiver({
  packetLimit: t
}, e) : this.conn.startServerToClientSpeedTest({
  readyCb: e,
  packetLimit: t
});
  }
  stopSpeedTestReceiver(e) {
null != this.conn.stopSpeedTestReceiver ? this.conn.stopSpeedTestReceiver(e) : this.conn.endServerToClientSpeedTest({
  doneCb: e
});
  }
  chooseEncryptionMode(e, t) {
for (let n of t)
  for (let t of e)
    if (n === t)
      return n;
return 'xsalsa20_poly1305';
  }
  getConnectionTransportOptions() {
return {
  qos: this.qos,
  reconnectInterval: this.reconnectInterval
};
  }
  getCodecOptions(e, t) {
var n, r, i, a;
let s;
let o = {
    type: null !== (n = null == (s = this.codecs.find(t => t.name === e)) ? void 0 : s.payloadType) && void 0 !== n ? n : 0,
    name: e,
    freq: 48000,
    pacsize: 960,
    channels: 1,
    rate: 64000
  },
  l = [{
    type: null !== (r = null == s ? void 0 : s.payloadType) && void 0 !== r ? r : 0,
    name: e,
    freq: 48000,
    channels: 2,
    params: {
      stereo: '1'
    }
  }],
  u = {
    type: null !== (i = null == (s = this.codecs.find(e => e.name === t)) ? void 0 : s.payloadType) && void 0 !== i ? i : 0
  };
return {
  audioEncoder: o,
  audioDecoders: l,
  testEncoder: u,
  testDecoder: {
    type: null !== (a = null == s ? void 0 : s.payloadType) && void 0 !== a ? a : 0
  }
};
  }
  getUserIdBySsrc(e) {}
  constructor(...e) {
super(...e), l(this, 'mediaEngineConnectionId', 'Native-'.concat(c++)), l(this, 'codecs', []), l(this, 'qos', !0), l(this, 'conn', void 0), l(this, 'reconnectInterval', 60000), l(this, 'pingInterval', o.$B), l(this, 'handlePing', (e, t, n) => {
  this.emit(a.aj.Ping, e);
}), l(this, 'handlePingTimeout', (e, t, n, r) => {
  this.emit(a.aj.PingTimeout, n, r > 0 ? r : 4000);
}), l(this, 'handleNewListenerNative', e => {
  if (e === a.aj.ConnectionStateChange)
    this.emit(e, this.connectionState);
});
  }
}