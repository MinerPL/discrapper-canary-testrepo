t.d(n, {
    Z: function () {
        return g;
    }
}), t(653041), t(47120);
var i = t(470079), a = t(512722), s = t.n(a), l = t(392711), o = t.n(l), r = t(442837), c = t(139387), d = t(895924), u = t(581364), I = t(592125), m = t(430824), _ = t(496675), N = t(594174), E = t(823379), T = t(905753), h = t(399860), p = t(981631);
function g(e, n, t) {
    let a = (0, r.e7)([T.Z], () => T.Z.getApplicationPermissions()), l = i.useMemo(() => function (e, n) {
            let t = { ...n }, i = (0, u.bD)(e), a = (0, h.rE)(i, d.Kw.CHANNEL), s = (0, h.rE)(e, d.Kw.ROLE);
            return !(s in t) && (t[s] = {
                id: e,
                permission: !0,
                type: d.Kw.ROLE
            }), !(a in t) && (t[a] = {
                id: i,
                permission: !0,
                type: d.Kw.CHANNEL
            }), t;
        }(e, null != a ? a : {}), [
            a,
            e
        ]), g = (0, r.e7)([T.Z], () => {
            var e;
            if (null == t)
                return;
            let n = T.Z.getCommand(t);
            return null !== (e = null == n ? void 0 : n.permissions) && void 0 !== e ? e : {};
        }, [t]), C = (0, r.e7)([T.Z], () => {
            var e;
            return null == t ? T.Z.getEditedApplication() : null === (e = T.Z.getEditedCommand()) || void 0 === e ? void 0 : e.permissions;
        }, [t]), f = null != t ? t : n, x = null != t ? g : l, O = i.useMemo(() => null != C ? C : { ...null != x ? x : {} }, [
            C,
            x
        ]), S = i.useMemo(() => Object.keys(O).length, [O]), A = i.useMemo(() => null == x || null == O ? null : !o().isEqual(x, O), [
            x,
            O
        ]);
    return i.useEffect(() => {
        if (f === n)
            A ? c.Z.startEditingCommandPermissions(f) : c.Z.stopEditingCommandPermissions(f);
    }, [
        n,
        A,
        f
    ]), {
        originalApplicationPermissions: l,
        originalCommandPermissions: g,
        editedTargetPermissions: function (e, n) {
            let t = (0, r.e7)([m.Z], () => m.Z.getGuild(e), [e]);
            s()(null != t, 'guild must be present to be editing its integration settings');
            let a = (0, r.e7)([_.Z], () => _.Z.getHighestRole(t), [t]), l = (0, r.e7)([N.default], () => {
                    var e;
                    return null === (e = N.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
                });
            s()(null != l, 'useComputePermissions: currentUserId must not be null');
            let o = l === t.ownerId, {
                    channelIds: c,
                    roleIds: T,
                    userIds: h
                } = i.useMemo(() => {
                    let e = [], t = [], i = [];
                    for (let a of Object.values(n))
                        a.type === d.Kw.CHANNEL ? e.push(a.id) : a.type === d.Kw.ROLE ? t.push(a.id) : a.type === d.Kw.USER && i.push(a.id);
                    return {
                        channelIds: e,
                        roleIds: t,
                        userIds: i
                    };
                }, [n]), g = (0, r.cj)([I.Z], () => Object.fromEntries(c.map(I.Z.getChannel).filter(E.lm).map(e => [
                    e.id,
                    e
                ])), [c]), C = (0, r.cj)([m.Z], () => Object.fromEntries(T.map(n => m.Z.getRole(e, n)).filter(E.lm).map(e => [
                    e.id,
                    e
                ])), [
                    T,
                    e
                ]), f = (0, r.cj)([N.default], () => Object.fromEntries(h.map(N.default.getUser).filter(E.lm).map(e => [
                    e.id,
                    e
                ])), [h]);
            return i.useMemo(() => {
                let e = t.id, i = (0, u.bD)(t.id), s = {};
                for (let [l, r] of Object.entries(n)) {
                    let n = !1, c = !1;
                    if (r.type === d.Kw.CHANNEL) {
                        let e = r.id === i, t = g[r.id];
                        n = e || _.Z.can(p.Plq.VIEW_CHANNEL, t), c = !0;
                    } else if (r.type === d.Kw.ROLE) {
                        let i = r.id === e, s = C[r.id];
                        n = i || null != s, c = o || i || _.Z.isRoleHigher(t, a, s);
                    } else if (r.type === d.Kw.USER) {
                        let e = f[r.id];
                        n = null != e, c = null != e && (o || _.Z.canManageUser(p.Plq.USE_APPLICATION_COMMANDS, e, t));
                    }
                    s[l] = {
                        ...r,
                        canRead: n,
                        canWrite: c
                    };
                }
                return s;
            }, [
                g,
                t,
                a,
                o,
                n,
                C,
                f
            ]);
        }(e, O),
        hasChanges: A,
        selectedPermissionCount: S
    };
}
