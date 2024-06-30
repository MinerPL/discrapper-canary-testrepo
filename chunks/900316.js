n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var a = n(739566), s = n(702346), l = n(689938), r = n(636803);
function o(e) {
    let {
            message: t,
            usernameHook: o,
            compact: c,
            isForumPost: d
        } = e, u = (0, a.ZP)(t), _ = o(u);
    return (0, i.jsx)(s.Z, {
        compact: c,
        className: r.channelNameChange,
        icon: n(819373),
        timestamp: t.timestamp,
        children: (d ? l.Z.Messages.SYSTEM_MESSAGE_FORUM_POST_TITLE_CHANGE2 : l.Z.Messages.SYSTEM_MESSAGE_CHANNEL_NAME_CHANGE2).format({
            username: u.nick,
            usernameHook: _,
            channelName: t.content
        })
    });
}
