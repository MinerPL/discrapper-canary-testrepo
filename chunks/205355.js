"use strict";
n.r(t), n("47120");
var s = n("544891"),
  a = n("570140"),
  l = n("981631");
let i = "".concat(l.STATUS_PAGE_ENDPOINT, "/api/v2/scheduled-maintenances"),
  r = "".concat(l.STATUS_PAGE_ENDPOINT, "/api/v2/incidents/unresolved.json");
t.default = {
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