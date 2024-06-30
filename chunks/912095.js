n.d(t, {
    Z: function () {
        return I;
    },
    p: function () {
        return r;
    }
}), n(47120), n(411104), n(177593);
var r, i, a = n(874141), o = n.n(a), s = n(565925), l = n.n(s), u = n(839548), c = n(46973), d = n(886848), _ = n(961304), E = n(313232), f = n(450279), h = n(65154), p = n(436620);
function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(i = r || (r = {}))[i.AUDIO_BITRATE = 0] = 'AUDIO_BITRATE', i[i.VIDEO_RESOLUTION_SCALE = 1] = 'VIDEO_RESOLUTION_SCALE', i[i.VIDEO_BITRATE = 2] = 'VIDEO_BITRATE', i[i.VIDEO_FRAMERATE = 3] = 'VIDEO_FRAMERATE';
class I extends u.Z {
    interact() {
        for (let e of (this.interacted = !0, Object.keys(this.outputs)))
            this.outputs[e].play();
        this.input.resumeAudio();
    }
    destroy() {
        for (let e of (super.destroy(), Object.keys(this.outputs)))
            this.destroyOutput(e);
        this.input.destroy();
    }
    async getStats() {
        if (!p.Fo)
            return null;
        let e = await this.getRawStats();
        return (0, f.Z)(e, this.getUserIdBySsrc, this.remoteVideoSinkWants, this.localVideoSinkWants);
    }
    setInputMode(e, t) {
        this.input.setAudioMode(e, {
            delay: t.pttReleaseDelay,
            threshold: t.vadThreshold
        });
    }
    setSelfDeaf(e) {
        for (let t of (this.selfDeaf = e, Object.keys(this.outputs)))
            this.outputs[t].mute = e || this.localMutes[t];
    }
    setLocalMute(e, t) {
        this.localMutes[e] = t, null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t), this.emit(c.Sh.LocalMute, e, t);
    }
    fastUdpReconnect() {
    }
    getNumFastUdpReconnects() {
        return null;
    }
    wasRemoteDisconnected() {
    }
    setRemoteVideoSinkWants(e) {
        this.remoteVideoSinkWants = e, this.updateVideoQuality(h.XR);
    }
    setLocalVideoSinkWants(e) {
        this.localVideoSinkWants = e;
    }
    updateVideoQualityCore(e, t) {
        let n;
        if (!this.videoSupported)
            return;
        let r = this.input.getVideoStream();
        if (null == r)
            return;
        if (null != t.capture && null != t.capture.width && null != t.capture.height && null != e.remoteSinkWantsPixelCount && 0 !== e.remoteSinkWantsPixelCount && 0 !== t.capture.height) {
            let r = t.capture.width / t.capture.height, i = Math.sqrt(e.remoteSinkWantsPixelCount * r), a = t.capture.width / i;
            n = a < 1 ? void 0 : a;
        }
        this.logger.info('BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: '.concat(n, ', ') + 'encodingVideoWidth: '.concat(e.encodingVideoWidth, ', remoteSinkWantsMaxFramerate: ').concat(e.remoteSinkWantsMaxFramerate, ', ') + 'encodingVideoMaxBitRate: '.concat(e.encodingVideoMaxBitRate, ', localWant: ').concat(this.getLocalWant())), this.setVideoEncoderParameters([
            {
                parameter: 1,
                value: n
            },
            {
                parameter: 2,
                value: e.encodingVideoMaxBitRate
            },
            {
                parameter: 3,
                value: e.remoteSinkWantsMaxFramerate
            }
        ]);
        let i = e.encodingVideoWidth, a = e.encodingVideoHeight;
        for (let e of r.getTracks()) {
            var o, s;
            let t = e.getConstraints(), n = null === (o = t.width) || void 0 === o ? void 0 : o.max, r = null === (s = t.height) || void 0 === s ? void 0 : s.max;
            (n !== i || r !== a) && (this.logger.info('BaseWebRTCConnection.updateVideoQuality: old: '.concat(n, ' x ').concat(r, ', new: ').concat(i, ' x ').concat(a)), t.width = { max: i }, t.height = { max: a }, e.applyConstraints(t));
        }
    }
    setCanHavePriority(e, t) {
        let n = this.canHavePriority.size;
        t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e), this.canHavePriority.size !== n && this.recalculatePrioritySpeakers();
    }
    setSpeakingFlags(e, t) {
        null != t && t !== h.Dg.NONE ? this.localSpeakingFlags[e] = t : delete this.localSpeakingFlags[e];
        let n = this.outputs[e];
        null != n && n.setSpeakingFlags(t);
        let r = this.wantsPriority.size, i = h.Dg.VOICE | h.Dg.PRIORITY;
        (t & i) === i ? this.wantsPriority.add(e) : this.wantsPriority.delete(e), this.wantsPriority.size !== r && this.recalculatePrioritySpeakers();
    }
    clearAllSpeaking() {
        for (let e in this.localSpeakingFlags)
            delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(h.Dg.NONE);
    }
    setOutputVolume(e) {
        for (let t of (this.outputVolume = e, Object.keys(this.outputs)))
            this.outputs[t].volume = this.computeLocalVolume(t);
    }
    setSinkId(e) {
        for (let t of (this.sinkId = e, Object.keys(this.outputs)))
            this.outputs[t].setSinkId(e);
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let r = e.findIndex(e => e.rid === t.rid);
                if (-1 === r) {
                    n(Error('Invalid rid'));
                    return;
                }
                !l()(this.videoStreamParameters[r], e[r]) && (this.videoStreamParameters[r] = { ...e[r] });
            }
            t();
        });
    }
    recalculatePrioritySpeakers() {
        this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter(e => this.canHavePriority.has(e))), o()(this.outputs, (e, t) => {
            e.volume = this.computeLocalVolume(t);
        });
    }
    setBitRate(e) {
        this.voiceBitrate = e;
    }
    setLocalVolume(e, t) {
        this.localVolumes[e] = t, null != this.outputs[e] && (this.outputs[e].volume = this.computeLocalVolume(e));
    }
    getLocalVolume(e) {
        let t = this.localVolumes[e];
        return null == t && (t = this.context === h.Yn.DEFAULT ? h.Qx : h.Yh), null != t ? t : h.Qx;
    }
    computeLocalVolume(e) {
        let t = this.outputVolume * this.getLocalVolume(e) / h.Qx;
        return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * h.jg : t;
    }
    hasDesktopSource() {
        var e;
        return null === (e = this.input) || void 0 === e ? void 0 : e.hasDesktopSource();
    }
    createOutput(e, t) {
        if (t.discordIsTearingDown) {
            this.logger.info('BaseWebRTCConnection.createOutput: ignoring track being torn down: '.concat(t.id));
            return;
        }
        let n = this.outputs[e];
        if (null == n) {
            var r;
            (n = new _.Z(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e], n.volume = this.computeLocalVolume(e), n.on(_.X.Speaking, t => this.emit(c.Sh.Speaking, e, t, this.audioSSRC)), n.on(_.X.Video, t => {
                var n;
                return this.emitUnsafe(c.Sh.Video, e, t, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (n = this.videoStreamParameters[0].rtxSsrc) && void 0 !== n ? n : 0, this.videoStreamParameters);
            }), n.on(_.X.InteractionRequired, e => this.emit(c.Sh.InteractionRequired, e)), n.setSpeakingFlags(null !== (r = this.localSpeakingFlags[e]) && void 0 !== r ? r : h.Dg.NONE), n.setSinkId(this.sinkId), this.outputs[e] = n;
        }
        n.addTrack(t);
    }
    destroyOutput(e, t) {
        let n = this.outputs[e];
        null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e]);
    }
    setSilenceThreshold(e) {
        this.silenceThreshold = e;
    }
    setLocalPan(e, t, n) {
    }
    setExperimentalEncoders(e) {
    }
    setHardwareH264(e) {
    }
    setSoftwareH264(e) {
    }
    setQoS(e) {
    }
    isAttenuating() {
        return !1;
    }
    setAttenuation(e, t, n) {
    }
    setEncryption(e, t) {
    }
    setMinimumJitterBufferLevel(e) {
    }
    setPostponeDecodeLevel(e) {
    }
    setReconnectInterval(e) {
    }
    setKeyframeInterval(e) {
    }
    startSamplesLocalPlayback(e, t, n, r) {
    }
    stopSamplesLocalPlayback(e) {
    }
    stopAllSamplesLocalPlayback() {
    }
    setVideoQualityMeasurement(e) {
    }
    setVideoEncoderExperiments(e) {
    }
    setBandwidthEstimationExperiments(e) {
    }
    prepareSecureFramesTransition(e, t, n) {
    }
    prepareSecureFramesEpoch(e, t, n) {
    }
    executeSecureFramesTransition(e) {
    }
    getMLSKeyPackage(e) {
    }
    updateMLSExternalSender(e) {
    }
    processMLSProposals(e, t) {
    }
    prepareMLSCommitTransition(e, t, n) {
    }
    processMLSWelcome(e, t, n) {
    }
    constructor(e, t, n, r) {
        var i;
        super(e, t), i = this, m(this, 'input', void 0), m(this, 'silenced', !1), m(this, 'interacted', !1), m(this, 'outputVolume', h.Qx), m(this, 'sinkId', h.w5), m(this, 'lastPingTime', 0), m(this, 'outputs', {}), m(this, 'webrtcStats', new E.r()), m(this, 'silenceThreshold', -100), m(this, 'canHavePriority', new Set()), m(this, 'prioritySpeakers', new Set()), m(this, 'audioContext', void 0), m(this, 'setEchoCancellation', e => this.input.setEchoCancellation(e)), m(this, 'setNoiseSuppression', e => this.input.setNoiseSuppression(e)), m(this, 'setNoiseCancellation', e => this.input.setNoiseCancellation(e)), m(this, 'setAutomaticGainControl', e => this.input.setAutomaticGainControl(e)), m(this, 'setAudioSource', e => this.input.setAudioSource(e)), m(this, 'setVideoSource', e => this.input.setVideoSource(e)), m(this, 'setDesktopInput', e => this.input.setDesktop(e)), m(this, 'setForceAudioInput', function (e) {
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i.input.setPTTActive(e);
        }), m(this, 'setSelfMute', e => {
            this.input.setMute(e), this.emit(c.Sh.Mute, e);
        }), m(this, 'handleAddVideoTrack', () => {
            this.updateVideoQuality();
        }), m(this, 'handleAudioPermission', e => this.emit(c.Sh.AudioPermission, e)), m(this, 'handleVideoPermission', e => this.emit(c.Sh.VideoPermission, e)), m(this, 'handleVideo', e => {
            var t;
            return this.emit(c.Sh.Video, this.userId, e, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (t = this.videoStreamParameters[0].rtxSsrc) && void 0 !== t ? t : 0, this.videoStreamParameters);
        }), m(this, 'handleDesktopSourceEnd', () => this.emit(c.Sh.DesktopSourceEnd)), m(this, 'handleStream', e => this.setStream(e)), m(this, 'handleVoiceActivity', e => {
            let t = e <= this.silenceThreshold;
            this.silenced !== t && !this.input.mute() && (this.silenced = t, this.emit(c.Sh.Silence, t));
        }), m(this, 'handleNewListener', e => {
            switch (e) {
            case c.Sh.Video:
                this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                break;
            case c.Sh.ConnectionStateChange:
                this.emit(e, this.connectionState);
                break;
            case c.Sh.InteractionRequired:
                !this.interacted && 'suspended' === this.input.getAudioState() && setImmediate(() => this.emit(e, !0));
            }
        }), m(this, 'handleInputSpeaking', e => {
            this.emit(c.Sh.Speaking, this.userId, e ? h.Dg.VOICE : h.Dg.NONE, this.audioSSRC);
        }), m(this, 'handleAudioContextStateChange', () => {
            !this.interacted && 'running' === this.input.getAudioState() && (this.interact(), this.emit(c.Sh.InteractionRequired, !1));
        }), m(this, 'handleStats', e => {
            if (this.connectionState === h.$j.DISCONNECTED) {
                this.off(c.Sh.Stats, this.handleStats);
                return;
            }
            null != e && (this.webrtcStats.update(e), this.stats = e, Date.now() - this.lastPingTime >= h.$B && (this.emit(c.Sh.Ping, e.transport.ping), this.lastPingTime = Date.now()));
        }), this.input = new d.Z(n), n.addEventListener('statechange', this.handleAudioContextStateChange), this.audioContext = n, this.input.on(d.G.AudioPermission, this.handleAudioPermission), this.input.on(d.G.VideoPermission, this.handleVideoPermission), this.input.on(d.G.Video, this.handleVideo), this.input.on(d.G.Mute, e => this.emit(c.Sh.Mute, e)), this.input.on(d.G.Stream, this.handleStream), this.input.on(d.G.DesktopSourceEnd, this.handleDesktopSourceEnd), this.input.on(d.G.Speaking, this.handleInputSpeaking), this.input.on(d.G.AddVideoTrack, this.handleAddVideoTrack), this.input.on(d.G.Video, this.handleAddVideoTrack), this.on('newListener', this.handleNewListener), this.initializeStreamParameters(r);
    }
}
