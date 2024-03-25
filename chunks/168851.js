"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("446674"),
  a = n("95410"),
  l = n("913144"),
  i = n("167359");
let r = "MaintenanceStore",
  o = null,
  u = null,
  d = null;
class c extends s.default.Store {
  initialize() {
    d = a.Storage.get(r)
  }
  getIncident() {
    return o
  }
  getScheduledMaintenance() {
    return null != u && u.id !== d ? u : null
  }
}
c.displayName = "MaintenanceStore";
var E = new c(l.default, {
  CONNECTION_OPEN: function() {
    o = null, i.default.checkScheduledMaintenances()
  },
  STATUS_PAGE_INCIDENT: function(e) {
    o = e.incident
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
    u = e.maintenance
  },
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
    if (null == u) return !1;
    d = u.id, a.Storage.set(r, d)
  }
})