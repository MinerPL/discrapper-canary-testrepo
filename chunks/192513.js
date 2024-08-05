var i, a, s, r, l = n(442837),
  o = n(570140),
  c = n(984933),
  d = n(594174),
  u = n(981631);
let _ = null;

function h() {
  let e = d.default.getCurrentUser();
  if (null == e || e.mfaEnabled === _)
return !1;
  _ = e.mfaEnabled;
}
class E extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(d.default, c.ZP), this.syncWith([
  d.default,
  c.ZP
], h);
  }
  isVisible(e) {
return null != e && e.mfaLevel === u.BpS.ELEVATED && !1 === _ && c.ZP.hasElevatedPermissions(e.id);
  }
}
s = 'GuildMFAWarningStore', (a = 'displayName') in(i = E) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new E(o.Z, {
  CONNECTION_OPEN: h,
  GUILD_UPDATE: function() {
return !0;
  }
});