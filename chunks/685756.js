n.d(t, {
    V: function () {
        return o;
    },
    Z: function () {
        return D;
    }
}), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120), n(789020);
var r, i, a, o, s, l, u, c, d = n(512722), _ = n.n(d), E = n(261470), f = n(47770), h = n(710845), p = n(857192), m = n(70956), I = n(358085), T = n(65154);
function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function S() {
}
(s = r || (r = {}))[s.IDENTIFY = 0] = 'IDENTIFY', s[s.SELECT_PROTOCOL = 1] = 'SELECT_PROTOCOL', s[s.READY = 2] = 'READY', s[s.HEARTBEAT = 3] = 'HEARTBEAT', s[s.SELECT_PROTOCOL_ACK = 4] = 'SELECT_PROTOCOL_ACK', s[s.SPEAKING = 5] = 'SPEAKING', s[s.HEARTBEAT_ACK = 6] = 'HEARTBEAT_ACK', s[s.RESUME = 7] = 'RESUME', s[s.HELLO = 8] = 'HELLO', s[s.RESUMED = 9] = 'RESUMED', s[s.CLIENT_CONNECT = 11] = 'CLIENT_CONNECT', s[s.VIDEO = 12] = 'VIDEO', s[s.CLIENT_DISCONNECT = 13] = 'CLIENT_DISCONNECT', s[s.SESSION_UPDATE = 14] = 'SESSION_UPDATE', s[s.MEDIA_SINK_WANTS = 15] = 'MEDIA_SINK_WANTS', s[s.VOICE_BACKEND_VERSION = 16] = 'VOICE_BACKEND_VERSION', s[s.CHANNEL_OPTIONS_UPDATE = 17] = 'CHANNEL_OPTIONS_UPDATE', s[s.FLAGS = 18] = 'FLAGS', s[s.SPEED_TEST = 19] = 'SPEED_TEST', s[s.PLATFORM = 20] = 'PLATFORM', s[s.SECURE_FRAMES_PREPARE_PROTOCOL_TRANSITION = 21] = 'SECURE_FRAMES_PREPARE_PROTOCOL_TRANSITION', s[s.SECURE_FRAMES_EXECUTE_TRANSITION = 22] = 'SECURE_FRAMES_EXECUTE_TRANSITION', s[s.SECURE_FRAMES_READY_FOR_TRANSITION = 23] = 'SECURE_FRAMES_READY_FOR_TRANSITION', s[s.SECURE_FRAMES_PREPARE_EPOCH = 24] = 'SECURE_FRAMES_PREPARE_EPOCH', s[s.MLS_EXTERNAL_SENDER_PACKAGE = 25] = 'MLS_EXTERNAL_SENDER_PACKAGE', s[s.MLS_KEY_PACKAGE = 26] = 'MLS_KEY_PACKAGE', s[s.MLS_PROPOSALS = 27] = 'MLS_PROPOSALS', s[s.MLS_COMMIT_WELCOME = 28] = 'MLS_COMMIT_WELCOME', s[s.MLS_PREPARE_COMMIT_TRANSITION = 29] = 'MLS_PREPARE_COMMIT_TRANSITION', s[s.MLS_WELCOME = 30] = 'MLS_WELCOME', s[s.MLS_INVALID_COMMIT_WELCOME = 31] = 'MLS_INVALID_COMMIT_WELCOME', (l = i || (i = {}))[l.AUTHENTICATION_FAILED = 4004] = 'AUTHENTICATION_FAILED', l[l.INVALID_SESSION = 4006] = 'INVALID_SESSION', l[l.SERVER_NOT_FOUND = 4011] = 'SERVER_NOT_FOUND', l[l.SERVER_CRASH = 4015] = 'SERVER_CRASH', l[l.CANCELED = 4016] = 'CANCELED', l[l.HEARTBEAT_TIMEOUT = 4800] = 'HEARTBEAT_TIMEOUT', l[l.UNRESUMABLE = 4801] = 'UNRESUMABLE', l[l.RESET_BACKOFF = 4802] = 'RESET_BACKOFF', (u = a || (a = {}))[u.DISCONNECTED = 0] = 'DISCONNECTED', u[u.CONNECTING = 1] = 'CONNECTING', u[u.IDENTIFYING = 2] = 'IDENTIFYING', u[u.RESUMING = 3] = 'RESUMING', u[u.CONNECTED = 4] = 'CONNECTED', u[u.RECONNECTING = 5] = 'RECONNECTING';
let A = 20 * m.Z.Millis.SECOND, N = 1 * m.Z.Millis.MINUTE, v = 5 * m.Z.Millis.SECOND, O = 5 * m.Z.Millis.SECOND;
function R(e) {
    return e.map(e => ({
        name: e.name,
        type: e.type,
        priority: 1000 * e.priority,
        payload_type: e.payloadType,
        rtx_payload_type: e.rtxPayloadType,
        encode: e.encode,
        decode: e.decode
    }));
}
function C(e) {
    return null == e ? void 0 : e.map(e => ({
        type: e.type,
        rid: e.rid,
        ssrc: e.ssrc,
        active: e.active,
        quality: e.quality,
        rtx_ssrc: e.rtxSsrc,
        max_bitrate: e.maxBitrate,
        max_framerate: e.maxFrameRate,
        max_resolution: null != e.maxResolution ? {
            type: e.maxResolution.type,
            width: e.maxResolution.width,
            height: e.maxResolution.height
        } : void 0
    }));
}
function y(e) {
    var t;
    return null !== (t = null == e ? void 0 : e.map(e => ({
        type: function (e) {
            if ('audio' === e)
                return T.Tr.AUDIO;
            if ('test' === e)
                return T.Tr.TEST;
            if ('screen' === e)
                return T.Tr.SCREEN;
            else
                return T.Tr.VIDEO;
        }(e.type),
        rid: e.rid,
        ssrc: e.ssrc,
        rtxSsrc: e.rtx_ssrc,
        active: e.active,
        quality: e.quality,
        maxBitrate: e.max_bitrate,
        maxFrameRate: e.max_framerate,
        maxResolution: null != e.max_resolution ? {
            type: e.max_resolution.type,
            width: e.max_resolution.width,
            height: e.max_resolution.height
        } : void 0
    }))) && void 0 !== t ? t : [];
}
(c = o || (o = {})).Connecting = 'connecting', c.Connect = 'connect', c.Disconnect = 'disconnect', c.Resuming = 'resuming', c.Ready = 'ready', c.Speaking = 'speaking', c.Video = 'video', c.Ping = 'ping', c.ClientConnect = 'client-connect', c.ClientDisconnect = 'client-disconnect', c.Codecs = 'codecs', c.MediaSessionId = 'media-session-id', c.MediaSinkWants = 'media-sink-wants', c.VoiceBackendVersion = 'voice-backend-version', c.KeyframeInterval = 'keyframe-interval', c.ChannelOptionsUpdateSecureFramesProtocol = 'update-secure-frames-protocol', c.Flags = 'flags', c.Platform = 'platform', c.SDP = 'sdp', c.Encryption = 'encryption', c.SpeedTest = 'speed-test', c.BandwidthEstimationExperiment = 'bandwidth-estimation-experiment', c.SecureFramesInit = 'secure-frames-init', c.SecureFramesPrepareTransition = 'secure-frames-prepare-transition', c.SecureFramesExecuteTransition = 'secure-frames-execute-transition', c.SecureFramesPrepareEpoch = 'secure-frames-prepare-epoch', c.MLSExternalSenderPackage = 'mls-external-sender-package', c.MLSProposals = 'mls-proposals', c.MLSPrepareCommitTransition = 'mls-prepare-commit-transition', c.MLSWelcome = 'mls-welcome';
class D extends f.Z {
    createWebSocket() {
        this.logger.info('[CONNECT] '.concat(this.url)), null !== this.webSocket && (this.logger.error('Connect called with already existing websocket'), this.cleanupWebSocket(e => e.close(4000))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
            let e = Date.now() - this.connectionStartTime;
            this.handleClose(!1, 0, 'The connection timed out after '.concat(e, ' ms - did not receive OP_HELLO in time.'));
        }, A);
        let e = this.webSocket = new WebSocket(''.concat(this.url, '?v=').concat(7));
        e.binaryType = 'arraybuffer', e.onopen = () => {
            this.webSocketCloseTime = null, 1 === this.connectionState ? this.emit('connect') : 5 === this.connectionState && this.doResumeOrClose(), this.connectionState = 4;
            let e = Date.now() - this.connectionStartTime;
            this.logger.info('[CONNECTED] '.concat(this.url, ' in ').concat(e, ' ms')), this.emit('ping', Math.round(e / 2));
        }, e.onmessage = e => {
            let {
                op: t,
                d: n
            } = this.parseWebSocketMessage(e);
            if (p.default.isLoggingGatewayEvents) {
                if (n instanceof Uint8Array) {
                    let e = [...n].map(e => e.toString(16).padStart(2, '0')).join('');
                    this.logger.info('~> '.concat(t, ': 0x').concat(e));
                } else
                    this.logger.info('~> '.concat(t, ': ').concat(JSON.stringify(n)));
            }
            switch (t) {
            case 8:
                this.clearHelloTimeout(), this.handleHello(n);
                break;
            case 2:
                this.handleReady(n);
                break;
            case 9:
                this.handleResumed(n);
                break;
            case 4:
                n.bandwidth_estimation_experiment && this.emit('bandwidth-estimation-experiment', n.bandwidth_estimation_experiment), this.emit('codecs', n.audio_codec, n.video_codec), n.media_session_id && this.emit('media-session-id', n.media_session_id), n.sdp ? this.emit('sdp', n.sdp) : n.mode && this.emit('encryption', n.mode, n.secret_key), n.keyframe_interval && this.emit('keyframe-interval', n.keyframe_interval), this.emit('secure-frames-init', n.secure_frames_version || 0), this.resumable = !0;
                break;
            case 5:
                let r = n.speaking;
                'boolean' == typeof r && (r = r ? T.Dg.VOICE : T.Dg.NONE), this.emit('speaking', n.user_id, n.ssrc, r);
                break;
            case 3:
                this.sendHeartbeat();
                break;
            case 6:
                this.emit('ping', Date.now() - n), this.handleHeartbeatAck(n);
                break;
            case 12:
                this.emit('video', n.user_id, n.audio_ssrc, n.video_ssrc, y(n.streams));
                break;
            case 11:
                this.emit('client-connect', n.user_ids);
                break;
            case 13:
                this.emit('client-disconnect', n.user_id);
                break;
            case 14:
                (null != n.audio_codec || null != n.video_codec) && this.emit('codecs', n.audio_codec, n.video_codec), null != n.media_session_id && this.emit('media-session-id', n.media_session_id), n.keyframe_interval && this.emit('keyframe-interval', n.keyframe_interval);
                break;
            case 15:
                this.emit('media-sink-wants', n);
                break;
            case 16:
                null != n.voice && null != n.rtc_worker && this.emit('voice-backend-version', n.voice, n.rtc_worker);
                break;
            case 19:
                this.emit('speed-test', n.op, n);
                break;
            case 18:
                null != n.flags && null != n.user_id && this.emit('flags', n.user_id, n.flags);
                break;
            case 20:
                null != n.platform && null != n.user_id && this.emit('platform', n.user_id, n.platform);
                break;
            case 21:
                null != n.transition_id && null != n.protocol_version && this.emit('secure-frames-prepare-transition', n.transition_id, n.protocol_version);
                break;
            case 22:
                null != n.transition_id && this.emit('secure-frames-execute-transition', n.transition_id);
                break;
            case 24:
                null != n.epoch && null != n.protocol_version && this.emit('secure-frames-prepare-epoch', n.epoch, n.protocol_version);
                break;
            case 25:
                this.emit('mls-external-sender-package', n);
                break;
            case 27:
                this.emit('mls-proposals', n);
                break;
            case 29: {
                    let e = new DataView(n.buffer, n.byteOffset, 2).getUint16(0, !1), t = n.slice(2);
                    this.emit('mls-prepare-commit-transition', e, t);
                    break;
                }
            case 30: {
                    let e = new DataView(n.buffer, n.byteOffset, 2).getUint16(0, !1), t = n.slice(2);
                    this.emit('mls-welcome', e, t);
                    break;
                }
            default:
                this.logger.info('Unhandled op '.concat(t));
            }
        }, e.onerror = () => this.handleClose(!1, 0, 'An error with the websocket occurred'), e.onclose = e => {
            let {
                wasClean: t,
                code: n,
                reason: r
            } = e;
            return this.handleClose(t, n, r);
        };
    }
    send(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN)
            return;
        let r = JSON.stringify({
            op: e,
            d: t
        });
        p.default.isLoggingGatewayEvents && this.logger.info('<~ '.concat(r));
        try {
            n.send(r);
        } catch (e) {
        }
    }
    sendBinary(e, t) {
        let n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN)
            return;
        let r = new Uint8Array(t.byteLength + 1);
        r[0] = e, r.set(t, 1);
        try {
            n.send(r.buffer);
        } catch (e) {
        }
    }
    ping() {
        this.sendHeartbeat();
    }
    doResumeOrClose() {
        let e = Date.now();
        null !== this.serverId && null !== this.token && null !== this.sessionId && this.resumable && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= N) ? (this.doResume(), this.lastHeartbeatAckTime = e) : this.disconnect(!1, 4801, 'Cannot resume connection.');
    }
    doResume() {
        var e, t;
        this.logger.info('[RESUME] resuming session. serverId='.concat(null !== (e = this.serverId) && void 0 !== e ? e : '', ' sessionId=').concat(null !== (t = this.sessionId) && void 0 !== t ? t : '')), this.emit('resuming'), this.connectionState = 3, this.send(7, {
            token: this.token,
            session_id: this.sessionId,
            server_id: this.serverId
        });
    }
    handleHello(e) {
        var t, n, r;
        if (this.serverVersion = null !== (t = e.v) && void 0 !== t ? t : 3, this.serverVersion <= 3) {
            let t = I.isPlatformEmbedded ? 0.25 : 0.1;
            this.heartbeatInterval = e.heartbeat_interval * t;
        } else
            this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier, !I.isPlatformEmbedded && (this.heartbeatInterval = Math.min(O, null !== (n = this.heartbeatInterval) && void 0 !== n ? n : NaN));
        let i = Date.now() - this.connectionStartTime;
        this.logger.info('[HELLO] heartbeat interval: '.concat(null !== (r = this.heartbeatInterval) && void 0 !== r ? r : '??', ', version: ').concat(this.serverVersion, ', took ').concat(i, ' ms')), this.startHeartbeater();
    }
    handleReady(e) {
        this.backoff.succeed();
        let t = Date.now() - this.connectionStartTime;
        this.logger.info('[READY] took '.concat(t, ' ms')), this.serverVersion >= 6 && this.send(16, {}), this.emit('ready', e.ip, e.port, e.modes, e.ssrc, y(e.streams), e.experiments);
    }
    handleResumed(e) {
        this.backoff.succeed();
    }
    handleClose(e, t, n) {
        if (this.connectionState = 0, e = e || !1, this.webSocketCloseTime = performance.now(), this.cleanupWebSocket(), 4004 === t || 4015 === t || 4011 === t || 4006 === t)
            return this.disconnect(e, t, n);
        if (this.backoff.fails > 3)
            this.logger.warn('[WS CLOSED] Backoff exceed. Resetting.'), this.disconnect(e, t, n);
        else {
            let r = this.backoff.fail(() => this.reconnect(e, t, n));
            this.logger.warn('[WS CLOSED] (clean: '.concat(e.toString(), ', code: ').concat(t, ', reason: ').concat(n, ') retrying in ').concat((r / 1000).toFixed(2), ' seconds.'));
        }
    }
    disconnect(e, t, n) {
        this.logger.warn('[DISCONNECT] ('.concat(e.toString(), ', ').concat(t, ', ').concat(n, ')')), this.cleanupWebSocket(), this.cleanupState(), this.connectionState = 0, this.emit('disconnect', e, t, n);
    }
    reconnect(e, t, n) {
        this.logger.info('[RECONNECT] wasClean='.concat(e.toString(), ' code=').concat(t, ' reason=').concat(n)), this.cleanupWebSocket(e => e.close(4000)), this.connectionState = 5, this.createWebSocket();
    }
    cleanupWebSocket(e) {
        this.stopHeartbeater(), this.clearHelloTimeout();
        let t = this.webSocket;
        this.webSocket = null, null != t && (t.onopen = S, t.onmessage = S, t.onerror = S, t.onclose = S, null == e || e(t)), this.backoff.cancel();
    }
    cleanupState() {
        this.serverId = null, this.sessionId = null, this.token = null, this.resumable = !1;
    }
    parseWebSocketMessage(e) {
        if (!(e.data instanceof ArrayBuffer))
            return JSON.parse(e.data);
        {
            let t = new Uint8Array(e.data);
            return {
                op: t[0],
                d: t.subarray(1)
            };
        }
    }
    clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null);
    }
    handleHeartbeatAck(e) {
        this.logger.info('Heartbeat ACK received'), this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, this.logger.info('Expedited heartbeat succeeded'));
    }
    handleHeartbeatTimeout() {
        this.cleanupWebSocket(e => e.close(4000));
        let e = this.backoff.fail(() => this.reconnect(!1, 4800, 'Heartbeat timeout.'));
        this.logger.warn('[HEARTBEAT ACK TIMEOUT] reconnecting in '.concat((e / 1000).toFixed(2), ' seconds.'));
    }
    startHeartbeater() {
        _()(null != this.heartbeatInterval, 'RTCControlSocket: Heartbeat interval should never null here.'), this.logger.info('Starting heartbeat with interval: '.concat(this.heartbeatInterval)), null !== this.heartbeater && clearInterval(this.heartbeater), this.heartbeatAck = !0, this.heartbeater = setInterval(() => {
            this.heartbeatAck ? (this.heartbeatAck = !1, this.sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout();
        }, this.heartbeatInterval);
    }
    sendHeartbeat() {
        this.logger.info('Sending heartbeat'), this.send(3, Date.now()), this.lastHeartbeatTime = performance.now();
    }
    stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null);
    }
    connect() {
        return 0 !== this.connectionState ? (this.logger.error('Cannot start a new connection, connection state is not disconnected'), !1) : (this.connectionState = 1, this.createWebSocket(), this.emit('connecting'), !0);
    }
    identify(e) {
        let {
            serverId: t,
            userId: n,
            sessionId: r,
            token: i,
            maxSecureFramesVersion: a,
            video: o = !1,
            streamParameters: s
        } = e;
        this.serverId = t, this.sessionId = r, this.token = i, this.connectionState = 2, this.send(0, {
            server_id: t,
            user_id: n,
            session_id: r,
            token: i,
            max_secure_frames_version: a,
            video: o,
            streams: C(s)
        });
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '', n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null != this.webSocket)
            this.logger.info('Performing an expedited heartbeat '.concat('' !== t ? 'reason: ' + t : '')), this.heartbeatAck = !1, this.sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
                this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this.handleHeartbeatTimeout();
            }, e);
        else {
            if (n)
                return this.resetBackoff(t);
            this.logger.info('Expedited heartbeat requested, but is disconnected and a reset was not ' + 'requested '.concat('' !== t ? 'reason: ' + t : ''));
        }
        return !1;
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return !!(this.backoff.fails > 0) && null == this.webSocket && (this.logger.info('Connection backoff reset '.concat('' !== e ? 'for reason: ' + e : '')), this.backoff.succeed(), this.reconnect(!1, 4802, 'Reset backoff.'), !0);
    }
    close() {
        this.logger.info('CLOSE'), this.cleanupWebSocket(e => e.close(4000)), this.cleanupState(), this.connectionState = 0, this.emit('disconnect', !0, 1000, 'Force Close');
    }
    destroy() {
        this.close();
    }
    selectProtocol(e, t, n, r) {
        let i;
        let a = {};
        null == n ? i = null : 'sdp' in n && null != n.sdp && '' !== n.sdp ? (i = n.sdp, a = {
            ...n,
            codecs: R(n.codecs),
            rtc_connection_id: t
        }) : 'address' in n && null != n.address && '' !== n.address && n.port && null != n.mode && '' !== n.mode && (i = {
            address: n.address,
            port: n.port,
            mode: n.mode
        }, a = {
            ...n,
            codecs: R(n.codecs),
            rtc_connection_id: t,
            experiments: r
        }), this.send(1, {
            protocol: e,
            data: i,
            ...a
        });
    }
    updateSession(e) {
        this.send(14, { codecs: R(e.codecs) });
    }
    speaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.send(5, {
            speaking: this.serverVersion <= 3 ? !!e : e,
            delay: t,
            ssrc: n
        });
    }
    video(e, t, n, r) {
        this.send(12, {
            audio_ssrc: e,
            video_ssrc: t,
            rtx_ssrc: n,
            streams: C(r)
        });
    }
    mediaSinkWants(e) {
        this.serverVersion >= 5 && this.send(15, e);
    }
    speedTest(e, t) {
        this.send(19, {
            op: e,
            ...t
        });
    }
    secureFramesReadyForTransition(e) {
        this.send(23, { transition_id: e });
    }
    sendMLSKeyPackage(e) {
        this.logger.info('Sending MLS key package'), this.sendBinary(26, new Uint8Array(e));
    }
    sendMLSCommitWelcome(e) {
        this.logger.info('Sending MLS commit + welcome message'), this.sendBinary(28, new Uint8Array(e));
    }
    flagMLSInvalidCommitWelcome(e) {
        this.send(31, { transition_id: e });
    }
    setHeartbeatIntervalModifier(e) {
        this.heartbeatIntervalModifier = e;
    }
    sendHeartbeatIfOverdue() {
        if (null == this.heartbeatInterval)
            return;
        let e = performance.now();
        this.backoff.pending && null == this.webSocket && null != this.webSocketCloseTime && e - this.webSocketCloseTime > this.backoff.current + v ? this.resetBackoff('Forcing reconnect') : null != this.heartbeater && null != this.lastHeartbeatTime && e - this.lastHeartbeatTime > this.heartbeatInterval + v && (this.logger.info('Forcing heartbeat'), this.sendHeartbeat());
    }
    constructor(e) {
        super(), g(this, 'url', void 0), g(this, 'logger', new h.Z('RTCControlSocket')), g(this, 'backoff', new E.Z(1000, 5000)), g(this, 'webSocket', void 0), g(this, 'connectionState', void 0), g(this, 'heartbeatInterval', void 0), g(this, 'helloTimeout', void 0), g(this, 'heartbeater', void 0), g(this, 'lastHeartbeatTime', void 0), g(this, 'lastHeartbeatAckTime', void 0), g(this, 'expeditedHeartbeatTimeout', void 0), g(this, 'heartbeatAck', void 0), g(this, 'heartbeatIntervalModifier', void 0), g(this, 'connectionStartTime', void 0), g(this, 'webSocketCloseTime', void 0), g(this, 'sessionId', void 0), g(this, 'serverId', void 0), g(this, 'token', void 0), g(this, 'resumable', void 0), g(this, 'serverVersion', 0), this.url = e, this.webSocket = null, this.connectionState = 0, this.helloTimeout = null, this.lastHeartbeatTime = null, this.lastHeartbeatAckTime = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.expeditedHeartbeatTimeout = null, this.heartbeatIntervalModifier = 1, this.connectionStartTime = 0, this.sessionId = null, this.serverId = null, this.token = null, this.resumable = !1;
    }
}
