n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var i = n(866442),
    r = n(442837),
    o = n(481060),
    a = n(607070),
    s = n(605436),
    u = n(910693),
    d = n(434404),
    c = n(271383),
    f = n(430824),
    g = n(496675),
    Z = n(823379),
    b = n(981631),
    O = n(388032),
    m = n(895261);
function N(e, t) {
    var n, r;
    return (0, l.jsxs)('div', {
        className: m.roleRow,
        children: [
            'dot' === t
                ? (0, l.jsx)(o.FhE, {
                      className: m.roleDot,
                      color: null != (n = e.colorString) ? n : (0, i.Rf)(b.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(o.xko, {
                      className: m.roleDot,
                      color: null != (r = e.colorString) ? r : (0, i.Rf)(b.p6O)
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        m = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        h = (0, r.e7)([f.Z], () => f.Z.getGuild(t)),
        E = (0, r.e7)([f.Z], () => f.Z.getRoles(t)),
        j = (0, r.e7)([a.Z], () => a.Z.roleStyle),
        v = (0, u.sE)(t, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: P,
            isGuildMember: p,
            canManageRoles: y
        } = (0, r.cj)(
            [c.ZP, g.Z],
            () => {
                let n = c.ZP.getMember(t, e);
                return {
                    userRoles: null != n ? n.roles : [],
                    isGuildMember: null != n,
                    canManageRoles: null != h && g.Z.can(b.Plq.MANAGE_ROLES, h)
                };
            },
            [e, t, h]
        );
    if (__OVERLAY__ || null == P || null == h || !p) return null;
    let S = g.Z.getHighestRole(h),
        C = Object.values(E).filter((e) => !(0, s.pM)(h.id, e.id)),
        M =
            y && !m
                ? C.map((n) => {
                      let i = n.managed || !g.Z.isRoleHigher(h, S, n),
                          r = -1 !== P.indexOf(n.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                o.S89,
                                {
                                    id: n.id,
                                    label: () => N(n, j),
                                    disabled: i,
                                    action: () => {
                                        P.includes(n.id)
                                            ? (d.Z.updateMemberRoles(
                                                  t,
                                                  e,
                                                  P.filter((e) => e !== n.id),
                                                  [],
                                                  [n.id]
                                              ),
                                              v(u.jQ.REMOVE_ROLE))
                                            : (d.Z.updateMemberRoles(t, e, P.concat([n.id]), [n.id], []), v(u.jQ.ADD_ROLE));
                                    },
                                    checked: r
                                },
                                n.id
                            );
                  })
                : C.filter((e) => -1 !== P.indexOf(e.id)).map((e) =>
                      (0, s.pM)(h.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                o.sNh,
                                {
                                    id: e.id,
                                    label: () => N(e, j)
                                },
                                e.id
                            )
                  );
    return 0 === M.filter(Z.lm).length
        ? null
        : n
          ? M
          : (0, l.jsx)(o.sNh, {
                id: 'roles',
                label: O.NW.formatToPlainString(O.t.PCs0oq, { numRoles: M.length }),
                children: M
            });
}
