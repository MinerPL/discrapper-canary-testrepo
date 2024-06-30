n.r(s);
var a = n(735250), t = n(470079), r = n(442837), l = n(100527), i = n(906732), o = n(252618), c = n(598077), d = n(430824), u = n(693546), I = n(863249), E = n(328977), _ = n(208257), T = n(853486), N = n(689938), C = n(807761);
s.default = function (e) {
    let {guildId: s} = e, {analyticsLocations: n} = (0, i.ZP)(l.Z.GUILD_MEMBER_APPLICATION_REVIEW), R = (0, E.L)({ guildId: s }), {user: M} = null != R ? R : {}, m = t.useMemo(() => null != M ? new c.Z(M) : null, [M]), A = (0, r.e7)([d.Z], () => d.Z.getGuild(s), [s]);
    return (0, o.Tt)({
        subsection: N.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
        location: null == A ? void 0 : A.name
    }), t.useEffect(() => {
        I.Z.fetchVerificationForm(s);
    }, [s]), (0, a.jsxs)(i.Gt, {
        value: n,
        children: [
            (0, a.jsx)('div', {
                className: C.content,
                children: (0, a.jsx)(_.Z, { guildId: s })
            }),
            null != R && null != A && null != m && (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)('div', { className: C.sidebarSeparator }),
                    (0, a.jsx)('section', {
                        className: C.sidebar,
                        children: (0, a.jsx)(T.Z, {
                            guild: A,
                            guildJoinRequest: R,
                            guildJoinRequestUser: m,
                            onClose: () => u.Z.setSelectedGuildJoinRequest(s, null)
                        })
                    })
                ]
            })
        ]
    });
};
