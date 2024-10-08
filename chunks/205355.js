n(47120);
var i = n(544891),
    a = n(570140),
    s = n(981631);
let r = ''.concat(s.dGm, '/api/v2/scheduled-maintenances'),
    l = ''.concat(s.dGm, '/api/v2/incidents/unresolved.json');
t.Z = {
    checkIncidents() {
        Promise.all([i.tn.get(''.concat(r, '/active.json')), i.tn.get(l)]).then((e) => {
            let [t, n] = e,
                [i] = t.body.scheduled_maintenances,
                [s] = n.body.incidents;
            a.Z.dispatch({
                type: 'STATUS_PAGE_INCIDENT',
                incident: s || i
            });
        });
    },
    checkScheduledMaintenances() {
        i.tn.get(''.concat(r, '/upcoming.json')).then((e) => {
            let [t] = e.body.scheduled_maintenances;
            a.Z.dispatch({
                type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE',
                maintenance: t
            });
        });
    },
    ackScheduledMaintenance() {
        a.Z.dispatch({ type: 'STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK' });
    }
};
