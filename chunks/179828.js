s.d(n, {
    Z: function () {
        return T;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(772848),
    l = s(924826),
    r = s(91192),
    a = s(442837),
    c = s(749210),
    d = s(434404),
    u = s(271383),
    I = s(430824),
    _ = s(496675),
    E = s(700785),
    f = s(785717),
    x = s(256226),
    m = s(678738),
    Z = s(314172),
    p = s(981631),
    h = s(689938),
    S = s(646474);
function v(e) {
    let { user: n, currentUser: s, guild: a, guildMember: c, roles: d, highestRole: u, canManageRoles: I, onAddRole: _, onRemoveRole: f } = e,
        m = I && null != c,
        v = i.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        T = (0, l.ZP)({
            id: v,
            isEnabled: !0,
            scrollToStart: p.Cyb,
            scrollToEnd: p.Cyb,
            wrap: !0
        }),
        g = d.length,
        A = 0 === g ? h.Z.Messages.ROLE_LIST_EMPTY : h.Z.Messages.ROLES_LIST.format({ numRoles: g }),
        N = d.map((e) => {
            var i;
            return (0, t.jsx)(
                x.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => f(e),
                    canRemove: I ? E.r6(a, s.id, u, e) : (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null && n.id === s.id
                },
                e.id
            );
        });
    return (0, t.jsx)(r.bG, {
        navigator: T,
        children: (0, t.jsx)(r.SJ, {
            children: (e) => {
                let { ref: n, ...s } = e;
                return (0, t.jsxs)('div', {
                    className: S.root,
                    'aria-label': A,
                    ref: n,
                    ...s,
                    children: [
                        N,
                        m &&
                            (0, t.jsx)(Z.Z, {
                                guild: a,
                                guildMember: c,
                                numRoles: g,
                                highestRole: u,
                                onAddRole: _
                            })
                    ]
                });
            }
        })
    });
}
function T(e) {
    let { user: n, currentUser: s, guild: o, scrollIntoView: l } = e,
        { trackUserProfileAction: r } = (0, f.KZ)(),
        x = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
        Z = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)),
        S = null == x ? void 0 : x.roles,
        T = i.useMemo(
            () =>
                null == S || 0 === S.length
                    ? []
                    : Object.values(Z)
                          .filter((e) => S.includes(e.id))
                          .sort((e, n) => {
                              var s, t;
                              let i = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
                                  o = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) !== null;
                              return i && !o ? 1 : !i && o ? -1 : 0;
                          }),
            [Z, S]
        ),
        g = E.e9(o, s.id),
        [A] = (0, a.Wu)([_.Z], () => [_.Z.can(p.Plq.MANAGE_ROLES, o), null != o ? _.Z.getGuildVersion(o.id) : null]),
        N = i.useCallback(
            (e) => {
                var s, t;
                r({ action: 'REMOVE_ROLE' });
                let i = null !== (t = null == S ? void 0 : S.filter((n) => n !== e.id)) && void 0 !== t ? t : [];
                (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? c.Z.unassignGuildRoleConnection(o.id, e.id) : d.Z.updateMemberRoles(o.id, n.id, i, [], [e.id]);
            },
            [S, o.id, n.id, r]
        ),
        j = i.useCallback(
            (e) => {
                r({ action: 'ADD_ROLE' });
                let s = null != S ? S : [];
                -1 === s.indexOf(e) && (s = s.concat([e])), d.Z.updateMemberRoles(o.id, n.id, s, [e], []);
            },
            [S, o.id, n.id, r]
        ),
        R = A && null != x;
    return 0 !== T.length || R
        ? (0, t.jsx)(m.Z, {
              heading: h.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, t.jsx)(v, {
                  user: n,
                  currentUser: s,
                  guild: o,
                  guildMember: x,
                  roles: T,
                  highestRole: g,
                  canManageRoles: A,
                  onAddRole: j,
                  onRemoveRole: N
              })
          })
        : null;
}
