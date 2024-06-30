n.d(t, {
    J: function () {
        return u;
    }
}), n(47120);
var r = n(592125), i = n(771845), a = n(553245), o = n(814074), s = n(989263), l = n(981631);
function u(e, t) {
    if (e.totalLength >= t)
        return e;
    let n = new a.b(e.primaryCapacity, e.extendedCapacity), u = t - e.totalLength;
    for (let t of i.ZP.getGuildFolders())
        for (let i of t.guildIds)
            for (let t of Object.values(r.Z.getMutableBasicGuildChannelsForGuild(i)))
                if (function (e) {
                        return e.type === l.d4z.DM || e.type === l.d4z.GROUP_DM || e.type === l.d4z.GUILD_TEXT;
                    }(t) && (0, s.v)(t) && !(0, o.Hr)(t) && function (e, t, n) {
                        !n.hasExtended(t.id) && n.put(t.id, {
                            guildId: e,
                            channelId: t.id,
                            channelType: t.type,
                            fallback: !0
                        });
                    }(i, t, n), n.totalLength >= u)
                    return c(n, e);
    return c(n, e);
}
function c(e, t) {
    for (let [n, r] of t.allEntries())
        e.put(n, r);
    return e;
}
