"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("411104"), s("757143");
var a, n = s("654861"),
  l = s.n(n),
  i = s("836560"),
  r = s("729594"),
  o = s("153832"),
  d = s("261470"),
  u = s("46973"),
  c = s("685756"),
  S = s("710845"),
  E = s("131951"),
  T = s("70956"),
  f = s("358085"),
  m = s("399002"),
  _ = s("369541"),
  g = s("981631"),
  h = s("65154");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let N = /^https/.test((a = "https:", "https:")) ? "wss:" : "ws:";
class p extends i.EventEmitter {
  connect() {
    this._backoff.cancel();
    let e = this._socket = new c.default(this._endpoint);
    e.on(c.SocketEvent.Connecting, this._handleConnecting.bind(this, e)), e.on(c.SocketEvent.Connect, this._handleConnect.bind(this, e)), e.on(c.SocketEvent.Disconnect, this._handleDisconnect.bind(this, e)), e.on(c.SocketEvent.Resuming, this._handleResuming.bind(this, e)), e.on(c.SocketEvent.Ready, this._handleReady.bind(this, e)), e.on(c.SocketEvent.Speaking, this._handleSpeaking.bind(this, e)), e.on(c.SocketEvent.Video, this._handleVideo.bind(this, e)), e.on(c.SocketEvent.Ping, this._handleControlPing.bind(this)), e.on(c.SocketEvent.ClientDisconnect, this._handleClientDisconnect.bind(this)), e.on(c.SocketEvent.Codecs, this._handleCodecs.bind(this)), e.on(c.SocketEvent.MediaSessionId, this._handleMediaSessionId.bind(this)), e.on(c.SocketEvent.MediaSinkWants, this._handleMediaSinkWants.bind(this)), e.on(c.SocketEvent.VoiceBackendVersion, this._handleCodeVersion.bind(this)), e.on(c.SocketEvent.KeyframeInterval, this._handleKeyframeInterval.bind(this)), e.on(c.SocketEvent.SpeedTest, this._handleSpeedTest.bind(this)), e.setHeartbeatIntervalModifier(2), e.connect()
  }
  destroy() {
    if (this._backoff.cancel(), this._cleanupSocket(), null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.removeAllListeners(), this._destroyed = !0
  }
  _cleanupSocket() {
    let e = this._socket;
    null != e && (e.close(), e.removeAllListeners(), this._socket = null)
  }
  setState(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)), this.state = e, this.emit("state", e, {
      hostname: this.hostname,
      channelId: l()(this.rtcServerId).prev().toString()
    }, t)
  }
  startClientToServerSpeedTest(e) {
    this.state === g.RTCConnectionStates.RTC_CONNECTED && (this._speedTestParams = e, this._speedTestDirection = _.SpeedTestDirections.CLIENT_TO_SERVER, this._setSpeedTestState(_.SpeedTestStates.STARTING_RECEIVER), this._speedTest(_.SpeedTestOpcodes.CLIENT_TO_SERVER_START, {}))
  }
  startServerToClientSpeedTest(e) {
    let t = this._connection;
    this.state === g.RTCConnectionStates.RTC_CONNECTED && null != t && (this._speedTestParams = e, this._speedTestDirection = _.SpeedTestDirections.SERVER_TO_CLIENT, this._setSpeedTestState(_.SpeedTestStates.STARTING_RECEIVER), t.startSpeedTestReceiver(() => {
      var e, t, s;
      this._setSpeedTestState(_.SpeedTestStates.SENDING), this._speedTest(_.SpeedTestOpcodes.SERVER_TO_CLIENT_START, {
        cluster_size: null === (e = this._speedTestParams) || void 0 === e ? void 0 : e.clusterSize,
        cluster_interval_ms: null === (t = this._speedTestParams) || void 0 === t ? void 0 : t.clusterIntervalMs,
        num_clusters: null === (s = this._speedTestParams) || void 0 === s ? void 0 : s.numClusters
      })
    }, -1))
  }
  stopClientToServerSpeedTest() {
    this._speedTest(_.SpeedTestOpcodes.CLIENT_TO_SERVER_END, {}), null != this._connection && this._connection.stopSpeedTestSender()
  }
  stopServerToClientSpeedTest() {
    this._speedTest(_.SpeedTestOpcodes.SERVER_TO_CLIENT_END, {}), null != this._connection && this._connection.stopSpeedTestReceiver(() => {})
  }
  getNetworkOverhead() {
    return this._networkOverhead
  }
  setPingInterval(e) {
    null != this._connection && this._connection.setPingInterval(e)
  }
  _setSpeedTestState(e) {
    this._speedTestState = e, this.emit("speed-test-state", e)
  }
  _completeSpeedTests(e, t) {
    this._speedTestState = _.SpeedTestStates.COMPLETED, this.emit("speed-test-completed", e, t)
  }
  _speedTest(e, t) {
    let s = this._socket;
    null != s && s.speedTest(e, t)
  }
  _handleConnecting(e) {
    null != this._endpoint && this.logger.info("Connecting to RTC server ".concat(this._endpoint, ", rtc-connection-id: ").concat(this._rtcConnectionId)), this.setState(g.RTCConnectionStates.CONNECTING)
  }
  _handleConnect(e) {
    let t = this.token;
    if (null == t) throw Error("RTCConnection._handleConnect(...): Token is missing.");
    {
      this.logger.info("Connected to RTC server.");
      let s = [{
        rid: "100",
        type: h.MediaTypes.TEST,
        quality: 100
      }];
      e.identify({
        serverId: this.rtcServerId,
        userId: this.userId,
        sessionId: this.sessionId,
        token: t,
        maxSecureFramesVersion: E.default.getSupportedSecureFramesProtocolVersion(this.rtcServerId),
        video: !1,
        streamParameters: s
      }), this.setState(g.RTCConnectionStates.AUTHENTICATING)
    }
  }
  _handleDisconnect(e, t, s, a) {
    this.logger.info("Disconnected from RTC server, clean: ".concat(t, ", code: ").concat(s, ", reason: ").concat(a, ", state: ").concat(this.state));
    let n = "Force Close" !== a;
    if (n) {
      let e = this._backoff.fail(this.reconnect);
      this.logger.warn("Disconnect was not clean! reason=".concat(a, ". Reconnecting in ").concat((e / 1e3).toFixed(2), " seconds."))
    }
    if (null != this._connection) {
      let e = this._connection;
      this._connection = null, e.destroy()
    }
    this.setState(g.RTCConnectionStates.DISCONNECTED, {
      willReconnect: n
    })
  }
  _handleResuming(e) {
    this.emit("resuming")
  }
  _handleReady(e, t, s, a, n, l, i) {
    this.setState(g.RTCConnectionStates.RTC_CONNECTING), this.mediaEnginePort = s, this.mediaEngineAddress = t;
    let r = E.default.getMediaEngine().speedTester(this.userId, {
      ssrc: n,
      address: t,
      port: s,
      modes: a,
      experiments: [],
      streamParameters: l,
      qosEnabled: E.default.getQoS()
    });
    r.on(u.BaseSpeedTesterEvent.Connected, this._handleMediaEngineConnected.bind(this, e, r)), r.on(u.BaseSpeedTesterEvent.Error, this._handleMediaEngineError.bind(this, e, r)), r.on(u.BaseSpeedTesterEvent.ConnectionStateChange, this._handleMediaEngineConnectionStateChange.bind(this, e, r)), r.on(u.BaseSpeedTesterEvent.Ping, this._handleMediaEnginePing.bind(this, e)), r.on(u.BaseSpeedTesterEvent.PingTimeout, this._handleMediaEnginePingTimeout.bind(this, e)), this._connection = r
  }
  _handleSpeaking(e, t, s, a) {}
  _handleVideo(e, t, s, a, n) {}
  _handleControlPing(e) {}
  _handleClientDisconnect(e) {}
  _handleCodecs(e, t) {
    let s = this._connection;
    null != s && null != this.protocol ? (s.setCodecs(null != e && "" !== e ? e : h.Codecs.OPUS, "TEST"), this.emit("ready")) : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol)
  }
  _handleSpeedTest(e, t) {
    let s = this._connection;
    if (null != s && null != e) {
      if (this._speedTestState === _.SpeedTestStates.STARTING_RECEIVER && this._speedTestDirection === _.SpeedTestDirections.CLIENT_TO_SERVER && e === _.SpeedTestOpcodes.CLIENT_TO_SERVER_START) {
        var a;
        this._setSpeedTestState(_.SpeedTestStates.SENDING), s.startSpeedTestSender((e, t) => {
          this._speedTest(_.SpeedTestOpcodes.CLIENT_TO_SERVER_END, {}), this._setSpeedTestState(_.SpeedTestStates.AWAITING_RESULTS)
        }, this._speedTestParams.clusterSize, this._speedTestParams.clusterIntervalMs, this._speedTestParams.numClusters)
      }
      if (this._speedTestState === _.SpeedTestStates.AWAITING_RESULTS && this._speedTestDirection === _.SpeedTestDirections.CLIENT_TO_SERVER && e === _.SpeedTestOpcodes.CLIENT_TO_SERVER_END) {
        let e = t.results,
          s = (0, m.speedTestSummary)(e, this._speedTestParams, null !== (a = this._networkOverhead) && void 0 !== a ? a : 0);
        this._speedTestDirection = null, this._speedTestParams = null, this._completeSpeedTests(e, s)
      }
      this._speedTestState === _.SpeedTestStates.SENDING && this._speedTestDirection === _.SpeedTestDirections.SERVER_TO_CLIENT && e === _.SpeedTestOpcodes.SERVER_TO_CLIENT_END && (this._setSpeedTestState(_.SpeedTestStates.AWAITING_RESULTS), s.stopSpeedTestReceiver((e, t) => {
        var s;
        let a = (0, m.speedTestSummary)(t, this._speedTestParams, null !== (s = this._networkOverhead) && void 0 !== s ? s : 0);
        this._speedTestDirection = null, this._speedTestParams = null, this._completeSpeedTests(t, a)
      }))
    }
  }
  _handleMediaSessionId(e) {}
  _handleMediaSinkWants(e) {}
  _handleCodeVersion(e, t) {}
  _handleKeyframeInterval(e) {}
  _handleMediaEngineConnected(e, t, s, a) {
    if (this.logger.info("RTC connected to media server: ".concat(this.mediaEngineAddress, ":").concat(this.mediaEnginePort)), e !== this._socket) {
      this.logger.warn("Socket mismatch, disconnecting");
      return
    }
    switch (this.protocol = s, s) {
      case "udp":
        this.logger.info("Sending UDP info to RTC server.", a, []), e.once(c.SocketEvent.Encryption, (e, s) => {
          t === this._connection && (t.setEncryption(e, s), t.getNetworkOverhead(e => this._networkOverhead = e))
        }), e.selectProtocol(s, this._rtcConnectionId, a, []);
        break;
      case "webrtc":
        this.logger.info("Sending local SDP to RTC server."), e.once(c.SocketEvent.SDP, this._handleSDP.bind(this)), e.selectProtocol(s, this._rtcConnectionId, a);
        break;
      default:
        this.logger.error("Unable to determine protocol.");
        return
    }
    this._backoff.succeed()
  }
  _handleMediaEngineError(e, t, s) {
    e === this._socket && this.logger.error("Error occurred while connecting to RTC server: ".concat(s))
  }
  _handleMediaEngineConnectionStateChange(e, t, s) {
    if (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(s)), e !== this._socket) return;
    let a = this.state;
    switch (s) {
      case h.ConnectionStates.DISCONNECTED:
        this.setState(g.RTCConnectionStates.RTC_DISCONNECTED);
        break;
      case h.ConnectionStates.CONNECTING:
        this.setState(g.RTCConnectionStates.RTC_CONNECTING);
        break;
      case h.ConnectionStates.CONNECTED:
        this.setState(g.RTCConnectionStates.RTC_CONNECTED);
        break;
      case h.ConnectionStates.NO_ROUTE:
        this.setState(g.RTCConnectionStates.NO_ROUTE);
        break;
      case h.ConnectionStates.ICE_CHECKING:
        this.setState(g.RTCConnectionStates.ICE_CHECKING);
        break;
      case h.ConnectionStates.DTLS_CONNECTING:
        this.setState(g.RTCConnectionStates.DTLS_CONNECTING)
    }
    a === g.RTCConnectionStates.RTC_CONNECTING && this.state === g.RTCConnectionStates.RTC_DISCONNECTED ? this.reconnect() : this.state === g.RTCConnectionStates.NO_ROUTE && this._backoff.fail(this.reconnect)
  }
  _handleMediaEnginePing(e, t) {
    this.emit("ping", t)
  }
  _handleMediaEnginePingTimeout(e, t, s) {
    this.emit("ping-timeout", s)
  }
  _handleSDP(e) {
    let t = this._connection;
    null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol)
  }
  constructor({
    userId: e,
    sessionId: t,
    rtcServerId: s,
    endpoint: a,
    token: n
  }) {
    super(), I(this, "userId", void 0), I(this, "sessionId", void 0), I(this, "rtcServerId", void 0), I(this, "_endpoint", void 0), I(this, "hostname", void 0), I(this, "mediaEnginePort", void 0), I(this, "mediaEngineAddress", void 0), I(this, "token", void 0), I(this, "protocol", void 0), I(this, "state", void 0), I(this, "_socket", void 0), I(this, "_connection", void 0), I(this, "_destroyed", void 0), I(this, "_speedTestState", void 0), I(this, "_speedTestDirection", void 0), I(this, "_speedTestParams", void 0), I(this, "_rtcConnectionId", void 0), I(this, "_backoff", void 0), I(this, "logger", void 0), I(this, "_networkOverhead", void 0), I(this, "reconnect", () => {
      let e = this._socket;
      null != e && (e.close(), e.connect())
    }), this._rtcConnectionId = (0, o.v4)(), this.logger = new S.default("RTCSpeedTestRTCConnection(".concat(s, ")")), this.userId = e, this.sessionId = t, this.rtcServerId = s, this.mediaEnginePort = null, this.mediaEngineAddress = null, this._speedTestState = null, this._speedTestDirection = null, this._speedTestParams = null, this.state = g.RTCConnectionStates.AWAITING_ENDPOINT, this._socket = null, this.token = n, this._destroyed = !1, this._connection = null, this._backoff = new d.default(1 * T.default.Millis.SECOND, 10 * T.default.Millis.SECOND), a = "".concat(N, "//").concat(a), (0, f.isAndroid)() && (a = (a = a.replace(".gg", ".media")).replace(":80", ":443"));
    let {
      hostname: l,
      port: i
    } = r.parse(a), u = null != i ? parseInt(i) : NaN;
    null != l && (80 === u || 443 === u) && (a = "".concat(N, "//").concat(l)), this._endpoint = a + "/", this.hostname = l, this._networkOverhead = null
  }
}