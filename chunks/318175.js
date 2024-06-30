n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(739566), s = n(702346), l = n(689938);
function r(e) {
    let t, {
            message: r,
            usernameHook: o,
            otherUser: c,
            otherUsernameHook: d,
            compact: u,
            channel: _
        } = e, E = (0, a.ZP)(r), m = E.nick, I = o(E), T = (0, a.Sw)(c, _);
    if (null != T && null != d) {
        let e = d(T);
        t = l.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
            username: m,
            usernameHook: I,
            otherUsername: T.nick,
            otherUsernameHook: e
        });
    } else
        t = l.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
            username: m,
            usernameHook: I
        });
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: r.timestamp,
        compact: u,
        children: t
    });
}
