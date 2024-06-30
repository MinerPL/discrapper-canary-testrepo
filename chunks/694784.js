n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(336197), a = n(592125), s = n(430824), l = n(900849), r = n(981631);
async function o(e) {
    if (null == e.messageReference)
        return;
    let t = e.messageReference.guild_id, n = e.messageReference.channel_id, o = a.Z.getChannel(n);
    if (null == o && null != t && null == s.Z.getGuild(t))
        try {
            await (0, l.Ub)(t, {}, { channelId: n }), o = a.Z.getChannel(n);
        } catch {
        }
    (0, i.Z)(r.Z5c.CHANNEL(t, n, e.messageReference.message_id), void 0);
}
