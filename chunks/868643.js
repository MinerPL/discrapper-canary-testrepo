n.d(t, {
    a: function () {
        return E;
    },
    h: function () {
        return _;
    }
}), n(789020);
var i = n(470079), a = n(442837), s = n(430198), l = n(378233), r = n(592125), o = n(630388), c = n(981631);
let d = c.iLy.CROSSPOSTED | c.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.iLy.GUILD_FEED_HIDDEN | c.iLy.HAS_SNAPSHOT | c.iLy.HAS_THREAD | c.iLy.IS_CROSSPOST | c.iLy.IS_VOICE_MESSAGE | c.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.iLy.SUPPRESS_EMBEDS | c.iLy.SUPPRESS_NOTIFICATIONS | c.iLy.URGENT;
function u(e) {
    return e.state !== c.yb.SEND_FAILED && !!c.V$x.FORWARDABLE.has(e.type) && null == e.poll && !(e.components.length > 0) && null == e.activity && null == e.call && null == e.interaction && 0 === (0, o.Ge)(e.flags, d) && !((0, l.cv)(e).length > 0) && !0;
}
function _(e) {
    var t;
    if (!u(e))
        return !1;
    let n = null === (t = r.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
    return !(null != n && s.Z.isChannelGated(n, e.channel_id)) && !0;
}
function E(e) {
    let t = (0, a.e7)([
        s.Z,
        r.Z
    ], () => {
        var t;
        if (null == e)
            return !1;
        let n = null === (t = r.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
        return null != n && s.Z.isChannelGated(n, e.channel_id);
    });
    return i.useMemo(() => null != e && u(e), [e]) && !t;
}
