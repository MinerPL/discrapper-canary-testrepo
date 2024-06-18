"use strict";
n(47120);
var i = n(846519),
  r = n(570140),
  s = n(147913);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class a extends s.Z {
  _terminate() {
    this.clearErrorTimeout.stop()
  }
  constructor(...e) {
    super(...e), o(this, "clearErrorTimeout", new i.V7), o(this, "actions", {
      MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
    }), o(this, "handleNoiseCancellationError", () => {
      this.clearErrorTimeout.start(3e3, () => r.Z.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
      }))
    })
  }
}
t.Z = new a