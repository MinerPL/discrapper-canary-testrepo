i.d(n, {
    Z: function () {
        return g;
    }
}), i(47120);
var t = i(735250), o = i(470079), s = i(772848), l = i(924826), a = i(91192), r = i(442837), c = i(749210), d = i(434404), u = i(271383), I = i(430824), E = i(496675), _ = i(700785), f = i(785717), Z = i(256226), m = i(678738), S = i(314172), v = i(981631), x = i(689938), h = i(500478);
function N(e) {
    let {
            user: n,
            currentUser: i,
            guild: c,
            guildMember: d,
            userRoles: u,
            highestRole: E,
            canManageRoles: f,
            onAddRole: m,
            onRemoveRole: N
        } = e, g = (0, r.e7)([I.Z], () => I.Z.getRoles(c.id)), C = o.useMemo(() => Object.values(g).filter(e => u.includes(e.id)).sort((e, n) => {
            var i, t;
            let o = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null, s = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) !== null;
            return o && !s ? 1 : !o && s ? -1 : 0;
        }), [
            g,
            u
        ]), p = f && null != d, R = o.useMemo(() => 'roles-'.concat((0, s.Z)()), []), T = (0, l.ZP)({
            id: R,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0
        }), M = C.length, j = 0 === M ? x.Z.Messages.ROLE_LIST_EMPTY : x.Z.Messages.ROLES_LIST.format({ numRoles: M }), A = C.map(e => {
            var o;
            return (0, t.jsx)(Z.Z, {
                role: e,
                guildId: c.id,
                disableBorderColor: !0,
                onRemove: () => N(e),
                canRemove: f ? _.r6(c, i.id, E, e) : (null === (o = e.tags) || void 0 === o ? void 0 : o.guild_connections) === null && n.id === i.id
            }, e.id);
        });
    return (0, t.jsx)(a.bG, {
        navigator: T,
        children: (0, t.jsx)(a.SJ, {
            children: e => {
                let {
                    ref: n,
                    ...i
                } = e;
                return (0, t.jsxs)('div', {
                    className: h.root,
                    'aria-label': j,
                    ref: n,
                    ...i,
                    children: [
                        A,
                        p && (0, t.jsx)(S.Z, {
                            variant: C.length > 0 ? 'icon' : 'text',
                            guild: c,
                            guildMember: d,
                            highestRole: E,
                            onAddRole: m
                        })
                    ]
                });
            }
        })
    });
}
function g(e) {
    let {
            user: n,
            currentUser: i,
            guild: s,
            scrollIntoView: l
        } = e, {trackUserProfileAction: a} = (0, f.KZ)(), I = (0, r.e7)([u.ZP], () => u.ZP.getMember(s.id, n.id)), Z = null == I ? void 0 : I.roles, S = null == Z || 0 === Z.length, h = _.e9(s, i.id), [g] = (0, r.Wu)([E.Z], () => [
            E.Z.can(v.Plq.MANAGE_ROLES, s),
            null != s ? E.Z.getGuildVersion(s.id) : null
        ]), C = o.useCallback(e => {
            var i, t;
            a({ action: 'REMOVE_ROLE' });
            let o = null !== (t = null == Z ? void 0 : Z.filter(n => n !== e.id)) && void 0 !== t ? t : [];
            (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? c.Z.unassignGuildRoleConnection(s.id, e.id) : d.Z.updateMemberRoles(s.id, n.id, o, [], [e.id]);
        }, [
            Z,
            s.id,
            n.id,
            a
        ]), p = o.useCallback(e => {
            a({ action: 'ADD_ROLE' });
            let i = null != Z ? Z : [];
            -1 === i.indexOf(e) && (i = i.concat([e])), d.Z.updateMemberRoles(s.id, n.id, i, [e], []);
        }, [
            Z,
            s.id,
            n.id,
            a
        ]);
    return S && !g ? null : (0, t.jsx)(m.Z, {
        title: x.Z.Messages.ROLES,
        scrollIntoView: l,
        children: (0, t.jsx)(N, {
            user: n,
            currentUser: i,
            guild: s,
            guildMember: I,
            userRoles: null != Z ? Z : [],
            highestRole: h,
            canManageRoles: g,
            onAddRole: p,
            onRemoveRole: C
        })
    });
}
