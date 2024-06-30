n(47120);
var i = n(237997), s = n(998502), a = n(576027), r = n(13838), l = n(812967), o = n(350085), c = n(910484), d = n(443952), u = n(266572), _ = n(177698), E = n(121826), h = n(567481), I = n(498164), m = n(111097), p = n(908711), g = n(197941), T = n(462414), S = n(662194), C = n(188861);
let N = {
        ...a.A,
        ...d.Z,
        ...u.Z,
        ...E.Z,
        ...h.Z,
        ...I.Z,
        ...m.Z,
        ...g.Z,
        ...S.Z,
        ...T.Z,
        ..._.Z,
        ...p.Z
    }, f = {
        ...r.Z,
        ...o.M,
        ...c.n
    };
t.Z = {
    server: l.Z,
    commands: N,
    events: f,
    stores: [i.Z],
    transports: [C.Z],
    registerTransportsForEmbeddedPlatform: function () {
        s.ZP.ensureModule('discord_rpc').then(() => {
            for (let e of [
                    n(178318).Z,
                    n(967351).Z
                ])
                l.Z.registerTransport(e);
        });
    }
};
