n.d(t, {
    S: function () {
        return s.S;
    },
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(117806),
    i = n.n(r),
    a = n(47770),
    s = n(445686),
    o = n(701597),
    l = n(65154);
function u(e, t, n) {
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
let c = 0;
class d extends a.Z {
    destroy() {
        (this.destroyed = !0), this.framerateReducer.destroy(), this.setConnectionState(l.$j.DISCONNECTED), this.emit(s.S.Destroy, this), this.removeAllListeners();
    }
    getLocalMute(e) {
        return this.localMutes[e] || !1;
    }
    getLocalVideoDisabled(e) {
        var t;
        return null !== (t = this.disabledLocalVideos[e]) && void 0 !== t && t;
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(s.S.LocalVideoDisabled, e, t);
    }
    getHasActiveVideoOutputSink(e) {
        var t;
        return null !== (t = this.activeOutputSinks[e]) && void 0 !== t && t;
    }
    setHasActiveVideoOutputSink(e, t) {
        (this.isActiveOutputSinksEnabled = !0), (this.activeOutputSinks[e] = t), this.emit(s.S.ActiveSinksChange, e, t);
    }
    getActiveOutputSinkTrackingEnabled() {
        return this.isActiveOutputSinksEnabled;
    }
    setUseElectronVideo(e) {
        this.useElectronVideo = e;
    }
    setClipRecordUser(e, t, n) {}
    setViewerSideClip(e) {}
    setRemoteAudioHistory(e) {}
    setClipsKeyFrameInterval(e) {}
    setQualityDecoupling(e) {}
    presentDesktopSourcePicker(e) {}
    getStreamParameters() {
        return i()(this.videoStreamParameters);
    }
    setExperimentFlag(e, t) {
        t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e);
    }
    setConnectionState(e) {
        this.logger.info('Connection state change: '.concat(this.connectionState, ' => ').concat(e)), (this.connectionState = e), this.emit(s.S.ConnectionStateChange, this.connectionState);
    }
    updateVideoQuality(e) {
        var t, n;
        let { quality: r, constraints: a } = this.applyQualityConstraints({}, this.videoStreamParameters[0].ssrc),
            s = i()(this.videoStreamParameters);
        null != r && ((s[0].maxBitrate = r.bitrateMax), (s[0].minBitrate = r.bitrateMin), (s[0].targetBitrate = null !== (t = r.bitrateTarget) && void 0 !== t ? t : 0), null != r.encode && ((s[0].maxPixelCount = r.encode.pixelCount), (s[0].maxFrameRate = r.encode.framerate))), (this.videoStreamParameters = s);
        for (let e = 1; e < this.videoStreamParameters.length; e++) {
            let { quality: t, constraints: i } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
            null != t && ((this.videoStreamParameters[e].maxBitrate = t.bitrateMax), (this.videoStreamParameters[e].minBitrate = t.bitrateMin), (this.videoStreamParameters[e].targetBitrate = null !== (n = t.bitrateTarget) && void 0 !== n ? n : 0), null != t.encode && ((this.videoStreamParameters[e].maxPixelCount = t.encode.pixelCount), (this.videoStreamParameters[e].maxFrameRate = t.encode.framerate))), 100 === this.videoStreamParameters[e].quality && ((a = i), (r = t));
        }
        (a.streamParameters = i()(this.videoStreamParameters)),
            (a.remoteSinkWantsPixelCount = Math.max(
                ...this.videoStreamParameters.map((e) => {
                    var t;
                    return null !== (t = e.maxPixelCount) && void 0 !== t ? t : 0;
                })
            ));
        let o = this.pickProperties(a, e);
        this.logger.info('updateVideoQuality: '.concat(JSON.stringify(o, void 0, 4))), this.updateVideoQualityCore(o, r);
    }
    applyVideoQualityMode(e) {
        if (this.context !== l.Yn.DEFAULT) return;
        let t = o.DM[e];
        this.videoQualityManager.setQualityOverwrite(t), this.updateVideoQuality();
    }
    overwriteQualityForTesting(e) {
        this.videoQualityManager.setQualityOverwrite(e), this.updateVideoQuality();
    }
    applyQualityConstraints() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return this.videoQualityManager.applyQualityConstraints(e, t);
    }
    pickProperties(e, t) {
        if (null == t || null == e) return e;
        let n = {};
        for (let r of t) n[r] = e[r];
        return n;
    }
    initializeStreamParameters(e) {
        let t = this.videoQualityManager.getQuality();
        this.videoStreamParameters = e
            .filter((e) => (e.type === l.Tr.VIDEO || e.type === l.Tr.SCREEN) && 'string' == typeof e.rid)
            .map((e) => {
                var n, r, i, a;
                return {
                    type: e.type,
                    active: e.active,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    maxBitrate: (null !== (a = e.quality) && void 0 !== a ? a : 100) < 100 ? t.bitrateMax / 4 : t.bitrateMax,
                    maxFrameRate: null === (n = t.capture) || void 0 === n ? void 0 : n.framerate,
                    maxResolution: {
                        type: l.uA.FIXED,
                        width: null === (r = t.capture) || void 0 === r ? void 0 : r.width,
                        height: null === (i = t.capture) || void 0 === i ? void 0 : i.height
                    },
                    profile: e.profile
                };
            });
    }
    getLocalWant(e) {
        var t, n;
        let r = this.remoteVideoSinkWants[null !== (n = null != e ? e : null === (t = this.videoStreamParameters[0]) || void 0 === t ? void 0 : t.ssrc) && void 0 !== n ? n : 0];
        if (null != r && r > 0) return r;
        let i = this.remoteVideoSinkWants.any;
        return null != i && i > 0 ? i : 100;
    }
    getRemoteVideoSinkWants(e) {
        return this.remoteVideoSinkWants[e];
    }
    async emitStats() {
        let e = await this.getStats();
        return null != e && this.emit(s.S.Stats, e), e;
    }
    constructor(e, t) {
        super(), u(this, 'mediaEngineConnectionId', 'WebRTC-'.concat(c++)), u(this, 'context', void 0), u(this, 'userId', void 0), u(this, 'streamUserId', void 0), u(this, 'destroyed', !1), u(this, 'audioSSRC', 0), u(this, 'selfDeaf', !1), u(this, 'localMutes', {}), u(this, 'disabledLocalVideos', {}), u(this, 'localVolumes', {}), u(this, 'isActiveOutputSinksEnabled', !1), u(this, 'activeOutputSinks', {}), u(this, 'videoSupported', !1), u(this, 'useElectronVideo', !1), u(this, 'voiceBitrate', l.dX), u(this, 'remoteSinkWantsMaxFramerate', l.Gs), u(this, 'videoQualityManager', void 0), u(this, 'wantsPriority', new Set()), u(this, 'localSpeakingFlags', {}), u(this, 'videoReady', !1), u(this, 'videoStreamParameters', []), u(this, 'remoteVideoSinkWants', { any: 100 }), u(this, 'localVideoSinkWants', { any: 100 }), u(this, 'connectionState', l.$j.CONNECTING), u(this, 'stats', void 0), u(this, 'onDesktopEncodingOptionsSet', (e, t, n) => {}), u(this, 'experimentFlags', new Set()), u(this, 'framerateReducer', void 0), (this.context = e), (this.userId = t), (this.videoQualityManager = new o.iY(e, this));
        let r = n(988746).Z;
        this.framerateReducer = new r(this, this.videoQualityManager);
    }
}
