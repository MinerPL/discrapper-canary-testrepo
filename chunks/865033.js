"use strict";
var i = n(570140),
  r = n(317770),
  s = n(358085),
  o = n(374023),
  a = n(761274),
  l = n(981631);
class u extends r.Z {
  isEnabled() {
    return (0, s.isDesktop)() && (0, s.isMac)() && !o.s.isDiscordTestSet()
  }
  _initialize() {
    this.isEnabled() && i.Z.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
  }
  _terminate() {
    this.isEnabled() && i.Z.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
  }
  handleAudioSetMode(e) {
    let {
      mode: t
    } = e;
    t === l.pM4.PUSH_TO_TALK && n(751571).Z.requestPermission(a.Eu.INPUT_MONITORING)
  }
}
t.Z = new u