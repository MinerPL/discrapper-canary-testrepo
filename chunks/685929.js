t.d(n, {
    C: function () {
        return l;
    },
    Y: function () {
        return r;
    }
});
var i = t(442837),
    a = t(496675),
    s = t(981631);
function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z;
    return null != e && null != e.linkedLobby && n.can(s.Plq.MANAGE_CHANNELS, e) && n.can(s.Plq.VIEW_CHANNEL, e) && n.can(s.Plq.SEND_MESSAGES, e);
}
function r(e) {
    return (0, i.e7)([a.Z], () => l(e, a.Z));
}
