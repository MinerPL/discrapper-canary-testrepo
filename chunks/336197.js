n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(727429), i = n(703656), a = n(769654), o = n(592125), s = n(754688), l = n(849027), u = n(927723), c = n(981631);
async function d(e, t, n) {
    let d = (0, s.Qj)(e);
    if (null != d && !await (0, l.Z)(d)) {
        (0, u.k)({ kind: 'channel' });
        return;
    }
    if (null == d) {
        (0, i.uL)(e, t, n);
        return;
    }
    let _ = function (e) {
        if (null == e.channelId)
            return e;
        let t = o.Z.getChannel(e.channelId);
        if (null == t)
            return e;
        let n = (0, r.e)(t);
        return {
            ...e,
            guildId: null != n ? n : c.ME
        };
    }(d);
    if (null == _.channelId) {
        (0, a.X)(_.guildId);
        return;
    }
    null != _.threadId ? (0, i.uL)(c.Z5c.CHANNEL_THREAD_VIEW(_.guildId, _.channelId, _.threadId, _.messageId), t, n) : (0, i.uL)(c.Z5c.CHANNEL(_.guildId, _.channelId, _.messageId), t, n);
}
