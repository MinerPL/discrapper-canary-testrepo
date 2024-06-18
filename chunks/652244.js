"use strict";
n(47120);
var i = n(147913),
  r = n(70956),
  s = n(822893),
  o = n(641051);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class l extends i.Z {
  constructor(...e) {
    super(...e), a(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), a(this, "handlePostConnectionOpen", () => {
      ! function e() {
        o.Z.getCurrentConfig({
          location: "e391b1_1"
        }, {
          autoTrackExposure: !1
        }).showReminders && (0, s.sE)().then(() => setTimeout(e, 15 * r.Z.Millis.MINUTE))
      }()
    })
  }
}
t.Z = new l