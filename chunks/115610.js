n.d(t, {
    O: function () {
        return h;
    }
}), n(536091);
var i = n(904245), a = n(339085), s = n(957730), l = n(285651), r = n(268350), o = n(926491), c = n(373228), d = n(430824), u = n(594174), _ = n(176354), E = n(709054), m = n(981631), I = n(185923);
function T(e) {
    let t = d.Z.getGuild(e);
    return null != t && (t.nsfwLevel === m.V_K.DEFAULT || t.nsfwLevel === m.V_K.SAFE);
}
async function h(e, t) {
    var n, m, h;
    let N = t.getGuildId();
    if (null == N || null == d.Z.getGuild(N))
        return;
    let f = u.default.getCurrentUser();
    if (null == f)
        return;
    await (0, r.$p)();
    let p = Array.from(o.Z.getAllStickersIterator()), C = p.filter(e => e.type === c.n0.GUILD).filter(e => T(e.guild_id) && (0, l.kl)(e, f, t)).sort((e, t) => -E.default.compare(e.id, t.id));
    if (C.length > 5) {
        let a = [C[Math.floor(Math.pow(Math.random(), 2) * C.length)].id];
        i.Z.sendStickers(t.id, a, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let g = d.Z.getGuildIds().filter(T).map(e => a.Z.getUsableGuildEmoji(e)).flat().filter(e => null == _.ZP.getEmojiUnavailableReason({
        emoji: e,
        channel: t,
        guildId: N,
        intention: I.Hz.CHAT
    })).sort((e, t) => -E.default.compare(e.id, t.id));
    if (g.length > 10) {
        let n = g[Math.floor(Math.pow(Math.random(), 2) * g.length)];
        i.Z.sendMessage(t.id, s.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (m = t.getGuildId()) && void 0 !== m ? m : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let S = p.filter(e => e.type === c.n0.STANDARD), A = [S[Math.floor(Math.random() * S.length)].id];
    i.Z.sendStickers(t.id, A, '', {
        messageReference: {
            guild_id: null !== (h = t.getGuildId()) && void 0 !== h ? h : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}
