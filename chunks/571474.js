var i, s, a, r, l = n(442837),
  o = n(570140),
  c = n(70956),
  u = n(709054),
  d = n(314897),
  _ = n(699516);
let E = 180 * c.Z.Millis.DAY,
  I = !1;
class m extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(_.Z, d.default);
  }
  isEligible() {
return I;
  }
}
a = 'PremiumPromoStore', (s = 'displayName') in(i = m) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new m(o.Z, {
  CONNECTION_OPEN: function() {
return I !== (I = _.Z.getFriendIDs().length >= 10 && u.default.extractTimestamp(d.default.getId()) < Date.now() - E);
  }
});