n(47120);
var r = n(846519),
    i = n(570140),
    a = n(147913);
function s(e, t, n) {
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
    _terminate() {
        this.clearErrorTimeout.stop();
    }
    constructor(...e) {
        super(...e),
            s(this, 'clearErrorTimeout', new r.V7()),
            s(this, 'actions', { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() }),
            s(this, 'handleNoiseCancellationError', () => {
                this.clearErrorTimeout.start(3000, () => i.Z.dispatch({ type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET' }));
            });
    }
}
t.Z = new o();
