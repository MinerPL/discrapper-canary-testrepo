n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(739566), s = n(702346), l = n(689938);
function r(e) {
    let {
            message: t,
            channel: r,
            targetUser: o,
            actorUsernameHook: c,
            targetUsernameHook: d,
            compact: u
        } = e, _ = (0, a.ZP)(t), E = (0, a.Sw)(o, r), m = c(_), I = d(null != E ? E : void 0), T = l.Z.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_REMOVE.format({
            actorName: _.nick,
            actorHook: m,
            targetName: null == E ? void 0 : E.nick,
            targetHook: I
        });
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: t.timestamp,
        compact: u,
        children: T
    });
}
