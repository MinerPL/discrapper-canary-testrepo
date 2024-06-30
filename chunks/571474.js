var i, a, s, l, r = n(442837), o = n(570140), c = n(70956), d = n(709054), u = n(314897), _ = n(699516);
let E = 180 * c.Z.Millis.DAY, m = !1;
class I extends (l = r.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, u.default);
    }
    isEligible() {
        return m;
    }
}
s = 'PremiumPromoStore', (a = 'displayName') in (i = I) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new I(o.Z, {
    CONNECTION_OPEN: function () {
        return m !== (m = _.Z.getFriendIDs().length >= 10 && d.default.extractTimestamp(u.default.getId()) < Date.now() - E);
    }
});
