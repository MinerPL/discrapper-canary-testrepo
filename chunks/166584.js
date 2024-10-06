n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120),
    n(653041);
var r = n(735250),
    i = n(470079),
    a = n(772848),
    s = n(924826),
    o = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(749210),
    d = n(434404),
    _ = n(271383),
    E = n(430824),
    f = n(496675),
    h = n(259580),
    p = n(700785),
    I = n(785717),
    m = n(256226),
    T = n(314172),
    S = n(981631),
    g = n(689938),
    A = n(561145);
let N = (e) => {
    if (null == e) return 0;
    let { width: t } = e.getBoundingClientRect();
    return t > 0 ? t + 4 : 0;
};
function O(e) {
    let { user: t, currentUser: n, guild: l, guildMember: c, roles: d, highestRole: _, canManageRoles: E, onAddRole: f, onRemoveRole: O } = e,
        R = i.useRef({}),
        v = (e, t) => {
            null != t ? (R.current[e] = t) : delete R.current[e];
        },
        [C, L] = i.useState(d),
        [y, D] = i.useState(268),
        [b, M] = i.useState(!1),
        P = i.useRef(null),
        U = i.useRef(null),
        w = i.useRef(0);
    i.useLayoutEffect(() => {
        w.current = 0;
    }, [d]),
        i.useLayoutEffect(() => {
            if (b) return;
            let e = N(P.current),
                t = N(U.current),
                n = [],
                r = 268 - e - t;
            for (let e = 0; e < 2; e++) {
                let t = 1 === e ? r : 268;
                for (let e = 0, r = n.length; r < d.length; r++) {
                    let i = d[r],
                        a = R.current[i.id];
                    if (null == a) {
                        0 === w.current && n.push(i);
                        continue;
                    }
                    let s = Math.min(a.getBoundingClientRect().width, t);
                    if (e + s > t) break;
                    (e += s + 4), n.push(i);
                }
            }
            L(n.length === C.length ? C : n), D(r), w.current++;
        }, [d, C, b]);
    let x = i.useMemo(() => 'roles-'.concat((0, a.Z)()), []),
        G = (0, s.ZP)({
            id: x,
            isEnabled: !0,
            scrollToStart: S.Cyb,
            scrollToEnd: S.Cyb,
            wrap: !0
        }),
        k = d.length,
        B = 0 === k ? g.Z.Messages.ROLE_LIST_EMPTY : g.Z.Messages.ROLES_LIST.format({ numRoles: k }),
        F = (b ? d : C).map((e, i) => {
            var a;
            return (0, r.jsx)(
                m.Z,
                {
                    role: e,
                    guildId: l.id,
                    style: { maxWidth: b || i !== C.length - 1 ? 268 : y },
                    disableBorderColor: !0,
                    ref: (t) => v(e.id, t),
                    onRemove: () => O(e),
                    canRemove: E ? p.r6(l, n.id, _, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === n.id
                },
                e.id
            );
        }),
        { trackUserProfileAction: V } = (0, I.KZ)(),
        H = i.useCallback(() => {
            M(!0), V({ action: 'EXPAND_ROLES' });
        }, [V]),
        Z = i.useCallback(() => {
            M(!1), V({ action: 'COLLAPSE_ROLES' });
        }, [V]);
    return (0, r.jsx)(o.bG, {
        navigator: G,
        children: (0, r.jsx)(o.SJ, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, r.jsxs)('div', {
                    className: A.root,
                    'aria-label': B,
                    ref: t,
                    ...n,
                    children: [
                        F,
                        C.length < d.length
                            ? b
                                ? (0, r.jsx)(u.TooltipContainer, {
                                      text: g.Z.Messages.COLLAPSE_ROLES,
                                      children: (0, r.jsx)(u.Clickable, {
                                          onClick: Z,
                                          className: A.collapseButton,
                                          children: (0, r.jsx)(h.Z, {
                                              direction: h.Z.Directions.LEFT,
                                              width: 12,
                                              height: 12
                                          })
                                      })
                                  })
                                : (0, r.jsx)(u.TooltipContainer, {
                                      text: g.Z.Messages.VIEW_ALL_ROLES,
                                      children: (0, r.jsx)(u.Clickable, {
                                          innerRef: P,
                                          onClick: H,
                                          className: A.expandButton,
                                          children: (0, r.jsx)(u.Text, {
                                              variant: 'text-xs/medium',
                                              children: '+'.concat(d.length - C.length)
                                          })
                                      })
                                  })
                            : null,
                        E && null != c
                            ? (0, r.jsx)(T.Z, {
                                  buttonRef: U,
                                  guild: l,
                                  guildMember: c,
                                  numRoles: k,
                                  highestRole: _,
                                  onAddRole: f
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function R(e) {
    let { user: t, currentUser: n, guild: a } = e,
        { trackUserProfileAction: s } = (0, I.KZ)(),
        o = (0, l.e7)([_.ZP], () => _.ZP.getMember(a.id, t.id)),
        u = (0, l.e7)([E.Z], () => E.Z.getRoles(a.id)),
        h = null == o ? void 0 : o.roles,
        m = i.useMemo(
            () =>
                null == h || 0 === h.length
                    ? []
                    : Object.values(u)
                          .filter((e) => h.includes(e.id))
                          .sort((e, t) => {
                              var n, r;
                              let i = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                                  a = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                              return i && !a ? 1 : !i && a ? -1 : 0;
                          }),
            [u, h]
        ),
        T = p.e9(a, n.id),
        [g] = (0, l.Wu)([f.Z], () => [f.Z.can(S.Plq.MANAGE_ROLES, a), null != a ? f.Z.getGuildVersion(a.id) : null]),
        A = i.useCallback(
            (e) => {
                var n, r;
                s({ action: 'REMOVE_ROLE' });
                let i = null !== (r = null == h ? void 0 : h.filter((t) => t !== e.id)) && void 0 !== r ? r : [];
                (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? c.Z.unassignGuildRoleConnection(a.id, e.id) : d.Z.updateMemberRoles(a.id, t.id, i, [], [e.id]);
            },
            [h, a.id, t.id, s]
        ),
        N = i.useCallback(
            (e) => {
                s({ action: 'ADD_ROLE' });
                let n = null != h ? h : [];
                -1 === n.indexOf(e) && (n = n.concat([e])), d.Z.updateMemberRoles(a.id, t.id, n, [e], []);
            },
            [h, a.id, t.id, s]
        ),
        R = g && null != o;
    return 0 !== m.length || R
        ? (0, r.jsx)(O, {
              user: t,
              currentUser: n,
              guild: a,
              guildMember: o,
              roles: m,
              highestRole: T,
              canManageRoles: g,
              onAddRole: N,
              onRemoveRole: A
          })
        : null;
}
