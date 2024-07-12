var i, a, s, r, l = n(442837),
  o = n(433517),
  c = n(570140),
  d = n(205355);
let u = 'MaintenanceStore',
  _ = null,
  E = null,
  I = null;
class m extends(r = l.ZP.Store) {
  initialize() {
I = o.K.get(u);
  }
  getIncident() {
return _;
  }
  getScheduledMaintenance() {
return null != E && E.id !== I ? E : null;
  }
}
s = 'MaintenanceStore', (a = 'displayName') in(i = m) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new m(c.Z, {
  CONNECTION_OPEN: function() {
_ = null;
d.Z.checkScheduledMaintenances();
  },
  STATUS_PAGE_INCIDENT: function(e) {
_ = e.incident;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
E = e.maintenance;
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
if (null == E)
  return !1;
I = E.id, o.K.set(u, I);
  }
});