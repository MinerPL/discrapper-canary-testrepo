t.d(n, {
    BT: function () {
        return u;
    },
    N8: function () {
        return c;
    }
});
var o = t(442837);
t(467319);
var i = t(496675), a = t(154285), s = t(655006), l = t(533244), r = t(487419), d = t(981631);
function c(e) {
    let n = (0, o.e7)([i.Z], () => function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
            return n.can(d.Plq.BAN_MEMBERS, e) || n.can(d.Plq.KICK_MEMBERS, e) || n.can(d.Plq.MANAGE_GUILD, e);
        }(e, i.Z), [e]), t = (0, o.e7)([r.Z], () => null != e ? r.Z.getGuildIncident(e.id) : null, [e]);
    return !(null != t && (0, l.i9)(t)) && n;
}
function u(e) {
    var n;
    let t = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : d.lds, l = (0, o.e7)([i.Z], () => function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
            return n.can(d.Plq.MANAGE_GUILD, e);
        }(e, i.Z), [e]), {enableRaidAlerts: r} = s.l.useExperiment({
            guildId: t,
            location: '4467c7_3'
        }, { autoTrackExposure: l }), {showAlertMode: c} = (0, a.sw)(t);
    return l && (r || c);
}
