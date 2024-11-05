n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120),
    n(653041);
var r = n(878604);
function i(e) {
    return {
        id: e.payloadType,
        name: e.mimeType.split('/').slice(1)[0]
    };
}
function a(e, t, n, a, s) {
    var o, l, u;
    let c = {},
        d = {},
        f = [],
        _ = [];
    for (let t of e.values())
        switch (t.type) {
            case 'candidate-pair':
                c[t.id] = t;
                break;
            case 'codec':
                d[t.id] = t;
                break;
            case 'inbound-rtp':
                f.push(t);
                break;
            case 'outbound-rtp':
                _.push(t);
        }
    let h = Object.values(c).find((e) => 'succeeded' === e.state);
    if (void 0 === h) return null;
    let p = [];
    for (let e of _) {
        let t = d[e.codecId];
        if (null == t) continue;
        let a = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, r.f)(n, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, r.F)(n, e.ssrc),
            codec: i(t),
            bytesSent: e.bytesSent,
            packetsSent: e.packetsSent
        };
        if ('audio' === e.kind)
            p.push({
                ...a,
                type: 'audio'
            });
        else if ('video' === e.kind && s) {
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            p.push({
                ...a,
                framesEncoded: e.framesEncoded,
                keyFramesEncoded: e.keyFramesEncoded,
                firCount: e.firCount,
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                bitrateTarget: e.targetBitrate,
                qpSum: e.qpSum,
                averageEncodeTime: null == e.framesEncoded || null === (u = e.totalEncodeTime) || 0 === u ? void 0 : ((1000 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
                resolution: t,
                framesSent: e.framesSent,
                frameRateInput: e.framesPerSecond,
                type: 'video'
            });
        }
    }
    let m = {};
    for (let e of f) {
        let s = d[e.codecId];
        if (null == s) continue;
        let o = t(e.ssrc);
        if (null == o) continue;
        let l = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, r.f)(n, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, r.F)(n, e.ssrc),
            sinkWantLocal: (0, r.f)(a, e.ssrc, 'video' === e.kind),
            sinkWantLocalAsInt: (0, r.F)(a, e.ssrc),
            codec: i(s),
            bytesReceived: e.bytesReceived,
            packetsReceived: e.packetsReceived,
            packetsLost: e.packetsLost
        };
        if ('audio' === e.kind) {
            let t = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round((1000 * e.jitterBufferDelay) / e.jitterBufferEmittedCount) : 0;
            null == m[o] && (m[o] = []),
                m[o].push({
                    ...l,
                    audioLevel: e.audioLevel,
                    jitter: 1000 * e.jitter,
                    jitterBuffer: t
                });
        } else if ('video' === e.kind) {
            null == m[o] && (m[o] = []);
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            m[o].push({
                ...l,
                resolution: t,
                framesDecoded: e.framesDecoded,
                keyFramesDecoded: e.keyFramesDecoded,
                framesDropped: e.framesDropped,
                framesReceived: e.framesReceived,
                frameRateDecode: e.framesPerSecond,
                averageDecodeTime: null == e.framesDecoded || null == e.totalDecodeTime ? void 0 : ((1000 * e.totalDecodeTime) / e.framesDecoded).toFixed(1),
                firCount: e.firCount,
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                freezeCount: e.freezeCount,
                pauseCount: e.pauseCount,
                totalFreezesDuration: e.totalFreezesDuration,
                totalPausesDuration: e.totalPausesDuration,
                qpSum: e.qpSum,
                decoderImplementationName: 'WebRTC'
            });
        }
    }
    let g = (null !== (o = h.currentRoundTripTime) && void 0 !== o ? o : 0) * 1000;
    return {
        transport: {
            availableOutgoingBitrate: null !== (l = h.availableOutgoingBitrate) && void 0 !== l ? l : 0,
            bytesReceived: h.bytesReceived,
            bytesSent: h.bytesSent,
            ping: g
        },
        rtp: {
            inbound: m,
            outbound: p
        }
    };
}
