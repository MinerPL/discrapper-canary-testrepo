n(47120);
var r = n(443296),
  i = n(873741),
  a = n(866960),
  o = n(626135),
  s = n(981631);

function l(e) {
  if (Math.random() > 0.1)
return;
  let t = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
n = (0, i.d)();
  o.default.track(s.rMx.QUEST_DECISION_ROUNDTRIP, {
...(0, r.Z)(),
endpoint: e.endpoint,
was_successful: e.wasSuccessful,
api_latency_ms: t,
mobile_network_type: a.Z.getType(),
...null != n && {
  mobile_signal_strength_level: n
}
  });
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
  null != t && (l(t), this.pendingRequests.delete(e));
}, 30000);
  }
  recordQuestRequestApiResponse(e, t) {
let {
  wasSuccessful: n
} = t, r = this.pendingRequests.get(e);
null != r && (l({
  ...r,
  apiResponseTimestamp: Date.now(),
  wasSuccessful: n
}), this.pendingRequests.delete(e));
  }
  constructor() {
var e, t, n;
e = this, t = 'pendingRequests', n = new Map(), t in e ? Object.defineProperty(e, t, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : e[t] = n;
  }
}();