n(47120);
var i = n(237997),
    a = n(998502),
    s = n(576027),
    r = n(13838),
    l = n(812967),
    o = n(350085),
    c = n(910484),
    d = n(443952),
    u = n(266572),
    _ = n(177698),
    E = n(121826),
    h = n(753335),
    m = n(567481),
    I = n(498164),
    p = n(111097),
    g = n(908711),
    T = n(197941),
    f = n(462414),
    S = n(662194),
    C = n(188861);
let N = {
        ...s.A,
        ...d.Z,
        ...u.Z,
        ...E.Z,
        ...h.Z,
        ...m.Z,
        ...I.Z,
        ...p.Z,
        ...T.Z,
        ...S.Z,
        ...f.Z,
        ..._.Z,
        ...g.Z
    },
    A = {
        ...r.Z,
        ...o.M,
        ...c.n
    };
t.Z = {
    server: l.Z,
    commands: N,
    events: A,
    stores: [i.Z],
    transports: [C.Z],
    registerTransportsForEmbeddedPlatform: function () {
        a.ZP.ensureModule('discord_rpc').then(() => {
            for (let e of [n(178318).Z, n(967351).Z]) l.Z.registerTransport(e);
        });
    }
};
