n.d(t, {
  A: function() {
return D;
  },
  Z: function() {
return L;
  }
}), n(653041), n(47120);
var r = n(392711),
  i = n.n(r),
  a = n(46973),
  s = n(570140),
  o = n(861687),
  l = n(437263),
  u = n(924557),
  c = n(435064),
  d = n(811660),
  _ = n(581567),
  E = n(594190),
  f = n(695346),
  h = n(314897),
  p = n(592125),
  m = n(131951),
  I = n(866960),
  T = n(19780),
  g = n(936349),
  S = n(704806),
  A = n(626135),
  N = n(756315),
  v = n(569545),
  O = n(297733),
  R = n(981631),
  C = n(65154);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class D {
  setActionContext(e) {
this.actionContext = e;
  }
  trackViewerCount(e) {
this.maxViewers = Math.max(e, this.maxViewers);
  }
  constructor({
streamRegion: e,
streamApplication: t,
streamSourceType: n,
actionContext: r,
numViewers: i,
isBroadcast: a = !1
  }) {
y(this, 'streamRegion', void 0), y(this, 'streamApplication', void 0), y(this, 'streamSourceType', void 0), y(this, 'actionContext', void 0), y(this, 'maxViewers', void 0), y(this, 'isBroadcast', void 0), this.streamRegion = e, this.streamApplication = t, this.streamSourceType = n, this.actionContext = r, this.maxViewers = i, this.isBroadcast = a;
  }
}
class L extends o.Z {
  get isOwner() {
let {
  ownerId: e
} = this._streamContext;
return h.default.getId() === e;
  }
  destroy(e) {
this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), super.destroy();
  }
  streamUpdate(e) {
let t = this._videoQuality;
null != t && (e ? t.pause() : t.resume());
  }
  layoutChange(e) {
this._videoStreamStats.layoutChange(e);
  }
  getVideoStats() {
let {
  ownerId: e
} = this._streamContext, t = this._videoQuality;
if (null != t) {
  var n;
  let {
    duration: r,
    avg_bitrate: i,
    avg_fps: a,
    avg_resolution: s
  } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
  return {
    duration: r,
    avg_bitrate: i,
    avg_fps: a,
    avg_resolution: s
  };
}
return null;
  }
  getRegion() {
return this.analyticsContext.streamRegion;
  }
  getMaxViewers() {
return this.analyticsContext.maxViewers;
  }
  updateStats(e) {
var t, n, r, a, s, o;
for (let {
    connection: t,
    stats: n
  }
  of e)
  if (t === this._connection) {
    let e = n.transport.inboundBitrateEstimate;
    if (null != e) {
      if (e > 100000000)
        break;
      if (this._bandwidthSamples.push(e), this._bandwidthSamples.length > 15 && this._bandwidthSamples.shift(), 15 === this._bandwidthSamples.length) {
        let e = i().mean(this._bandwidthSamples),
          t = null !== (a = null === (r = this._goLiveQualityManager) || void 0 === r ? void 0 : r.isDowngraded()) && void 0 !== a && a;
        t && e > 1500000 ? null === (s = this._goLiveQualityManager) || void 0 === s || s.setGoLiveStreamDowngraded(!1) : !t && e < 1000000 && (null === (o = this._goLiveQualityManager) || void 0 === o || o.setGoLiveStreamDowngraded(!0));
      }
      break;
    }
  }
null === (n = this._videoQuality) || void 0 === n || n.setViewedSimulcastQuality(!(null === (t = this._goLiveQualityManager) || void 0 === t ? void 0 : t.isDowngraded()));
  }
  _initializeEvents() {
let e = !1;
this.on(l.z.State, (e, t, n) => {
  if (s.Z.wait(() => s.Z.dispatch({
      type: 'RTC_CONNECTION_STATE',
      state: e,
      ...t,
      ...n,
      streamKey: this._streamKey
    })), e === R.hes.RTC_CONNECTED) {
    var r;
    null === (r = this._connection) || void 0 === r || r.on(a.Sh.ScreenshareFinish, (e, t, n, r, i, a, s, o, l, u, c, d, f, h, p, m) => {
      let I = this.getMediaSessionId(),
        T = this.getRTCConnectionId(),
        g = this.getGoLiveSource();
      (0, S.q)().then(S => {
        var N, v, O;
        let y = null;
        if (null != S) {
          let {
            cpu_brand: e,
            cpu_vendor: t,
            cpu_memory: n,
            gpu_brand: r,
            gpu_memory: i
          } = S;
          y = {
            cpu_brand: e,
            cpu_vendor: t,
            cpu_memory: n,
            gpu_brand: r,
            gpu_memory: i
          };
        }
        let D = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != u ? u : 0) + (null != m ? m : 0) + (null != p ? p : 0),
          L = (null == g ? void 0 : null === (N = g.desktopSource) || void 0 === N ? void 0 : N.sourcePid) != null ? E.ZP.getGameForPID(g.desktopSource.sourcePid) : null,
          {
            gameName: b,
            gameId: M,
            exe: P,
            distributor: U
          } = (0, _.G8)(L);
        A.default.track(R.rMx.SCREENSHARE_FINISHED, {
          screenshare_frames: e,
          videohook_frames: t,
          hybrid_dxgi_frames: n,
          hybrid_gdi_frames: r,
          hybrid_videohook_frames: i,
          hybrid_graphics_capture_frames: a,
          hybrid_capture_method_switches: s,
          hybrid_gdi_bitblt_frames: o,
          hybrid_gdi_printwindow_frames: l,
          quartz_frames: u,
          screencapturekit_frames: m,
          go_live_camera_frames: p,
          total_frames: D,
          desktop_capturer_type: c,
          media_session_id: I,
          rtc_connection_id: T,
          context: C.Yn.STREAM,
          screens: d,
          windows: f,
          activity: h,
          soundshare_session: null !== (O = null == g ? void 0 : null === (v = g.desktopSource) || void 0 === v ? void 0 : v.soundshareSession) && void 0 !== O ? O : void 0,
          share_game_name: b,
          share_game_id: M,
          share_game_exe: P,
          share_game_distributor: U,
          ...y
        });
      });
    });
  }
}), this.on(l.z.Video, (t, n, r, i, a) => {
  let s = (0, v.my)(this._streamKey);
  if (s.guildId === t && s.channelId === n && s.ownerId === r)
    null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), e = !0), this._updateVideoStreamId(i, a);
}), this.on(l.z.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
  s.Z.wait(() => s.Z.dispatch({
    type: 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED',
    guildId: e,
    channelId: t,
    senderUserId: n,
    maxResolution: r,
    maxFrameRate: i,
    context: a
  }));
});
  }
  _getStreamAnalyticsProperties() {
let {
  streamRegion: e,
  streamApplication: t,
  streamSourceType: n,
  actionContext: r,
  isBroadcast: i
} = this.analyticsContext, {
  ownerId: a,
  guildId: s
} = this._streamContext, o = g.Z.getRegion(T.Z.getHostname()), l = f.xd.getSetting(), {
  gameName: u,
  gameId: c,
  exe: d,
  distributor: E
} = (0, _.G8)(t);
return {
  channel_id: this.channelId,
  rtc_connection_id: this.getRTCConnectionId(),
  media_session_id: this.getMediaSessionId(),
  parent_media_session_id: this.parentMediaSessionId,
  sender_user_id: a,
  context: C.Yn.STREAM,
  guild_id: s,
  stream_region: e,
  stream_source_type: n,
  guild_region: o,
  participant_type: this.isOwner ? 'streamer' : 'receiver',
  share_application_name: u,
  share_application_id: c,
  share_application_executable: d,
  share_application_distributor: E,
  video_layout: this._videoStreamStats.getLayout(),
  client_event_source: r,
  is_broadcast: i,
  auto_broadcast_enabled: this.isOwner ? l : null,
  voice_backend_version: this.voiceVersion,
  rtc_worker_backend_version: this.rtcWorkerVersion
};
  }
  _trackVideoStartStats() {
let e = this.isOwner ? (0, O.Z)() : null;
A.default.track(R.rMx.VIDEO_STREAM_STARTED, {
  ...this._getStreamAnalyticsProperties(),
  ...e,
  connection_type: I.Z.getType(),
  effective_connection_speed: I.Z.getEffectiveConnectionSpeed(),
  service_provider: I.Z.getServiceProvider()
});
  }
  _trackVideoEndStats(e) {
let t = p.Z.getChannel(this.channelId),
  n = null != t ? t.type : null,
  {
    ownerId: r
  } = this._streamContext,
  i = null,
  a = null,
  s = this._videoQuality;
if (null == s)
  return;
i = s.getNetworkStats(), a = this.isOwner ? s.getCodecUsageStats('streamer', this.userId) : s.getCodecUsageStats('receiver', r);
let o = (0, u.ln)(),
  l = c.Z.getSettings(),
  _ = this.isOwner ? {
    clips_enabled: l.clipsEnabled && o,
    clips_buffer_length: l.clipsLength
  } : {},
  E = this.isOwner ? {
    bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
  } : {};
s.getOutboundStats().forEach(t => {
  var r;
  (null !== (r = t.num_frames) && void 0 !== r ? r : 0) > 0 && A.default.track(R.rMx.VIDEO_STREAM_ENDED, {
    ...t,
    ...a,
    ...i,
    ...this._videoStreamStats.getStats(),
    ...this._soundshareStats.getStats(),
    ...this._getStreamAnalyticsProperties(),
    ..._,
    ...E,
    channel_type: n,
    reason: e,
    max_viewers: this.analyticsContext.maxViewers,
    hostname: this.hostname,
    hardware_enabled: m.Z.getHardwareEncoding(),
    device_performance_class: this.isOwner ? (0, d.R)() : null
  });
}), s.getInboundParticipants().forEach(t => {
  var r;
  let o = s.getInboundStats(t);
  (null !== (r = null == o ? void 0 : o.num_frames) && void 0 !== r ? r : 0) > 0 && A.default.track(R.rMx.VIDEO_STREAM_ENDED, {
    ...o,
    ...a,
    ...i,
    ...this._videoStreamStats.getStats(),
    ...this._soundshareStats.getStats(),
    ...this._getStreamAnalyticsProperties(),
    ..._,
    ...E,
    channel_type: n,
    reason: e,
    max_viewers: this.analyticsContext.maxViewers,
    hostname: this.hostname,
    hardware_enabled: m.Z.getHardwareEncoding(),
    device_performance_class: this.isOwner ? (0, d.R)() : null
  });
});
  }
  _getExtraConnectionOptions() {
return {
  streamUserId: (0, v.my)(this._streamKey).ownerId
};
  }
  constructor({
sessionId: e,
streamKey: t,
serverId: n,
initialLayout: r,
analyticsContext: a,
isStreamer: o,
parentMediaSessionId: l
  }) {
let u = (0, v.my)(t),
  {
    guildId: c,
    channelId: d
  } = u;
super({
  userId: h.default.getId(),
  sessionId: e,
  guildId: c,
  channelId: d,
  context: C.Yn.STREAM,
  rtcServerId: n,
  parentMediaSessionId: l
}), y(this, 'analyticsContext', void 0), y(this, '_videoStreamStats', void 0), y(this, '_streamContext', void 0), y(this, '_streamKey', void 0), y(this, '_isStreamer', void 0), y(this, '_updateVideoStreamId', void 0), y(this, '_bandwidthSamples', []), this._streamContext = u, this._streamKey = t, this._isStreamer = o, this._videoStreamStats = new N.Z(r, this.isOwner), this.analyticsContext = a, this._updateVideoStreamId = i().debounce((e, t) => {
  let {
    guildId: n,
    channelId: r,
    ownerId: i
  } = (0, v.my)(this._streamKey);
  s.Z.wait(() => s.Z.dispatch({
    type: 'RTC_CONNECTION_VIDEO',
    guildId: n,
    channelId: r,
    userId: i,
    streamId: e,
    rtcServerId: t,
    context: C.Yn.STREAM
  }));
}, 200), this._videoStreamStats.start(), this._initializeEvents();
  }
}