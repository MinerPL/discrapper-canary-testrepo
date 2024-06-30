n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(470079), a = n(106351), s = n(442837), l = n(434650), r = n(430824), o = n(63205), c = n(529726), d = n(981631);
function u(e) {
    var t, n;
    let {
            message: u,
            channel: _,
            enabled: E = !0
        } = e, m = (0, s.e7)([r.Z], () => {
            var e;
            let t = r.Z.getGuild(_.guild_id);
            return null !== (e = null == t ? void 0 : t.hasFeature(d.oNc.COMMUNITY)) && void 0 !== e && e;
        }, [_.guild_id]), I = (null === (t = u.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != u.webhookId && u.hasFlag(d.iLy.IS_CROSSPOST) && null != _.guild_id, T = _.type === a.d.GUILD_ANNOUNCEMENT && m, h = !u.hasFlag(d.iLy.EPHEMERAL) && (I || T), N = I && null != u.messageReference ? u.messageReference.message_id : u.id, f = I && null != u.messageReference ? u.messageReference.channel_id : _.id, p = I && (null === (n = u.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? u.messageReference.guild_id : _.guild_id, C = i.useCallback(e => {
            e ? c.Z.handleMessageBecameVisible({
                messageId: N,
                channelId: _.id,
                guildId: _.guild_id,
                sourceChannelId: f,
                sourceGuildId: p
            }) : c.Z.handleMessageLostVisibility(N);
        }, [
            N,
            _.id,
            _.guild_id,
            f,
            p
        ]), g = o.Z.useExperiment({ location: '836a4b_1' }, {
            disable: !h || !E,
            autoTrackExposure: !0
        }).enabled, S = (0, l.O)(C, 0, g);
    return i.useEffect(() => () => {
        c.Z.handleMessageLostVisibility(N);
    }, [N]), S;
}
