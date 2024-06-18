"use strict";
n(47120);
var i = n(147913),
  r = n(405656);
class s extends i.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      USER_SETTINGS_PROTO_UPDATE: r.Pe,
      I18N_LOAD_SUCCESS: r.Pe,
      POST_CONNECTION_OPEN: r.Pe
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new s