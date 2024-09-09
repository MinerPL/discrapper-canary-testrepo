s(47120), s(653041);
var a = s(470079),
    n = s(442837),
    l = s(430824),
    o = s(496675),
    i = s(771845),
    r = s(99325),
    c = s(273387),
    d = s(981631);
t.Z = (e, t) => {
    let [s, u] = a.useState(!1),
        m = (0, n.e7)([c.Z], () => c.Z.getAdminGuildEntryIds(t)),
        C = (0, n.Wu)(
            [i.ZP, l.Z, o.Z],
            () => {
                let t = i.ZP.getFlattenedGuildIds(),
                    s = [];
                return (
                    t.forEach((t) => {
                        let a = l.Z.getGuild(t);
                        null != a && o.Z.can(d.Plq.ADMINISTRATOR, a) && a.id !== e && s.push(a);
                    }),
                    s
                );
            },
            [e]
        ),
        _ = a.useCallback(async () => {
            u(!0),
                await r._Q(
                    t,
                    C.map((e) => e.id)
                ),
                u(!1);
        }, [t, C]);
    a.useEffect(() => {
        _();
    }, []);
    let x = a.useMemo(() => C.filter((e) => !(null == m ? void 0 : m.has(e.id))), [C, m]);
    return {
        availableGuilds: x,
        addedGuilds: a.useMemo(() => C.filter((e) => (null == m ? void 0 : m.has(e.id))), [C, m]),
        loading: s
    };
};
