n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(692547), s = n(481060), l = n(739566), r = n(702346), o = n(689938), c = n(518171);
function d(e) {
    let {
            message: t,
            compact: n,
            usernameHook: d
        } = e, u = (0, l.ZP)(t), _ = d(u), E = o.Z.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
            username: u.nick,
            usernameHook: _,
            topic: t.content
        });
    return (0, i.jsx)(r.Z, {
        className: c.stageSystemMessage,
        iconNode: (0, i.jsx)(s.StageIcon, {
            size: 'md',
            color: a.Z.unsafe_rawColors.GREEN_360.css
        }),
        iconContainerClassName: c.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: E
    });
}
