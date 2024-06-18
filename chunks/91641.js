"use strict";

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n.d(t, {
  E: function() {
    return r
  }
}), n(411104), n(47120);
class r {
  registeredExperimentIds() {
    return this.experiments.map(e => e.definition.id)
  }
  trigger() {
    ! function(e, t, n) {
      t.forEach(e => {
        e.trackExposure(n)
      })
    }(this.triggerPoint, this.experiments, this.params)
  }
  constructor(e, t, n) {
    i(this, "experiments", void 0), i(this, "triggerPoint", void 0), i(this, "params", void 0);
    this.experiments = e, this.triggerPoint = t, this.params = n
  }
}