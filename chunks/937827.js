"use strict";
E.r(_), E.d(_, {
  default: function() {
    return T
  }
}), E("222007");
var t = E("920842"),
  o = E("689988"),
  n = E("605250"),
  r = E("42887"),
  i = E("590401"),
  a = E("773336");
let I = new n.default("RTCLatencyTestManager");
class s extends o.default {
  _terminate() {
    null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this._handleConnectionOpen()
    }, this._handleTestRegionsResponse = e => {
      let _ = e.map(e => e.region);
      if (i.default.shouldPerformLatencyTest(_)) {
        let E = r.default.getMediaEngine();
        E.rankRtcRegions(e).then(e => {
          I.verbose("RTC region latency test completed: ", e), (0, t.completeRTCLatencyTest)(e, _)
        }).catch(e => I.warn(e))
      } else I.verbose("RTC cached preferred region is ".concat(i.default.getPreferredRegion()))
    }, this._fetchAndScheduleRefetch = () => {
      (0, t.fetchRTCLatencyTestRegions)().then(e => this._handleTestRegionsResponse(e.body)).catch(e => I.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 216e5)
    }, this._handleConnectionOpen = () => {
      a.isPlatformEmbedded && !__OVERLAY__ && (null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, Math.floor(1e3 + 3e4 * Math.random())))
    }
  }
}
var T = new s