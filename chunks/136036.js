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
            compact: r,
            missed: o,
            joinable: c,
            usernameHook: d,
            onClickJoinCall: u
        } = e, _ = (0, a.ZP)(t), E = _.nick, m = d(_), I = function (e) {
            let t = null != e.call ? e.call.duration : null;
            return null != t ? t.humanize() : null;
        }(t);
    return o ? (0, i.jsx)(s.Z, {
        icon: n(154239),
        timestamp: t.timestamp,
        compact: r,
        children: null != I ? l.Z.Messages.SYSTEM_MESSAGE_CALL_MISSED_WITH_DURATION_HOOK.format({
            username: E,
            usernameHook: m,
            callDuration: I
        }) : l.Z.Messages.SYSTEM_MESSAGE_CALL_MISSED_HOOK.format({
            username: E,
            usernameHook: m
        })
    }) : (0, i.jsxs)(s.Z, {
        icon: n(344163),
        timestamp: t.timestamp,
        compact: r,
        children: [
            null != I ? l.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED_WITH_DURATION_HOOK.format({
                username: E,
                usernameHook: m,
                callDuration: I
            }) : l.Z.Messages.SYSTEM_MESSAGE_CALL_STARTED_HOOK.format({
                username: E,
                usernameHook: m
            }),
            c ? (0, i.jsx)(s.Z.Action, {
                onClick: u,
                children: l.Z.Messages.SYSTEM_MESSAGE_JOIN_CALL
            }) : null
        ]
    });
}
