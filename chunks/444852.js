"use strict";
n.d(t, {
  A: function() {
    return D
  },
  Z: function() {
    return M
  }
}), n(653041), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(46973),
  o = n(570140),
  a = n(861687),
  l = n(437263),
  u = n(924557),
  _ = n(435064),
  d = n(811660),
  c = n(581567),
  E = n(594190),
  I = n(695346),
  T = n(314897),
  h = n(592125),
  S = n(131951),
  f = n(866960),
  N = n(19780),
  A = n(936349),
  m = n(704806),
  O = n(626135),
  R = n(756315),
  C = n(569545),
  p = n(297733),
  g = n(981631),
  L = n(65154);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class D {
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
    isBroadcast: s = !1
  }) {
    v(this, "streamRegion", void 0), v(this, "streamApplication", void 0), v(this, "streamSourceType", void 0), v(this, "actionContext", void 0), v(this, "maxViewers", void 0), v(this, "isBroadcast", void 0), this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = i, this.maxViewers = r, this.isBroadcast = s
  }
}
class M extends a.Z {
  get isOwner() {
    let {
      ownerId: e
    } = this._streamContext;
    return T.default.getId() === e
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
        avg_fps: s,
        avg_resolution: o
      } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
      return {
        duration: i,
        avg_bitrate: r,
        avg_fps: s,
        avg_resolution: o
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
    for (let {
        connection: n,
        stats: i
      }
      of e)
      if (n === this._connection) {
        let e = i.transport.inboundBitrateEstimate;
        if (null != e) {
          if (e > 1e8) break;
          if (this._bandwidthSamples.push(e), this._bandwidthSamples.length > 15 && this._bandwidthSamples.shift(), 15 === this._bandwidthSamples.length) {
            var t;
            let e = r().mean(this._bandwidthSamples);
            null === (t = this._goLiveQualityManager) || void 0 === t || t.setGoLiveStreamDowngraded(e < 1e6)
          }
          break
        }
      }
  }
  _initializeEvents() {
    let e = !1;
    this.on(l.z.State, (e, t, n) => {
      if (o.Z.wait(() => o.Z.dispatch({
          type: "RTC_CONNECTION_STATE",
          state: e,
          ...t,
          ...n,
          streamKey: this._streamKey
        })), e === g.hes.RTC_CONNECTED) {
        var i;
        null === (i = this._connection) || void 0 === i || i.on(s.Sh.ScreenshareFinish, (e, t, n, i, r, s, o, a, l, u, _, d, I, T) => {
          let h = this.getMediaSessionId(),
            S = this.getRTCConnectionId(),
            f = this.getGoLiveSource();
          (0, m.q)().then(N => {
            var A, m, R;
            let C = null;
            if (null != N) {
              let {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: i,
                gpu_memory: r
              } = N;
              C = {
                cpu_brand: e,
                cpu_vendor: t,
                cpu_memory: n,
                gpu_brand: i,
                gpu_memory: r
              }
            }
            let p = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != i ? i : 0) + (null != r ? r : 0) + (null != s ? s : 0) + (null != a ? a : 0) + (null != T ? T : 0) + (null != I ? I : 0),
              v = (null == f ? void 0 : null === (A = f.desktopSource) || void 0 === A ? void 0 : A.sourcePid) != null ? E.ZP.getGameForPID(f.desktopSource.sourcePid) : null,
              {
                gameName: D,
                gameId: M,
                exe: P,
                distributor: y
              } = (0, c.G8)(v);
            O.default.track(g.rMx.SCREENSHARE_FINISHED, {
              screenshare_frames: e,
              videohook_frames: t,
              hybrid_dxgi_frames: n,
              hybrid_gdi_frames: i,
              hybrid_videohook_frames: r,
              hybrid_graphics_capture_frames: s,
              hybrid_capture_method_switches: o,
              quartz_frames: a,
              screencapturekit_frames: T,
              go_live_camera_frames: I,
              total_frames: p,
              desktop_capturer_type: l,
              media_session_id: h,
              rtc_connection_id: S,
              context: L.Yn.STREAM,
              screens: u,
              windows: _,
              activity: d,
              soundshare_session: null !== (R = null == f ? void 0 : null === (m = f.desktopSource) || void 0 === m ? void 0 : m.soundshareSession) && void 0 !== R ? R : void 0,
              share_game_name: D,
              share_game_id: M,
              share_game_exe: P,
              share_game_distributor: y,
              ...C
            })
          })
        })
      }
    }), this.on(l.z.Video, (t, n, i, r, s) => {
      let o = (0, C.my)(this._streamKey);
      if (o.guildId === t && o.channelId === n && o.ownerId === i) null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(r, s)
    }), this.on(l.z.VideoSourceQualityChanged, (e, t, n, i, r, s) => {
      o.Z.wait(() => o.Z.dispatch({
        type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
        guildId: e,
        channelId: t,
        senderUserId: n,
        maxResolution: i,
        maxFrameRate: r,
        context: s
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
      ownerId: s,
      guildId: o
    } = this._streamContext, a = A.Z.getRegion(N.Z.getHostname()), l = I.xd.getSetting(), {
      gameName: u,
      gameId: _,
      exe: d,
      distributor: E
    } = (0, c.G8)(t);
    return {
      channel_id: this.channelId,
      rtc_connection_id: this.getRTCConnectionId(),
      media_session_id: this.getMediaSessionId(),
      parent_media_session_id: this.parentMediaSessionId,
      sender_user_id: s,
      context: L.Yn.STREAM,
      guild_id: o,
      stream_region: e,
      stream_source_type: n,
      guild_region: a,
      participant_type: this.isOwner ? "streamer" : "receiver",
      share_application_name: u,
      share_application_id: _,
      share_application_executable: d,
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
    let e = this.isOwner ? (0, p.Z)() : null;
    O.default.track(g.rMx.VIDEO_STREAM_STARTED, {
      ...this._getStreamAnalyticsProperties(),
      ...e,
      connection_type: f.Z.getType(),
      effective_connection_speed: f.Z.getEffectiveConnectionSpeed(),
      service_provider: f.Z.getServiceProvider()
    })
  }
  _trackVideoEndStats(e) {
    let t = h.Z.getChannel(this.channelId),
      n = null != t ? t.type : null,
      {
        ownerId: i
      } = this._streamContext,
      r = null,
      s = null,
      o = this._videoQuality;
    if (null == o) return;
    r = o.getNetworkStats(), s = this.isOwner ? o.getCodecUsageStats("streamer", this.userId) : o.getCodecUsageStats("receiver", i);
    let a = (0, u.ln)(),
      l = _.Z.getSettings(),
      c = this.isOwner ? {
        clips_enabled: l.clipsEnabled && a,
        clips_buffer_length: l.clipsLength
      } : {},
      E = this.isOwner ? {
        bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
      } : {};
    o.getOutboundStats().forEach(t => {
      var i;
      (null !== (i = t.num_frames) && void 0 !== i ? i : 0) > 0 && O.default.track(g.rMx.VIDEO_STREAM_ENDED, {
        ...t,
        ...s,
        ...r,
        ...this._videoStreamStats.getStats(),
        ...this._soundshareStats.getStats(),
        ...this._getStreamAnalyticsProperties(),
        ...c,
        ...E,
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: S.Z.getHardwareH264(),
        device_performance_class: this.isOwner ? (0, d.R)() : null
      })
    }), o.getInboundParticipants().forEach(t => {
      var i;
      let a = o.getInboundStats(t);
      (null !== (i = null == a ? void 0 : a.num_frames) && void 0 !== i ? i : 0) > 0 && O.default.track(g.rMx.VIDEO_STREAM_ENDED, {
        ...a,
        ...s,
        ...r,
        ...this._videoStreamStats.getStats(),
        ...this._soundshareStats.getStats(),
        ...this._getStreamAnalyticsProperties(),
        ...c,
        ...E,
        channel_type: n,
        reason: e,
        max_viewers: this.analyticsContext.maxViewers,
        hostname: this.hostname,
        hardware_enabled: S.Z.getHardwareH264(),
        device_performance_class: this.isOwner ? (0, d.R)() : null
      })
    })
  }
  _getExtraConnectionOptions() {
    return {
      streamUserId: (0, C.my)(this._streamKey).ownerId
    }
  }
  constructor({
    sessionId: e,
    streamKey: t,
    serverId: n,
    initialLayout: i,
    analyticsContext: s,
    isStreamer: a,
    parentMediaSessionId: l
  }) {
    let u = (0, C.my)(t),
      {
        guildId: _,
        channelId: d
      } = u;
    super({
      userId: T.default.getId(),
      sessionId: e,
      guildId: _,
      channelId: d,
      context: L.Yn.STREAM,
      rtcServerId: n,
      parentMediaSessionId: l
    }), v(this, "analyticsContext", void 0), v(this, "_videoStreamStats", void 0), v(this, "_streamContext", void 0), v(this, "_streamKey", void 0), v(this, "_isStreamer", void 0), v(this, "_updateVideoStreamId", void 0), v(this, "_bandwidthSamples", []), this._streamContext = u, this._streamKey = t, this._isStreamer = a, this._videoStreamStats = new R.Z(i, this.isOwner), this.analyticsContext = s, this._updateVideoStreamId = r().debounce((e, t) => {
      let {
        guildId: n,
        channelId: i,
        ownerId: r
      } = (0, C.my)(this._streamKey);
      o.Z.wait(() => o.Z.dispatch({
        type: "RTC_CONNECTION_VIDEO",
        guildId: n,
        channelId: i,
        userId: r,
        streamId: e,
        rtcServerId: t,
        context: L.Yn.STREAM
      }))
    }, 200), this._videoStreamStats.start(), this._initializeEvents()
  }
}