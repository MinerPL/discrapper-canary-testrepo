a(47120);
var t = a(470079),
    c = a(442837),
    i = a(889161),
    o = a(984933),
    r = a(430824),
    l = a(496675),
    d = a(981631);
n.Z = (e, n) => {
    let a = (0, c.e7)([r.Z], () => r.Z.getGuild(e), [e]),
        { canCreateGuildEvent: s } = (0, i.XJ)(a),
        u = (0, c.e7)([o.ZP], () => o.ZP.getChannels(e)[o.Zb], [e]),
        _ = t.useMemo(
            () =>
                null != n
                    ? u.filter((e) => {
                          let { channel: a } = e;
                          return a.type === n;
                      })
                    : u,
            [u, n]
        );
    return (0, c.e7)(
        [l.Z],
        () => {
            if (l.Z.can(d.Plq.ADMINISTRATOR, a) || s) return !0;
            for (let { channel: e } of _) {
                let { canCreateGuildEvent: n } = (0, i.Gw)(e);
                if (n) return !0;
            }
            return !1;
        },
        [_, a, s]
    );
};
