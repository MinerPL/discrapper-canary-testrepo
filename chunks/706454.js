"use strict";
n.r(t);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(209185),
  _ = n(581883),
  d = n(689938);
let c = d.Z.getDefaultLocale();

function E() {
  var e, t;
  let n = null === (t = _.Z.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
  return null != n && "" !== n && n !== c && (c = n, u.i(c), !0)
}
class I extends(o = a.ZP.Store) {
  initialize() {
    this.waitFor(_.Z), E(), u.i(c)
  }
  get locale() {
    return c
  }
}
s = "LocaleStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.default = new I(l.Z, {
  OVERLAY_INITIALIZE: E,
  CACHE_LOADED: E,
  CONNECTION_OPEN: E,
  USER_SETTINGS_PROTO_UPDATE: E,
  USER_SETTINGS_LOCALE_OVERRIDE: function(e) {
    c = e.locale, u.i(c)
  }
})