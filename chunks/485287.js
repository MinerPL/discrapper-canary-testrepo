n.d(t, {
    U5: function () {
        return g;
    },
    pp: function () {
        return T;
    }
}),
    n(47120);
var r = n(442837),
    i = n(147913),
    a = n(592125),
    s = n(131951),
    o = n(944486),
    l = n(979651),
    u = n(557177),
    c = n(565799),
    d = n(431328),
    _ = n(501655),
    E = n(427679),
    f = n(754277);
let h = (e) => e / 400,
    p = !1,
    m = (0, u.tu)('stage_waiting', 'stage_waiting', h(s.Z.getOutputVolume()));
function I() {
    let e = o.Z.getVoiceChannelId();
    if (null == e) {
        m.stop(), (p = !1);
        return;
    }
    let t = a.Z.getChannel(e);
    if (!(null == t ? void 0 : t.isGuildStageVoice()) || s.Z.isSelfDeaf()) {
        m.stop(), (p = !1);
        return;
    }
    if (f.Z.shouldPlay()) {
        (m.volume = h(s.Z.getOutputVolume())), m.loop(), (p = !0);
        return;
    }
    if (E.Z.isLive(e)) {
        m.stop(), (p = !1);
        return;
    }
    if (f.Z.isMuted()) {
        m.pause(), (p = !1);
        return;
    }
    let n = null != Object.values(l.Z.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || p ? n && (m.pause(), (p = !1)) : ((m.volume = h(s.Z.getOutputVolume())), m.loop(), (p = !0));
}
function T(e) {
    let t = (0, r.e7)([o.Z], () => o.Z.getVoiceChannelId() === e),
        n = null != (0, d.w8)(e, _.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = (0, r.e7)([E.Z], () => E.Z.getStageInstanceByChannel(e));
    return t && null == i && !n;
}
function g(e) {
    let t = o.Z.getVoiceChannelId() === e,
        n = null != c.Z.getMutableParticipants(e, _.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = E.Z.getStageInstanceByChannel(e);
    return t && null == r && !n;
}
class S extends i.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        if (null != t) {
            let e = a.Z.getChannel(t);
            (null == e ? void 0 : e.isGuildStageVoice()) ? I() : (m.stop(), (p = !1));
        } else m.stop(), (p = !1);
    }
    handleLogout() {
        m.stop(), (p = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? I() : (m.pause(), (p = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (m.pause(), (p = !1)) : I();
    }
    handleVoiceStateUpdates() {
        I();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        m.volume = h(t);
    }
    handleToggleSelfDeaf() {
        I();
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                LOGOUT: this.handleLogout,
                STAGE_MUSIC_MUTE: this.handleMute,
                STAGE_MUSIC_PLAY: this.handlePlay,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.ZP = new S();
