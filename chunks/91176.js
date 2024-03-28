"use strict";
a.r(t);
var l = a("913527"),
  s = a.n(l),
  n = a("749210");
t.default = {
  async setCommunicationDisabledDuration(e, t, a, l, i) {
    let o = null != a ? s()().add(a, "s").toISOString() : null;
    await n.default.setCommunicationDisabledUntil({
      guildId: e,
      userId: t,
      communicationDisabledUntilTimestamp: o,
      duration: a,
      reason: l,
      location: i
    })
  }
}