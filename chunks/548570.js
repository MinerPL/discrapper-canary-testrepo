n.d(t, {
    Z: function () {
        return Y;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(653041),
    n(177593);
var r = n(512722),
    i = n.n(r),
    a = n(457854),
    s = n(261470),
    o = n(956067),
    l = n(286379),
    u = n(442837),
    c = n(544891),
    d = n(570140),
    _ = n(406966),
    E = n(795513),
    f = n(266750),
    h = n(250407),
    p = n(710845),
    I = n(797614),
    m = n(218543),
    T = n(857192),
    S = n(626135),
    g = n(12647),
    A = n(70956),
    N = n(358085),
    O = n(960048),
    R = n(138859),
    v = n(14639),
    C = n(639655),
    y = n(610308),
    L = n(91247),
    D = n(508569),
    b = n(183139),
    M = n(645436),
    P = n(833508),
    U = n(981631);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let x = new p.Z('GatewaySocket'),
    G = new y.Z();
function k() {}
let B = 30 * A.Z.Millis.SECOND,
    F = 3 * A.Z.Millis.MINUTE,
    V = 1 * A.Z.Millis.MINUTE;
function H(e) {
    return null == e ? 0 : 'string' == typeof e ? e.length : e.byteLength;
}
let Z = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
class Y extends b.Z {
    get connectionState() {
        return this.connectionState_;
    }
    set connectionState(e) {
        x.verbose('Setting connection state to '.concat(e)), (this.connectionState_ = e);
    }
    addAnalytics(e) {
        this.analytics = {
            ...this.analytics,
            ...e
        };
    }
    setResumeUrl(e) {
        null != e && e.endsWith('/') && (e = e.substring(0, e.length - 1)), null !== e && x.verbose('Updating resume url to '.concat(e)), (this.resumeUrl = e);
    }
    _connect() {
        if (!this.willReconnect()) {
            x.verbose('Skipping _connect because willReconnect is false');
            return;
        }
        if (M.a()) {
            x.info('Skipping _connect because socket is paused');
            return;
        }
        (this.connectionState = R.Z.CONNECTING), (this.nextReconnectIsImmediate = !1);
        let e = this.compressionHandler.getAlgorithm(),
            t = G.getName(),
            n = this._getGatewayUrl(),
            r = window.GLOBAL_ENV.API_VERSION;
        o.Z.mark('\uD83C\uDF10', 'Socket._connect'),
            x.info('[CONNECT] '.concat(n, ', ') + 'encoding: '.concat(t, ', ') + 'version: '.concat(r, ', ') + 'compression: '.concat(null != e ? e : 'none')),
            null !== this.webSocket && (x.error('_connect called with already existing websocket'), this._cleanup((e) => e.close(4000))),
            (this.connectionStartTime = Date.now()),
            (this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.')), this.setResumeUrl(null);
            }, B));
        let i = new URL(n);
        i.searchParams.append('encoding', t),
            i.searchParams.append('v', r.toString()),
            null != e && i.searchParams.append('compress', e),
            !(function (e) {
                let t,
                    { gatewayURL: n, newCallback: r, onOpen: i, onMessage: a, onError: s, onClose: o } = e,
                    l = window._ws,
                    u = !1,
                    c = !1,
                    d = null,
                    _ = null;
                if (((window._ws = null), null != l)) {
                    if (((t = l.ws), l.state.gateway !== n)) x.verbose('[FAST CONNECT] gatewayURL mismatch: '.concat(l.state.gateway, ' !== ').concat(n)), t.close(1000), (t = null);
                    else {
                        var E;
                        let e = { ...l.state };
                        null != e.messages &&
                            (e.messages = e.messages.map((e) =>
                                null != e.data && 'string' == typeof e.data
                                    ? {
                                          ...e,
                                          data: e.data.substring(0, 100)
                                      }
                                    : e
                            )),
                            x.log('[FAST CONNECT] successfully took over websocket, state:', {
                                ...e,
                                messages: null === (E = e.messages) || void 0 === E ? void 0 : E.length
                            }),
                            (u = l.state.open),
                            (c = l.state.identify),
                            (d = l.state.messages),
                            (_ = l.state.clientState);
                    }
                }
                null == t && ((t = (0, P.Z)(n)).binaryType = 'arraybuffer'), r(t), u && i(c, _), null != d && d.forEach(a), (t.onopen = () => i(c, _)), (t.onmessage = a), (t.onclose = o), (t.onerror = s);
            })({
                gatewayURL: i.toString(),
                newCallback: (e) => {
                    (this.webSocket = e), this.compressionHandler.bindWebSocket(e);
                },
                onOpen: (e) => {
                    o.Z.mark('\uD83C\uDF10', 'GatewaySocket.onOpen '.concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    x.info('[CONNECTED] '.concat(i.toString(), ' in ').concat(t, ' ms')), (this.isFastConnect = e), e ? this._doFastConnectIdentify() : this._doResumeOrIdentify();
                },
                onMessage: (function (e, t, n) {
                    let r = 0;
                    e.dataReady((e) => {
                        try {
                            return n(e, r);
                        } finally {
                            r = 0;
                        }
                    });
                    let i = !1;
                    return (n) => {
                        let a = n.data;
                        null != n.raw_length ? (r += n.raw_length) : (r += H(a));
                        try {
                            e.feed(a);
                        } catch (e) {
                            throw (!i && ((i = !0), t(!1, 0, 'A decompression error occurred')), e);
                        }
                    };
                })(this.compressionHandler, this._handleClose.bind(this), (e, t) => {
                    let n = Date.now(),
                        { op: r, s: i, t: a, d: s } = G.unpack(e);
                    if ((r !== b.j.DISPATCH && o.Z.mark('\uD83C\uDF10', 'GatewaySocket.onMessage '.concat(r, ' ').concat(b.j[r])), T.default.isLoggingGatewayEvents)) {
                        let e = [r];
                        r === b.j.DISPATCH && e.push(a), e.push(s), x.verboseDangerously('<~', ...e);
                    }
                    let l = Date.now() - n;
                    switch (('READY' === a ? m.Z.parseReady.set(n, l) : 'READY_SUPPLEMENTAL' === a ? m.Z.parseReadySupplemental.set(n, l) : l > 10 && o.Z.mark('\uD83C\uDF10', 'Parse ' + a, l), null != i && (this.seq = i), r)) {
                        case b.j.HELLO:
                            this._clearHelloTimeout(), this._handleHello(s);
                            break;
                        case b.j.RECONNECT:
                            this._handleReconnect();
                            break;
                        case b.j.INVALID_SESSION:
                            this._handleInvalidSession(s);
                            break;
                        case b.j.HEARTBEAT:
                            this._handleHeartbeatReceive();
                            break;
                        case b.j.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(s);
                            break;
                        case b.j.DISPATCH:
                            this._handleDispatch(
                                s,
                                a,
                                'READY' === a
                                    ? {
                                          compressed_byte_size: t,
                                          uncompressed_byte_size: H(e),
                                          compression_algorithm: this.compressionHandler.getAlgorithm(),
                                          packing_algorithm: G.getName(),
                                          unpack_duration_ms: l
                                      }
                                    : null
                            );
                            break;
                        default:
                            x.info('Unhandled op '.concat(r));
                    }
                    this._sendHeartbeatIfDue();
                }),
                onError: () => {
                    this.setResumeUrl(null), g.Z.flushDNSCache(), this._handleClose(!1, 0, 'An error with the websocket occurred');
                },
                onClose: (e) => {
                    let { wasClean: t, code: n, reason: r } = e;
                    return this._handleClose(t, n, r);
                }
            });
    }
    _handleHello(e) {
        let t = (this.heartbeatInterval = e.heartbeat_interval),
            n = Date.now() - this.connectionStartTime;
        x.verbose('[HELLO] via '.concat((0, L.TO)(e), ', ') + 'heartbeat interval: '.concat(t, ', ') + 'took '.concat(n, ' ms')), this._startHeartbeater();
    }
    _handleReconnect() {
        x.verbose('[RECONNECT] gateway requested I reconnect.'), this._cleanup((e) => e.close(4000)), (this.connectionState = R.Z.WILL_RECONNECT), this._connect();
    }
    _handleInvalidSession(e) {
        x.info('[INVALID_SESSION]'.concat(e ? ' can resume)' : '')), e ? this._doResumeOrIdentify() : this._doIdentify();
    }
    _handleDispatch(e, t, n) {
        let r = Date.now() - this.connectionStartTime;
        if ('READY' === t) {
            let t = e.session_id;
            this.sessionId = t;
            let n = (0, L.TO)(e);
            o.Z.setServerTrace(n), x.info('[READY] took '.concat(r, 'ms, as ').concat(t)), x.verbose(''.concat(n)), (this.connectionState = R.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), this.setResumeUrl(e.resume_gateway_url);
        } else 'READY_SUPPLEMENTAL' === t ? (x.info('[READY_SUPPLEMENTAL] took '.concat(r, 'ms')), (this.connectionState = R.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0)) : 'RESUMED' === t && (x.verbose((0, L.TO)(e)), (this.connectionState = R.Z.SESSION_ESTABLISHED), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0));
        this.dispatcher.receiveDispatch(e, t, n);
    }
    handleResumeDispatched() {
        let e = Date.now() - this.connectionStartTime;
        x.info('[RESUMED] took '.concat(e, 'ms, replayed ').concat(this.dispatcher.resumeAnalytics.numEvents, ' events, new seq: ').concat(this.seq));
    }
    handleReadyDispatched() {
        (this.didForceClearGuildHashes = !1), (this.hasConnectedOnce = !0);
    }
    _getGatewayUrl() {
        return null != this.resumeUrl ? this.resumeUrl : Z;
    }
    _handleHeartbeatReceive() {
        this._sendHeartbeat(), null != this.heartbeater && null != this.heartbeatInterval && (clearInterval(this.heartbeater), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), this.heartbeatInterval)));
    }
    _handleHeartbeatAck(e) {
        (this.lastHeartbeatAckTime = Date.now()), (this.heartbeatAck = !0), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null), x.verbose('Expedited heartbeat succeeded'));
    }
    _handleHeartbeatTimeout() {
        this._cleanup((e) => e.close(4000)), (this.connectionState = R.Z.WILL_RECONNECT);
        let e = this.gatewayBackoff.fail(() => this._connect());
        x.warn('[ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    _handleClose(e, t, n) {
        if (
            ((e = e || !1),
            this._cleanup(),
            this.emit('close', {
                code: t,
                reason: n
            }),
            4004 === t)
        )
            return (this.connectionState = R.Z.CLOSED), x.warn('[WS CLOSED] because of authentication failure, marking as closed.'), this._reset(e, t, n);
        if ((this._tryDetectInvalidIOSToken(t, n, e), (this.connectionState = R.Z.WILL_RECONNECT), this.nextReconnectIsImmediate)) x.info('[WS CLOSED] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ') retrying immediately.')), this._connect();
        else {
            let r = this.gatewayBackoff.fail(() => this._connect());
            x.info(
                '[WS CLOSED] ('
                    .concat(e.toString(), ', ')
                    .concat(t, ', ')
                    .concat(n, ') retrying in ')
                    .concat((r / 1000).toFixed(2), ' seconds.')
            ),
                this.gatewayBackoff.fails > 4 && this._reset(e, t, n);
        }
    }
    _tryDetectInvalidIOSToken(e, t, n) {
        (0, N.isIOS)() &&
            null != this.token &&
            1001 === e &&
            'Stream end encountered' === t &&
            ((this.iosGoingAwayEventCount += 1),
            3 === this.iosGoingAwayEventCount &&
                c.tn
                    .get({
                        url: U.ANM.ME,
                        headers: { authorization: this.token }
                    })
                    .then(
                        (e) => {
                            let { status: t } = e;
                            S.default.track(U.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        },
                        (e) => {
                            let { status: t } = e;
                            401 === t && ((this.connectionState = R.Z.CLOSED), x.warn('[WS CLOSED] because of manual authentication failure, marking as closed.'), this._reset(n, 4004, 'invalid token manually detected')), S.default.track(U.rMx.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, { api_status_code: t });
                        }
                    ));
    }
    _reset(e, t, n) {
        (this.sessionId = null),
            (this.seq = 0),
            x.warn('[RESET] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')),
            this.emit('disconnect', {
                wasClean: e,
                code: t,
                reason: n
            });
    }
    _sendHeartbeatIfDue() {
        if (null == this.heartbeatInterval || null == this.heartbeater) return;
        let e = this.lastHeartbeatTime;
        null != e && Date.now() - e > this.heartbeatInterval + 5000 && this._sendHeartbeat();
    }
    _doHeartbeatInterval() {
        this.heartbeatAck ? ((this.heartbeatAck = !1), this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout();
    }
    _startHeartbeater() {
        let { heartbeatInterval: e } = this;
        i()(null != e, 'GatewaySocket: Heartbeat interval should never null here.'),
            null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout),
            null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            (this.initialHeartbeatTimeout = setTimeout(
                () => {
                    (this.initialHeartbeatTimeout = null), (this.heartbeatAck = !0), (this.heartbeater = setInterval(this._doHeartbeatInterval.bind(this), e)), this._doHeartbeatInterval();
                },
                Math.floor(Math.random() * e)
            ));
    }
    _stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), (this.initialHeartbeatTimeout = null)), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    _clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    _cleanup(e) {
        u.ZP.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null), null != t && ((t.onopen = k), (t.onmessage = k), (t.onerror = k), (t.onclose = k), null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), (this.compressionHandler = (0, C.I)(G));
    }
    _doResume() {
        var e;
        (this.connectionState = R.Z.RESUMING),
            (this.dispatcher.resumeAnalytics = (0, L.zH)(Date.now() - this.connectionStartTime)),
            x.info('[RESUME] resuming session '.concat(null !== (e = this.sessionId) && void 0 !== e ? e : '', ', seq: ').concat(this.seq)),
            this.send(
                b.j.RESUME,
                {
                    token: this.token,
                    session_id: this.sessionId,
                    seq: this.seq
                },
                !1
            );
    }
    async _doIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) {
            this._handleClose(!0, 4004, 'No connection info provided');
            return;
        }
        this.connectionState = R.Z.IDENTIFYING;
        let t = Date.now();
        this.identifyStartTime = t;
        let [n, r, i] = await Promise.all([(0, h.O)() ? _.Z.getCommittedVersions() : {}, (0, h.O)() ? f.Z.getCommittedVersions() : {}, !!(0, h.O)() && E.Z.canUseGuildVersions()]),
            s = i
                ? {
                      guild_versions: n,
                      highest_last_message_id: r.highest_last_message_id,
                      read_state_version: r.read_state_version,
                      user_guild_settings_version: r.user_guild_settings_version,
                      user_settings_version: r.user_settings_version,
                      private_channels_version: r.private_channels_version,
                      api_code_version: r.api_code_version,
                      initial_guild_id: r.initial_guild_id
                  }
                : { guild_versions: {} };
        if (this.connectionState !== R.Z.IDENTIFYING || this.identifyStartTime !== t) {
            x.warn('Skipping identify because connectionState or identifyStartTime has changed');
            return;
        }
        let { token: o, properties: l = {}, presence: u } = e;
        (this.token = o), x.verbose('[IDENTIFY]');
        let c = {
                token: o,
                capabilities: (0, v.t)(),
                properties: l,
                presence: u,
                compress: this.compressionHandler.usesLegacyCompression(),
                client_state: s
            },
            d = JSON.stringify(c);
        (this.identifyUncompressedByteSize = d.length), (this.identifyCompressedByteSize = a.deflate(d).length), (this.identifyCount += 1), this.send(b.j.IDENTIFY, c, !1);
    }
    _doFastConnectIdentify() {
        (this.seq = 0), (this.sessionId = null);
        let e = this.handleIdentify();
        if (null === e) {
            this._handleClose(!0, 4004, 'No connection info provided');
            return;
        }
        let { token: t } = e;
        (this.token = t), (this.connectionState = R.Z.IDENTIFYING), (this.identifyStartTime = Date.now()), (this.identifyCount += 1), x.verbose('[IDENTIFY, fast-connect]'), this._updateLastHeartbeatAckTime();
    }
    _doResumeOrIdentify() {
        let e = Date.now();
        null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= F) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime();
    }
    _updateLastHeartbeatAckTime() {
        this.lastHeartbeatAckTime = Date.now();
    }
    _sendHeartbeat() {
        this.send(b.j.HEARTBEAT, this.seq, !1), (this.lastHeartbeatTime = Date.now());
    }
    getLogger() {
        return x;
    }
    willReconnect() {
        return this.connectionState === R.Z.WILL_RECONNECT;
    }
    isClosed() {
        return this.connectionState === R.Z.CLOSED;
    }
    isSessionEstablished() {
        return this.connectionState === R.Z.SESSION_ESTABLISHED || this.connectionState === R.Z.RESUMING;
    }
    isConnected() {
        return this.connectionState === R.Z.IDENTIFYING || this.connectionState === R.Z.RESUMING || this.connectionState === R.Z.SESSION_ESTABLISHED;
    }
    connect() {
        return this.isClosed() ? (x.verbose('.connect() called, new state is WILL_RECONNECT'), (this.connectionState = R.Z.WILL_RECONNECT), this._connect(), !0) : (x.error('Cannot start a new connection, connection state is not closed'), !1);
    }
    resetSocketOnError(e) {
        let { action: t, error: n, metricAction: r } = e;
        x.error('resetSocketOnError during '.concat(t, ': ').concat(n.message), n.stack),
            I.Z.increment(
                {
                    name: l.V.SOCKET_CRASHED,
                    tags: ['action:'.concat(null != r ? r : t)]
                },
                !0
            ),
            !1 !== e.sentry && O.Z.captureException(n, { tags: { socketCrashedAction: t } }),
            S.default.track(U.rMx.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                action: t
            }),
            this._cleanup((e) => e.close()),
            this._reset(!0, 1000, 'Resetting socket due to error.'),
            this.dispatcher.clear(),
            (this.connectionState = R.Z.WILL_RECONNECT),
            this.dispatchExceptionBackoff.cancel();
        let i = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
        0 === this.dispatchExceptionBackoff._fails ? (x.verbose('Triggering fast reconnect'), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()),
            i &&
                ((this.didForceClearGuildHashes = !0),
                d.Z.dispatch({
                    type: 'CLEAR_CACHES',
                    reason: 'Socket reset during '.concat(t)
                })),
            clearTimeout(this.dispatchSuccessTimer),
            (this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * V));
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
            x.verbose('close() called, but socket is already closed.');
            return;
        }
        x.info('Closing connection, current state is '.concat(this.connectionState));
        let t = e ? 4000 : void 0;
        this._cleanup((e) => e.close(t)),
            (this.connectionState = R.Z.CLOSED),
            !e &&
                setImmediate(() => {
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
                x.verbose('Performing an expedited heartbeat '.concat(null != t && '' !== t ? 'reason: ' + t : '')),
                    (this.heartbeatAck = !1),
                    this._sendHeartbeat(),
                    null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                    (this.expeditedHeartbeatTimeout = setTimeout(() => {
                        (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this._handleHeartbeatTimeout();
                    }, e));
                return;
            }
            n ? this.resetBackoff(t, r) : x.verbose('Expedited heartbeat requested, but, connection state is '.concat(this.connectionState, ' and reconnectImmediately was not requested ').concat(null != t && '' !== t ? 'reason: ' + t : ''));
        }
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        x.verbose('Connection has reset backoff'.concat(null != e && '' !== e ? ' for reason: ' + e : '')), this.gatewayBackoff.succeed(), (this.iosGoingAwayEventCount = 0), (this.nextReconnectIsImmediate = !0), this.willReconnect() ? this._connect() : t && this.connectionState !== R.Z.SESSION_ESTABLISHED && this._handleClose(!0, 0, e);
    }
    constructor() {
        super(),
            w(this, 'gatewayBackoff', void 0),
            w(this, 'handleIdentify', void 0),
            w(this, 'dispatchExceptionBackoff', new s.Z(1000, V)),
            w(this, 'dispatchSuccessTimer', 0),
            w(this, 'connectionState_', void 0),
            w(this, 'webSocket', void 0),
            w(this, 'seq', void 0),
            w(this, 'sessionId', void 0),
            w(this, 'token', void 0),
            w(this, 'initialHeartbeatTimeout', void 0),
            w(this, 'expeditedHeartbeatTimeout', void 0),
            w(this, 'heartbeatInterval', void 0),
            w(this, 'helloTimeout', void 0),
            w(this, 'heartbeater', void 0),
            w(this, 'lastHeartbeatTime', void 0),
            w(this, 'lastHeartbeatAckTime', void 0),
            w(this, 'heartbeatAck', void 0),
            w(this, 'connectionStartTime', void 0),
            w(this, 'identifyStartTime', void 0),
            w(this, 'nextReconnectIsImmediate', void 0),
            w(this, 'compressionHandler', void 0),
            w(this, 'hasConnectedOnce', void 0),
            w(this, 'isFastConnect', void 0),
            w(this, 'didForceClearGuildHashes', !1),
            w(this, 'identifyUncompressedByteSize', 0),
            w(this, 'identifyCompressedByteSize', 0),
            w(this, 'analytics', {}),
            w(this, 'identifyCount', 0),
            w(this, 'resumeUrl', null),
            w(this, 'iosGoingAwayEventCount', 0),
            w(this, 'dispatcher', void 0),
            w(this, 'send', (e, t, n) => {
                T.default.isLoggingGatewayEvents && x.verboseDangerously('~>', e, t);
                let r = G.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished())
                    try {
                        null != this.webSocket && this.webSocket.send(r);
                    } catch (e) {}
                else x.warn('Attempted to send while not being in a connected state opcode: '.concat(e));
            }),
            (this.dispatcher = new D.Z(this)),
            (this.gatewayBackoff = new s.Z(1000, 60000)),
            (this.connectionState_ = R.Z.CLOSED),
            (this.webSocket = null),
            (this.seq = 0),
            (this.sessionId = null),
            (this.token = null),
            (this.initialHeartbeatTimeout = null),
            (this.expeditedHeartbeatTimeout = null),
            (this.lastHeartbeatTime = null),
            (this.lastHeartbeatAckTime = null),
            (this.helloTimeout = null),
            (this.heartbeatInterval = null),
            (this.heartbeater = null),
            (this.heartbeatAck = !0),
            (this.connectionStartTime = 0),
            (this.identifyStartTime = 0),
            (this.nextReconnectIsImmediate = !1),
            (this.compressionHandler = (0, C.I)(G)),
            (this.hasConnectedOnce = !1),
            (this.isFastConnect = !1),
            (this.identifyCount = 0),
            (this.iosGoingAwayEventCount = 0);
    }
}
