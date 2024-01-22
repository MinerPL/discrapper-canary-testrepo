"use strict";
n.r(t), n.d(t, {
  VideoQualityEvent: function() {
    return i
  },
  VideoQuality: function() {
    return h
  }
}), n("222007"), n("424973");
var i, s = n("917351"),
  r = n.n(s),
  a = n("595275"),
  o = n("773364"),
  l = n("398183"),
  u = n("773336"),
  d = n("497407"),
  c = n("44642");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
  return null != e ? Math.round(e) : t
}
class _ {
  set value(e) {
    e && !this.state && (this.begin = this.timestampProducer.now()), !e && this.state && (this.total += this.timestampProducer.now() - Number(this.begin), this.begin = null), this.state = e
  }
  get value() {
    return this.state
  }
  totalDuration() {
    return null != this.begin ? this.total + this.timestampProducer.now() - this.begin : this.total
  }
  constructor(e, t) {
    this.timestampProducer = t, this.total = 0, this.state = e, this.begin = e ? t.now() : null
  }
}(i || (i = {})).FpsUpdate = "fps-update";
class h extends a.default {
  addUserToStatsCollectionPausedSet(e) {
    this.statCollectionPausedUsers.add(e)
  }
  removeUserFromStatsCollectionPausedSet(e) {
    this.statCollectionPausedUsers.delete(e)
  }
  start() {
    this.streamStart = this.timestampProducer.now(), this.connection.on(o.BaseConnectionEvent.Stats, this.sampleStats)
  }
  setOutboundSsrc(e) {
    null == this.outboundStats[e] && (this.outboundStats[e] = new c.OutboundStats(this.timestampProducer))
  }
  getOrCreateInboundStats(e) {
    return null == this.inboundStats[e] && (this.inboundStats[e] = new c.InboundStats(this.timestampProducer)), this.inboundStats[e]
  }
  setInboundUser(e, t) {
    let n = this.getOrCreateInboundStats(e);
    n.setVideoStopped(0 === t, c.VideoStoppedReasons.SenderStopped)
  }
  setUserVideoDisabled(e, t) {
    let n = this.getOrCreateInboundStats(e);
    n.setVideoStopped(t, c.VideoStoppedReasons.ClientSideDisableVideo), !t && n.statsWindow.length > 0 && 0 === n.statsWindow[0].packets && (n.startTime = this.timestampProducer.now())
  }
  pause() {
    !this.paused.value && this.pausedCount++, r.forEach(this.outboundStats, e => {
      e.statsWindow = []
    }), r.forEach(this.inboundStats, e => {
      e.statsWindow = []
    }), this.updateSendState({
      paused: !0
    })
  }
  resume() {
    this.updateSendState({
      paused: !1
    })
  }
  stop() {
    this.connection.off(o.BaseConnectionEvent.Stats, this.sampleStats), this.streamEnd = this.timestampProducer.now(), this.removeAllListeners()
  }
  getNetworkStats() {
    return this.networkQuality.getStats()
  }
  getEncoderUsageStats() {
    let e = new Map;
    for (let t in this.outboundStats) {
      let n = new Map;
      for (let i of this.outboundStats[t].getCodecsUsed()) {
        let s = i.toUpperCase();
        n.set(s, f(this.outboundStats[t].codecBuckets[s])), e.set(parseInt(t), n)
      }
    }
    return e
  }
  getDecoderUsageStats() {
    let e = new Map;
    for (let t in this.inboundStats) {
      let n = new Map;
      for (let i of this.inboundStats[t].getCodecsUsed()) {
        let s = i.toUpperCase();
        n.set(s, f(this.inboundStats[t].codecBuckets[s])), e.set(t, n)
      }
    }
    return e
  }
  getCodecUsageStats(e, t) {
    var n, i, s, r, a, o, l, u, d, f;
    let _ = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
      h = new Map;
    if ("sender" === e || "streamer" === e) {
      let e = this.getEncoderUsageStats();
      if (e.size > 0) {
        let t = [...e.keys()].sort()[0];
        h = e.get(t)
      }
      return {
        codec_asymmetric_session: _,
        codec_h264_encode_duration_sec: null !== (n = h.get(c.CodecTypes.H264)) && void 0 !== n ? n : 0,
        codec_h265_encode_duration_sec: null !== (i = h.get(c.CodecTypes.H265)) && void 0 !== i ? i : 0,
        codec_vp8_encode_duration_sec: null !== (s = h.get(c.CodecTypes.VP8)) && void 0 !== s ? s : 0,
        codec_vp9_encode_duration_sec: null !== (r = h.get(c.CodecTypes.VP9)) && void 0 !== r ? r : 0,
        codec_av1_encode_duration_sec: null !== (a = h.get(c.CodecTypes.AV1)) && void 0 !== a ? a : 0
      }
    } {
      let e = this.getDecoderUsageStats();
      return e.has(t) && (h = e.get(t)), {
        codec_asymmetric_session: _,
        codec_h264_decode_duration_sec: null !== (o = h.get(c.CodecTypes.H264)) && void 0 !== o ? o : 0,
        codec_h265_decode_duration_sec: null !== (l = h.get(c.CodecTypes.H265)) && void 0 !== l ? l : 0,
        codec_vp8_decode_duration_sec: null !== (u = h.get(c.CodecTypes.VP8)) && void 0 !== u ? u : 0,
        codec_vp9_decode_duration_sec: null !== (d = h.get(c.CodecTypes.VP9)) && void 0 !== d ? d : 0,
        codec_av1_decode_duration_sec: null !== (f = h.get(c.CodecTypes.AV1)) && void 0 !== f ? f : 0
      }
    }
  }
  getOutboundStats() {
    let e = [];
    return r.forEach(this.outboundStats, (t, n) => {
      var i, s, r, a;
      let o;
      let l = null === (i = this.connection) || void 0 === i ? void 0 : i.getStreamParameters();
      l.length > 1 && l.forEach(e => {
        if (parseInt(n) === e.ssrc) {
          var t;
          o = null !== (t = e.quality) && void 0 !== t ? t : 50
        }
      });
      let u = [1, 5, 10, 25, 50, 75],
        d = t.vmafHistogram.getReport(u),
        _ = t.psnrHistogram.getReport(u),
        h = t.targetBitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
        g = t.aggregationDuration / 1e3;
      e.push({
        ...this.getStats(t),
        target_fps: g > 0 ? Math.round((null !== (s = t.targetFrames) && void 0 !== s ? s : 0) / g) : 0,
        target_bitrate_network: g > 0 ? Math.round((null !== (r = t.targetBytesNetwork) && void 0 !== r ? r : 0) * 8 / g) : 0,
        target_bitrate_network_percentile1: h.count > 0 ? h.percentiles[1] : null,
        target_bitrate_network_percentile5: h.count > 0 ? h.percentiles[5] : null,
        target_bitrate_network_percentile10: h.count > 0 ? h.percentiles[10] : null,
        target_bitrate_network_percentile25: h.count > 0 ? h.percentiles[25] : null,
        target_bitrate_network_percentile50: h.count > 0 ? h.percentiles[50] : null,
        target_bitrate_network_percentile75: h.count > 0 ? h.percentiles[75] : null,
        target_bitrate_network_percentile99: h.count > 0 ? h.percentiles[99] : null,
        target_bitrate_max: g > 0 ? Math.round((null !== (a = t.targetBytesMax) && void 0 !== a ? a : 0) * 8 / g) : 0,
        duration_encoder_nvidia_cuda: f(t.encoderBuckets[c.Encoders.NVIDIA_CUDA]),
        duration_encoder_nvidia_direct3d: f(t.encoderBuckets[c.Encoders.NVIDIA_DIRECT_3D]),
        duration_encoder_openh264: f(t.encoderBuckets[c.Encoders.OPENH264]),
        duration_encoder_videotoolbox: f(t.encoderBuckets[c.Encoders.VIDEOTOOLBOX]),
        duration_encoder_amd_direct3d: f(t.encoderBuckets[c.Encoders.AMD_DIRECT_3D]),
        duration_encoder_intel: f(t.encoderBuckets[c.Encoders.INTEL]),
        duration_encoder_intel_direct3d: f(t.encoderBuckets[c.Encoders.INTEL_DIRECT_3D]),
        duration_encoder_vp8_libvpx: f(t.encoderBuckets[c.Encoders.VP8_LIBVPX]),
        duration_encoder_uncategorized: f(t.encoderBuckets[c.Encoders.UNCATEGORIZED]),
        duration_encoder_unknown: f(t.encoderBuckets[c.Encoders.UNKNOWN]),
        quality: o,
        average_encode_time_ms: t.averageEncodeTime,
        average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
        encoder_vmaf_score_percentile1: d.count > 0 ? d.percentiles[1] : null,
        encoder_vmaf_score_percentile5: d.count > 0 ? d.percentiles[5] : null,
        encoder_vmaf_score_percentile10: d.count > 0 ? d.percentiles[10] : null,
        encoder_vmaf_score_percentile25: d.count > 0 ? d.percentiles[25] : null,
        encoder_vmaf_score_percentile50: d.count > 0 ? d.percentiles[50] : null,
        encoder_vmaf_score_percentile75: d.count > 0 ? d.percentiles[75] : null,
        average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
        encoder_psnr_db_percentile1: _.count > 0 ? _.percentiles[1] : null,
        encoder_psnr_db_percentile5: _.count > 0 ? _.percentiles[5] : null,
        encoder_psnr_db_percentile10: _.count > 0 ? _.percentiles[10] : null,
        encoder_psnr_db_percentile25: _.count > 0 ? _.percentiles[25] : null,
        encoder_psnr_db_percentile50: _.count > 0 ? _.percentiles[50] : null,
        encoder_psnr_db_percentile75: _.count > 0 ? _.percentiles[75] : null,
        average_outbound_want: t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
        frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
        frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
        frames_dropped_congestion_window: t.framesDroppedCongestionWindow
      })
    }), e
  }
  getInboundStats(e) {
    return this.getStats(this.inboundStats[e])
  }
  destroyUser(e) {
    delete this.inboundStats[e]
  }
  getInboundParticipants() {
    return Object.keys(this.inboundStats)
  }
  updateSendState(e) {
    null != e.paused && (this.paused.value = e.paused), null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
    let t = this.paused.value || this.zeroReceivers.value,
      n = this.videoStopped.value;
    this.videoStopped.value = t, t !== n && r.forEach(this.outboundStats, e => e.statsWindow = [])
  }
  getStats(e) {
    if (null == e) return;
    let t = Number(this.streamStart),
      n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
      i = Math.max(e.aggregationDuration, 0),
      s = i / 1e3,
      r = [1, 5, 10, 25, 50, 75],
      a = e.cpuHistogram.getReport(),
      o = e.memoryHistogram.getReport(),
      l = e.fpsHistogram.getReport(r),
      u = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
      d = e.resolutionHistogram.getReport(r),
      c = {
        duration: Math.floor(n / 1e3),
        duration_aggregation: f(s),
        duration_stopped_receiving: f(e.videoStoppedDuration.asSeconds()),
        duration_stream_under_8mbps: f(e.bitrateBuckets[8e6]),
        duration_stream_under_7mbps: f(e.bitrateBuckets[7e6]),
        duration_stream_under_6mbps: f(e.bitrateBuckets[6e6]),
        duration_stream_under_5mbps: f(e.bitrateBuckets[5e6]),
        duration_stream_under_4mbps: f(e.bitrateBuckets[4e6]),
        duration_stream_under_3mbps: f(e.bitrateBuckets[3e6]),
        duration_stream_under_2mbps: f(e.bitrateBuckets[2e6]),
        duration_stream_under_1_5mbps: f(e.bitrateBuckets[15e5]),
        duration_stream_under_1mbps: f(e.bitrateBuckets[1e6]),
        duration_stream_under_0_5mbps: f(e.bitrateBuckets[5e5]),
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
        duration_paused: f(this.paused.totalDuration() / 1e3),
        duration_zero_receivers: f(this.zeroReceivers.totalDuration() / 1e3),
        duration_video_stopped: f(this.videoStopped.totalDuration() / 1e3),
        client_performance_cpu_percentile25: a.percentiles[25],
        client_performance_cpu_percentile50: a.percentiles[50],
        client_performance_cpu_percentile75: a.percentiles[75],
        client_performance_cpu_percentile90: a.percentiles[90],
        client_performance_cpu_percentile95: a.percentiles[95],
        client_performance_memory_percentile25: o.percentiles[25],
        client_performance_memory_percentile50: o.percentiles[50],
        client_performance_memory_percentile75: o.percentiles[75],
        client_performance_memory_percentile90: o.percentiles[90],
        client_performance_memory_percentile95: o.percentiles[95],
        client_performance_memory_min: o.min,
        client_performance_memory_max: o.max,
        fps_percentile1: l.percentiles[1],
        fps_percentile5: l.percentiles[5],
        fps_percentile10: l.percentiles[10],
        fps_percentile25: l.percentiles[25],
        fps_percentile50: l.percentiles[50],
        fps_percentile75: l.percentiles[75],
        bitrate_percentile1: u.percentiles[1],
        bitrate_percentile5: u.percentiles[5],
        bitrate_percentile10: u.percentiles[10],
        bitrate_percentile25: u.percentiles[25],
        bitrate_percentile50: u.percentiles[50],
        bitrate_percentile75: u.percentiles[75],
        bitrate_percentile99: u.percentiles[99],
        resolution_percentile1: d.percentiles[1],
        resolution_percentile5: d.percentiles[5],
        resolution_percentile10: d.percentiles[10],
        resolution_percentile25: d.percentiles[25],
        resolution_percentile50: d.percentiles[50],
        resolution_percentile75: d.percentiles[75],
        duration_video_effect: f(this.videoEffectDuration.totalDuration() / 1e3)
      },
      {
        bytes: _,
        framesDropped: h,
        framesCodecError: g,
        framesCodec: m,
        framesNetwork: E,
        packets: p,
        packetsLost: v,
        nackCount: S,
        pliCount: T,
        qpSum: I,
        pauseCount: C,
        freezeCount: A,
        totalPausesDuration: y,
        totalFreezesDuration: N,
        totalFramesDuration: R,
        keyframes: O
      } = e.aggregatedProperties;
    return {
      ...c,
      avg_bitrate: s > 0 ? Math.round((null != _ ? _ : 0) * 8 / s) : 0,
      avg_fps: s > 0 ? Math.round((null != m ? m : 0) / s) : 0,
      num_bytes: _,
      num_packets_lost: v,
      num_packets: p,
      num_frames: E,
      num_frames_codec_error: g,
      time_to_first_frame_ms: e.timeToFirstFrame,
      num_frames_dropped: h,
      num_nacks: S,
      num_plis: T,
      qp_sum: I,
      receiver_pause_count: C,
      receiver_freeze_count: A,
      receiver_total_pauses_duration: y,
      receiver_total_freezes_duration: N,
      receiver_total_frames_duration: R,
      num_keyframes: O
    }
  }
  receivedStats(e, t, n) {
    var i, s, a, o;
    let l = t.transport,
      d = (0, u.isWeb)() ? 1 : null !== (s = null === (i = l.receiverReports) || void 0 === i ? void 0 : i.length) && void 0 !== s ? s : 0,
      f = new Set,
      _ = new Set;
    if (this.updateSendState({
        receivers: d
      }), t.rtp.outbound.filter(e => "video" === e.type).forEach(t => {
        if (null != t) {
          var i, s, r, a, o, u, d, _, h;
          let g = t.ssrc,
            m = this.outboundStats[g];
          if (null == m && (console.warn("Unknown outbound video stream with SSRC: ".concat(g)), m = new c.OutboundStats(this.timestampProducer), this.outboundStats[g] = m), null == m.timeToFirstFrame && (t.framesEncoded > 0 || (null !== (i = t.frameRateInput) && void 0 !== i ? i : 0) > 0) && (m.timeToFirstFrame = Math.max(0, e - m.startTime)), !this.videoStopped.value) {
            m.appendAndIncrementStats(c.RawVideoStats.parseOutboundStats(t, e)), m.encoderCodec !== c.CodecTypes.UNKNOWN && f.add(m.encoderCodec);
            let i = null === (s = n.find(e => e.ssrc === g)) || void 0 === s ? void 0 : s.maxBitrate;
            m.appendTargetRates(null === (r = n.find(e => e.ssrc === g)) || void 0 === r ? void 0 : r.maxFrameRate, null !== (o = t.bitrateTarget) && void 0 !== o ? o : Math.min(null !== (a = l.availableOutgoingBitrate) && void 0 !== a ? a : 0, null != i ? i : 0), i), m.averageEncodeTime = null !== (u = t.averageEncodeTime) && void 0 !== u ? u : 0, m.framesDroppedRateLimiter = null !== (d = t.framesDroppedRateLimiter) && void 0 !== d ? d : null, m.framesDroppedEncoderQueue = null !== (_ = t.framesDroppedEncoderQueue) && void 0 !== _ ? _ : null, m.framesDroppedCongestionWindow = null !== (h = t.framesDroppedCongestionWindow) && void 0 !== h ? h : null
          }
        }
      }), !this.paused.value && r.forEach(t.rtp.inbound, (t, n) => {
        let i = t.find(e => "video" === e.type);
        if (null != i) {
          let t = this.inboundStats[n];
          null == t && (console.warn("Unknown inbound video stream for user: ".concat(n)), t = new c.InboundStats(this.timestampProducer), this.inboundStats[n] = t);
          let s = c.RawVideoStats.parseInboundStats(i, e);
          !this.statCollectionPausedUsers.has(n) && t.appendAndIncrementStats(s), this.emit("fps-update", n, s.framesCodec, s.timestamp), t.decoderCodec !== c.CodecTypes.UNKNOWN && _.add(t.decoderCodec), null == t.timeToFirstFrame && i.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime)
        }
      }), 0 !== f.size && 0 !== _.size) {
      ;
      if (a = f, o = _, a.size === o.size && Array.from(a).every(e => o.has(e))) this.symmetricCodecUpdates++;
      else this.asymmetricCodecUpdates++
    }
  }
  updateSystemResourceStats() {
    for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
    for (let e in this.inboundStats) this.inboundStats[e].addSystemResources()
  }
  updateVideoEffectStats(e) {
    let t = null == e ? void 0 : e.rtp.outbound.find(e => "video" === e.type);
    this.videoEffectDuration.value = (null == t ? void 0 : t.type) === "video" && null != t.filter
  }
  constructor(e, t = l.TimeStampProducer) {
    super(), this.connection = e, this.timestampProducer = t, this.networkQuality = new d.default, this.pausedCount = 0, this.outboundStats = {}, this.inboundStats = {}, this.symmetricCodecUpdates = 0, this.asymmetricCodecUpdates = 0, this.statCollectionPausedUsers = new Set, this.sampleStats = e => {
      if (null == e) return;
      let t = this.timestampProducer.now();
      if (this.networkQuality.incrementNetworkStats(t), this.updateSystemResourceStats(), this.updateVideoEffectStats(e), null == e) return;
      let n = this.connection.getStreamParameters();
      this.receivedStats(t, e, n)
    }, this.paused = new _(!1, t), this.zeroReceivers = new _(!1, t), this.videoStopped = new _(!1, t), this.videoEffectDuration = new _(!1, t)
  }
}