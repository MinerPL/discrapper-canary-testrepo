n.d(t, { Z: () => y }), n(539854);
var r = n(399606),
    i = n(897345),
    l = n(697379),
    o = n(241559),
    a = n(563534),
    s = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    p = n(265418),
    h = n(398758),
    f = n(50101),
    g = n(639777),
    m = n(330791),
    b = n(443063),
    _ = n(981631);
function y(e) {
    let t = (0, p.Z)(e.id),
        n = (0, l.W)(e.id),
        y = (0, d.j0)(e.id),
        v = (0, i.u)(e),
        O = (0, c.g)(e.id),
        j = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
        C = (0, u.Z)(e.id),
        x = (0, s.PE)(e.id),
        S = (0, o.n2)(e.id),
        P = [],
        I = e.hasFeature(_.oNc.HUB),
        N = e.hasFeature(_.oNc.COMMUNITY),
        E = (0, m.lN)(!(0, h.r1)(e.id)),
        Z = e.hasFeature(_.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        w = (0, f.Ek)(e.id, 'useGuildActionRow'),
        T = (0, g.Z)(e.id);
    return I && P.push(b.z.GUILD_HUB_HEADER_OPTIONS), !x && O && C && null != j && j.length > 0 ? P.push(b.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && P.push(b.z.GUILD_PREMIUM_PROGRESS_BAR), !I && O && P.push(b.z.GUILD_HOME), t && P.push(b.z.GUILD_SCHEDULED_EVENTS), !I && N && E && P.push(b.z.CHANNELS_AND_ROLES), y && P.push(b.z.GUILD_ROLE_SUBSCRIPTIONS), v && P.push(b.z.GUILD_SHOP), ((S && (N || Z)) || (n && e.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) && P.push(b.z.GUILD_MOD_DASH_MEMBER_SAFETY), w && T && P.push(b.z.GUILD_BOOSTS), P;
}
