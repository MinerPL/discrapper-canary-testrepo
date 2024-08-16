n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var r = n(470079),
    i = n(392711),
    a = n(442837),
    s = n(881052),
    o = n(699682),
    l = n(81897),
    u = n(771845),
    c = n(621853),
    d = n(484459);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, _] = (0, a.Wu)([c.Z], () => [c.Z.getMutualGuilds(e), c.Z.isFetchingProfile(e)]),
        E = (0, l.Z)(),
        [f, h] = (0, r.useState)(null),
        p = t && null == f && !_ && null == n;
    (0, r.useEffect)(() => {
        if (!!p)
            (async () => {
                try {
                    await (0, d.Z)(e, void 0, {
                        withMutualGuilds: !0,
                        abortSignal: E
                    });
                } catch (e) {
                    h(new s.Hx(e));
                }
            })();
    }, [p, e, E]);
    let m = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        I = (0, r.useMemo)(() => {
            if (null == n) return null;
            if (n.length < 2) return n;
            let e = Object.fromEntries(m.map((e, t) => [e, t]));
            return (0, i.sortBy)(n, (t) => {
                var n;
                let { guild: r } = t;
                return null !== (n = e[r.id]) && void 0 !== n ? n : m.length;
            });
        }, [n, m]),
        T = (0, o.Z)(I);
    return {
        mutualGuilds: null != I ? I : T,
        isFetching: _
    };
}
