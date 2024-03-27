"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var s = n("872717"),
  a = n("913144"),
  l = n("49111");
let i = "".concat(l.STATUS_PAGE_ENDPOINT, "/api/v2/scheduled-maintenances"),
  r = "".concat(l.STATUS_PAGE_ENDPOINT, "/api/v2/incidents/unresolved.json");
var o = {
  checkIncidents() {
    Promise.all([s.HTTP.get("".concat(i, "/active.json")), s.HTTP.get(r)]).then(e => {
      let [t, n] = e, [s] = t.body.scheduled_maintenances, [l] = n.body.incidents;
      a.default.dispatch({
        type: "STATUS_PAGE_INCIDENT",
        incident: l || s
      })
    })
  },
  checkScheduledMaintenances() {
    s.HTTP.get("".concat(i, "/upcoming.json")).then(e => {
      let [t] = e.body.scheduled_maintenances;
      a.default.dispatch({
        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
        maintenance: t
      })
    })
  },
  ackScheduledMaintenance() {
    a.default.dispatch({
      type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
    })
  }
}