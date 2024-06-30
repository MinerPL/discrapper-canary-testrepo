n.d(t, {
    S: function () {
        return p;
    },
    d: function () {
        return r;
    }
}), n(47120), n(653041);
var r, i = n(392711), a = n.n(i), o = n(47770), s = n(46973), l = n(379649), u = n(358085), c = n(709054), d = n(140828), _ = n(255914);
function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class h {
    set value(e) {
        e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && (this.total += this.timestampProducer.now() - Number(this.begin), this.begin = null), this.state = e;
    }
    get value() {
        return this.state;
    }
    totalDuration() {
        return null != this.begin ? this.total + this.timestampProducer.now() - this.begin : this.total;
    }
    totalDurationSeconds() {
        return this.totalDuration() / 1000;
    }
    constructor(e, t) {
        E(this, 'timestampProducer', void 0), E(this, 'begin', void 0), E(this, 'total', void 0), E(this, 'state', void 0), this.timestampProducer = t, this.total = 0, this.state = e, this.begin = e ? t.now() : null;
    }
}
(r || (r = {})).FpsUpdate = 'fps-update';
class p extends o.Z {
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        this.streamStart = this.timestampProducer.now(), this.connection.on(s.Sh.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new _.nt(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return null == this.inboundStats[e] && (this.inboundStats[e] = new _.m7(this.timestampProducer)), this.inboundStats[e];
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, _.Mq.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, _.Mq.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now());
    }
    pause() {
        !this.paused.value && this.pausedCount++, a().forEach(this.outboundStats, e => {
            e.statsWindow = [];
        }), a().forEach(this.inboundStats, e => {
            e.statsWindow = [];
        }), this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(s.Sh.Stats, this.sampleStats), this.streamEnd = this.timestampProducer.now(), this.removeAllListeners();
    }
    setViewedSimulcastQuality(e) {
        this.hqSimulcastStreamWatched.value = e, this.lqSimulcastStreamWatched.value = !e, e !== this.watchingSimulcastHighQuality && this.simulcastQualityChanges++, this.watchingSimulcastHighQuality = e;
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getEncoderUsageStats() {
        let e = new Map();
        for (let t in this.outboundStats) {
            let n = new Map();
            for (let r of this.outboundStats[t].getCodecsUsed()) {
                let i = r.toUpperCase();
                n.set(i, f(this.outboundStats[t].codecBuckets[i])), e.set(parseInt(t), n);
            }
        }
        return e;
    }
    getDecoderUsageStats() {
        let e = new Map();
        for (let t in this.inboundStats) {
            let n = new Map();
            for (let r of this.inboundStats[t].getCodecsUsed()) {
                let i = r.toUpperCase();
                n.set(i, f(this.inboundStats[t].codecBuckets[i])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        var n, r, i, a, o, s, l, u, c, d;
        let E = this.asymmetricCodecUpdates > this.symmetricCodecUpdates, f = new Map();
        if ('sender' === e || 'streamer' === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                f = e.get(t);
            }
            return {
                codec_asymmetric_session: E,
                codec_h264_encode_duration_sec: null !== (n = f.get(_.u7.H264)) && void 0 !== n ? n : 0,
                codec_h265_encode_duration_sec: null !== (r = f.get(_.u7.H265)) && void 0 !== r ? r : 0,
                codec_vp8_encode_duration_sec: null !== (i = f.get(_.u7.VP8)) && void 0 !== i ? i : 0,
                codec_vp9_encode_duration_sec: null !== (a = f.get(_.u7.VP9)) && void 0 !== a ? a : 0,
                codec_av1_encode_duration_sec: null !== (o = f.get(_.u7.AV1)) && void 0 !== o ? o : 0
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return e.has(t) && (f = e.get(t)), {
                codec_asymmetric_session: E,
                codec_h264_decode_duration_sec: null !== (s = f.get(_.u7.H264)) && void 0 !== s ? s : 0,
                codec_h265_decode_duration_sec: null !== (l = f.get(_.u7.H265)) && void 0 !== l ? l : 0,
                codec_vp8_decode_duration_sec: null !== (u = f.get(_.u7.VP8)) && void 0 !== u ? u : 0,
                codec_vp9_decode_duration_sec: null !== (c = f.get(_.u7.VP9)) && void 0 !== c ? c : 0,
                codec_av1_decode_duration_sec: null !== (d = f.get(_.u7.AV1)) && void 0 !== d ? d : 0
            };
        }
    }
    getOutboundStats() {
        let e = [];
        return a().forEach(this.outboundStats, (t, n) => {
            var r, i, a, o;
            let s;
            let l = null === (r = this.connection) || void 0 === r ? void 0 : r.getStreamParameters();
            l.length > 1 && l.forEach(e => {
                if (parseInt(n) === e.ssrc) {
                    var t;
                    s = null !== (t = e.quality) && void 0 !== t ? t : 50;
                }
            });
            let u = [
                    1,
                    5,
                    10,
                    25,
                    50,
                    75
                ], c = t.vmafHistogram.getReport(u), d = t.psnrHistogram.getReport(u), E = t.targetBitrateHistogram.getReport([
                    1,
                    5,
                    10,
                    25,
                    50,
                    75,
                    99
                ]), h = t.aggregationDuration / 1000;
            e.push({
                ...this.getStats(t),
                target_fps: h > 0 ? Math.round((null !== (i = t.targetFrames) && void 0 !== i ? i : 0) / h) : 0,
                target_bitrate_network: h > 0 ? Math.round((null !== (a = t.targetBytesNetwork) && void 0 !== a ? a : 0) * 8 / h) : 0,
                target_bitrate_network_percentile1: E.count > 0 ? E.percentiles[1] : null,
                target_bitrate_network_percentile5: E.count > 0 ? E.percentiles[5] : null,
                target_bitrate_network_percentile10: E.count > 0 ? E.percentiles[10] : null,
                target_bitrate_network_percentile25: E.count > 0 ? E.percentiles[25] : null,
                target_bitrate_network_percentile50: E.count > 0 ? E.percentiles[50] : null,
                target_bitrate_network_percentile75: E.count > 0 ? E.percentiles[75] : null,
                target_bitrate_network_percentile99: E.count > 0 ? E.percentiles[99] : null,
                target_bitrate_max: h > 0 ? Math.round((null !== (o = t.targetBytesMax) && void 0 !== o ? o : 0) * 8 / h) : 0,
                duration_encoder_nvidia_cuda: f(t.encoderBuckets[_.Su.NVIDIA_CUDA]),
                duration_encoder_nvidia_direct3d: f(t.encoderBuckets[_.Su.NVIDIA_DIRECT_3D]),
                duration_encoder_openh264: f(t.encoderBuckets[_.Su.OPENH264]),
                duration_encoder_videotoolbox: f(t.encoderBuckets[_.Su.VIDEOTOOLBOX]),
                duration_encoder_amd_direct3d: f(t.encoderBuckets[_.Su.AMD_DIRECT_3D]),
                duration_encoder_intel: f(t.encoderBuckets[_.Su.INTEL]),
                duration_encoder_intel_direct3d: f(t.encoderBuckets[_.Su.INTEL_DIRECT_3D]),
                duration_encoder_vp8_libvpx: f(t.encoderBuckets[_.Su.VP8_LIBVPX]),
                duration_encoder_uncategorized: f(t.encoderBuckets[_.Su.UNCATEGORIZED]),
                duration_encoder_unknown: f(t.encoderBuckets[_.Su.UNKNOWN]),
                quality: s,
                average_encode_time_ms: t.averageEncodeTime,
                average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                encoder_vmaf_score_percentile1: c.count > 0 ? c.percentiles[1] : null,
                encoder_vmaf_score_percentile5: c.count > 0 ? c.percentiles[5] : null,
                encoder_vmaf_score_percentile10: c.count > 0 ? c.percentiles[10] : null,
                encoder_vmaf_score_percentile25: c.count > 0 ? c.percentiles[25] : null,
                encoder_vmaf_score_percentile50: c.count > 0 ? c.percentiles[50] : null,
                encoder_vmaf_score_percentile75: c.count > 0 ? c.percentiles[75] : null,
                average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                encoder_psnr_db_percentile1: d.count > 0 ? d.percentiles[1] : null,
                encoder_psnr_db_percentile5: d.count > 0 ? d.percentiles[5] : null,
                encoder_psnr_db_percentile10: d.count > 0 ? d.percentiles[10] : null,
                encoder_psnr_db_percentile25: d.count > 0 ? d.percentiles[25] : null,
                encoder_psnr_db_percentile50: d.count > 0 ? d.percentiles[50] : null,
                encoder_psnr_db_percentile75: d.count > 0 ? d.percentiles[75] : null,
                average_outbound_want: t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                frames_dropped_congestion_window: t.framesDroppedCongestionWindow
            });
        }), e;
    }
    getInboundStats(e) {
        return this.getStats(this.inboundStats[e]);
    }
    destroyUser(e) {
        delete this.inboundStats[e];
    }
    getInboundParticipants() {
        return c.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value, n = this.videoStopped.value;
        this.videoStopped.value = t, t !== n && a().forEach(this.outboundStats, e => e.statsWindow = []);
    }
    getStats(e) {
        if (null == e)
            return;
        let t = Number(this.streamStart), n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t, r = Math.max(e.aggregationDuration, 0) / 1000, i = [
                1,
                5,
                10,
                25,
                50,
                75
            ], a = e.fpsHistogram.getReport(i), o = e.bitrateHistogram.getReport([
                1,
                5,
                10,
                25,
                50,
                75,
                99
            ]), s = e.resolutionHistogram.getReport(i), l = e.inboundBitrateEstimateHistogram.getReport([
                1,
                5,
                10,
                25,
                50,
                75,
                99
            ]), u = e.systemResources.getStats(), c = {
                duration: Math.floor(n / 1000),
                duration_aggregation: f(r),
                duration_stopped_receiving: f(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: f(e.bitrateBuckets[8000000]),
                duration_stream_under_7mbps: f(e.bitrateBuckets[7000000]),
                duration_stream_under_6mbps: f(e.bitrateBuckets[6000000]),
                duration_stream_under_5mbps: f(e.bitrateBuckets[5000000]),
                duration_stream_under_4mbps: f(e.bitrateBuckets[4000000]),
                duration_stream_under_3mbps: f(e.bitrateBuckets[3000000]),
                duration_stream_under_2mbps: f(e.bitrateBuckets[2000000]),
                duration_stream_under_1_5mbps: f(e.bitrateBuckets[1500000]),
                duration_stream_under_1mbps: f(e.bitrateBuckets[1000000]),
                duration_stream_under_0_5mbps: f(e.bitrateBuckets[500000]),
                duration_stream_at_0mbps: f(e.bitrateBuckets[0]),
                duration_fps_under_60: f(e.fpsBuckets[60]),
                duration_fps_under_55: f(e.fpsBuckets[55]),
                duration_fps_under_50: f(e.fpsBuckets[50]),
                duration_fps_under_45: f(e.fpsBuckets[45]),
                duration_fps_under_40: f(e.fpsBuckets[40]),
                duration_fps_under_35: f(e.fpsBuckets[35]),
                duration_fps_under_30: f(e.fpsBuckets[30]),
                duration_fps_under_25: f(e.fpsBuckets[25]),
                duration_fps_under_20: f(e.fpsBuckets[20]),
                duration_fps_under_15: f(e.fpsBuckets[15]),
                duration_fps_under_10: f(e.fpsBuckets[10]),
                duration_fps_under_5: f(e.fpsBuckets[5]),
                duration_fps_at_0: f(e.fpsBuckets[0]),
                avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                duration_resolution_under_720: f(e.resolutionBuckets[720]),
                duration_resolution_under_480: f(e.resolutionBuckets[480]),
                duration_resolution_under_360: f(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: f(this.paused.totalDuration() / 1000),
                duration_zero_receivers: f(this.zeroReceivers.totalDuration() / 1000),
                duration_video_stopped: f(this.videoStopped.totalDuration() / 1000),
                duration_hq_simulcast_stream_encoded: f(this.hqSimulcastStreamEncoded.totalDuration() / 1000),
                duration_lq_simulcast_stream_encoded: f(this.lqSimulcastStreamEncoded.totalDuration() / 1000),
                duration_both_simulcast_streams_encoded: f(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                duration_hq_simulcast_stream_watched: f(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                duration_lq_simulcast_stream_watched: f(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                num_quality_changes: this.simulcastQualityChanges,
                fps_percentile1: a.percentiles[1],
                fps_percentile5: a.percentiles[5],
                fps_percentile10: a.percentiles[10],
                fps_percentile25: a.percentiles[25],
                fps_percentile50: a.percentiles[50],
                fps_percentile75: a.percentiles[75],
                bitrate_percentile1: o.percentiles[1],
                bitrate_percentile5: o.percentiles[5],
                bitrate_percentile10: o.percentiles[10],
                bitrate_percentile25: o.percentiles[25],
                bitrate_percentile50: o.percentiles[50],
                bitrate_percentile75: o.percentiles[75],
                bitrate_percentile99: o.percentiles[99],
                resolution_percentile1: s.percentiles[1],
                resolution_percentile5: s.percentiles[5],
                resolution_percentile10: s.percentiles[10],
                resolution_percentile25: s.percentiles[25],
                resolution_percentile50: s.percentiles[50],
                resolution_percentile75: s.percentiles[75],
                inbound_bitrate_estimate_percentile1: l.percentiles[1],
                inbound_bitrate_estimate_percentile5: l.percentiles[5],
                inbound_bitrate_estimate_percentile10: l.percentiles[10],
                inbound_bitrate_estimate_percentile25: l.percentiles[25],
                inbound_bitrate_estimate_percentile50: l.percentiles[50],
                inbound_bitrate_estimate_percentile75: l.percentiles[75],
                inbound_bitrate_estimate_percentile99: l.percentiles[99],
                duration_video_effect: f(this.videoEffectDuration.totalDuration() / 1000),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: f(e.decoderBuckets[_.gr.FFMPEG]),
                duration_decoder_dav1d: f(e.decoderBuckets[_.gr.DAV1D]),
                duration_decoder_vp8_libvpx: f(e.decoderBuckets[_.gr.VP8_LIBVPX]),
                duration_decoder_electron: f(e.decoderBuckets[_.gr.ELECTRON]),
                duration_decoder_videotoolbox: f(e.decoderBuckets[_.gr.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: f(e.decoderBuckets[_.gr.UNCATEGORIZED]),
                duration_decoder_unknown: f(e.decoderBuckets[_.gr.UNKNOWN]),
                ...u
            }, {
                bytes: d,
                framesDropped: E,
                framesCodecError: h,
                framesCodec: p,
                framesNetwork: m,
                packets: I,
                packetsLost: T,
                nackCount: g,
                pliCount: S,
                qpSum: A,
                pauseCount: N,
                freezeCount: v,
                totalPausesDuration: O,
                totalFreezesDuration: R,
                totalFramesDuration: C,
                keyframes: y,
                passthroughCount: D,
                cryptorSuccessCount: L,
                cryptorFailureCount: b,
                cryptorDuration: M,
                cryptorAttempts: P,
                qualityDecodeErrors: U,
                qualityDecoderReboots: w,
                qualityScoreErrors: x,
                qualityFrameDrops: G,
                qualitySizeMismatches: k
            } = e.aggregatedProperties;
        return {
            ...c,
            avg_bitrate: r > 0 ? Math.round((null != d ? d : 0) * 8 / r) : 0,
            avg_fps: r > 0 ? Math.round((null != p ? p : 0) / r) : 0,
            num_bytes: d,
            num_packets_lost: T,
            num_packets: I,
            num_frames: m,
            num_frames_codec_error: h,
            time_to_first_frame_ms: e.timeToFirstFrame,
            num_frames_dropped: E,
            num_nacks: g,
            num_plis: S,
            qp_sum: A,
            receiver_pause_count: N,
            receiver_freeze_count: v,
            receiver_total_pauses_duration: O,
            receiver_total_freezes_duration: R,
            receiver_total_frames_duration: C,
            num_keyframes: y,
            cryptor_passthrough_count: D,
            cryptor_success_count: L,
            cryptor_failure_count: b,
            cryptor_duration: M,
            cryptor_attempts: P,
            encoder_quality_decode_errors: U,
            encoder_quality_decoder_reboots: w,
            encoder_quality_score_errors: x,
            encoder_quality_frame_drops: G,
            encoder_quality_size_mismatches: k
        };
    }
    receivedStats(e, t, n) {
        var r, i, o, s;
        let l = t.transport, c = (0, u.isWeb)() ? 1 : null !== (i = null === (r = l.receiverReports) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0, d = new Set(), E = new Set();
        if (this.updateSendState({ receivers: c }), t.rtp.outbound.filter(e => 'video' === e.type).forEach(t => {
                if (null != t) {
                    var r, i, a, o, s, u, c, E, f, h, p;
                    let m = t.ssrc, I = this.outboundStats[m];
                    if (null == I && (console.warn('Unknown outbound video stream with SSRC: '.concat(m)), I = new _.nt(this.timestampProducer), this.outboundStats[m] = I), null == I.timeToFirstFrame && (t.framesEncoded > 0 || (null !== (r = t.frameRateInput) && void 0 !== r ? r : 0) > 0) && (I.timeToFirstFrame = Math.max(0, e - I.startTime)), !this.videoStopped.value) {
                        I.appendAndIncrementStats(_.z4.parseOutboundStats(t, e)), I.encoderCodec !== _.u7.UNKNOWN && d.add(I.encoderCodec);
                        let r = null === (i = n.find(e => e.ssrc === m)) || void 0 === i ? void 0 : i.maxBitrate;
                        I.appendTargetRates(null === (a = n.find(e => e.ssrc === m)) || void 0 === a ? void 0 : a.maxFrameRate, null !== (s = t.bitrateTarget) && void 0 !== s ? s : Math.min(null !== (o = l.availableOutgoingBitrate) && void 0 !== o ? o : 0, null != r ? r : 0), r), I.averageEncodeTime = null !== (u = t.averageEncodeTime) && void 0 !== u ? u : 0, I.framesDroppedRateLimiter = null !== (c = t.framesDroppedRateLimiter) && void 0 !== c ? c : null, I.framesDroppedEncoderQueue = null !== (E = t.framesDroppedEncoderQueue) && void 0 !== E ? E : null, I.framesDroppedCongestionWindow = null !== (f = t.framesDroppedCongestionWindow) && void 0 !== f ? f : null, this.hqSimulcastStreamEncoded.value = null !== (h = t.hqSimulcastStreamEncoded) && void 0 !== h && h, this.lqSimulcastStreamEncoded.value = null !== (p = t.lqSimulcastStreamEncoded) && void 0 !== p && p, this.bothSimulcastStreamsEncoded.value = this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value;
                    }
                }
            }), !this.paused.value && a().forEach(t.rtp.inbound, (t, n) => {
                let r = t.find(e => 'video' === e.type);
                if (null != r) {
                    let t = this.inboundStats[n];
                    null == t && (console.warn('Unknown inbound video stream for user: '.concat(n)), t = new _.m7(this.timestampProducer), this.inboundStats[n] = t);
                    let i = _.z4.parseInboundStats(r, e);
                    !this.statCollectionPausedUsers.has(n) && (t.appendAndIncrementStats(i), t.appendTransportStats(l)), i.packets > 0 && this.emit('fps-update', n, i.framesCodec, i.timestamp), t.decoderCodec !== _.u7.UNKNOWN && E.add(t.decoderCodec), null == t.timeToFirstFrame && r.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                }
            }), 0 !== d.size && 0 !== E.size) {
            ;
            if (o = d, s = E, o.size === s.size && Array.from(o).every(e => s.has(e)))
                this.symmetricCodecUpdates++;
            else
                this.asymmetricCodecUpdates++;
        }
    }
    updateSystemResourceStats() {
        for (let e in this.outboundStats)
            this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats)
            this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = null == e ? void 0 : e.rtp.outbound.find(e => 'video' === e.type);
        this.videoEffectDuration.value = (null == t ? void 0 : t.type) === 'video' && null != t.filter;
    }
    constructor(e, t = l.Z_) {
        super(), E(this, 'connection', void 0), E(this, 'timestampProducer', void 0), E(this, 'networkQuality', void 0), E(this, 'paused', void 0), E(this, 'pausedCount', void 0), E(this, 'zeroReceivers', void 0), E(this, 'videoStopped', void 0), E(this, 'videoEffectDuration', void 0), E(this, 'hqSimulcastStreamEncoded', void 0), E(this, 'lqSimulcastStreamEncoded', void 0), E(this, 'bothSimulcastStreamsEncoded', void 0), E(this, 'hqSimulcastStreamWatched', void 0), E(this, 'lqSimulcastStreamWatched', void 0), E(this, 'simulcastQualityChanges', void 0), E(this, 'watchingSimulcastHighQuality', void 0), E(this, 'outboundStats', void 0), E(this, 'inboundStats', void 0), E(this, 'streamStart', void 0), E(this, 'streamEnd', void 0), E(this, 'symmetricCodecUpdates', void 0), E(this, 'asymmetricCodecUpdates', void 0), E(this, 'statCollectionPausedUsers', void 0), E(this, 'sampleStats', void 0), this.connection = e, this.timestampProducer = t, this.networkQuality = new d.Z(), this.pausedCount = 0, this.simulcastQualityChanges = 0, this.watchingSimulcastHighQuality = !0, this.outboundStats = {}, this.inboundStats = {}, this.symmetricCodecUpdates = 0, this.asymmetricCodecUpdates = 0, this.statCollectionPausedUsers = new Set(), this.sampleStats = e => {
            if (null == e)
                return;
            let t = this.timestampProducer.now();
            if (this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e)
                return;
            let n = this.connection.getStreamParameters();
            this.receivedStats(t, e, n);
        }, this.paused = new h(!1, t), this.zeroReceivers = new h(!1, t), this.videoStopped = new h(!1, t), this.videoEffectDuration = new h(!1, t), this.hqSimulcastStreamEncoded = new h(!1, t), this.lqSimulcastStreamEncoded = new h(!1, t), this.bothSimulcastStreamsEncoded = new h(!1, t), this.hqSimulcastStreamWatched = new h(!1, t), this.lqSimulcastStreamWatched = new h(!1, t);
    }
}
