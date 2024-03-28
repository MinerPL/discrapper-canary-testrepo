"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var a = n("570140"),
  s = n("317770"),
  l = n("314897"),
  i = n("131951");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o extends s.default {
  _initialize() {
    !__OVERLAY__ && (a.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), a.default.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), a.default.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), a.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  _terminate() {
    !__OVERLAY__ && (a.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived), a.default.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally), a.default.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect), a.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened))
  }
  constructor(...e) {
    super(...e), r(this, "_playSound", function(e) {
      arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && arguments[2], arguments.length > 3 && arguments[3]
    }), r(this, "_stopAndClearSounds", () => {}), r(this, "_handleToggleSelfDeafened", () => {
      i.default.isDeaf() && this._stopAndClearSounds()
    }), r(this, "_handleSoundboardSoundReceived", e => {
      let {
        soundId: t,
        soundVolume: n,
        userId: a,
        channelId: s
      } = e;
      if (null != t && a !== l.default.getId()) return this._playSound(t, n, a, s)
    }), r(this, "_handleSoundboardSoundPlayLocally", e => {
      let {
        sound: t,
        channelId: n
      } = e, a = l.default.getId();
      return this._playSound(t.soundId, t.volume, a, n)
    }), r(this, "_handleVoiceChannelSelect", () => {
      this._stopAndClearSounds()
    })
  }
}