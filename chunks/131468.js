n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(570140),
    a = n(317770),
    s = n(314897),
    r = n(131951);
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
class o extends a.Z {
    _initialize() {
        !__OVERLAY__ && (i.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleSoundboardSoundReceived), i.Z.subscribe('GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', this._handleSoundboardSoundPlayLocally), i.Z.subscribe('VOICE_CHANNEL_SELECT', this._handleVoiceChannelSelect), i.Z.subscribe('AUDIO_TOGGLE_SELF_DEAF', this._handleToggleSelfDeafened));
    }
    _terminate() {
        !__OVERLAY__ && (i.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', this._handleSoundboardSoundReceived), i.Z.unsubscribe('GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', this._handleSoundboardSoundPlayLocally), i.Z.unsubscribe('VOICE_CHANNEL_SELECT', this._handleVoiceChannelSelect), i.Z.unsubscribe('AUDIO_TOGGLE_SELF_DEAF', this._handleToggleSelfDeafened));
    }
    constructor(...e) {
        super(...e),
            l(this, '_playSound', function (e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && arguments[2], arguments.length > 3 && arguments[3];
            }),
            l(this, '_stopAndClearSounds', () => {}),
            l(this, '_handleToggleSelfDeafened', () => {
                r.Z.isDeaf() && this._stopAndClearSounds();
            }),
            l(this, '_handleSoundboardSoundReceived', (e) => {
                let { soundId: t, soundVolume: n, userId: i, channelId: a } = e;
                if (null != t && i !== s.default.getId()) return this._playSound(t, n, i, a);
            }),
            l(this, '_handleSoundboardSoundPlayLocally', (e) => {
                let { sound: t, channelId: n } = e,
                    i = s.default.getId();
                return this._playSound(t.soundId, t.volume, i, n);
            }),
            l(this, '_handleVoiceChannelSelect', () => {
                this._stopAndClearSounds();
            });
    }
}
