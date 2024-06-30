n.d(t, {
    Z: function () {
        return u;
    }
});
var s = n(201895), a = n(933557), i = n(592125), r = n(699516), l = n(594174), o = n(293810), c = n(981631), d = n(689938);
function u(e) {
    switch (e.ref_type) {
    case o.Qs.CHANNEL: {
            let t = i.Z.getChannel(e.ref_id);
            return null != t ? function (e) {
                let t = (0, a.F6)(e, l.default, r.Z);
                switch (e.type) {
                case c.d4z.GUILD_VOICE:
                    return d.Z.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({ channelName: t });
                case c.d4z.GUILD_STAGE_VOICE:
                    return d.Z.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL.format({ channelName: t });
                default:
                    return (0, s.ZP)({ channel: e });
                }
            }(t) : '';
        }
    case o.Qs.INTANGIBLE:
        var t;
        return null !== (t = e.name) && void 0 !== t ? t : '';
    }
}
