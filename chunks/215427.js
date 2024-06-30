var i, a, s, l, r = n(442837), o = n(433517), c = n(570140), d = n(205355);
let u = 'MaintenanceStore', _ = null, E = null, m = null;
class I extends (l = r.ZP.Store) {
    initialize() {
        m = o.K.get(u);
    }
    getIncident() {
        return _;
    }
    getScheduledMaintenance() {
        return null != E && E.id !== m ? E : null;
    }
}
s = 'MaintenanceStore', (a = 'displayName') in (i = I) ? Object.defineProperty(i, a, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = s, t.Z = new I(c.Z, {
    CONNECTION_OPEN: function () {
        _ = null;
        d.Z.checkScheduledMaintenances();
    },
    STATUS_PAGE_INCIDENT: function (e) {
        _ = e.incident;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function (e) {
        E = e.maintenance;
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function () {
        if (null == E)
            return !1;
        m = E.id, o.K.set(u, m);
    }
});
