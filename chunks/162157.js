t.d(n, {
    BT: function () {
        return d;
    },
    N8: function () {
        return r;
    }
});
var o = t(442837);
t(467319);
var i = t(496675),
    a = t(533244),
    s = t(487419),
    l = t(981631);
function r(e) {
    let n = (0, o.e7)(
            [i.Z],
            () =>
                (function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                    return n.can(l.Plq.BAN_MEMBERS, e) || n.can(l.Plq.KICK_MEMBERS, e) || n.can(l.Plq.MANAGE_GUILD, e);
                })(e, i.Z),
            [e]
        ),
        t = (0, o.e7)([s.Z], () => (null != e ? s.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != t && (0, a.i9)(t)) && n;
}
function d(e) {
    return (0, o.e7)(
        [i.Z],
        () =>
            (function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                return n.can(l.Plq.MANAGE_GUILD, e);
            })(e, i.Z),
        [e]
    );
}
