n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(653041);
var i = n(399606),
    l = n(897345),
    r = n(697379),
    a = n(241559),
    s = n(563534),
    o = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    h = n(265418),
    p = n(443063),
    _ = n(981631);
function f(e) {
    let t = (0, h.Z)(e.id),
        n = (0, r.W)(e.id),
        f = (0, d.j0)(e.id),
        g = (0, l.u)(e),
        m = (0, c.g)(e.id),
        C = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        I = (0, u.Z)(e.id),
        E = (0, o.PE)(e.id),
        N = (0, a.n2)(e.id),
        x = [],
        S = e.hasFeature(_.oNc.HUB),
        v = e.hasFeature(_.oNc.COMMUNITY),
        Z = e.hasFeature(_.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY);
    return S && x.push(p.z.GUILD_HUB_HEADER_OPTIONS), !E && m && I && null != C && C.length > 0 ? x.push(p.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && x.push(p.z.GUILD_PREMIUM_PROGRESS_BAR), !S && m && x.push(p.z.GUILD_HOME), t && x.push(p.z.GUILD_SCHEDULED_EVENTS), !S && v && x.push(p.z.CHANNELS_AND_ROLES), f && x.push(p.z.GUILD_ROLE_SUBSCRIPTIONS), g && x.push(p.z.GUILD_SHOP), n && x.push(p.z.GUILD_MEMBER_APPLICATIONS), N && (v || Z) && x.push(p.z.GUILD_MOD_DASH_MEMBER_SAFETY), x;
}
