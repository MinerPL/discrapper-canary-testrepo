n.d(t, {
    Z: function () {
        return R;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(512722), o = n.n(a), s = n(772848), l = n(924826), u = n(91192), c = n(442837), d = n(481060), _ = n(749210), E = n(112724), f = n(434404), h = n(271383), p = n(430824), m = n(496675), I = n(700785), T = n(785717), g = n(256226), S = n(314172), A = n(981631), N = n(689938), v = n(446384);
let O = (0, E.Z)(function (e) {
    let {
        user: t,
        currentUser: n,
        guild: a,
        guildMember: _,
        userRoles: E,
        highestRole: f,
        canManageRoles: h,
        width: m,
        onAddRole: T,
        onRemoveRole: O,
        onOpenProfile: R
    } = e;
    o()(null != m, 'Unexpected null width');
    let C = i.useRef({}), y = (e, t) => {
            null != t ? C.current[e] = t : delete C.current[e];
        }, D = (0, c.e7)([p.Z], () => p.Z.getRoles(a.id)), [L, b] = i.useState(null), M = i.useMemo(() => {
            let e = Object.values(D).filter(e => E.includes(e.id)).sort((e, t) => {
                var n, r;
                let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null, a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                return i && !a ? 1 : !i && a ? -1 : 0;
            });
            return null != L ? e.slice(0, L) : e;
        }, [
            D,
            E,
            L
        ]), [P, U] = i.useState(m), w = E.length > M.length, x = h && null != _, G = i.useRef(null), k = i.useRef(null);
    i.useLayoutEffect(() => {
        var e, t, n, r, i, a, o, s;
        let l = null !== (i = null === (t = G.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.width) && void 0 !== i ? i : 0, u = null !== (a = null === (r = k.current) || void 0 === r ? void 0 : null === (n = r.getBoundingClientRect()) || void 0 === n ? void 0 : n.width) && void 0 !== a ? a : 0, c = m - (l > 0 ? l + 4 : 0) - (u > 0 ? u + 4 : 0), d = 0;
        for (let e = 0; e < 2; e++) {
            let t = 1 === e, n = 0;
            for (let e = d; e < M.length; e++) {
                let r = M[e], i = C.current[r.id];
                if (null == i)
                    continue;
                let a = null !== (s = null === (o = i.getBoundingClientRect()) || void 0 === o ? void 0 : o.width) && void 0 !== s ? s : 0;
                if (n > 0 && !t && n + a > m || n > 0 && t && n + a > c)
                    break;
                n += a + 4, d++;
            }
        }
        b(d === E.length ? null : d), U(c);
    }, [
        m,
        M,
        E
    ]);
    let B = i.useMemo(() => 'roles-'.concat((0, s.Z)()), []), F = (0, l.ZP)({
            id: B,
            isEnabled: !0,
            scrollToStart: A.Cyb,
            scrollToEnd: A.Cyb,
            wrap: !0
        }), V = 0 === E.length ? N.Z.Messages.ROLE_LIST_EMPTY : N.Z.Messages.ROLES_LIST.format({ numRoles: E.length }), H = M.map((e, i) => {
            var o;
            return (0, r.jsx)(g.Z, {
                role: e,
                guildId: a.id,
                style: { maxWidth: i === M.length - 1 ? P : m },
                disableBorderColor: !0,
                ref: t => y(e.id, t),
                onRemove: () => O(e),
                canRemove: h ? I.r6(a, n.id, f, e) : (null === (o = e.tags) || void 0 === o ? void 0 : o.guild_connections) === null && t.id === n.id
            }, e.id);
        });
    return (0, r.jsx)(u.bG, {
        navigator: F,
        children: (0, r.jsx)(u.SJ, {
            children: e => {
                let {
                    ref: t,
                    ...n
                } = e;
                return (0, r.jsxs)('div', {
                    className: v.root,
                    'aria-label': V,
                    ref: t,
                    ...n,
                    children: [
                        H,
                        w && (0, r.jsx)(d.TooltipContainer, {
                            text: N.Z.Messages.VIEW_ALL_ROLES,
                            children: (0, r.jsx)(d.Clickable, {
                                innerRef: G,
                                onClick: R,
                                className: v.showMoreButton,
                                children: (0, r.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    children: '+'.concat(E.length - M.length)
                                })
                            })
                        }),
                        x && (0, r.jsx)(S.Z, {
                            variant: E.length > 0 ? 'icon' : 'text',
                            buttonRef: k,
                            guild: a,
                            guildMember: _,
                            highestRole: f,
                            onAddRole: T
                        })
                    ]
                });
            }
        })
    });
});
function R(e) {
    let {
            user: t,
            currentUser: n,
            guild: a,
            onOpenProfile: o
        } = e, {trackUserProfileAction: s} = (0, T.KZ)(), l = (0, c.e7)([h.ZP], () => h.ZP.getMember(a.id, t.id)), u = null == l ? void 0 : l.roles, d = null == u || 0 === u.length, E = I.e9(a, n.id), [p] = (0, c.Wu)([m.Z], () => [
            m.Z.can(A.Plq.MANAGE_ROLES, a),
            null != a ? m.Z.getGuildVersion(a.id) : null
        ]), g = i.useCallback(e => {
            var n, r;
            s({ action: 'REMOVE_ROLE' });
            let i = null !== (r = null == u ? void 0 : u.filter(t => t !== e.id)) && void 0 !== r ? r : [];
            (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? _.Z.unassignGuildRoleConnection(a.id, e.id) : f.Z.updateMemberRoles(a.id, t.id, i, [], [e.id]);
        }, [
            u,
            a.id,
            t.id,
            s
        ]), S = i.useCallback(e => {
            s({ action: 'ADD_ROLE' });
            let n = null != u ? u : [];
            -1 === n.indexOf(e) && (n = n.concat([e])), f.Z.updateMemberRoles(a.id, t.id, n, [e], []);
        }, [
            u,
            a.id,
            t.id,
            s
        ]);
    return d && !p ? null : (0, r.jsx)('div', {
        children: (0, r.jsx)(O, {
            user: t,
            currentUser: n,
            guild: a,
            guildMember: l,
            userRoles: null != u ? u : [],
            highestRole: E,
            canManageRoles: p,
            onAddRole: S,
            onRemoveRole: g,
            onOpenProfile: o
        })
    });
}
