n.d(t, {
    A: function () {
        return L;
    },
    Z: function () {
        return y;
    }
}),
    n(653041);
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
    f = n(314897),
    h = n(592125),
    p = n(131951),
    I = n(866960),
    m = n(19780),
    T = n(936349),
    S = n(704806),
    g = n(626135),
    A = n(756315),
    N = n(569545),
    O = n(297733),
    R = n(981631),
    v = n(65154);
function C(e, t, n) {
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
class L {
    setActionContext(e) {
        this.actionContext = e;
    }
    trackViewerCount(e) {
        this.maxViewers = Math.max(e, this.maxViewers);
    }
    constructor({ streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r, numViewers: i }) {
        C(this, 'streamRegion', void 0), C(this, 'streamApplication', void 0), C(this, 'streamSourceType', void 0), C(this, 'actionContext', void 0), C(this, 'maxViewers', void 0), (this.streamRegion = e), (this.streamApplication = t), (this.streamSourceType = n), (this.actionContext = r), (this.maxViewers = i);
    }
}
class y extends o.Z {
    get isOwner() {
        let { ownerId: e } = this._streamContext;
        return f.default.getId() === e;
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
        let { ownerId: e } = this._streamContext,
            t = this._videoQuality;
        if (null != t) {
            var n;
            let { duration: r, avg_bitrate: i, avg_fps: a, avg_resolution: s } = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
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
        var t, n, r, a, s, o, l, u, c, d, _, E;
        let f;
        let h = !this.isOwner && (null === (t = this._goLiveQualityManager) || void 0 === t ? void 0 : t.getUserID()) != null;
        let p = 'unknown',
            I = null === (n = e.find((e) => e.connection === this._connection)) || void 0 === n ? void 0 : n.stats;
        if (null != I && h) {
            let e = I.transport.inboundBitrateEstimate;
            null != e && e < 100000000 && (this._bandwidthSamples.push(e), this._bandwidthSamples.length > 10 && this._bandwidthSamples.shift(), 10 === this._bandwidthSamples.length && ((f = i().mean(this._bandwidthSamples)) > 1500000 ? (p = 'HQ') : f < 1000000 && (p = 'LQ')));
        }
        let m = null !== (a = null === (r = this._goLiveQualityManager) || void 0 === r ? void 0 : r.isDowngraded()) && void 0 !== a && a;
        if (('HQ' === p && m ? (this.logger.info('Attempting to upgrade to HQ simulcast stream, bandwidth estimate: '.concat(f)), null === (s = this._goLiveQualityManager) || void 0 === s || s.setGoLiveStreamDowngraded(!1)) : 'LQ' === p && !m && (this.logger.info('Attempting to downgrade to LQ simulcast stream, bandwidth estimate: '.concat(f)), null === (o = this._goLiveQualityManager) || void 0 === o || o.setGoLiveStreamDowngraded(!0)), h)) {
            let e = !(null === (l = this._goLiveQualityManager) || void 0 === l ? void 0 : l.senderSupportsSimulcast()) || (null === (u = this._goLiveQualityManager) || void 0 === u ? void 0 : u.isDowngraded()) === !1;
            null === (c = this._videoQuality) || void 0 === c || c.setViewedSimulcastQuality(e);
            let t = null !== (E = null === (d = this._goLiveQualityManager) || void 0 === d ? void 0 : d.isOneToOneCall()) && void 0 !== E && E,
                n = 'LQ' !== p || !!t;
            null === (_ = this._videoQuality) || void 0 === _ || _.setEligibleSimulcastQuality(n);
        }
    }
    _initializeEvents() {
        let e = !1;
        this.on(l.z.State, (e, t, n) => {
            if (
                (s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_STATE',
                        state: e,
                        ...t,
                        ...n,
                        streamKey: this._streamKey
                    })
                ),
                e === R.hes.RTC_CONNECTED)
            ) {
                var r;
                null === (r = this._connection) ||
                    void 0 === r ||
                    r.on(a.Sh.ScreenshareFinish, (e, t, n, r, i, a, s, o, l, u, c, d, f, h, p, I) => {
                        let m = this.getMediaSessionId(),
                            T = this.getRTCConnectionId(),
                            A = this.getGoLiveSource();
                        (0, S.q)().then((S) => {
                            var N, O, C;
                            let L = null;
                            if (null != S) {
                                let { cpu_brand: e, cpu_vendor: t, cpu_memory: n, gpu_brand: r, gpu_memory: i } = S;
                                L = {
                                    cpu_brand: e,
                                    cpu_vendor: t,
                                    cpu_memory: n,
                                    gpu_brand: r,
                                    gpu_memory: i
                                };
                            }
                            let y = (null != e ? e : 0) + (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != u ? u : 0) + (null != I ? I : 0) + (null != p ? p : 0),
                                D = (null == A ? void 0 : null === (N = A.desktopSource) || void 0 === N ? void 0 : N.sourcePid) != null ? E.ZP.getGameForPID(A.desktopSource.sourcePid) : null,
                                { gameName: b, gameId: M, exe: P, distributor: U } = (0, _.G8)(D);
                            g.default.track(R.rMx.SCREENSHARE_FINISHED, {
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
                                screencapturekit_frames: I,
                                go_live_camera_frames: p,
                                total_frames: y,
                                desktop_capturer_type: c,
                                media_session_id: m,
                                rtc_connection_id: T,
                                context: v.Yn.STREAM,
                                screens: d,
                                windows: f,
                                activity: h,
                                soundshare_session: null !== (C = null == A ? void 0 : null === (O = A.desktopSource) || void 0 === O ? void 0 : O.soundshareSession) && void 0 !== C ? C : void 0,
                                share_game_name: b,
                                share_game_id: M,
                                share_game_exe: P,
                                share_game_distributor: U,
                                ...L
                            });
                        });
                    });
            }
        }),
            this.on(l.z.Video, (t, n, r, i, a) => {
                let s = (0, N.my)(this._streamKey);
                if (s.guildId === t && s.channelId === n && s.ownerId === r) null != this.getMediaSessionId() && !e && (this._trackVideoStartStats(), (e = !0)), this._updateVideoStreamId(i, a);
            }),
            this.on(l.z.VideoSourceQualityChanged, (e, t, n, r, i, a) => {
                s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED',
                        guildId: e,
                        channelId: t,
                        senderUserId: n,
                        maxResolution: r,
                        maxFrameRate: i,
                        context: a
                    })
                );
            }),
            this.on(l.z.SecureFramesUpdate, () => {
                s.Z.wait(() => {
                    s.Z.dispatch({ type: 'RTC_CONNECTION_SECURE_FRAMES_UPDATE' });
                });
            }),
            this.on(l.z.RosterMapUpdate, (e) => {
                s.Z.wait(() => {
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_ROSTER_MAP_UPDATE',
                        userIds: e
                    });
                });
            });
    }
    _getStreamAnalyticsProperties() {
        let { streamRegion: e, streamApplication: t, streamSourceType: n, actionContext: r } = this.analyticsContext,
            { ownerId: i, guildId: a } = this._streamContext,
            s = T.Z.getRegion(m.Z.getHostname()),
            { gameName: o, gameId: l, exe: u, distributor: c } = (0, _.G8)(t);
        return {
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: i,
            context: v.Yn.STREAM,
            guild_id: a,
            stream_region: e,
            stream_source_type: n,
            guild_region: s,
            participant_type: this.isOwner ? 'streamer' : 'receiver',
            share_application_name: o,
            share_application_id: l,
            share_application_executable: u,
            share_application_distributor: c,
            video_layout: this._videoStreamStats.getLayout(),
            client_event_source: r,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    _trackVideoStartStats() {
        let e = this.isOwner ? (0, O.Z)() : null;
        g.default.track(R.rMx.VIDEO_STREAM_STARTED, {
            ...this._getStreamAnalyticsProperties(),
            ...e,
            connection_type: I.Z.getType(),
            effective_connection_speed: I.Z.getEffectiveConnectionSpeed(),
            service_provider: I.Z.getServiceProvider()
        });
    }
    _trackVideoEndStats(e) {
        let t = h.Z.getChannel(this.channelId),
            n = null != t ? t.type : null,
            { ownerId: r } = this._streamContext,
            i = null,
            a = null,
            s = this._videoQuality;
        if (null == s) return;
        (i = s.getNetworkStats()), (a = this.isOwner ? s.getCodecUsageStats('streamer', this.userId) : s.getCodecUsageStats('receiver', r));
        let o = (0, u.ln)(),
            l = c.Z.getSettings(),
            _ = this.isOwner
                ? {
                      clips_enabled: l.clipsEnabled && o,
                      clips_buffer_length: l.clipsLength
                  }
                : {},
            E = this.isOwner ? { bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment() } : {};
        s.getOutboundStats().forEach((t) => {
            var r;
            (null !== (r = t.num_frames) && void 0 !== r ? r : 0) > 0 &&
                g.default.track(R.rMx.VIDEO_STREAM_ENDED, {
                    ...a,
                    ...i,
                    ...this._videoStreamStats.getStats(),
                    ...t,
                    ...this._soundshareStats.getStats(),
                    ...this._getStreamAnalyticsProperties(),
                    ..._,
                    ...E,
                    channel_type: n,
                    reason: e,
                    max_viewers: this.analyticsContext.maxViewers,
                    hostname: this.hostname,
                    hardware_enabled: p.Z.getHardwareEncoding(),
                    device_performance_class: this.isOwner ? (0, d.R)() : null
                });
        }),
            s.getInboundParticipants().forEach((t) => {
                var r;
                let o = s.getInboundStats(t);
                (null !== (r = null == o ? void 0 : o.num_frames) && void 0 !== r ? r : 0) > 0 &&
                    g.default.track(R.rMx.VIDEO_STREAM_ENDED, {
                        ...a,
                        ...i,
                        ...this._videoStreamStats.getStats(),
                        ...o,
                        ...this._soundshareStats.getStats(),
                        ...this._getStreamAnalyticsProperties(),
                        ..._,
                        ...E,
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: p.Z.getHardwareEncoding(),
                        device_performance_class: this.isOwner ? (0, d.R)() : null
                    });
            });
    }
    _getExtraConnectionOptions() {
        return { streamUserId: (0, N.my)(this._streamKey).ownerId };
    }
    constructor({ sessionId: e, streamKey: t, serverId: n, initialLayout: r, analyticsContext: a, isStreamer: o, parentMediaSessionId: l }) {
        let u = (0, N.my)(t),
            { guildId: c, channelId: d } = u;
        super({
            userId: f.default.getId(),
            sessionId: e,
            guildId: c,
            channelId: d,
            context: v.Yn.STREAM,
            rtcServerId: n,
            parentMediaSessionId: l
        }),
            C(this, 'analyticsContext', void 0),
            C(this, '_videoStreamStats', void 0),
            C(this, '_streamContext', void 0),
            C(this, '_streamKey', void 0),
            C(this, '_isStreamer', void 0),
            C(this, '_updateVideoStreamId', void 0),
            C(this, '_bandwidthSamples', []),
            (this._streamContext = u),
            (this._streamKey = t),
            (this._isStreamer = o),
            (this._videoStreamStats = new A.Z(r, this.isOwner)),
            (this.analyticsContext = a),
            (this._updateVideoStreamId = i().debounce((e, t) => {
                let { guildId: n, channelId: r, ownerId: i } = (0, N.my)(this._streamKey);
                s.Z.wait(() =>
                    s.Z.dispatch({
                        type: 'RTC_CONNECTION_VIDEO',
                        guildId: n,
                        channelId: r,
                        userId: i,
                        streamId: e,
                        rtcServerId: t,
                        context: v.Yn.STREAM
                    })
                );
            }, 200)),
            this._videoStreamStats.start(),
            this._initializeEvents();
    }
}
