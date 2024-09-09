n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(749210),
    s = n(336197),
    a = n(592125),
    r = n(430824),
    l = n(626135),
    o = n(900849),
    c = n(981631);
async function u(e) {
    var t;
    if (null == e.messageReference) return;
    let n = e.messageReference.guild_id,
        u = e.messageReference.channel_id,
        d = e.messageReference.message_id,
        _ = a.Z.getChannel(u),
        E = !1;
    if (null == _ && null != n && null == r.Z.getGuild(n))
        try {
            await (0, o.Ub)(n, { object: c.qAy.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }), (E = !0), await (0, i.V)(n), (_ = a.Z.getChannel(u));
        } catch {}
    l.default.track(c.rMx.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: null === (t = a.Z.getBasicChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: n,
        breadcrumb_channel_id: u,
        breadcrumb_message_id: d,
        did_lurk: E
    });
    let I = E ? u : void 0;
    (0, s.Z)(c.Z5c.CHANNEL(n, u, d), { welcomeModalChannelId: I });
}
