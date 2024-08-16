n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(626135),
    i = n(981631);
function a(e) {
    let { type: t, source: n, userId: a, applicationId: s, partyId: o, messageId: l, locationObject: u, analyticsLocations: c } = e;
    r.default.track(i.rMx.APPLICATION_OPENED, {
        type: t,
        source: n,
        application_id: s,
        party_id: null != o ? o : void 0,
        other_user_id: a,
        message_id: l,
        location: u,
        location_stack: c
    });
}
