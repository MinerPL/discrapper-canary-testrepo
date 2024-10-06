n.d(t, {
    HY: function () {
        return E;
    },
    pU: function () {
        return g;
    },
    y: function () {
        return m;
    }
}),
    n(47120),
    n(390547);
var l = n(442837),
    a = n(933557),
    s = n(926491),
    i = n(378233),
    r = n(131704),
    o = n(592125),
    c = n(496675),
    u = n(699516),
    d = n(594174),
    h = n(823379),
    _ = n(981631),
    f = n(689938);
function E(e, t, n) {
    let l = n instanceof r.Sf;
    if (t.isNSFW() && !(l && n.isNSFW())) return { label: f.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED };
    if (l && (0, r.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !c.Z.can(_.Plq.ATTACH_FILES, n)) return { label: f.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !c.Z.can(_.Plq.EMBED_LINKS, n)) return { label: f.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED };
        let t = [
            ...(0, i.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, i.cv)(t);
            })
        ];
        if (
            t.length > 0 &&
            !c.Z.can(_.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = s.Z.getStickerById(e.id);
                    return !!(null != n && (0, i.J8)(n)) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: f.Z.Messages.MESSAGE_CHANNEL_EXTERNAL_STICKERS_DISABLED };
        if ((e.hasFlag(_.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(_.iLy.IS_VOICE_MESSAGE))) && !c.Z.can(_.Plq.SEND_VOICE_MESSAGES, n)) return { label: f.Z.Messages.MESSAGE_CHANNEL_VOICE_MESSAGES_DISABLED };
    }
}
function g(e, t) {
    return null != e.rateLimitPerUser && !!(e.rateLimitPerUser > 0) && !(t.can(_.Plq.MANAGE_CHANNELS, e) || t.can(_.Plq.MANAGE_MESSAGES, e));
}
function m(e) {
    let t = (0, l.Wu)(
        [o.Z, c.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? o.Z.getChannel(n) : null;
                })
                .filter(h.lm)
                .filter((e) => g(e, c.Z)),
        [e]
    );
    return (0, l.Wu)([d.default, u.Z], () => t.map((e) => (0, a.F6)(e, d.default, u.Z, !0)), [t]);
}
