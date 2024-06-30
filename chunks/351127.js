n.d(t, {
    B2: function () {
        return f;
    },
    Ov: function () {
        return _;
    },
    Qn: function () {
        return p;
    },
    _o: function () {
        return m;
    },
    pd: function () {
        return h;
    }
}), n(47120), n(411104), n(653041);
var i = n(149765), a = n(399606), l = n(271383), s = n(430824), r = n(594174), o = n(700785), c = n(981631), u = n(135899);
let d = [c.Plq.USE_CLYDE_AI], h = Object.keys(c.Plq).filter(e => !d.includes(c.Plq[e])), p = Array.from(new Set([
        ...u.$X,
        ...c.yYS,
        c.Plq.ADMINISTRATOR,
        c.Plq.KICK_MEMBERS,
        c.Plq.BAN_MEMBERS,
        c.Plq.MANAGE_GUILD,
        c.Plq.MANAGE_CHANNELS,
        c.Plq.MANAGE_ROLES,
        c.Plq.MANAGE_MESSAGES,
        c.Plq.MANAGE_THREADS,
        c.Plq.MANAGE_GUILD_EXPRESSIONS,
        c.Plq.CREATE_GUILD_EXPRESSIONS,
        c.Plq.MANAGE_EVENTS,
        c.Plq.CREATE_EVENTS,
        c.Plq.MODERATE_MEMBERS,
        c.Plq.MENTION_EVERYONE,
        c.Plq.MANAGE_WEBHOOKS
    ])).map(e => {
        let t = h.find(t => c.Plq[t] === e);
        if (null == t)
            throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }), m = new Set(c.yYS);
function _(e, t) {
    return e === t;
}
function f(e, t, n) {
    let u = (0, a.e7)([s.Z], () => s.Z.getGuild(t), [t]);
    return (0, a.e7)([
        l.ZP,
        r.default,
        s.Z
    ], () => {
        let a = {}, d = l.ZP.getMember(t, e), h = r.default.getUser(e);
        if (null == u || null == d || null == h)
            return a;
        let p = s.Z.getRole(u.id, u.getEveryoneRoleId()), m = o.uB({
                user: h,
                context: u
            });
        for (let e of n) {
            let t = c.Plq[e];
            if (!!i.e$(m, t)) {
                for (let n of (a[e] = [], d.roles)) {
                    let l = s.Z.getRole(u.id, n);
                    if (null != l)
                        (i.e$(l.permissions, c.Plq.ADMINISTRATOR) || i.Db(l.permissions, t)) && a[e].push(l.id);
                }
                null != p && (i.e$(p.permissions, c.Plq.ADMINISTRATOR) || i.Db(p.permissions, t)) && a[e].push(p.id), u.isOwner(h) && a[e].push(h.id);
            }
        }
        return a;
    }, [
        u,
        t,
        n,
        e
    ]);
}
