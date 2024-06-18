"use strict";
n(47120);
var i = n(147913),
  r = n(202511),
  s = n(828354);
class o extends i.Z {
  handlePostConnectionOpen() {
    r.d.trigger()
  }
  handleVoiceChannelSelect() {
    s.M.trigger()
  }
  handleCallCreate() {
    s.M.trigger()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      CALL_CREATE: this.handleCallCreate
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new o