"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(259443),
  r = n(46973),
  s = n(65154);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = new i.Y("ConnectionEventFramerateReducer");
class l {
  initialize() {
    this.userSpeakingChange(!0)
  }
  userSpeakingChange(e) {
    if (!this.connection.hasDesktopSource()) {
      if (this.destroyFramerateScaleFactorTimers(), !e) {
        this.sinkWants.isMuted && (this.sinkWants.isMuted = !1, this.updateRemoteWantsFramerate());
        return
      }
      this.framerateReductionTimeout = setTimeout(() => {
        if (!this.connection.destroyed) a.info("BaseConnection.userSpeakingChange: Reduced framerate after ".concat(s.u$, " ms.")), this.framerateReductionTimeout = void 0, this.sinkWants.isMuted = !0, this.updateRemoteWantsFramerate()
      }, s.u$)
    }
  }
  destroyFramerateScaleFactorTimers() {
    "number" == typeof this.framerateReductionTimeout && (clearTimeout(this.framerateReductionTimeout), this.framerateReductionTimeout = void 0)
  }
  updateRemoteWantsFramerate() {
    this.connection.updateVideoQuality(["remoteSinkWantsMaxFramerate"])
  }
  destroy() {
    this.destroyFramerateScaleFactorTimers()
  }
  constructor(e, t) {
    o(this, "connection", void 0), o(this, "sinkWants", void 0), o(this, "framerateReductionTimeout", void 0), o(this, "handleSpeaking", void 0), o(this, "handleSelfMute", void 0), this.connection = e, this.sinkWants = t, this.handleSpeaking = (e, t) => {
      e === this.connection.userId && this.userSpeakingChange(t === s.Dg.NONE)
    }, this.handleSelfMute = e => {
      if (!this.connection.hasDesktopSource()) this.destroyFramerateScaleFactorTimers(), this.sinkWants.isMuted = e, this.updateRemoteWantsFramerate()
    }, e.on(r.Sh.Speaking, this.handleSpeaking), e.on(r.Sh.Mute, this.handleSelfMute), this.initialize()
  }
}