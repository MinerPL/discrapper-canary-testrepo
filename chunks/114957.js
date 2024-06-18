"use strict";
n(47120);
var i = n(224706),
  r = n(978085),
  s = n(147913),
  o = n(283595),
  a = n(358085);
class l extends s.Z {
  handlePostConnectionOpen() {
    (0, a.isDesktop)() && (!o.Z.fetched && (0, r.b8)(), i.Z.getDetectableGames())
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new l