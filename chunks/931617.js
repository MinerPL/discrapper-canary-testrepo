t.d(n, {
    Z: function () {
        return m;
    }
});
var l = t(735250);
t(470079);
var i = t(866442), a = t(442837), r = t(481060), u = t(607070), s = t(605436), d = t(910693), o = t(434404), c = t(271383), Z = t(430824), E = t(496675), M = t(823379), f = t(981631), _ = t(689938), g = t(876103);
function I(e, n) {
    var t, a;
    return (0, l.jsxs)('div', {
        className: g.roleRow,
        children: [
            'dot' === n ? (0, l.jsx)(r.RoleDot, {
                className: g.roleDot,
                color: null !== (t = e.colorString) && void 0 !== t ? t : (0, i.Rf)(f.p6O),
                background: !1,
                tooltip: !1
            }) : (0, l.jsx)(r.RoleCircle, {
                className: g.roleDot,
                color: null !== (a = e.colorString) && void 0 !== a ? a : (0, i.Rf)(f.p6O)
            }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function m(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, g = (0, a.e7)([Z.Z], () => Z.Z.getGuild(n)), m = (0, a.e7)([Z.Z], () => Z.Z.getRoles(n)), R = (0, a.e7)([u.Z], () => u.Z.roleStyle), N = (0, d.sE)(n, {
            location: i,
            targetUserId: e
        }), {
            userRoles: C,
            isGuildMember: T,
            canManageRoles: A
        } = (0, a.cj)([
            c.ZP,
            E.Z
        ], () => {
            let t = c.ZP.getMember(n, e);
            return {
                userRoles: null != t ? t.roles : [],
                isGuildMember: null != t,
                canManageRoles: null != g && E.Z.can(f.Plq.MANAGE_ROLES, g)
            };
        }, [
            e,
            n,
            g
        ]);
    if (__OVERLAY__ || null == C || null == g || !T)
        return null;
    let v = E.Z.getHighestRole(g), O = Object.values(m).filter(e => !(0, s.pM)(g.id, e.id)), x = A ? O.map(t => {
            let i = t.managed || !E.Z.isRoleHigher(g, v, t), a = -1 !== C.indexOf(t.id);
            return i && !a ? null : (0, l.jsx)(r.MenuCheckboxItem, {
                id: t.id,
                label: () => I(t, R),
                disabled: i,
                action: () => {
                    var l;
                    return l = t, void (C.includes(l.id) ? (o.Z.updateMemberRoles(n, e, C.filter(e => e !== l.id), [], [l.id]), N(d.jQ.REMOVE_ROLE)) : (o.Z.updateMemberRoles(n, e, C.concat([l.id]), [l.id], []), N(d.jQ.ADD_ROLE)));
                },
                checked: a
            }, t.id);
        }) : O.filter(e => -1 !== C.indexOf(e.id)).map(e => (0, s.pM)(g.id, e.id) ? null : (0, l.jsx)(r.MenuItem, {
            id: e.id,
            label: () => I(e, R)
        }, e.id));
    return 0 === x.filter(M.lm).length ? null : t ? x : (0, l.jsx)(r.MenuItem, {
        id: 'roles',
        label: _.Z.Messages.ROLES_LIST.format({ numRoles: x.length }),
        children: x
    });
}
