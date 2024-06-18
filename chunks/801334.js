"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(312677), n(411104), n(47120);
var i = n(259443),
  r = n(60541),
  s = n(46973),
  o = n(992774),
  a = n(149396);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = new i.Y("SpeedTester"),
  _ = 0;
class d extends r.Z {
  static create(e, t) {
    let n = new d(e);
    return u.info("Creating connection to ".concat(t.address, ":").concat(t.port, " with audio ssrc: ").concat(t.ssrc)), n.initialize(t), n
  }
  initialize(e) {
    let t;
    this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.pingInterval = a.$B, this.initializeStreamParameters(e.streamParameters), e.streamParameters = this.videoStreamParameters;
    let n = (0, o.zS)();
    t = this.conn = n.createSpeedTestConnectionWithOptions(this.userId, e, (n, i) => {
      if (this.destroyed) return;
      if (null != n && "" !== n) {
        this.setConnectionState(a.$j.NO_ROUTE), this.emit(s.aj.Error, n);
        return
      }
      if (null == i) throw Error("Invalid transport info");
      let {
        protocol: r,
        address: o,
        port: l
      } = i;
      u.info("Connected with local address ".concat(o, ":").concat(l, " and protocol: ").concat(r)), this.codecs = [{
        type: "audio",
        name: a.ad.OPUS,
        priority: 1,
        payloadType: 120
      }, {
        type: "test",
        name: a.ad.TEST,
        priority: 1,
        payloadType: 127
      }], t.getEncryptionModes(n => {
        var i, _;
        u.info("Encryption modes: ".concat(n)), t.setTransportOptions(this.getConnectionTransportOptions()), null === (i = t.setPingInterval) || void 0 === i || i.call(t, this.pingInterval), t.setPingCallback(this.handlePing), null === (_ = t.setPingTimeoutCallback) || void 0 === _ || _.call(t, this.handlePingTimeout), this.setConnectionState(a.$j.CONNECTED), this.emit(s.aj.Connected, r, {
          address: o,
          port: l,
          mode: this.chooseEncryptionMode(e.modes, n),
          codecs: this.codecs
        })
      })
    }), this.on("newListener", this.handleNewListenerNative)
  }
  destroy() {
    this.conn.destroy(), this.setConnectionState(a.$j.DISCONNECTED), super.destroy()
  }
  setCodecs(e, t) {
    this.conn.setTransportOptions(this.getCodecOptions(e, t))
  }
  setEncryption(e, t) {
    this.conn.setTransportOptions({
      encryptionSettings: {
        mode: e,
        secretKey: t
      }
    })
  }
  setSDP(e) {}
  getNetworkOverhead(e) {
    this.conn.getNetworkOverhead(e)
  }
  setPingInterval(e) {
    var t, n;
    this.pingInterval = e, null === (t = (n = this.conn).setPingInterval) || void 0 === t || t.call(n, this.pingInterval)
  }
  startSpeedTestSender(e, t, n, i) {
    null != this.conn.startSpeedTestSender ? this.conn.startSpeedTestSender({
      clusterSize: t,
      clusterIntervalMs: n,
      numClusters: i
    }, e) : this.conn.startClientToServerSpeedTest({
      doneCb: e,
      clusterSize: t,
      clusterIntervalMs: n,
      numClusters: i
    })
  }
  stopSpeedTestSender() {
    null != this.conn.stopSpeedTestSender ? this.conn.stopSpeedTestSender() : this.conn.endClientToServerSpeedTest({})
  }
  startSpeedTestReceiver(e, t) {
    null != this.conn.startSpeedTestReceiver ? this.conn.startSpeedTestReceiver({
      packetLimit: t
    }, e) : this.conn.startServerToClientSpeedTest({
      readyCb: e,
      packetLimit: t
    })
  }
  stopSpeedTestReceiver(e) {
    null != this.conn.stopSpeedTestReceiver ? this.conn.stopSpeedTestReceiver(e) : this.conn.endServerToClientSpeedTest({
      doneCb: e
    })
  }
  chooseEncryptionMode(e, t) {
    for (let n of t)
      for (let t of e)
        if (n === t) return n;
    return "xsalsa20_poly1305"
  }
  getConnectionTransportOptions() {
    return {
      qos: this.qos,
      reconnectInterval: this.reconnectInterval
    }
  }
  getCodecOptions(e, t) {
    var n, i, r, s;
    let o;
    let a = {
        type: null !== (n = null == (o = this.codecs.find(t => t.name === e)) ? void 0 : o.payloadType) && void 0 !== n ? n : 0,
        name: e,
        freq: 48e3,
        pacsize: 960,
        channels: 1,
        rate: 64e3
      },
      l = [{
        type: null !== (i = null == o ? void 0 : o.payloadType) && void 0 !== i ? i : 0,
        name: e,
        freq: 48e3,
        channels: 2,
        params: {
          stereo: "1"
        }
      }],
      u = {
        type: null !== (r = null == (o = this.codecs.find(e => e.name === t)) ? void 0 : o.payloadType) && void 0 !== r ? r : 0
      };
    return {
      audioEncoder: a,
      audioDecoders: l,
      testEncoder: u,
      testDecoder: {
        type: null !== (s = null == o ? void 0 : o.payloadType) && void 0 !== s ? s : 0
      }
    }
  }
  getUserIdBySsrc(e) {}
  constructor(...e) {
    super(...e), l(this, "mediaEngineConnectionId", "Native-".concat(_++)), l(this, "codecs", []), l(this, "qos", !0), l(this, "conn", void 0), l(this, "reconnectInterval", 6e4), l(this, "pingInterval", a.$B), l(this, "handlePing", (e, t, n) => {
      this.emit(s.aj.Ping, e)
    }), l(this, "handlePingTimeout", (e, t, n, i) => {
      this.emit(s.aj.PingTimeout, n, i > 0 ? i : 4e3)
    }), l(this, "handleNewListenerNative", e => {
      if (e === s.aj.ConnectionStateChange) this.emit(e, this.connectionState)
    })
  }
}