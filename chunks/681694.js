n(47120);
var r = n(846519),
  i = n(570140),
  a = n(147913);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class s extends a.Z {
  _terminate() {
this.clearErrorTimeout.stop();
  }
  constructor(...e) {
super(...e), o(this, 'clearErrorTimeout', new r.V7()), o(this, 'actions', {
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
}), o(this, 'handleNoiseCancellationError', () => {
  this.clearErrorTimeout.start(3000, () => i.Z.dispatch({
    type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET'
  }));
});
  }
}
t.Z = new s();