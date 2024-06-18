"use strict";
n.d(t, {
  GC: function() {
    return h
  },
  RR: function() {
    return T
  },
  Wb: function() {
    return I
  }
});
var i = n(570140),
  r = n(579806),
  s = n(710845),
  o = n(314897),
  a = n(626135),
  l = n(931619),
  u = n(358085),
  _ = n(548570),
  d = n(616810),
  c = n(755278);
let E = new s.Z("ConnectionStore"),
  I = new _.Z,
  T = new d.Z(I),
  h = new c.Z(I);
I.handleIdentify = () => {
  let e = o.default.getToken();
  return (E.verbose("handleIdentify called", {
    hasToken: null != e
  }), null == e) ? null : {
    token: e,
    properties: a.default.getSuperProperties(),
    presence: T.getInitialState()
  }
};
(0, u.isDesktop)() && r.Z.remotePowerMonitor.on("resume", () => {
  I.expeditedHeartbeat(5e3, "power monitor resumed")
}), l.Z.addOfflineCallback(() => {
  I.networkStateChange(15e3, "network detected offline.", !1)
}), l.Z.addOnlineCallback(() => {
  I.networkStateChange(5e3, "network detected online.")
}), I.on("disconnect", e => {
  let {
    code: t,
    reason: n
  } = e;
  i.Z.dispatch({
    type: "CONNECTION_CLOSED",
    code: t,
    reason: n
  })
}), I.on("close", e => {
  let {
    code: t,
    reason: n
  } = e;
  i.Z.dispatch({
    type: "CONNECTION_INTERRUPTED",
    code: t,
    reason: n
  })
})