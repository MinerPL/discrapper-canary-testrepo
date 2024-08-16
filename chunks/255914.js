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
        return v;
    },
    nt: function () {
        return O;
    },
    u7: function () {
        return r;
    },
    z4: function () {
        return N;
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
    _ = n(909766),
    E = n(179654);
function f(e, t, n) {
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
let h = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000],
    p = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    m = [720, 480, 360],
    I = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
((o = r || (r = {})).H264 = 'H264'), (o.H265 = 'H265'), (o.VP8 = 'VP8'), (o.VP9 = 'VP9'), (o.AV1 = 'AV1'), (o.UNKNOWN = 'UNKNOWN'), ((l = i || (i = {})).NVIDIA_CUDA = 'nvidia_cuda'), (l.NVIDIA_DIRECT_3D = 'nvidia_direct_3d'), (l.OPENH264 = 'openh264'), (l.VIDEOTOOLBOX = 'videotoolbox'), (l.AMD_DIRECT_3D = 'amd_direct_3d'), (l.INTEL = 'intel'), (l.INTEL_DIRECT_3D = 'intel_direct_3d'), (l.VP8_LIBVPX = 'vp8_libvpx'), (l.UNCATEGORIZED = 'uncategorized'), (l.UNKNOWN = 'unknown'), ((u = a || (a = {})).VIDEOTOOLBOX = 'videotoolbox'), (u.VP8_LIBVPX = 'vp8_libvpx'), (u.ELECTRON = 'electron'), (u.FFMPEG = 'ffmpeg'), (u.DAV1D = 'dav1d'), (u.UNCATEGORIZED = 'uncategorized'), (u.UNKNOWN = 'unknown');
let T = Object.freeze({
        'nvidia: cuda': 'nvidia_cuda',
        'nvidia: direct3d': 'nvidia_direct_3d',
        'amd: direct3d': 'amd_direct_3d',
        'intel: direct3d': 'intel_direct_3d',
        intel: 'intel',
        VideoToolbox: 'videotoolbox',
        libvpx: 'vp8_libvpx'
    }),
    g = Object.freeze({
        VideoToolbox: 'videotoolbox',
        libvpx: 'vp8_libvpx',
        electron: 'electron',
        ffmpeg: 'ffmpeg',
        dav1d: 'dav1d'
    });
function S(e) {
    if (null == e) return 'unknown';
    for (let t of Object.keys(T)) if (e.includes(t)) return T[t];
    return 'uncategorized';
}
((c = s || (s = {}))[(c.None = 0)] = 'None'), (c[(c.ClientSideDisableVideo = 1)] = 'ClientSideDisableVideo'), (c[(c.SenderStopped = 2)] = 'SenderStopped');
function A(e) {
    if (null == e) return 'UNKNOWN';
    if ('H264' === (e = e.toUpperCase())) return 'H264';
    if ('H265' === e) return 'H265';
    if ('VP8' === e) return 'VP8';
    else if ('VP9' === e) return 'VP9';
    else if ('AV1' === e || 'AV1X' === e) return 'AV1';
    else return 'UNKNOWN';
}
class N {
    static parseInboundStats(e, t) {
        var n, r, i, a, s, o, l;
        let u = new N();
        return null == e
            ? u
            : ((u.bytes = e.bytesReceived),
              (u.framesCodec = e.framesDecoded),
              (u.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null),
              (u.framesNetwork = e.framesReceived),
              (u.packets = e.packetsReceived),
              (u.packetsLost = e.packetsLost),
              (u.framesDropped = e.framesDropped),
              (u.resolution = null != e.resolution ? e.resolution.height : 0),
              (u.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0),
              (u.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0),
              (u.timestamp = t),
              (u.nackCount = e.nackCount),
              (u.pliCount = e.pliCount),
              (u.decoder = (function (e) {
                  if (null == e) return 'unknown';
                  for (let t of Object.keys(g)) if (e.includes(t)) return g[t];
                  return 'uncategorized';
              })(e.decoderImplementationName)),
              (u.codecType = A(e.codec.name)),
              (u.qpSum = 0),
              (u.freezeCount = e.freezeCount),
              (u.pauseCount = e.pauseCount),
              (u.totalFreezesDuration = e.totalFreezesDuration),
              (u.totalPausesDuration = e.totalPausesDuration),
              (u.totalFramesDuration = e.totalFramesDuration),
              (u.keyframes = null !== (r = e.keyFramesDecoded) && void 0 !== r ? r : null),
              (u.passthroughCount = null !== (i = e.passthroughCount) && void 0 !== i ? i : 0),
              (u.cryptorSuccessCount = null !== (a = e.decryptSuccessCount) && void 0 !== a ? a : 0),
              (u.cryptorFailureCount = null !== (s = e.decryptFailureCount) && void 0 !== s ? s : 0),
              (u.cryptorDuration = null !== (o = e.decryptDuration) && void 0 !== o ? o : 0),
              (u.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0),
              u);
    }
    static parseOutboundStats(e, t) {
        var n, r, i, a, s, o, l, u, c, d, _, E, f, h, p, m, I, T, g, v;
        let O = new N();
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
                  codecType: A(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: 0,
                  pauseCount: 0,
                  totalFreezesDuration: 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: 0,
                  outboundSinkWant: null !== (i = e.sinkWantAsInt) && void 0 !== i ? i : null,
                  vmafScore: null !== (a = e.encoderQualityVmaf) && void 0 !== a ? a : null,
                  qualityDecodeErrors: null !== (s = e.qualityDecodeErrors) && void 0 !== s ? s : 0,
                  qualityDecoderReboots: null !== (o = e.qualityDecoderReboots) && void 0 !== o ? o : 0,
                  qualityScoreErrors: null !== (l = e.qualityScoreErrors) && void 0 !== l ? l : 0,
                  qualityFrameDrops: null !== (u = e.qualityFrameDrops) && void 0 !== u ? u : 0,
                  qualitySizeMismatches: null !== (c = e.qualitySizeMismatches) && void 0 !== c ? c : 0,
                  psnrDb: null !== (d = e.encoderQualityPsnr) && void 0 !== d ? d : null,
                  keyframes: null !== (_ = e.keyFramesEncoded) && void 0 !== _ ? _ : null,
                  framesDroppedRateLimiter: null !== (E = e.framesDroppedRateLimiter) && void 0 !== E ? E : null,
                  framesDroppedEncoderQueue: null !== (f = e.framesDroppedEncoderQueue) && void 0 !== f ? f : null,
                  framesDroppedCongestionWindow: null !== (h = e.framesDroppedCongestionWindow) && void 0 !== h ? h : null,
                  passthroughCount: null !== (p = e.passthroughCount) && void 0 !== p ? p : 0,
                  cryptorSuccessCount: null !== (m = e.encryptSuccessCount) && void 0 !== m ? m : 0,
                  cryptorFailureCount: null !== (I = e.encryptFailureCount) && void 0 !== I ? I : 0,
                  cryptorDuration: null !== (T = e.encryptDuration) && void 0 !== T ? T : 0,
                  cryptorAttempts: null !== (g = e.encryptAttempts) && void 0 !== g ? g : 0,
                  cryptorMaxAttempts: null !== (v = e.encryptMaxAttempts) && void 0 !== v ? v : 0
              };
    }
    constructor() {
        f(this, 'bytes', 0), f(this, 'framesCodec', 0), f(this, 'framesCodecError', null), f(this, 'framesNetwork', 0), f(this, 'resolution', 0), f(this, 'minorResolution', 0), f(this, 'majorResolution', 0), f(this, 'timestamp', 0), f(this, 'packets', 0), f(this, 'packetsLost', 0), f(this, 'framesDropped', 0), f(this, 'nackCount', 0), f(this, 'pliCount', 0), f(this, 'encoder', null), f(this, 'decoder', null), f(this, 'codecType', null), f(this, 'qpSum', 0), f(this, 'freezeCount', 0), f(this, 'pauseCount', 0), f(this, 'totalFreezesDuration', 0), f(this, 'totalPausesDuration', 0), f(this, 'totalFramesDuration', 0), f(this, 'vmafScore', null), f(this, 'psnrDb', null), f(this, 'outboundSinkWant', null), f(this, 'keyframes', null), f(this, 'framesDroppedRateLimiter', null), f(this, 'framesDroppedEncoderQueue', null), f(this, 'framesDroppedCongestionWindow', null), f(this, 'passthroughCount', 0), f(this, 'cryptorSuccessCount', 0), f(this, 'cryptorFailureCount', 0), f(this, 'cryptorDuration', 0), f(this, 'cryptorAttempts', 0), f(this, 'cryptorMaxAttempts', 0), f(this, 'qualityDecodeErrors', 0), f(this, 'qualityDecoderReboots', 0), f(this, 'qualityScoreErrors', 0), f(this, 'qualityFrameDrops', 0), f(this, 'qualitySizeMismatches', 0);
    }
}
class v {
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    collectAggregationStats(e, t) {
        for (let r of I) {
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
        let { bytes: r, framesCodec: i, timestamp: a, resolution: s, minorResolution: o, majorResolution: l, encoder: u, decoder: c, codecType: d } = t,
            { timestamp: _ } = n,
            E = (a - _) / 1000;
        if (((this.intervalTotal += E), (this.resolutionTotal += s * E), (this.minorResolutionTotal += o * E), (this.majorResolutionTotal += l * E), (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)), null != u && null != d && 'encoderBuckets' in this && ((this.encoderBuckets[u] += E), (this.codecBuckets[d] += E), null != t.codecType && 'UNKNOWN' !== t.codecType && (this.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && ((this.vmafScoreNum += 1), (this.vmafScoreSum += e.vmafScore), this.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && ((this.psnrDbNum += 1), (this.psnrDbSum += e.psnrDb), this.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && ((this.outboundSinkWantNum += 1), (this.outboundSinkWantSum += e.outboundSinkWant))), null != c && null != d && 'decoderBuckets' in this && ((this.decoderBuckets[c] += E), (this.codecBuckets[d] += E), null != t.codecType && 'UNKNOWN' !== t.codecType && (this.decoderCodec = t.codecType)), this.statsWindow.length < 6)) return;
        let { bytes: f, framesCodec: I, timestamp: T } = this.statsWindow[this.statsWindow.length - 3];
        m.forEach((e) => {
            s <= e && (this.resolutionBuckets[e] += E);
        });
        let g = (a - T) / 1000,
            S = ((r - f) * 8) / g,
            A = (i - I) / g;
        h.forEach((e) => {
            S <= e && (this.bitrateBuckets[e] += E);
        }),
            p.forEach((e) => {
                A <= e && (this.fpsBuckets[e] += E);
            }),
            this.resolutionHistogram.addSample(s),
            this.bitrateHistogram.addSample(S),
            this.fpsHistogram.addSample(A),
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
        f(this, 'decoderBuckets', {
            vp8_libvpx: 0,
            dav1d: 0,
            ffmpeg: 0,
            electron: 0,
            videotoolbox: 0,
            uncategorized: 0,
            unknown: 0
        }),
            f(this, 'codecBuckets', {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0
            }),
            f(this, 'statsWindow', []),
            f(this, 'fpsHistogram', new _.b()),
            f(this, 'bitrateHistogram', new _.b()),
            f(this, 'inboundBitrateEstimateHistogram', new _.b()),
            f(this, 'resolutionHistogram', new _.b()),
            f(this, 'systemResources', new E.Z()),
            f(this, 'decoderCodec', 'UNKNOWN'),
            f(this, 'startTime', void 0),
            f(this, 'timeToFirstFrame', void 0),
            f(this, 'aggregatedProperties', {
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
            f(this, 'aggregationDuration', 0),
            f(this, 'bitrateBuckets', {}),
            f(this, 'fpsBuckets', {}),
            f(this, 'resolutionBuckets', {}),
            f(this, 'resolutionTotal', 0),
            f(this, 'minorResolutionTotal', 0),
            f(this, 'majorResolutionTotal', 0),
            f(this, 'intervalTotal', 0),
            f(this, 'cryptorMaxAttempts', 0),
            f(this, 'videoStoppedWatch', void 0),
            f(this, 'videoStoppedReason', 0),
            (this.startTime = e.now()),
            (this.videoStoppedWatch = new d.G9(e)),
            h.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            p.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            m.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
}
class O extends v {
    appendTargetRates(e, t, n, r) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (t = null != t ? t : 0), (n = null != n ? n : 0), (r = null != r ? r : 0);
        let i = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1000;
        (this.targetFrames = this.targetFrames + e * i), (this.targetBytesNetwork = this.targetBytesNetwork + (t / 8) * i), (this.targetBytesMax = this.targetBytesMax + (n / 8) * i), (this.outboundBytesAvailable = this.outboundBytesAvailable + (r / 8) * i), this.targetBitrateHistogram.addSample(t), this.outboundBandwidthSurplus.addSample(r - t);
    }
    constructor(...e) {
        super(...e),
            f(this, 'encoderBuckets', {
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
            f(this, 'encoderCodec', 'UNKNOWN'),
            f(this, 'targetFrames', 0),
            f(this, 'targetBytesMax', 0),
            f(this, 'targetBytesNetwork', 0),
            f(this, 'targetBitrateHistogram', new _.b()),
            f(this, 'outboundBytesAvailable', 0),
            f(this, 'outboundBandwidthSurplus', new _.b()),
            f(this, 'averageEncodeTime', 0),
            f(this, 'vmafScoreSum', 0),
            f(this, 'vmafScoreNum', 0),
            f(this, 'vmafHistogram', new _.b()),
            f(this, 'psnrDbSum', 0),
            f(this, 'psnrDbNum', 0),
            f(this, 'psnrHistogram', new _.b()),
            f(this, 'qualityDecodeErrors', 0),
            f(this, 'qualityDecoderReboots', 0),
            f(this, 'qualityScoreErrors', 0),
            f(this, 'qualityFrameDrops', 0),
            f(this, 'qualitySizeMismatches', 0),
            f(this, 'outboundSinkWantSum', 0),
            f(this, 'outboundSinkWantNum', 0),
            f(this, 'framesDroppedRateLimiter', null),
            f(this, 'framesDroppedEncoderQueue', null),
            f(this, 'framesDroppedCongestionWindow', null);
    }
}
