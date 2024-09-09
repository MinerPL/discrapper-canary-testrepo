n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(442837),
    a = n(481060),
    s = n(970606),
    o = n(693546),
    c = n(826581),
    u = n(246364),
    d = n(98493),
    h = n(703656),
    p = n(496675),
    _ = n(669405),
    f = n(434479),
    g = n(981631),
    m = n(176505),
    C = n(689938);
function I(e) {
    let { guild: t, selected: n } = e,
        I = (0, r.e7)([p.Z], () => p.Z.can(g.Plq.KICK_MEMBERS, t)),
        E = (0, r.e7)([c.Z], () => c.Z.getSubmittedGuildJoinRequestTotal(t.id)),
        N = I && null != E ? E : 0;
    return (
        l.useEffect(() => {
            I &&
                o.Z.fetchGuildJoinRequests({
                    guildId: t.id,
                    status: u.wB.SUBMITTED,
                    limit: d.p
                });
        }, [I, t.id]),
        (0, i.jsx)(f.m, {
            id: 'application-review-'.concat(t.id),
            renderIcon: (e) =>
                (0, i.jsx)(_.Z, {
                    className: e,
                    width: 24,
                    height: 24
                }),
            text: C.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS,
            selected: n,
            onClick: () => {
                (0, s.Q2)({
                    guildId: t.id,
                    source: g.jXE.CHANNEL_LIST,
                    tab: m.oC.MEMBER_APPLICATIONS
                }),
                    (0, h.uL)(g.Z5c.CHANNEL(t.id, m.oC.MEMBER_APPLICATIONS));
            },
            trailing: N > 0 ? (0, i.jsx)(a.NumberBadge, { count: N }) : null
        })
    );
}
