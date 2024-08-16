n.d(t, {
    cO: function () {
        return u;
    },
    eb: function () {
        return i;
    },
    kl: function () {
        return c;
    }
});
var r,
    i,
    a = n(700785),
    s = n(74538),
    o = n(378233),
    l = n(981631);
((r = i || (i = {}))[(r.SENDABLE = 0)] = 'SENDABLE'), (r[(r.SENDABLE_WITH_PREMIUM = 1)] = 'SENDABLE_WITH_PREMIUM'), (r[(r.NONSENDABLE = 2)] = 'NONSENDABLE'), (r[(r.SENDABLE_WITH_BOOSTED_GUILD = 3)] = 'SENDABLE_WITH_BOOSTED_GUILD');
let u = (e, t, n) => {
        if (null == t) return 2;
        let r = s.ZP.canUseCustomStickersEverywhere(t);
        if ((0, o.jl)(e)) return 0;
        if ((0, o.J8)(e) && null != n)
            return e.available
                ? null != n.guild_id && '' !== n.guild_id && n.guild_id === e.guild_id
                    ? 0
                    : null == n.guild_id ||
                        a.BT({
                            permission: l.Plq.USE_EXTERNAL_STICKERS,
                            user: t,
                            context: n
                        })
                      ? r
                          ? 0
                          : 1
                      : 2
                : 3;
        return 2;
    },
    c = (e, t, n) => 0 === u(e, t, n);
