"use strict";
n(47120);
var i = n(355467),
  r = n(147913),
  s = n(400407);
class o extends r.Z {
  constructor(...e) {
    var t, n, r;
    super(...e), t = this, n = "actions", r = {
      POST_CONNECTION_OPEN: () => {
        let {
          enabled: e
        } = s.A.getCurrentConfig({
          location: "cd74f0_1"
        }, {
          autoTrackExposure: !1
        });
        e && (0, i.B$)()
      }
    }, n in t ? Object.defineProperty(t, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = r
  }
}
t.Z = new o