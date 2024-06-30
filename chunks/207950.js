n.d(t, {
    Z: function () {
        return u;
    }
}), n(390547), n(653041);
var i = n(735250);
n(470079);
var a = n(392711), s = n.n(a), l = n(132338), r = n(289481), o = n(809780), c = n(689938), d = n(521173);
function u(e, t, n) {
    let {
            markChannelRead: a,
            markGuildRead: u,
            deleteChannel: _,
            toggle: E,
            getNumUnreadChannels: m
        } = t, I = null;
    return s().flatMap(e, e => {
        let t = e.sortOrder !== I;
        I = e.sortOrder;
        let s = [];
        return t && (e.hasLoadedAnything && e.sortOrder === o.As.ReallyOldChannel ? s.push((0, i.jsx)(l.Z, {
            className: d.divider,
            contentClassName: d.dividerContent,
            children: c.Z.Messages.UNREADS_OLD_CHANNELS_DIVIDER
        }, 'old-divider')) : e.hasLoadedAnything && e.sortOrder === o.As.NoNotifications && s.push((0, i.jsx)(l.Z, {
            className: d.divider,
            contentClassName: d.dividerContent,
            children: c.Z.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
        }, 'disabled-divider'))), s.push((0, i.jsx)(r.Z, {
            channel: e,
            markChannelRead: a,
            markGuildRead: u,
            toggle: E,
            deleteChannel: _,
            onJump: n,
            getNumUnreadChannels: m
        }, e.channelId)), s;
    });
}
