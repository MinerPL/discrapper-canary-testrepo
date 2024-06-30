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
            otherUsername: r,
            usernameHook: o,
            otherUsernameHook: c,
            compact: d
        } = e, {nick: u} = (0, a.ZP)(t), _ = o(), E = c(), m = l.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
            username: u,
            usernameHook: _,
            otherUsername: r,
            otherUsernameHook: E
        });
    return (0, i.jsx)(s.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: d,
        children: m
    });
}
