n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(592125), i = n(19780), a = n(797258), o = n(626135), s = n(981631);
function l(e, t, n) {
    var l, u;
    o.default.track(s.rMx.VOICE_CALL_TRANSFER, {
        source_platform: null != n ? null === (l = a.Z.getSessionById(n)) || void 0 === l ? void 0 : l.clientInfo.os : 'discord_client',
        guild_id: null === (u = r.Z.getChannel(e)) || void 0 === u ? void 0 : u.guild_id,
        channel_id: e,
        rtc_connection_id: i.Z.getRTCConnectionId(),
        target_platform: t
    });
}
