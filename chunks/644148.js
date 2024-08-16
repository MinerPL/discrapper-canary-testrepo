a.d(t, {
    BT: function () {
        return I;
    },
    KO: function () {
        return A;
    },
    Kw: function () {
        return C;
    },
    OU: function () {
        return E;
    },
    bI: function () {
        return w;
    },
    jp: function () {
        return M;
    }
}),
    a(653041),
    a(47120);
var n = a(470079),
    l = a(512722),
    s = a.n(l),
    r = a(442837),
    i = a(461745),
    o = a(971628),
    c = a(695346),
    d = a(314897),
    u = a(592125),
    m = a(650774),
    h = a(271383),
    S = a(430824),
    x = a(699516),
    T = a(771845),
    g = a(594174),
    f = a(709054),
    v = a(51144),
    _ = a(995923),
    b = a(71080);
function E(e) {
    let t;
    return (
        e.rowType === b.aC.USER
            ? (t = {
                  type: i.Fj.USER,
                  label: e.name,
                  avatar: e.avatarURL
              })
            : e.rowType === b.aC.GUILD &&
              (t = {
                  type: i.Fj.GUILD,
                  label: e.name,
                  guild: e.guild
              }),
        s()(null != t, 'RowData must be a guild or a user'),
        {
            display: t,
            row: e
        }
    );
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0;
    return (0, r.Wu)(
        [S.Z, m.Z],
        () => {
            let a = [];
            return (
                e.forEach((e) => {
                    var n;
                    let l = S.Z.getGuild(e),
                        s = null !== (n = m.Z.getMemberCount(e)) && void 0 !== n ? n : _.UK;
                    null != l && s < _.UK && (null == t ? void 0 : t(l.name)) && a.push(l);
                }),
                a
            );
        },
        [e, t]
    );
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
        a = C(e, t);
    return n.useMemo(
        () =>
            a.map((e) => ({
                rowType: b.aC.GUILD,
                name: e.name,
                id: e.id,
                disabled: !1,
                guild: e,
                key: ''.concat(b.aC.GUILD, ':').concat(e.id)
            })),
        [a]
    );
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e
        .filter((e) => null != e && (null == t ? void 0 : t(e.username)))
        .map((e) => ({
            rowType: b.aC.USER,
            name: v.ZP.getUserTag(e),
            id: e.id,
            disabled: a && x.Z.isFriend(e.id),
            avatarURL: e.getAvatarURL(null, 24),
            key: ''.concat(b.aC.USER, ':').concat(e.id)
        }));
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0,
        a = arguments.length > 2 ? arguments[2] : void 0,
        l = (0, r.e7)([T.ZP], () => T.ZP.getFlattenedGuildIds()),
        s = R(l, t),
        i = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0,
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = arguments.length > 2 ? arguments[2] : void 0,
                l = (0, r.Wu)([x.Z], () => x.Z.getFriendIDs()),
                s = C(t),
                i = (0, r.e7)([d.default], () => d.default.getId()),
                o = (0, r.e7)([h.ZP], () => h.ZP.getMemberVersion()),
                c = n.useMemo(() => {
                    let e = new Set(l);
                    return (
                        s.forEach((t) => {
                            h.ZP.getMemberIds(t.id).forEach((t) => {
                                !e.has(t) && !x.Z.isBlocked(t) && e.add(t);
                            });
                        }),
                        e
                    );
                }, [s, l, o]);
            return p(
                (0, r.Wu)([g.default], () => [...c].map((e) => g.default.getUser(e)), [c])
                    .filter((e) => null != e && !e.bot && e.id !== i)
                    .sort((e, t) => {
                        let a = u.Z.getChannel(u.Z.getDMFromUserId(null == e ? void 0 : e.id)),
                            n = u.Z.getChannel(u.Z.getDMFromUserId(null == t ? void 0 : t.id));
                        return f.default.compare(null == a ? void 0 : a.lastMessageId, null == n ? void 0 : n.lastMessageId) > 0 ? -1 : 1;
                    }),
                e,
                a
            );
        })(t, l, a);
    return [i, e ? [] : s];
}
function M() {
    let e = c.MI.useSetting(),
        t = c.GA.useSetting(),
        a = {},
        n = {};
    return (
        R(e).forEach((e) => {
            a[(0, o.G)(e)] = E(e);
        }),
        t.length > 0 &&
            p(t.map((e) => g.default.getUser(e)).filter((e) => null != e)).map((e) => {
                n[(0, o.G)(e)] = E(e);
            }),
        {
            [b.aC.GUILD]: a,
            [b.aC.USER]: n
        }
    );
}
function A(e) {
    let t = d.default.getId(),
        a = e;
    return (
        a.length > _.Ly && (a = a.slice(0, _.Ly)),
        (a = a.filter((e) => {
            var a;
            return h.ZP.isMember(e, t) && (null !== (a = m.Z.getMemberCount(e)) && void 0 !== a ? a : _.UK) < _.UK;
        }))
    );
}
function w(e) {
    let t = e;
    return t.length > _.uv && (t = t.slice(0, _.uv)), t;
}
