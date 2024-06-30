n.d(t, {
    Ux: function () {
        return N;
    },
    gS: function () {
        return f;
    },
    ww: function () {
        return p;
    }
}), n(789020);
var i = n(470079), a = n(399606), s = n(230711), l = n(906732), r = n(18438), o = n(314897), c = n(271383), d = n(430824), u = n(496675), _ = n(914010), E = n(715903), m = n(981631), I = n(372897), T = n(526761), h = n(689938);
function N(e) {
    return (0, a.e7)([
        o.default,
        c.ZP
    ], () => {
        if (null == e)
            return !1;
        let t = o.default.getId();
        return (0, E.EY)(c.ZP.getMember(e, t));
    }, [e]);
}
function f(e) {
    return (0, a.cj)([
        o.default,
        c.ZP,
        _.Z,
        d.Z
    ], () => {
        let t = {
                nick: void 0,
                bio: void 0
            }, n = _.Z.getGuildId(), i = null != e ? e : n, a = d.Z.getGuild(i);
        if (null == a || null == i)
            return t;
        let s = o.default.getId(), l = c.ZP.getMember(i, s), r = (0, E.Ow)(null == l ? void 0 : l.flags);
        if (0 === r.size)
            return t;
        if (r.has(I.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
            if (null == e) {
                var u;
                t.nick = [h.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({ guildName: null !== (u = a.name) && void 0 !== u ? u : '' })];
            } else
                t.nick = [h.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME];
        }
        return r.has(I.q.AUTOMOD_QUARANTINED_BIO) && (t.bio = [h.Z.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), t;
    }, [e]);
}
function p(e) {
    let {
            guildId: t,
            scrollPosition: n,
            analyticsLocation: o,
            analyticsLocations: c,
            openWithoutBackstack: _
        } = e, {analyticsLocations: E} = (0, l.ZP)(), I = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]), h = (0, a.e7)([u.Z], () => null != I && u.Z.can(m.Plq.CHANGE_NICKNAME, I), [I]);
    return [
        i.useCallback(() => {
            if (null == I)
                return;
            let e = m.oAB.PROFILE_CUSTOMIZATION, t = T.NB.GUILD;
            h ? (0, r.Fq)(I, null != c ? c : E) : t = T.NB.USER_PROFILE, s.Z.open(e, t, {
                scrollPosition: n,
                analyticsLocation: o,
                analyticsLocations: c,
                openWithoutBackstack: _
            });
        }, [
            h,
            n,
            o,
            c,
            _,
            I,
            E
        ]),
        h
    ];
}
