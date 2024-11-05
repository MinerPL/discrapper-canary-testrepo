n.d(t, {
    Mq: function () {
        return s;
    },
    Su: function () {
        return i;
    },
    gr: function () {
        return a;
    },
    lG: function () {
        return S;
    },
    m7: function () {
        return y;
    },
    nt: function () {
        return A;
    },
    u7: function () {
        return r;
    },
    z4: function () {
        return b;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(379649),
    f = n(909766),
    _ = n(179654);
function h(e, t, n) {
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
let p = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000],
    m = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    g = [720, 480, 360],
    E = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
((o = r || (r = {})).H264 = 'H264'), (o.H265 = 'H265'), (o.VP8 = 'VP8'), (o.VP9 = 'VP9'), (o.AV1 = 'AV1'), (o.UNKNOWN = 'UNKNOWN'), ((l = i || (i = {})).NVIDIA_CUDA = 'nvidia_cuda'), (l.NVIDIA_DIRECT_3D = 'nvidia_direct_3d'), (l.OPENH264 = 'openh264'), (l.VIDEOTOOLBOX = 'videotoolbox'), (l.AMD_DIRECT_3D = 'amd_direct_3d'), (l.INTEL = 'intel'), (l.INTEL_DIRECT_3D = 'intel_direct_3d'), (l.VP8_LIBVPX = 'vp8_libvpx'), (l.UNCATEGORIZED = 'uncategorized'), (l.UNKNOWN = 'unknown'), ((u = a || (a = {})).VIDEOTOOLBOX = 'videotoolbox'), (u.VP8_LIBVPX = 'vp8_libvpx'), (u.ELECTRON = 'electron'), (u.FFMPEG = 'ffmpeg'), (u.DAV1D = 'dav1d'), (u.UNCATEGORIZED = 'uncategorized'), (u.UNKNOWN = 'unknown');
let v = Object.freeze({
        'nvidia: cuda': 'nvidia_cuda',
        'nvidia: direct3d': 'nvidia_direct_3d',
        'amd: direct3d': 'amd_direct_3d',
        'intel: direct3d': 'intel_direct_3d',
        intel: 'intel',
        VideoToolbox: 'videotoolbox',
        OpenH264: 'openh264',
        libvpx: 'vp8_libvpx'
    }),
    I = Object.freeze({
        VideoToolbox: 'videotoolbox',
        libvpx: 'vp8_libvpx',
        electron: 'electron',
        ffmpeg: 'ffmpeg',
        dav1d: 'dav1d'
    });
function S(e) {
    if (null == e) return 'unknown';
    for (let t of Object.keys(v)) if (e.includes(t)) return v[t];
    return 'uncategorized';
}
((c = s || (s = {}))[(c.None = 0)] = 'None'), (c[(c.ClientSideDisableVideo = 1)] = 'ClientSideDisableVideo'), (c[(c.SenderStopped = 2)] = 'SenderStopped');
function T(e) {
    if (null == e) return 'UNKNOWN';
    if ('H264' === (e = e.toUpperCase())) return 'H264';
    if ('H265' === e) return 'H265';
    if ('VP8' === e) return 'VP8';
    else if ('VP9' === e) return 'VP9';
    else if ('AV1' === e || 'AV1X' === e) return 'AV1';
    else return 'UNKNOWN';
}
class b {
    static parseInboundStats(e, t) {
        var n, r, i, a, s, o, l, u;
        let c = new b();
        return null == e
            ? c
            : ((c.bytes = e.bytesReceived),
              (c.framesCodec = e.framesDecoded),
              (c.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null),
              (c.framesNetwork = e.framesReceived),
              (c.packets = e.packetsReceived),
              (c.packetsLost = e.packetsLost),
              (c.framesDropped = e.framesDropped),
              (c.resolution = null != e.resolution ? e.resolution.height : 0),
              (c.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0),
              (c.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0),
              (c.timestamp = t),
              (c.nackCount = e.nackCount),
              (c.pliCount = e.pliCount),
              (c.decoder = (function (e) {
                  if (null == e) return 'unknown';
                  for (let t of Object.keys(I)) if (e.includes(t)) return I[t];
                  return 'uncategorized';
              })(e.decoderImplementationName)),
              (c.codecType = T(e.codec.name)),
              (c.qpSum = 0),
              (c.freezeCount = e.freezeCount),
              (c.pauseCount = e.pauseCount),
              (c.totalFreezesDuration = e.totalFreezesDuration),
              (c.totalPausesDuration = e.totalPausesDuration),
              (c.totalFramesDuration = e.totalFramesDuration),
              (c.keyframes = null !== (r = e.keyFramesDecoded) && void 0 !== r ? r : null),
              (c.passthroughCount = null !== (i = e.passthroughCount) && void 0 !== i ? i : 0),
              (c.cryptorSuccessCount = null !== (a = e.decryptSuccessCount) && void 0 !== a ? a : 0),
              (c.cryptorFailureCount = null !== (s = e.decryptFailureCount) && void 0 !== s ? s : 0),
              (c.cryptorDuration = null !== (o = e.decryptDuration) && void 0 !== o ? o : 0),
              (c.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0),
              (c.localWant = null !== (u = e.sinkWantLocalAsInt) && void 0 !== u ? u : 0),
              c);
    }
    static parseOutboundStats(e, t) {
        var n, r, i, a, s, o, l, u, c, d, f, _, h, p, m, g, E, v, I, y, A, N, C, R;
        let O = new b();
        return null == e
            ? O
            : {
                  bytes: e.bytesSent,
                  framesCodec: e.framesEncoded,
                  framesCodecError: null,
                  framesNetwork: null !== (n = e.framesSent) && void 0 !== n ? n : 0,
                  packets: e.packetsSent,
                  packetsLost: null !== (r = e.packetsLost) && void 0 !== r ? r : 0,
                  framesDropped: 0,
                  resolution: null != e.resolution ? e.resolution.height : 0,
                  minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
                  majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
                  timestamp: t,
                  encoder: S(e.encoderImplementationName),
                  decoder: null,
                  codecType: T(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: null !== (i = e.freezeCount) && void 0 !== i ? i : 0,
                  pauseCount: 0,
                  totalFreezesDuration: null !== (a = e.totalFreezesDuration) && void 0 !== a ? a : 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: null !== (s = e.totalFramesDuration) && void 0 !== s ? s : 0,
                  outboundSinkWant: null !== (o = e.sinkWantAsInt) && void 0 !== o ? o : null,
                  vmafScore: null !== (l = e.encoderQualityVmaf) && void 0 !== l ? l : null,
                  qualityDecodeErrors: null !== (u = e.qualityDecodeErrors) && void 0 !== u ? u : 0,
                  qualityDecoderReboots: null !== (c = e.qualityDecoderReboots) && void 0 !== c ? c : 0,
                  qualityScoreErrors: null !== (d = e.qualityScoreErrors) && void 0 !== d ? d : 0,
                  qualityFrameDrops: null !== (f = e.qualityFrameDrops) && void 0 !== f ? f : 0,
                  qualitySizeMismatches: null !== (_ = e.qualitySizeMismatches) && void 0 !== _ ? _ : 0,
                  psnrDb: null !== (h = e.encoderQualityPsnr) && void 0 !== h ? h : null,
                  keyframes: null !== (p = e.keyFramesEncoded) && void 0 !== p ? p : null,
                  framesDroppedRateLimiter: null !== (m = e.framesDroppedRateLimiter) && void 0 !== m ? m : null,
                  framesDroppedEncoderQueue: null !== (g = e.framesDroppedEncoderQueue) && void 0 !== g ? g : null,
                  framesDroppedCongestionWindow: null !== (E = e.framesDroppedCongestionWindow) && void 0 !== E ? E : null,
                  framesDroppedEncoder: null !== (v = e.framesDroppedEncoder) && void 0 !== v ? v : null,
                  passthroughCount: null !== (I = e.passthroughCount) && void 0 !== I ? I : 0,
                  cryptorSuccessCount: null !== (y = e.encryptSuccessCount) && void 0 !== y ? y : 0,
                  cryptorFailureCount: null !== (A = e.encryptFailureCount) && void 0 !== A ? A : 0,
                  cryptorDuration: null !== (N = e.encryptDuration) && void 0 !== N ? N : 0,
                  cryptorAttempts: null !== (C = e.encryptAttempts) && void 0 !== C ? C : 0,
                  cryptorMaxAttempts: null !== (R = e.encryptMaxAttempts) && void 0 !== R ? R : 0,
                  localWant: 0
              };
    }
    constructor() {
        h(this, 'bytes', 0), h(this, 'framesCodec', 0), h(this, 'framesCodecError', null), h(this, 'framesNetwork', 0), h(this, 'resolution', 0), h(this, 'minorResolution', 0), h(this, 'majorResolution', 0), h(this, 'timestamp', 0), h(this, 'packets', 0), h(this, 'packetsLost', 0), h(this, 'framesDropped', 0), h(this, 'nackCount', 0), h(this, 'pliCount', 0), h(this, 'encoder', null), h(this, 'decoder', null), h(this, 'codecType', null), h(this, 'qpSum', 0), h(this, 'freezeCount', 0), h(this, 'pauseCount', 0), h(this, 'totalFreezesDuration', 0), h(this, 'totalPausesDuration', 0), h(this, 'totalFramesDuration', 0), h(this, 'vmafScore', null), h(this, 'psnrDb', null), h(this, 'outboundSinkWant', null), h(this, 'keyframes', null), h(this, 'framesDroppedRateLimiter', null), h(this, 'framesDroppedEncoderQueue', null), h(this, 'framesDroppedCongestionWindow', null), h(this, 'framesDroppedEncoder', null), h(this, 'passthroughCount', 0), h(this, 'cryptorSuccessCount', 0), h(this, 'cryptorFailureCount', 0), h(this, 'cryptorDuration', 0), h(this, 'cryptorAttempts', 0), h(this, 'cryptorMaxAttempts', 0), h(this, 'qualityDecodeErrors', 0), h(this, 'qualityDecoderReboots', 0), h(this, 'qualityScoreErrors', 0), h(this, 'qualityFrameDrops', 0), h(this, 'qualitySizeMismatches', 0), h(this, 'localWant', 0);
    }
}
class y {
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    collectAggregationStats(e, t) {
        for (let r of E) {
            var n;
            let i = e[r];
            if (null === i) continue;
            let a = null !== (n = t[r]) && void 0 !== n ? n : 0;
            a > i ? (this.aggregatedProperties[r] += i) : (this.aggregatedProperties[r] += i - a);
        }
        this.aggregationDuration += e.timestamp - t.timestamp;
    }
    setVideoStopped(e, t) {
        if (e) {
            (this.videoStoppedReason |= t), this.videoStoppedWatch.start();
            return;
        }
        (this.videoStoppedReason &= ~t), 0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop());
    }
    appendAndIncrementStats(e) {
        if (this.isVideoStopped) return;
        if ((this.statsWindow.push(e), this.statsWindow.length < 2)) return;
        let t = this.statsWindow[this.statsWindow.length - 1],
            n = this.statsWindow[this.statsWindow.length - 2];
        this.collectAggregationStats(t, n);
        let { bytes: r, framesCodec: i, timestamp: a, resolution: s, minorResolution: o, majorResolution: l, encoder: u, decoder: c, codecType: d, localWant: f } = t,
            { timestamp: _ } = n,
            h = (a - _) / 1000;
        if (((this.intervalTotal += h), (this.resolutionTotal += s * h), (this.minorResolutionTotal += o * h), (this.majorResolutionTotal += l * h), (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)), null != u && null != d && 'encoderBuckets' in this && ((this.encoderBuckets[u] += h), (this.codecBuckets[d] += h), null != t.codecType && 'UNKNOWN' !== t.codecType && (this.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && ((this.vmafScoreNum += 1), (this.vmafScoreSum += e.vmafScore), this.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && ((this.psnrDbNum += 1), (this.psnrDbSum += e.psnrDb), this.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && ((this.outboundSinkWantNum += 1), (this.outboundSinkWantSum += e.outboundSinkWant))), null != c && null != d && 'decoderBuckets' in this && ((this.decoderBuckets[c] += h), (this.codecBuckets[d] += h), null != t.codecType && 'UNKNOWN' !== t.codecType && (this.decoderCodec = t.codecType)), this.statsWindow.length < 6)) return;
        let { bytes: E, framesCodec: v, timestamp: I } = this.statsWindow[this.statsWindow.length - 3];
        g.forEach((e) => {
            s <= e && (this.resolutionBuckets[e] += h);
        });
        let S = (a - I) / 1000,
            T = ((r - E) * 8) / S,
            b = (i - v) / S;
        p.forEach((e) => {
            T <= e && (this.bitrateBuckets[e] += h);
        }),
            m.forEach((e) => {
                b <= e && (this.fpsBuckets[e] += h);
            }),
            this.resolutionHistogram.addSample(s),
            this.bitrateHistogram.addSample(T),
            this.fpsHistogram.addSample(b),
            this.localWantHistogram.addSample(f),
            this.statsWindow.shift();
    }
    addSystemResources() {
        this.systemResources.takeSample();
    }
    appendTransportStats(e) {
        null != e.inboundBitrateEstimate && this.inboundBitrateEstimateHistogram.addSample(e.inboundBitrateEstimate);
    }
    getCodecsUsed() {
        let e = new Set();
        for (let [t, n] of Object.entries(this.codecBuckets)) n > 0 && e.add(t);
        return e;
    }
    constructor(e) {
        h(this, 'decoderBuckets', {
            vp8_libvpx: 0,
            dav1d: 0,
            ffmpeg: 0,
            electron: 0,
            videotoolbox: 0,
            uncategorized: 0,
            unknown: 0
        }),
            h(this, 'codecBuckets', {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0
            }),
            h(this, 'statsWindow', []),
            h(this, 'fpsHistogram', new f.b()),
            h(this, 'bitrateHistogram', new f.b()),
            h(this, 'inboundBitrateEstimateHistogram', new f.b()),
            h(this, 'resolutionHistogram', new f.b()),
            h(this, 'localWantHistogram', new f.b()),
            h(this, 'systemResources', new _.Z()),
            h(this, 'decoderCodec', 'UNKNOWN'),
            h(this, 'startTime', void 0),
            h(this, 'timeToFirstFrame', void 0),
            h(this, 'aggregatedProperties', {
                framesCodec: 0,
                framesNetwork: 0,
                packets: 0,
                packetsLost: 0,
                framesDropped: 0,
                framesCodecError: 0,
                bytes: 0,
                nackCount: 0,
                pliCount: 0,
                qpSum: 0,
                freezeCount: 0,
                pauseCount: 0,
                totalFreezesDuration: 0,
                totalPausesDuration: 0,
                totalFramesDuration: 0,
                keyframes: 0,
                passthroughCount: 0,
                cryptorSuccessCount: 0,
                cryptorFailureCount: 0,
                cryptorDuration: 0,
                cryptorAttempts: 0,
                qualityDecodeErrors: 0,
                qualityDecoderReboots: 0,
                qualityScoreErrors: 0,
                qualityFrameDrops: 0,
                qualitySizeMismatches: 0
            }),
            h(this, 'aggregationDuration', 0),
            h(this, 'bitrateBuckets', {}),
            h(this, 'fpsBuckets', {}),
            h(this, 'resolutionBuckets', {}),
            h(this, 'resolutionTotal', 0),
            h(this, 'minorResolutionTotal', 0),
            h(this, 'majorResolutionTotal', 0),
            h(this, 'intervalTotal', 0),
            h(this, 'cryptorMaxAttempts', 0),
            h(this, 'videoStoppedWatch', void 0),
            h(this, 'videoStoppedReason', 0),
            (this.startTime = e.now()),
            (this.videoStoppedWatch = new d.G9(e)),
            p.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            m.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            g.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
}
class A extends y {
    appendTargetRates(e, t, n, r) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (t = null != t ? t : 0), (n = null != n ? n : 0), (r = null != r ? r : 0);
        let i = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1000;
        (this.targetFrames = this.targetFrames + e * i), (this.targetBytesNetwork = this.targetBytesNetwork + (t / 8) * i), (this.targetBytesMax = this.targetBytesMax + (n / 8) * i), (this.outboundBytesAvailable = this.outboundBytesAvailable + (r / 8) * i), this.targetBitrateHistogram.addSample(t), this.outboundBandwidthSurplus.addSample(r - t);
    }
    constructor(...e) {
        super(...e),
            h(this, 'encoderBuckets', {
                nvidia_cuda: 0,
                nvidia_direct_3d: 0,
                openh264: 0,
                videotoolbox: 0,
                amd_direct_3d: 0,
                intel: 0,
                intel_direct_3d: 0,
                vp8_libvpx: 0,
                uncategorized: 0,
                unknown: 0
            }),
            h(this, 'encoderCodec', 'UNKNOWN'),
            h(this, 'targetFrames', 0),
            h(this, 'targetBytesMax', 0),
            h(this, 'targetBytesNetwork', 0),
            h(this, 'targetBitrateHistogram', new f.b()),
            h(this, 'outboundBytesAvailable', 0),
            h(this, 'outboundBandwidthSurplus', new f.b()),
            h(this, 'averageEncodeTime', 0),
            h(this, 'vmafScoreSum', 0),
            h(this, 'vmafScoreNum', 0),
            h(this, 'vmafHistogram', new f.b()),
            h(this, 'psnrDbSum', 0),
            h(this, 'psnrDbNum', 0),
            h(this, 'psnrHistogram', new f.b()),
            h(this, 'qualityDecodeErrors', 0),
            h(this, 'qualityDecoderReboots', 0),
            h(this, 'qualityScoreErrors', 0),
            h(this, 'qualityFrameDrops', 0),
            h(this, 'qualitySizeMismatches', 0),
            h(this, 'outboundSinkWantSum', 0),
            h(this, 'outboundSinkWantNum', 0),
            h(this, 'framesDroppedRateLimiter', null),
            h(this, 'framesDroppedEncoderQueue', null),
            h(this, 'framesDroppedCongestionWindow', null),
            h(this, 'framesDroppedEncoder', null);
    }
}
