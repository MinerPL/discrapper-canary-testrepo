"use strict";
n(47120);
var i = n(70780),
  r = n(147913),
  s = n(710845),
  o = n(131951),
  a = n(936349),
  l = n(70956),
  u = n(358085);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = 1 * l.Z.Millis.SECOND,
  c = 30 * l.Z.Millis.SECOND,
  E = new s.Z("RTCLatencyTestManager");
class I extends r.Z {
  _terminate() {
    null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
  }
  constructor(...e) {
    super(...e), _(this, "refetchTimeout", void 0), _(this, "actions", {
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen()
    }), _(this, "_handleTestRegionsResponse", e => {
      let t = e.map(e => e.region);
      a.Z.shouldPerformLatencyTest(t) ? o.Z.getMediaEngine().rankRtcRegions(e).then(e => {
        E.verbose("RTC region latency test completed, ranked regions are: ", e), (0, i.o)(e, t)
      }).catch(e => E.warn(e)) : E.verbose("RTC cached ranked preferred regions are ".concat(a.Z.getPreferredRegions()))
    }), _(this, "_fetchAndScheduleRefetch", () => {
      (0, i.J)().then(e => this._handleTestRegionsResponse(e.body)).catch(e => E.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * l.Z.Millis.MINUTE)
    }), _(this, "_handleConnectionOpen", () => {
      if (u.isPlatformEmbedded && !__OVERLAY__) {
        let e = Math.floor(d + Math.random() * c);
        null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, e)
      }
    })
  }
}
t.Z = new I