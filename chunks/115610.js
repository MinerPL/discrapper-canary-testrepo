n.d(t, {
    O: function () {
        return _;
    }
}),
    n(536091);
var i = n(904245),
    r = n(339085),
    l = n(957730),
    a = n(285651),
    o = n(268350),
    s = n(926491),
    c = n(373228),
    d = n(430824),
    u = n(594174),
    m = n(176354),
    h = n(709054),
    f = n(981631),
    p = n(185923);
function g(e) {
    let t = d.Z.getGuild(e);
    return null != t && (t.nsfwLevel === f.V_K.DEFAULT || t.nsfwLevel === f.V_K.SAFE);
}
async function _(e, t) {
    var n, f, _;
    let C = t.getGuildId();
    if (null == C || null == d.Z.getGuild(C)) return;
    let E = u.default.getCurrentUser();
    if (null == E) return;
    await (0, o.$p)();
    let I = Array.from(s.Z.getAllStickersIterator()),
        x = I.filter((e) => e.type === c.n0.GUILD)
            .filter((e) => g(e.guild_id) && (0, a.kl)(e, E, t))
            .sort((e, t) => -h.default.compare(e.id, t.id));
    if (x.length > 5) {
        let r = [x[Math.floor(Math.pow(Math.random(), 2) * x.length)].id];
        i.Z.sendStickers(t.id, r, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let v = d.Z.getGuildIds()
        .filter(g)
        .map((e) => r.ZP.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                m.ZP.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: C,
                    intention: p.Hz.CHAT
                })
        )
        .sort((e, t) => -h.default.compare(e.id, t.id));
    if (v.length > 10) {
        let n = v[Math.floor(Math.pow(Math.random(), 2) * v.length)];
        i.Z.sendMessage(t.id, l.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (f = t.getGuildId()) && void 0 !== f ? f : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let N = I.filter((e) => e.type === c.n0.STANDARD),
        T = [N[Math.floor(Math.random() * N.length)].id];
    i.Z.sendStickers(t.id, T, '', {
        messageReference: {
            guild_id: null !== (_ = t.getGuildId()) && void 0 !== _ ? _ : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}
