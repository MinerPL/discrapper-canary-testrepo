"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var a = l("866227"),
  n = l.n(a),
  u = l("851387"),
  i = {
    async setCommunicationDisabledDuration(e, t, l, a, i) {
      let d = null != l ? n().add(l, "s").toISOString() : null;
      await u.default.setCommunicationDisabledUntil({
        guildId: e,
        userId: t,
        communicationDisabledUntilTimestamp: d,
        duration: l,
        reason: a,
        location: i
      })
    }
  }