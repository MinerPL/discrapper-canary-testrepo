"use strict";
n(47120);
var i = n(147913),
  r = n(336197),
  s = n(341298),
  o = n(558921),
  a = n(981631);
class l extends i.Z {
  async handleChannelCreate(e) {
    let {
      channel: t
    } = e;
    (0, s.tr)(t) && (await (0, s.mM)(o.y), (0, r.Z)(a.Z5c.CHANNEL(null, t.id)))
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      CHANNEL_CREATE: this.handleChannelCreate
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new l