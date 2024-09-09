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
        _ = [],
        E = [];
    for (let t of e.values())
        switch (t.type) {
            case 'candidate-pair':
                c[t.id] = t;
                break;
            case 'codec':
                d[t.id] = t;
                break;
            case 'inbound-rtp':
                _.push(t);
                break;
            case 'outbound-rtp':
                E.push(t);
        }
    let f = Object.values(c).find((e) => 'succeeded' === e.state);
    if (void 0 === f) return null;
    let h = [];
    for (let e of E) {
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
            h.push({
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
            h.push({
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
    let p = {};
    for (let e of _) {
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
            codec: i(s),
            bytesReceived: e.bytesReceived,
            packetsReceived: e.packetsReceived,
            packetsLost: e.packetsLost
        };
        if ('audio' === e.kind) {
            let t = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round((1000 * e.jitterBufferDelay) / e.jitterBufferEmittedCount) : 0;
            null == p[o] && (p[o] = []),
                p[o].push({
                    ...l,
                    audioLevel: e.audioLevel,
                    jitter: 1000 * e.jitter,
                    jitterBuffer: t
                });
        } else if ('video' === e.kind) {
            null == p[o] && (p[o] = []);
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            p[o].push({
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
    let m = (null !== (o = f.currentRoundTripTime) && void 0 !== o ? o : 0) * 1000;
    return {
        transport: {
            availableOutgoingBitrate: null !== (l = f.availableOutgoingBitrate) && void 0 !== l ? l : 0,
            bytesReceived: f.bytesReceived,
            bytesSent: f.bytesSent,
            ping: m
        },
        rtp: {
            inbound: p,
            outbound: h
        }
    };
}
