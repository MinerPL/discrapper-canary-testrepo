n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(739566), l = n(702346), r = n(368666), o = n(689938);
function c(e) {
    var t;
    let {
            message: n,
            channel: c,
            playingActivity: d,
            onJoinStream: u,
            usernameHook: _,
            compact: E
        } = e, m = (0, s.ZP)(n), I = null === (t = n.call) || void 0 === t ? void 0 : t.duration, T = _(m), h = o.Z.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE.format({
            username: m.nick,
            activityName: null != d ? d.name : 'unknown',
            onJoinStream: u,
            usernameHook: T
        });
    return null != I && (h = o.Z.Messages.SYSTEM_MESSAGE_GUILD_STREAM_ENDED.format({
        username: m.nick,
        duration: I.humanize(),
        channelName: c.name,
        usernameHook: T
    })), (0, i.jsx)(l.Z, {
        iconNode: null != I ? (0, i.jsx)(a.ScreenXIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 20,
            height: 20
        }) : (0, i.jsx)(r.ZP, { size: r.ZP.Sizes.SMALL }),
        timestamp: n.timestamp,
        compact: E,
        children: h
    });
}
