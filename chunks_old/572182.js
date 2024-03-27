"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("446674"),
  s = n("913144"),
  l = n("923959"),
  i = n("697218"),
  r = n("49111");
let o = null;

function u() {
  let e = i.default.getCurrentUser();
  if (null == e || e.mfaEnabled === o) return !1;
  o = e.mfaEnabled
}
class d extends a.default.Store {
  initialize() {
    this.waitFor(i.default, l.default), this.syncWith([i.default, l.default], u)
  }
  isVisible(e) {
    return null != e && e.mfaLevel === r.MFALevels.ELEVATED && !1 === o && l.default.hasElevatedPermissions(e.id)
  }
}
d.displayName = "GuildMFAWarningStore";
var c = new d(s.default, {
  CONNECTION_OPEN: u,
  GUILD_UPDATE: function() {
    return !0
  }
})