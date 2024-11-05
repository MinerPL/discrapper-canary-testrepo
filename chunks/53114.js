n.d(t, {
    S: function () {
        return m;
    },
    d: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(47770),
    o = n(46973),
    l = n(379649),
    u = n(358085),
    c = n(709054),
    d = n(140828),
    f = n(255914);
function _(e, t, n) {
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
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class p {
    set value(e) {
        e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && ((this.total += this.timestampProducer.now() - Number(this.begin)), (this.begin = null)), (this.state = e);
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
        _(this, 'timestampProducer', void 0), _(this, 'begin', void 0), _(this, 'total', void 0), _(this, 'state', void 0), (this.timestampProducer = t), (this.total = 0), (this.state = e), (this.begin = e ? t.now() : null);
    }
}
(r || (r = {})).FpsUpdate = 'fps-update';
class m extends s.Z {
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(o.Sh.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new f.nt(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return null == this.inboundStats[e] && (this.inboundStats[e] = new f.m7(this.timestampProducer)), this.inboundStats[e];
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, f.Mq.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, f.Mq.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now());
    }
    setOcclusionIncomingVideoEnabled(e) {
        this.videoStoppedForOcclusion.value = !e;
    }
    setWindowOcclusionState(e) {
        e !== this.windowOccluded.value && this.numWindowOcclusionChanges++, (this.windowOccluded.value = e);
    }
    pause() {
        !this.paused.value && this.pausedCount++,
            a().forEach(this.outboundStats, (e) => {
                e.statsWindow = [];
            }),
            a().forEach(this.inboundStats, (e) => {
                e.statsWindow = [];
            }),
            this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(o.Sh.Stats, this.sampleStats), (this.streamEnd = this.timestampProducer.now()), this.removeAllListeners();
    }
    setViewedSimulcastQuality(e) {
        e !== this.hqSimulcastStreamWatched.value && (this.hqSimulcastStreamWatched.totalDuration() > 0 || this.lqSimulcastStreamWatched.totalDuration() > 0) && this.simulcastQualityChanges++, (this.hqSimulcastStreamWatched.value = e), (this.lqSimulcastStreamWatched.value = !e);
    }
    setEligibleSimulcastQuality(e) {
        (this.hqSimulcastStreamEligible.value = e), (this.lqSimulcastStreamEligible.value = !e);
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
                n.set(i, h(this.outboundStats[t].codecBuckets[i])), e.set(parseInt(t), n);
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
                n.set(i, h(this.inboundStats[t].codecBuckets[i])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        var n, r, i, a, s, o, l, u, c, d;
        let _ = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            h = new Map();
        if ('sender' === e || 'streamer' === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                h = e.get(t);
            }
            return {
                codec_asymmetric_session: _,
                codec_h264_encode_duration_sec: null !== (n = h.get(f.u7.H264)) && void 0 !== n ? n : 0,
                codec_h265_encode_duration_sec: null !== (r = h.get(f.u7.H265)) && void 0 !== r ? r : 0,
                codec_vp8_encode_duration_sec: null !== (i = h.get(f.u7.VP8)) && void 0 !== i ? i : 0,
                codec_vp9_encode_duration_sec: null !== (a = h.get(f.u7.VP9)) && void 0 !== a ? a : 0,
                codec_av1_encode_duration_sec: null !== (s = h.get(f.u7.AV1)) && void 0 !== s ? s : 0
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (h = e.get(t)),
                {
                    codec_asymmetric_session: _,
                    codec_h264_decode_duration_sec: null !== (o = h.get(f.u7.H264)) && void 0 !== o ? o : 0,
                    codec_h265_decode_duration_sec: null !== (l = h.get(f.u7.H265)) && void 0 !== l ? l : 0,
                    codec_vp8_decode_duration_sec: null !== (u = h.get(f.u7.VP8)) && void 0 !== u ? u : 0,
                    codec_vp9_decode_duration_sec: null !== (c = h.get(f.u7.VP9)) && void 0 !== c ? c : 0,
                    codec_av1_decode_duration_sec: null !== (d = h.get(f.u7.AV1)) && void 0 !== d ? d : 0
                }
            );
        }
    }
    getOutboundStats() {
        let e = [];
        return (
            a().forEach(this.outboundStats, (t, n) => {
                var r, i, a, s, o;
                let l;
                let u = null === (r = this.connection) || void 0 === r ? void 0 : r.getStreamParameters();
                u.length > 1 &&
                    u.forEach((e) => {
                        if (parseInt(n) === e.ssrc) {
                            var t;
                            l = null !== (t = e.quality) && void 0 !== t ? t : 50;
                        }
                    });
                let c = [1, 5, 10, 25, 50, 75],
                    d = [1, 5, 10, 25, 50, 75, 99],
                    _ = t.vmafHistogram.getReport(c),
                    p = t.psnrHistogram.getReport(c),
                    m = t.targetBitrateHistogram.getReport(d),
                    g = t.outboundBandwidthSurplus.getReport(d),
                    E = t.aggregationDuration / 1000;
                e.push({
                    ...this.getStats(t),
                    target_fps: E > 0 ? Math.round((null !== (i = t.targetFrames) && void 0 !== i ? i : 0) / E) : 0,
                    target_bitrate_network: E > 0 ? Math.round(((null !== (a = t.targetBytesNetwork) && void 0 !== a ? a : 0) * 8) / E) : 0,
                    target_bitrate_network_percentile1: m.count > 0 ? m.percentiles[1] : null,
                    target_bitrate_network_percentile5: m.count > 0 ? m.percentiles[5] : null,
                    target_bitrate_network_percentile10: m.count > 0 ? m.percentiles[10] : null,
                    target_bitrate_network_percentile25: m.count > 0 ? m.percentiles[25] : null,
                    target_bitrate_network_percentile50: m.count > 0 ? m.percentiles[50] : null,
                    target_bitrate_network_percentile75: m.count > 0 ? m.percentiles[75] : null,
                    target_bitrate_network_percentile99: m.count > 0 ? m.percentiles[99] : null,
                    target_bitrate_max: E > 0 ? Math.round(((null !== (s = t.targetBytesMax) && void 0 !== s ? s : 0) * 8) / E) : 0,
                    outbound_bandwidth_estimate: E > 0 ? Math.round(((null !== (o = t.outboundBytesAvailable) && void 0 !== o ? o : 0) * 8) / E) : 0,
                    outbound_bandwidth_surplus_percentile1: g.count > 0 ? g.percentiles[1] : null,
                    outbound_bandwidth_surplus_percentile5: g.count > 0 ? g.percentiles[5] : null,
                    outbound_bandwidth_surplus_percentile10: g.count > 0 ? g.percentiles[10] : null,
                    outbound_bandwidth_surplus_percentile25: g.count > 0 ? g.percentiles[25] : null,
                    outbound_bandwidth_surplus_percentile50: g.count > 0 ? g.percentiles[50] : null,
                    outbound_bandwidth_surplus_percentile75: g.count > 0 ? g.percentiles[75] : null,
                    outbound_bandwidth_surplus_percentile99: g.count > 0 ? g.percentiles[99] : null,
                    duration_encoder_nvidia_cuda: h(t.encoderBuckets[f.Su.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: h(t.encoderBuckets[f.Su.NVIDIA_DIRECT_3D]),
                    duration_encoder_openh264: h(t.encoderBuckets[f.Su.OPENH264]),
                    duration_encoder_videotoolbox: h(t.encoderBuckets[f.Su.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: h(t.encoderBuckets[f.Su.AMD_DIRECT_3D]),
                    duration_encoder_intel: h(t.encoderBuckets[f.Su.INTEL]),
                    duration_encoder_intel_direct3d: h(t.encoderBuckets[f.Su.INTEL_DIRECT_3D]),
                    duration_encoder_vp8_libvpx: h(t.encoderBuckets[f.Su.VP8_LIBVPX]),
                    duration_encoder_uncategorized: h(t.encoderBuckets[f.Su.UNCATEGORIZED]),
                    duration_encoder_unknown: h(t.encoderBuckets[f.Su.UNKNOWN]),
                    quality: l,
                    average_encode_time_ms: t.averageEncodeTime,
                    average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                    encoder_vmaf_score_percentile1: _.count > 0 ? _.percentiles[1] : null,
                    encoder_vmaf_score_percentile5: _.count > 0 ? _.percentiles[5] : null,
                    encoder_vmaf_score_percentile10: _.count > 0 ? _.percentiles[10] : null,
                    encoder_vmaf_score_percentile25: _.count > 0 ? _.percentiles[25] : null,
                    encoder_vmaf_score_percentile50: _.count > 0 ? _.percentiles[50] : null,
                    encoder_vmaf_score_percentile75: _.count > 0 ? _.percentiles[75] : null,
                    average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                    encoder_psnr_db_percentile1: p.count > 0 ? p.percentiles[1] : null,
                    encoder_psnr_db_percentile5: p.count > 0 ? p.percentiles[5] : null,
                    encoder_psnr_db_percentile10: p.count > 0 ? p.percentiles[10] : null,
                    encoder_psnr_db_percentile25: p.count > 0 ? p.percentiles[25] : null,
                    encoder_psnr_db_percentile50: p.count > 0 ? p.percentiles[50] : null,
                    encoder_psnr_db_percentile75: p.count > 0 ? p.percentiles[75] : null,
                    average_outbound_want: t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                    frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                    frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                    frames_dropped_congestion_window: t.framesDroppedCongestionWindow,
                    frames_dropped_encoder: t.framesDroppedEncoder,
                    duration_hq_simulcast_stream_encoded: h(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: h(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: h(this.bothSimulcastStreamsEncoded.totalDurationSeconds()),
                    duration_fps_bandwidth_limited: h(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: h(this.bandwidthLimitedResolution.totalDurationSeconds())
                });
            }),
            e
        );
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
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && a().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return;
        let t = Number(this.streamStart),
            n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
            r = Math.max(e.aggregationDuration, 0) / 1000,
            i = [1, 5, 10, 25, 50, 75],
            a = e.fpsHistogram.getReport(i),
            s = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
            o = e.resolutionHistogram.getReport(i),
            l = e.inboundBitrateEstimateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
            u = e.localWantHistogram.getReport([1, 5, 10, 25, 50, 75, 90, 95]),
            c = e.systemResources.getStats(),
            d = {
                duration: Math.floor(n / 1000),
                duration_aggregation: h(r),
                duration_stopped_receiving: h(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: h(e.bitrateBuckets[8000000]),
                duration_stream_under_7mbps: h(e.bitrateBuckets[7000000]),
                duration_stream_under_6mbps: h(e.bitrateBuckets[6000000]),
                duration_stream_under_5mbps: h(e.bitrateBuckets[5000000]),
                duration_stream_under_4mbps: h(e.bitrateBuckets[4000000]),
                duration_stream_under_3mbps: h(e.bitrateBuckets[3000000]),
                duration_stream_under_2mbps: h(e.bitrateBuckets[2000000]),
                duration_stream_under_1_5mbps: h(e.bitrateBuckets[1500000]),
                duration_stream_under_1mbps: h(e.bitrateBuckets[1000000]),
                duration_stream_under_0_5mbps: h(e.bitrateBuckets[500000]),
                duration_stream_at_0mbps: h(e.bitrateBuckets[0]),
                duration_fps_under_60: h(e.fpsBuckets[60]),
                duration_fps_under_55: h(e.fpsBuckets[55]),
                duration_fps_under_50: h(e.fpsBuckets[50]),
                duration_fps_under_45: h(e.fpsBuckets[45]),
                duration_fps_under_40: h(e.fpsBuckets[40]),
                duration_fps_under_35: h(e.fpsBuckets[35]),
                duration_fps_under_30: h(e.fpsBuckets[30]),
                duration_fps_under_25: h(e.fpsBuckets[25]),
                duration_fps_under_20: h(e.fpsBuckets[20]),
                duration_fps_under_15: h(e.fpsBuckets[15]),
                duration_fps_under_10: h(e.fpsBuckets[10]),
                duration_fps_under_5: h(e.fpsBuckets[5]),
                duration_fps_at_0: h(e.fpsBuckets[0]),
                avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                duration_resolution_under_720: h(e.resolutionBuckets[720]),
                duration_resolution_under_480: h(e.resolutionBuckets[480]),
                duration_resolution_under_360: h(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: h(this.paused.totalDuration() / 1000),
                duration_zero_receivers: h(this.zeroReceivers.totalDuration() / 1000),
                duration_video_stopped: h(this.videoStopped.totalDuration() / 1000),
                duration_hq_simulcast_stream_watched: h(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                duration_lq_simulcast_stream_watched: h(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                duration_hq_simulcast_stream_eligible: h(this.hqSimulcastStreamEligible.totalDurationSeconds()),
                duration_lq_simulcast_stream_eligible: h(this.lqSimulcastStreamEligible.totalDurationSeconds()),
                num_quality_changes: this.simulcastQualityChanges,
                duration_window_occluded: h(this.windowOccluded.totalDurationSeconds()),
                duration_incoming_video_stopped_for_occlusion: h(this.videoStoppedForOcclusion.totalDurationSeconds()),
                num_window_occlusion_changes: this.numWindowOcclusionChanges,
                fps_percentile1: a.percentiles[1],
                fps_percentile5: a.percentiles[5],
                fps_percentile10: a.percentiles[10],
                fps_percentile25: a.percentiles[25],
                fps_percentile50: a.percentiles[50],
                fps_percentile75: a.percentiles[75],
                bitrate_percentile1: s.percentiles[1],
                bitrate_percentile5: s.percentiles[5],
                bitrate_percentile10: s.percentiles[10],
                bitrate_percentile25: s.percentiles[25],
                bitrate_percentile50: s.percentiles[50],
                bitrate_percentile75: s.percentiles[75],
                bitrate_percentile99: s.percentiles[99],
                resolution_percentile1: o.percentiles[1],
                resolution_percentile5: o.percentiles[5],
                resolution_percentile10: o.percentiles[10],
                resolution_percentile25: o.percentiles[25],
                resolution_percentile50: o.percentiles[50],
                resolution_percentile75: o.percentiles[75],
                inbound_bitrate_estimate_percentile1: l.percentiles[1],
                inbound_bitrate_estimate_percentile5: l.percentiles[5],
                inbound_bitrate_estimate_percentile10: l.percentiles[10],
                inbound_bitrate_estimate_percentile25: l.percentiles[25],
                inbound_bitrate_estimate_percentile50: l.percentiles[50],
                inbound_bitrate_estimate_percentile75: l.percentiles[75],
                inbound_bitrate_estimate_percentile99: l.percentiles[99],
                local_want_percentile1: u.percentiles[1],
                local_want_percentile5: u.percentiles[5],
                local_want_percentile10: u.percentiles[10],
                local_want_percentile25: u.percentiles[25],
                local_want_percentile50: u.percentiles[50],
                local_want_percentile75: u.percentiles[75],
                local_want_percentile90: u.percentiles[90],
                local_want_percentile95: u.percentiles[95],
                average_local_want: u.mean,
                duration_video_effect: h(this.videoEffectDuration.totalDuration() / 1000),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: h(e.decoderBuckets[f.gr.FFMPEG]),
                duration_decoder_dav1d: h(e.decoderBuckets[f.gr.DAV1D]),
                duration_decoder_vp8_libvpx: h(e.decoderBuckets[f.gr.VP8_LIBVPX]),
                duration_decoder_electron: h(e.decoderBuckets[f.gr.ELECTRON]),
                duration_decoder_videotoolbox: h(e.decoderBuckets[f.gr.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: h(e.decoderBuckets[f.gr.UNCATEGORIZED]),
                duration_decoder_unknown: h(e.decoderBuckets[f.gr.UNKNOWN]),
                ...c
            },
            { bytes: _, framesDropped: p, framesCodecError: m, framesCodec: g, framesNetwork: E, packets: v, packetsLost: I, nackCount: S, pliCount: T, qpSum: b, pauseCount: y, freezeCount: A, totalPausesDuration: N, totalFreezesDuration: C, totalFramesDuration: R, keyframes: O, passthroughCount: D, cryptorSuccessCount: L, cryptorFailureCount: x, cryptorDuration: w, cryptorAttempts: M, qualityDecodeErrors: P, qualityDecoderReboots: k, qualityScoreErrors: U, qualityFrameDrops: G, qualitySizeMismatches: B } = e.aggregatedProperties;
        return (
            e instanceof f.nt ? ((d.sender_freeze_count = A), (d.sender_total_freezes_duration = C), (d.sender_total_frames_duration = R)) : ((d.receiver_freeze_count = A), (d.receiver_total_freezes_duration = C), (d.receiver_total_frames_duration = R), (d.receiver_pause_count = y), (d.receiver_total_pauses_duration = N)),
            {
                ...d,
                avg_bitrate: r > 0 ? Math.round(((null != _ ? _ : 0) * 8) / r) : 0,
                avg_fps: r > 0 ? Math.round((null != g ? g : 0) / r) : 0,
                num_bytes: _,
                num_packets_lost: I,
                num_packets: v,
                num_frames: E,
                num_frames_codec_error: m,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: p,
                num_nacks: S,
                num_plis: T,
                qp_sum: b,
                num_keyframes: O,
                cryptor_passthrough_count: D,
                cryptor_success_count: L,
                cryptor_failure_count: x,
                cryptor_duration: w,
                cryptor_attempts: M,
                encoder_quality_decode_errors: P,
                encoder_quality_decoder_reboots: k,
                encoder_quality_score_errors: U,
                encoder_quality_frame_drops: G,
                encoder_quality_size_mismatches: B
            }
        );
    }
    receivedStats(e, t, n) {
        var r, i, s, l;
        let c = t.transport,
            d = (0, u.isWeb)() ? 1 : null !== (i = null === (r = c.receiverReports) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0,
            _ = new Set(),
            h = new Set();
        this.updateSendState({ receivers: d });
        let p = a().max(n.map((e) => e.quality));
        if (
            (t.rtp.outbound
                .filter((e) => 'video' === e.type)
                .forEach((t) => {
                    if (null != t) {
                        let T = t.ssrc,
                            b = this.outboundStats[T];
                        null == b && (console.warn('Unknown outbound video stream with SSRC: '.concat(T)), (b = new f.nt(this.timestampProducer)), (this.outboundStats[T] = b)), null == b.timeToFirstFrame && (t.framesEncoded > 0 || (null !== (r = t.frameRateInput) && void 0 !== r ? r : 0) > 0) && (b.timeToFirstFrame = Math.max(0, e - b.startTime));
                        let y = n.find((e) => e.ssrc === T);
                        var r,
                            i,
                            a,
                            s,
                            l,
                            u,
                            d,
                            h,
                            m,
                            g,
                            E,
                            v,
                            I = !0;
                        if (this.connection.context === o.Yn.STREAM) {
                            var S = this.connection.getRemoteVideoSinkWants(T);
                            (null == S || 0 === S) && (null == y ? void 0 : y.quality) === p && (S = this.connection.getRemoteVideoSinkWants('any')), (I = (null != S ? S : 0) > 0);
                        }
                        let A = this.videoStopped.value || !I;
                        if ((A !== b.isVideoStopped && b.setVideoStopped(A, f.Mq.SenderStopped), !A)) {
                            b.appendAndIncrementStats(f.z4.parseOutboundStats(t, e)), b.encoderCodec !== f.u7.UNKNOWN && _.add(b.encoderCodec);
                            let n = null == y ? void 0 : y.maxBitrate;
                            b.appendTargetRates(null == y ? void 0 : y.maxFrameRate, null !== (a = t.bitrateTarget) && void 0 !== a ? a : Math.min(null !== (i = c.availableOutgoingBitrate) && void 0 !== i ? i : 0, null != n ? n : 0), n, c.availableOutgoingBitrate), (b.averageEncodeTime = null !== (s = t.averageEncodeTime) && void 0 !== s ? s : 0), (b.framesDroppedRateLimiter = null !== (l = t.framesDroppedRateLimiter) && void 0 !== l ? l : null), (b.framesDroppedEncoderQueue = null !== (u = t.framesDroppedEncoderQueue) && void 0 !== u ? u : null), (b.framesDroppedCongestionWindow = null !== (d = t.framesDroppedCongestionWindow) && void 0 !== d ? d : null), (b.framesDroppedEncoder = null !== (h = t.framesDroppedEncoder) && void 0 !== h ? h : null), (this.hqSimulcastStreamEncoded.value = null !== (m = t.hqSimulcastStreamEncoded) && void 0 !== m && m), (this.lqSimulcastStreamEncoded.value = null !== (g = t.lqSimulcastStreamEncoded) && void 0 !== g && g), (this.bothSimulcastStreamsEncoded.value = this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value), (this.bandwidthLimitedResolution.value = null !== (E = t.bandwidthLimitedResolution) && void 0 !== E && E), (this.bandwidthLimitedFramerate.value = null !== (v = t.bandwidthLimitedFrameRate) && void 0 !== v && v);
                        }
                    }
                }),
            !this.paused.value &&
                a().forEach(t.rtp.inbound, (t, n) => {
                    let r = t.find((e) => 'video' === e.type);
                    if (null != r) {
                        let t = this.inboundStats[n];
                        null == t && (console.warn('Unknown inbound video stream for user: '.concat(n)), (t = new f.m7(this.timestampProducer)), (this.inboundStats[n] = t));
                        let i = f.z4.parseInboundStats(r, e);
                        !this.statCollectionPausedUsers.has(n) && (t.appendAndIncrementStats(i), t.appendTransportStats(c)), i.packets > 0 && this.emit('fps-update', n, i.framesCodec, i.timestamp), t.decoderCodec !== f.u7.UNKNOWN && h.add(t.decoderCodec), null == t.timeToFirstFrame && r.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== _.size && 0 !== h.size)
        ) {
            if (((s = _), (l = h), s.size === l.size && Array.from(s).every((e) => l.has(e)))) this.symmetricCodecUpdates++;
            else this.asymmetricCodecUpdates++;
        }
    }
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = null == e ? void 0 : e.rtp.outbound.find((e) => 'video' === e.type);
        this.videoEffectDuration.value = (null == t ? void 0 : t.type) === 'video' && null != t.filter;
    }
    constructor(e, t = l.Z_) {
        super(),
            _(this, 'connection', void 0),
            _(this, 'timestampProducer', void 0),
            _(this, 'networkQuality', void 0),
            _(this, 'paused', void 0),
            _(this, 'pausedCount', void 0),
            _(this, 'zeroReceivers', void 0),
            _(this, 'videoStopped', void 0),
            _(this, 'videoEffectDuration', void 0),
            _(this, 'hqSimulcastStreamEncoded', void 0),
            _(this, 'lqSimulcastStreamEncoded', void 0),
            _(this, 'bothSimulcastStreamsEncoded', void 0),
            _(this, 'hqSimulcastStreamWatched', void 0),
            _(this, 'lqSimulcastStreamWatched', void 0),
            _(this, 'hqSimulcastStreamEligible', void 0),
            _(this, 'lqSimulcastStreamEligible', void 0),
            _(this, 'simulcastQualityChanges', void 0),
            _(this, 'windowOccluded', void 0),
            _(this, 'videoStoppedForOcclusion', void 0),
            _(this, 'numWindowOcclusionChanges', void 0),
            _(this, 'outboundStats', void 0),
            _(this, 'inboundStats', void 0),
            _(this, 'streamStart', void 0),
            _(this, 'streamEnd', void 0),
            _(this, 'symmetricCodecUpdates', void 0),
            _(this, 'asymmetricCodecUpdates', void 0),
            _(this, 'bandwidthLimitedFramerate', void 0),
            _(this, 'bandwidthLimitedResolution', void 0),
            _(this, 'statCollectionPausedUsers', void 0),
            _(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.timestampProducer = t),
            (this.networkQuality = new d.Z()),
            (this.pausedCount = 0),
            (this.simulcastQualityChanges = 0),
            (this.numWindowOcclusionChanges = 0),
            (this.outboundStats = {}),
            (this.inboundStats = {}),
            (this.symmetricCodecUpdates = 0),
            (this.asymmetricCodecUpdates = 0),
            (this.statCollectionPausedUsers = new Set()),
            (this.sampleStats = (e) => {
                if (null == e) return;
                let t = this.timestampProducer.now();
                if ((this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e)) return;
                let n = this.connection.getStreamParameters();
                this.receivedStats(t, e, n);
            }),
            (this.paused = new p(!1, t)),
            (this.zeroReceivers = new p(!1, t)),
            (this.videoStopped = new p(!1, t)),
            (this.videoEffectDuration = new p(!1, t)),
            (this.hqSimulcastStreamEncoded = new p(!1, t)),
            (this.lqSimulcastStreamEncoded = new p(!1, t)),
            (this.bothSimulcastStreamsEncoded = new p(!1, t)),
            (this.hqSimulcastStreamWatched = new p(!1, t)),
            (this.lqSimulcastStreamWatched = new p(!1, t)),
            (this.hqSimulcastStreamEligible = new p(!1, t)),
            (this.lqSimulcastStreamEligible = new p(!1, t)),
            (this.windowOccluded = new p(!1, t)),
            (this.videoStoppedForOcclusion = new p(!1, t)),
            (this.bandwidthLimitedFramerate = new p(!1, t)),
            (this.bandwidthLimitedResolution = new p(!1, t));
    }
}
