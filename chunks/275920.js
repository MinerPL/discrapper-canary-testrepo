n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(626135),
    i = n(981631);
function a(e) {
    let { type: t, source: n, userId: a, guildId: s, channelId: o, channelType: l, applicationId: u, partyId: c, messageId: d, locationObject: _, analyticsLocations: E } = e;
    r.default.track(i.rMx.APPLICATION_OPENED, {
        type: t,
        source: n,
        guild_id: s,
        channel_id: o,
        channel_type: l,
        application_id: u,
        party_id: null != c ? c : void 0,
        other_user_id: a,
        message_id: d,
        location: _,
        location_stack: E
    });
}
