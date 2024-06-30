n.d(t, {
    g: function () {
        return m;
    },
    s: function () {
        return I;
    }
}), n(47120);
var r = n(392711), i = n.n(r), a = n(399606), o = n(637853), s = n(160404), l = n(592125), u = n(430824), c = n(563534), d = n(621923), _ = n(199689), E = n(460347), f = n(981631), h = n(176505);
function p(e) {
    var t;
    let n = e.id, {homeSettingsEnabled: r} = d.ZP.getCurrentConfig({
            guildId: n,
            location: '61eef9_1'
        }, { autoTrackExposure: !1 }), i = (null !== (t = c.Z.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0, a = c.Z.getEnabled(n);
    return r && i && e.hasFeature(f.oNc.COMMUNITY) && !(e.hasFeature(f.oNc.GUILD_ONBOARDING) && !a);
}
function m(e) {
    let {homeSettingsEnabled: t} = d.ZP.useExperiment({
            guildId: e,
            location: '61eef9_2'
        }, { autoTrackExposure: !1 }), n = (0, E.Z)(e), r = l.Z.getMutableGuildChannelsForGuild(e);
    return (0, a.e7)([
        u.Z,
        s.Z
    ], () => {
        let a = u.Z.getGuild(e);
        if (__OVERLAY__ || e === f.ME || e === f.I_8 || null == a)
            return !1;
        if (s.Z.isFullServerPreview(e))
            return p(a);
        let l = (0, _.Z)(a), c = t && (0, o.wC)(e) && a.hasFeature(f.oNc.GUILD_ONBOARDING) && a.hasFeature(f.oNc.GUILD_SERVER_GUIDE), d = i().some(i().values(r), e => e.hasFlag(h.zZ.IS_GUILD_RESOURCE_CHANNEL));
        return !(!n && !d) && (l && a.hasFeature(f.oNc.GUILD_ONBOARDING) && a.hasFeature(f.oNc.GUILD_SERVER_GUIDE) || c) && a.hasFeature(f.oNc.COMMUNITY);
    }, [
        e,
        t,
        n,
        r
    ]);
}
function I(e) {
    let t = u.Z.getGuild(e), {homeSettingsEnabled: n} = d.ZP.getCurrentConfig({
            guildId: e,
            location: '61eef9_4'
        }), r = s.Z.isFullServerPreview(e);
    if (null == t || __OVERLAY__ || e === f.ME || e === f.I_8)
        return !1;
    if (r)
        return p(t);
    let i = n && (0, o.wC)(e) && t.hasFeature(f.oNc.GUILD_ONBOARDING) && t.hasFeature(f.oNc.GUILD_SERVER_GUIDE);
    return (t.hasFeature(f.oNc.GUILD_ONBOARDING) && t.hasFeature(f.oNc.GUILD_SERVER_GUIDE) || i) && t.hasFeature(f.oNc.COMMUNITY);
}
