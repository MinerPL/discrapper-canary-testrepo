"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(931619),
  _ = n(981631);
let d = _.IWh.UNKNOWN,
  c = _.IyS.UNKNOWN,
  E = null;

function I(e) {
  var t;
  d = null != e.type ? e.type : _.IWh.UNKNOWN, c = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : _.IyS.UNKNOWN, E = e.serviceProvider, h.emitChange()
}
class T extends(o = a.ZP.Store) {
  initialize() {
    u.Z.getNetworkInformation().then(I), u.Z.addChangeCallback(I)
  }
  getType() {
    return d
  }
  getEffectiveConnectionSpeed() {
    return c
  }
  getServiceProvider() {
    return E
  }
}
s = "NetworkStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s;
let h = new T(l.Z, {});
t.Z = h