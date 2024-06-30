n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(739566), l = n(702346), r = n(689938), o = n(518171);
function c(e) {
    let {
            message: t,
            compact: n,
            usernameHook: c
        } = e, d = (0, s.ZP)(t), u = c(d), _ = r.Z.Messages.SYSTEM_MESSAGE_STAGE_END_HOOK.format({
            username: d.nick,
            usernameHook: u,
            topic: t.content
        });
    return (0, i.jsx)(l.Z, {
        className: o.stageSystemMessage,
        iconNode: (0, i.jsx)(a.StageIcon, {
            size: 'md',
            color: 'currentColor'
        }),
        iconContainerClassName: o.iconContainer,
        timestamp: t.timestamp,
        compact: n,
        children: _
    });
}
