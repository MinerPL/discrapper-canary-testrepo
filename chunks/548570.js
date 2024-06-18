"use strict";
n.d(t, {
  Z: function() {
    return W
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041), n(177593);
var i = n(512722),
  r = n.n(i),
  s = n(457854),
  o = n(261470),
  a = n(956067),
  l = n(286379),
  u = n(442837),
  _ = n(544891),
  d = n(570140),
  c = n(317381),
  E = n(406966),
  I = n(795513),
  T = n(266750),
  h = n(250407),
  S = n(710845),
  f = n(797614),
  N = n(218543),
  A = n(857192),
  m = n(626135),
  O = n(12647),
  R = n(70956),
  C = n(358085),
  p = n(960048),
  g = n(138859),
  L = n(14639),
  v = n(639655),
  D = n(610308),
  M = n(91247),
  P = n(508569),
  y = n(183139),
  U = n(420491),
  b = n(645436),
  G = n(833508),
  w = n(981631);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let B = new S.Z("GatewaySocket"),
  x = new D.Z;

function V() {}
let Z = 30 * R.Z.Millis.SECOND,
  H = 3 * R.Z.Millis.MINUTE,
  F = 1 * R.Z.Millis.MINUTE;

function Y(e) {
  return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
}
let j = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class W extends y.Z {
  get connectionState() {
    return this.connectionState_
  }
  set connectionState(e) {
    B.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
  }
  addAnalytics(e) {
    this.analytics = {
      ...this.analytics,
      ...e
    }
  }
  setResumeUrl(e) {
    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && B.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
  }
  _connect() {
    if (!this.willReconnect()) {
      B.verbose("Skipping _connect because willReconnect is false");
      return
    }
    if (b.a()) {
      B.info("Skipping _connect because socket is paused");
      return
    }
    this.connectionState = g.Z.CONNECTING, this.nextReconnectIsImmediate = !1, U.Z.disableFailureTracking();
    let e = this.compressionHandler.getAlgorithm(),
      t = x.getName(),
      n = this._getGatewayUrl(),
      i = window.GLOBAL_ENV.API_VERSION;
    a.Z.mark("\uD83C\uDF10", "Socket._connect"), B.info("[CONNECT] ".concat(n, ", ") + "encoding: ".concat(t, ", ") + "version: ".concat(i, ", ") + "compression: ".concat(null != e ? e : "none")), null !== this.webSocket && (B.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
      let e = Date.now() - this.connectionStartTime;
      this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
    }, Z);
    let r = new URL(n);
    r.searchParams.append("encoding", t), r.searchParams.append("v", i.toString()), null != e && r.searchParams.append("compress", e), ! function(e) {
      let t, {
          gatewayURL: n,
          newCallback: i,
          onOpen: r,
          onMessage: s,
          onError: o,
          onClose: a
        } = e,
        l = window._ws,
        u = !1,
        _ = !1,
        d = null,
        c = null;
      if (window._ws = null, null != l) {
        if (t = l.ws, l.state.gateway !== n) B.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
        else {
          var E;
          let e = {
            ...l.state
          };
          null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
            ...e,
            data: e.data.substring(0, 100)
          } : e)), B.log("[FAST CONNECT] successfully took over websocket, state:", {
            ...e,
            messages: null === (E = e.messages) || void 0 === E ? void 0 : E.length
          }), u = l.state.open, _ = l.state.identify, d = l.state.messages, c = l.state.clientState
        }
      }
      null == t && ((t = (0, G.Z)(n)).binaryType = "arraybuffer"), i(t), u && r(_, c), null != d && d.forEach(s), t.onopen = () => r(_, c), t.onmessage = s, t.onclose = a, t.onerror = o
    }({
      gatewayURL: r.toString(),
      newCallback: e => {
        this.webSocket = e, this.compressionHandler.bindWebSocket(e)
      },
      onOpen: e => {
        a.Z.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e)), U.Z.enableFailureTracking();
        let t = Date.now() - this.connectionStartTime;
        B.info("[CONNECTED] ".concat(r.toString(), " in ").concat(t, " ms")), this.isFastConnect = e, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
      },
      onMessage: function(e, t, n) {
        let i = 0;
        e.dataReady(e => {
          try {
            return n(e, i)
          } finally {
            i = 0
          }
        });
        let r = !1;
        return n => {
          let s = n.data;
          null != n.raw_length ? i += n.raw_length : i += Y(s);
          try {
            e.feed(s)
          } catch (e) {
            throw !r && (r = !0, t(!1, 0, "A decompression error occurred")), e
          }
        }
      }(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
        let n = Date.now(),
          {
            op: i,
            s: r,
            t: s,
            d: o
          } = x.unpack(e);
        if (i !== y.j.DISPATCH && a.Z.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(i, " ").concat(y.j[i])), A.default.isLoggingGatewayEvents) {
          let e = [i];
          i === y.j.DISPATCH && e.push(s), e.push(o), B.verboseDangerously("<~", ...e)
        }
        let l = Date.now() - n;
        switch ("READY" === s ? N.Z.parseReady.set(n, l) : "READY_SUPPLEMENTAL" === s ? N.Z.parseReadySupplemental.set(n, l) : l > 10 && a.Z.mark("\uD83C\uDF10", "Parse " + s, l), null != r && (this.seq = r), i) {
          case y.j.HELLO:
            this._clearHelloTimeout(), this._handleHello(o);
            break;
          case y.j.RECONNECT:
            this._handleReconnect();
            break;
          case y.j.INVALID_SESSION:
            this._handleInvalidSession(o);
            break;
          case y.j.HEARTBEAT:
            this._handleHeartbeatReceive();
            break;
          case y.j.HEARTBEAT_ACK:
            this._handleHeartbeatAck(o);
            break;
          case y.j.DISPATCH:
            this._handleDispatch(o, s, "READY" === s ? {
              compressed_byte_size: t,
              uncompressed_byte_size: Y(e),
              compression_algorithm: this.compressionHandler.getAlgorithm(),
              packing_algorithm: x.getName(),
              unpack_duration_ms: l
            } : null);
            break;
          default:
            B.info("Unhandled op ".concat(i))
        }
        this._sendHeartbeatIfDue()
      }),
      onError: () => {
        this.setResumeUrl(null), O.Z.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
      },
      onClose: e => {
        let {
          wasClean: t,
          code: n,
          reason: i
        } = e;
        return this._handleClose(t, n, i)
      }
    })
  }
  _handleHello(e) {
    let t = this.heartbeatInterval = e.heartbeat_interval,
      n = Date.now() - this.connectionStartTime;
    B.verbose("[HELLO] via ".concat((0, M.TO)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
  }
  _handleReconnect() {
    B.verbose("[RECONNECT] gateway requested I reconnect."), U.Z.disableFailureTracking(), this._cleanup(e => e.close(4e3)), this.connectionState = g.Z.WILL_RECONNECT, this._connect()
  }
  _handleInvalidSession(e) {
    B.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
  }
  _handleDispatch(e, t, n) {
    let i = Date.now() - this.connectionStartTime;
    if ("READY" === t) {
      let t = e.session_id;
      this.sessionId = t;
      let n = (0, M.TO)(e);
      a.Z.setServerTrace(n), B.info("[READY] took ".concat(i, "ms, as ").concat(t)), B.verbose("".concat(n)), this.connectionState = g.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
    } else "READY_SUPPLEMENTAL" === t ? (B.info("[READY_SUPPLEMENTAL] took ".concat(i, "ms")), this.connectionState = g.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (B.verbose((0, M.TO)(e)), this.connectionState = g.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
    this.dispatcher.receiveDispatch(e, t, n)
  }
  handleResumeDispatched() {
    let e = Date.now() - this.connectionStartTime;
    B.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
  }
  handleReadyDispatched() {
    this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0
  }
  _getGatewayUrl() {
    return null != this.resumeUrl ? this.resumeUrl : j
  }
  _handleHeartbeatReceive() {
    this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval))
  }
  _handleHeartbeatAck(e) {
    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, B.verbose("Expedited heartbeat succeeded"))
  }
  _handleHeartbeatTimeout() {
    this._cleanup(e => e.close(4e3)), this.connectionState = g.Z.WILL_RECONNECT;
    let e = this.gatewayBackoff.fail(() => this._connect());
    B.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
  }
  _handleClose(e, t, n) {
    if (e = e || !1, this._cleanup(), this.emit("close", {
        code: t,
        reason: n
      }), 4004 === t) return this.connectionState = g.Z.CLOSED, B.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
    if (this._tryDetectInvalidIOSToken(t, n, e), 0 !== t && c.ZP.getSelfEmbeddedActivities().size > 0) {
      var i;
      let [r, s] = null !== (i = Array.from(c.ZP.getSelfEmbeddedActivities().entries())[0]) && void 0 !== i ? i : [];
      null != r && null != s && (p.Z.addBreadcrumb({
        message: "Gateway close during Activity",
        data: {
          application_id: r,
          channel_id: s.channelId,
          guild_id: s.guildId,
          code: t,
          reason: n,
          was_clean: e
        }
      }), m.default.track(w.rMx.ACTIVITIES_GATEWAY_CLOSED, {
        application_id: r,
        channel_id: s.channelId,
        guild_id: s.guildId,
        code: t,
        reason: n,
        was_clean: e
      }))
    }
    if (this.connectionState = g.Z.WILL_RECONNECT, this.nextReconnectIsImmediate) B.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
    else {
      let i = this.gatewayBackoff.fail(() => this._connect());
      B.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((i / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
    }
  }
  _tryDetectInvalidIOSToken(e, t, n) {
    (0, C.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && _.tn.get({
      url: w.ANM.ME,
      headers: {
        authorization: this.token
      }
    }).then(e => {
      let {
        status: t
      } = e;
      m.default.track(w.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }, e => {
      let {
        status: t
      } = e;
      401 === t && (this.connectionState = g.Z.CLOSED, B.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), m.default.track(w.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
        api_status_code: t
      })
    }))
  }
  _reset(e, t, n) {
    this.sessionId = null, this.seq = 0, B.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
      wasClean: e,
      code: t,
      reason: n
    })
  }
  _sendHeartbeatIfDue() {
    if (null == this.heartbeatInterval || null == this.heartbeater) return;
    let e = this.lastHeartbeatTime;
    null != e && Date.now() - e > this.heartbeatInterval + 5e3 && this._sendHeartbeat()
  }
  _doHeartbeatInterval() {
    this.heartbeatAck ? (this.heartbeatAck = !1, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout()
  }
  _startHeartbeater() {
    let {
      heartbeatInterval: e
    } = this;
    r()(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), this.initialHeartbeatTimeout = setTimeout(() => {
      this.initialHeartbeatTimeout = null, this.heartbeatAck = !0, this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e), this._doHeartbeatInterval()
    }, Math.floor(Math.random() * e))
  }
  _stopHeartbeater() {
    null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
  }
  _clearHelloTimeout() {
    null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
  }
  _cleanup(e) {
    u.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
    let t = this.webSocket;
    this.webSocket = null, null != t && (t.onopen = V, t.onmessage = V, t.onerror = V, t.onclose = V, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = (0, v.I)(x)
  }
  _doResume() {
    var e;
    this.connectionState = g.Z.RESUMING, this.dispatcher.resumeAnalytics = (0, M.zH)(Date.now() - this.connectionStartTime), B.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(y.j.RESUME, {
      token: this.token,
      session_id: this.sessionId,
      seq: this.seq
    }, !1)
  }
  async _doIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) {
      this._handleClose(!0, 4004, "No connection info provided");
      return
    }
    this.connectionState = g.Z.IDENTIFYING;
    let t = Date.now();
    this.identifyStartTime = t;
    let [n, i, r] = await Promise.all([(0, h.O)() ? E.Z.getCommittedVersions() : {}, (0, h.O)() ? T.Z.getCommittedVersions() : {}, !!(0, h.O)() && I.Z.canUseGuildVersions()]), o = r ? {
      guild_versions: n,
      highest_last_message_id: i.highest_last_message_id,
      read_state_version: i.read_state_version,
      user_guild_settings_version: i.user_guild_settings_version,
      user_settings_version: i.user_settings_version,
      private_channels_version: i.private_channels_version,
      api_code_version: i.api_code_version,
      initial_guild_id: i.initial_guild_id
    } : {
      guild_versions: {}
    };
    if (this.connectionState !== g.Z.IDENTIFYING || this.identifyStartTime !== t) {
      B.warn("Skipping identify because connectionState or identifyStartTime has changed");
      return
    }
    let {
      token: a,
      properties: l = {},
      presence: u
    } = e;
    this.token = a, B.verbose("[IDENTIFY]");
    let _ = {
        token: a,
        capabilities: L.Z,
        properties: l,
        presence: u,
        compress: this.compressionHandler.usesLegacyCompression(),
        client_state: o
      },
      d = JSON.stringify(_);
    this.identifyUncompressedByteSize = d.length, this.identifyCompressedByteSize = s.deflate(d).length, this.identifyCount += 1, this.send(y.j.IDENTIFY, _, !1)
  }
  _doFastConnectIdentify() {
    this.seq = 0, this.sessionId = null;
    let e = this.handleIdentify();
    if (null === e) {
      this._handleClose(!0, 4004, "No connection info provided");
      return
    }
    let {
      token: t
    } = e;
    this.token = t, this.connectionState = g.Z.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, B.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
  }
  _doResumeOrIdentify() {
    let e = Date.now();
    null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= H) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
  }
  _updateLastHeartbeatAckTime() {
    this.lastHeartbeatAckTime = Date.now()
  }
  _sendHeartbeat() {
    this.send(y.j.HEARTBEAT, this.seq, !1), this.lastHeartbeatTime = Date.now()
  }
  getLogger() {
    return B
  }
  willReconnect() {
    return this.connectionState === g.Z.WILL_RECONNECT
  }
  isClosed() {
    return this.connectionState === g.Z.CLOSED
  }
  isSessionEstablished() {
    return this.connectionState === g.Z.SESSION_ESTABLISHED || this.connectionState === g.Z.RESUMING
  }
  isConnected() {
    return this.connectionState === g.Z.IDENTIFYING || this.connectionState === g.Z.RESUMING || this.connectionState === g.Z.SESSION_ESTABLISHED
  }
  connect() {
    return this.isClosed() ? (B.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = g.Z.WILL_RECONNECT, this._connect(), !0) : (B.error("Cannot start a new connection, connection state is not closed"), !1)
  }
  resetSocketOnError(e) {
    let {
      action: t,
      error: n,
      metricAction: i
    } = e;
    B.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack), f.Z.increment({
      name: l.V.SOCKET_CRASHED,
      tags: ["action:".concat(null != i ? i : t)]
    }, !0), !1 !== e.sentry && p.Z.captureException(n, {
      tags: {
        socketCrashedAction: t
      }
    }), m.default.track(w.rMx.GATEWAY_SOCKET_RESET, {
      error_message: n.message,
      error_stack: n.stack,
      action: t
    }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = g.Z.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
    let r = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
    0 === this.dispatchExceptionBackoff._fails ? (B.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), r && (this.didForceClearGuildHashes = !0, d.Z.dispatch({
      type: "CLEAR_CACHES",
      reason: "Socket reset during ".concat(t)
    })), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * F)
  }
  resetSocketOnDispatchError(e) {
    let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
    this.resetSocketOnError({
      ...e,
      sentry: !t,
      clearCache: t
    })
  }
  close() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (this.isClosed()) {
      B.verbose("close() called, but socket is already closed.");
      return
    }
    B.info("Closing connection, current state is ".concat(this.connectionState));
    let t = e ? 4e3 : void 0;
    this._cleanup(e => e.close(t)), this.connectionState = g.Z.CLOSED, !e && setImmediate(() => {
      this._reset(!0, 1e3, "Disconnect requested by user")
    })
  }
  networkStateChange(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    this.expeditedHeartbeat(e, t, n, !1)
  }
  expeditedHeartbeat(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (!this.isClosed()) {
      if (this.isConnected()) {
        B.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
          this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
        }, e);
        return
      }
      n ? this.resetBackoff(t, i) : B.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
    }
  }
  resetBackoff() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    B.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== g.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
  }
  constructor() {
    super(), k(this, "gatewayBackoff", void 0), k(this, "handleIdentify", void 0), k(this, "dispatchExceptionBackoff", new o.Z(1e3, F)), k(this, "dispatchSuccessTimer", 0), k(this, "connectionState_", void 0), k(this, "webSocket", void 0), k(this, "seq", void 0), k(this, "sessionId", void 0), k(this, "token", void 0), k(this, "initialHeartbeatTimeout", void 0), k(this, "expeditedHeartbeatTimeout", void 0), k(this, "heartbeatInterval", void 0), k(this, "helloTimeout", void 0), k(this, "heartbeater", void 0), k(this, "lastHeartbeatTime", void 0), k(this, "lastHeartbeatAckTime", void 0), k(this, "heartbeatAck", void 0), k(this, "connectionStartTime", void 0), k(this, "identifyStartTime", void 0), k(this, "nextReconnectIsImmediate", void 0), k(this, "compressionHandler", void 0), k(this, "hasConnectedOnce", void 0), k(this, "isFastConnect", void 0), k(this, "didForceClearGuildHashes", !1), k(this, "identifyUncompressedByteSize", 0), k(this, "identifyCompressedByteSize", 0), k(this, "analytics", {}), k(this, "identifyCount", 0), k(this, "resumeUrl", null), k(this, "iosGoingAwayEventCount", 0), k(this, "dispatcher", void 0), k(this, "send", (e, t, n) => {
      A.default.isLoggingGatewayEvents && B.verboseDangerously("~>", e, t);
      let i = x.pack({
        op: e,
        d: t
      });
      if (!n || this.isSessionEstablished()) try {
        null != this.webSocket ? this.webSocket.send(i) : B.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
      } catch (e) {} else B.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
    }), this.dispatcher = new P.Z(this), this.gatewayBackoff = new o.Z(1e3, 6e4), this.connectionState_ = g.Z.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatTime = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = (0, v.I)(x), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
  }
}