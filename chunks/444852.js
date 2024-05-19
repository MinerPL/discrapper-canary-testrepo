"use strict";
n.r(t), n.d(t, {
  StreamRTCAnalyticsContext: function() {
    return M
  },
  default: function() {
    return y
  }
});
var i = n("392711"),
  r = n.n(i),
  a = n("46973"),
  s = n("570140"),
  o = n("861687"),
  l = n("437263"),
  u = n("924557"),
  d = n("435064"),
  _ = n("811660"),
  c = n("581567"),
  E = n("594190"),
  I = n("166884"),
  T = n("695346"),
  f = n("314897"),
  S = n("592125"),
  h = n("131951"),
  A = n("866960"),
  m = n("19780"),
  N = n("936349"),
  p = n("704806"),
  O = n("626135"),
  C = n("756315"),
  R = n("569545"),
  g = n("297733"),
  L = n("981631"),
  v = n("65154");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class M {
  setActionContext(e) {
    this.actionContext = e
  }
  trackViewerCount(e) {
    this.maxViewers = Math.max(e, this.maxViewers)
  }
  constructor({
    streamRegion: e,
    streamApplication: t,
    streamSourceType: n,
    actionContext: i,
    numViewers: r,
    isBroadcast: a = !1
  }) {
    D(this, "streamRegion", void 0), D(this, "streamApplication", void 0), D(this, "streamSourceType", void 0), D(this, "actionContext", void 0), D(this, "maxViewers", void 0), D(this, "isBroadcast", void 0), this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = i, this.maxViewers = r, this.isBroadcast = a
  }
}
class y extends o.default {
  get isOwner() {
    let {
      ownerId: e
    } = this._streamContext;
    return f.default.getId() === e
  }
  destroy(e) {
    this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy()
  }
  streamUpdate(e) {
    let t = this._videoQuality;
    null != t && (e ? t.pause() : t.resume())
  }
  layoutChange(e) {
    this._videoStreamStats.layoutChange(e)
  }
  getVideoStats() {
    let {
      ownerId: e
    } = this._streamContext, t = this._videoQuality;
    if (null != t) {
      var n;
      let {
        duration: i,
        avg_bitrate: r,
        avg_fps: a,
        avg_resolution: s
      } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
      return {
        duration: i,
        avg_bitrate: r,
        avg_fps: a,
        avg_resolution: s
      }
    }
    return null
  }
  getRegion() {
    return this.analyticsContext.streamRegion
  }
  getMaxViewers() {
    return this.analyticsContext.maxViewers
  }
  updateStats(e) {
    I.default.getCurrentConfig({
      location: "RTCConnection"
    }, {
      autoTrackExposure: !1
    }).enableGoLiveSimulcast && e.forEach(e => {
      let {
        connection: t,
        stats: n
      } = e;
      if (t === this._connection) {
        let e = n.transport.inboundBitrateEstimate;
        if (null != e) {
          var i;
          null === (i = this._goLiveQualityManager) || void 0 === i || i.setGoLiveStreamDowngraded(e < 15e5)
        }
        return
      }
    })
  }
  _initializeEvents() {
    let e = !1;
    this.on(l.RTCConnectionEvent.State, (e, t, n) => {
      if (s.default.wait(() => s.default.dispatch({
          type: "RTC_CONNECTION_STATE",
          state: e,
          ...t,
          ...n,
          streamKey: this._streamKey
        })), e === L.RTCConnectionStates.RTC_CONNECTED) {
        var i;
        null === (i = this._connection) || void 0 === i || i.on(a.BaseConnectionEvent.ScreenshareFinish, (e, t, n, i, r, a, s, o, l, u, d, _, I, T) => {
          let f = this.getMediaSessionId(),
            S = this.getRTCConnectionId(),
            h = this.getGoLiveSource();
          (0, p.getSystemAnalyticsInfo)().then(A => {
            var m, N, p;
            let C = null;
            if (null != A) {
              let {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: i,
                gpu_memory: r
              } = A;
              C = {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: i,
                gpu_memory: r
              }
            }
            let R = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != i ? i : 0) + (null != r ? r : 0) + (null != a ? a : 0) + (null != o ? o : 0) + (null != T ? T : 0) + (null != I ? I : 0),
              g = (null == h ? void 0 : null === (m = h.desktopSource) || void 0 === m ? void 0 : m.sourcePid) != null ? E.default.getGameForPID(h.desktopSource.sourcePid) : null,
              {
                gameName: D,
                gameId: M,
                exe: y,
                distributor: P
              } = (0, c.getRunningGameAnalytics)(g);
            O.default.track(L.AnalyticEvents.SCREENSHARE_FINISHED, {
              screenshare_frames: e,
              videohook_frames: t,
              hybrid_dxgi_frames: n,
              hybrid_gdi_frames: i,
              hybrid_videohook_frames: r,
              hybrid_graphics_capture_frames: a,
              hybrid_capture_method_switches: s,
              quartz_frames: o,
              screencapturekit_frames: T,
              go_live_camera_frames: I,
              total_frames: R,
              desktop_capturer_type: l,
              media_session_id: f,
              rtc_connection_id: S,
              context: v.MediaEngineContextTypes.STREAM,
              screens: u,
              windows: d,
              activity: _,
              soundshare_session: null !== (p = null == h ? void 0 : null === (N = h.desktopSource) || void 0 === N ? void 0 : N.soundshareSession) && void 0 !== p ? p : void 0,
              share_game_name: D,
              share_game_id: M,
              share_game_exe: y,
              share_game_distributor: P,
              ...C
            })
          })
        })
      }
    }), this.on(l.RTCConnectionEvent.Video, (t, n, i, r, a) => {
      let s = (0, R.decodeStreamKey)(this._streamKey);
      s.guildId === t && s.channelId === n && s.ownerId === i && (null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(r, a))
    }), this.on(l.RTCConnectionEvent.VideoSourceQualityChanged, (e, t, n, i, r, a) => {
      s.default.wait(() => s.default.dispatch({
        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
        guildId: e,
        channelId: t,
        senderUserId: n,
        maxResolution: i,
        maxFrameRate: r,
        context: a
      }))
    })
  }
  _getStreamAnalyticsProperties() {
    let {
      streamRegion: e,
      streamApplication: t,
      streamSourceType: n,
      actionContext: i,
      isBroadcast: r
    } = this.analyticsContext, {
      ownerId: a,
      guildId: s
    } = this._streamContext, o = N.default.getRegion(m.default.getHostname()), l = T.BroadcastAutoBroadcast.getSetting(), {
      gameName: u,
      gameId: d,
      exe: _,
      distributor: E
    } = (0, c.getRunningGameAnalytics)(t);
    return {
      channel_id: this.channelId,
      rtc_connection_id: this.getRTCConnectionId(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: a,
      context: v.MediaEngineContextTypes.STREAM,
      guild_id: s,
      stream_region: e,
      stream_source_type: n,
      guild_region: o,
      participant_type: this.isOwner ? "streamer" : "receiver",
      share_application_name: u,
      share_application_id: d,
      share_application_executable: _,
      share_application_distributor: E,
      video_layout: this._videoStreamStats.getLayout(),
      client_event_source: i,
      is_broadcast: r,
      auto_broadcast_enabled: this.isOwner ? l : null,
      voice_backend_version: this.voiceVersion,
      rtc_worker_backend_version: this.rtcWorkerVersion
    }
  }
  _trackVideoStartStats() {
    let e = this.isOwner ? (0, g.default)() : null;
    O.default.track(L.AnalyticEvents.VIDEO_STREAM_STARTED, {
      ...this._getStreamAnalyticsProperties(),
      ...e,
      connection_type: A.default.getType(),
      effective_connection_speed: A.default.getEffectiveConnectionSpeed(),
      service_provider: A.default.getServiceProvider()
    })
  }
  _trackVideoEndStats(e) {
    let t = S.default.getChannel(this.channelId),
      n = null != t ? t.type : null,
      {
        ownerId: i
      } = this._streamContext,
      r = null,
      a = null,
      s = null,
      o = this._videoQuality;
    null != o && (r = this.isOwner ? o.getOutboundStats()[0] : o.getInboundStats(i), a = o.getNetworkStats(), s = this.isOwner ? o.getCodecUsageStats("streamer", this.userId) : o.getCodecUsageStats("receiver", i));
    let l = (0, u.areClipsEnabled)(),
      c = d.default.getSettings(),
      E = this.isOwner ? {
        clips_enabled: c.clipsEnabled && l,
        clips_buffer_length: c.clipsLength
      } : {},
      I = this.isOwner ? {
        bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
      } : {};
    O.default.track(L.AnalyticEvents.VIDEO_STREAM_ENDED, {
      ...r,
      ...s,
      ...a,
      ...this._videoStreamStats.getStats(),
      ...this._soundshareStats.getStats(),
      ...this._getStreamAnalyticsProperties(),
      ...E,
      ...I,
      channel_type: n,
      reason: e,
      max_viewers: this.analyticsContext.maxViewers,
      hostname: this.hostname,
      hardware_enabled: h.default.getHardwareH264(),
      device_performance_class: this.isOwner ? (0, _.getMediaPerformanceClass)() : null
    })
  }
  _getExtraConnectionOptions() {
    return {
      streamUserId: (0, R.decodeStreamKey)(this._streamKey).ownerId
    }
  }
  constructor({
    sessionId: e,
    streamKey: t,
    serverId: n,
    initialLayout: i,
    analyticsContext: a,
    isStreamer: o,
    parentMediaSessionId: l
  }) {
    let u = (0, R.decodeStreamKey)(t),
      {
        guildId: d,
        channelId: _
      } = u;
    super({
      userId: f.default.getId(),
      sessionId: e,
      guildId: d,
      channelId: _,
      context: v.MediaEngineContextTypes.STREAM,
      rtcServerId: n,
      parentMediaSessionId: l
    }), D(this, "analyticsContext", void 0), D(this, "_videoStreamStats", void 0), D(this, "_streamContext", void 0), D(this, "_streamKey", void 0), D(this, "_isStreamer", void 0), D(this, "_updateVideoStreamId", void 0), this._streamContext = u, this._streamKey = t, this._isStreamer = o, this._videoStreamStats = new C.default(i, this.isOwner), this.analyticsContext = a, this._updateVideoStreamId = r().debounce((e, t) => {
      let {
        guildId: n,
        channelId: i,
        ownerId: r
      } = (0, R.decodeStreamKey)(this._streamKey);
      s.default.wait(() => s.default.dispatch({
        type: "RTC_CONNECTION_VIDEO",
        guildId: n,
        channelId: i,
        userId: r,
        streamId: e,
        rtcServerId: t,
        context: v.MediaEngineContextTypes.STREAM
      }))
    }, 200), this._videoStreamStats.start(), this._initializeEvents()
  }
}