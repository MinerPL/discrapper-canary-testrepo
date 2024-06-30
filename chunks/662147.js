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
            usernameHook: r,
            compact: o
        } = e, c = (0, a.ZP)(t), d = r(c);
    return (0, i.jsx)(s.Z, {
        icon: n(819373),
        timestamp: t.timestamp,
        compact: o,
        children: l.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE_HOOK.format({
            username: c.nick,
            usernameHook: d
        })
    });
}
