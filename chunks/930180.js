n.d(t, {
    Z7: function () {
        return o;
    },
    _d: function () {
        return s;
    },
    z: function () {
        return l;
    }
});
var r = n(442837),
    i = n(565799),
    a = n(501655);
function s(e) {
    return (0, r.e7)([i.Z], () => (null != e ? i.Z.getParticipantCount(e, a.pV.BLOCKED) : 0), [e]);
}
function o(e) {
    var t;
    return null !== (t = i.Z.getParticipantCount(e, a.pV.BLOCKED)) && void 0 !== t ? t : 0;
}
function l(e) {
    return (0, r.e7)([i.Z], () => i.Z.getMutableParticipants(e, a.pV.BLOCKED), [e]);
}
