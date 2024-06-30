n(47120), n(789020);
var i, a, s, l, r = n(442837), o = n(433517), c = n(570140), d = n(314897), u = n(592125), _ = n(496675), E = n(594174), m = n(630388), I = n(110630), T = n(981631);
let h = 'ChannelFollowingBumpChannels', N = new Set(), f = new Set();
class p extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(d.default), N = new Set(o.K.get(h));
    }
    shouldShowBump(e) {
        return f.has(e);
    }
}
l = 'ChannelFollowingPublishBumpStore', (s = 'displayName') in (a = p) ? Object.defineProperty(a, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = l, t.Z = new p(c.Z, {
    MESSAGE_CREATE: function (e) {
        var t;
        let {
            channelId: n,
            message: i,
            optimistic: a
        } = e;
        if (a || N.has(n))
            return !1;
        let s = u.Z.getChannel(n), l = E.default.getCurrentUser();
        if (!(null != s && s.type === T.d4z.GUILD_ANNOUNCEMENT && (0, I.Z)(i) && (null != l && (null === (t = i.author) || void 0 === t ? void 0 : t.id) === l.id ? _.Z.can(T.Plq.SEND_MESSAGES, s) : _.Z.can(T.Plq.MANAGE_MESSAGES, s)) && !m.yE(Number(i.flags), T.iLy.CROSSPOSTED)))
            return !1;
        f.add(i.id);
    },
    MESSAGE_UPDATE: function (e) {
        let {message: t} = e;
        f.has(t.id) && m.yE(Number(t.flags), T.iLy.CROSSPOSTED) && f.delete(t.id);
    },
    CHANNEL_SELECT: function (e) {
        f.clear();
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function (e) {
        let {messageId: t} = e;
        f.delete(t);
    },
    CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function (e) {
        let {channelId: t} = e;
        N.add(t), o.K.set(h, N), f.clear();
    }
});
