t.d(n, {
    U: function () {
        return N;
    }
}),
    t(653041),
    t(47120),
    t(733860);
var i = t(470079),
    a = t(512722),
    s = t.n(a),
    l = t(149765),
    r = t(442837),
    o = t(271383),
    d = t(430824),
    c = t(496675),
    u = t(594174),
    I = t(700785),
    m = t(282923),
    _ = t(981631);
function N(e) {
    let n = (0, r.e7)([d.Z], () => d.Z.getGuild(e));
    s()(null != n, 'guild must be present to be editing its integration settings');
    let t = (0, r.e7)([c.Z], () => c.Z.getHighestRole(n)),
        a = (0, r.Wu)([o.ZP], () => o.ZP.getMembers(e), [e]),
        N = (0, r.cj)([u.default], () => u.default.getUsers()),
        h = (0, r.Wu)([d.Z], () => Object.values(d.Z.getRoles(e)), [e]),
        g = i.useMemo(() => {
            let e = [];
            for (let t of a) {
                let i = N[t.userId];
                if (null == i || i.bot) continue;
                let a =
                    i.id !== n.ownerId &&
                    !I.BT({
                        permission: _.Plq.ADMINISTRATOR,
                        user: i,
                        context: n
                    }) &&
                    c.Z.canManageUser(_.Plq.USE_APPLICATION_COMMANDS, i, n);
                e.push({
                    id: i.id,
                    canManage: a,
                    nick: t.nick,
                    username: i.username
                });
            }
            return e;
        }, [n, a, N]),
        p = (e) => {
            var n;
            return e.managed && (null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id) != null;
        },
        f = i.useMemo(() => {
            let i = [];
            for (let a of h) {
                if (p(a)) continue;
                let s = !l.e$(a.permissions, _.Plq.ADMINISTRATOR) && c.Z.isRoleHigher(n, t, a),
                    r = {
                        id: a.id,
                        name: a.name,
                        canManage: s
                    };
                a.id === e ? i.unshift(r) : i.push(r);
            }
            return i;
        }, [h, e, n, t]),
        [C, O] = i.useState(''),
        x = i.useMemo(() => {
            let n = (function (e) {
                    return e.startsWith('@') ? e.substr(1) : e;
                })(C),
                t = C.startsWith('@') ? f.filter((n) => n.id === e) : f,
                i = (0, m.B)(g, E, n);
            return {
                members: i,
                roles: (0, m.B)(t, T, n)
            };
        }, [e, g, C, f]);
    return {
        query: C,
        results: x,
        setQuery: O,
        unfilteredCount: x.members.length + x.roles.length
    };
}
function E(e) {
    let n = [e.username];
    return (
        (null == e ? void 0 : e.nick) != null && n.push(e.nick),
        {
            id: e.id,
            names: n
        }
    );
}
function T(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
