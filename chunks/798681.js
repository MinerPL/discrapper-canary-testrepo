n.d(t, {
  e: function() {
return i;
  },
  w: function() {
return E;
  }
});
var r, i, a = n(47770),
  s = n(846519),
  o = n(570140),
  l = n(710845),
  u = n(70956),
  c = n(27414);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(r = i || (i = {})).WindowVisibilityChanged = 'window-visibility-changed', r.IncomingVideoEnabledChanged = 'incoming-video-enabled-changed';
class _ extends a.Z {
  isIncomingVideoEnabled() {
return this.incomingVideoEnabled;
  }
  setIncomingVideoEnabled(e) {
let t = this.incomingVideoEnabled !== e;
this.incomingVideoEnabled = e, t && (this.logger.info('Window visibility incoming video changed, incomingVideoEnabled = '.concat(this.incomingVideoEnabled)), this.emit('incoming-video-enabled-changed', this.incomingVideoEnabled));
  }
  constructor() {
super(), d(this, 'hiddenWindowDisableVideoTimer', new s.V7()), d(this, 'incomingVideoEnabled', !0), d(this, 'logger', new l.Z('WindowVisibilityVideoManager')), d(this, 'HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS', 30 * u.Z.Millis.SECOND), d(this, 'handleWindowVisibilityChange', () => {
  this.emit('window-visibility-changed', (0, c.Z)()), (0, c.Z)() ? (this.hiddenWindowDisableVideoTimer.stop(), this.setIncomingVideoEnabled(!0)) : this.hiddenWindowDisableVideoTimer.start(this.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
    this.setIncomingVideoEnabled(!1);
  });
}), o.Z.subscribe('WINDOW_VISIBILITY_CHANGE', this.handleWindowVisibilityChange);
  }
}
let E = new _();