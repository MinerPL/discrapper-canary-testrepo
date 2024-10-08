n.d(t, {
    G: function () {
        return i;
    },
    Z: function () {
        return u;
    }
});
var r,
    i,
    a = n(47770),
    s = n(68721),
    o = n(591218);
function l(e, t, n) {
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
((r = i || (i = {})).Stream = 'stream'), (r.Video = 'video'), (r.Mute = 'mute'), (r.VoiceActivity = 'voiceactivity'), (r.DesktopSourceEnd = 'desktopsourceend'), (r.Speaking = 'speaking'), (r.AudioPermission = 'audio-permission'), (r.VideoPermission = 'video-permission'), (r.AddVideoTrack = 'add-video-track');
class u extends a.Z {
    destroy() {
        this.removeAllListeners(), this.destroyStreams();
    }
    destroyStreams() {
        var e;
        this.audio.destroy(), this.video.destroy(), null === (e = this.desktop) || void 0 === e || e.destroy();
    }
    setDesktop(e) {
        this.destroyStreams(), null == e || e.addListener('desktopsourceend', this.handleDesktopSourceEnd), null == e || e.addListener('speaking', this.handleSpeaking), (this.desktop = e), this.mergeStreams();
    }
    reset() {
        var e;
        this.audio.reset(), null === (e = this.desktop) || void 0 === e || e.reset();
    }
    getVideoStream() {
        return null != this.desktop ? this.desktop.stream : this.video.stream;
    }
    getVideoStreamId() {
        return null != this.desktop ? this.desktop.getStreamId() : this.video.getStreamId();
    }
    enableAudioInput() {
        this.audio.enable();
    }
    setAudioMode(e, t) {
        this.audio.setMode(e, t);
    }
    setMute(e) {
        (this.audio.mute = e), this.emit('mute', e);
    }
    setEchoCancellation(e) {
        this.audio.echoCancellation = e;
    }
    setNoiseSuppression(e) {
        this.audio.noiseSuppression = e;
    }
    setNoiseCancellation(e) {
        this.audio.noiseCancellation = e;
    }
    setAutomaticGainControl(e) {
        this.audio.automaticGainControl = e;
    }
    setPTTActive(e) {
        this.audio.setPTTActive(e);
    }
    setAudioSource(e) {
        this.audio.setSource(e);
    }
    setVideoSource(e) {
        this.video.setSource(e);
    }
    mute() {
        return this.audio.mute;
    }
    resumeAudio() {
        this.audio.resume();
    }
    getAudioState() {
        return this.audio.state;
    }
    hasDesktopSource() {
        return null != this.desktop;
    }
    constructor(e) {
        super(),
            l(this, 'audio', void 0),
            l(this, 'video', new o.Z()),
            l(this, 'desktop', null),
            l(this, 'stream', void 0),
            l(this, 'mergeStreams', () => {
                var e, t, n;
                let r = new MediaStream();
                return null != this.desktop ? (null === (e = this.desktop.stream) || void 0 === e || e.getTracks().forEach((e) => r.addTrack(e)), this.desktop.refreshSpeaking()) : (null === (t = this.audio.stream) || void 0 === t || t.getAudioTracks().forEach((e) => r.addTrack(e)), null === (n = this.video.stream) || void 0 === n || n.getVideoTracks().forEach((e) => r.addTrack(e))), (this.stream = r), this.emit('stream', r), this.emit('video', this.getVideoStreamId()), r;
            }),
            l(this, 'handleVoiceActivity', (e) => {
                this.emit('voiceactivity', e);
            }),
            l(this, 'handleDesktopSourceEnd', () => {
                this.emit('desktopsourceend');
            }),
            l(this, 'handleSpeaking', (e) => {
                this.emit('speaking', e);
            }),
            l(this, 'handleAudioPermission', (e) => {
                this.emit('audio-permission', e);
            }),
            l(this, 'handleVideoPermission', (e) => {
                this.emit('video-permission', e);
            }),
            (this.audio = new s.Z(e)),
            this.audio.addListener('voiceactivity', this.handleVoiceActivity),
            this.audio.addListener('speaking', this.handleSpeaking),
            this.audio.addListener('stream', this.mergeStreams),
            this.audio.addListener('permission', this.handleAudioPermission),
            this.video.addListener('stream', this.mergeStreams),
            this.video.addListener('permission', this.handleVideoPermission),
            this.video.addListener('add-video-track', (e) => this.emit('add-video-track', e));
    }
}
