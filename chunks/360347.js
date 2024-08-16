n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(699516),
    a = n(453542);
function s() {
    return {
        num_friends: i.Z.getFriendCount(),
        num_outgoing_requests: i.Z.getOutgoingCount(),
        num_incoming_requests: i.Z.getPendingCount(),
        ...(0, a.X)()
    };
}
