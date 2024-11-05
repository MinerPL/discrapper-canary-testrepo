t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(653041),
    t(47120);
var i = t(192379),
    l = t(512722),
    r = t.n(l),
    a = t(392711),
    o = t.n(a),
    s = t(442837),
    d = t(139387),
    c = t(895924),
    u = t(581364),
    m = t(592125),
    h = t(430824),
    p = t(496675),
    g = t(594174),
    f = t(823379),
    x = t(905753),
    b = t(399860),
    v = t(981631);
function C(e, n, t) {
    let l = (0, s.e7)([x.Z], () => x.Z.getApplicationPermissions()),
        a = i.useMemo(
            () =>
                (function (e, n) {
                    let t = { ...n },
                        i = (0, u.bD)(e),
                        l = (0, b.rE)(i, c.Kw.CHANNEL),
                        r = (0, b.rE)(e, c.Kw.ROLE);
                    return (
                        !(r in t) &&
                            (t[r] = {
                                id: e,
                                permission: !0,
                                type: c.Kw.ROLE
                            }),
                        !(l in t) &&
                            (t[l] = {
                                id: i,
                                permission: !0,
                                type: c.Kw.CHANNEL
                            }),
                        t
                    );
                })(e, null != l ? l : {}),
            [l, e]
        ),
        C = (0, s.e7)(
            [x.Z],
            () => {
                var e;
                if (null == t) return;
                let n = x.Z.getCommand(t);
                return null !== (e = null == n ? void 0 : n.permissions) && void 0 !== e ? e : {};
            },
            [t]
        ),
        I = (0, s.e7)(
            [x.Z],
            () => {
                var e;
                return null == t ? x.Z.getEditedApplication() : null === (e = x.Z.getEditedCommand()) || void 0 === e ? void 0 : e.permissions;
            },
            [t]
        ),
        N = null != t ? t : n,
        T = null != t ? C : a,
        _ = i.useMemo(() => (null != I ? I : { ...(null != T ? T : {}) }), [I, T]),
        j = i.useMemo(() => Object.keys(_).length, [_]),
        S = i.useMemo(() => (null == T || null == _ ? null : !o().isEqual(T, _)), [T, _]);
    return (
        i.useEffect(() => {
            if (N === n) S ? d.Z.startEditingCommandPermissions(N) : d.Z.stopEditingCommandPermissions(N);
        }, [n, S, N]),
        {
            originalApplicationPermissions: a,
            originalCommandPermissions: C,
            editedTargetPermissions: (function (e, n) {
                let t = (0, s.e7)([h.Z], () => h.Z.getGuild(e), [e]);
                r()(null != t, 'guild must be present to be editing its integration settings');
                let l = (0, s.e7)([p.Z], () => p.Z.getHighestRole(t), [t]),
                    a = (0, s.e7)([g.default], () => {
                        var e;
                        return null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
                    });
                r()(null != a, 'useComputePermissions: currentUserId must not be null');
                let o = a === t.ownerId,
                    {
                        channelIds: d,
                        roleIds: x,
                        userIds: b
                    } = i.useMemo(() => {
                        let e = [],
                            t = [],
                            i = [];
                        for (let l of Object.values(n)) l.type === c.Kw.CHANNEL ? e.push(l.id) : l.type === c.Kw.ROLE ? t.push(l.id) : l.type === c.Kw.USER && i.push(l.id);
                        return {
                            channelIds: e,
                            roleIds: t,
                            userIds: i
                        };
                    }, [n]),
                    C = (0, s.cj)(
                        [m.Z],
                        () =>
                            Object.fromEntries(
                                d
                                    .map(m.Z.getChannel)
                                    .filter(f.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [d]
                    ),
                    I = (0, s.cj)(
                        [h.Z],
                        () =>
                            Object.fromEntries(
                                x
                                    .map((n) => h.Z.getRole(e, n))
                                    .filter(f.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [x, e]
                    ),
                    N = (0, s.cj)(
                        [g.default],
                        () =>
                            Object.fromEntries(
                                b
                                    .map(g.default.getUser)
                                    .filter(f.lm)
                                    .map((e) => [e.id, e])
                            ),
                        [b]
                    );
                return i.useMemo(() => {
                    let e = t.id,
                        i = (0, u.bD)(t.id),
                        r = {};
                    for (let [a, s] of Object.entries(n)) {
                        let n = !1,
                            d = !1;
                        if (s.type === c.Kw.CHANNEL) {
                            let e = s.id === i,
                                t = C[s.id];
                            (n = e || p.Z.can(v.Plq.VIEW_CHANNEL, t)), (d = !0);
                        } else if (s.type === c.Kw.ROLE) {
                            let i = s.id === e,
                                r = I[s.id];
                            (n = i || null != r), (d = o || i || p.Z.isRoleHigher(t, l, r));
                        } else if (s.type === c.Kw.USER) {
                            let e = N[s.id];
                            (n = null != e), (d = null != e && (o || p.Z.canManageUser(v.Plq.USE_APPLICATION_COMMANDS, e, t)));
                        }
                        r[a] = {
                            ...s,
                            canRead: n,
                            canWrite: d
                        };
                    }
                    return r;
                }, [C, t, l, o, n, I, N]);
            })(e, _),
            hasChanges: S,
            selectedPermissionCount: j
        }
    );
}
