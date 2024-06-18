"use strict";
n(47120);
var i = n(846519),
  r = n(570140),
  s = n(710845),
  o = n(671335),
  a = n(928518),
  l = n(451478),
  u = n(70956),
  _ = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = new class e {
  isIncomingVideoEnabled() {
    return this.incomingVideoEnabled
  }
  subscribe(e) {
    this.videoEnabledObservers.add(e)
  }
  unsubscribe(e) {
    this.videoEnabledObservers.delete(e)
  }
  setIncomingVideoEnabled(e) {
    let t = this.incomingVideoEnabled !== e;
    this.incomingVideoEnabled = e, t && (this.logger.info("Window visibility incoming video changed, incomingVideoEnabled = ".concat(this.incomingVideoEnabled)), this.videoEnabledObservers.forEach(e => e(this.incomingVideoEnabled)))
  }
  anyDiscordWindowVisible() {
    return l.Z.isVisible() || a.Z.getWindowVisible(_.KJ3.CHANNEL_CALL_POPOUT)
  }
  constructor() {
    d(this, "hiddenWindowDisableVideoTimer", new i.V7), d(this, "incomingVideoEnabled", !0), d(this, "videoEnabledObservers", new Set), d(this, "logger", new s.Z("WindowVisibilityVideoManager")), d(this, "HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS", 30 * u.Z.Millis.SECOND), d(this, "handleWindowVisibilityChange", () => {
      if (!!o.Z.getCurrentConfig({
          location: "WindowVisibilityVideoManager"
        }, {
          autoTrackExposure: !0
        }).stopVideoForHiddenWindow) this.anyDiscordWindowVisible() ? (this.hiddenWindowDisableVideoTimer.stop(), this.setIncomingVideoEnabled(!0)) : this.hiddenWindowDisableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
        this.setIncomingVideoEnabled(!1)
      })
    }), r.Z.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange)
  }
};
t.Z = new class e {
  isIncomingVideoEnabled() {
    return c.isIncomingVideoEnabled()
  }
  subscribe(e) {
    c.subscribe(e)
  }
  unsubscribe(e) {
    c.unsubscribe(e)
  }
}