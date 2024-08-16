function r(e, t, n) {
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
n.d(t, {
    E: function () {
        return i;
    }
}),
    n(411104),
    n(47120);
class i {
    registeredExperimentIds() {
        return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
        !(function (e, t, n) {
            t.forEach((e) => {
                e.trackExposure(n);
            });
        })(this.triggerPoint, this.experiments, this.params);
    }
    constructor(e, t, n) {
        r(this, 'experiments', void 0), r(this, 'triggerPoint', void 0), r(this, 'params', void 0);
        (this.experiments = e), (this.triggerPoint = t), (this.params = n);
    }
}
