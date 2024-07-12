n(47120);
var r = n(846519),
  i = n(570140),
  a = n(710845),
  o = n(928518),
  s = n(451478),
  l = n(70956),
  u = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let d = new class e {
  isIncomingVideoEnabled() {
return this.incomingVideoEnabled;
  }
  subscribe(e) {
this.videoEnabledObservers.add(e);
  }
  unsubscribe(e) {
this.videoEnabledObservers.delete(e);
  }
  setIncomingVideoEnabled(e) {
let t = this.incomingVideoEnabled !== e;
this.incomingVideoEnabled = e, t && (this.logger.info('Window visibility incoming video changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), this.videoEnabledObservers.forEach(e => e(this.incomingVideoEnabled)));
  }
  anyDiscordWindowVisible() {
return s.Z.isVisible() || o.Z.getWindowVisible(u.KJ3.CHANNEL_CALL_POPOUT);
  }
  constructor() {
c(this, 'hiddenWindowDisableVideoTimer', new r.V7()), c(this, 'incomingVideoEnabled', !0), c(this, 'videoEnabledObservers', new Set()), c(this, 'logger', new a.Z('WindowVisibilityVideoManager')), c(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * l.Z.Millis.SECOND), c(this, 'handleWindowVisibilityChange', () => {
  this.anyDiscordWindowVisible() ? (this.hiddenWindowDisableVideoTimer.stop(), this.setIncomingVideoEnabled(!0)) : this.hiddenWindowDisableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
    this.setIncomingVideoEnabled(!1);
  });
}), i.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange);
  }
}();
t.Z = new class e {
  isIncomingVideoEnabled() {
return d.isIncomingVideoEnabled();
  }
  subscribe(e) {
d.subscribe(e);
  }
  unsubscribe(e) {
d.unsubscribe(e);
  }
}();