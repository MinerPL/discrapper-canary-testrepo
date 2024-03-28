"use strict";
n.r(t);
var a, s, l, i, r = n("442837"),
  o = n("570140"),
  u = n("984933"),
  d = n("594174"),
  c = n("981631");
let f = null;

function E() {
  let e = d.default.getCurrentUser();
  if (null == e || e.mfaEnabled === f) return !1;
  f = e.mfaEnabled
}
class h extends(i = r.default.Store) {
  initialize() {
    this.waitFor(d.default, u.default), this.syncWith([d.default, u.default], E)
  }
  isVisible(e) {
    return null != e && e.mfaLevel === c.MFALevels.ELEVATED && !1 === f && u.default.hasElevatedPermissions(e.id)
  }
}
l = "GuildMFAWarningStore", (s = "displayName") in(a = h) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.default = new h(o.default, {
  CONNECTION_OPEN: E,
  GUILD_UPDATE: function() {
    return !0
  }
})