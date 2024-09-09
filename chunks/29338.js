n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(692547),
    s = n(481060),
    r = n(739566),
    l = n(834129),
    o = n(689938),
    c = n(820843);
function u(e) {
    let { message: t, compact: n, usernameHook: u } = e,
        d = (0, r.ZP)(t),
        _ = u(d),
        E = o.Z.Messages.SYSTEM_MESSAGE_STAGE_START_HOOK.format({
            username: d.nick,
            usernameHook: _,
            topic: t.content
        });
    return (0, i.jsx)(l.Z, {
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
