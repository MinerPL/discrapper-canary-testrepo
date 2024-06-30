n.d(t, {
    Z: function () {
        return O;
    }
});
var s = n(735250), a = n(470079), i = n(512722), r = n.n(i), l = n(442837), o = n(481060), c = n(367907), d = n(605436), u = n(228643), _ = n(496675), E = n(626135), I = n(823379), T = n(243730), m = n(946724), N = n(999382), S = n(130341), h = n(981975), g = n(660962), C = n(442182), x = n(322816), p = n(266665), R = n(203377), f = n(981631), L = n(280196);
function O(e) {
    let t, {
            editRoleId: n,
            setEditRoleId: i,
            selectedSection: O,
            setSelectedSection: A
        } = e, M = (0, l.e7)([m.Z], () => m.Z.guild, []);
    r()(null != M, 'guildId cannot be null here');
    let {
        role: v,
        permissionSearchQuery: D
    } = (0, l.cj)([m.Z], () => ({
        role: m.Z.getRole(n),
        permissionSearchQuery: m.Z.getPermissionSearchQuery()
    }), [n]);
    a.useEffect(() => {
        null == v && i(null);
    }, [
        v,
        i
    ]);
    let j = (0, l.e7)([_.Z], () => _.Z.getHighestRole(M), [M]), Z = (0, l.e7)([_.Z], () => !_.Z.isRoleHigher(M, j, v)), b = a.useRef(null), U = (0, l.e7)([N.Z], () => N.Z.getProps().integrations);
    if (a.useEffect(() => {
            var e, t;
            let s = (0, S.UT)(O), a = null !== (t = null === (e = T.Z.getRoleMemberCount(M.id)) || void 0 === e ? void 0 : e[n]) && void 0 !== t ? t : 0;
            E.default.track(f.rMx.ROLE_PAGE_VIEWED, {
                tab_opened: s,
                is_everyone: (0, d.pM)(M.id, n),
                role_id: n,
                role_mentionable: null == v ? void 0 : v.mentionable,
                role_hoist: null == v ? void 0 : v.hoist,
                role_permissions: null == v ? void 0 : v.permissions.toString(),
                role_num_members: a,
                ...(0, c.hH)(M.id)
            });
        }, [
            O,
            M.id,
            null == v ? void 0 : v.id
        ]), a.useEffect(() => {
            if ((null == v ? void 0 : v.id) != null)
                (0, u.sE)(M.id, v.id);
        }, [
            M.id,
            null == v ? void 0 : v.id
        ]), null == v)
        return null;
    switch (O) {
    case R.ZI.DISPLAY:
        t = (0, s.jsx)(g.ZP, {
            guild: M,
            role: v,
            locked: Z,
            highestRole: j,
            setSelectedSection: A
        });
        break;
    case R.ZI.PERMISSIONS:
        t = (0, s.jsx)(x.ZP, {
            guild: M,
            role: v,
            locked: Z,
            setSelectedSection: A,
            initialSearchQuery: D
        });
        break;
    case R.ZI.VERIFICATIONS:
        t = (0, s.jsx)(h.Z, {
            guild: M,
            role: v,
            locked: Z,
            setSelectedSection: A,
            integrations: null != U ? U : void 0
        });
        break;
    case R.ZI.MEMBERS:
        t = (0, s.jsx)(C.ZP, {
            guild: M,
            role: v,
            locked: Z,
            setSelectedSection: A
        });
        break;
    default:
        (0, I.vE)(O);
    }
    return (0, s.jsxs)(o.FormSection, {
        className: L.page,
        children: [
            (0, s.jsx)(p.Z, {
                guild: M,
                currentRoleId: n,
                setCurrentRoleId: i,
                setSelectedSection: A
            }),
            (0, s.jsx)('div', {
                className: L.contentContainer,
                ref: b,
                children: (0, s.jsx)(o.FocusRingScope, {
                    containerRef: b,
                    children: t
                })
            })
        ]
    });
}
