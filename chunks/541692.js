"use strict";
let s;
var r, i = n(442837),
  a = n(570140),
  l = n(133080);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = (0, l.K4)();

function c(e) {
  var t;
  let {
    countryCode: n
  } = e;
  if (null != n) u = null !== (t = (0, l.Zz)(n)) && void 0 !== t ? t : (0, l.K4)()
}
class d extends(r = i.ZP.DeviceSettingsStore) {
  initialize(e) {
    if (null != e) s = e.selectedCountryCode
  }
  getUserAgnosticState() {
    return {
      selectedCountryCode: s
    }
  }
  getCountryCode() {
    return null != s ? s : u
  }
}
o(d, "displayName", "PhoneStore"), o(d, "persistKey", "PhoneStore"), t.Z = new d(a.Z, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    s = t
  },
  CONNECTION_OPEN: c,
  SET_LOCATION_METADATA: c
})