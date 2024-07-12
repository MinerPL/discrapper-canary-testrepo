n.d(t, {
  Z: function() {
return j;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(653041), n(177593);
var r = n(512722),
  i = n.n(r),
  a = n(457854),
  o = n(261470),
  s = n(956067),
  l = n(286379),
  u = n(442837),
  c = n(544891),
  d = n(570140),
  _ = n(406966),
  E = n(795513),
  f = n(266750),
  h = n(250407),
  p = n(710845),
  m = n(797614),
  I = n(218543),
  T = n(857192),
  g = n(626135),
  S = n(12647),
  A = n(70956),
  N = n(358085),
  v = n(960048),
  O = n(138859),
  R = n(14639),
  C = n(639655),
  y = n(610308),
  D = n(91247),
  L = n(508569),
  b = n(183139),
  M = n(420491),
  P = n(645436),
  U = n(833508),
  w = n(981631);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let G = new p.Z('GatewaySocket'),
  k = new y.Z();

function B() {}
let F = 30 * A.Z.Millis.SECOND,
  V = 3 * A.Z.Millis.MINUTE,
  H = 1 * A.Z.Millis.MINUTE;

function Z(e) {
  return null == e ? 0 : 'string' == typeof e ? e.length : e.byteLength;
}
let Y = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class j extends b.Z {
  get connectionState() {
return this.connectionState_;
  }
  set connectionState(e) {
G.verbose('Setting connection state to '.concat(e)), this.connectionState_ = e;
  }
  addAnalytics(e) {
this.analytics = {
  ...this.analytics,
  ...e
};
  }
  setResumeUrl(e) {
null != e && e.endsWith('/') && (e = e.substring(0, e.length - 1)), null !== e && G.verbose('Updating resume url to '.concat(e)), this.resumeUrl = e;
  }
  _connect() {
if (!this.willReconnect()) {
  G.verbose('Skipping _connect because willReconnect is false');
  return;
}
if (P.a()) {
  G.info('Skipping _connect because socket is paused');
  return;
}
this.connectionState = O.Z.CONNECTING, this.nextReconnectIsImmediate = !1, M.Z.disableFailureTracking();
let e = this.compressionHandler.getAlgorithm(),
  t = k.getName(),
  n = this._getGatewayUrl(),
  r = window.GLOBAL_ENV.API_VERSION;
s.Z.mark('\uD83C\uDF10', 'Socket._connect'), G.info('[CONNECT] '.concat(n, ', ') + 'encoding: '.concat(t, ', ') + 'version: '.concat(r, ', ') + 'compression: '.concat(null != e ? e : 'none')), null !== this.webSocket && (G.error('_connect called with already existing websocket'), this._cleanup(e => e.close(4000))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
  let e = Date.now() - this.connectionStartTime;
  this._handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.')), this.setResumeUrl(null);
}, F);
let i = new URL(n);
i.searchParams.append('encoding', t), i.searchParams.append('v', r.toString()), null != e && i.searchParams.append('compress', e), ! function(e) {
  let t, {
      gatewayURL: n,
      newCallback: r,
      onOpen: i,
      onMessage: a,
      onError: o,
      onClose: s
    } = e,
    l = window._ws,
    u = !1,
    c = !1,
    d = null,
    _ = null;
  if (window._ws = null, null != l) {
    if (t = l.ws, l.state.gateway !== n)
      G.verbose('[FAST CONNECT] gatewayURL mismatch: '.concat(l.state.gateway, ' !== ').concat(n)), t.close(1000), t = null;
    else {
      var E;
      let e = {
        ...l.state
      };
      null != e.messages && (e.messages = e.messages.map(e => null != e.data && 'string' == typeof e.data ? {
        ...e,
        data: e.data.substring(0, 100)
      } : e)), G.log('[FAST CONNECT] successfully took over websocket, state:', {
        ...e,
        messages: null === (E = e.messages) || void 0 === E ? void 0 : E.length
      }), u = l.state.open, c = l.state.identify, d = l.state.messages, _ = l.state.clientState;
    }
  }
  null == t && ((t = (0, U.Z)(n)).binaryType = 'arraybuffer'), r(t), u && i(c, _), null != d && d.forEach(a), t.onopen = () => i(c, _), t.onmessage = a, t.onclose = s, t.onerror = o;
}({
  gatewayURL: i.toString(),
  newCallback: e => {
    this.webSocket = e, this.compressionHandler.bindWebSocket(e);
  },
  onOpen: e => {
    s.Z.mark('\uD83C\uDF10', 'GatewaySocket.onOpen '.concat(e)), M.Z.enableFailureTracking();
    let t = Date.now() - this.connectionStartTime;
    G.info('[CONNECTED] '.concat(i.toString(), ' in ').concat(t, ' ms')), this.isFastConnect = e, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
  },
  onMessage: function(e, t, n) {
    let r = 0;
    e.dataReady(e => {
      try {
        return n(e, r);
      } finally {
        r = 0;
      }
    });
    let i = !1;
    return n => {
      let a = n.data;
      null != n.raw_length ? r += n.raw_length : r += Z(a);
      try {
        e.feed(a);
      } catch (e) {
        throw !i && (i = !0, t(!1, 0, 'A decompression error occurred')), e;
      }
    };
  }(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
    let n = Date.now(),
      {
        op: r,
        s: i,
        t: a,
        d: o
      } = k.unpack(e);
    if (r !== b.j.DISPATCH && s.Z.mark('\uD83C\uDF10', 'GatewaySocket.onMessage '.concat(r, ' ').concat(b.j[r])), T.default.isLoggingGatewayEvents) {
      let e = [r];
      r === b.j.DISPATCH && e.push(a), e.push(o), G.verboseDangerously('<~', ...e);
    }
    let l = Date.now() - n;
    switch ('READY' === a ? I.Z.parseReady.set(n, l) : 'READY_SUPPLEMENTAL' === a ? I.Z.parseReadySupplemental.set(n, l) : l > 10 && s.Z.mark('\uD83C\uDF10', 'Parse ' + a, l), null != i && (this.seq = i), r) {
      case b.j.HELLO:
        this._clearHelloTimeout(), this._handleHello(o);
        break;
      case b.j.RECONNECT:
        this._handleReconnect();
        break;
      case b.j.INVALID_SESSION:
        this._handleInvalidSession(o);
        break;
      case b.j.HEARTBEAT:
        this._handleHeartbeatReceive();
        break;
      case b.j.HEARTBEAT_ACK:
        this._handleHeartbeatAck(o);
        break;
      case b.j.DISPATCH:
        this._handleDispatch(o, a, 'READY' === a ? {
          compressed_byte_size: t,
          uncompressed_byte_size: Z(e),
          compression_algorithm: this.compressionHandler.getAlgorithm(),
          packing_algorithm: k.getName(),
          unpack_duration_ms: l
        } : null);
        break;
      default:
        G.info('Unhandled op '.concat(r));
    }
    this._sendHeartbeatIfDue();
  }),
  onError: () => {
    this.setResumeUrl(null), S.Z.flushDNSCache(), this._handleClose(!1, 0, 'An error with the websocket occurred');
  },
  onClose: e => {
    let {
      wasClean: t,
      code: n,
      reason: r
    } = e;
    return this._handleClose(t, n, r);
  }
});
  }
  _handleHello(e) {
let t = this.heartbeatInterval = e.heartbeat_interval,
  n = Date.now() - this.connectionStartTime;
G.verbose('[HELLO] via '.concat((0, D.TO)(e), ', ') + 'heartbeat interval: '.concat(t, ', ') + 'took '.concat(n, ' ms')), this._startHeartbeater();
  }
  _handleReconnect() {
G.verbose('[RECONNECT] gateway requested I reconnect.'), M.Z.disableFailureTracking(), this._cleanup(e => e.close(4000)), this.connectionState = O.Z.WILL_RECONNECT, this._connect();
  }
  _handleInvalidSession(e) {
G.info('[INVALID_SESSION]'.concat(e ? ' can resume)' : '')), e ? this._doResumeOrIdentify() : this._doIdentify();
  }
  _handleDispatch(e, t, n) {
let r = Date.now() - this.connectionStartTime;
if ('READY' === t) {
  let t = e.session_id;
  this.sessionId = t;
  let n = (0, D.TO)(e);
  s.Z.setServerTrace(n), G.info('[READY] took '.concat(r, 'ms, as ').concat(t)), G.verbose(''.concat(n)), this.connectionState = O.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url);
} else
  'READY_SUPPLEMENTAL' === t ? (G.info('[READY_SUPPLEMENTAL] took '.concat(r, 'ms')), this.connectionState = O.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : 'RESUMED' === t && (G.verbose((0, D.TO)(e)), this.connectionState = O.Z.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
this.dispatcher.receiveDispatch(e, t, n);
  }
  handleResumeDispatched() {
let e = Date.now() - this.connectionStartTime;
G.info('[RESUMED] took '.concat(e, 'ms, replayed ').concat(this.dispatcher.resumeAnalytics.numEvents, ' events, new seq: ').concat(this.seq));
  }
  handleReadyDispatched() {
this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0;
  }
  _getGatewayUrl() {
return null != this.resumeUrl ? this.resumeUrl : Y;
  }
  _handleHeartbeatReceive() {
this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval));
  }
  _handleHeartbeatAck(e) {
this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, G.verbose('Expedited heartbeat succeeded'));
  }
  _handleHeartbeatTimeout() {
this._cleanup(e => e.close(4000)), this.connectionState = O.Z.WILL_RECONNECT;
let e = this.gatewayBackoff.fail(() => this._connect());
G.warn('[ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
  }
  _handleClose(e, t, n) {
if (e = e || !1, this._cleanup(), this.emit('close', {
    code: t,
    reason: n
  }), 4004 === t)
  return this.connectionState = O.Z.CLOSED, G.warn('[WS CLOSED] because of authentication failure, marking as closed.'), this._reset(e, t, n);
if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = O.Z.WILL_RECONNECT, this.nextReconnectIsImmediate)
  G.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ') retrying immediately.')), this._connect();
else {
  let r = this.gatewayBackoff.fail(() => this._connect());
  G.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ') retrying in ').concat((r / 1000).toFixed(2), ' seconds.')), this.gatewayBackoff.fails > 4 && this._reset(e, t, n);
}
  }
  _tryDetectInvalidIOSToken(e, t, n) {
(0, N.isIOS)() && null != this.token && 1001 === e && 'Stream end encountered' === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && c.tn.get({
  url: w.ANM.ME,
  headers: {
    authorization: this.token
  }
}).then(e => {
  let {
    status: t
  } = e;
  g.default.track(w.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
    api_status_code: t
  });
}, e => {
  let {
    status: t
  } = e;
  401 === t && (this.connectionState = O.Z.CLOSED, G.warn('[WS CLOSED] because of manual authentication failure, marking as closed.'), this._reset(n, 4004, 'invalid token manually detected')), g.default.track(w.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
    api_status_code: t
  });
}));
  }
  _reset(e, t, n) {
this.sessionId = null, this.seq = 0, G.warn('[RESET] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')), this.emit('disconnect', {
  wasClean: e,
  code: t,
  reason: n
});
  }
  _sendHeartbeatIfDue() {
if (null == this.heartbeatInterval || null == this.heartbeater)
  return;
let e = this.lastHeartbeatTime;
null != e && Date.now() - e > this.heartbeatInterval + 5000 && this._sendHeartbeat();
  }
  _doHeartbeatInterval() {
this.heartbeatAck ? (this.heartbeatAck = !1, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout();
  }
  _startHeartbeater() {
let {
  heartbeatInterval: e
} = this;
i()(null != e, 'GatewaySocket: Heartbeat interval should never null here.'), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), this.initialHeartbeatTimeout = setTimeout(() => {
  this.initialHeartbeatTimeout = null, this.heartbeatAck = !0, this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e), this._doHeartbeatInterval();
}, Math.floor(Math.random() * e));
  }
  _stopHeartbeater() {
null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null);
  }
  _clearHelloTimeout() {
null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null);
  }
  _cleanup(e) {
u.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
let t = this.webSocket;
this.webSocket = null, null != t && (t.onopen = B, t.onmessage = B, t.onerror = B, t.onclose = B, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = (0, C.I)(k);
  }
  _doResume() {
var e;
this.connectionState = O.Z.RESUMING, this.dispatcher.resumeAnalytics = (0, D.zH)(Date.now() - this.connectionStartTime), G.info('[RESUME] resuming session '.concat(null !== (e = this.sessionId) && void 0 !== e ? e : '', ', seq: ').concat(this.seq)), this.send(b.j.RESUME, {
  token: this.token,
  session_id: this.sessionId,
  seq: this.seq
}, !1);
  }
  async _doIdentify() {
this.seq = 0, this.sessionId = null;
let e = this.handleIdentify();
if (null === e) {
  this._handleClose(!0, 4004, 'No connection info provided');
  return;
}
this.connectionState = O.Z.IDENTIFYING;
let t = Date.now();
this.identifyStartTime = t;
let [n, r, i] = await Promise.all([
  (0, h.O)() ? _.Z.getCommittedVersions() : {},
  (0, h.O)() ? f.Z.getCommittedVersions() : {},
  !!(0, h.O)() && E.Z.canUseGuildVersions()
]), o = i ? {
  guild_versions: n,
  highest_last_message_id: r.highest_last_message_id,
  read_state_version: r.read_state_version,
  user_guild_settings_version: r.user_guild_settings_version,
  user_settings_version: r.user_settings_version,
  private_channels_version: r.private_channels_version,
  api_code_version: r.api_code_version,
  initial_guild_id: r.initial_guild_id
} : {
  guild_versions: {}
};
if (this.connectionState !== O.Z.IDENTIFYING || this.identifyStartTime !== t) {
  G.warn('Skipping identify because connectionState or identifyStartTime has changed');
  return;
}
let {
  token: s,
  properties: l = {},
  presence: u
} = e;
this.token = s, G.verbose('[IDENTIFY]');
let c = {
    token: s,
    capabilities: R.Z,
    properties: l,
    presence: u,
    compress: this.compressionHandler.usesLegacyCompression(),
    client_state: o
  },
  d = JSON.stringify(c);
this.identifyUncompressedByteSize = d.length, this.identifyCompressedByteSize = a.deflate(d).length, this.identifyCount += 1, this.send(b.j.IDENTIFY, c, !1);
  }
  _doFastConnectIdentify() {
this.seq = 0, this.sessionId = null;
let e = this.handleIdentify();
if (null === e) {
  this._handleClose(!0, 4004, 'No connection info provided');
  return;
}
let {
  token: t
} = e;
this.token = t, this.connectionState = O.Z.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, G.verbose('[IDENTIFY, fast-connect]'), this._updateLastHeartbeatAckTime();
  }
  _doResumeOrIdentify() {
let e = Date.now();
null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= V) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime();
  }
  _updateLastHeartbeatAckTime() {
this.lastHeartbeatAckTime = Date.now();
  }
  _sendHeartbeat() {
this.send(b.j.HEARTBEAT, this.seq, !1), this.lastHeartbeatTime = Date.now();
  }
  getLogger() {
return G;
  }
  willReconnect() {
return this.connectionState === O.Z.WILL_RECONNECT;
  }
  isClosed() {
return this.connectionState === O.Z.CLOSED;
  }
  isSessionEstablished() {
return this.connectionState === O.Z.SESSION_ESTABLISHED || this.connectionState === O.Z.RESUMING;
  }
  isConnected() {
return this.connectionState === O.Z.IDENTIFYING || this.connectionState === O.Z.RESUMING || this.connectionState === O.Z.SESSION_ESTABLISHED;
  }
  connect() {
return this.isClosed() ? (G.verbose('.connect() called, new state is WILL_RECONNECT'), this.connectionState = O.Z.WILL_RECONNECT, this._connect(), !0) : (G.error('Cannot start a new connection, connection state is not closed'), !1);
  }
  resetSocketOnError(e) {
let {
  action: t,
  error: n,
  metricAction: r
} = e;
G.error('resetSocketOnError during '.concat(t, ': ').concat(n.message), n.stack), m.Z.increment({
  name: l.V.SOCKET_CRASHED,
  tags: ['action:'.concat(null != r ? r : t)]
}, !0), !1 !== e.sentry && v.Z.captureException(n, {
  tags: {
    socketCrashedAction: t
  }
}), g.default.track(w.rMx.GATEWAY_SOCKET_RESET, {
  error_message: n.message,
  error_stack: n.stack,
  action: t
}), this._cleanup(e => e.close()), this._reset(!0, 1000, 'Resetting socket due to error.'), this.dispatcher.clear(), this.connectionState = O.Z.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
let i = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
0 === this.dispatchExceptionBackoff._fails ? (G.verbose('Triggering fast reconnect'), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), i && (this.didForceClearGuildHashes = !0, d.Z.dispatch({
  type: 'CLEAR_CACHES',
  reason: 'Socket reset during '.concat(t)
})), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * H);
  }
  resetSocketOnDispatchError(e) {
let t = null != e.error.message && e.error.message.indexOf('Guild data was missing from store') >= 0;
this.resetSocketOnError({
  ...e,
  sentry: !t,
  clearCache: t
});
  }
  close() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
if (this.isClosed()) {
  G.verbose('close() called, but socket is already closed.');
  return;
}
G.info('Closing connection, current state is '.concat(this.connectionState));
let t = e ? 4000 : void 0;
this._cleanup(e => e.close(t)), this.connectionState = O.Z.CLOSED, !e && setImmediate(() => {
  this._reset(!0, 1000, 'Disconnect requested by user');
});
  }
  networkStateChange(e, t) {
let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
this.expeditedHeartbeat(e, t, n, !1);
  }
  expeditedHeartbeat(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
  n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
  r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
if (!this.isClosed()) {
  if (this.isConnected()) {
    G.verbose('Performing an expedited heartbeat '.concat(null != t && '' !== t ? 'reason: ' + t : '')), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
      this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
    }, e);
    return;
  }
  n ? this.resetBackoff(t, r) : G.verbose('Expedited heartbeat requested, but, connection state is '.concat(this.connectionState, ' and reconnectImmediately was not requested ').concat(null != t && '' !== t ? 'reason: ' + t : ''));
}
  }
  resetBackoff() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
  t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
G.verbose('Connection has reset backoff'.concat(null != e && '' !== e ? ' for reason: ' + e : '')), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== O.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
  }
  constructor() {
super(), x(this, 'gatewayBackoff', void 0), x(this, 'handleIdentify', void 0), x(this, 'dispatchExceptionBackoff', new o.Z(1000, H)), x(this, 'dispatchSuccessTimer', 0), x(this, 'connectionState_', void 0), x(this, 'webSocket', void 0), x(this, 'seq', void 0), x(this, 'sessionId', void 0), x(this, 'token', void 0), x(this, 'initialHeartbeatTimeout', void 0), x(this, 'expeditedHeartbeatTimeout', void 0), x(this, 'heartbeatInterval', void 0), x(this, 'helloTimeout', void 0), x(this, 'heartbeater', void 0), x(this, 'lastHeartbeatTime', void 0), x(this, 'lastHeartbeatAckTime', void 0), x(this, 'heartbeatAck', void 0), x(this, 'connectionStartTime', void 0), x(this, 'identifyStartTime', void 0), x(this, 'nextReconnectIsImmediate', void 0), x(this, 'compressionHandler', void 0), x(this, 'hasConnectedOnce', void 0), x(this, 'isFastConnect', void 0), x(this, 'didForceClearGuildHashes', !1), x(this, 'identifyUncompressedByteSize', 0), x(this, 'identifyCompressedByteSize', 0), x(this, 'analytics', {}), x(this, 'identifyCount', 0), x(this, 'resumeUrl', null), x(this, 'iosGoingAwayEventCount', 0), x(this, 'dispatcher', void 0), x(this, 'send', (e, t, n) => {
  T.default.isLoggingGatewayEvents && G.verboseDangerously('~>', e, t);
  let r = k.pack({
    op: e,
    d: t
  });
  if (!n || this.isSessionEstablished())
    try {
      null != this.webSocket ? this.webSocket.send(r) : (G.warn('Attempted to send without a websocket that exists. Opcode: '.concat(e)), e === b.j.EMBEDDED_ACTIVITY_CLOSE && v.Z.captureMessage('EMBEDDED_ACTIVITY_CLOSE was not sent due to no web socket existing'));
    } catch (e) {}
  else
    G.warn('Attempted to send while not being in a connected state opcode: '.concat(e));
}), this.dispatcher = new L.Z(this), this.gatewayBackoff = new o.Z(1000, 60000), this.connectionState_ = O.Z.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatTime = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = (0, C.I)(k), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0;
  }
}