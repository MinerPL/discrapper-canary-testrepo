"use strict";
n(47120);
var i = n(443296),
  r = n(873741),
  s = n(866960),
  o = n(626135),
  a = n(981631);

function l(e) {
  if (Math.random() > .1) return;
  let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
    n = (0, r.d)();
  o.default.track(a.rMx.QUEST_DECISION_ROUNDTRIP, {
    ...(0, i.Z)(),
    endpoint: e.endpoint,
    api_latency_ms: t,
    mobile_network_type: s.Z.getType(),
    ...null != n && {
      mobile_signal_strength_level: n
    }
  })
}
t.Z = new class e {
  recordQuestRequestAttempt(e) {
    let t = {
      initialSendTimestamp: Date.now(),
      endpoint: e,
      apiResponseTimestamp: null,
      wasSuccessful: !1
    };
    this.pendingRequests.set(e, t), setTimeout(() => {
      let t = this.pendingRequests.get(e);
      null != t && (l(t), this.pendingRequests.delete(e))
    }, 3e4)
  }
  recordQuestRequestApiResponse(e, t) {
    let {
      wasSuccessful: n
    } = t, i = this.pendingRequests.get(e);
    null != i && (l({
      ...i,
      apiResponseTimestamp: Date.now(),
      wasSuccessful: n
    }), this.pendingRequests.delete(e))
  }
  constructor() {
    var e, t, n;
    e = this, t = "pendingRequests", n = new Map, t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}