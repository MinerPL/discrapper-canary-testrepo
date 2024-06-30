n.d(t, {
    T: function () {
        return d;
    },
    q: function () {
        return u;
    }
});
var i = n(442837), l = n(306680), r = n(709054), a = n(879041), s = n(355298), o = n(177033), c = n(490897);
function u() {
    return (0, i.e7)([s.Z], () => s.Z.getMessageRequestsCount());
}
function d() {
    let e = (0, a.e)({ location: 'use-message-requests-count' }), t = (0, i.e7)([l.ZP], () => l.ZP.getNonChannelAckId(c.W.MESSAGE_REQUESTS)), n = (0, o.Z)();
    return e ? n.filter(e => r.default.compare(e.channel.id, t) > 0).length : n.length;
}
