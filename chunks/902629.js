n(47120);
var r = n(147913),
    i = n(313261),
    a = n(38618);
class s extends r.Z {
    handleCheckExperiments() {
        let { enabled: e } = i.O.getCurrentConfig({ location: 'gateway' }, { autoTrackExposure: !0 });
        a.Z.getSocket().dispatcher.toggleRequestIdleCallback(e);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                EXPERIMENT_OVERRIDE_BUCKET: this.handleCheckExperiments,
                LOGIN_SUCCESS: this.handleCheckExperiments,
                EXPERIMENTS_FETCH_SUCCESS: this.handleCheckExperiments,
                POST_CONNECTION_OPEN: this.handleCheckExperiments,
                CACHE_LOADED: this.handleCheckExperiments
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new s();
