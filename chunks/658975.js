n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(739566), s = n(702346), l = n(352736);
function r(e) {
    let {
            message: t,
            usernameHook: r,
            compact: o,
            guildId: c
        } = e, d = (0, a.ZP)(t), u = r(d), _ = l.Z.getWelcomeMessageKind(c), E = l.Z.getSystemMessageUserJoin(t.id, _).format({
            username: d.nick,
            usernameHook: u
        });
    return (0, i.jsx)(s.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: o,
        children: E
    });
}
